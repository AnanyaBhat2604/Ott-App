import Rails from "@/package/Rails/Rails";
import FAQ from "@/package/FAQ/FAQ";

type ComponentKey = "Rails" | "FAQ";

function getComponent(key: ComponentKey) {
  switch (key) {
    case "Rails":
      return Rails;
    case "FAQ":
      return FAQ;
    default:
      throw new Error(`Unknown component key: ${key}`);
  }
}

export default getComponent;
