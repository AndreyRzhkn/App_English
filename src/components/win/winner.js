import { createElem } from "../../helpers/helpFunctions";
import Main from "../main/main";
import Swither from "../swither/swither";


class Winner {
    constructor() {
        this.container = document.querySelector(".container");
        this.winnerWraper = createElem("div", "winner-wrapper");
        this.picBlock = createElem("div", "pic-block");
        this.img = createElem("img");
        this.title = createElem("div", "winner-title");
        this.button = createElem("div", "winner-button");
        this.container.append(this.winnerWraper);
    };
    createImg() {
        this.img.src = "./src/img/winner.jpg";
        this.picBlock.append(this.img);
        this.winnerWraper.append(this.picBlock);
    };
    createTitle() {
        this.title.innerHTML = "You Winner";
        this.winnerWraper.append(this.title);
    };
    createButton(){
        this.button.innerHTML = "Main Page";
        this.winnerWraper.append(this.button);
    };
    toMainPage() {
        this.button.addEventListener("click", () => {
            this.winnerWraper.remove();
            this.main = new Main();
            this.swither = new Swither();
            this.swither.init();
            this.main.init();
        });
    };
    init() {
        this.createImg();
        this.createTitle();
        this.createButton();
        this.toMainPage();
    };
};

export default Winner;