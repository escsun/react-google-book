export const createMarkup = (html: string) => {
  return {
    __html: html
  };
};

export const createMarkupShorter = (html: string, truncateTo: number) => {
  return {
    __html: html.substring(0, truncateTo) + "..."
  };
};
