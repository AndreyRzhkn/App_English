import Main from "../main/main";
import Burger from "../burger/burger";
import Swither from "../swither/swither";

class View {
  constructor() {

    this.container = document.querySelector(".container");
    this.burger = new Burger();    
    this.main = new Main();
    this.swither = new Swither(); // контейер
 // ищу тут в конструкте
  }
  init() {
    this.burger.init();
    this.swither.init(); // инпут
    this.main.init(); /// ищу
  }
}
export default View;

// span.innerHTML = 'Main page'

// span.addEventListener() {
//   while (container.firstChild) {
//     container.removeChild(container.firstChild);
// }

// this.main = new Main()
// this.main.init()
//

/// GAME
// рендеришь картинки
// createElem("img", "");

// img.src = data[2];
// img.alt = data[2].audioSrc;
// const arrOfSounds = [];
// data.forEach((element) => {
//   arrOfSounds.push(element.audioSrc);
// });

// arrOfSounds.sort(); //сорт рандом

// button.addEventListner("click", () => {
//   const currentAudio = arrOfSounds[0];

//   const cards = document.querySelectorAll("img");
//   currentAudio.play();
//   cards.forEach((element) => {
//     element.addEventListener("click ", (event) => {
//       if (event.target.alt === currentAudio) {
//         arrOfSounds.shift();
//         event.target.classlist.add("disabled");
//         currect.play();
//         currentAudio.play();
//       } else {
//         errorAudio.play();
//       }
//     });

//     if(! arrOfSounds.lenght) {
//       playWrapper.Remove()
      
//     }
//   });
// });


