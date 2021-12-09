
import { createElem } from "../../helpers/helpFunctions"

class Swither {
    constructor () {
      this.container = document.querySelector('.container')
      this.swither = createElem('div', 'toggle_radio')
      this.inputf = createElem('input', 'toggle_option')
      this.labelf = createElem('label')
      this.inputs = createElem('input', 'toggle_option')
      this.labels = createElem('label')
      this.options = createElem('div')
      this.container.append(this.swither)
    }
    createInputF() {
      this.inputf.type = 'radio'
      this.inputf.id = 'first_toggle'
      this.inputf.name = 'toggle_option'
      this.swither.append(this.inputf)
    }
    createLabelF() {
      this.labelf.innerHTML = 'Train'
      this.labelf.htmlFor = 'first_toggle'
      this.swither.append(this.labelf)
    }
    createInputS() {
      this.inputs.type = 'radio'
      this.inputs.id = 'second_toggle'
      this.inputs.name = 'toggle_option'
      this.swither.append(this.inputs)
    }
    createLabelS() {
      this.labels.innerHTML = 'Play'
      this.labels.htmlFor = 'second_toggle'
      this.swither.append(this.labels)
    }
    createOptions() {
      this.options.className = 'toggle_option_slider'
      this.swither.append(this.options)
    }
    init() {
      this.createInputF ()
      this.createLabelF ()
      this.createInputS ()
      this.createLabelS ()
      this.createOptions ()
    }
    
  }

  export default Swither