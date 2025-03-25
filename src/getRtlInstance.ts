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
  const parentPage = getParentPage(mainComponent);

  if (!parentPage) {
    return errorNotification("Unable to find parent page for", instance);
  }

  // Handle component inside component set
  if (parentComponentSet?.type === "COMPONENT_SET") {
    const rtlSet = parentPage.findOne(
      (node) =>
        node.type === "COMPONENT_SET" &&
        node.name === parentComponentSet.name + RTL_SUFFIX
    ) as ComponentSetNode | null;

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
  const rtlComponent = parentPage.findOne(
    (node) =>
      node.type === "COMPONENT" && node.name === mainComponentName + RTL_SUFFIX
  ) as ComponentNode | null;

  if (!rtlComponent) {
    return errorNotification(
      "Unable to find RTL version of component for",
      instance
    );
  }

  return rtlComponent.createInstance();
}

function errorNotification(errorType: string, element: InstanceNode): null {
  figma.notify(errorType + " " + element.name, {
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
  return null;
}
