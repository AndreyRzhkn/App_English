import { createElem } from "../../helpers/helpFunctions";
import cards from "../../data/cards";
import Train from "../train/train";
import Main from "../main/main";
import Swither from "../swither/swither";
import Play from "../play/play";
const $ = require( "jquery" );



class Burger {
  constructor () {
    this.container = document.querySelector(".container");

    this.burger = createElem("div", "burger-menu");
    this.mainA = createElem("a", "burger-menu_button")
    this.spun = createElem("spun", "burger-menu_lines");
    this.nav = createElem("nav", "burger-menu_nav");
    this.burgerOver = createElem("div", "burger-menu_overlay");
    this.section = createElem("section");
 
    this.container.append(this.burger);
    this.train = document.querySelector(".train-wrapper");
    console.log(this.train)

  };
  
  createMainA() {
    this.burger.append(this.mainA);
  };

  createSpun() {
    this.mainA.append(this.spun);
  };

  createNav() {
    this.burger.append(this.nav);
  };

  createMainPage() {
    this.mainPage = createElem("a", "burger-menu_link");
    this.mainPage.innerHTML = "Main page";
    this.nav.append(this.mainPage);
    this.mainPage.addEventListener("click", () => {
      this.main = document.querySelector(".main-wrapper");
      this.train = document.querySelector(".train-wrapper");
      this.play = document.querySelector(".play-wrapper");
      console.log(this.train)
      if(this.train){
        this.train.remove();
        this.main = new Main();
        this.swither = new Swither();        
        this.swither.init();
        this.main.init();
      }else if(this.play){
        this.play.remove();
        this.main = new Main();
        this.swither = new Swither();        
        this.swither.init();
        this.main.init();
      };
    });
  };

  createMainA () {
    this.burger.append(this.mainA);
  };

  createSpun() {
    this.mainA.append(this.spun);
  };

  createNav() {
    this.burger.append(this.nav);
  };

  createListA() {
    for(let i = 0; i < cards[0].length; i++){
      this.listA = createElem("a", "burger-menu_link");
      this.listA.innerHTML = cards[0][i];
      this.nav.append(this.listA);
      this.listA.addEventListener("click", () => {
        this.main = document.querySelector(".main-wrapper");
        this.train = document.querySelector(".train-wrapper");
        this.play = document.querySelector(".play-wrapper");
        this.swither = document.querySelector(".switch-container");
        
        this.newTrain = new Train();
        this.newPlay = new Play();
        if(this.main){
          this.main.remove();
          this.swither.remove();
          this.newTrain.init(i + 1);
        }else if(this.train){
          this.train.remove();
          this.newTrain.init(i + 1);
        }else if(this.play){
          this.play.remove();
          this.newPlay.init(i + 1);
        };
      });
    };
  };

  createBurgerOver() {
    this.burger.append(this.burgerOver);
  };

  burgerMenu() {
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
  };

  init() {
    this.createMainA();
    this.createSpun();
    this.createMainPage();
    this.createNav();
    this.createListA();
    this.createBurgerOver();
    this.burgerMenu();
  };
};


export default Burger;
