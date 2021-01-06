#DOM Scripting

##第三章 DOM
#####概要：
        · DOM节点:元素节点/文本节点/属性节点
        · 5个常用的DOM方法：
                getElementById
                getElementsByClassName
                getElementsByTagName
                getAttribute
                setAttribute

##第四章 案例研究：JavaScript图片库
#####概要：
        · 事件处理函数：在本案例中用于继承JavaScript代码和网页
        · DOM新属性：
                childNodes
                nodeType
                nodeValue
                firstChild
                lastChild

##第五章 最佳实践
#####概要：
        · 平稳退化：
                确保网页在没有JavaScript的情况下也能正常工作
        · 分离JavaScript：
                把网页的结构和内容与JavaScript脚本的动作行为分开
        · 向后兼容性：
                确保老版本的浏览器不会因为JavaScript脚本而无法显示网页
        · 性能考虑：
                确定脚本的性能最优

##第六章 案例研究：图片库改进版
#####概要：
        · 把事件处理函数移出文档
        · 向后兼容
        · 确保可访问

##第七章 动态创建标记
#####概要：
        · 传统技术：
                document.write
                innerHTML
        · DOM方法：
                createElement
                createTextNode
                appendChild
                insertBefore
####学习记录：
        通过学习“创建新元素”和“修改现有元素”的方法来改变网页结构

#####7.1 传统方法：document.write方法和innerHTML属性
######document.write(str)
        功能：可以方便快捷的把字符串插入到文档里
        缺点：违背了“行为与表现分离”的原则，使用这个方法容易让JavaScript代码和HTML代码混杂，不易阅读和编辑
######innerHTML属性
        功能：读、写某给定元素的HTML内容
#####7.2 DOM方法
        以动态方式创建标记所改变的就是DOM节点树
######createELement方法
       document.createELement(nodeName)
       以这种方式动态创建的节点是游离在DOM树外的文档碎片（document fragment），它确实存在，也拥有了自己的DOM属性，但无法显示在浏览器窗口里
######appendChild方法
        parent.appendChild(child)
        一般与createElement方法联合使用，将文档碎片添加到DOM树上
######createTextNode方法
        document.createTextNode(text)
#####7.3 图片库改进
        · 在已有元素前插入一个新元素：DOM提供了insertBefore()方法
                parentElement.insert(newElement, targetElement)
                其中parentElement = targetElement.parentNode
