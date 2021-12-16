import cards from "../../data/cards";
import { createElem } from "../../helpers/helpFunctions";
import Play from "../play/play";



class Train{
  constructor () {
    this.container = document.querySelector('.container');
    this.swither = document.querySelector('.switch-container');
    
    this.trainWrapper = createElem('div', 'train-wrapper');
    this.cardsBlock = createElem('div', 'cards-block');
    this.trainWrapper.append(this.cardsBlock) ;
    this.container.insertBefore(this.trainWrapper, this.swither);

    this.swither = document.querySelector(".switch-input")
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
      imgFront.src = `./src/${cards[n][i].image}`
      cardFront.append(imgFront) 
      console.log(imgFront.src)
      const titleBlock = createElem('div', 'title-block')
      const titleFront = createElem('div', 'flip-card-title-front')
      titleBlock.append(titleFront)
      cardFront.append(titleBlock)
      titleFront.innerHTML = cards[n][i].word
      const titlePic = createElem('img')
      titlePic.src = './src/img/revers.jpg'
      titleBlock.append(titlePic)
      
      titlePic.addEventListener('click', () => {
        cardFlip.classList.toggle('flip')
        setTimeout(() => cardFlip.classList.remove('flip'), 1500)
      })
      
      const imgBack = createElem('img')
      imgBack.src = `./src/${cards[n][i].image}`
      cardBack.append(imgBack)
      const titleBack = createElem('div', 'flip-card-title-back')
      titleBack.innerHTML = cards[n][i].translation
      cardBack.append(titleBack)

      this.cardsBlock.append(cardFlip)

      const audio = new Audio()
     
      audio.src = `./src/${cards[n][i].audioSrc}`
      imgFront.addEventListener('click', () => audio.play())

      // cardFlip.addEventListener("click", () => {
      //   if(this.swither.checked) {
      //     this.trainWrapper.remove()
      //     this.play = new Play ()
      //     this.play.init(n)
      //   }
      // })
    }
  }

  init(n) {
    this.onRenderTrainCards(n)
  }
}


export default Train;
