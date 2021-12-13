const createElem = (tag, className = null) => {
    const elemment = document.createElement(tag)
    elemment.classList.add(className)
    return elemment
  }
