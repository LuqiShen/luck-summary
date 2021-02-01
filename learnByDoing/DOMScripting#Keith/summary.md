# DOM Scripting

## 第三章 DOM

##### 概要

        · DOM节点:元素节点/文本节点/属性节点
        · 5个常用的DOM方法：
                getElementById
                getElementsByClassName
                getElementsByTagName
                getAttribute
                setAttribute

## 第四章 案例研究：JavaScript图片库

##### 概要

        · 事件处理函数：在本案例中用于继承JavaScript代码和网页
        · DOM新属性：
                childNodes
                nodeType
                nodeValue
                firstChild
                lastChild

## 第五章 最佳实践
##### 概要：
        · 平稳退化：
                确保网页在没有JavaScript的情况下也能正常工作
        · 分离JavaScript：
                把网页的结构和内容与JavaScript脚本的动作行为分开
        · 向后兼容性：
                确保老版本的浏览器不会因为JavaScript脚本而无法显示网页
        · 性能考虑：
                确定脚本的性能最优

## 第六章 案例研究：图片库改进版
##### 概要：
        · 把事件处理函数移出文档
        · 向后兼容
        · 确保可访问

## 第七章 动态创建标记
##### 概要：
        · 传统技术：
                document.write
                innerHTML
        · DOM方法：
                createElement
                createTextNode
                appendChild
                insertBefore
##### 学习记录：
        通过学习“创建新元素”和“修改现有元素”的方法来改变网页结构

##### 7.1 传统方法：document.write方法和innerHTML属性
###### document.write(str)
        功能：可以方便快捷的把字符串插入到文档里
        缺点：违背了“行为与表现分离”的原则，使用这个方法容易让JavaScript代码和HTML代码混杂，不易阅读和编辑
###### innerHTML属性
        功能：读、写某给定元素的HTML内容
##### 7.2 DOM方法
        以动态方式创建标记所改变的就是DOM节点树
###### createELement方法
       document.createELement(nodeName)
       以这种方式动态创建的节点是游离在DOM树外的文档碎片（document fragment），它确实存在，也拥有了自己的DOM属性，但无法显示在浏览器窗口里
###### appendChild方法
        parent.appendChild(child)
        一般与createElement方法联合使用，将文档碎片添加到DOM树上
###### createTextNode方法
        document.createTextNode(text)
##### 7.3 图片库改进
        在已有元素前插入一个新元素：DOM提供了insertBefore()方法
                parentElement.insert(newElement, targetElement)
                其中parentElement = targetElement.parentNode
        DOM本身并没提供与insertBefore相对的insertAfter方法，但是可以自行完成这个函数
##### 7.4 Ajax
        Ajax: 异步加载页面内容的技术
        表现：使用Ajax技术，用户在点击链接时浏览器将不会再刷新整个界面，而是只更新页面的一小部分
###### XMLHttpRequest对象
        1. 对象检测技术：为了兼容所有的浏览器，而对不支持XMLHttpRequest进行平稳退化处理
        2. XMLHTTPRequest:
             ·onreadystatechange：事件处理函数，它会在服务器给XMLHttpRequest对象送回响应的时候被触发执行   
                onreadystatechange = function(){
                        //处理响应
                }
                onreadystatechange = doSomething;
                注：在为onreadystatechange指定函数引用时，不要再函数名后面加括号。因为加括号表示立即调用函数，而我们在此只想把函数自身的引用（而不是函数结果）赋值给onreadystatechange属性


             ·send():此方法用于发送请求

             ·readyState:由浏览器更新、记录不同响应阶段
                值分为5个：
                        0 未初始化
                        1 正在加载
                        2 加载完毕
                        3 正在交互
                        4 完成（在此时可以访问服务器发送回来的数据）
             ·responseText/responseXML：
                这两个属性用于访问服务器发送回来的数据
                responseText: 用于保存文本字符串形式的数据
                responseXML: 用于保存Context-Type头部中指定为"text/xml"的数据, 即一个Document Fragment
        3. 同源策略：
                使用XMLHttpRequest对象发送的请求只能访问其所在的HTML处于同一个源中的数据
                此外有些浏览器也会限制Ajax请求使用的协议
        4. 渐进增强：
                在既有框架基础上，用Ajax拦住发送到服务器的请求，并将请求转交给XMLHttpRequest对象处理，从而使Ajax扮演了一个位于常规站点之上的层
                · Hijax：渐进增强的使用Ajax

##第八章 充实文档的内容
#####概要：
        · 函数：为文档创建“缩略语列表”
        · 函数：为文档创建“文献来源链接”
        · 函数：为文档创建“快捷键清单”
#####学习记录：
        http://friendsofed.com/
#####8.1 不应该做什么
        搜索引擎机器人（searchbot）几乎不支持JavaScript
        
        重要原则：
                渐进增强：核心内容不应该由浏览器支持不稳的DOM方法增添
                平稳退化：保证核心内容一直能被用户访问、
#####8.2 把“不可见”变成“可见”
        属性值在浏览器中不显示，但是不同浏览器对不同属性值有着不同的处理方式，为了消除这种差异，可以使用DOM编程解决
#####8.3 内容
######8.3.1 选用HTML、XHTML还是HTML5
        文档类型（DOCTYPE）<---> 标记 必须相对应
        XHTML：标签闭合；仅允许小写
        HTML：部分标签可以不闭合；允许大写或小写
#####8.4 显示“缩略语列表”
#####8.5 显示“文件来源链接表”
        注：在编写DOM脚本时，不要想当然的认为某个节点一定是一个元素节点。如果没有百分百的把握，就一定要去检查nodeType的属性值。很多DOM方法只能用于元素节点，如果用在文本节点上就会出错。
#####8.6 显示“快捷键清单”
#####8.7 检索和添加信息
        完成三个函数的基本思路：
                用JavaScript函数先把文档结构里的一些现有信息提取出来，再把那些信息以一种清晰和有意义的方式重新插入到文档里去
        需要对文档信息进行检索时，以下DOM方法最有用：
                · getElementById
                · getElementsByTagName
                · getAttribute
        需要把信息插入文档时，以下DOM方法最有用：
                · createElement
                · createTextNode
                · appendChild
                · insertBefore
                · setAttribute
##第九章 CSS-DOM
#####概要
        · style属性
        · 如何检索样式
        · 如何改变样式
#####学习记录
#####9.1 三位一体的网页
        结构层（structural layer）：由HTML或XHTML之类的标记语言负责创建;由标签（tag）对网页内容的语义含义做出描述。
        表示层（presentation layer）：由CSS描述页面如何呈现。
        行为层（behavior layer）：由JavaScript语言和DOM来描述内容应该如何响应事件。

        其中行为层和表示层总是存在。在未知名具体指令的情况下，web浏览器拥有它的默认样式和默认事件处理函数。

        分离：
                (X)HTML搭建文档的结构
                CSS设置文档的呈现效果
                DOM脚本实现文档的行为
        重合：
                CSS可以使用伪类（:hover等）控制脚本行为
                DOM脚本可以通过一些方法（createElement等）改变文档结构；也可以通过style属性改变CSS从而改变呈现效果
#####9.2 style属性
        文档的每个元素都包含一个属性style。style属性包含着元素样式，查询这个属性将返回一个对象而不是一个简单的字符串。

        element.style.property
######9.2.1 获取样式：element.style.property
        注：类似于font-family等中间带有减号的属性，在DOM中被要求使用驼峰命名法，即：
                element.style.fontFamily
        
        绝大部分属性的返回值都与它们的设置值采用同样的计量单位。如color，font-size等。

        注：style属性只能返回HTML标记中的内嵌样式，这降低了style属性的实用性。但是如果用DOM设置样式，就可以由DOM检索出来。
######9.2.2 设置样式：element.style.property = value
        注：style对象的属性值必须放在引号里，不然JavaScript会将等号右边的值解释为一个变量。

##### 9.3 何时该使用DOM脚本设置样式

###### 9.3.1 根据元素在节点树里的位置来设置样式

###### 9.3.2 根据某种条件反复设置某种样式

###### 9.3.3 响应事件

##### 9.4 className属性

        element.className （ = value）

        利用className属性动态添加类，来引用该类在外部css样式表中的样式声明

        在需要给一个元素追加新的class时，可以按照以下步骤操作：
                1. 检查className属性的值是否为null；
                2. 如果是，把新的class设置值直接复制给className属性；
                3. 如果不是，把一个空格和新的class设置值追加到className属性上；

        使用className改变样式，与使用style属性的区别在于：使用CSS而非DOM去设置样式。
        这样的做法有利于表示层和行为层分离的更加彻底。

        抽象（abstraction）：化具体为通用。

##### 9.5 小结

        CSS-DOM技术用于针对读写style对象的各种属性，其中文档中每个元素节点都具备style属性。

        element.style:
                优点：文档中每个元素都具备
                缺点：无法读取外部CSS设置的样式
        
        element.className:
                可以通过追加[css中已声明样式的类]的方式为元素增加样式，从而使表示层（CSS为主）和行为层（脚本为主）分离得更加彻底。

        页面三大层：
                结构层
                表示层
                行为层

## 第十章 用JavaScript实现动画效果

### 10.1 动画基础知识

#### 10.1.1 位置

##### CSS中，position合法值：static（默认）、fixed、relative、absolute

###### static：有关元素按照它们在标记里出现的先后顺序出现在浏览器窗口里

###### relative：与static类似，但可以利用float属性将元素从文档的正常显示顺序中脱离出来

###### absolute：显示的位置由top、bottom、left、right决定，但是它的容器要么是文档本身，要么是用fixed或absolute属性的父元素

#### 10.1.2 时间

##### setTimeout("function",interval)

###### 参数："function" —— String：要执行的函数名

###### 参数：interval —— Number：等待时间的毫秒数

##### clearTimeout(variable)

        此函数的作用是用来取消“等待执行”队列里的某个函数

###### 参数variable —— 保存着某个setTimeout函数的调用返回值

#### 10.1.3 时间递增量

#### 10.1.4 抽象

        setTimeout的机制值得深究

### 10.2 实用的动画

#### 10.2.3 CSS

##### overflow属性：用来处理元素尺寸超出其容器尺寸的情况

###### visible：不裁剪溢出的内容

###### hidden：隐藏溢出的内容

###### scroll：对溢出内容进行隐藏，但显示滚动条

###### auto：如果有溢出则显示滚动条，如果没有则不显示滚动条

#### 10.2.5 变量作用域问题

##### 只与某个元素相关的变量，可以利用该元素的属性值充当