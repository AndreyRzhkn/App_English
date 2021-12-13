import { createElem } from "../../helpers/helpFunctions";
import Train from "../train/train";
import Play from "../play/play";

// class Swither {
//   constructor() {
//     this.container = document.querySelector(".container");
//     this.swither = createElem("div", "toggle_radio");
//     this.inputf = createElem("input", "toggle_option");
//     this.labelf = createElem("label");
//     this.inputs = createElem("input", "toggle_option");
//     this.labels = createElem("label");
//     this.options = createElem("div");
//     this.container.append(this.swither);
//   }
//   createInputF() {
//     this.inputf.type = "radio";
//     this.inputf.id = "first_toggle";
//     this.inputf.name = "toggle_option";
//     this.swither.append(this.inputf);
//   }
//   createLabelF() {
//     this.labelf.innerHTML = "Train";
//     this.labelf.htmlFor = "first_toggle";
//     this.swither.append(this.labelf);
//   }
//   createInputS() {
//     this.inputs.type = "radio";
//     this.inputs.id = "second_toggle";
//     this.inputs.name = "toggle_option";
//     this.swither.append(this.inputs);
//   }
//   createLabelS() {
//     this.labels.innerHTML = "Play";
//     this.labels.htmlFor = "second_toggle";
//     this.swither.append(this.labels);
//   }
//   createOptions() {
//     this.options.className = "toggle_option_slider";
//     this.swither.append(this.options);
//   }
//   init() {
//     this.createInputF();
//     this.createLabelF();
//     this.createInputS();
//     this.createLabelS();
//     this.createOptions();
//   }
// }
class Swither {
  constructor () {
    this.container = document.querySelector('.container');
    this.swither = createElem("div", "switch-container");
    this.label = createElem("label", "switch");
    this.input = createElem("input", "switch-input");
    this.spanF = createElem("span", "switch-label");
    this.spanS = createElem("span", "switch-handle")
    this.container.append(this.swither);
  }
  createLabel () {
    this.swither.append(this.label);
  }
  createInput () {
    this.input.type = "checkbox";
    this.input.setAttribute("checked", true);
    this.label.append(this.input);
  }
  createSpanF () {
    this.spanF.setAttribute("data-on", "Train");
    this.spanF.setAttribute("data-off", "Play");
    this.label.append(this.spanF)
  }
  createSpanS () {
    this.label.append(this.spanS);
  }
  chooseMode () {
    this.swither.addEventListener("click", () => {
      if(this.input.checked) {
        this.input.setAttribute("checked", false);
      } else if (!this.input.checked){
        this.input.setAttribute("checked", true);  
      }
    })
  }
  init () {
    this.createLabel ();
    this.createInput ();
    this.createSpanF ();
    this.createSpanS ();
    this.chooseMode ();
  }
}

export default Swither;

//  Render like this

// <div class="switch-container">
// <label class="switch">
//     <input type="checkbox" class="switch-input" checked>
//     <span class="switch-label" data-on="Train" data-off="Play"></span>
//     <span class="switch-handle"></span>
// </label>
// </div>

/// CSS

// .switch-container {
//   position: relative;
// }

// .switch,
// .switch-input {
//   position: absolute;
//   top: 0;
// }

// .switch {
//   right: 0;
//   display: block;
//   display: inline-block;
//   width: 120px;
//   height: 40px;
//   padding: 3px;
//   background-color: #fff;
//   border-radius: 5px;
//   box-shadow: inset 0 -1px #fff, inset 0 1px 1px rgba(0, 0, 0, .05);
//   cursor: pointer;
//   background-image: linear-gradient(180deg, #eee, #fff 25px);
// }

// .switch-input:checked~.switch-label {
//   background: linear-gradient(40deg, #00bf82, #0099ae);
//   box-shadow: inset 0 1px 2px rgba(0, 0, 0, .15), inset 0 0 3px rgba(0, 0, 0, .2);
// }

// .switch-label {
//   position: relative;
//   display: block;
//   height: inherit;
//   font-size: 18px;
//   line-height: 40px;
//   text-transform: uppercase;
//   background: linear-gradient(40deg, #ffd86f, #fc6262);
//   border-radius: inherit;
//   box-shadow: inset 0 1px 2px rgba(0, 0, 0, .12), inset 0 0 2px rgba(0, 0, 0, .15);
//   -webkit-transition: .15s ease-out;
//   transition: .15s ease-out;
// }

// .switch-input:checked~.switch-label:before {
//   opacity: 0;
// }

// .switch-label:before {
//   content: attr(data-off);
//   right: 15px;
//   color: #fff;
//   text-shadow: 0 1px hsla(0, 0%, 100%, .5);
// }

// .switch-label:after,
// .switch-label:before {
//   position: absolute;
//   top: 0;
//   -webkit-transition: inherit;
//   transition: inherit;
// }

// .switch-label:after {
//   content: attr(data-on);
//   left: 15px;
//   color: #fff;
//   text-shadow: 0 1px rgba(0, 0, 0, .2);
//   opacity: 0;
// }

// .switch-input:checked~.switch-label:after {
//   opacity: 1;
// }

// .switch-handle {
//   position: absolute;
//   top: 6px;
//   left: 6px;
//   width: 33px;
//   height: 33px;
//   background: #fff;
//   border-radius: 5px;
//   box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
//   background-image: -webkit-gradient(linear, left top, left bottom, color-stop(40%, #fff), to(#f0f0f0));
//   background-image: linear-gradient(180deg, #fff 40%, #f0f0f0);
//   -webkit-transition: left .15s ease-out;
//   transition: left .15s ease-out;
// }

// .switch-input:checked~.switch-handle {
//   left: 85px;
//   box-shadow: -1px 1px 5px rgba(53, 52, 52, 0.2);
// }

// .switch-handle:before {
//   content: "";
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   margin: -6px 0 0 -6px;
//   width: 12px;
//   height: 12px;
//   background: #f9f9f9;
//   border-radius: 6px;
//   box-shadow: inset 0 1px rgba(0, 0, 0, .02);
//   background-image: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#fff));
//   background-image: linear-gradient(180deg, #eee, #fff);
// }

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
