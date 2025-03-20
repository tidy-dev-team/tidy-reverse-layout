import { getParentPage } from "./utils/getParentPage";
import { hasAlphaNumericText } from "./utils/hasAlphaNumericText";

export function getRtlInstance(element: InstanceNode): InstanceNode | null {
  const RTLSUFFICS = "-RTL";
  const mainComp = element.mainComponent;

  if (!mainComp) {
    return errorNotification("unable to find main component of", element);
  }

  const mainCompName = mainComp?.name;

  if (mainComp.parent && mainComp.parent.type === "COMPONENT_SET") {
    const parentName = mainComp.parent.name;
    const parentPage = getParentPage(mainComp.parent);
    const rtlComponentSet = parentPage?.findOne(
      (node) => node.name === parentName + RTLSUFFICS
    );
    if (!(rtlComponentSet && rtlComponentSet.type === "COMPONENT_SET")) {
      return errorNotification("unable to find RTL version of", element);
    }
    const rtlComponent = rtlComponentSet.findChild(
      (node) => node.name === mainCompName
    );
    if (!(rtlComponent && rtlComponent.type === "COMPONENT")) {
      return errorNotification("unable to find RTL version of", element);
    }
    const rtlInstance = rtlComponent.createInstance();
    return rtlInstance;
  } else {
    const parentPage = getParentPage(mainComp);
    const rtlComponent = parentPage?.findOne(
      (node) => node.name === mainCompName + RTLSUFFICS
    );
    if (!(rtlComponent && rtlComponent.type === "COMPONENT")) {
      return errorNotification("unable to find RTL version of", element);
    }
    const rtlInstance = rtlComponent.createInstance();
    return rtlInstance;
  }
}

function errorNotification(errorType: string, element: InstanceNode): null {
  figma.notify(errorType + " " + element.name, {
    error: true,
  });
  return null;
}
