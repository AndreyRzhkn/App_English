export const createElem = (tag, className) => {
  const elemment = document.createElement(tag);
  className ? elemment.classList.add(className) : null; // added checking for bug : class = 'undefiend'
  return elemment;
};
