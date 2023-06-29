import { number } from './check'
import { isEmpty } from '@/tools/lodash/lodashFix'
/**
 * @description 用于获取用户传递值的px值  如果用户传递了"xxpx"或者"xxrpx"，取出其数值部分，如果是"xxxrpx"还需要用过uni.upx2px进行转换
 * @param {number|string} value 用户传递值的px值
 * @param {boolean} unit
 * @returns {number|string}
 */
function toPx(value: number | string, unit = false): string | number {
  if (typeof value === 'number') {
    value = String(value)
  }

  if (number(value)) {
    return unit ? `${value}px` : Number(value)
  }
  // 如果带有rpx，先取出其数值部分，再转为px值
  if (/(rpx|upx)$/.test(value)) {
    return unit ? `${uni.upx2px(parseInt(value, 10))}px` : Number(uni.upx2px(parseInt(value, 10)))
  }

  return unit ? `${parseInt(value, 10)}px` : parseInt(value, 10)
}

/**
 * @description 样式转换
 * 对象转字符串，或者字符串转对象
 * @param {object | string} customStyle 需要转换的目标
 * @param {String} target 转换的目的，object-转为对象，string-转为字符串，默认为object
 * @returns {object|string}
 */
function addStyle(customStyle: string | object, target = 'object'): string | object {
  // 字符串转字符串，对象转对象情形，直接返回
  if (
    isEmpty(customStyle) ||
    (typeof customStyle === 'object' && target === 'object') ||
    (target === 'string' && typeof customStyle === 'string')
  ) {
    return customStyle
  }
  // 字符串转对象
  if (typeof customStyle === 'string' && target === 'object') {
    // 去除字符串样式中的两端空格(中间的空格不能去掉，比如padding: 20px 0如果去掉了就错了)，空格是无用的
    customStyle = trim(customStyle)
    // 根据";"将字符串转为数组形式
    const styleArray = customStyle.split(';')
    const style: { [k: string]: string } = {}
    // 历遍数组，拼接成对象
    for (let i = 0; i < styleArray.length; i++) {
      // 'font-size:20px;color:red;'，如此最后字符串有";"的话，会导致styleArray最后一个元素为空字符串，这里需要过滤
      if (styleArray[i]) {
        const item = styleArray[i].split(':')
        style[trim(item[0])] = trim(item[1])
      }
    }
    return style
  }
  // 这里为对象转字符串形式
  let string = ''
  for (const [k, v] of Object.entries(customStyle)) {
    // 驼峰转为中划线的形式，否则css内联样式，无法识别驼峰样式属性名
    const key = k.replace(/([A-Z])/g, '-$1').toLowerCase()
    string += `${key}:${v};`
  }
  // 去除两端空格
  return trim(string)
}

/**
 * @description 添加单位，如果有rpx，upx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
 * @param {string|number} value 需要添加单位的值
 * @param {string} unit 添加的单位名 默认为'px'
 */
function addUnit(value: string | number = 'auto', unit = 'px'): string {
  value = String(value)
  // 用uView内置验证规则中的number判断是否为数值
  return number(value) ? `${value}${unit}` : value
}

/**
 * @description 去除空格
 * @param String str 需要去除空格的字符串
 * @param String pos both(左右)|left|right|all 默认both
 */
function trim(str: string, pos = 'both'): string {
  str = String(str)
  if (pos === 'both') {
    return str.replace(/^\s+|\s+$/g, '')
  }
  if (pos === 'left') {
    return str.replace(/^\s*/, '')
  }
  if (pos === 'right') {
    return str.replace(/(\s*$)/g, '')
  }
  if (pos === 'all') {
    return str.replace(/\s+/g, '')
  }
  return str
}

export { toPx, addStyle, addUnit, trim }
