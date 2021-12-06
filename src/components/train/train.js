import cards from "../../data/cards";
import { createElem } from "../../helpers/helpFunctions";
import { container } from "../../helpers/helpFunctions";
import Train from "../train/train";
import Burger from "../burger/burger";
import Swither from "../swither/swither";


class Train{
  constructor () {
    this.trainWrapper = createElem('div', 'train-wrapper')
    // container.append(this.trainWrapper)
    this.cardsBlock = createElem('div', 'cards-block')
    this.trainWrapper.append(this.cardsBlock)

    
  }
  onRenderTrainCards(n) {
    for(let i = 0; i < cards[n].length; i++){
      const cardFlip = createElem('div', 'flip-card')
      cardFlip.classList.add('cardClick')

      const cardFront = createElem('div', 'back')
      const cardBack = createElem('div', 'face')
      cardFlip.append(cardFront)
      cardFlip.append(cardBack)

      const imgFront = createElem('img')
      imgFront.src = `./${cards[n][i].image}`
      cardFront.append(imgFront)
      const titleBlock = createElem('div', 'title-block')
      const titleFront = createElem('div', 'flip-card-title-front')
      titleBlock.append(titleFront)
      cardFront.append(titleBlock)
      titleFront.innerHTML = cards[n][i].word
      const titlePic = createElem('img')
      titlePic.src = './img/revers.jpg'
      titleBlock.append(titlePic)
      
      titlePic.addEventListener('click', () => {
        cardFlip.classList.toggle('flip')
        setTimeout(() => cardFlip.classList.remove('flip'), 1500)
      })
      
      const imgBack = createElem('img')
      imgBack.src = `./${cards[n][i].image}`
      cardBack.append(imgBack)
      const titleBack = createElem('div', 'flip-card-title-back')
      titleBack.innerHTML = cards[n][i].translation
      cardBack.append(titleBack)

      this.cardsBlock.append(cardFlip)

      const audio = new Audio()
      audio.src = `./${cards[n][i].audioSrc}`
      imgFront.addEventListener('click', () => audio.play())
    }
  }
  renderSwither() {
    const swither = new Swither()
    this.header.append(swither)
  }
  init(n) {
    this.onRenderTrainCards(n)
    this.renderSwither()
  }
}

export default Train;
