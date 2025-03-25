import { getParentPage } from "./utils/getParentPage";
import { hasAlphaNumericText } from "./utils/hasAlphaNumericText";

export function getRtlInstance(instance: InstanceNode): InstanceNode | null {
  const RTL_SUFFIX = "-RTL";
  const mainComponent = instance.mainComponent;

  if (!mainComponent) {
    return errorNotification("Unable to find main component of", instance);
  }

  const parentComponentSet = mainComponent.parent;
  const mainComponentName = mainComponent.name;
  
  // First try to find RTL component on the same page as the main component
  const parentPage = getParentPage(mainComponent);
  if (!parentPage) {
    return errorNotification("Unable to find parent page for", instance);
  }

  // Handle component inside component set
  if (parentComponentSet?.type === "COMPONENT_SET") {
    // First search in the current page
    let rtlSet = findComponentSetInPage(parentPage, parentComponentSet.name + RTL_SUFFIX);
    
    // If not found, search in all other pages
    if (!rtlSet) {
      rtlSet = findComponentSetInAllPages(parentComponentSet.name + RTL_SUFFIX, parentPage);
    }

    if (!rtlSet) {
      return errorNotification(
        "Unable to find RTL component set for",
        instance
      );
    }

    const rtlComponent = rtlSet.findChild(
      (node) => node.type === "COMPONENT" && node.name === mainComponentName
    ) as ComponentNode | null;

    if (!rtlComponent) {
      return errorNotification(
        "Unable to find matching RTL component in set for",
        instance
      );
    }

    return rtlComponent.createInstance();
  }

  // Handle standalone component
  // First search in the current page
  let rtlComponent = findComponentInPage(parentPage, mainComponentName + RTL_SUFFIX);
  
  // If not found, search in all other pages
  if (!rtlComponent) {
    rtlComponent = findComponentInAllPages(mainComponentName + RTL_SUFFIX, parentPage);
  }

  if (!rtlComponent) {
    return errorNotification(
      "Unable to find RTL version of component for",
      instance
    );
  }

  return rtlComponent.createInstance();
}

// Helper function to find component set in a specific page
function findComponentSetInPage(page: PageNode, name: string): ComponentSetNode | null {
  return page.findOne(
    (node) => node.type === "COMPONENT_SET" && node.name === name
  ) as ComponentSetNode | null;
}

// Helper function to find component in a specific page
function findComponentInPage(page: PageNode, name: string): ComponentNode | null {
  return page.findOne(
    (node) => node.type === "COMPONENT" && node.name === name
  ) as ComponentNode | null;
}

// Helper function to search all pages for a component set
function findComponentSetInAllPages(name: string, currentPage: PageNode): ComponentSetNode | null {
  // Search through all pages except the current one
  for (const page of figma.root.children) {
    if (page.id !== currentPage.id) {
      const found = findComponentSetInPage(page, name);
      if (found) {
        // Notify user where the component was found
        figma.notify(`Found RTL component set "${name}" in page "${page.name}"`, { timeout: 3000 });
        return found;
      }
    }
  }
  return null;
}

// Helper function to search all pages for a component
function findComponentInAllPages(name: string, currentPage: PageNode): ComponentNode | null {
  // Search through all pages except the current one
  for (const page of figma.root.children) {
    if (page.id !== currentPage.id) {
      const found = findComponentInPage(page, name);
      if (found) {
        // Notify user where the component was found
        figma.notify(`Found RTL component "${name}" in page "${page.name}"`, { timeout: 3000 });
        return found;
      }
    }
  }
  return null;
}

function errorNotification(errorType: string, element: InstanceNode): null {
  const errorMessage = `${errorType} ${element.name}`;
  figma.notify(errorMessage, {
    error: true,
    timeout: 5000,
    button: {
      text: "Go to element",
      action: () => {
        figma.currentPage.selection = [element];
        figma.viewport.scrollAndZoomIntoView([element]);
      },
    },
  });
  
  // Throw a clear error that will be caught in reverseAL
  throw new Error(errorMessage);
}