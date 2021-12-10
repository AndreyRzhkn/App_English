import { createElem } from "../../helpers/helpFunctions";
import cards from "../../data/cards";
import Train from "../train/train";

class Burger {
  constructor() {
    this.container = document.querySelector(".container");

    this.burger = createElem("div", "burger_menu");
    this.input = createElem("input");
    this.label = createElem("label");
    this.labels = createElem("label");
    this.ul = createElem("ul");
    this.container.append(this.burger);
  }
  createInput() {
    this.input.type = "checkbox";
    this.input.id = "menu-toggle";
    this.burger.append(this.input);
  }
  createLabel() {
    this.label.id = "trigger";
    this.label.htmlFor = "menu-toggle";
    this.burger.append(this.label);
  }
  createLabelS() {
    this.labels.id = "burger";
    this.labels.htmlFor = "menu-toggle";
    this.burger.append(this.labels);
  }
  createUl() {
    this.ul.id = "menu";
    this.burger.append(this.ul);
  }

  createList() {
    for (let i = 0; i < cards[0].length; i++) {
      this.list = createElem("li");
      this.list.innerHTML = cards[0][i];
      this.ul.append(this.list);
      this.list.addEventListener("click", () => {
        this.main = document.querySelector(".main-wrapper");
        this.trainWrapper = document.querySelector(".train-wrapper");
        if (this.trainWrapper) {
          this.trainWrapper.remove(); ///  added logic here
        } else if (this.main) {
          this.main.remove();
        }
        // this.main.remove();
        this.train = new Train();
        this.train.init(i + 1);
        // this.burgerMenu.remove();
        // // const burgerMenu = new Burger();
        // // burgerMenu.onRerender();
        this.input.setAttribute("checked");
      });
    }
  }
  init() {
    this.createInput();
    this.createLabel();
    this.createLabelS();
    this.createUl();
    this.createList();
  }
}

export default Burger;
