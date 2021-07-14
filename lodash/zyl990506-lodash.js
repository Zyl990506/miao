var zhangyongle = function() {
    function chunk(array, size) {
        var result = []
        for (var i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size))
        }
        return result
            // var res1 = []
        var res2 = []
        for (var i = 0; i < array.length; i++) {
            res2.push(array[i])
            if (res2.length == size) {
                res1.push(res2)
                res2 = []
            }
            if (res2.length > 0) {
                res1.push(res2)
            }
            return res1
        } //
    }

    function compact(array) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            if (array[i]) {
                result.push(array[i])
            }
        }
        return result
    }

    function flattenDeep(array) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            result.concat(...array)
        }
    }
}