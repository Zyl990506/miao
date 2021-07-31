var zyl990506 = function() {
    function chunk(array, size) {
        var result = []
        for (var i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size))
        }
        return result
            //  var res1 = []
            // var res2 = []
            // for (var i = 0; i < array.length; i++) {
            //     res2.push(array[i])
            //     if (res2.length == size) {
            //         res1.push(res2)
            //         res2 = []
            //     }
            //     if (res2.length > 0) {
            //         res1.push(res2)
            //     }
            //     return res1
            // } 
            // 
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


    function difference(array, ...values) {
        let val = []
        let res = []
        for (let i = 0; i < values.length; i++) {
            val.push(...values[i])
        }
        for (let i = 0; i < array.length; i++) {
            if (!val.includes(array[i])) {
                res.push(array[i])
            }
        }
        return res
            //  values.reduce( (val,item) => {
            //    return val.concat(item)
            //  },[])
            //  let res = []
            //  array.forEach((n) => {
            //     if (!(n in val)){
            //     res.push(n)
            //     }
            //  } )
    }


    function drop(array, n = 1) {
        array.splice(0, n)
        return array
    }


    function dropRight(array, n = 1) {
        if (n > array.length) {
            return []
        }
        array.slice(0, array.length - n)
        return array
    }


    function fill(arr, val, start = 0, end = arr.length) {
        for (var i = start; i < end; i++) {
            arr[i] = val
        }
        return arr
    }

    function flatten(arr) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                res.push(...arr[i])
            } else {
                res.push(arr[i])
            }
        }
        return res
    }



    function flattenDeep(arr) {
        return [].concat(...arr)
    }



    function flattenDepth(arr, depth) {
        var res1 = arr
        while (depth) {
            var res1 = flatten(res1)
            depth--
        }
        return res1
    }


    function reverse(arr) {
        var left = 0
        var right = arr.length - 1
        while (left < right) {
            var a = arr[left]
            arr[left] = arr[right]
            arr[right] = a
            left++
            right--
        }
        return arr
    }


    function uniq(arr) {
        var res = []
        for (var i = 0; i < arr.length; i++) {
            if (!res.includes(arr[i])) {
                res.push(arr[i])
            }
        }
        return res
    }



}