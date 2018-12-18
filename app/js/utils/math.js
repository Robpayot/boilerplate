export function clamp(value, min, max) {

	return Math.min(Math.max(value, min), max)
}

export function range(val, oldMin, oldMax, newMin, newMax) {

	return (val - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin
}

export function randomInt(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomFloat(min, max, decimals = 1) {

	return parseFloat((Math.random() * (min - max) + max).toFixed(decimals), 10)
}

export function toDegree(radians) {

	return radians * 180 / Math.PI
}

export function toRadian(degrees) {

	return degrees * Math.PI / 180
}

export function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight, cover = true) {

	const fn = cover ? Math.max : Math.min
	const ratio = fn(maxWidth / srcWidth, maxHeight / srcHeight)

	return {
		w: parseInt(srcWidth * ratio, 10),
		h: parseInt(srcHeight * ratio, 10),
		ratio
	}
}

export function getPointsDist(p1, p2) {

	return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y))
}

export function getCoeffDirecteur(p1, p2) {

	const m = (p1.y - p2.y) / (p1.x - p2.x)
	const p = p1.y - m * p1.x

	return {
		m,
		p
	}
}

export function prependZero(str, totalNbr, val = 0) {

	return str.toString().length < totalNbr ? prependZero(val.toString() + str, totalNbr) : str
}

export function round(value, dec) {

	return Math.round(value * dec) / dec
}

export function getMin(arr) {

	let min = arr.reduce((a,b) => {
		return Math.min(a, b)
	})

	return min
}

export function getMax(arr) {

	let max = arr.reduce((a,b) => {
		return Math.max(a, b)
	})

	return max
}

export function removeDuplicates(arr) {
	let unique_array = []
	for (let i = 0; i < arr.length; i++) {
		if (unique_array.indexOf(arr[i]) === -1) {
			unique_array.push(arr[i])
		}
	}
	return unique_array
}

