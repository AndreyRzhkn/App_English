import cards from "../../data/cards";
import { createElem } from "../../helpers/helpFunctions";
import Train from "../train/train";
import Burger from "../burger/burger";

class Main {
  constructor() {
    this.mainWrapper = createElem("div", "mainWrapper");
    this.container = document.querySelector(".container");
    console.log(this.mainWrapper);
    this.container.append(this.mainWrapper);
    // this.burger = new Burger()
    // this.mainWrapper.append(this.burger)
  }

  onRenderMainCards(mode) {
    for (let i = 0; i < cards[0].length; i++) {
      const card = createElem("div", "main-card");
      const title = createElem("h2", "main-card-title");
      title.innerHTML = cards[0][i];
      card.append(title);
      this.mainWrapper.append(card);
      

      title.addEventListener("click", () => {
        this.mainWrapper.remove();
        // if (mode === "train") {
          this.train = new Train();
          this.train.init(i);
          
        // }
        // this.play = new Play();
        // this.play.init(i);
        // console.log(i);
      });
    }
  }

  init() {
    this.onRenderMainCards();
  }
}
export default Main;
