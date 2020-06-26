import throttle from 'lodash/throttle'
import { WINDOW_RESIZE } from '../constants/index'
import createCustomEvent from '../utils/createCustomEvent'
import Device from '../utils/device'

class ResizeManager {
  constructor() {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.handleResize = throttle(this.handleResize, 100, {
      leading: false,
    })

    window.addEventListener('resize', this.handleResize, { passive: true })
  }

  handleResize() {
    this.width = window.innerWidth
    this.height = window.innerHeight

    window.dispatchEvent(createCustomEvent(WINDOW_RESIZE, { width: this.width, height: this.height }))

    if (this.width >= 1024) {
      // ?
      Device.size = 'desktop'
    } else if (this.width > 768) {
      Device.size = 'tablet'
    } else {
      Device.size = 'mobile'
    }
  }
}

export default new ResizeManager()
