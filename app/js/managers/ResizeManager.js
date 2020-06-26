import throttle from 'lodash/throttle'
import { WINDOW_RESIZE } from '../constants/index'
import createCustomEvent from '../utils/createCustomEvent'

class ResizeManager {
  constructor() {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.handleResize = throttle(this.handleResize, 100, {
      leading: false,
    })

    window.addEventListener('resize', this.handleResize, { passive: true })
    console.log('ici')
  }

  handleResize() {
    this.width = window.innerWidth
    this.height = window.innerHeight


    window.dispatchEvent(createCustomEvent(WINDOW_RESIZE, { width: this.width, height: this.height }))
  }
}

export default new ResizeManager()
