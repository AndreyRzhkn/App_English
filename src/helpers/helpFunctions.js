export const createElem = (tag, className) => {
    const elemment = document.createElement(tag)
    elemment.classList.add(className)
    return elemment
}