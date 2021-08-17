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

$0.textContent // 把$0中的文本结点拼接出来(去掉标签)
$0.textContent = '' // 在$0中加入文本(加入标签则直接为文本) 、
$0.innerHtml = '' // innerHtml加入的标签就是标签
$0.outerText === $0.innerHtml

function getTextContent(node) { // 返回node结点的文本内容
    if (node.nodetype == document.TEXT_NODE) {
        return node.data
    } else if (node.nodetype == document.ELEMENT_NODE) {
        return Array.from(node.ChildNodes).map(getTextContent).join('')
    }
    return ''
}

function gitOuterHTML(node) { //node元素从开始到结束所有html标签
    if (node.nodetype == document.TEXT_NODE) {
        return node.data
    } else if (node.nodetype == document.ELEMENT_NODE) {
        var tagName = node.tagName.toLowerCase() //转为小写
        var attrNames = node.getAttributeName() // 拿到标签中的属性名和属性值
        var attrs = attrNames.map(name => { //将一个标签的所有属性名和属性值map出来组成字符串
            var val = node.getAttributeName(name) //拿到每个属性名的属性值
            return name + '="' + val + '"'
        }).join('')
        return '<' + tagName + attrs + '>' + Array.from(node.ChildNodes).map(getTextContent).join('') + '</' + tagName + '>'
            // return `<${node.tagName(返回当前元素的标签名)} ${attrs}>` +  Array.from(node.ChildNodes).map(getTextContent).join('') + `</${node.tagName}>` 
    }

}

function getInnerHTML(node) {
    var result = ''
    for (var child of node.childNodes) {
        if (child.nodeType == document.TEXT_NODE) {
            result += child.data
        } else if (child.nodeType == document.ELEMENT_NODE) {
            var tagName = child.tagName.toLowerCase()
            var attrNames = child.getAttributeNames()
            var attrs = attrNames.map(name => {
                var val = child.getAttribute(name)
                return name + '="' + val + '"'
            }).join(' ')
            result += `<${tagName} ${attrs}>` + getInnerHTML(child) + `</${tagName}>`
        }
    }
    return result
}

window.scrollTo(0, 0) //  绝对滚动 直接滚动到0,0位置
window.scrollBy(0, 10) // 相对滚动  相对于现在的位置向下滚动10
$0.classList // 方便操作标签里的class属性
$0.classList.add() // 在class属性中加入
$0.classList.remove() // 删除
$0.classList.toggle() // 如果有就删除，如果没有就加入
$0.classList.replace('a', 'b') // 把原来的a替换为b
xxx.preventDefault() // 阻止浏览器为其执行默认事件