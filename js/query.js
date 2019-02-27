module.exports = (checkStr) => {
  // 判断地址是否带有参数
  if (checkStr.indexOf('?') !== -1) {
    // 若存在参数截取?后的参数字段
    let queryStr = window.location.href.split('?')[1]
    // 若存在多个参数则将每个参数分组存入数组
    let undertake = queryStr.split('&')
    // 将数组中的每一项拆分成属性与属性值存入事先准备好的空对象
    let queryMap = {}
    undertake.map(item => {
      let attrName = item.split('=')[0]
      let attrValue = item.split('=')[1]
      queryMap[attrName] = attrValue
    })
    // 将处理后得到的对象返回给query函数
    return queryMap
  } else {
    // 若地址不带参数 返回null给query函数
    return null
  }
}
