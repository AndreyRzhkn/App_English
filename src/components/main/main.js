import cards from "../../data/cards";
import { createElem } from "../../helpers/helpFunctions";
import Train from "../train/train";
class Main {
  constructor() {
    this.mainWrapper = createElem("div", "mainWrapper");
    this.container = document.querySelector(".container");
    console.log(this.mainWrapper);
    this.container.append(this.mainWrapper);
   }

  onRenderMainCards() {
    for (let i = 0; i < cards[0].length; i++) {
      const card = createElem("div", "main-card");
      const title = createElem("h2", "main-card-title");
      title.innerHTML = cards[0][i];
      card.append(title);
      this.mainWrapper.append(card);

      title.addEventListener("click", () => {
        this.mainWrapper.remove();
        this.train = new Train();
        this.train.init(i)
        console.log(i);
      });
    }
  }

  init() {
    this.onRenderMainCards();
  }
}
export default Main;
