import {WINDOW_RESIZE} from '../utils/events'

import throttle from 'lodash/throttle'
import EmitterManager from './EmitterManager'

class ResizeManager {

	constructor() {
		this.width = window.innerWidth
		this.height = window.innerHeight

		this.handleResize = throttle(this.handleResize, 100, {
			leading: false
		})

		window.addEventListener('resize', this.handleResize, {passive: true})
	}

	handleResize() {
		this.width = window.innerWidth
		this.height = window.innerHeight

		EmitterManager.emit(WINDOW_RESIZE, this.width, this.height)
	}
}

export default new ResizeManager()
