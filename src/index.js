import View from './components/view/view'

const view = new View()
view.init()




console.log('Andrey')



// const data = await fetch.getMovie();

// const users = await getMovie();
// console.log(users);

// import cards from "./js/data/cards";

// import View from "./components/view";

// const view = new View();

// const container = document.getElementByClass('.container')

// const createElem = (tag, className) => {
//     const elemment = document.createElement(tag)
//     elemment.className = className
//     return elemment
// }

// const createMainCard = (component) => {
//     const mainWraper = createElem('div', 'main-wrapper')
//     container.append(mainWraper)
//     const mainCard = createElem('div', 'main-card')
//     mainWraper.append(mainCard)
//     const picture = createElem('div', 'main-card-picture')
//     picture.src = `./src/img/${component}.jpg`
//     mainCard.append(picture)
//     const textCategory = createElem('div', 'main-card-text')
//     textCategory.innerHTML = `${component}`
//     return mainCard;
// }

// const createCategoryCard = (component) => {
//     const categoryCard = createElem('div', 'category-card')
//     container.append(categoryCard)
//     const pictureCategory = createElem('div', 'category-card-picture')
//     pictureCategory.src = `./src/img/${component}.jpg`
//     categoryCard.append(pictureCategory)

// }

// console.log(cards)

// class MainPage {
//     render () {
//         console.log('a')
//         this.renderCard = this.cards.filter((_, index) => index == 0).foreach(component => createMainCard(component))
//     }
//     init () {
//         this.render ()
//     }

// }

// const main = new MainPage ()
// main.init()

// const audio = new Audio('./src/audio/angry.mp3')
