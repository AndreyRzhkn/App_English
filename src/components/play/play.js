
import cards from "../../data/cards";
import { createElem } from "../../helpers/helpFunctions";
import { randomArr } from "../../helpers/helpFunctions";
import Winner from "../win/winner";




class Play {
    constructor() {
      this.container = document.querySelector('.container');

      this.playWrapper = createElem('div', 'play-wrapper');
      this.playCardsBlock = createElem('div', 'play-cards-block');
      this.playButton = createElem('div', 'play-button');
      this.playButtonImg = createElem('img');

      this.container.append(this.playWrapper);
    };

    createCardsBlock() {
      this.playWrapper.append(this.playCardsBlock);
    };

    onRenderPlayCards(n) {
      for(let i = 0; i < cards[n].length; i++){
      this.cardPlay = createElem('div', 'play-card');
      this.imgPlay = createElem('img');

      this.imgPlay.src = `./src/${cards[n][i].image}`;
      this.imgPlay.alt = `./src/${cards[n][i].audioSrc}`;

      this.playCardsBlock.append(this.cardPlay);
      this.cardPlay.append(this.imgPlay);
      };
    };

    createGame(n) {
      const arrOfSounds = [];
      cards[n].forEach(element => {
        arrOfSounds.push(element.audioSrc);
      });

      const arrRandomSort = arrOfSounds.sort(randomArr);

      this.playButton.addEventListener("click", () => {
        const currentAudio = new Audio();
        currentAudio.src = `./src/${arrRandomSort[0]}`;

        const correct = new Audio();
        correct.src = `./src/audio/true.mp3`;
        const errorAudio = new Audio();
        errorAudio.src = `./src/audio/false.mp3`;

        const sectionCards = document.querySelectorAll("img");
        currentAudio.play();

        sectionCards.forEach((elem) => {
          elem.addEventListener("click", (event) => {
            
            if(event.target.alt == `./src/${arrRandomSort[0]}`){
              arrRandomSort.shift();
              currentAudio.src = `./src/${arrRandomSort[0]}`;
              event.target.classList.add("disabled");
              // event.target.disabled = true;
              correct.play();
              currentAudio.play();
            }else if(!arrRandomSort.length){
              this.playWrapper.remove();
              const winner = new Winner();
              winner.init();
            }else if(this.playButton){
              currentAudio.play();
            }else{
              errorAudio.play();
            };
          });
        });
      });
    };

    onRenderPlayButton() {
      this.playButton.innerHTML = 'Start game';
      this.playWrapper.append(this.playButton);
      
      this.playButton.addEventListener('click', () => {
        this.playButton.classList.remove('play-button');
        this.playButton.innerHTML = '';
        this.playButton.classList.add('play-button-game');
        this.playButtonImg.src = `./src/img/revers.jpg`;
        this.playButton.append(this.playButtonImg);
      });
    };

    init(n) {
      this.createCardsBlock();
      this.onRenderPlayCards(n);
      this.createGame(n);
      this.onRenderPlayButton();
    };
  };

export default Play