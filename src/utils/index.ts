export const handleScrollToElement = (targetClass: string) => {
  const element = document.querySelector(`.${targetClass}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};