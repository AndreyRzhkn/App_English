const createElem = (tag, className = null) => {
    const elemment = document.createElement(tag)
    elemment.classList.add(className)
    return elemment
  }

const randomArr = (a, b) => {
  return Math.random() - 0.5;
}