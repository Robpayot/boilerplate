import uuid from 'uuid/v1'
import 'intersection-observer'

const defaultOptions = {
	root: null,
	rootMargin: '0px',
	datasetId: 'intersectionUid'
}

export default class AbstractObserver {
	constructor(options) {
		options = Object.assign({}, defaultOptions, options)

		this.datasetId = options.datasetId
		delete options.datasetId

		this.bind()

		this.observer = new IntersectionObserver(this.handleInstersection, options)

		this.callbacks = {}
	}

	bind() {
		this.handleInstersection = this.handleInstersection.bind(this)
	}

	handleInstersection(entries) {
		entries.forEach(entry => {
			const id = entry.target.dataset[this.datasetId]

			if (this.callbacks[id] instanceof Function) {
				this.callbacks[id](entry)
			}
		})
	}

	disconnect() {
		this.observer.disconnect()
	}

	observe(element, callback) {
		const id = uuid(10)
		element.dataset[this.datasetId] = id
		this.callbacks[id] = callback
		this.observer.observe(element)
	}

	unobserve(element) {
		const id = element.dataset[this.datasetId]
		delete element.dataset[this.datasetId]
		delete this.callbacks[id]
		this.observer.unobserve(element)
	}
}
