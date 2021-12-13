import cards from "../../data/cards";
import { createElem } from "../../helpers/helpFunctions";




class Play {
    constructor () {
      this.container = document.querySelector('.container')
      this.playWrapper = createElem('div', 'play-wrapper')   
      this.playCardsBlock = createElem('div', 'play-cards-block')
      
      this.container.insertBefore(this.playWrapper, this.swither)
    }
    createCardsBlock () {
      this.playWrapper.append(this.playCardsBlock)
    }
    onRenderPlayCards(n) {
      for(let i = 0; i < cards[n].length; i++){
        const cardPlay = createElem('div', 'play-card')
        this.playCardsBlock.append(cardPlay)
  
        const imgPlay = createElem('img')
        imgPlay.src = `./${cards[n][i].image}`
        cardPlay.append(imgPlay)
      }
    }
    onRenderPlayButton () {
      const playButton = createElem('div', 'play-button')
      this.playWrapper.append(playButton)
      
  
      playButton.innerHTML = 'Start game'
      // new playAudio = new Audio()
      // playAudio.src = `./${cards[n][i].audioSrc}`
      playButton.addEventListener('click', () => {
        playButton.classList.remove('play-button')
        playButton.innerHTML = ''
        playButton.classList.add('play-button-revers')
        playButton.src = './img/revers.jpg'
      })
    }
    init(n) {
      this.createCardsBlock ()
      this.onRenderPlayCards(n)
      this.onRenderPlayButton ()
    }
  }

export default Play