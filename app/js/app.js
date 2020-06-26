import '../scss/style.scss'
import Article from './components/Article'

(() => {
  // DOM ready
  const articleEl = document.querySelector('[data-article]')
  if (articleEl) {
    new Article(articleEl)
  }
})()
