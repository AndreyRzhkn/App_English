import cards from "../../data/cards";
import { createElem } from "../../helpers/helpFunctions";
import Play from "../play/play";
import Train from "../train/train";

class Main {
  constructor() {
    this.container = document.querySelector(".container");
    this.mainWrapper = createElem("div", "main-wrapper");

    this.container.append(this.mainWrapper);
  }
  onRenderMainCards() {
    this.swither = document.querySelector(".switch-input");
    this.switherContainer = document.querySelector(".switch-container");
    console.log(this.swither)

    for (let i = 0; i < cards[0].length; i++) {
      this.card = createElem("div", "main-card");

      this.title = createElem("div", "main-title");
      this.title.innerHTML = cards[0][i];

      this.img = createElem("img");
      this.img.src = `./src/img/${cards[0][i]}.jpg`;

      this.card.append(this.img);
      this.card.append(this.title);
      
      this.mainWrapper.append(this.card);

      this.card.addEventListener("click", () => {
        if (this.swither.checked) {
          this.mainWrapper.remove();
          this.train = new Train();
          this.train.init(i + 1);
          this.switherContainer.remove();
        } else {
          this.mainWrapper.remove();
          this.play = new Play();
          this.play.init(i + 1);
          this.switherContainer.remove();
        }
      });
    }
  };

  init() {
    this.onRenderMainCards();
  };
};


export default Main;
