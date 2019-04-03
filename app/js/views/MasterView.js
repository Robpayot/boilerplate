export default class MasterView {
  constructor() {
    this.el = document.body

    this.ui = {
      sections: this.el.querySelectorAll('.section'),
    }
  }
}
