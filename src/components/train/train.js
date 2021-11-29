import cards from "../../data/cards";
import { createElem } from "../../helpers/helpFunctions";

class Train {
  constructor() {
    this.trainWrapper = createElem("div", "trainWrapper");

    this.container = document.querySelector(".container");
    this.container.append(this.trainWrapper);
  }

  onRenderFromCard() {

  }
  
  onRenderBackCard() {

  }
  
  
  
  
  
  onRenderMainCards(index) {
    for (let i = 0; i < cards[index].length; i++) {
      console.log("f");
      const card = createElem("div", "main-card");
      const title = createElem("h2", "main-card-title");
      title.innerHTML = cards[index].word;
      card.append(title);
      this.trainWrapper.append(card);

      this.onRenderFromCard(index)
    }
  }

  init(index) {
    this.onRenderMainCards(index);
  }
}
export default Train;
