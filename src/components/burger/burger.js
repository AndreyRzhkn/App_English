import { container } from "../../helpers/helpFunctions";
import { createElem } from "../../helpers/helpFunctions"
import cards from "../../data/cards";

class Burger {
    constructor () {
        this.burger = createElem('div', 'burger_menu')
        this.input = createElem('input')
        this.input.type = 'checkbox'
        this.input.id = 'menu-toggle'
        this.burger.append(this.input)
        this.label = createElem('label')
        this.label.id = 'trigger'
        this.label.htmlFor = 'menu-toggle'
        this.burger.append(this.label)
        this.labels = createElem('label')
        this.labels.id = 'burger'
        this.labels.htmlFor = 'menu-toggle'
        this.burger.append(this.labels)
        this.ul = createElem('ul')
        this.ul.id = 'menu'
        this.burger.append(this.ul)
    }
    createList() {
        for(let i = 0; i < cards[0].length; i++){
            const list = createElem('li')
            list.innerHTML = cards[0][i]
            this.ul.append(list)
        }
    }
    init () {
        this.createList ()
    }
  }

export default Burger