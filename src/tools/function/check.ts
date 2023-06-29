/**
 * 验证电子邮箱格式
 */
function email(value : string) {
	return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
}

/**
 * 验证手机格式
 */
function mobile(value : string) {
	return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value)
}

/**
 * 验证固定电话
 */
function landline(value : string) {
	const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/
	return reg.test(value)
}

/**
 * 验证URL格式
 */
function url(value : string) {
	return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/
		.test(value)
}

/**
 * 验证身份证号码
 */
function idCard(value : string) {
	return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
		value
	)
}

/**
 * 是否车牌号
 */
function carNo(value : string) {
	// 新能源车牌
	const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
	// 旧车牌
	const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
	if (value.length === 7) {
		return creg.test(value)
	} if (value.length === 8) {
		return xreg.test(value)
	}
	return false
}

/**
 * 金额,只允许2位小数
 */
function amount(value : number | string) {
	if (typeof value === 'number') {
		value = String(value)
	}
	// 金额，只允许保留两位小数
	return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value)
}

/**
 * 只能输入字母
 */
function letter(value : string) {
	return /^[a-zA-Z]*$/.test(value)
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value : string) {
	// 英文或者数字
	const reg = /^[0-9a-zA-Z]*$/g
	return reg.test(value)
}

/**
 * 是否短信数字验证码
 */
function smsCode(value : number | string, len = 6) {
	if (typeof value === 'number') {
		value = String(value)
	}
	return new RegExp(`^\\d{${len}}$`).test(value)
}

/** 是否图片格式
 * @param {Object} value
 */
function image(value : string) {
	const newValue = value.split('?')[0]
	const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
	return IMAGE_REGEXP.test(newValue)
}

/**
 * 是否视频格式
 * @param {Object} value
 */
function video(value : string) {
	const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i
	return VIDEO_REGEXP.test(value)
}

/**
 * 验证十进制数字
 */
function number(value : number | string) {
	if (typeof value === 'number') {
		value = String(value)
	}
	return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)
}

export {
	email,
	mobile,
	landline,
	url,
	idCard,
	carNo,
	amount,
	letter,
	enOrNum,
	smsCode,
	image,
	video,
	number
}