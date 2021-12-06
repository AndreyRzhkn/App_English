import { container } from "../../helpers/helpFunctions";
import { createElem } from "../../helpers/helpFunctions"

class Swither {
    constructor () {
      this.swither = createElem('div', 'toggle_radio')
      this.inputf = createElem('input', 'toggle_option')
      this.inputf.type = 'radio'
      this.inputf.id = 'first_toggle'
      this.inputf.name = 'toggle_option'
      this.labelf = createElem('label')
      this.labelf.innerHTML = 'Train'
      this.labelf.htmlFor = 'first_toggle'
      this.inputs = createElem('input', 'toggle_option')
      this.inputs.type = 'radio'
      this.inputs.id = 'second_toggle'
      this.inputs.name = 'toggle_option'
      this.labels = createElem('label')
      this.labels.innerHTML = 'Play'
      this.labels.htmlFor = 'second_toggle'
      this.options = createElem('div')
      this.options.className = 'toggle_option_slider'
      this.swither.append(this.inputf)
      this.swither.append(this.inputs)
      this.swither.append(this.labelf)
      this.swither.append(this.labels)
      this.swither.append(this.options)
      
    }
  }

  export default Swither