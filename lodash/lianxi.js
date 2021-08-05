function createTreeNod(val) {
    return {
        val: val,
        left: null,
        right: null
    }
}

function arrayToTree(array, rootIdx = 0) {
    var rootVal = array[rootIdx]
}



function isEqual(a, b) {
    if (a === b) {
        return true
    }
    var typea = typeof a
    var typeb = typeof b
    if (typea !== typeb) {
        return false
    } else {
        if (typea == 'object') {
            var keysa = keys(a)
            var keysb = keys(b)
            if (keysa.lengh !== keysb.length) {
                return false
            } else {
                keysa.sort()
                keysb.sort()
                for (var index in keysa) {
                    if (keysa[index] !== keysb[index]) {
                        return false
                    }
                }
            }
            for (var key in a) {
                if (!isEqual(a[key], b[key])) {
                    return false
                }
            }
            for (var key in b) {
                if (!isEqual(a[key], b[key])) {
                    return false
                }
            }
            return true
        } else {
            return a === b
        }
    }
}

function keys(obj) {
    var result = []
    for (var key in obj) {
        result.push(key)
    }
    return result
}



// 二叉堆
class PriorityQueue {
    constructor() {
        this.elements = []
    }
    _swap(i, j) {
            var t = this.elements[i]
            this.elements[i] = this.elements[j]
            this.elements[j] = t
        }
        // 从idx位置开始时向上调整
    heapUp(idx) {
            while (idx > 0) {
                var pIdx = (idx - 1) >> 1
                if (this.elements[pIdx] < this.elements[idx]) {
                    this._swap(idx, pIdx)
                    idx = pIdx
                } else {
                    return
                }
            }
        }
        // 从idx位置向下调整
    heapDown(idx) {
            var l = this.elements.length
            while (idx < l) {
                var maxIdx = idx
                var lIdx = maxIdx * 2 + 1
                var rIdx = maxIdx * 2 + 2
                if (lIdx < l && this.elements[lIdx] > this.elements[maxIdx]) {
                    maxIdx = lIdx
                }
                if (rIdx < l && this.elements[rIdx] > this.elements[maxIdx]) {
                    maxIdx = rIdx
                }
                if (maxIdx !== idx) {
                    this._swap(maxIdx, idx)
                } else {
                    return
                }
            }
        }
        // 往堆里增加一个元素
    push(val) {
            this.elements.push(val)
            this.heapUp(this.elements.length - 1)
            return this
        }
        // 将堆顶元素删除并返回 
    pop() {
            var result = this.elements[0]
            this.elements[0] = this.elements.pop()
            this.heapDown(0)
            return result
        }
        //查看堆顶元素，不删除它
    peek() {
        return this.elements[0]
    }
}







function ListNode(val) {
    this.val = val
    this.next = next
}
var l = null

function pushStack(val) {
    var node = new ListNode(val)
    node.next = l
    l = node
}

function popStack() {
    if (l) {
        var val = l.val
        l = l.next
        return val
    } else {
        return undefined
    }
}

function Stack() {
    this.head = null
    this.size = 0
}

// 往栈顶增加一个元素
Stack.prototype.push = function(val) {
        var node = new.ListNode(val)
        node.next = this.head
        this.head = node
        this.size++
            return this
    }
    // 从栈顶删除并返回一个元素
Stack.prototype.pop = function() {
        if (this.head) {
            var val = this.head.val
            this.head = this.head.next
            this.size--
                return val
        } else {
            return undefined
        }
    }
    // 查看栈顶元素，不删除
Stack.prototype.peek = function() {
    if (this.head) {
        return this.head.val
    }
}

function Queue() {
    this.head = null
    this.tail = null
    this.size = 0
}

// 往队列里增加一个元素
Queue.prototype.enqueue = function(val) {
        var node = new ListNode(val)
        if (this.head = null) {
            this.head = this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }
    // 从队列中删除并返回一个元素
Queue.prototype.dequeue = function() {
    if (this.head) {
        var val = this.head.val
        this.head = this.head.next
        if (this.head == null) {
            this.nail = null
        }
        return val
    }
}


函数的this
函数的this指向什么值取决于函数的【 调用形式】， 与函数的定义位置和调用位置无关
调用形式主要分以下几种：
f() 以函数的形式调用， this指向全局作用域对象， 在浏览器里是window
obj.f() 以对象方法的形式调用， f的this指向obj
f.call / apply(obj5) 直接用call或apply调用， f的this指向obj5
new f() 以构造函数的形式调用， f里的this指向一新的空对象， 且其原型为f.prototype
将函数传给其它函数时， 无法确定函数的this， 需要看那个函数是以何种形式调用该函数的
将函数从对象里读出放一个变量中， 通过该变量调用该函数， this为window
箭头函数的this相当于一个未在箭头函数内声明的普通变量， 即箭头函数的this看其外面的this， 如果外面是一个函数， 得先确定这个函数此时的this， 如果外面依然是一个箭头的内部， 则看更外层
原型
除了null和undefined， 每个值都有原型， 可以通过__proto__属性读到， 也可以通过Object.getPrototypeOf(cal) 访问到
原型的作用是做属性读取的后备(fallback)
即当在一个对象上查找某个属性找不到时， 会到它的原型对象上找， 如果原型对象上找不到， 会在该原型对象的原型上找， 以此类推
每个函数都自动有一个prototype属性， 这个属性跟该函数的__proto__没有任何关系
它是做为被该函数构造出来的对象的原型的
构造函数的得名： 构造函数会申请必要的空间， 并在该空间内存储为了表示该对象所必要的信息

构造函数在new的什么发生了什么
new Constructor(...args) ===
    NEW(Constructor, ...args)

function NEW(Constructor, ...args) {
    var obj = Object.create(Constructor.prototype)
    var result = Constructor.call(obj, ...args)
    if (result && typeof result === 'object') {
        return result
    } else {
        return obj
    }




    function Vector(x, y) {
        if (new.target !== Vector) {
            return new Vector(x, y)
        }
        this.x = x
        this.y = y
    }
    var a = new Vector(1, 2)
    var b = new Vector(3, 4)
    Vector.prototype.plus = function(v) {
        return new Vector(this.x + v.x, this.y + v.y)
    }
    Vector.prototype.minus = function(v) {
        return new Vector(this.x - v.x, this.y - v.y)
    }

    function Complex(real, imag) {
        if (arguments.length == 1 && typeof real == 'string') {
            var c = real.trim()
            real = parseInt(c)
            var idx = c.indexOf('+', 1)
            if (idx == -1) {
                idx = c.indexOf('-', 1)
            }
            imag = parseInt(c.slice(idx))
        }
        this.real = real
        this.imag = imag
    }
    Complex.prototype.plus = function(c) {
        return new complex(this.real + c.real, this.imag + c.imag)
    }
    Complex.prototype.minus = function(c) {
        return new complex(this.real - c.real, this.imag - c.imag)
    }
    Complex.prototype.multiple = function(c) {
        return new complex((this.real * c.real - this.imag * c.imag) + (c.real * this.imag + this.real * c.imag))
    }
    Complex.prototype.division = function(c) {
        return new complex((this.real * c.real - this.imag * c.imag) + (c.real * this.imag + this.real * c.imag) / (c.real ** 2 + c.imag ** 2))
    }

    var f = function() {
        var obj = {
            name: 'zhangshan',
            age: 888,
            height: 999,
        }

        return function(prop) {
            return obj[prop]
        }
    }()

    不改变以上代码， 获得到函数内obj对象的引用
    Object.defineProperty(Object.prototype, 'self', {
        get: function() { return this }
    })

    var obj = f('self')

    function MyMap() {
        this._map = []
        this._values = []

    }
    MyMap.prototype.forEach = function(iterator) {
            for (var i = 0; i < this._keys.length; i++) {
                var key = this._keys[i]
                var val = this._values[i]
                iterator(val, key)
            }
        }
        //获取一个key在_keys中的下标，需要正确处理NaN
    MyMap.prototype._keyIndex = function(key) {
        if (key !== key) { // 当key是NaN时
            return this._keys.findIndex(it => it !== it)
        } else {
            return this._keys.indexOf(key)
        }
    }
    MyMap.prototype.set = function(key, value) {
        if (this.has(key)) { // 如果映射的key已经存在
            var idx = this._keys.indexOf(key)
            this._values[idx] = value
        } else { // 映射的key不存在
            this._keys.push(key)
            this._values.push(value)
        }
        return this
    }
    MyMap.prototype.get = function(key) {
        var idx = this._keyIndex(key)
        if (idx >= 0) {
            this._keys.splice(idx, 1)
            this._values.splice(idx, 1)
            return true
        }
        return false
    }
    MyMap.prototype.has = function(key) {
        return this._keys.includes(key)
    }
    MyMap.prototype.delete = function(key) {

    }
    MyMap.prototype.clear = function() {
        this._keys.length = 0
        this._values.length = 0
    }







    class ListNode {
        constructor(key, val) {
            this.key = key
            this.val = val
            this.next = null
        }
    }
    class HashMap {
        constructor() {
            this._capacity = 16
            this._size = 0
            this.elements = new Array(this._capacity).fill(null)
        }
        rehash() {
            var _elements = this._elements
            var l = this.elements.length
            this._capacity = this._capacity * 2
            var _elements = new Array(this._capacity).fill(null)
            this._size = 0
            for (var i = 0; i < 1; i++) {
                var head = this.elements[i]
                while (head) {
                    this.set(head.ley, head.val)
                }
            }
        }
        hashkey(str) {
            var hash = 13131133
            var seed = 11313
            for (var i = 0; i < str.length; i++) {
                hash = (hash * seed >>> 0) + str.charCodeAt(i)
            }
            return hash & (this.elements.length - 1)
        }
        set(key, val) {
            var idx = this.hashkey(key)
            var head = this.elements[idx]

            while (head) { //查找有无此key对应的结点
                if (head.key == key) { // 如果找到就直接替换节点的val
                    head.val = val
                    return
                }
                head = head.next
            }
            this._size++
                var node = new ListNode(key, val)
            node.next = this.elements[idx]
            this.elements[idx] = node
            this._size++
                if (this._size / this._capacity > 0.75) {
                    this.rehash() // 扩容
                }
            return this
        }
        get(key) {
            var idx = this.hashkey(key)
            var head = this.elements[idx]
            while (head) {
                if (head.key == key) {
                    return head.val
                }
                head = head.next
            }
        }
        has(key) {
            var idx = this.hashkey(key)
            var head = this.elements[idx]
            while (head) {
                if (head.key == key) {
                    return true
                }
                head = head.next
            }
            return false
        }
        delete(key) {
            var idx = this.hashkey(key)
            var head = this.elements[idx]
            if (!head) {
                return false
            }
            if (head.key == key) {
                rhis.elements[idx] = head.next
                this._size--
                    return true
            }
            while (head.next) {
                if (head.next.key == key) {
                    head.next = head.next.next
                    this._size--
                        return true
                }
            }
            return false
        }
        get size() {
            return this._size
        }







        正则表达式\ d = [0 - 9]\ w = [0 - 9 a - zA - Z_]\ s = 任意空白符[ ^ ] 表示可以匹配任意符号包括换行等 *
            允许出现零次或多次？ 表示左边的字符出现零次或一次 { 4 }
        表示必须出现4次 { 2, 4 }
        表示2到4次 { 4， }
        表示4次以上
        i 对大小写不敏感
            ?
            : 不分组， 不出现？ < > 起名分组 ^
            开始符号
        $ 结束符号
            ^
            !以！ 开始\ b 单词边界
        momentjs.com
        零宽断言：
        断言某个位置左边或右边满足或不满足某种条件
            "正"
        指要要遇见某种模式, "负"
        指不能匹配某种模式
            "预测"
        指向右匹配， "回顾"
        指向左匹配
        正预测先行断言(positive lookahead)：( ? = foo) 要求某个位置的右边匹配xxx
        负预测先行断言(negative lookahead)：( ? !foo) 要求某个位置的右边不能匹配xxx
        正回顾后发断言(positive lookbehind)：( ? <= foo) 要求某个位置的左边匹配xxx
        负回顾后发断言(negative lookbehind)：( ? < !foo) 要求某个位置的左边不能匹配xxx
        需要注意的是， 零宽断言的匹配必须发生在断言位置的旁边， 紧挨着断言位置
        多个断言可以连续断言同一个位置， 即要求同一个位置满足多个不同的条件
            ( ? < !.) 等价于多行情况下的 ^ , 匹配每行的开头： 左边不能遇到除回车以外的任意符号( ? < ![ ^ ]) 等价于单行情况下的 ^ ，匹配字符串的开头： 左边不能遇到任意符号( ? !.) 等价于多行情况下的 $, 匹配每行的开头： 右边不能遇到除回车以外的任意符号( ? ![ ^ ]) 等价于单行情况下的 $， 匹配字符串的开头： 右边不能遇到任意符号( ? <= \w)( ? !\w) | ( ? < !\w)( ? = \w) 等价于\ b




        String.prototype.split2 = function {

        }