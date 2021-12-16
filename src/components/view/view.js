import Main from "../main/main";
import Burger from "../burger/burger";
import Swither from "../swither/swither";


class View {
  constructor() {
    this.container = document.querySelector('.container');

    this.burger = new Burger();
    this.main = new Main();
    this.swither = new Swither();




  };
  init() {
    this.swither.init();
    this.burger.init();
    this.main.init();
         
    this.swither = document.querySelector(".switch-input")  ;
    console.log(this.swither);

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
// }

