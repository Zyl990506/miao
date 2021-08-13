常规结点 $0.nodetype == document.ELEMENT_NODE == 1
文本结点 $0.nodetype == document.TEXT_NODE == 3
注释结点 $0.nodetype == document.COMMENT_NODE == 8


div = document.createElement('div') //创建一个div
div.innerHtml = '<h1>safasdsadsa</h1>' //在div中创建h1标签
$0.prepend(div) //在指定位置放入div

document.body.previousSibling //前一个
document.body.firstChild.nextSibling //body中第一个子结点的下一个后续兄弟结点


//node结点里是否有str字符串
function talkAbout(node, str) {
    if (node.nodetype = document.TEXT_NODE) {
        return node.data.includes(str)
    } else if (node.nodetype == document.ELEMENT_NODE) {
        for (var i = 0; i < node.ChildNodes.length; i++) {
            var child = node.ChildNodes[i]
            if (talkAbout(child, str)) {
                return true
            }
        }
        return false
    }
}

// 把node结点和其子结点的标签名打印出来
function traverse(node, depth = 0) {
    if (node.nodetype == document.ELEMENT_NODE) {
        console.log(' '.repeat(depth * 2) + node.tagName)
    }
    for (var child of node.ChildNodes) {
        traverse(child, depth + 1)
    }
}

document.body.getElementsByTagName("a") //找到body里所有a标签， 并组成一个类数组对象

// 找出node后代中所有是tagName的元素
function getElementsByTagName(node, tagName) {
    var result = []
    for (var child of node.children) {
        if (child.tagName == tagName) {
            result.push(child)
        }
        result.push(...getElementsByTagName(child, tagName))
    }
    return result
}

document.getElementById() //在页面里找一个唯一的id属性，并返回一个结点对象
function getElementById(id) {
    return find(document.documentElement)

    function find(node) {
        if (node.id == id) {
            return node
        } else {
            for (var child of node.children) {
                var mayBeResult = find(child)
                if (mayBeResult) {
                    return mayBeResult
                }
            }
            return null
        }
    }
}

parentNode.insertBefore(newNode, baseNode) //将newNode结点插入到parentNode的子元素baseNode之前
parentNode.replaceChild(newNode, oldNode) //将parenrNode的子结点oldNode结点替换为newNode
    //一个结点在文档中只能出现一次，不能在两个地方同时出现

$0.append() //在$0中增加结点，可以多个
$0.prepend() //在$0中前面增加结点，可以多个


$0.normalize() //将元素子元素中连续的文本结点合并成一个
function normalize(node) {
    if (node.nodetype == document.ELEMENT_NODE) {
        var str = ''
        var childs = Array.from(node.ChildNodes)
        for (var i = 0; i < childs.length; i++) {
            var child = Childs[i]
            if (child.nodetype == document.TEXT_NODE) {
                str += child.data
                node.removeChild(child)
            } else {
                if (str.length) {
                    var textNode = document.createTextNode(str)
                    node.insertBefore(textNode, child)
                    str = ''
                }
            }
        }
        if (str.length) {
            var textNode = document.createTextNode(str)
            node.appendChild(textNode)
        }
    }
}


//  
function elt(name, attrs, ...childs) {
    var node = document.createElement(name)
    for (var key in attrs) {
        var val = attrs[key]
        node[key] = val
    }
    for (var child of childs) {
        node.append(child)
    }
    return node
}

elt('div', { class: 'foo', id: 'bar', title: 'baz' },
    'qfvzxdsad',
    elt('span')
)