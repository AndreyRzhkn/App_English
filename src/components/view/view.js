import Main from "../main/main";

class View {
  constructor() {
    this.container = document.querySelector('.container')
    this.main = new Main(this.containe);
  }
  init() {
    this.main.init();
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

