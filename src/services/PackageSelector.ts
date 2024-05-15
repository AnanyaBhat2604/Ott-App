import Rails from "@/package/Rails/Rails";
import FAQ from "@/package/FAQ/FAQ";

function getComponent(key: string) {
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
