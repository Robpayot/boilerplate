export default class Article {
  constructor(el) {
    this.el = el

    this.ui = {
      sections: this.el.querySelectorAll('.section'),
    }
    console.log(el)
  }
}
