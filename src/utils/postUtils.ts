export const getPostColorFromCatagory = (category: string) => {
  switch (category) {
    case "Sustainability":
      return "lime";
    case "Security":
      return "cyan";
    case "Innovation":
      return "violet";
    default:
      return "fuchsia";
  }
};
