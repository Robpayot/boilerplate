export function shuffleArray(o) {

	for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);

	return o
}

export function getAncestor(el, className) {

	while ((el = el.parentElement) && !el.classList.contains(className));

	return el
}

export function getIndex(el) {

	return Array.from(el.parentNode.children).indexOf(el)
}

export function getURLParameters() {

	const params = {}

	if (location.search) {

		const parts = location.search.substring(1).split('&')

		for (let i = 0; i < parts.length; i++) {

			const nv = parts[i].split('=')

			if (!nv[0]) continue

			params[nv[0]] = nv[1] || true
		}
	}

	return params
}

export function isWebGL() {
	// On crée un élément canvas. Le canvas n'est pas
	// ajouté au document et il n'est donc jamais
	// affiché dans la fenêtre du navigateur
	let canvas = document.createElement('canvas')

	// On récupère le contexte WebGLRenderingContext
	// depuis l'élément canvas.
	let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

	// On affiche le résultat.
	if (gl && gl instanceof WebGLRenderingContext) return true
	else return false

}

export function isTouch() {

	return 'ontouchstart' in window || navigator.maxTouchPoints
}

export function isFacebookApp() {

	const ua = navigator.userAgent || navigator.vendor || window.opera

	return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1
}

export function autoBind(self) {

	for (const key of Object.getOwnPropertyNames(self.constructor.prototype)) {

		const val = self[key]

		if (key !== 'constructor' && typeof val === 'function') self[key] = val.bind(self)
	}

	return self
}

export function getOffsetTop(elem) { // issues on ie11

	if (!elem) {
		return 0
	}

	const bounds = elem.getBoundingClientRect()
	const bodyTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop

	return bounds.top + bodyTop
}

export function getOffsetLeft(elem) { // issues on ie11

	if (!elem) {
		return 0
	}

	const bounds = elem.getBoundingClientRect()
	// const bodyTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop

	return bounds.left
}

export function parse_query_string (query) {
	let vars = query.split('&')
	let query_string = {}
	for (let i = 0; i < vars.length; i++) {
		let pair = vars[i].split('=')
		// If first entry with this name
		if (typeof query_string[pair[0]] === 'undefined') {
			query_string[pair[0]] = decodeURIComponent(pair[1])
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === 'string') {
			let arr = [query_string[pair[0]], decodeURIComponent(pair[1])]
			query_string[pair[0]] = arr
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(decodeURIComponent(pair[1]))
		}
	}
	return query_string
}

export function IEVersion() {

	let myNav = navigator.userAgent.toLowerCase()

	return myNav.indexOf('msie') !== -1 ? parseInt(myNav.split('msie')[1]) : false
}

export function isInViewport(element) { // Determine if an element is in the visible viewport
	let rect = element.getBoundingClientRect()
	let html = document.documentElement
	return (
		rect.top >= 0 - element.offsetHeight && // specific modification
		rect.left >= 0 &&
		rect.bottom <= element.offsetHeight && // specific modification
		rect.right <= (window.innerWidth || html.clientWidth)
	)
}

export function getCookie(cname) {
	let name = `${cname}=`
	let decodedCookie = decodeURIComponent(document.cookie)
	let ca = decodedCookie.split(';')
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i]
		while (c.charAt(0) === ' ') {
			c = c.substring(1)
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length)
		}
	}
	return ''
}

export function browser() {
	let ua = navigator.userAgent,
		tem,
		M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || []
		return `IE ${(tem[1] || '')}`
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\b(OPR|Edge)\/(\d+)/)
		if (tem !== null) return tem.slice(1).join(' ').replace('OPR', 'Opera')
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?']
	tem = ua.match(/version\/(\d+)/i)
	if (tem !== null) M.splice(1, 1, tem[1])
	return M.join(' ')
}
