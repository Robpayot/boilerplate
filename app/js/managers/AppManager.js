import './ResizeManager'
import Device from '../utils/device'
import { WINDOW_RESIZE } from '../constants/index'
import MasterView from '../views/MasterView'

class AppManager {
  constructor() {
    console.log('app manager')

    this.handleResize()
  }

  start = () => {
    console.log('start')

    // No routes, only one view
    this.currentPage = new MasterView()

    window.addEventListener(WINDOW_RESIZE, this.handleResize)
  }

  handleResize = e => {
    console.log(e)
    const { width } = e
    console.log(width)
    if (width >= 1024) {
      // ?
      Device.size = 'desktop'
    } else if (width > 768) {
      Device.size = 'tablet'
    } else {
      Device.size = 'mobile'
    }
  }
}

export default new AppManager()
