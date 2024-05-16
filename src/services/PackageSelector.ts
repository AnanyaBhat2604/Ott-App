import Rails from "@/package/Rails/Rails";
import FAQ from "@/package/FAQ/FAQ";
import Hero from "@/package/Hero/Hero";

function getComponent(key: string) {
  switch (key) {
    case "Rails":
      return Rails;
    case "FAQ":
      return FAQ;
    case "Hero":
      return Hero;
    default:
      throw new Error(`Unknown component key: ${key}`);
  }
}

export default getComponent;
