import cards from "../../data/cards";
import { createElem } from "../../helpers/helpFunctions";




class Play {
    constructor() {
      this.container = document.querySelector('.container');
      this.swither = document.querySelector('.switch-container');

      this.playWrapper = createElem('div', 'play-wrapper');
      this.playCardsBlock = createElem('div', 'play-cards-block');
      this.playButton = createElem('div', 'play-button');
      this.playButtonImg = createElem('img');

      this.container.insertBefore(this.playWrapper, this.swither);
    }
    createCardsBlock() {
      this.playWrapper.append(this.playCardsBlock)
    }

    onRenderPlayCards(n) {
      for(let i = 0; i < cards[n].length; i++){

        this.cardPlay = createElem('div', 'play-card')
        this.playCardsBlock.append(this.cardPlay)
  
        this.imgPlay = createElem('img')
        this.imgPlay.src = `./src/${cards[n][i].image}`        
        this.cardPlay.append(this.imgPlay)

      }
    }   
    onRenderPlayButton(n) {
      this.playButton.innerHTML = 'Start game';
      this.playWrapper.append(this.playButton);
      
      this.playButton.addEventListener('click', () => {
        this.playButton.classList.remove('play-button');
        this.playButton.innerHTML = '';
        this.playButton.classList.add('play-button-game');
        this.playButtonImg.src = `./src/img/revers.jpg`;
        this.playButton.append(this.playButtonImg);

        const random = Math.floor(Math.random() * (8 - 0)) + 0
        const audio = new Audio()
        audio.src = `./src/${cards[n][random].audioSrc}`
        audio.play()
        const playCards = document.querySelectorAll('.play-card')

        playCards.forEach((el, i) => {
          el.addEventListener('click',() => {
            if(i === random){
              console.log("true")
            }else{
              console.log("false")
            }
          })
        })
      })
    }

    init(n) {
      this.createCardsBlock();
      this.onRenderPlayCards(n);
      this.onRenderPlayButton(n);
    }
  }

export default Play