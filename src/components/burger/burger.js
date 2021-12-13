import { createElem } from "../../helpers/helpFunctions";
import cards from "../../data/cards";
import Train from "../train/train";
const $ = require( "jquery" );


// class Burger {
//   constructor() {
//     this.container = document.querySelector(".container");

//     this.burger = createElem("div", "burger_menu");
//     this.input = createElem("input");
//     this.label = createElem("label");
//     this.labels = createElem("label");
//     this.ul = createElem("ul");
//     this.container.append(this.burger);
//   }
//   createInput() {
//     this.input.type = "checkbox";
//     this.input.id = "menu-toggle";
//     this.burger.append(this.input);
//   }
//   createLabel() {
//     this.label.id = "trigger";
//     this.label.htmlFor = "menu-toggle";
//     this.burger.append(this.label);
//   }
//   createLabelS() {
//     this.labels.id = "burger";
//     this.labels.htmlFor = "menu-toggle";
//     this.burger.append(this.labels);
//   }
//   createUl() {
//     this.ul.id = "menu";
//     this.burger.append(this.ul);
//   }

//   createList() {
//     for (let i = 0; i < cards[0].length; i++) {
//       this.list = createElem("li");
//       this.list.innerHTML = cards[0][i];
//       this.ul.append(this.list);
//       this.list.addEventListener("click", () => {
//         this.main = document.querySelector(".main-wrapper");
//         this.trainWrapper = document.querySelector(".train-wrapper");
//         if (this.trainWrapper) {
//           this.trainWrapper.remove(); ///  added logic here
//         } else if (this.main) {
//           this.main.remove();
//         }
//         // this.main.remove();
//         this.train = new Train();
//         this.train.init(i + 1);
//         // this.burgerMenu.remove();
//         // // const burgerMenu = new Burger();
//         // // burgerMenu.onRerender();
//         this.input.setAttribute("checked");

//       });
//     }
//   }
//   init() {
//     this.createInput();
//     this.createLabel();
//     this.createLabelS();
//     this.createUl();
//     this.createList();
//   }
// }

class Burger {
  constructor () {
    this.container = document.querySelector(".container");

    this.burger = createElem("div", "burger-menu");
    this.mainA = createElem("a", "burger-menu_button")
    this.spun = createElem("spun", "burger-menu_lines");
    this.nav = createElem("nav", "burger-menu_nav")
    this.burgerOver = createElem("div", "burger-menu_overlay")
    this.section = createElem("section")

    this.container.append(this.burger);
  }
  
  createMainA () {
    this.burger.append(this.mainA)
  }

  createSpun () {
    this.mainA.append(this.spun)
  }

  createNav () {
    this.burger.append(this.nav)
  }

  createListA () {
    for(let i = 0; i < cards[0].length; i++){
      this.listA = createElem("a", "burger-menu_link")
      this.listA.innerHTML = cards[0][i]
      this.nav.append(this.listA)
      this.listA.addEventListener("click", () => {
        this.main = document.querySelector(".main-wrapper")
        this.train = document.querySelector(".train-wrapper")
        this.newTrain = new Train()
        if(this.main){
          this.main.remove()
          this.newTrain.init(i + 1) 
        }else{
          this.train.remove()
          this.newTrain.init(i + 1)
        }
      })
    }
  }

  createBurgerOver () {
    this.burger.append(this.burgerOver)
  }

  burgerMenu () {
    let menu = $('.burger-menu');
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
  
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  //   const menu = document.querySelector('.burger-menu');
  //   const button = menu.querySelectorAll('.burger-menu_lines');
  //   const links = menu.querySelectorAll('.burger-menu_link');
  //   const overlay = menu.querySelectorAll('.burger-menu_overlay');
  //   console.log(links)
  //   console.log(button)
  //   button.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     toggleMenu()
  //   })
  //   links.addEventListener('click', toggleMenu());
  //   overlay.addEventListener('click', toggleMenu());

  //   function toggleMenu() {
  //     menu.classList.toggle('burger-menu_active');

  //     if(menu.classList.contains('burger-menu_active')) {
  //       this.container.style.overflow = "hidden";
  //     } else {
  //       this.container.style.overflow = "visible";
  //     }
  //   }
  }

  init () {
    this.createMainA ();
    this.createSpun ();
    this.createNav ();
    this.createListA ();
    this.createBurgerOver ();
    this.burgerMenu ()
  }
}


export default Burger;
