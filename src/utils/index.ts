export const firstLower = (str: string) => str.charAt(0).toLowerCase() + str.slice(1)

const lowerCache: any = {}

export const keysToLowerCase = (obj: any): any => {
	if (!obj || typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') return obj

	var l = obj.length

	if (l) {
		l |= 0
		var result = []
		result.length = l
		for (var i = 0; i < l; i++) {
			var newVal = obj[i]
			result[i] = typeof newVal === 'string' ? newVal : keysToLowerCase(newVal)
		}
		return result
	} else {
		var ret: any = {}
		for (var key in obj) {
			var keyStr = typeof key === 'string' ? key : String(key)
			var newKey = lowerCache[keyStr]
			if (newKey === undefined) {
				newKey = firstLower(keyStr)
				lowerCache[keyStr] = newKey
			}

			var newVal = obj[key]
			ret[newKey] = typeof newVal === 'string' ? newVal : keysToLowerCase(newVal)
		}

		return ret
	}
}
