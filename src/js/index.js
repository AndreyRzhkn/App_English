import cards from "./src/js/data/cards"
const container = document.getElementByClass('.container')

const createElem = (tag, className) => {
    const elemment = document.createElement(tag)
    elemment.className = className
    return elemment
}

const createMainCard = (component) => {
    const mainWraper = createElem('div', 'main-wrapper')
    container.append(mainWraper)
    const mainCard = createElem('div', 'main-card')
    mainWraper.append(mainCard)
    const picture = createElem('div', 'main-card-picture')
    picture.src = `./src/img/${component}.jpg`
    mainCard.append(picture)
    const textCategory = createElem('div', 'main-card-text')
    textCategory.innerHTML = `${component}`
    return mainCard
}

const createCategoryCard = (component) => {
    const categoryCard = createElem('div', 'category-card')
    container.append(categoryCard)
    const pictureCategory = createElem('div', 'category-card-picture')
    pictureCategory.src = `./src/img/${component}.jpg`
    categoryCard.append(pictureCategory)

}

console.log(cards)

class MainPage {
    render () {
        this.renderCard = this.cards.filter((_, index) => index == 0).foreach(component => createMainCard(component)) 
    }
    init () {
        this.render ()
    }

}



const main = new MainPage ()
main.init()





// const audio = new Audio('./src/audio/angry.mp3')