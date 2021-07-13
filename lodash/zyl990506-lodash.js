var zhangyongle = function() {
    function chunk(array, size) {
        var result = []
        for (var i = 0; i < array.lenght; i += size) {
            result.push(array.slice(i, i + size))
        }
        return result
    }
}