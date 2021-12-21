import { createElem } from "../../helpers/helpFunctions";


class Swither {
  constructor() {
    this.container = document.querySelector('.container');

    this.swither = createElem("div", "switch-container");
    this.label = createElem("label", "switch");
    this.input = createElem("input", "switch-input");
    this.spanF = createElem("span", "switch-label");
    this.spanS = createElem("span", "switch-handle");

    this.container.appendChild(this.swither);
  };
  createLabel() {
    this.swither.append(this.label);
  };

  createInput() {
    this.input.type = "checkbox";
    this.input.setAttribute("checked", false);
    this.label.append(this.input);
  };

  createSpanF() {
    this.spanF.setAttribute("data-on", "Train");
    this.spanF.setAttribute("data-off", "Play");
    this.label.append(this.spanF);
  };

  createSpanS() {
    this.label.append(this.spanS);
  };

  chooseMode() {
    this.swither.addEventListener("click", () => {
      if (this.input.checked) {
        this.input.setAttribute("checked", false);
      } else if (!this.input.checked) {
        this.input.setAttribute("checked", true);
      };
    });
  };

  init() {
    this.createLabel();
    this.createInput();
    this.createSpanF();
    this.createSpanS();
    this.chooseMode();
  };
};

export default Swither;


// SWICHER LOG
// render switcher in view class

// in  train/play  -

// this.switcher = document.querySelector(".switch-input");

// //  if (this.switcher.checked) {
//   this.switcher.setAttribute("checked", false);
//  renderCards();
// } else {
//   this.switcher.setAttribute("checked", true);
//   renderCards();
// }

// //  renderEveryCards() {
//   for (let x = 0; x < cards.lengish; x += 1) {
//  //   for current card we need cyclie - i

// ------ >  wrapper.remove()

//             if (this.switcher.checked) {
//                 train . init()
//             } else if (!this.switcher.checked) {
//                 game . init();
//             }
//
//
// }
// }
