\
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


    function fromPairs(pairs) {
        var map = {}
        for (var i = 0; i < pairs.length; i++) {
            map[pairs[i][0]] = pairs[i][1]
        }
        return map
    }



    function head(arr) {
        return arr.shift()
    }


    function indexOf(arr, val, fromIndex = 0) {
        for (var i = fromIndex; i < arr.length; i++) {
            if (arr[i] == val) {
                return i
            }
        }
        return -1
    }



    function initial(arr) {
        arr.pop()
        return arr
    }



    function join(arr, separator = ',') {
        var res = arr[0] + ''
        for (var i = 1; i < arr.length; i++) {
            res += separator + arr[i]
        }
        return res
    }


    function last(arr) {
        return arr.pop()
    }


    function lastIndexOf(arr, val, fromIndex = arr.length - 1) {
        for (var i = fromIndex; i > 0; i--) {
            if (arr[i] == val) {
                return i
            }
        }
        return -1
    }



    function pull(arr, ...vals) {
        var res = []
        for (let i of arr) {
            if (!vals.includes(i)) {
                res.push(i)
            }
        }
        return res
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



    function sortedIndex(arr, val) {
        var l = 0
        var r = arr.length
        while (l < r) {
            var m = Math.floor(l + r) / 2
            if (arr[m] > val) {
                l = m + 1
            }
            if (arr[m] < val) {
                r = m
            }
        }
        return r
    }



    function union(...arr) {
        var res = []
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (!res.includes(arr[i][j])) {
                    res.push(arr[i][j])
                }
            }
        }
        return res

        // function union(...arr) {
        //     var res = []
        //     arr.forEach((item) => {
        //         item.forEach((j) =>{
        //             if(!res.includes(j)) {
        //                 res.push(j)
        //             }
        //         })
        //     })
        //     return res
        // }
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


    function uniqBy(arr) {
        var res = []
        for (var i = )
    }



    function zip(...arrs) {
        var res = []
        for (var i = 0; i < arrs[0].length; i++) {
            res.push([])
        }
        for (var i = 0; i < arrs.length; i++) {
            for (var j = 0; j < arrs[i].length; j++) {
                res[j][i] = arrs[i][j]
            }
        }
        return res
    }



    function unzip(...arrs) {
        var res = []
        for (var i = 0; i < arrs[0].length; i++) {
            res.push([])
        }
        for (var i = 0; i < arrs.length; i++) {
            for (var j = 0; j < arrs[i].length; j++) {
                res[j][i] = arrs[i][j]
            }
        }
        return res
    }






    function concat(arr, vals) {
        var res = []
        for (var i = 0; i < arr.length; i++) {
            res.push(arr[i])
        }

    }

}