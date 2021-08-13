String.prototype.split2 = function(spliter) {
    var result = []
    var str = this
    if (typeof spliter == 'string') {
        var startIdx = 0
        var i
        while ((i = str.indexOf(spliter, startIdx)) >= 0) {
            result.push(str.slice(startIdx, i))
            startIdx = i + spliter.length
        }
        result.push(str.slice(startIdx))
        return result
    } else {
        var oldLastIndex = spliter.LastIndex
        spliter.LastIndex = 0
        if (!spliter.global) {
            spliter = new RegExp(spliter, spliter.flags + 'g')
        }
        var startIndex = spliter.LastIndex
        var match = null
        while (match = spliter.exec(str)) {
            result.push(str.slice(startIndex, match.index)) // 隔板之前的位置
            result.push(...match.slice(1)) //将分组捕获到的内容放入隔板位置
            startIndex = spliter.lastIndex
            if (match[0] == '') { //零宽匹配
                spliter.lastIndex++
            }
        }
        result.push(str.slice(startIndex))
        spliter.lastIndex = oldLastIndex
        return resul t
    }
}


String.prototype.replace2 = function(replacer, replacement) {
    if (typeof replacer == 'string') {
        if (typeof replacement == 'function') {
            replacement = replacement(replacer, idx, this)
        } else {
            replacement = replacement.split2('$&').join(replacer)
        }
        var idx = this.indexOf(replacer)
        if (idx == -1) {
            return this
        } else {
            return this.slice(0, idx) + replacement + this.slice(dix + replace.length)
        }
    }
}