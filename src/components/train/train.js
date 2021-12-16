import cards from "../../data/cards";
import { createElem } from "../../helpers/helpFunctions";




class Train{
  constructor () {
    this.container = document.querySelector('.container');
    this.swither = document.querySelector('.switch-container');
    
    this.trainWrapper = createElem('div', 'train-wrapper');
    this.cardsBlock = createElem('div', 'cards-block');
    this.trainWrapper.append(this.cardsBlock) ;
    this.container.insertBefore(this.trainWrapper, this.swither);

    this.switherInput = document.querySelector(".switch-input")
  }
  onRenderTrainCards(n) {
    for(let i = 0; i < cards[n].length; i++){
      const cardFlip = createElem('div', 'flip-card')
      cardFlip.classList.add('cardClick');

      const cardFront = createElem('div', 'back');
      const cardBack = createElem('div', 'face');
      const imgFront = createElem('img');
      imgFront.src = `./src/${cards[n][i].image}`;
      
      const titleBlock = createElem('div', 'title-block');
      const titleFront = createElem('div', 'flip-card-title-front');
      titleFront.innerHTML = cards[n][i].word;

      const titlePic = createElem('img');
      titlePic.src = './src/img/revers.jpg';
      
      titlePic.addEventListener('click', () => {
        cardFlip.classList.toggle('flip');
        setTimeout(() => cardFlip.classList.remove('flip'), 1500);
      })
      
      const imgBack = createElem('img');
      imgBack.src = `./src/${cards[n][i].image}`;
      
      const titleBack = createElem('div', 'flip-card-title-back');
      titleBack.innerHTML = cards[n][i].translation;
      
      cardFront.append(imgFront);
      titleBlock.append(titleFront);
      cardFront.append(titleBlock);
      titleBlock.append(titlePic);
      cardBack.append(imgBack);
      cardBack.append(titleBack);
      cardFlip.append(cardFront);
      cardFlip.append(cardBack);
      this.cardsBlock.append(cardFlip);

      const audio = new Audio();
      audio.src = `./src/${cards[n][i].audioSrc}`;
      imgFront.addEventListener('click', () => audio.play());
    }
  };

  init(n) {
    this.onRenderTrainCards(n);
  }
}


export default Train;
