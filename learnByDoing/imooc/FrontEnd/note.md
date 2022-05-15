# 前端基础入门

## 第1周 HTML5基础语法与标签

### 第1章 课程简介

### 第2章 互联网基本原理

#### 1. 本地开发，在服务器共享

将本地开发文件，传输到服务器的指定位置，从而产生了网址。

#### 2. HTTP协议/HTTP请求/HTTP响应

- HTTP协议（Hypertext-Transfer-Protocol，超文本传输协议）是互联网数据传输的常见协议

- 一次HTTP事务由"HTTP请求"和“HTTP响应”构成

- 网址前的http://就表示用http协议请求页面

#### 3. 前端与后端的区分

前端运行在浏览器上：主要负责展示数据

后端运行在服务器上：主要负责处理数据

### 第3章 基础语法与特性

#### 3-1 创建第一个网页

##### 1. 创建文件（网页）

1.CTRL+ N 或图标（需手动加.html后缀）

2.或先建txt文件，再修改后缀名为html

注：所有网页都需要手动加后缀名.html

##### 2. HTML骨架生成

输入！（英文模式下），按tab键，即可自动生成HTML5骨架 

##### 3. HTML文件是纯文本文件

##### 4. 文件上方是小圆点时，是未保存状态

#### 3-2 浏览网页的方法

##### 1. 双击网页图标

注：最好设置chrome为浏览器

##### 2. Live Server

1. VSCode中安装插件
2. ctrl + shift + p: > Live Server : Open with Live Server

注: 需要在项目文件夹中进行操作

#### 3-3 练习 3-4 HTML5骨架

##### <!DOCTYPE html>

###### 文档声明DTD

- Document Type Definition
  
- ！：重要声明

###### W3C

- 制定HTML和CSS标准

##### 标签

```HTML
<!DOCTYPE html>
<!-- <!DOCTYPE HTML>不属于html标签，它用于定义文档类型 -->
<html lang="en">
<!-- language表示网页语言，应在html标签配置 -->
<head>
<!-- head标签对里存放的是页面的一些配置，网页中显示的内容，不管是头部，主体还是尾部，都要放在body中 -->
<!-- <head> 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    内容
</body>
</html>
```

#### 3-8 字符集

```HTML
<meta charset="UTF-8">
```

meta: 元标签，表示网页的基础配置
charset：字符集属性
"UTF-8": 属性的值

##### 字符集

- UTF-8：制作有非汉字文字的网页

- gb2312(gbk): 制作只有汉语和英语的网页，网页文件尺寸明显减少，更快打开网页

##### VSCode中修改字符集

1. 修改页面charset的属性

2. 选择VSCode字符编码，与页面charset属性相同

#### 3-10 title、关键词及页面描述

##### title

- title是搜索引擎收录网站时显示的标题
  
##### 网页关键词和页面描述

- 合理设置网页的网页关键词和页面描述，是SEO的重要手段

- SEO：搜索引擎优化，利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名，让网站在搜索引擎的结果中占据高位，获得收益

- 使用meta标签设置网页关键词和描述，name属性非常关键，用来设置meta的具体功能

```HTML
<meta name="Keywords" content="">
<meta name="Description" content="">
```

#### 3-13 认识标签

##### HTML标签对

- 不同的标签有不同的功能

- 标签可以给文字设置不同的语义

##### HTML单标签

- 只有其实标签

- 结尾可以写一个反斜杠 /

##### 超文本标记就是标签

#### 3-17 标题和段落标签

##### 标题标签

- h系列标签，h为headline，有6个

- 搜索引擎非常看重h系列标签，重点内容应放在h1中，h1标签一般只能放置一个，否则会被浏览器视为作弊

##### 段落标签

- p标签,p为paragraph

- p标签不能省略，为了实现页面段落的换行效果

#### 3-20 div标签

- division，分割。div标签用来将相关的内容组织到一起，以和其他内容分割。

- “div+css”布局实现网页

- 盒子

    |  区域     |   类名    |
    |  :----:   |  :----:  |
    |  页头     |  header  |
    |  logo     |  logo   |
    |  导航条   |   nav    |
    |  横幅     |  banner  |
    |  内容区域 |  content |
    |  页脚     |  footer |

#### 3-21 HTML5特性

1. 空白折叠
    - 文字和文字间的多个空格、换行，被折叠成一个
    - 标签的内壁和文字间的空格被忽略

2. 转义字符
  
    |转义字符| 意义  |
    |  :----:  |  :----:  |
    |  & lt;   |  小于号 |
    |  & gt;   |  大于号 |
    |  & nbsp; |  空格（不会被折叠)|
    |  & copy; |  版权符号© |

3. 注释
   <!--注释内容--> 或ctrl + /

### 第4章 列表标签

- 无序列表

- 有序列表

- 定义列表

#### 4-1 无序列表

##### 1. 无序列表的定义

- “没有刻意顺序”

##### 2.无序列表的使用

- 无序列表：ul标签对 unorderd list

- 列表项：li标签对 list item

- 父子组合标签（不能单独使用）：
  - ul为父标签
  - li为子标签

- 规则：
  1. li不能散着放
  2. HTML规定，ul的子标签只能是li
  3. li标签中可以放任何标签

- 注意代码缩进
  
```HTML
    <ul>
        <li>面包</li>
        <li>牛奶</li>
        <li>黄油</li>
    </ul>
```

##### 3.嵌套

##### 4. ul标签的type属性

- 在HTML中已被废弃，推荐使用CSS、

- 在ul标签中使用

- type属性值：
  | 值   | 描述|
  | ---- | ---- |
  | disc | 默认值，实心圆 |
  | circle | 空心圆|
  | square | 实心方块|

##### 5. 工作中的使用

#### 4-2 有序刘表

##### 1. 有序列表的定义

- “有顺序”

##### 2. 有序列表的使用

- 有序列表：ol标签对 ordered list

- 列表项： li标签对 list item

- 父子组合标签（不能单独使用）：
  - ol为父标签
  - li为子标签

- 规则：
    1. li不能散着放
    2. ol的子标签只能是li标签
    3. li标签中可以放任何标签

```HTML
    <ol>
        <li>面包</li>
        <li>牛奶</li>
        <li>黄油</li>
    </ol>
```

##### 4. ol标签的type属性

- type属性值：
  | 值   | 描述|
  | ---- | ---- |
  | a | 小写英文字母编号 |
  | A | 大写英文字母编号|
  | i | 小写罗马数字编号|
  | I | 大写罗马数字编号|
  | 1 | 默认值，数字编号|

##### 5. ol标签的start属性

- start属性值必须是一个整数，制定了列表编号的起始值

- 此属性的值只能为阿拉伯数字

##### 6. ol标签的reversed属性

- reversed属性指定列表中的条目是否是倒序的

- 标有reversed的ol标签即为倒序

#### 4-3 定义列表

##### 1. 定义列表的定义

- 需要逐条给出定义描述的列表

##### 2. 定义列表的使用

- 定义列表：dl标签对 definition list

- 数据项：dt标签对 data term

- 数据定义：dd标签对 data definition

```HTML
    <!-- 使用1 -->
    <dl>
        <dt>北京</dt><dd>我国政治中心，文化中心</dd>
        <dt>北京</dt><dd>我国政治中心，文化中心</dd>
        <dt>北京</dt><dd>我国政治中心，文化中心</dd>
        <dt>北京</dt><dd>我国政治中心，文化中心</dd>
    </dl>

    <!-- 使用2：创建出更多的标签，服务css -->
    <dl>
        <dt>北京</dt><dd>我国政治中心，文化中心</dd>
    </dl>
    <dl>
        <dt>北京</dt><dd>我国政治中心，文化中心</dd>
    </dl>
    <dl>
        <dt>北京</dt><dd>我国政治中心，文化中心</dd>
    </dl>
    <dl>
        <dt>北京</dt><dd>我国政治中心，文化中心</dd>
    </dl>
```

- 语义中有“解释说明”含义的文字，且为列表形态，应该使用定义列表

### 第5章 多媒体与语义化标签

#### 5-1 多媒体

##### 1. 图片标签

- img标签用来在网页中插入图片

```HTML
    <img src="图片的存储目录">
```

- 图片应在项目文件夹中的images文件夹

- 图片本质上没有被插入到网页中，只是被引入到了网页中，因此图片资源也要一起传到服务器上

###### 1.1 图片标签的属性

- alt属性：对文本的描述 alternate
  
  - 作用：不能显示图片的时候，则显示描述；朗读时，会读alt描述的内容

- width/height: 宽高，单位是像素，不需要写单位
  
  - 设置其中一个属性，省略另一个属性，则按原始比例缩放图片

###### 1.2 网上支持的图片格式

| 格式 | 说明 |
| ---- | ---- |
|.bmp| Windows画图软件默认保存的格式，位图 |
|.gif| 支持动画 |
|.jpeg(.jpg)| 有损压缩图片，用于照片 |
|.png| 便携式网络图像，用于logo、背景图形等，支持透明和半透明|
|.svg| 矢量图片（放大到多少倍都不会出现锯齿）|
|.webp| 最新的压缩算法非常优秀的图片格式 |

###### 1.3 相对路径和绝对路径

- 相对路径：描述从网页出发，如何找到图片
  - 回退层级：“../”
  - 随网页所在的不同位置变化
  
- 绝对路径：描述图片精准位置
  - 不需要随网页所在的位置变化

##### 2. 超级链接

- a标签制作超级链接 anchor
  - 自带样式：下划线；手指标；点击后变色
  - 作用是帮用户输入了链接的地址，从而实现了页面的跳转
  - a标签点击之后会刷新当前页面
  
```HTML
    <a href="">链接（点击刷新当前界面）</a>
    <a href="#">链接（点击不刷新当前界面）</a>
```

###### 2.1 a标签的属性

1. href属性
   - 支持相对路径和绝对路径

2. title属性
   - 设置悬停文本
  
3. target属性
   - blank/_blank（HTML4）：打开新窗口

###### 2.2 图片设置超级链接

```HTML
    <a href="" target="blank">
        <img src="">
    </a>
```

- a标签包裹img标签

###### 2.3 页面内锚点

- 在较长的页面中，适当给h系列标签添加id属性，它将成为页面的“锚点”

- 当网址后面添加#时，页面将自动滚到锚点所在位置

- 其他页面的超级链接，可以链接到指定锚点

- #top在HTML5可以直接被使用，跳回页头；或将#top赋值给a标签的name属性，则跳转到该a标签所在处

###### 2.4 下载链接

- 指向exe/zip/rar等文件格式的链接，将自动成为下载链接

```HTML
<a href="XXX.zip"></a>
```

###### 2.5 邮件链接

- 有mailto:前缀的链接是邮件链接，系统将自动打开Email相关软件

```HTML
<a href="maito:me@test.com">给小编发邮件</a>
```

###### 2.6 电话链接

- 有tel:前缀的链接是电话链接，系统将自动打开拨号盘

```HTML
<a href="tel:12306">打电话买车票</a>
```

##### 3. 音频和视频

###### 2.1 音频

```HTML
<audio controls src="音频地址">
    抱歉，您的浏览器不支持audio标签，请升级浏览器
</audio>

<!-- controls 表示显示播放控件，没有值 -->

```

- audio标签插入音频，兼容到IE9

- 常用音频格式：mp3/ogg

- autoplay属性：音频自动播放，常用浏览器为了不打扰用户，可能不允许自动播放音乐

- loop属性：循环播放音频

###### 2.2 视频

```HTML
<video controls src="视频地址">
    抱歉，您的浏览器不支持video标签，请升级浏览器
</video>
```

- video标签插入音频，兼容到IE9

- 常用音频格式：mp4/ogv/webm

- autoplay属性：音频自动播放，常用浏览器为了不打扰用户，可能不允许自动播放音乐

- loop属性：循环播放音频

- width/height属性：设定长宽；单位为px，不需要表明

#### 5-2 语义化标签

##### 1. 大纲标签

###### 1.1 div

- 利用div和class属性进行区块分割

###### 1.2 HTML5的区块标签

| 区块标签 | 说明 |
| ---- | ---- |
| < section > | 文档的区域，语义比div大|
| < article > | 文档的核心文章内容，会被搜索引擎主要抓取|
| < aside >   | 文档的非必要相关内容，比如广告等|
| < nav >     | 导航条 |
| < header >  | 页头 |
| < main >    | 网页的核心部分 |
| < footer >  | 页脚 |

##### 2. 语义化标签

###### 2.1 span标签

- 文本中的区块标签

- 行内标签

```HTML
<p>
    <span>北京</span>的区号是<span>010</span>
</p>
```

###### 2.2 b/u/i标签

| 标签 | 说明 |
| ---- | ---- |
| < b >| 加粗文本，css已经代替了它的功能|
| < u >| 下划线文本，css已经代替了它的功能|
| < i >| 倾斜文本，css已经代替了它的功能|

```HTML
<p>
    <b>HTML</b>
    <u>HTML</u>
    <i>HTML</i>
</p>
```

###### 2.3 strong/em/mark标签

| 标签 | 说明 |
| ---- | ---- |
| < strong > | 特别重要的文本（默认加粗） |
| < em > | 重要的文本（默认倾斜） |
| < mark >| 高亮的文本（默认黄色高亮）|

```HTML
<p>
    <strong>Front-End</strong> Engineer
</p>

<p>
    <em>Front-End</em> Engineer
</p>

<p>
    <mark>Front-End</mark> Engineer
</p>
```

###### 2.4 figure/figcaption标签

- figure元素代表一段独立的内容, 可有可无，不会影响到王爷本身的内容

```HTML
<p>
    <figure>
        <img src="">
        <figcaption>
            <!-- 此处添加描述 -->
        </figcaption>
    </figure>
</p>
```

### 第6章 表单标签

#### 1.表单标签

- 表单用来收集信息，注册、登录等

##### 1.1 表单的创建

- form元素创建

```HTML
<form action="save.php" method="post">

</form>

<!-- action属性表示表单要提交到后台程序的网址 -->
<!-- method属性表示表单提交的方式 get或post-->
```

##### 1.2 基本控件

###### 1.2.1 单行文本框

```HTML
<input type="text">
```

- type属性值被设置为text的input元素可以创建单行文本框，它是一个单标签

- value属性：已经填好的值

- placeholder属性：提示文本（浅色文本）

- disabled属性：用户不能与这个元素进行交互，即"锁死"

###### 1.2.2 单选按钮

```HTML
<input type="radio">
```

- type属性被设置为radio的input元素可以创建单选按钮
  - 互斥的单选按钮其name值应当相同

- value属性：单选按钮要有value属性值，向服务器提交的就是value值

- checkd属性：默认被选中

- 绑定文字和单选按钮，点击文字即视同选中单选按钮：label标签

```HTML
    <!-- HTML5 -->
    <label>
        <input type="radio">男
    </label>

    <!-- HTML4 -->
    <input type="radio" id="nan">
    <label for="nan">男</label>
```

###### 1.2.3 复选框

```HTML
<label> <input type="checkbox" name="hobby">足球</label>
```

- type属性值被设置为checkbox的input元素可以创建复选框

- 同组复选框应该设置它们的name为相同值

- 复选框要有value属性值，向服务器提交的就是value值

###### 1.2.4 密码框

```HTML
<input type="password">

```

- type属性值设置为password的input元素可以创建密码框

###### 1.2.5 下拉菜单

```HTML
<select>
    <option value="alipay">支付宝</option>
    <option value="wx">微信</option>
    <option value="bank">网银</option>
</select>
```

###### 1.2.6 多行文本框

```HTML
<textarea></textarea>
```

- textarea标签表示多行文本框

- rows和cols属性，用于定义多行文本框的行数和列数

- selected属性，默认选中

###### 1.2.7 三种按钮

```HTML
<input type="button">

<input type="submit">

<input type="reset">
```

- input标签，type属性值如下

| type属性值 | 按钮种类 |
| ---- | ---- |
| button | 普通按钮，简写为< button>< /button>|
| submit | 提交按钮 |
| reset  | 重置按钮 |

###### 1.2.8 HTML5新增的input类型

| type属性值 | 控件 |
| ---- | ---- |
| color | 颜色选择控件|
| date、time| 日期、时间选择控件|
| email | 电子邮件输入控件 |
| file | 文件选择控件|
| number | 数字输入控件 min/max |
| range | 拖拽条 min/max|
| search | 搜索框 |
| url | 网址输入控件 http://www |

- required 必填

###### 1.2.9 datalist控件

```HTML
<input type="text" list="province-list">
<datalist id="province-list">
    <option value="备选项">
</datalist>
<!-- option标签为单标签 -->
```

- datalist控件可以为输入框提供一些备选项，当用户输入的内容与备选项文字相同时，将会显示智能感应

### 第7章 表格标签

#### 7.1 table、tr、td

```HTML
<table>
    <caption>标题</caption>
    <tr>
        <th>列标题</th>
        <th>列标题</th>
        <th>列标题</th>
        <th>列标题</th>
    </tr>
    <tr>
        <th>行标题</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
```

- table表格，tr表格行，td表格数据

- border属性：表格边框的宽窄

- th级别与td相同

#### 7.2 colspan属性

```HTML
<table>
    <tr>
        <td colspan="2"></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td cospan="3"></td>
    </tr>
</table>
```

- colspan属性：设置td或者th的列跨度

- tr中的td不一样多

#### 7.3 rowspan属性

```HTML
<table>
    <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td>D</td>
    </tr>
    <tr>
        <td>E</td>
        <td rowspan="2">F</td>
        <td>G</td>
        <td rowspan="3">H</td>
    </tr>
    <tr>
        <td>I</td>
        <td>J</td>
    </tr>
    <tr>
        <td>K</td>
        <td>L</td>
        <td>L</td>
    </tr>
</table>
```

- rowspan属性：设置td或th的行跨度

- 注意：分清每个小格属于哪行

#### 7.4 thead/tbody/tfoot标签

- thead：表头，可以包括多个tr

- tbody：表

- tfoot: 表脚

#### 7.5 cellspacing/cellpadding属性

- cellspacing属性：表格单元的内容和边框之间的空间，可被css代替

- cellpadding属性：（使用百分比像素）定义了两个单元格之间的空间大小，可被css代替

#### 7.6 width/height/align属性

- width/height属性：设置宽高，默认单位为px（可省略），也可用百分比

- align属性：值为left、center、right，调整table整体的水平位置

## 第2周 CSS基础语法与和模型

### 第1章 CSS基础入门

#### 1. CSS简介

- CSS层叠式样式表，用来给HTML标签添加样式 cascading style sheet

- 前端三层
  ||语言|功能|
  | ----| ---- | ---- |
  | 结构层 | HTML | 搭建结构、放置部件、描述语义 |
  | 样式层 | CSS  | 美化页面、实现布局 |
  | 行为层 | JavaScript | 实现交互效果、数据收发、表单验证 |

- CSS使样式和结构分离

- “选择器”结合HTML和CSS

- CSS本质(不是编程)：样式清单 —— 选择器选择标签，罗列样式

#### 2. CSS3的书写位置

- 1. 内嵌式：嵌在.html文件中

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 样式表 -->
    <style>

    </style>
</head>
<body>
    
</body>
</html>
```

- 2. 外链式：存储为单独的.css文件，然后使用link标签引入
  - 优点：多个HTML网页可以共用一个css样式表文件
  - link标签要放在head标签内
  - 页面加载时会同时加载样式

```HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- 外链样式表 -->
    <link rel="stylesheet" href="css/style.css">
    <!-- rel表示的是链接和本.html文件的关系 -->
</head>
<body>
    
</body>
</html>
```

- 3. 导入式：不常见
  - 受用导入式引入的样式表，不会等待css文件加载完毕，而是立即渲染HTML结构，所以页面中会有几秒“只有HTML没有样式”的情况

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        @import url(css/style.css);
    </style>
</head>
<body>
    
</body>
</html>
```

- 4. 行内式：通过style属性写在标签身上
  - 行内式牺牲了样式表批量设置样式的能力
  - 后台工程师常用

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 style="color:red;"></h1>
</body>
</html>
```

#### 3. CSS3的基本语法

- 选择器，大括号对，罗列样式(k:v;|其中k为属性名，v为属性值，最后一条样式可以不书写分号)

```CSS
p {
    color: red;
}
/* 注释 */
```

- 注释

```CSS
  /* 注释 */
```

### 第2章 CSS3选择器

#### 1. 标签选择器和id选择器

##### 1.1 标签选择器

- 使用元素的标签名当作选择器，选择页面上所有该种标签
  - 覆盖面大：用于标签的初始化
  
```CSS
ul {
    /* 去掉无序列表的小圆点 */
    list-style: none;
}

a {
    /* 去掉超级链接的下划线 */
    text-decoration: none;
}
```

##### 1.2 id选择器

- 标签的id属性，是标签的唯一标识

- id名称只能由字母、数字、下划线、短横构成，且不能以数字开头，字母区分大小写，习惯上一般用小写字母

- 同一个页面上不同能有相同的id标签

- #前缀选择id标签

```CSS
<p id="para1">
    我是一个段落
</p>

#para1 {
    color: red;
}
```

##### 1.3 class类名

```CSS
<p class="warning spec">
    我是一个段落
</p>

.warning {
    color: red;
}

.spec{
    /* 文字倾斜 */
    font-style: italic;
}
```

- 点.前缀选择指定的class标签

- 命名规则与id选择器相同

- 多个标签可以为相同的类名

- 同一个标签可以同时属于多个类，类名用空格隔开
  
- 类名有冲突的时候，根据样式表的顺序，显示后写的样式

- 原子类：在网页项目之前，将所有的常用字号、文字颜色、行高、外边距、内边距等都设置为单独的类
  - HTML标签可以“则需选择”已经设置好的原子类，这样可以非常快速的添加一些常见样式

```CSS
.fs12{
    font-size: 12px;
}

.fs14{
    font-size: 14px;
}

.fs16{
    font-size: 16px;
}

.color-red {
    color: red;
}

.color-blue {
    color: blue;
}
```

- BEM命名法：主要是针对CSS，意思是块（Block）、元素（Element）、修饰符（Modifier）的简写。

##### 1.4 复合选择器

|选择器名称| 示例 | 示例的意义 |
| ---- | ---- | ---- |
| 后代选择器 | .box .spec | 选择类名为box的标签内部类名为spec的标签 |
| 交集选择器 | li.spec | 选择既是li标签，也属于spec类的标签 |
| 并集选择器 | ul,ol | 选择所有ul和ol标签 |

- 后代选择器
  - 有空格；可以有很多空格，隔开好几代

```CSS
.box ul li .spec em{
    color: red;
}
```

- 交集选择器
  - 没有空格;即又

```CSS
ul.spec {
    color: red;
}
```

- 并集选择器
  - 逗号隔开

```CSS
ul,ol {
    color: red;
}
```

- 选择器任意搭配组合，形成复合选择器

#### 1.5 伪类

- 伪类是添加到选择器的描述性词语，指定要选择的元素的特殊状态

| 伪类 | 意义|
| ---- | ---- |
| a:link | 没有被访问的超级链接 |
| a:visited | 已经被访问过的超级链接 |
| a:hover | 正被鼠标悬停的超级链接 |
| a:active| 正被激活的超级链接（按下按键但还没有松开按键）|

- 爱恨准则 —— LVHA
  - a:hover必须置于a:link和a:visited之后，才有效，a:active必须在a：hover之后，才有效。而link、visited两个伪类之间顺序无所谓，谁在前都可以。
  - 顺序如下：
    1. link
    2. visited
    3. hover
    4. active

- :hover伪类也可以用在div,p,li,h系列标签等

#### 2.CSS3选择器与伪元素

| 名称 | 举例 | 意义 |
| 子选择器 | div>p | div的子标签p |
| 相邻兄弟选择器 | img+p | 图片后面紧跟着的段落将被选中 |
| 通用兄弟选择器 | p~span | p元素之后的所用同级span元素 |

##### 1. 子选择器

- 当使用 > 符号分割两个元素时，它只会匹配那些作为第一个元素的直接后代元素，即两个标签为父子关系

- 后代选择器限制的不一定是子元素，还可能是孙子、曾孙子元素

```CSS
div>p {
    color: red;
}
```

##### 2. 相邻兄弟选择器

- a+b，选择“紧跟在a后的b”

- 从IE7开始兼容

```CSS
img+span {
    color: green;
}
```

##### 3. 通用兄弟选择器

- 通用兄弟选择器(~),a~b选择a元素之后的所有同层级b元素

- 从IE7开始兼容

```CSS
h3~span {
    font-style: italic;
}
```

##### 4. 序号选择器

| 举例 | 意义 |
| ---- | ---- |
| :first-child | 第一个子元素 |
| :last-child | 最后一个子元素 |
| :last-of-type | 选择属于其父元素的最后一个x标签 |
| :nth-child(3) | 第3个子元素|
| :nth-of-type(3)| 第3个某类型的子元素 |
| :nth-last-child(3) | 倒数第3个子元素 |
| :nth-last-of-type(3)| 倒数第3个某类型的子元素 |

- 冒号前均为要选择的元素

```CSS
.box p:first-child {
    /* box类中的第一个p标签 */
}

.box p:last-child {
    /* box类中的最后一个p元素 */
}
```

- x:nth-child()选择任意需要的子元素 —— x父元素的第y个子元素为x, 则赋予x样式，否则无效
  - 参数可以为an+b的形式（不能写成b+an）
  - 2n+1等价于odd，表示奇数
  - 2n等价于even，表示偶数

```CSS
.box p:nth-child(3n+2) {
    /* box类内p标签从第二个开始，每三个选择一个 */
    /* 可以将n=0,1,2…带入，确定被选择的p标签 */
}

.box p:nth-child(2n+1) {
    /* .box p:nth-child(odd) */
}

.box p:nth-child(2n){
    /* .box p:nth-child(even) */
}
```

- :nth-of-type()选择同种标签指定序号的子元素

```CSS
.box p:nth-of-type(3) {
    /* 表示选择p同种元素的三个标签 */
}
```

- :nth-last-child()和:nth-last-of-type()均为倒数选择

- 兼容性

| 选择器 | 兼容性 |
| :----: | :----: |
| :first-child | IE7 |
| :last-child | IE9 |
| :nth-child(3) | IE9 |
| :nth-of-type(3) | IE9 |
| :nth-last-child(3) | IE9|
| :nth-last-of-type(3) | IE9 |
| - | 手机均兼容良好 |

##### 5. 属性选择器

| 举例 | 意义 |
| :----: | :----: |
| img[alt] | 选择有alt属性的img标签 |
| img[alt="故宫"]| 选择alt属性是故宫的img标签 |
| img[alt^="北京"]| 选择alt属性是以北京开头的img标签 |
| img[alt$="夜景"]| 选择alt属性是以夜景结尾的img标签 |
| img[alt*="美"]| 选择alt属性中含有美字的img标签 |
| img[alt~="手机拍摄"]| 选择alt属性中有空格隔开的手机拍摄的img标签 |
| img[alt|="参赛作品"]| 选择alt属性一“参赛作品-”开头的img标签 |

##### 6.CSS3新增伪类

| 伪类 | 意义 |
| :----: | :----: |
| :empty | 选择空标签 |
| :focus | 选择当前获得焦点的表单元素 |
| :enabled | 选择当前有效的表单元素 |
| :disabled | 选择当前无效的表单元素 |
| :checked | 选择当前已经勾选的单选按钮或者复选框 |
| :root | 选择根元素，即< html>标签 |

##### 7. 伪元素

- 虚拟动态创建的元素；由双冒号表示（IE8兼容单冒号）

| 伪元素 | 意义 |
| :----: | :----: |
| ::before | 匹配选中元素的第一个子元素，必须设置content属性表示其内容 |
| ::after | 匹配选中元素的最后一个子元素，必须设置content属性表示其内容 |
| ::selection | 文档中被用户鼠标圈选高亮的部分 |
| ::first-letter | （块级元素）第一行的第一个字母 |
| ::first-line | （块级元素）第一行的全部文字 |

##### 8. 层叠行和选择器权重

1. ！import权重最大

2. 行内样式权重 > 其他样式权重

3. #id > .class > 标签

4. 复合选择器计算权重：先比较id个数，再比较class个数，再比较标签个数

### 第3章 文本与字体属性

#### 1. 常用文本样式属性

##### 1.1 color属性

- 设置文本内容的前景色

- 表示：
  - 英语单词：工作基本不用
  - 十六进制：设计软件中通用的颜色表示
    - #aabbcc：其中aa为红色分量，bb为绿色分量，cc为蓝色分量（可以简写为#abc）
    - 黑色#000，白色#fff，灰色#ccc/#333/#2f2f2f
  - rgb(a,b,c)：a,b,c为0~255的数字，红绿蓝
  - IE9开始兼容/rgba(a,b,c,d)：a,b,c为0~255的数字，红绿蓝；d为0~1，表示透明度

##### 1.2 font-size属性

- 设置字号，单位通常为px；也有em、rem

- 网页正文字号通常是16px，浏览器最小支持10px字号，字号通常是双数

##### 1.3 font-weight属性

- 设置文字的粗细程度，常用的为normal和bold

| 示例 | 意义 |
| :----: | :----: |
| font-weight:normal | 正常粗细，与400等值 |
| font-weight:bold | 加粗，与700等值 |
| font-weight:lighter | 更细，大多数中文字体不支持 |
| font-weight:bolder | 更粗，大多数中文字体不支持 |

##### 1.4 font-style属性

- 设置字体倾斜

| 示例 | 意义 |
| :----: | :----: |
| font-style:normal | 取消倾斜（如取消i、em标签自带的倾斜）|
| font-style:italic | 设置为倾斜字体（常用）|
| font-style:oblique| 设置为倾斜字体（用于常规字体模拟，不常用）|

##### 1.5 text-decoration属性

- 设置文本的修饰线外观

| 示例 | 意义 |
| :----: | :----: |
| text-decoration:none | 没有修饰线 |
| text-decoration:underline | 下划线 |
| text-decoration:line-through | 删除线 |

#### 2. 字体属性详解

##### font-family属性用于设置字体

```CSS
font-family: serif, "Times New Roman", "微软雅黑";

/* 
    1.字体名称中有空格，必须用引号包裹；引号嵌套，外面使用双引号，里面使用单引号
    2.中文字体用引号包裹
*/
```

- 字体可以是列表形式，一般英语字体放到前面，后面的字体是前面字体的“后备”字体

| 中文字体名 | 英文字体名 |
| :----: | :----: |
| font-family: "微软雅黑" | font-family: "Microsoft Yahei" |
| font-family: "宋体" | font-family: "SimSun" |

- 中文字体有等价英文名；中文字体应该放在英文字体后边，英文字体失效

- 字体通常必须是用户算机中已经安装好的字体，因而一般宋体和微软雅黑的较多

- 设置为用户电脑中没有的字体：自己定义字体需要有字体文件，在用户加载网页的同时下载
  - 字体文件根据操作系统和浏览器的不同有eot、woff2、woff、ttf、svg文件格式，需要同时有这5中文件
  - 定义字体：@font-face
  - 注意授权：阿里巴巴免费商用授权的普惠字体，网址https://www.iconfont.cn/webfont；普惠体不需要下载
  - Google也有免费字体

```CSS
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

#### 3. 段落、行的相关属性

##### 3.1 text-indent属性

- 定义首行文本内容之前的缩进量

- 如果不使用这个属性，想要让文本实现缩进，使用转义空格字符&nbsp；也可以，一个&nbsp；代表一个空格。因为普通的空格在html里不管出现几个，都被认为是一个空格，所以要用text-indent属性，或者在html代码中加入&nbsp；&nbsp；可能会受到字体样式的影响， 可能出现一个汉字使用2个&nbsp ，也会有一个汉字使用4个&nbsp；的情况 。但是目前 ，大部分主浏览器默认的字体 ，也就是“微软雅黑”，是一个汉字使用4个&nbsp；

```CSS
text-indent: 2em;

/* em表示字符宽度，意味缩进两个字符 */
```

##### 3.2 line-height属性

- 定义行高

- 字在行中是上下居中的

- 可以用px、字号倍数的数值、百分数规定行高

```CSS

/* px规定高度 */
line-height: 30px;

/* 字号倍数，推荐 */
line-height: 1.5;

/* 百分数，字号倍数 */
line-height: 150%;
```

- 单行文本垂直居中：行高=盒子高度
  - text-align:center, 实现文字水平居中

##### 3.3 font合写属性

- font属性可以用来作为font-style, font-weight, font-size, line-height和font-family属性的合写

- 必须设置font-size或font-family才能生效

```CSS
font: italic bold 20px/1.5 Arail, "微软雅黑";

/* 倾斜、加粗 */
/* 20px/1.5 字号/行高 */
/* 字体 */
```

#### 4. 继承性

- 文本相关的属性普遍具有继承性，只需要给祖先标签设置，即可在后代所有标签中生效
  - color
  - font-
  - list-
  - text-
  - line-
  
- 因为文本相关的属性通常具有继承性，所以通常会设置body标签的字号、颜色、行高等，这样就能当作整个网页的默认样式了

- 就近原则：在继承的情况下（未直接选中该标签，采用继承的方式规定该标签的样式），选择器权重计算失效，而是"就近原则"
  - 继承的标签不如选中的标签权重大
  - 都未选中的情况下继承：离得近 > 离得远
  
### 第4章 盒模型

#### 1. 盒模型的基本概念

##### 1.1 盒模型

1. 所有HTML标签都可以看成矩形盒子，由width、height、padding、border构成，称为“盒模型”
    - width: 内容的宽度；不包括padding和border
    - height: 内容的高度；不包括padding和border
    - padding: 内边距
    - border: 边框

2. 盒子的总宽度 = width + 左右padding + 左右border

##### 1.2 width和height属性详解

###### 1.2.1 width属性

1. width: 盒子内容的宽度

2. 属性单位通常是px，移动端开发也会涉及百分数、rem等单位

3. 当块级元素（div、h系列、li等）没有设置width属性时，它将自动撑满，但这并不意味着width属性可以继承

###### 1.2.2 height属性

1. height: 盒子内容的高度

2. 属性单位通常是px，移动端开发也会涉及百分数、rem等单位

3. 盒子的height属性如果不设置，它将自动被其内容撑开；如果没有内容，则height默认是0

##### 1.3 padding属性详解

1. padding: 盒子的内边距，即盒子边框内壁到文字的距离

2. padding是四个方向的：
   1. padding-top/pdt
   2. padding-right/pdr
   3. padding-bottom/pdb
   4. padding-left/pdl

3. padding的四数值写法：

    ```CSS
        padding: 10px 20px 30px;
        /* 上 右 下 左 */
        padding: 10px 20px 30px;
        /* 上 右 下 （左=右）*/
        padding: 10px 20px;
        /* 上 右 （下=上） （左=右） */
    ````

4. 灵活设置padding属性
   - 上=下

       ```CSS
        padding: 30px 0;
       ```

   - 上 左=右 下

       ```CSS
        padding: 30px 10px 20px;
       ```

   - 上 左=右

        ```CSS
        padding: 30px 10px 0;
        ```

   - 上=左=右

        ```CSS
        padding: 40px;
        padding-bottom: 0;
        <!-- 小属性层叠大属性 优选 -->

        padding: 40px 40px 0;
        ```

##### 1.4 margin属性详解

1. margin是盒子的外边距，即盒子和其他盒子的距离

2. margin有四个方向：
   1. margin-top
   2. margin-right
   3. margin-bottom
   4. margin-left

3. margin的塌陷（仅限上下，左右不存在塌陷现象）：小的margin会塌陷到大的margin中，从而margin不叠加，只以大值为准

4. 默认的margin：
   - body、ul、p等标签有默认的margin
   - 在开始制作网页时，要将他们清除

     ```CSS
        * {
            margin: 0;
            padding: 0;
        }
        <!-- * 通配符选择器 -->
        <!-- 表示选择所有元素 -->
        <!-- 通配符有效率问题 -->

        body,ul,p {
            margin: 0;
            padding: 0;
        }
        <!-- 并集选择器 -->
     ```

5. 盒子水平居中
   - 将盒子左右两边的margin都设置为auto，盒子将水平居中

        ```CSS
        .box {
            margin: 0 auto;
        }
        <!-- 上下是0，左右自动 -->
        ```

   - 文本居中是text-align：center；和盒子水平居中是两个概念

   - 盒子的垂直居中，需要使用绝对定位技术实现

   - 行高=盒子高，文字垂直居中

6. margin的传递：当盒模型有嵌套的时候，若父盒子与子盒子都不设magin属性，则都在顶部显示；若只给子盒子设了magin属性，则父盒子也会被拖拽
   - 解决方案：
        1. 将magin换成padding,若要保证盒子的高度宽度不变，需要变更盒子的width和height属性；
        2. 给父盒子设置overflow:hidden，超出隐藏。当子元素必须超过父元素才能实现效果时，不建议使用。

##### 1.5 盒模型计算

1. width/height
   1. 实际的可用面积
   2. 留给后代用的面积

2. padding、border
   1. padding、border不属于width/height表示的面积，计算整个盒子大小时需要单独计算
   2. padding、border分为上下、左右两组，对称出现时记得乘2

3. 元素的实际大小和元素的空间尺寸
   - 实际大小：加上padding、border
   - 空间尺寸：加上padding、border、margin

##### 1.6 box-sizing属性

```CSS
    box-sizing: border-box;
```

1. 将盒子添加了如上属性，盒子的width/height数字就表示盒子实际占有的宽度和高度（不含margin），即padding、border变为“内缩”的，不再“外扩”

2. 大量应用于移动网页制作中，因为它结合百分比布局、弹性布局等非常好用，在PC页面开发中使用较少

3. 兼容到IE9

##### ♦ 数值相同的情况下，div和button按钮为何会产生差别？

- div的box-sizing属性属于默认情况，padding和border外扩；button内置了box-sizing属性为border-box，padding和border内缩

#### 2. 行内元素和块级元素

##### 2.1 display属性

| display属性 | 是否能并排显示 | 是否能设置宽高 | 当不设置width属性时 | 举例 |
|:----:|:----:|:----:|:----:|:----:|
|块级元素|否|是|width自动撑满|div、section、header、h系列、li、ul等|
|行内元素（margin失效）|是|否|width自动收缩|a、span、em、b、u、i等|

- 行内块：能并排；能设置宽高
   1. img
   2. form

##### 2.2 行内元素和块级元素的相互转换

```CSS
    display: block;
    /* 将元素转为块级元素 */

    display: inline;
    /* 将元素转为行内元素（不多见） */

    display: inline-block;
    /* 将元素转为行内块 */
```

##### 2.3 元素的隐藏

```CSS
    display: none;
    /* 将元素隐藏，同时元素将彻底放弃自己的位置，如同没有写它的标签 */

    visibility: hidden;
    /* 将元素隐藏，但是元素不放弃自己的位置 */
```

<!-- css布局 -->

## 第3周 CSS3浮动定位与北京样式

### 第1章 浮动与定位

#### 1. 浮动

##### 1.1 浮动的基本概念

```CSS
    float: left;

    float: right;
```

1. 浮动的最本功能：浮动用来实现并排

2. 浮动使用要点
   1. 要浮动，并排的盒子都要设置浮动
   2. 父盒子要有足够的宽度，否则子盒子会掉下去

3. 浮动的顺序贴靠特性
   - 子盒子会按顺序进行贴靠，如果没有足够空间，则会寻找再前的一个兄弟元素

4. 浮动的元素一定能设置宽高
   - 浮动的元素不再区分块级元素、行内元素，已经脱离了标准文档流（浏览器读取文档的默认状态）

5. 右浮动
   - 显示从左至右与左浮动显示的情况相反

##### 1.2 使用浮动实现网页布局

- 垂直显示的盒子，不要设置浮动，只有并排显示的盒子才要设置浮动

- "大盒子带着小盒子跑"，一个大盒子中，又是一个小天地，内部可以继续使用浮动

- div是免费的，不要节约盒子

- 浮动不能继承

##### 1.3 BFC规范和浏览器差异

1. BFC(Box Formatting Context, 块级格式上下文)是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

2. 一个现象：
  一个盒子不设置height，当内容子元素都浮动时，无法撑起自身 —— 原因是这个盒子没有形成BFC

3. 如何形成BFC
   1. 方法A: float的值不为none(盒子不应平白无故的浮动)
   2. 方法B：position的值不是static或者relative
   3. 方法C：display的值是inline-block、flex或者inline-flex
   4. 方法D：overflow的值是hidden

    ```CSS
        overflow:hidden;
        /* 表示溢出隐藏，溢出盒子边框(加粗)的内容将会被隐藏 */
        /* overflow：hidden; 是非常好用的让盒子形成BFC的方法 */

    ```

4. BFC可以取消盒子的margin塌陷

5. BFC可以阻止元素被浮动的元素覆盖

6. 浏览器差异
   - IE6、7浏览器使用haslayout机制，和BFC规范略有差异，比如IE浏览器可以使用zoom:1属性"让盒子拥有layout
   - 如果要制作兼容到IE6、7的网页时，尽量让网页布局变得简单，内部有浮动的盒子要设置height属性，规范编程

##### 1.4 清除浮动

- 清除浮动：浮动一定要封闭到一个盒子中，否则就会对页面后续元素产生影响

- 原因是有些盒子不能设置高度，因为高度由用户输入的内容决定

- 清除浮动的方法：
  1. 让内部有浮动的父盒子形成BFC，他就能关闭住内部的浮动；此时最好的方法是，overflow:hidden
  2. 给后面的父盒子设置clear:both属性，clear表示清除浮动对自己的影响，both表示左右浮动都清除;副作用是margin失效
  3. 使用::after伪元素给盒子添加最后一个子元素，并且给::after设置clear:both;要将目标盒子转为块级元素
  4. 在两个父盒子之间"隔墙"，隔一个带clear:both的盒子

    ```CSS
        .father-box {
            overflow: hidden;
        }
        <!-- 1. 让内部有浮动的盒子形成BFC，封闭浮动 -->

        .fater-box-behind-the-father-box {
            clear: both;
        }
        <!-- 2. 不常用 -->

        .clearfix::after {
            content: '';
            display: block;
            clear: both;
        }
        <!-- 3.给所有父盒子增添公共clearfix类，使用这个类的伪元素清除浮动 -->

        .cl {
            clear: both;
        }

        .h20 {
            height: 20px;
        }

        <!-- 4. 增添一个div，可以利用原子类给这个div设置高度，并清除浮动 -->
    ```

- ♦ 浮动的相关问题：
    1. 为什么要用浮动？
    2. 为什么要清除浮动？
    3. 清除浮动有哪几种方式？优缺点是什么？
    4. 怎么根据场景选择清除浮动的方式？

#### 2. 定位

##### 2.1 相对定位

```CSS
    position: relative;
    top: 100px;
    left: 100px;
    /* 相对定位，相对自己原来的位置，向下100px，向右100px */
```

1. 相对定位：盒子可以相对自己原来的位置进行位置调整，称为相对定位

2. 位置描述词：
   1. left向右移动；right向左移动；top向下移动；bottom向上移动
   2. 值可以为复数，即往规定方向移动

3. 相对定位的性质，会在“老家留坑”，本质上仍然是在原来的位置，只不过渲染在新的地方而已，渲染的图形可以比喻为“影子”，不会对页面其他元素产生影响

4. 相对定位不脱离文档流，会覆盖住别的元素，但不会影响别的元素的布局

5. 相对定位的用途：
   1. 相对定位用来微调元素位置
   2. 相对定位的元素，可以当做绝对定位的参考盒子

##### 2.2 绝对定位

```CSS
    position: absolute;
    top: 100px;
    left: 100px;
    /* 绝对定位，在浏览器中，距上边界100px，距左边界100px */
```

1. 绝对定位：盒子可以在浏览器中以坐标进行位置精准描述，拥有自己的绝对位置

2. 位置描述词
   1. left: 到左边的距离
   2. right：到右边的距离
   3. top：到上边的距离
   4. bottom：到下边的距离

3. 绝对定位的元素脱离文档流，将释放自己的位置，对其他元素不会产生任何干扰，而是对它们进行压盖

4. 脱离标准文档流的方法：
   1. 浮动
   2. 绝对定位
   3. 固定定位

5. 绝对定位的参考盒子
   1. 绝对定位的盒子并不是永远以浏览器作为基准点
   2. 绝对定位的盒子会以自己祖先元素中，离自己最近的拥有定位属性的盒子，当作基准点。这个盒子通常是相对定位的，所以这个性质也叫做“子绝父相”

6. 绝对定位的盒子垂直居中

   ```CSS
        .vertical-center {
            position: absolute;
            top: 50%;
            margin-top: -自己高度的一半;
        }
        
        .center {
            <!-- vertical -->
            position: absolute;
            top: 50%;
            margin-top: -自己高度的一半;

            <!-- horizontal -->
            position: absolute;
            left: 50%;
            margin-left: -自己宽度的一半;

            <!-- 为什么不使用margin:0 auto; -->
            <!-- 定位为absolute的元素已经脱离文档流  -->
        }
   ```

7. 堆叠顺序z-index属性
   - z-index属性是一个没有单位的正整数，数值大的能够压住数值小的

8. 绝对定位的用途
   1. 制作“压盖”、“遮罩”的效果
   2. 结合CSS精灵使用
   3. 结合JS实现动画

9. 轮播图布局

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Keywords" content="手机, 5G手机">
    <meta name="Description" content="先进手机">
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .carousel {
            position: relative;
            height: 768px;
            width: 1366px;
            margin: 40px auto;
        }

        .carousel .btn {
            position: absolute;
            width: 40px;
            height: 40px;
            top: 50%;
            margin-top: -20px;

            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            background-color: rgba(255,255,255,.5);

            cursor: pointer;
            font-family: consolas;
            font-size: 26px;
        }

        .carousel .btn:hover {
            background-color: gray;
            color: white;
        }

        .carousel a {
            text-decoration: none;
        }

        .carousel .leftbtn {
            left: 10px;
        }

        .carousel .rightbtn {
            right: 10px;
        }

        .carousel ol {
            position: absolute;
            width: 200px;
            height: 40px;
            right: 20px;
            bottom: 20px;
            list-style: none;
        }

        .carousel ol li {
            float: left;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: rgba(255,255,255,.5);
            cursor: pointer;
        }

        .carousel ol li.current {
            background-color: gold;
        }
    </style>
</head>

<body>

    <div class="carousel">
        <img src="images/风景_01.jpg" alt="">
        <a href="#" class="leftbtn btn">&lt;</a>
        <a href="#" class="rightbtn btn">&gt;</a>

        <ol>
            <li>
                <a href=""></a>
            </li>
            <li class="current">
                <a href=""></a>
            </li>
            <li>
                <a href=""></a>
            </li>
            <li>
                <a href=""></a>
            </li>
        </ol>
    </div>

</body>

</html>
```

##### 2.3 固定定位

```CSS
    .fix {
        position: fixed;
        top: 100px;
        left: 100px;
    }
```

- 固定定位：不管页面如何滚动，被固定的盒子永远固定在同一位置

- 固定定位只能以页面为参考点

- 固定定位脱离标准文档流

- 用途：“返回顶部”、“楼层导航”

##### ♦ 几种定位应用场景

1. 可以通过对比来分析几种定位之间的区别
    1. 相对定位：不脱离文档流；会覆盖住别的盒子，但不影响布局
    2. 绝对定位：脱离文档流；以祖辈中定位为相对定位的盒子为参考；覆盖别的盒子，可以通过z-index属性调整
    3. 固定定位：脱离文档流；只以界面为参考
2. 可以通过举例来说明某种定位的应用场合
   1. 相对定位：微调；绝对定位的参考盒子
   2. 绝对定位：覆盖
   3. 固定定位：冻结

##### ♦ margin传递问题

### 第2章 边框与圆角

- 小属性均是用来层叠大属性

#### 1. 边框

##### 1.1 边框的三要素

```CSS
    .box {
        border: 1px solid red;
    }

    <!-- 线宽度 线型 线颜色 -->
```

1. 线宽度 border-width

2. 线型 border-style
   | 线型值 | 意义|
   | :----: | :----: |
   | solid | 实线 |
   | dashed | 虚线 |
   | dotted | 点状线 |

3. 线颜色 border-color

4. border的width、color属性会有默认值

##### 1.2 四个方向的边框

| 属性 | 意义 |
| :----: | :----: |
| border-top | 上边框 |
| border-right | 右边框 |
| border-bottom | 下边框 |
| border-left | 左边框 |

| 小属性 | 意义|
| :----: | :----: |
| border-top-width | 上边框宽度 |
| border-top-style | 上边框线型 |
| border-top-color | 上边框颜色 |
| border-right-width | 右边框宽度 |
| border-right-style | 右边框线型 |
| border-right-color | 右边框颜色 |
| border-left-width | 左边框宽度 |
| border-left-style | 左边框线型 |
| border-left-color | 左边框颜色 |
| border-bottom-width | 下边框宽度 |
| border-bottom-style | 下边框线型 |
| border-bottom-color | 下边框颜色 |

##### 1.3 去掉边框

```CSS
    .box {
        /* 去掉所有边框 */
        border: none;

        /* 去掉指定方向的边框 */
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: none;
    }
```

##### 1.4 利用边框制作三角形

```CSS
    .trangle {
        width: 0;
        height: 0;
        /* 不能去掉透明的边框，去掉会没有斜线出现 */
        border: 100px solid transparent;

        border-top-color: red;
        /* 上边框，向下三角 */

        border-bottom-color: orange;
        /* 下边框，向上三角 */

        border-left-color: yellow;
        /* 左边框，向右三角 */

        border-right-color: green;
        /* 右边框，向左三角 */
    }

```

#### 2. 圆角

```CSS
    .box {
        border-radius: 10px;
        /* 值越大越圆 */
    }

```

1. border-radius属性的值通畅为px单位，表示圆角的半径

2. 单独设置四个圆角

   ```CSS
        .box {
            border-radius: 10px 20px 30px 40px;
            <!-- 左上 右上 右下 左下 -->
            <!-- 左上顺时针 -->
        }
   ```

   | 属性 | 意义 |
   | :----: | :----: |
   | border-top-left-radius | 左上 |
   | border-top-right-radius | 右上 |
   | border-bottom-right-radius | 右下|
   | border-bottom-left-radius | 左下|

    - border-radius有三个值得话，第一个值表示对左上角的设置，第二个值表示对右上角和左下角的设置，第三个值表示对右下角的设置
    - border-radius有两个属性值的话，第一个值表示左上角和右下角，第二个值表示右上角和左下角

3. 百分比：表示半径的长度占长宽的百分比

    ```CSS
        .box {
            border-radius: 10px;
            /* 值越大越圆 */
        }
    
        .circle {
            /* 为正方形 */
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    
        .oval {
            <!-- 为长方形 -->
            width: 400px;
            height: 200px;
            border-radius: 50%;
            <!-- 不能使用px，会变成胶囊 -->
        }

    ```

    ```HTML
        <!-- 蝴蝶结 -->
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>边框</title>
            <style>
                /*补充代码*/
                .box {
                    width: 100px;
                    height: 100px;
                    position: relative;
                }

                .bd1 {
                    width: 0;
                    height: 0;
                    border: 100px solid transparent;
                    border-left-color: red;
                    border-radius: 80px;
                }

                .bd2 {
                    width: 0;
                    height: 0;
                    border: 100px solid transparent;
                    border-right-color: red;
                    border-radius: 80px;
                    position: absolute;
                    top: 0;
                    left: -20px;
                }

            </style>
        </head>

        <body>
            <div class="box">
                <div class="bd1"></div>
                <div class="bd2"></div>
            </div>
        </body>
        </html>
    ```

#### 3. 盒子阴影

```CSS
    .box {
        box-shadow: 10px 20px 30px rgba(0,0,0,.4);
        /* x偏移 y偏移 模糊量 颜色 */
    }

    /* 阴影延展 */
    .another-box {
        box-shadow: 10px 20px 30px 40px rgba(0,0,0,.4);
        /* x偏移 y偏移 模糊量 阴影延展（四个方向） 颜色 */
    }

    /* 内阴影 */
    .another-another-box {
        box-shadow: inset 0 0 30px rgba(0,0,0,.4);
        /*内阴影 x偏移 y偏移 模糊量 颜色 */
    }

    /* 多阴影 */
    .another-another-box {
        box-shadow: 10px 20px 30px rgba(0,0,0,.4), 10px 20px 30px rgba(244,244,244,.4), 10px 20px 30px rgba(255,255,255,.4);
        /*x偏移 y偏移 模糊量 颜色 */
    }
```

### 第3章 背景与渐变

#### 1. 背景基础知识

##### 1.1 背景颜色基础知识

```CSS
    .box {
        background-color: #fff;
    }
```

1. 背景颜色可以用十六进制、rgb()、rgba()表示法表示

2. padding区域是有背景颜色的

##### 1.2 背景图片基础知识

```CSS
    .box {
        background-image: url(相对路径或绝对路径)；
    }
```

- 如果样式表是外链的，那么要书写从CSS出发到图片的路径，而不是从HTML出发

#### 2. 背景图片高级属性

##### 2.1 背景图片的重复模式

```CSS
    .box {
        background-repeat: repeat; 
    }
```

| 值 | 意义|
| :----:| :----: |
| repeat | x,y均平铺（默认值）|
| repeat-x | x平铺 |
| repeat-y | y平铺 |
| no-repeat | 不平铺|

##### 2.2 背景尺寸

```CSS
    .box {
        background-size: 100px 200px;
         /*宽度 高度*/
         /* 百分数设置，表示为盒子宽、高的百分之多少 */
         /* 需要等比例设置的值，写auto */
    }
    /* 设置背景图片的尺寸 */
    /* 兼容到IE9 */
```

| 值 | 意义|
| :----:| :----: |
| px px | 宽度、高度 |
| % % | 宽度、高度（为盒子宽高的百分比） |
| px/% auto或auto px/% | auto为按图片比例的等比值 |
| contain | 将背景图片只能改变尺寸以容纳到盒子里（显示完整图片）|
| cover | 将背景图片智能改变尺寸以撑满盒子（裁切也会    撑满盒子）|

##### 2.3 背景裁切

```CSS
    .box {
        background-clip: ;
    }
```

1. background-clip属性：用来设置元素的背景裁切到哪个盒子，兼容到IE9

| 值 | 意义 |
| :----: | :----: |
| border-box | 背景延申至边框（默认值） |
| padding-box | 背景延申至内边(padding), 不会绘制到边框处（仅在dotted、dashed边框可察觉） |
| content-box | 背景被裁剪至内容区 |

##### 2.4 背景固定

```CSS
    .box {
        background-attachment
    }
```

- background-attachment属性决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动

| 值 | 意义 |
| :----: | :----: |
| fixed | 自己滚动条不动，外部滚动条不动 |
| local | 自己滚动条动，外部滚动条动 |
| scroll | 自己滚动条不动，外部滚动条动（默认）|

##### 2.5 背景图片位置

```CSS
    .box {
        background-position: 100px 200px;
    }
    /* 表示图片出现在盒子的左100px 上200px的位置上 */

    .box {
        background-size: cover;
        background-position: center center;
    }
```

1. background-position属性用来描述图片出现在盒子的什么位置上
   - 描述词：left、top、right、bottom、center
   - 如果background-position中如果仅规定了一个关键词，那么第二个值将是"center"

2. CSS精灵：将多个小图标合并制作到一张图片上，使用background-position属性单独显示其中一个，这样的技术叫做CSS精灵技术，也叫做CSS雪碧图
   - CSS精灵可以减少HTTP请求数，加快网页显示速度。缺点也很明显：不方便测量、后期改动麻烦
   - i标签/绝对定位/负号

3. background-position设置背景图片出现在盒子的什么位置

4. 可以用top、bottom、center、left、right描述图片出现的位置

##### 2.6 background综合属性

```CSS
    .box {
        background: white url(images/archer.png) no-repeat center center;
    }
    /* 背景颜色 背景图片 背景重复 背景位置 */
```

#### 3. 渐变背景

##### 3.1 线性渐变、

```CSS
    .box {
        background-image: liner-gradient(to right, blue, red);
    }
    /* 渐变方向 开始颜色 结束颜色 */

    .box {
        background-image: liner-gradient(45deg, blue, red);
    }
    /* 用度数定义方向 */


    .box {
        background-image: liner-gradient(to bottom , red, orange, yellow, green, blue, purple);
    }

    .box {
        background-image: liner-gradient(to bottom , blue, yellow 20%, red);
    }
    /* 多颜色定义 */
```

1. 盒子的background-image属性可以用linear-gradient()形式创建线性渐变背景

2. 渐变方向
   1. to left
   2. to right
   3. to top
   4. to bottom
   5. 度数：45deg, 起点为钟表12点方向

3. 可以有多个颜色值，并可以用百分数定义它们出现的位置

4. 浏览器私有前缀：不同浏览器有不同的私有前缀，用来对试验性质的css属性加以标识
    | 品牌 | 前缀 |
    | :----: | :----: |
    | Chrome | -wekit-|
    | Firefox | -moz- |
    | IE、Edge | -ms- |
    | 欧朋 | -o- |

##### 3.2 径向渐变

```CSS
    .box {
        background-image: radial-gradient(50% 50%, red, blue);
    }
    /* 圆心坐标，坐标原点颜色，渐变颜色 */
```

- 工作用的少，可以拓展

### 第4章 变形

#### 1. 2D变形

##### 1.1 旋转变形

```CSS
    .box {
        transform: rotate(45deg);
    }
    /*  */
```

```CSS
    .box {
        transform-origin: 0 0; 
        /* 左上角为中心点旋转 */
    }
```

1. 将transform属性的值设置为rotate()，即可实现旋转变形

2. 角度为正，顺时针旋转；角度为负，逆时针旋转

3. transform-origin用于设置旋转的中心点

##### 1.2 缩放变形

```CSS
    .box {
        transform: scale(3);
    }
```

1. transform属性设置为scale()，即可实现缩放变形，中心点为原点

2. 当数值小于1时，表示缩小元素；大于1，表示放大元素

3. transform: scale(sx,sy) 中，sx表示宽度缩放为原元素的sx倍，sy表示高度缩放为原元素的sy倍。所以缩放的应该是transform: scale(300/1000, 100/500)，即transform: scale(.3, .2)。

##### 1.3 斜切变形

```CSS
    .box {
        transform: skew(10deg,20deg);
        /* x斜切角度，y斜切角度 */
    }
```

1. transform属性设置为skew()，即可实现斜切变形

2. transform: skew(<angle> [, <angle>]) （备注：中括号包裹的参数表示可选参数），其中angle为倾斜角度，角度方向跟随极坐标角度方向，逆时针为正方向，顺时针为负方向。当只有一个参数的时候，第二个参数默认为0deg，所以transform: skew(45deg);为元素的水平方向逆时针倾斜45度，竖直方向倾斜0度

##### 1.4 位移变形

```CSS
    .box {
        transform: translate(100px, 200px);
        /* 相对于原来的位置，向右移动的距离，向下移动的距离 */
    }
```

1. transform属性设置为translate()，即可实现位移变形

2. 和相对定位非常像，位移变形也会“老家留坑”，“形影分离”，但只兼容到IE9

#### 2. 3D变形

##### 2.1 3D旋转

```CSS
    .box1-father {
        perspective: 200px;
    }
    .box1 {
        transform: rotateX(30deg);
    }
    /* 绕X轴旋转，后仰为正方向 */

    .box2-father {
        perspective: 300px;
    }
    .box2 {
        transform: rotateY(30deg);
    }
    /* 绕Y轴旋转，右转为正方向 */
```

1. transform属性设置为rotateX()或rotateY(),即可实现3D旋转

2. perspective属性用来定义透视强度，可以理解为“人眼到舞台的距离”，单位是px；舞台是旋转元素的父盒子

##### 2.2 空间移动

```CSS
    .box {
        transform: rotateX(30deg) translateX(30px) translateZ(100px);
    }
```

1. 当元素进行3D旋转后，即可继续添加translateX()、translateY()、translateZ()属性让元素在空间进行移动

2. 注意： 空间移动要添加在3D旋转之后

## 第5周 JS基础语法与表达式

### 第1章 JS语法与变量

#### 1. 基础语法

##### 1.1 JavaScript的书写位置

- < body>中的< script>标签中

- 将代码保存为.js格式文件，然后在HTML文件中使用< script src=""></ script>的形式引入

##### 1.2 认识输出语句

```JavaScript
    alert('慕课网');
    // alert()是内置函数，函数就是功能的"封装"，调用函数需要使用圆括号
    // “慕课网”是参数，字符串需要用引号包裹
    // 

    console.log('慕课网');
    // console是js的内置对象，表示控制台，log表示输出
    // console通过“打点”调它内置的“log方法”
    // “方法”就是对象能够调用的函数
```

1. alert()语句 —— 弹出警告框

2. console.log()语句 —— 控制台输

##### 1.3 处理报错

1. 控制台显示报错信息，包含发生错误的行号（可能有一行的误差）
   - 语法错误 SyntaxError
   - 引用错误 ReferenceError
  
2. 控制台：REPL环境，可以使用它临时测试表达式的值
    - read读
    - eval执行
    - print打印
    - loop循环

3. try…catch

    ```JavaScript
        try {
            //在此运行代码
        }catch (err) {
            //在此处理错误
        }

        /* 例子 */
        console.log(num);
        console.log("因为上方报错了，所以我不会执行了");

        try {
            console.log(num)
        }catch (err) {
            console.log(err)
        }
        console.log("我还会执行")
    ```

4. try…catch…finally

    ```JavaScript
        try {
            //在此运行代码
        }catch (err) {
            //在此捕获错误
        }
        finally {
            // 无论 try / catch 结果如何，写在此处的代码都会执行
        }

         try {
            console.log(num)
        } catch (err) {
            console.log(err)
        } finally {
            console.log("我肯定会执行")
        }
    ```

#### 2. 变量

##### 2.1 变量是什么

1. 变量是计算机语言中能存储计算结果或能表示值的抽象概念

2. 变量不是数值本身，它们仅仅是一个用于存储数值的容器

###### 2.1.1 定义变量

```JavaScript
    var a = 5;
    // var关键字定义变量
    // 等号表示赋值

    console.log(a);
    // 变量使用时不能使用引号包裹

    var a = 0, b = 0;
```

- 想要使用变量，第一步就是声明它，并给它赋值

- 当变量被赋值后，就可以使用它了

- 使用逗号同时声明和初始化两个变量

###### 2.1.2 改变变量的值

```JavaScript
    var a = 10;
    a = 18; //更改变量的值为18
    console.log(a);
```

- 变量的值可以被改变，改变变量值不需要再书写var了

###### 2.1.3 变量的合法命名规范

- 只能由字母、数字、下划线、$组成，但不能以数字开头

- 不能是关键字或保留字

- 大小写敏感

###### 2.1.4 变量命名法

- 驼峰命名法：mathTestScore

- c风格：math_test_score

- 匈牙利命名法：iMathTestScore

###### 2.1.5 变量的默认值

```JavaScript
    var a;
    console.log(a); // undefined
    a = 10;
    console.log(a); // 10
```

- 一个变量只定义，但没有赋初值，默认值是undefined

- 一个变量只有被var定义，并赋初值之后，才算正式初始化完成

###### 2.1.6 变量的常见错误

- 不用var定义，而直接将值赋予它，虽不引发报错，但会产生作用域问题

- 使用没被var定义，也没有赋值的字符，会产生错误

- 等号表示赋值

##### 2.2 变量提升

```JavaScript
    console.log(a); //先使用变量，输出undefined
    var a = 12; //后定义变量
```

- 变量声明的提升：可以使用一个稍后才声明的变量，而不会引发异常

- 在执行所有代码之前，JS有预解析阶段，会预读所有变量的定义

- 注：变量声明提升只提升定义，不提升值

- 注：实际开发中，不要刻意使用变量声明提升

### 第2章 JS基本数据类型

#### 1. 数据类型简介和检测

1. JavaScript的两大数据类型
   1. 基本数据类型：Number、String、Boolean、Undefined、Null
   2. 复杂数据类型：Object、Array、Function、RegExp、Date、Map、Set、Symbol等

2. typeof运算符

   ```Javascript
        console.log(typeof 5); // number
        console.log(typeof '慕课网'); // string
        console.log(typeof '5'); // string
   ```

   1. 功能：检测值或者变量的数据类型
   2. typeof不是函数，是操作符
   3. JavaScript是弱类型的编程语言
   4. 5种基本数据类型的typeof检测结果
        | 类型名 | typeof检测结果 |
        | :----: | :----: |
        | 数字类型 | number |
        | 字符串类型 | string |
        | 布尔类型 | boolean |
        | undefined类型 | undefined|
        | null类型 | object |
   5. typeof的使用方法有两种：typeof 变量 和 typeof（变量）
   6. typeof的返回值是string类型

#### 2. 基本数据类型

##### 2.1 数字类型 Number

1. 所有数字不分大小、不分整浮、不分正负，都是数字类型

2. 0.5 = .5 类似的0可以省略

3. 科学计数法
   1. 3e8 = 300000000
   2. 3e-4 = 0.0003
   3. .3e5 = 30000

4. 二进制：以0b开头
   1. 0b11 = 2
   2. 0b1111 = 15

5. 八进制：以0开头
   1. 017 = 15

6. 十六进制：0x开头
   1. 0x11 = 17

7. NaN
   1. NaN = “not a number”，不是一个数（非数值）
   2. 它是一个数字类型的值：typeof NaN //Number
   3. 0/0 = NaN
   4. 字符串 * 字符串 = NaN
   5. NaN不自等
   6. 任何涉及NaN的操作都会返回NaN

8. Infinity无穷大
   1. 非零数字除以0时，结果是Infinity或-Infinity
   2. 使用typeof检测Infinity的类型是number

##### 2.2 字符串类型

1. 字符串是“人类的自然语言”

2. 字符串需要用引号包裹，单引号或双引号

3. 分清数字和字符串

    ```JavaScript
        typeof 11; //number
        typeof '11'; //string
    ```

4. 字符串的拼接
   1. 加号可以用来拼接多个字符串
   2. 字符串也可和变量拼接：将一个变量“插入”到字符串中，要“斩断连接”

5. 空字符串：闭合的引号对

   ```JavaScript
        var str = '';
   ```

6. 字符串的length属性：打点调用
   - length属性表示字符串的长度

7. 字符串的常用方法
    | 方法 | 功能 |
    | :----: | :----: |
    | charAt() | 得到指定位置字符 |
    | substring() | 提取子串 |
    | substr() | 提取字串 |
    | slice() | 提取字串 |
    | toUpperCase() | 将字符串变为大写 |
    | toLowerCase() | 将字符串变为小写 |
    | indexOf() | 检索字符串 |

    1. charAt(index)
       - 传参为位置
       - 位置不存在返回空字符串
    2. sunbstring(a,b)
       - 从a位置开始，到b位置（不包含b）
       - 省略第二个参数，返回的字串会一直到字符串的结尾
       - a可以大于b，数字顺序自动调整为小的数字在前
    3. substr(a,length)
       - 截取字符串
       - a是必须有的，代表截取的起始位置，当它为负数时，与字符串长度相加，获取的就是值就是起始位置（倒数位置）
       - length代表截取的字符总数，当第二个参数为负数时，返回空字符串；length可以省略，表示字符串到结尾
    4. slice(a,b)
       - a位置开始，到b位置（不包括b）
       - a可以为负数，可以倒数选择
       - a必须小于b
    5. toUpperCase()/toLowerCase()
        - 变为大写/变为小写
    6. indexOf(str)
       - 返回某个指定字符串首次出现的位置
       - 检索的字符串没有出现，返回-1

##### 2.3 布尔类型

- 值：true和false；表示真、假

   ```JavaScript
        typeof true; //boolean
        typeof false; //boolean

        typeof 'true'; // string
   ```

##### 2.4 undefined类型

```JavaScript
    typeof undefined; //undefined
    typeof 'undefined'; //string
```

1. 没有被赋值的变量默认值是undefined，undefined的类型为undefined

2. undefined既是值又是类型，这种类型只有undefined一个值

3. 变量声明提升

    ```JavaScript
        console.log(a); //undefined
        console.log(typeof a); //undefined
        var a = 10;
    ```

##### 2.5 null

1. null表示"空"，即"空对象"

2. 当需要将对象销毁、数组销毁或者删除事件监听时，通常将它们设置为null

3. typeof检测null的结果时object\

   ```JavaScript
        typeof null; //object
   ```

    - 类型和typeof检测结果并不总是一一对应；需要可以记忆

##### 2.5 undefined和null的异同点

1. undefined，简单数据类型；未赋值的变量默认值为undefined，类型检测结果为undefined类型
2. null，简单数据类型；表示空对象，在对象销毁、数组销毁、删除事件监听时使用，类型检测结果为object类型

#### 3. 数据类型的转换

##### 3.1 数据类型的转换

###### 1. 其他值 -> 数字

1. Number()函数

    ```JavaScript
    // 纯数字字符串变为数字，不是纯数字的字符串转为NaN
        Number('123'); //123
        Number('123.4'); //123.4
        Number('123年'); // NaN
        Number('2e3'); //2000
        Number(''); // 0

        Number(true); // 1
        Number(false); // 0

        Number(undefined); // NaN
        Number(null); // 0
    ```

2. parseInt()函数: 将字符串转为整数

    ```JavaScript
        parseInt(3); // 3
        parseInt(3.99); // 3
        parseInt('3.99'); // 3
        parseInt('200px'); // 200
        parseInt('圆周率3.14'); // NaN
    ```

3. parseFloat()函数: 将字符串转为浮点数

    ```JavaScript
        parseFloat('3.14'); // 3.14
        parseFloat('3.14是圆周率'); //3.14
        parseFloat('圆周率是3.14'); // NaN
    ```

###### 2. 其他值 -> 字符串

1. String()函数

    ```JavaScript
        String(123); // '123'
        String(123.4); // '123.4'
        String(2e3); // '2000'
        String(NaN); // 'NaN'
        String(Infinity); // 'Infinity'
        String(0xf); // '15'

        String(true); // 'true'
        String(false); // 'false'

        String(undefined); // 'undefined'
        String(null); // 'null'
    ```

2. toString()方法：打点调用（常用）

    ```JavaScript
        6.toString(); // 报错
        (6).toString(); // 6
    ```

###### 3. 其他值 -> 布尔值

1. Boolean()函数

    ```JavaScript
        Boolean(0); //false
        Boolean(NaN); //false
        <!-- 其他任何数字都是true -->
        Boolean(Infinity); //true
        Boolean(-Infinity); //true

        Boolean(''); //false
        <!-- 其他任何字符串都是true -->
        Boolean('false'); //true

        Boolean(undefined); //false
        Boolean(null); //false
    ```

##### 3.2 小案例：小小加法计算器

- 用户输入 -> 计算机处理 -> 显示结果

#### 4. 复杂数据类型

- 复杂数据类型都是“引用类型”

#### 5. 问题

1. parseInt('3.6' + '5.1');
   - 字符串连接parseInt('3.65.1') 
   - 正确结果为3

2. Boolean('false');
   - 除空字符外所有转换为Boolean的结果都为true

3. 0/0
   - NaN

4. 4/0
   - Infinity

5. 请说出substring()、substr()、slice()的区别

6. 'abcde'.slice(3,2);
   - 结果为''空字符串
   - 第一个数大于第二个数，不合法

### 第3章 表达式与操作符

#### 1. 表达式和运算符

#### 2. JS基本表达式

##### 2.1 算术表达式

| 意义 | 运算符 |
| :----: | :----: |
| 加 | + |
| 减 | - |
| 乘 | * |
| 除 | / |
| 取余 | % |

1. 优先级：乘除 > 加减；小括号可以改变优先级

2. 加号+ ：两边操作符则为相加；否则为连字符

3. 取余运算：a%b表示求a除以b的余数

4. 隐式类型转换
   1. 如果参与数学运算的某操作数不是数字类型，JS会自动将此操作数转为数字类型
   2. 隐式转换的本质是内部调用Number()函数

5. 几个需要注意的例子

   ```JavaScript
        3 * '2天' // NaN
        3 + '2天' // '32天'
        3 + undefined // NaN
        3 + null // 3
        3 + '' // 0
        3 + ' ' // 0
   ```

6. IEEE754
   1. JS中，有些小数的运算“丢失精度”，因为使用了IEEE754二进制浮点数算术标准
   2. 解决办法：在进行小数运算时，打点调用toFixed()方法，保留指定的小数位

    ```JavaScript
        0.1 + 0.2 // 0.30000000000000004
        (0.1 + 0.2).toFixed(2); // 0.30
    ```

7. Math对象：幂计算、根号计算、向上取整、向下取整

    ```JavaScript
        Math.pow(2,3); // 8
        Math.pow(3,2); // 9

        Math.sqrt(81); // 9
        Math.sqrt(-81) // NaN

        Math.ceil(2.4); //3
        Math.floor(2.4); //2

        Math.ceil(-2.4); // -2
        Math.floor(-2.4); // -3

        Math.ceil(2); // 2
        Math.floor(2); //2
    ```

##### 2.2 关系表达式

| 意义 | 运算符 |
| :----: | :----: |
| 大于 | > |
| 小于 | < |
| 大于或等于 | >= |
| 小于或等于 | <= |
| 等于 | == |
| 不等于| != |
| 全等于 | ===|
| 不全等于 | !== |

1. 大于和小于、大于等于、小于等于：意义与数学意义相同

    ```JavaScript
        8 <= 8 //true
        8 >= 8 //true
    ```

2. 判断是否相等
    - = 表示赋值；==表示判断相等

    ```JavaScript
        3 == 3  //true
        3 === 3  // true
        3 = 3  //错误
    ```

3. 相等和全等
    - 相等仅比较值相同(会进行隐式转换)
    - 全等比较值和类型

    ```JavaScript
        3 == '3' // true
        3 === '3' //false

        1 == true //true
        1 == true //false

        0 == false //true
        0 === false //false

        0 == undefined // false
        0 === undefined // false

        undefined == null //true
        undefined === null //false
    ```

4. NaN
   - NaN不自等
   - isNaN()函数判断是否为NaN：只要传入的变量Number转换的结果为NaN，则isNaN为true

    ```JavaScript
        NaN == NaN //false
        NaN === NaN //false

        isNaN(undefined) //true
        isNaN('3天') //true
        isNaN(undefined) //false

        NaN == undefined //false
    ```

5. 不相等和不全等

    ```JavaScript
        5 != 6 //true
        5 !== 6 //true

        5 != '5' //false
        5 !== '5' //true
    ```

6. 没有连比

   ```JavaScript
        3 <= a <= 15; // 先计算3 <= a为true， true <= 15为true，结果为true
        <!-- 这样的写法是错误的 -->
   ```

##### 2.3 逻辑表达式

| 意义 | 运算符 |
| :----: | :----: |
| 非 | ！ |
| 与 | && |
| 或 | \|\| |

1. 非运算
   1. 单目运算符，一个操作数
   2. 结果是布尔值

    ```JavaScript
        !true //false
        !false //true
        !0 //true
        !undefined //true
        !'' //true
        !'imooc' //false

        <!-- 双叹号，进行布尔值转换，类似于Boolean() -->
        !!true //true
        !!0 //false
        !!'' //false
        !!'imooc' //true
    ```

2. 与运算:都真才真

    ```JavaScript
        true && true //true
        true && false //false
        false && true //false
        false && false //false
    ```

3. 或运算：有真就真

    ```JavaScript
        true || true //true
        true || false //true
        false || true //true
        false || false //false
    ```

4. 短路计算
   1. a&&b运算中：a真，表达式值为b；a假，表达式值为a
   2. a||b运算中：a真，表达式值为a；a假，表达式为b

    ```JavaScript
        3 && 6 //6
        undefined && 15 //undefined
        15 & undefined // undefined
        null && 2 // null
        '' && 16 // ''
        NaN && undefined //NaN

        3 || 6 // 3
        0 || 6 //6
        null || undefined //undefined
        'a' || 'b' // a
        NaN || null // null
    ```

5. 逻辑运算的顺序：非与或

    ```JavaScript
        !true || true //true
        3 && 4 || 5 && 6 // 4
    ```

##### 2.4 赋值表达式

| 意义 | 运算符 |
| :----: | :----: |
| 赋值 | = |
| 快捷赋值 | += -= *= /= %=|
| 自增运算 | ++ |
| 自减运算 | -- |

1. 赋值运算产生值，等号后边的值将作为“赋值运算的值”
    - 可以连续使用赋值运算符

    ```JavaScript
        var a;
        console.log(a = 4); //4

        var a,b,c;
        a = b = c = 15; //先赋值15给c，再从右向左赋值
    ```

2. 快捷赋值运算符：在原数值基础上进行进一步计算

3. 自增自减运算符：在自身基础上加一或减一
   - a++先用再加
   - ++a先加再用

    ```JavaScript
        var a = 3;
        var b = a++; //b = 3, a = 4

        var a = 3;
        var b = ++a; //b = 4, a = 4

        var num1 = 10, num2 = 3;
        var num3 = num1 + num2++;
        // num1 = 10, num2 = 4, num3 = 13
        // ++在后先运算

        var a = 3;
        var b = 4;
        alert(a++ + b++ + ++a + ++b); // 3 + 4 + 5 + 6 = 18
    ```

##### 2.5 综合表达式

1. 运算顺序：非 -> 数学运算 -> 关系运算 -> 与或

    ```JavaScript
        !13 < 5 - 3; //true
        !13 < 5 - 5; //false
    ```

2. 变量的范围表示

    ```JavaScript
        a >= 5 && a <= 12
    ```

3. 小案例：闰年判断
   - 闰年的计算方法
      1. 能被4整除且不能被100整除
      2. 能被100整除也能被400整除

```JavaScript
    var year = Number(prompt('请输入年份判断是否是闰年：'));

    alert(year % 4 == 0 && year % 100 != 0 || year % 100 == 0 && year % 400 == 0)
```

## 第6周

### 第4章 流程控制语句

#### 1. 条件语句

##### 1.1 if语句的基本使用

```JavaScript
    if(条件) {
        // 表达式为真，则执行这里
    } else {
        // 否则执行这里
    }
    
    // 省略else的语句体
    if(条件) {

    }

    // 单行if
    if(条件) 执行;
```

```flow
    st=>start
    cond=>condition: if条件（ture or false?）
    op1=>operation: 第一种处理
    op2=>operation: 第二种处理
    st->cond
    cond(true)->op1
    cond(false)->op2
```

```JavaScript
    var a = Number(prompt('请输入一个整数：'));
    
    // 第一个if语句体
    if(a > 5) {
        alert('这个数字大于5');
    }
    
    // 第二个if语句体
    if(a % 2 == 0){
        alert('这个数字是偶数');
    }

    alert('再见'); // 一定执行
```

- else可以省略

- 看清哪些语句是if语句体中的语句

##### 1.2 if else if 多条件分支

```JavaScript
    if (条件1) {
        // 条件1为真
        // 操作1
    } else if (条件2) {
        // 条件1为假且条件2为真
        // 操作2
    } else {
        // 条件1为假且条件2为假
        // 操作3
    }
```

- 如果……否则如果……否则：else if()条件分支中“暗含不符合之前的所有条件”的意思

```JavaScript
    var str = "IMOOC521";
    var num = parseInt(str); // NaN
    if(num == NaN) {
        // NaN不自等，条件不满足
        alert(NaN);
    } else if (num == 521) {
        alert(521);
    } else if (typeof num == "number") {
        // NaN本身是Number类型
        alert("number");
    } else {
        alert("str");
    }   

    // 运行结果 "number"
```

- 题目
  - 第一步：页面弹出输入框，需要用户输入自己的手机号码
  - 第二步：对用户的手机号码进行判断，首先判断用户输入的号码是否是11位
  - 第三步：确定用户输入的号码是11位后，在此进行判断，用户输入的11位号码是否是纯数字
  - 第四步：输入的号码无误，弹出“号码输入正确”

```JavaScript
    var num = prompt('请输入您的手机号：');
    if (num.length != 11) {
        alert('请输入11位手机号码');
    } else {
        // 注意嵌套条件
        if (!isNaN(num)) {
            alert('号码输入正确');
        } else {
            alert('输入的手机号必须是11位数字');
        }
    }
```

##### 1.3 if语句算法题

1. 判断水仙花数
   - 水仙花数是这样一个三位数：它的每个数位的数字立方和等于它本身；例如153
   - 要求用户输入一个数字n，判断n是否是水仙花数

    ```JavaScript
    /*   
        1. 用户输入数字n
        2. 将n拆位：
           - 数学方法
                1. 百位原数字除以100取整
                2. 十位原数字除以10再与10求模
                3. 个位与10求模
           - 字符串方法
                1. 原数变为字符串
                2. charAt()方法得到每个数位的值 
    */
    <script>
        // 请用户输入一个三位数
        var n = Number(prompt('请输入一个三位数:'));

        // 对用户输入的数值，进行合法性的验证
        if(!isNaN(n) && n >= 0 && n <= 999) {
            // 当用户输入的数字合法
            // 数学拆位
            // 百位
            var a = Math.floor(n / 100);
            // 十位
            var b = Math.floor(n / 10) % 10;
            // 个位
            var c = n % 10;
           
            // 水仙花数判断
            if(Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3) == n) {
                alert(n + '是水仙花数');
            } else {
                alert(n + '不是水仙花数');
            }
        } else {
            alert('您的输入不合法');
        }
    </script>

    <script>
        // 请用户输入一个三位数
        var n = Number(prompt('请输入一个三位数:'));

        // 对用户输入的数值，进行合法性的验证
        if(!isNaN(n) && n >= 0 && n <= 999) {
            // 当用户输入的数字合法
            // 字符串方法
            var n_str = n.toString();
            var a = Number(n_str.charAt(0));
            var b = Number(n_str.charAt(1));
            var c = Number(n_str.charAt(2));

            if(Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3) == n) {
                alert(n + '是水仙花数');
            } else {
                alert(n + '不是水仙花数');
            }
        } else {
            alert('您的输入不合法');
        }
    </script>
    ```

##### 1.4 switch语句

- 当一个变量被分类讨论

1. 例子：输出一个月有多少天

    ```JavaScript
        switch(month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                alert(month + '月有31天');
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                alert(month + '月有30天');
                break;
            case 2:
                alert(month + '月有28天或29天');
                break;
            default:
                alert('请输入正确的月份');
        }
    ```

    - 被讨论的对象一般是一个变量，或是一个表达式求值后的结果
    - case语句：
      - case表示情况，后边直接跟一个值；
      - 被讨论的对象会逐句与case后的该值进行全等比较，如果相同，则执行case：后的语句；
      - default表示默认情况
      - 多条case可以共用一个语句体
    - break语句：
      - break表示跳出switch语句体
      - 不书写break，后面所有的case将都被视为匹配，直到遇见break

    ```JavaScript
        var a = 10;
        switch(a) {
            case 10:
                console.log('A');
            case 4:
                console.log('B');
            case 88:
                console.log('C');
                break;
            case 2:
                console.log('D');
        }

        //console输出A,B,C
    ```

##### 1.5 三元运算符

- 条件表达式 ? 表达式1 : 表达式2
  - 条件为真，执行表达式1
  - 条件为假，执行表达式2

```JavaScript
    var age = 24;
    var type = age>=18 ? '成年人' : '未成年人';
    alert(type); // 成年人
```

#### 2. 循环语句

##### 2.1 for循环语句

```JavaScript
    for(var i = 1; i <= 10； i++) {
        // 需要循环的语句
    }
```

1. 括号里有三个表达式：
   1. 循环变量
   2. 循环条件（为真，进行循环）
   3. 更新循环变量

2. 准确遍历for循环

    ```JavaScript
        for(var i = 1; i < 10; i++){
        }
        console.log(i);  // 10

        for (var i = 1; i < 10; --i) {
            console.log(i); // 死循环
        }

        for(var i = 10; i < 4; i++){
            console.log(i); //没有输出
        }
    ```

3. 循环里一定要定义循环的条件，不然控制台会报错，代码不会向下执行，页面也不会有任何显示。

##### 2.2 for循环算法题

1. 计算1+2+3+……+99+100的和、

    ```JavaScript
        // 循环开始时，定义累加器sum，初始化为0
        for(var i = 1, sum = 0; i <= 100; i++){
            sum += i;
        }
    ```

2. 1~100中哪个数字除以3余1，除以4余2，除以5余3

    ```JavaScript
        // 穷举法
        for(var i = 1; i <= 100; i++){
            if(i % 3 == 1 && i % 4 == 2 && i % 5 == 3) {
                console.log(i);
            }
        }
    ```

##### 2.3 while循环语句

1. while循环“不定范围”

    ```JavaScript
        while(测试条件) {

        }

    ```

    - 在while循环外定义好循环变量
    - 循环体内的语句必须使测试条件趋向不成立

2. while循环的使用

    1. 寻找最小的满足n*n > 456789的整数n

        ```JavaScript
            var i = 1;
            while (i*i <= 456789) {
                i++;
            }
            console.log(i);
        ```

    2. 小兔子拔萝卜，第一天拔1个，第二天拔2个，第三天拔3个，以此类推。问小兔子多少天能把500个萝卜拔光？

        ```JavaScript
            var i = 1, sum = 0;
            while(sum < 500) {
                sum += i;
                i++;
            }
            // 控制条件的变量和循环变量不是同一个变量的时候有可能会产生这样的错误
            alert(i); // 33 错误，因为多执行了一次i++，称为“出一错误”
            alert(i-1); //32 正确
        ```

3. 例子

    ```JavaScript
        var i = 1;
        while(i<10) {
            document.write(i);
        }
        // 死循环
    ```

    ```JavaScript
        // 猜数字，答案是5
        var input = Number(prompt('请输入1-10之内的数字：'));
        while(input != 5){
           if(input < 5) {
               alert('猜小了');
               input = Number(prompt('请输入1-10之内的数字：'));
           } else if (input > 5) {
               alert('猜大了');
               input = Number(prompt('请输入1-10之内的数字：'));
           }
       }
       alert('猜对了！')
    ```

##### 2.4 break和continue

###### 2.4.1 break

- break表示立即终止循环，它只能用在循环语句中

    ```JavaScript
        while(true) {
            if(条件){
                break;
            }
        }
    ```

###### 2.5.1 continue

- continue用于跳过循环中的一个迭代，并继续执行循环中的下一个迭代

    ```JavaScript
        for(var i = 0; i < 5; i++) {
            if(i == 3){
                continue;
            }
            console.log(i); //0,1,2,4
        }
    ```

##### 2.5 do while语句

- 后测试循环语句，循环体一定会至少执行一次

```JavaScript
    do {
        循环体
    } while(循环执行条件)
```

- 随机数函数：Math.random()得到0~1之间的小数
  - 让小数扩大：Math.random() * 10
  - 整数：parseInt(Math.random() * 10)
  - 得到[a,b]区间的整数：parseInt(Math.random()*(b-a+1))+a

- 例题：请编写程序，随机生成两个变量dx和dy，它们均在[-4，4]区间随机取值，但要求dx和dy不能同时为0

    ```JavaScript
        do {
            var dx = parseInt(Math.random() * 9) - 4;
            var dy = parseInt(Math.random() * 9) - 4;
        } while ( dx == 0 && dy == 0)
        // dx和dy都为0，则进循环体
        document.write(dx + ' ' + dy);

        //使用while循环，篇幅增大
        var dx = parseInt(Math.random() * 9) - 4;
        var dy = parseInt(Math.random() * 9) - 4;
        while(dx == 0 && dy == 0) {
            var dx = parseInt(Math.random() * 9) - 4;
            var dy = parseInt(Math.random() * 9) - 4;
        }
    ```

##### 2.6 while语句算法题

- 例题：随机生成一个2到99的数字，让用户猜测这个数字是几，用户输入自己的猜测之后，提示“大了”或“小了”，猜对了则输出“猜对了”并退出

    ```JavaScript
        // 随机数字2~99
        var answer = parseInt(Math.random() * 98) + 2;
        var min = 1,
            max = 100;
        // 死循环
        while (true) {
            var userAnswer = Number(prompt('请输入猜测的数字' + min + '~' + max));
            // 验证用户输入的数字是否在区间内
            if (userAnswer <= min || userAnswer >= max) {
                alert('输入的数字不在范围内');
                continue;
            }

            if (userAnswer > answer) {
                alert('猜大了');
                max = userAnswer;
            } else if (userAnswer < answer) {
                alert('猜小了');
                min = userAnswer;
            } else {
                alert('猜对了');
                break;
            }
        }
    ```

- 三种循环的区别：
  - for循环：判断条件，执行代码块，循环次数是固定的
  - while循环：判断条件，执行代码块，循环次数不是固定的
  - do while循环：不管条件是否符合，先运行一次代码，然后再判断条件

#### 3. 初识算法

##### 3.1什么是算法

- 解题方案的准确而完整的描述，能够对一定规范的输入，在有限时间内获得所要求的输出

- 把问题拆解为一步一步的步骤

- 计算机的流程控制语句：
  - 顺序执行
  - 选择语句
  - 循环语句

- 优秀算法的要求：
  - 正确性
  - 健壮性
  - 可读性

- 伪代码

##### 3.2累加器和累乘器

1. 由用户输入数字n，请计算下面算式的值
   1/2 + 2/3 + 3/4 + 4/5 + 5/6 + …… + n+1/n

   ```JavaScript
        var n = Number(prompt('请输入数字n，n>=2'));

        // 累加器
        var sum = 0;
        // 遍历分母，分母为n+1
        for (let i = 2; i <= n; i++) {
            sum += (i+1)/i;
        }

        alert(sum.toFixed(2));
   ```

2. 由用户输入数字n，请计算n的阶乘

    ```JavaScript
        var n = Number(prompt('请输入数字n'));
        
        // 累乘器，注意从1开始
        var result = 1;

        // 倒着遍历
        for(var i = n; i >= 1 ; --i) {
            result *= i;
        }

        alert(result);
    ```

3. 圆周率Π可以由下面的莱布尼兹级数公式计算，由用户输入n，计算圆周率
    Π/2 = 1 + 1/3 + 1 * 2 / 3 * 5 + 1 * 2 * 3 / 3 * 5 * 7 + …… + 1 * 2 * …… * n / 3 * 5 * …… * （2n+1）

    <!-- 后一项比前一项多乘了一项 -->

    ```JavaScript
        var n = Number(prompt('请输入数字n'));
        
        // 累加器，最后的答案
        var sum = 0;
        // 累乘器，制作出来每一项，制作出来这个项，往累加器中累加
        var item = 1;
        // 遍历
        for (var i = 1; i <= n; i++) {
            // 制作出来这一项，要使用累乘器，构建车厢
            item *=  i / (2 * i + 1);
            console.log(item);
            // 把item往累加器中累加
            sum += item;
        }

        alert((sum + 1) * 2 );
    ```

##### 3.3 穷举法

- 让计算机发挥计算机的计算优势；在确定的大致范围内，对所有情况逐一验证

1. 用户输入一个数字，在控制台显示这个数字的全部约数

    ```JavaScript
        var n = Number(prompt('请输入数字n'));
        
        for(var i = 1; i <= n; i++) {
            if(n%i == 0){
                console.log(i);
            }
        }
    ```

2. 寻找全部的水仙花数

    ```JavaScript
        for(var i = 100; i <= 999; i++){
            // 拆数位
            var i_str = i.toString();
            // a,b,c 百位 十位 个位
            var a = i_str.charAt(0);
            var b = i_str.charAt(1);
            var c = i_str.charAt(2);

            if(Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3) == i){
                console.log(i);
            }
        }
    ```

##### 3.4 综合算法题目

- 循环的嵌套的特点如下：

    （1）循环与循环嵌套时，当外层循环为假时内层不再执行。

    （2）先执行外层循环再执行内层循环，直到内层循环条件为假时再返回外层去执行。

    ```JavaScript
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++){
                console.log(i,j);
            }
        }
    ```

1. 请寻找1~100的所有质数

    ```JavaScript
        outer:for (var i = 2; i <= 100; i++) {
            for(var j = 2; j < i; j++) {
                if(i % j == 0){
                    // 说明i不是质数
                    // continue表示放弃这个数字，开始迭代下一个数字，continue负责的是它所在的最内层的for循环
                    // 要给for循环加上label
                    // continue outer 表示立即开始迭代外层i的循环，而不是内层j的循环
                    continue outer;
                }
                console.log(i);
            }
    ```

2. 鸡兔同笼：35个头，94只脚，问有几只兔子，几只小鸡

    ```JavaScript
        // 小鸡有a只，小兔有b只
        for(var a = 0; a <= 35; a++){
            for (var b = 0; b <= 35; b++) {
                if(a+b == 35 && 2*a + 4*b == 94){
                    console.log(a,b);
                }
            }
        }

        // 小鸡有a只，小兔有35-a只
        for (var a = 0; a < 35; a++) {
            var b = 35 -a ;
            if(2*a + 4*b == 94){
                console.log('小鸡有' + a + '只，小兔有' + b + '只');
            }
        }
    ```

### 第5章 数组

#### 1. 数组的定义和基本使用

##### 1.1 数组基础

1. Array: 存储一组相关的值

2. 定义数组

    ```JavaScript
        // 方括号定义，常用
        var arr = [0,1,2,3,4,5,6,7,8,9];
        var arr = []; //建立空数组
        // 项

        var arr = new Array('A','B','C','D');

        var arr = new Array(4);
        // 每一项都是undefined
    ```

3. 访问数组：下标访问，下标从0开始
   - 下标越界：访问数组中不存在的项会返回undefined，不报错

    ```JavaScript
        var arr = ['a','b','c'];
        console.log(arr[0]); // 'a'
        console.log(arr[-1]); // undefined，不表示倒数第一项
    ```

4. 数组长度：length属性
   - 访问数组最后一项：arr[arr.length - 1]
   - 去掉数组最后一项：arr.length -= 1;

    ```JavaScript
        var arr = [0,1,2,3];
        console.log(arr.length); //4
        console.log(arr[arr.length-1]); //访问数组的最后一项
    ```

5. 更改数组项
   - 下标访问并更新
   - 如果更改的数组项超过了length-1，则会创造这项

    ```JavaScript
        var arr = [0,1,2,3];
        arr[1]++;

        var arr = [0,1,2];
        arr[5] = 5;
        console.log(arr); // 0,1,2,empty,empty,5
        console.log(arr.length); // 6
    ```

6. 数组遍历

    ```JavaScript
        var arr = [0,1,2,3,,5,,]
        for(var i = 0; i < arr.length; i++){
            console.log(arr[i]); //0,1,2,3,undefined,5,undefined(最后一个逗号忽略)
        }
    ```

##### 1.2 数组的类型检测

- 数组用typeof 检测结果是object

    ```JavaScript
        typeof [1,2,3]; //'object'
    ```

- Array.isArray()方法可以用来检测数组
  
    ```JavaScript
        //兼容到IE8
        Array.isArray([1,2,3]); //true
        Array.isArray([]); // true
    ```

- “鸭式辨型”

#### 2. 数组的常用方法

##### 2.1 数组的头尾操作

| 方法 | 功能 |
| :----: | :----: |
| push() | 在数组末尾推入新项 |
| pop() | 删除数组中的最后一项 |
| unshift() | 在数组头部插入新项 |
| shift() | 删除数组中下表为0的项|

1. .push()
   1. 推入多项，逗号隔开
   2. 调用方法后，数组立即改变，不需要重新赋值
   3. 把新的参数添加到数组的尾部，返回值是数组的新长度

    ```JavaScript
        var arr = [1,2,3,4,5];
        arr.push(6);

        arr = arr.push(7); //报错
    ```

2. .pop()
   1. 删除并返回数组的最后一项
   2. 没有参数

    ```JavaScript
        var arr = [1,2,3,4,5];
        arr.pop(); // arr - [1,2,3,4]

        var item = arr.pop(); // item = 55
    ```

3. .unshift()
   1. 插入多项，逗号隔开
   2. 调用方法后，数组立即改变，不需要重新赋值
   3. 新的参数添加到数组的最前面，返回值是数组的新长度

4. .shift()
   1. 删除并返回数组的第一项
   2. 没有参数

5. 多功能方法：.splice()方法
   1. 替换数组中的指定项.splice(index,count,c,d,e,……)：从下标为index的项开始，选择count个项，替换为c,d,e,…
   2. 添加指定项（在index前）.splice(index,0,c,d,e)
   3. 删除指定项.splice(index,count)
   4. 以数组形势返回被删除的项

    ```JavaScript
        var arr = [1,2,3,4,5];   
        // 从下标为3的位置开始(包括下标为3的位置)，选择2项，替换为33，44，55，66
        // 1,2,3,33,44,55,66
        var items = arr.splice(3,2,33,44,55,66);    // [4,5]

        var arr1 = [1,2,3];
        // 插入
        var items1 = arr1.splice(1,0,33,44,55); 
        // [1,33,44,55,2,3]
        // items1 []

        var arr2 = [3,4,5];
        var items2 = arr2.splice(1,2); // [3]
        // items1 [4,5]
    ```

6. .slice(a,b)
   1. 得到子数组：从下标为a的项开始，到下标为b（但不包括b）；b省略，则为截到最后一项
   2. 不会更改原数组
   3. 负数表示倒数项

    ```JavaScript
        var arr = ['A','B','C','D','E','F'];
        var child_arr1 = arr.slice(2,5); 
        var child_arr2 = arr.slice(2); 
        var child_arr3 = arr.slice(2,-1); 
        console.log(arr); // ['A','B','C','D','E','F']
        console.log(child_arr1); // ['C','D','E']
        console.log(child_arr2); // ['C','D','E','F']
        console.log(child_arr3); // ['C','D','E']
    ```

7. .join()和.split()
   1. 数组的方法：.join(连接符)数组转为字符串
      1. 空参数等同于用','连接
   2. 字符串的方法：.split()字符串转为数组

    ```JavaScript
        var arr = [1,2,3,4,5];
        arr.join(); // "1,2,3,4,5"
        arr.toString(); // "1,2,3,4,5"
        arr.join(''); // "12345"

        var str = "abcdef";
        str.split(); //["abcdef"]
        str.split(''); // ["a","b","c","d","e","f"]

        var str = "a-b-c-d-e-f";
        str.split(''); // ["a","-","b","-","c","-","d","-","e","-","f"]
        str.split('-'); // ["a","b","c","d","e","f"]
    ```

8. concat()
   1. 连接多个数组
   2. concat方法不会改变原数组

9. reverse()
   1. 顺序置反
   2. 立即改变原数组
   3. 字符串置反：str.split("").reverse().join("");

10. indexOf()
    1. indexOf()有两个参数，第一个参数是要查找的项，第二个是查找项的起点位置的索引。如果查找到该项，则返回它从查找位置起，首次出现的位置。如果没有查找到，则返回-1。
    2. 如果元素不存在则返回-1

11. includes()
    1. 判断一个数组是否包含一个指定的值
    2. 返回布尔值

12. 数组排序：sort()

#### 3. 数组算法

##### 3.1 遍历

```JavaScript
    var arr = [1,2,3,4,5];
    var sum = 0,
        max = arr[0],
        min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        } else if(arr[i] < min) {
            min = arr[i];
        }
    }
```

1. 数组求和：sum = 0初始化

2. 数组最大项：max = arr[0]初始化

3. 数组最小项：min = arr[0]初始化

4. 例子

    ```JavaScript
        // 移除数组arr中所有为“无效”的元素，直接在原数组上进行操作。

        var arr=["有效","无效","有效","无效","无效","有效"];

        for(var i = 0; i < arr.length; i++){
            if(arr[i] == '无效') {
                arr.splice(i,1);
                //注意删除元素之后，后面元素的索引会改变。所以需要把索引减去1。例如第二次循环时，删掉了索引为1的元素"无效"，由于原数组改变。索引为2的元素就会变成索引为1的元素，如果索引不减去1，则后面循环拿到的元素就错位了
                i -= 1;
            }
        }

        document.write(arr);
    ```

##### 3.2 数组去重和随机样本

1. 数组去重：去掉数组中的重复项
   - 思路：创建一个空的结果数组，遍历原数组，把不在结果数组中的项推入结果数组

    ```JavaScript
        var arr = [1,1,1,2,2,3,4,1,];

        //结果数组
        var result = [];

        //遍历原数组
        for(var i = 0; i < arr.length; i++){
            //判断遍历到的这项是否在结果数组中,includes方法
            if(!result.includes(arr[i])){
                result.push(arr[i]);
            }
        }

        document.write(result);
    ```

2. 随机样本
   - 请随机从原数组中取3项
   - 思路：创建一个空结果数组，遍历原数组，随机选择一项，推入结果数组，并且将这项删除

    ```JavaScript
        var arr = [3,6,9,10,5,8,7]; //默认没有重复项

        //结果数组
        var result = [];
        
        //遍历原数组
        for(var i = 0; i < 3; i++) {
            // 随机选择一项的下标，数组的下标0~arr.length-1;
            // random公式
            var n = parseInt(Math.random()*arr.length);
            // 把这项推入结果数组
            result.push(arr[n]);
            // 删除这项，防止重复被随机到
            arr.splice(n,1);
        }
        console.log(result);
    ```

##### 3.3 冒泡排序

- 排序算法

- 核心思路：一次一次进行多次项的两两比较
  - n个数字，需比较n-1次，比较次数为n*(n-1)/2

    ```JavaScript
        // 冒泡排序
        var arr = [6,2,9,3,8,1];

        // 一趟一趟比较，趟数序号为i
        for(var i = 1; i < arr.length; i++){
            // 内层循环负责两两比较
            for(var j = arr.length - 1; j >= i; j--){
                // 判断项的大小
                if(arr[j] < arr[j-1]){
                    var temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;
                }
            }
        }

        console.log(arr);
    ```

##### 3.4 二维数组

- 以数组作为数组元素，“数组的数组”

    ```JavaScript
        var matrix = [
            [11,22,33],
            [22,33,44],
            [33,44,55],
            [44,55,66]
            ];

        console.log(matrix.length); //4

        //遍历二维数组中的每个项
        for(var i = 0; i < 4; i++){
            for(var j = 0; j < 3; j++){
                console.log(martirx[i][j]);
            }
        }


    ```

#### 4. 引用类型

##### 4.1 引用类型基础

```JavaScript
    var a = 3;
    var b = a;
    a++;
    console.log(a); //4
    console.log(b); //3

    var arr1 = [1,2,3,4];
    var arr2 = arr1;
    arr1.push(5);
    console.log(arr1); //[1,2,3,4,5]
    console.log(arr2); //[1,2,3,4,5]

    3 == 3; //true
    null == null; //true
    undefined == undefined; //true
    4 == [4]; //true,[4]转化为数值类型
    4 === [4]; //false
    [1,2,3] == [1,2,3]; //false
    [] == [] //false

    var arr = [1,2,3];
    var anotherarr = arr;
    anotherarr == arr; //true
```

1. 基本类型: number、boolean、string、undefined、null
   - 克隆时会在新地址创建新副本，两个变量指向不同的地址
   - 判断相等时：判断值是否相等

2. 引用类型：array、object、function、regexp……
    - 堆内存，两个变量指向同一个地址
    - 判断相等时：判断址是否相等

3. 内存和硬盘
   - 内存：运行程序
   - 硬盘：保存文件

4. 例题:现在有两个变量，分别是a = {name: 'xm'}, b = [4]，我们不用第三个变量来调换a和b的值。

    ```JavaScript
        var a = {name: 'xm'}, b = [4];
        /*此处添加代码*/
        var a = [a,b];
        var b = a[0];
        var a = a[1];
        console.log(a,b);
    ```

##### 4.2 深克隆和浅克隆

- 浅克隆：只克隆数组的第一层，如果是多维数组，或者数组中的项是其他引用类型值，则不克隆其他层

    ```JavaScript
        var arr1 = [1,2,3,4,[1,2,3,4]];
        // 结果数组
        var result = [];

        // 遍历原数组，把遍历到的每一项推入到原数组中
        for(var i = 0; i < arr1.length; i++){
            result.push(arr1[i]);
        }

        console.log(result);
        console.log(result == arr1); // false，值相同但内存地址不同，表示克隆出的新数组和原数组不是内存中的同一个对象
        console.log(result[4] == arr1[4]) // true
    ```

- 深克隆：克隆数组的所有层，要使用递归

## 第7周 JS函数与DOM

### 第6章 函数

#### 1. 函数的基本使用

##### 1.1 什么是函数

- 语句的封装，方便复用

- 一次定义，多次调用

- 简化代码

##### 1.2 函数的定义和调用

- 先定义再使用

- function关键字定义

```JavaScript
    function fun(){
        // 函数体
    }
    fun(); // 调用函数

    // 函数表达式
    // 把匿名函数赋值给一个变量
    var fun = function(){
        //函数体
    }
```

- 调用函数：执行
  - 函数名后面书写圆括号

- 语句的执行顺序

    ```JavaScript
        function fun(){
            console.log('A');
            console.log('B');
            console.log('C');
        }

        console.log(1);
        console.log(2);
        console.log(3);
        fun();  // 调用权移交给函数
        console.log(4);
        console.log(5);
        console.log(6);

        // 1,2,3,'A','B','C',4,5,6
    ```

- 函数声明提升
  - 注意：函数表达式不能提升
  - 函数优先提升

    ```JavaScript
        // 函数声明提升
        fun(); // '函数被执行'

        function fun(){
            alert('函数被执行');
        }

        // 函数表达式不能提升
        fun2(); // 错误
        // 本质上定义了一个变量
        // fun2被提升，值为undefined
        var fun2 = function(){
            alert('函数被执行');
        }

        // 函数优先提升，再提升变量
        // function fun3();
        // var fun3; 只提升定义，不提升值，无法覆盖function fun3
        fun3();  // 弹出B
        
        var fun3 = function(){
            // 顺序执行的时候fun3被此函数重新赋值
            alert('A');
        }

        function fun3(){
            // 预解析阶段被提升
            alert('B');
        }

        fun3(); // 弹出A


        // 预解析
        // fn函数在预解析时，已经提前进行了该函数的声明
        document.write(fn); // function fn() {}
        function fn(){}

        // 预解析
        // 变量预解析时，会提前声明（定义）并赋值为undefined，要注意赋值语句不会预解析。
        // var fn=function(){}是定义了一个变量，变量值为函数。所以fn遵循的是变量预解析。也就相当于如下：
        // var fn=undefined;
        // document.write(fn);
        // fn=function(){};
        // 所以上面代码输出的结果为undefined
        document.write(fn2);
        var fn2 = function(){};

        // 例题
        console.log(a);
        var a = 1;
        console.log(a);
        function a(){
            console.log(2);
        }
        console.log(a);
        var a = 3;
        console.log(a);
        function a(){
            console.log(4);
        }
        console.log(a);
        a();

        // 解题
        function a(){
            console.log(2);
        }
        function a(){
            console.log(4);
        }
        var a;
        console.log(a); // function a(){console.log(4);}
        a = 1;
        console.log(a); // 1
        console.log(a); // 1
        a = 3;
        console.log(a); // 3
        console.log(a); // 3
        a(); // 报错
    ```

##### 1.3 函数的参数和返回值

###### 1.3.1 函数的参数

1. 参数：函数内的待定值
   - 调用函数时，必须传入参数的具体值，形实结合
   - 多个参数，逗号隔开

2. 形参和实参个数不同的情况
   1. 形参 < 实参：有实参没有被接收
   2. 形参 > 实参：没有收到实参的形参为undefined

3. arguments
   1. 表示函数接收到的实参列表
   2. 类数组对象
         1. 所有属性均为从0开始的自然数序列
         2. 有length属性
         3. [下标]访问
         4. 不能调用数组的方法
         5. 不管用户传入多少个实参，都可以使用arguments对它们进行访问和操作

###### 1.3.2 函数的返回值

1. return关键字表示“函数的返回值”
   - 返回值可以被变量接收
   - 调用一个有返回值的函数，可以被当作一个普通值，从而可以出现在任何可以书写的地方
   - 遇见return，即退出函数
   - 如果return后面没有返回值，默认返回undefined，且执行完return语句，后面的语句不会执行了。

    ```JavaScript
        function sum(a,b){
            return a + b;
        }

        var result = sum(3,4) * sum(2,6); // 84
        var result2 = sum(3, sum(4,5)); // 12
    ```

#### 2. 函数算法题

##### 2.1 寻找喇叭花数

- 喇叭花数是这样的三位数，其中每一位数字的阶乘之和恰好等于它本身，即abc = a! + b! +c!，其中abc表示一个三位数。寻找所有的喇叭花数。

    ```JavaScript
        // 思路将阶乘封装为函数
        // 封装阶乘函数
        function factorial(n) {
            // 累乘器
            var result = 1;
            for (var i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }

        // 穷举法，从100到999寻找喇叭花数
        for (var i = 100; i <= 999; i++) {
            var i_str = i.toString();

            var a = Number(i_str[0]);
            var b = Number(i_str[1]);
            var c = Number(i_str[2]);
            if (factorial(a) + factorial(b) + factorial(c) == i) {
                console.log(i);
            }
        }
    ```

##### 2.2 JavaScript内置的sort()方法

- 数组排序sort()
  - 参数为函数
  - 这个函数中的a,b分别表示数组中靠前和靠后的项，如果需要将它们交换位置，则返回任意正数；否则就返回负数

    ```JavaScript
        var arr = [33,22,55,11];
        arr.sort(function(a,b){
            if(a > b){
                return 1; //交换，从小到大的排序
            } else {
                return -1;
            }
        });

        var arr1 = [33,22,55,11];
        arr1.sort(function(a,b){
            return a - b; //从小到大
        });


        var arr2 = [33,22,55,11];
        arr2.sort(function(a,b){
            return b - a; //从大到小
        });
    ```

#### 3. 递归

##### 3.1 什么是递归

- 函数的内部语句调用函数自身，从而发起对函数的迭代；函数自己调用自己

- 要素
  - 边界条件：确定递归到何时终止，递归出口
  - 递归模式：大的问题分解为小的问题，递归体

    ```JavaScript
        // 递归
        function factorial(n){
            if(n == 1) return 1;
            return n * factorial(n-1);
        }
    ```

##### 3.2 递归的常见算法

- 斐波那契数列：1,1,2,3,5,8,13,21;从下标为2的项开始，每项等于前两项的和

    ```JavaScript
        function fib(n) {
            if (n == 0 || n == 1) return 1;
            return fib(n - 1) + fib(n - 2);
        }
    ```

##### 3.3 深克隆

```JavaScript
    var arr1 = [33, 44, 55, 66, [77, 88, [0, 1, 2]],[99, 22, 11]];

    // 函数，递归
    function deepClone(arr) {
        // 结果数组，每一层都有一个结果数组
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            // 类型判断，如果是数组
            if (Array.isArray(arr[i])) {
                // 递归
                res.push(deepClone(arr[i]));
            } else {
                // 递归的出口，基本类型值直接推入数组中
                res.push(arr[i]);
            }
        }
        // 返回结果数组
        return res;
    }

    var arr2 = deepClone(arr1);
    console.log(arr2);
```

#### 4. 作用域和闭包

##### 4.1 全局变量和局部变量

1. 局部变量：
    - JavaScript是函数级作用域的编程语言：变量只在其定义时所在的function内部有意义

2. 全局变量
    - 没有定义在任何函数的内部的变量，它在任何函数内都可以被访问和更改

    ```JavaScript
        function fun(){
            var a = 10;
        }
        fun();
        console.log(a); //引用错误

        var b = 5;
        function fun2(){
            b++;
        }
        fun2();
        console.log(b); //6
    ```

3. 遮蔽效应
   - 如果函数中也定义了和全局同名的变量，则函数内的变量会将全局的变量“遮蔽”

    ```JavaScript
        var a = 10;
        function fun(){
            var a = 5;
            a++;
            console.log(a); // 输出6
        }

        fun();
        console.log(a); // 输出10
    ```

4. 注意考虑变量声明提升

    ```JavaScript
        var a = 10;
        function fun(){
            a++;
            var a = 5;
            console.log(a); //6
        }
        fun();
        console.log(a); //10

        var a = 10;
        function fun(){
            var a;  // undefined
            a++;    // NaN
            a = 5;  // 5
            console.log(a); // 5
        }
        fun();
        console.log(a); //10
    ```

5. 形参也是局部变量

    ```JavaScript
        var a = 10;
        function fun(a) {
            a++;    // 形参a，也是函数内部的局部变量
            console.log(a); // 7++ , 输出8
        }
        fun(7);
        console.log(a); // 输出10
    ```

6. 函数的嵌套
   - 函数内部也可以定义一个函数，称为局部函数

    ```JavaScript
        function fun(){
            function inner(){
                console.log('你好');
            }
            inner();
        }
        fun();
    ```

7. 作用域链
   - 在函数嵌套中，变量会从内到外逐层寻找它的定义

    ```JavaScript
        var a = 10;
        var b = 20;
        function fun(){
            var c = 30;
            function inner(){
                var a = 40;
                var d = 50;
                console.log(a,b,c,d); // 40,20,30,50
            }
            inner();
        }
        fun();
    ```

8. 不用关键字var声明将定义全局变量

    ```JavaScript
        function fun(){
            a = 3;
        }
        fun();
        console.log(a); //3
    ```

    ```JavaScript
        var a = 1;
        var b = 2;
        function fun(){
            c = 3;
            var b = 4;
            b++;
            console.log(b);
            c++;
        }

        fun(); // b 5
        
        console.log(b); //2
        // 在函数的外部可以访问变量c
        console.log(c); //4 
    ```

    ```JavaScript
        var a = 23;
        function fn(a){
            document.write(a);
            a = 34;
        }
        fn(); // undefined
        document.write(a); //23
    ```

##### 4.2 闭包

```JavaScript
    function fun(){
        var name = "慕课网";
        
        function innerFun(){
            alert(name);
        }

        return innerFun;
    }
    var inn = fun(); //inn = innerfun; 内部函数移动到外部执行
    inn() // innerFun(), 弹出慕课网
```

1. 闭包closure:闭包是函数本身和该函数声明时所处的环境状态
    - 函数能够“记忆”其定义时所处的环境
    - 闭包实用：它允许我们将数据与操作该数据的函数关联起来
    - 记忆性、模拟私有变量
      - 记忆性：闭包产生时，函数所处的环境会始终保存在内存中，不会在外层函数调用后被自动清除
      - 模拟私有变量

    ```JavaScript
        // 闭包记忆性案例
        // 创建体温检测函数checkTemp(n)，可以检查体温n是否正常，函数会返回布尔值；A小区体温合格线为37.1℃，B小区合格线为37.3℃

        function createCheckTemp(standardTemp) {
            return function checkTemp(n) {
                if (n <= standardTemp) {
                    alert('你的体温正常');
                } else {
                    alert('你的体温不正常');
                }
            }
        }

        // 创建一个checkTemp函数，标准线为37.1被记忆
        var checkTemp_A = createCheckTemp(37.1);
        checkTemp_A(37.2);
        checkTemp_A(37.0);

        // 创建一个checkTemp函数，标准线为37.3被记忆
        var checkTemp_B = createCheckTemp(37.3);
        checkTemp_B(37.2);
        checkTemp_B(37.0);
    ```

    ```JavaScript
        // 闭包模拟私有变量案例
        // 定义一个变量a，要求是能保证这个a只能被进行指定操作（如加一、乘二），而不能进行其他操作（让a变得安全）
        // 封装一个函数，这个函数的功能是私有化变量
        function fun() {
            // 定义一个局部变量a
            var a = 0;

            return {
                getA: function () {
                    return a;
                },
                add: function () {
                    a++;
                },
                pow: function () {
                    a *= 2;
                }
            };
        }

        var obj = fun();
        // 如果想在fun函数外使用变量a，唯一的方法就是调用getA()方法
        console.log(obj.getA());
        obj.add();
        console.log(obj.getA());
        obj.pow();
    ```

2. 观察闭包
   1. 每次创建函数都会创建闭包
   2. 闭包往往需要函数“换一个地方”执行

3. 不要滥用闭包，可能会造成内存泄漏

```JavaScript
    function addCount(){
        var count = 0;
        return function (){
            count = count + 1;
            console.log(count);
        }
    }

    var fun1 = addCount();
    var fun2 = addCount();
    fun1();     // 1
    fun2();     // 1
    fun2();     // 2
    fun1();     // 2
    fun1 == fun2; //false
```

#### 5. 立即执行函数

##### 5.1 立即执行函数IIFE

1. IIFE(Immediately Invoked Function Expression): 立即调用函数表达式；一旦被定义，就立即被调用

    ```JavaScript
        function(){
            statements;
        }(); //错误

        (function (){
            statements;
        })();
        // 包裹function的括号将函数变为表达式
        // 最后一对圆括号是调用函数

        +function(){
            statements;
        }();

        - function(){
            statements;
        }();
    ```

2. 作用
   1. 为变量赋值：复杂的变量赋值，使用IIFE使语法更紧凑
   2. 将全局变量变为局部变量

    ```JavaScript
        var age = 12;
        var sex = '男';
        var title = (function (){
            if(age < 18){
                return '小朋友';
            } else {
                if(sex == '男') {
                    return '先生';
                } else {
                    return '女士';
                }
            }
        })();
    ```

    ```JavaScript
        var arr = [];
        for(var i = 0; i < 5; i++){
            arr.push(function () {
                alert(i); // i是全局变量，所有函数共享内存中的同一个i
            });
        }
        arr[2](); // 5

        var arr = [];
        for(var i = 0; i < 5; i++){
            (function(i){   // 这个i是形参
                arr.push(function () {
                    alert(i); // 这是一个闭包，为的是利用闭包的记忆性记住每一次遍历的i的值
                });
            })(i); //立即执行的函数需要一个实参i，这个i是for循环中的i
        }
        arr[2](); // 5
    ```

### 第7章 DOM

#### 1. DOM基本概念

1. DOM是JS操控HTML和CSS的桥梁

#### 2. 节点访问和位置关系

##### 2.1 访问元素节点

- 延迟运行：JS代码要写到HTML节点的后面

    ```JavaScript
        // 给window对象添加onload事件监听，onload表示页面都加载完毕
        window.onload = function(){}
        // 使页面加载完毕后，再执行指定代码
    ```

| 方法 | 功能 | 兼容性 |
| :----: | :----: | :----: |
|document.getElementById()| 通过id得到元素（唯一、第一个）| IE6 |
|document.getElementsByTagName()| 通过标签名得到元素数组 | IE6 |
|document.getElementsByClassName()| 通过类名得到元素数组 | IE9 |
|document.querySelector()| 通过css选择器或标签名得到元素（唯一、第一个）| IE8部分兼容，IE9完全兼容|
|document.querySelectorAll()| 通过css选择器或标签名得到元素数组 | IE8部分兼容，IE9完全兼容|

```HTML
querySelectorAll()获取的元素个数不可以改变，返回结果为NodeList数组
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul id="list">
        <li class="liEle">oldli</li>
        <li class="liEle">oldli</li>
        <li class="liEle">oldli</li>
        <li class="liEle">oldli</li>
        <li class="liEle">oldli</li>
    </ul>
    <script>
        // 获取ul元素
        var listEle = document.getElementById("list")
        // 通过querySelectorAll方法获取元素
        var lis = document.querySelectorAll("li")
        // 没有利用循环生成li之前打印lis，NodeList[5]
        console.log(lis)
        // 通过循环，生成5个li标签，类名为liEle，内容为new li，生成之后，放在ul里面
        for (var i = 0; i < 5; i++) {
            var newli = document.createElement("li");
            newli.className = "liEle"
            newli.innerHTML = "new li"
            listEle.appendChild(newli)
        }
        // 利用循环生成li之后打印lis，NodeList[5]
        console.log(lis)
    </script>
</body>
</html>

getElementByClassName()和getElementByTagName()方法可以动态获取元素，页面中添加删除元素时，获取的元素个数可以改变，返回结果为HTMLCollection数组
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul id="list">
        <li class="liEle">oldli</li>
        <li class="liEle">oldli</li>
        <li class="liEle">oldli</li>
        <li class="liEle">oldli</li>
        <li class="liEle">oldli</li>
    </ul>
    <script>
        // 获取ul元素
        var listEle = document.getElementById("list")
        // 通过getElementsByTagName方法获取元素
        var lis = document.getElementsByTagName("li")
        // 没有利用循环生成li之前打印lis, HTMLCollection[5]
        console.log(lis)
        // 通过循环，生成5个li标签，类名为liEle，内容为new li，生成之后，放在ul里面
        for (var i = 0; i < 5; i++) {
            var newli = document.createElement("li");
            newli.className = "liEle"
            newli.innerHTML = "new li"
            listEle.appendChild(newli)
        }
        // 利用循环生成li之后打印lis, HTMLCollection[10]
        console.log(lis)
    </script>
</body>
</html>
```

##### 2.2 节点的关系

| 关系 | 考虑所有节点 | 只考虑元素节点（IE9开始支持） |
| :----: | :----: | :----: |
| 子节点 | childNodes | children |
| 父节点 | parentNode | 同 |
| 第一个子节点 | firstChild | firstElementChild |
| 最后一个子节点 | lastChild | lastElementChild |
| 前一个兄弟节点 | previousSibling | previousElementSibling |
| 后一个兄弟节点 | nextSibling | nextElementSibling|

- 注意：文本节点也属于节点
  - 空白文本节点，也属于节点；在IE8以前不是
  - 排除文本节点的干扰：只考虑元素节点（IE9开始）

- 常见的节点关系函数

    ```JavaScript
        // 封装一个函数，这个函数可以返回元素的所有子元素节点（兼容到IE6）
        function getChildren(node) {
            // 结果数组
            var children = [];
            // 遍历node这个节点的所有子节点，判断每一个子节点的nodeType属性是不是1
            // 如果是1，就推入结果数组
            for (var i = 0; i < node.childNodes.length; i++) {
                if (node.childNodes[i].nodeType == 1) {
                    children.push(node.childNodes[i]);
                }
            }
            return children;
        }

        // 封装一个函数，这个函数可以返回元素的前一个元素兄弟节点（兼容到IE6）
        function getElementPrevSibling(node) {
            var o = node;
            // 使用while语句
            while (o.previousSibling != null) {
                if (o.previousSibling.nodeType == 1) {
                    // 循环结束，返回元素兄弟节点
                    return o.previousSibling;
                }
                // 让o成为它的前一个节点，再循环
                o = o.previousSibling;
            }
            // 没有节点，返回null
            return null;
        }

        // 封装一个函数，这个函数可以返回元素的所有元素兄弟节点（兼容到IE6）
        function getAllElementSibling(node) {
            // 前面的元素兄弟节点
            var prevs = [];
            // 后面的元素兄弟节点
            var nexts = [];

            // 声明标记o，记录node的位置，遍历node之前的节点，将元素节点逐一插入数组prevs
            var o = node;
            while (o.previousSibling != null) {
                if(o.previousSibling.nodeType == 1){
                    prevs.unshift(o.previousSibling);
                }
                o = o.previousSibling;
            }

            // 声明标记o，记录node的位置，遍历node之后的节点，将元素节点逐一推入数组nexts
            var o = node;
            while (o.nextSibling != null) {
                if(o.nextSibling.nodeType == 1){
                    nexts.push(o.nextSibling);
                }
                o = o.nextSibling;
            }

            return prevs.concat(nexts);
        }
    ```

#### 3. 节点操作

1. 改变元素节点中的内容可以使用两个相关属性：
   1. innerHTML：用来获取元素的开始标签和结束标签之间的所有内容
      - 可以重新设置文本
      - 可以重新设置HTML
   2. innerText：来获取元素的开始标签和结束标签之间的文本，不包括标签
      - 仅能重新设置文本

2. 改变元素CSS样式
   1. 调用style属性，css属性要写成“驼峰”形式
   2. class属性负责书写css，id负责由书写js

    ```JavaScript
        oBox.style.backgroundColor = "red";
        oBox.style.backgroundImage = "url(images/1.jpg)";
        oBox.style.fontSize = "32px";
    ```

3. 改变元素节点的HTML属性
   1. 标准W3C属性，如src、href等等，只需要直接打点进行调用
   2. 不符合W3C标准的属性，要使用setAttribute()和getAttribute()来设置、读取
   3. className属性设置或返回元素的class属性值；追加class的时候需要把原本的类名加上
   4. data-n属性：HTML标签书写；js的dataset方法

    ```JavaScript
        oImg.src = "images/2.jpg";

        <div id="box"></div>
        var oBox = document.getElementById('box');
        oBox.setAttribute('data-n',10);
        var n = oBox.getAttribute('data-n');
        alert(n); // 10

        function addClass(element, value) {
            var newClassName = "";
            if (!element.className) {
                element.className = value;
            } else {
                newClassName = element.className;
                newClassName += " "; //这句代码将追加的类名分开
                newClassName += value;
                element.className = newClassName;
            }      
        }
    ```

#### 4. 节点的创建、移除和克隆

1. 节点创建
   - 创建孤儿节点: document.createElement(标签名)
   - 把孤儿节点连接到DOM树上
     - 追加到父节点的最后一个：(parentNode).appenChild(child/chidren);
     - 追加到标杆节点的前一个：(parentNode).insertBefore(child/children, targetNode)
   - 九九乘法表例子

    ```HTML
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.     0">
            <title>Document</title>
            <style>
                td {
                    width: 120px;
                    height: 30px;
                    border: 1px solid #000;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <table id="table"></table>
            <script>
                // 九九乘法表
                var table = document.getElementById('table');
                for (let i = 1; i <= 9; i++) {
                    // 表格每行
                    var tr = document.createElement('tr');
                    for (let j = 1; j <= i; j++) {
                        // 每列
                        var td = document.createElement('td');
                        // 设置td内部的文字
                        td.innerHTML = i + " * " + j + " = " + i*j;
                        // 追加每列
                        tr.appendChild(td);         
                    }
                    // 追加每行
                    table.appendChild(tr);
                }
            </script>
        </body>
        </html>
    ```

2. 节点移动
   - 移动到新父节点的最后一个: (newParentNode).appendChild(node);
   - 移动到目标节点的前面：(newParentNode).insertBefore(node, targetNode)
   - 同一个节点只能在DOM的一个位置出现

3. 节点删除
   - (parentNode).removeChild(targetNode);
   - 节点必须由其父节点删除

4. 节点克隆
   - (targetNode).cloneNode(Boolean);
   - true，深度克隆（把目标节点的子节点一并克隆）；空或者false，就只克隆目标节点

#### 5. DOM事件

##### 5.1 事件监听

1. 事件&监听
   - 事件：用户与网页的交互动作
   - 监听：监控事件发生
   - 方法：
     - DOM0：onXXX()
     - DOM2：addEventListener()

2. onXXX()方法

    ```JavaScript
        oBox.onXXX = function(){
            // 事件触发时，将执行的语句
        }
    ```

   1. 鼠标事件监听
        | 事件名 | 事件描述 |
        | :----: | :----: |
        | onclick | 当鼠标单击某个对象 |
        | ondblclick | 当鼠标双击某个对象 |
        | onmousedown | 当某个鼠标按键在某个对象上被按下 |
        | onmouseup | 当某个鼠标按键在某个对象上被松开 |
        | onmousemove | 当某个鼠标按键在某个对象上被移动 |
        | onmouseenter| 当鼠标进入某个对象（相似事件onmouseover） |
        | onmouseleave | 当鼠标离开某个对象（相似时间onmouseout） |
        | onmousewheel | 鼠标滚轮事件 |
   2. 键盘事件监听
      | 事件名 | 事件描述 |
      | :----: | :----: |
      | onkeypress | 当某个键盘的键被按下（系统按钮如箭头键和功能键无法识别得到）|
      | onkeydown | 当某个键盘的键被按下（系统按钮可以识别，并且会先于onkeypress发生）|
      | onkeyup | 当某个键盘的键被松开 |
   3. 表单事件监听
      | 事件名 | 事件描述 |
      | :----: | :----: |
      | oninput | 当用户输入内容 |
      | onchange | 当用户改变域的内容 |
      | onfocus | 当某元素获得焦点（比如tab键或鼠标点击）|
      | onblur | 当某元素失去焦点 |
      | onsubmit | 当表单被提交 |
      | onreset | 当表单被重置 |

        ```HTML
            <body>
                <form id = "myform">
                    <p>
                        姓名：
                        <input type="text" name="nameField">
                    </p>
                    <p>
                        年龄：
                        <input type="text" name="ageField">
                    </p>
                </form>
                <script>
                    var myform = document.getElementById('myform');
                    var nameField = myform.nameField;
                    var ageField = myform.ageField;

                    nameField.oninput = function () {
                        alert('正在修改姓名');
                    }

                    nameField.onchange = function () {
                        alert('已经修改姓名');
                    }

                    nameField.onfocus = function () { 
                        alert('姓名框得到焦点');
                    }

                    nameField.onblur = function () {
                        alert('姓名框失去焦点');
                    }
                </script>
            </body>
        ```

   4. 页面监听

    | 事件名 | 事件描述 |
    |:----:|:----:|
    |onload|页面或图片加载完成|
    |onunload|用户退出页面|

##### 5.2 事件传播

1. 事件的传播是：先从外到内（捕获阶段），再从内到外（冒泡阶段）

2. onxxx和addEventListener
   1. DOM0级事件监听：onxxx只能监听冒泡阶段
   2. DOM2级事件监听：addEventListner('事件',function(){//事件处理函数},true)
      1. 事件名不加on
      2. true监听捕获阶段，false监听冒泡阶段

3. 注意事项
   1. 最内部的元素不再区分捕获和冒泡阶段，会先执行先写的监听，然后执行后写的监听
   2. 如果给元素设置相同的两个或多个同名事件：
      1. DOM0级：后写的会覆盖先写的
      2. DOM2级：顺序执行

##### 5.3 事件对象

1. 事件对象
   1. 事件处理函数提供一个形式参数，它是一个对象，封装了本次事件的细节；
   2. 通常用event或者字母e表示

    ```JavaScript
        oBox.onmousemove = function(e){
            // 对象e就是这次事件的“事件对象”
        }
    ```

2. 鼠标位置

    | 属性 | 属性描述 |
    | :----: | :----: |
    | clientX | 鼠标指针相对于浏览器的水平坐标 |
    | clientY | 鼠标指针相对于浏览器的垂直坐标 |
    | pageX | 鼠标指针相对于整张网页的水平坐标 |
    | pageY | 鼠标指针相对于整张网页的垂直坐标 |
    | offsetX | 鼠标指针相对于事件源最内层元素的水平坐标 |
    | offsetY | 鼠标指针相对于事件源最内层元素的垂直坐标 |

3. e.charCode和e.keyCode属性
   1. e.charCode：用于onkeypress事件中，表示用户输入的字符的“字符码”

        | 字符 | 字符码 |
        | :----: | :----: |
        | 数字0 ~ 数字9 | 48 ~ 57 |
        | 大写字母A ~ Z | 65 ~ 90 |
        | 小写字母a ~ z | 97 ~ 122 |

   2 e.keyCode：用于onkeydown或者onkeyup中，表示用户按下的按键的“键码”

    | 按键 | 键码 |
    | :----: | :----: |
    | 数字0 ~ 数字9 | 48 ~ 57 |
    | 字母不区分大小写a ~ z | 65 ~ 90 |
    | 四个方向键 ← ↑ → ↓ | 37、38、39、40 |
    | 回车 | 13 |
    | 空格 | 32 |

4. e.preventDefault()方法
   1. 阻止事件的默认动作
   2. 一些特殊的业务需求，需要阻止事件的默认动作

    ```JavaScript
    案例一：文本框中只能输入小写字母和数字
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <p>
                <input type="text" id="field">
            </p>
            <script>
                var oField = document.getElementById('field');

                oField.onkeypress = function (e) {
                    // 根据用户输入的字符的字符码 e.charCode
                    // 数字0 ~ 9
                    // 小写字母 65 ~ 90
                    console.log(e.charCode);
                    if(!(e.charCode <= 57 && e.charCode >= 48 || e.charCode <= 122 && e.charCode >= 97)){  
                        // 阻止浏览器的默认行为
                        e.preventDefault();
                    }
                }
            </script>
        </body>
        </html>

    案例二：制作鼠标滚轮事件，当鼠标在盒子中向下滚动时，数字加一；反之，数字减一
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            body{
                height: 2000px;
            }
            #box {
                width: 200px;
                height: 200px;
                background-color: #333;
            }
        </style>
    </head>
    <body>
        <div id="box"></div>
        <h1 id="info">0</h1>
        <script>
            var oBox = document.getElementById('box');
            var oInfo = document.getElementById('info');

            // 全局变量就是info中显示的数字
            var info = 0;

            // 给box添加鼠标滚轮事件监听
            oBox.onmousewheel = function (e) { 
                // 阻止默认事件：在盒子里滚动鼠标，并阻止页面滚动
                e.preventDefault();
                if(e.deltaY > 0){
                    info--;
                } else {
                    info++;
                }
                oInfo.innerText = info;
            }
        </script>
    </body>
    </html>
    ```

5. e.stopPropagation()方法
   1. 阻止事件继续传播
   2. 在一些场合，非常有必要切断事件继续传播

    ```JavaScript
    例子：冒泡阶段阻止事件继续传播，内部元素的事件执行；捕获阶段阻止事件传播，外部元素的事件执行
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>

            </style>
        </head>

        <body>
            <div id="box">
                <button id="btn">按我</button>
            </div>
            <script>
                var oBox = document.getElementById('box');
                var oBtn = document.getElementById('btn');

                // oBox.onclick = function () {
                //     console.log('我是盒子');
                // }

                // oBtn.onclick = function (e) {
                //     e.stopPropagation();
                //     console.log('我是按钮');
                // }

                oBox.addEventListener('click', function (e) {
                    e.stopPropagation();
                    console.log('我是盒子');
                }, true);

                oBtn.addEventListener('click', function () {
                    console.log('我是按钮');
                }, true);
            </script>
        </body>

        </html>

    案例：制作一个弹出层，点击按钮显示弹出层，点击网页任意地方，弹出层关闭
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                }
                .modal {
                    width: 400px;
                    height: 140px;
                    background-color: #333;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: -70px;
                    margin-left: -200px;
                    display: none;
                }
            </style>
        </head>

        <body>
            <button mat-button id="btn">按我弹出弹出层</button>
            <div class="modal" id="modal"></div>

            <script>
                var oBtn = document.getElementById('btn');
                var oModal = document.getElementById('modal');

                // 点击按钮，弹出层显示
                oBtn.onclick = function (e) {
                    e.stopPropagation();
                    oModal.style.display = 'block';
                };

                // 点击弹出层时，为了方式弹出层被关闭，因而需要阻止事件传播
                oModal.onclick = function (e) {
                    e.stopPropagation();
                };

                // 点击页面任何部分（除弹出层），弹出层关闭
                document.onclick = function () {
                    oModal.style.display = 'none';
                };
            </script>
        </body>

        </html>
    ```

##### 5.4 事件委托

1. 两种情况
   1. 批量添加事件监听
      - 监听数量多，内存消耗大
      - 每个事件处理函数都是不同的处理函数，这些函数本身也会占用内存
   2. 动态绑定事件监听
      - 新增元素不能自动获得事件监听
      - 大量内存消耗

    ```JavaScript
    案例：页面上由一个无序列表ul，它内部共有20个li元素，请批量添加点击事件监听，实现效果：点击哪个li元素，哪个li元素就变红
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
            </style>
        </head>

        <body>
            <ul id="list">
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
                <li>列表项</li>
            </ul>

            <script>
                var oList = document.getElementById('list');
                var lis = oList.getElementsByTagName('li');
                for (var i = 0; i < lis.length; i++) {
                    console.log(lis[i]);
                    lis[i].onclick = function () {
                        this.style.color = 'red';
                    }
                }
            </script>
        </body>

        </html>

    案例：新增动态元素绑定事件
    页面上有一个无序列表ul，它内部没有li元素，请制作一个按钮，点击这个按钮就能添加一个li元素，并且要求每个li元素也要有事件监听。
    实现效果：点击哪个li元素，哪个li元素就变红

        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
            </style>
        </head>

        <body>
            <button id="btn">添加一个li元素</button>
            <ul id="list">
                <li>默认项</li>
                <li>默认项</li>
                <li>默认项</li>
            </ul>

            <script>
                var oList = document.getElementById('list');
                var oBtn = document.getElementById('btn');

                oBtn.onclick = function () {
                    var newLi = document.createElement('li');
                    newLi.innerText = "我是新来的";
                    oList.appendChild(newLi);

                    // 给新创建的节点添加事件监听
                    newLi.onclick = function () {
                        this.style.color = 'red';
                    }
                }
            </script>
        </body>

        </html>
    ```

2. 事件委托：利用事件冒泡的机制，将后代元素的事件，委托给祖先元素
   - e.target属性：触发此事件最早的元素，“事件源元素”
   - e.currentTarget属性：事件处理程序附加到的元素
   - 注意：
     - 不能委托不冒泡的事件给祖先元素
     - 最内层元素不能再有额外的内层元素

    ```JavaScript
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
            </style>
        </head>

        <body>
            <button id="btn">添加一个li元素</button>
            <ul id="list">
                <li>默认项</li>
                <li>默认项</li>
                <li>默认项</li>
            </ul>

            <script>
                var oList = document.getElementById('list'),
                    oBtn = document.getElementById('btn');

                oBtn.onclick = function () {
                    var oLi = document.createElement('li');
                    oLi.innerText = '我是新来的';
                    oList.appendChild(oLi);
                }
                oList.onclick = function (e) {
                    // e.target表示用户真正点击的那个元素
                    e.target.style.color = 'red';
                }
            </script>
        </body>
        </html>
    ```

3. 注意事项
   - onmouseenter和onmouseover都表示“鼠标进入”，它们有什么区别？
     - onmouseenter不冒泡;onmouseover冒泡

#### 6.实现动画

##### 6.1 定时器和延时器

1. 定时器
   1. setInterval
      1. setInterval()函数可以重复调用一个函数，在每次调用之间具有固定的时间间隔(单位为毫秒)
      2. setInterval()函数可以接收第3、4……个参数，它们将按顺序传入函数
      3. 具名函数也可以传入setInterval
   2. 清除定时器
      1. clearInterval()函数可以清除一个定时器

    ```JavaScript

        setInterval(function(){
            // 这个函数将被自动以固定时间间隔调用
        },2000);

        // 66,88将被分别赋值给a,b
        setInterval(function(a,b){
            // 这个函数将被自动以固定时间间隔调用
        },2000，66，88);

        // 具名函数也可以传入setInterval，但不能书写圆括号，表示传入了一个函数；书写圆括号表示传入一个函数的执行，变成了语句
        var a = 0;
        function fun(){
            console.log(++a);
        }
        setInterval(fun,1000);

        // 清除定时器
        // 1. 设置变量timer接收定时器
        var timer = setInterval(function(){
        },1000);
        // 2. 清除定时器
        clearInterval(timer);

        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
            </style>
        </head>

        <body>
            <h1 id="info">0</h1>
            <button mat-button id="btn1">开始</button>
            <button mat-button id="btn2">暂停</button>
            <script>
                var oInfo = document.getElementById('info');
                var oBtn1 = document.getElementById('btn1');
                var oBtn2 = document.getElementById('btn2');

                var a = 0;

                // 设置一个全局变量
                var timer;

                oBtn1.onclick = function () {
                    // 为了防止定时器叠加，我们应该在设置定时器之前先清除定时器
                    clearInterval(timer);
                    // 更改全局变量timer为一个定时器实体
                    timer = setInterval(() => {
                        oInfo.innerText = ++a;
                    }, 1000);
                }

                oBtn2.onclick = function () {
                    clearInterval(timer);
                };
            </script>
        </body>

        </html>
    ```

2. 延时器
   1. setTimeout()
      1. 设置一个延时器，当指定时间到了之后，会执行函数一次，不再重复执行
   2. clearTimeout()

    ```JavaScript

        setTimeout(function(){
            // 延时执行语句
        },2000)

        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.     0">
            <title>Document</title>
            <style>
            </style>
        </head>

        <body>
            <button mat-button id="btn1">2秒后弹出你好</button>
            <button mat-button id="btn2">取消弹出</button>
            <script>
                var oBtn1 = document.getElementById('btn1');
                var oBtn2 = document.getElementById('btn2');

                // 设置一个全局变量
                var timer;

                oBtn1.onclick = function () {
                    // 为了防止定时器叠加，我们应该在设置定时器之前先清除定时器
                    clearTimeout(timer);
                    // 更改全局变量timer为一个定时器实体
                    timer = setTimeout(() => {
                        alert('你好');
                    }, 2000);
                }

                oBtn2.onclick = function () {
                    clearTimeout(timer);
                };
            </script>
        </body>

        </html>
    
    ```

3. 异步语句
   1. setInterval()和setTimeout()是两个异步语句
   2. 异步(asynchronous)：不会阻塞cpu继续执行其他语句，当异步完成时，会执行“回调函数”（callback）

    ```JavaScript
        setTimeout(function(){
            console.log('A');
        },2000);

        console.log('B');
        // B , A
    ```

##### 6.2 使用定时器实现动画

1. 原理：视觉暂留

2. 问题：
   1. 不方便根据动画总时间计算步长
   2. 运动方向要设置正负
   3. 多种运动进行叠加较为困难（比如一个方形一边移动一边变为原型）

```JavaScript
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.    0">
        <title>Document</title>
        <style>
            .box {
                position: absolute;
                top: 100px;
                left: 100px;
                width: 100px;
                height: 100px;
                background-color: pink;
            }
        </style>
    </head>
    
    <body>
        <button id="btn">方块移动</button>
        <div id="box" class="box"></div>
        <script>
            var oBox = document.getElementById('box'),
                oBtn = document.getElementById('btn');
    
            // 全局变量left
            var left = 100;
    
            // 按钮添加监听
            oBtn.onclick = function () {
                var timer = setInterval(() => {
                    if(left >= 1100){
                        clearInterval(timer);
                    }
                    left += 10;
                    // 更新oBox的left
                    oBox.style.left = left + 'px';
                }, 20);
            }
        </script>
    </body>
    
    </html>
```

##### 6.3 JS和CSS3结合实现动画

```JavaScript
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1. 0">
        <title>Document</title>
        <style>
            .box {
                width: 100px;
                height: 100px;

                position: absolute;
                top: 100px;
                left: 100px;
                background-color: pink;
            }
        </style>
    </head>

    <body>
        <button id="btn">方块移动</button>
        <div id="box" class="box"></div>
        <script>
            var oBox = document.getElementById('box'),
                oBtn = document.getElementById('btn');

            // 标识量，指示当前盒子在左边还是右边
            // 1为左边，2为右边
            var pos = 1;
            // 函数节流锁
            var lock = true;

            oBtn.onclick = function () {
                // 判断节流
                if(!lock) return;

                // 过渡
                box.style.transition = 'all 2s linear 0s';
                if(pos == 1){
                    // 瞬间移动，但是由于有过渡，所以是动画
                    box.style.left = '1100px';
                    pos = 2;
                } else if(pos == 2) {
                    box.style.left = '100px';
                    pos = 1;
                }

                // 关锁
                lock = false;

                // 过一段时间开锁
                setTimeout(() => {
                    lock = true;
                }, 2000);
            }
        </script>
    </body>

    </html>
```

1. css3的transition属性结合JavaScript规避定时器实现动画的缺点

2. 函数节流：一个函数执行一次后，只有大于设定的执行周期后才允许执行第二次

    ```JavaScript
        var lock = true;

        function 需要节流的函数(){
            // 如果锁是关的，则不执行
            if(!lock) return;

            // 函数核心语句

            // 关锁
            lock = false;

            // 制定毫秒数后将锁打开
            setTimeout(function(){
                lock = true;
            }, 2000);
        }
    ```

#### 7. 动画效果开发

1. 无缝连续滚动特效

2. 跑马灯轮播图特效

3. 呼吸灯轮播特效

### 第8章 BOM

#### 1. BOM常用对象

- BOM（Browser Object Model, 浏览器对象模型）：JS与浏览器窗口交互的接口0

##### 1.1 Window对象

1. window对象：当前JS脚本运行所处的窗口，而这个窗口中包含DOM结构，window.document属性就是document对象

2. 在有标签页功能的浏览器中，每个标签都拥有自己的window对象；也就是说，同一个窗口的标签页之间不会共享一个window对象

3. 全局变量是window的属性
   - 多个js文件之间是共享全局作用域的

    ```JavaScript
        var a = 10;
        console.log(window.a == a); //true
    ```

4. 内置函数普遍是window的方法

    ```JavaScript
        console.log(window.hasOwnProperty('setInterval')); // true
    ```

5. 窗口尺寸相关属性

    | 属性 | 意义 |
    | :----: | :----: |
    | innerHeight | 浏览器窗口的内容区域的高度，包含水平滚动条（如果有）|
    | innderWidth | 浏览器窗口的内容区域的宽度，包含垂直滚动条（如果有）|
    | outerHeight | 浏览器窗口的外部高度 |
    | outerWidth | 浏览器窗口的外部宽度 |

    - 获得不包含滚动条的窗口宽度，要用document.documentElement.clientWidth

6. resize事件
   - 在窗口大小改变之后，就会触发resize事件，可以使用window.onresize或者window.addEventListener('resize')来绑定事件处理函数

7. 已卷动高度
   1. window.scrollY表示窗口的卷动高度
   2. document.documentElement.scrollTop属性也表示窗口卷动高度
   3. window.scrollY是只读的；document.documentElement.scrollTop不是只读的，可以被改变，例如可以实现返回顶部的效果

    ```JavaScript
        // 保证兼容性
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
    ```

8. scroll事件
   - 在窗口被卷动后，就会触发scroll事件，可以使用window.onscroll或者window.addEventListener('scroll')来帮顶事件处理函数

##### 1.2 Navigator对象

1. window.navigator属性可以检索navigator对象，它内部含有用户此次活动的浏览器的相关属性和标识

    | 属性 | 意义 |
    | :----: | :----: |
    | appName | 浏览器官方名称 |
    | appVersion | 浏览器版本 |
    | userAgent | 浏览器的用户代理（含有内核信息和封装壳信息）|
    | platform | 用户操作系|

2. 判断用户是什么浏览器

    ```HTML
    <html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>userAgent</title>
    </head>
    <body>
       <input type="button" value="点击获取浏览器信息" id="browser">
       <script type="text/javascript">
           //补充代码
           function getBroswerInfomation(){
               var userAgent = navigator.userAgent;
               if(userAgent.includes("MSIE")){
                   alert("IE浏览器");
               }else if(userAgent.includes("FireFox")){
                   alert("火狐浏览器");
               }else if(userAgent.includes("Chrome")){
                   alert("谷歌浏览器");
               }
           }
           
           var btn = document.getElementById('browser');
           btn.onclick = getBroswerInfomation;
       </script>
    </body>
    </html>
    ```

##### 1.3 History对象

1. window.history对象提供了“操作浏览器会话历史”的接口

2. 常用操作

    ```JavaScript
        history.back();  // 等同于点击浏览器的回退按钮
        history.go(-1); // 等同于history.back();
        
        <a href="javascript:history.back();">回退</a>
    ```

##### 1.4 Location对象

1. window.location标识当前所在网址，可以通过给这个属性赋值命令浏览器进行页面跳转

    ```JavaScript
        window.location = 'http://www.imooc.com';    
    ```

2. 重新加载当前页面

    ```JavaScript
        window.location.reload(true);
    ```

3. get请求查询参数

    ```JavaScript
        console.log(window.location.search);
    ```

#### 2. BOM特效开发

##### 2.1 返回顶部

- 原理：改变document.documentElement.scrollTop属性，通过定时器逐步改变此值，则将用动画的形式返回顶部

- 兼容问题vv  - document.body：返回html dom中的body节点 即<body>
  - document.documentElement：返回html dom中的root 节点 即<html>
  - 涉及到浏览器机制，chrome、firefox和ie之前有区别；
    - 如果页面中存在DTD，那么就可以使用document.documentElement来获取某些值；
    - 如果不存在DTD，就不能通过document.documentElement来获取了，就通过document.body来获取某些值了

    ```HTML
        <html>

        <head lang="en">
            <meta charset="UTF-8">
            <title>BOM特效-返回顶部</title>
            <style>
                body {
                    height: 5000px;
                    background-image: linear-gradient(to bottom, red, yellow, green);
                }

                .backtotop {
                    width: 60px;
                    height: 60px;
                    background-color: rgba(255, 255, 255, .6);
                    position: fixed;
                    bottom: 100px;
                    right: 80;
                    cursor: pointer;
                }
            </style>
        </head>

        <body>
            <div class="backtotop" id="backtotopBtn">返回顶部</div>
            <script type="text/javascript">
                var backtotopBtn = document.getElementById('backtotopBtn');
                var timer;
                backtotopBtn.onclick = function () {
                    // 设表先关
                    clearInterval(timer);
                    // 设置定时器
                    timer = setInterval(function () {
                        document.body.scrollTop -= 200;
                        if (document.body.scrollTop <= 0) {
                            clearInterval(timer);
                        }
                    }, 20);
                };
            </script>
        </body>

        </html>
    ```

##### 2.2 楼层导航

- offsetTop属性，表示此元素到定位祖先元素的垂直距离
  - 定位祖先：在祖先中，离自己最近的且拥有定位属性的元素

- 函数节流

### 第9章 面向对象

#### 1. 认识对象

##### 1.1 认识对象

- 1. 对象是键值对（k:v对）的集合，表示属性和值的映射关系
- 2. 对象的语法
  - k和v之间用冒号分割，每组k:v之间用逗号分隔，最后一个k:v对后可以不书写逗号
  - 属性键名不符合JS标识符的命名规范，则这个键名必须用引号包裹
- 3. 属性的访问
  - 点语法
  - 方括号语法
    - 属性名不符合JS标识符命名规范的情况
    - 属性名是变量
- 4. 属性的更改
  - 直接使用赋值运算符重新对某属性赋值
- 5. 属性的创建
  - 用点语法直接赋值
- 6. 属性的删除
  - delete操作符

```JavaScript
    var xiaoming = {
        name: '小明',
        age: 12,
        sex: '男',
        hobbies: ['足球', '编程'],
        'favorite-book': '舒克和贝塔'
    }

    var name = xiaoming.name; //'小明'
    var fBook = xiaoming['favorite-book']; //'舒克和贝塔'

    var obj = {
        a:1,
        b:2,
        c:3
    };

    var key = 'b';
    console.log(obj.key); //undefined
    console.log(obj[key]); //2

    // 属性的更改
    obj.a = 'a';

    // 属性的创建
    obj.d = 4;

    // 属性的删除
    delete obj.d;
```

##### 1.2 对象的方法

- 1. 对象的某个属性值为函数，则它被称为对象的“方法”

- 2. 方法的调用
  - 点语法调用
  - 方法也是函数，但方法是对象的属性，需要对象打点调用

```JavaScript
    var xiaoming = {
        name: '小明',
        age: 12,
        sex: '男',
        hobbies: ['足球', '编程'],
        'favorite-book': '舒克和贝塔',
        sayHello: function(){
            console.log('你好，我是小明，今年12岁，我是个男生');
        }
    }
```

##### 1.3 对象的遍历

- for…in…循环，遍历对象的每个键

```JavaScript
    for(var k in obj){
        console.log('属性' + k + '的值是' + obj[k]);
    }
```

##### 1.4 对象的深浅克隆



- 1. 对象的浅克隆

    ```JavaScript
        // 浅克隆，只克隆对象的表层
        // obj和objClone藕断丝连，如果属性是对象，无法完全分开
        var obj = {
            a: 1,
            b: 2,
            c: [44, 55, 66]
        }

        var objClone = {};

        for (var k in obj) {
            // 每遍历一个k属性，就给objClone添加一个同名的k属性
            // 值和obj的k属性相同
            objClone[k] = obj[k];
        }

        obj.a++; // obj.a = 2
        console.log(objClone); // objClone.a = 1

        obj.c.push(77); // [44,55,66,77]
        console.log(objClone.c); //[44,55,66,77]
        console.log(obj.c == objClone.c); // true
    ```

- 2. 对象的深克隆

    ```JavaScript
        // 深克隆：克隆对象的全貌
        // 使用递归
        var object = {
            a: 1,
            b: 2,
            c: [44, 55, {
                m: 55,
                n: 66,
                p: [77,88]
            }]
        }

        function deepClone(o) {
            // 判断o是对象还是数组
            if(Array.isArray(o)){
                // 数组
                var res = [];
                for(var i = 0; i < o.length; i++){
                    res.push(deepClone(o[i]));
                }
            } else if (typeof o == 'object'){
                // 对象
                var res = {};
                for(var k in o){
                    res[k] = deepClone(o[k]);
                }
            } else {
                // 基本类型
                var res = o;    
            }
            return res;
        }

        var objDeepClone = deepClone(object);
        console.log(objDeepClone);
        console.log(objDeepClone.c == object.c);  // false
        
        object.c.push(99); // object的c属性改变
        console.log(objDeepClone.c); // objDeepClone的c属性不变
    ```

#### 2. 认识函数的上下文

##### 2.1 上下文规则（6种）

- 函数中使用this关键字，表示函数的上下文
- 函数中的this具体指代什么必须通过调用函数的“前言后语”来判断
- **函数的上下文由“调用”决定**
  - **函数没有被调用的时候，输出是不知道的**

```JavaScript
    var xiaoming = {
        nickname: '小明',
        age: 12,
        sayHello: function(){
            console.log('我是' + this.nickname + ',我' + this.age + '岁了');
        }
    };

    // 把函数提出来，单独存为变量
    var sayHello = xiaoming.sayHello;
    // 直接圆括号调用这个函数，而不是对象打点调用了
    sayHello(); //我是undefined，我undefined岁了

    var obj = {
        a:1,
        b:2,
        fn:function(){
            console.log(this.a + this.b);     // 上下文不知道，输出也不知道
        }
    }

    obj.fn(); // 3
    var fn = obj.fn;
    fn(); //undefined + undefined = NaN
```

| 规则 | 上下文 |
| :----: | :----: |
| 对象.函数() | 对象|
| 函数() | window |
| 数组[下标]() | 数组 |
| IIFE | window |
| 定时器、延时器 | window |
| DOM事件处理函数 | 绑定的DOM元素 |
| call和apply | 任意指定 |
| 用new调用函数 | 秘密创建出的对象 |

###### 函数的上下文规则1

- 对象.方法():则函数的上下文是这个打点的对象

```JavaScript
// 第1题
    function fn(){
        console.log(this.a + this.b);    // 函数没有被调用，不知道this是谁
    }

    var obj = {
        a: 66,
        b: 33,
        fn: fn
    }

    obj.fn(); // this指向obj，输出99

// 第2题
    var obj1 = {
        a: 1,
        b: 2,
        fn: function(){
            console.log(this.a + this.b);
        }
    }

    var obj2 = {
        a: 3,
        b: 4,
        fn: obj1.fn
    };

    obj2.fn(); // this指向obj2, 输出7

// 第3题
    function outer(){
        var a = 11;
        var b = 22;
        return {
            a: 33,
            b: 44,
            fn:function() {
                console.log(this.a + this.b);
            }
        }
    }

    outer().fn(); // outer()返回一个对象，对象打点调用fn()，输出77

// 第4题
    function fun(){
        console.log(this.a + this.b);
    }

    var obj = {
        a: 1,
        b: 2,
        c: [{
            a: 3,
            b: 4,
            c: fun
        }]
    };
    var a = 5;
    obj.c[0].c();  // 7
```

###### 函数的上下文规则2

- 函数():函数上下文是window对象，全局变量都是window对象的属性

```JavaScript
// 第1题
    var obj1 = {
        a: 1,
        b: 2,
        fn: function(){
            console.log(this.a + this.b);
        }
    }

    var a = 3;
    var b = 4;

    var fn = obj.fn;
    fn(); // this指向window对象，输出7


// 第2题
    function fun(){
        return this.a + this.b;
    }

    var a = 1;
    var b = 2;
    var obj = {
        a:3,
        b:fun(),  // 直接调用fun，函数直接运行，this指向window对象，b：3
        fun:fun
    }

    var result = obj.fun(); // obj调用fun，this指向obj
    console.log(result);
```

###### 函数的上下文规则3

- 数组[下标](): 数组或类数组对象枚举出函数进行调用，上下文是这个数组

- 类数组对象：所有键名为自然数序列（从0开始），且由length属性的对象
  - 如arguments：函数的实参列表

```JavaScript
// 第1题
    var arr = ['A','B','C',function(){
        console.log(this[0]);
    }];
    arr[3](); // this指向这个数组，输出"A"

// 第2题
    function fun(){
        arguments[3]();   // this指向arguments
    }
    
    fun('A', 'B', 'C', function(){
        console.log(this[1]); // "B"
    });

// 第3题
    var a = 6;
    var obj = {
        a: 5,
        b: 2,
        c: [
            1,
            a,
            function(){
                document.write(this[1])
            }
        ]
    }

    obj.c[2](); // this指向c，obj.c[2]()就是取到数组下标为2的元素并调用，这个函数的this指向的就是数组c。this[1]拿到的就是数组c下标为1的元素a，a没有加引号，是一个变量，变量a的值为6，所以结果输出6
```

###### 函数的上下文规则4

- (function(){})():IIFE中的函数，上下文是window对象

```JavaScript

// 第1题
    var a = 1;
    var obj = {
        a:2,
        fun: (function({
            var a = this.a;
            return function(){
                console.log(a + this.a);
            }
        })()
    };
    obj.fun(); // 第一个this指向window对象，第二个this指向obj对象，输出3
```

###### 函数的上下文规则5

- setInterval(函数，时间)、setTimeout(函数，时间)：定时器、延时器调用函数，上下文是window对象

```JavaScript
// 第1题
    var obj = {
        a: 1,
        b: 2,
        fun: function(){
            console.log(this.a + this.b);
        }
    }

    var a = 3;
    var b = 4;
    setTimeout(obj.fun,2000); // 由setTimeout调用obj.fun，this指向window，输出7

// 第2题
    var obj = {
        a: 1,
        b: 2,
        fun: function(){
            console.log(this.a + this.b);
        }
    }

    var a = 3;
    var b = 4;
    setTimeout(function(){
        obj.fun();
    },2000); // 由obj调用fun函数，this指向obj，输出3
```

###### 函数的上下文规则6

- DOM元素.onxxxx = function(){}:事件处理函数的上下文是绑定事件的DOM元素
  - e.target在事件委托的情况下不等于this
  - 备份上下文：防止函数嵌套导致this指向改变

```JavaScript
// 效果1： 点击哪个盒子，哪个盒子就变红
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>函数的上下文规则</title>
        <style>
            div {
                width: 200px;
                height: 200px;
                float: left;
                border: 1px solid #000;
                margin-right: 10px;
            }
        </style>
    </head>
    <body>
        <div id="box1"></div>
        <div id="box2"></div>
        <div id="box3"></div>
        <script>
            function setColorToRed(){
                this.style.backgroundColor = 'red';
            }

            var box1 = document.getElementById('box1');
            var box2 = document.getElementById('box2');
            var box3 = document.getElementById('box3');

            box1.onclick = setColorToRed;
            box2.onclick = setColorToRed;
            box3.onclick = setColorToRed;
        </script>
    </body>
    </html>
```

```JavaScript
// 效果2：点击哪个盒子，哪个盒子就隔两秒再变红
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>函数的上下文规则</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            float: left;
            border: 1px solid #000;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div id="box1"></div>
    <div id="box2"></div>
    <div id="box3"></div>
    <script>
        function setColorToRed(){
            // 备份上下文
            var self = this
            setTimeout(function(){
                self.style.backgroundColor = 'red';                
            }, 2000);
        }

        var box1 = document.getElementById('box1');
        var box2 = document.getElementById('box2');
        var box3 = document.getElementById('box3');

        box1.onclick = setColorToRed;
        box2.onclick = setColorToRed;
        box3.onclick = setColorToRed;
    </script>
</body>
</html>
```

##### 2.2 call和apply

- call和apply能指定函数的上下文
  - 函数.call(上下文)
  - 函数.apply(上下文)

- call和apply的区别
  - call用逗号罗列参数
  - apply把参数写到数组中

- call和apply的使用

```JavaScript
    function sum(){
        alert(this.chinese + this.math + this.english);
    }

    var xiaoming = {
        chinese: 80,
        math: 95,m
        english: 93
    };

    sum.call(xiaoming);
    sum.apply(xiaoming);

    function sum(b1,b2){
        alert(this.c + this.m + this.e + b1 + b2);
    }

    sum.call(xiaoming, 5, 3);
    sum.call(xiaoming, [5, 3]);

    // call和apply的使用
    function fun1(){
        fun2.apply(this, arguments);
    }

    function fun2(){
        alert(a+b);
    }

    fun1(33,44); // 77
```

#### 3. 构造函数

##### 3.1 用new调用函数的四步走

- 1. 函数体内会自动创建出一个空白对象
- 2. 函数的上下文(this)会指向这个对象
- 3. 函数体内的语句会执行
- 4. 函数会自动返回上下文对象,即使函数没有return语句

```JavaScript
    function fun(){
        // 第一步:创建一个空白对象{}
        // 第二步:this指向这个空白对象
        // 第三步:执行函数体内语句 {a:3,b:5}
        this.a = 3;
        this.b = 5;
        // 第四步:return this
    }

    // obj变量,接收new fun()返回的上下文对象
    var obj = new fun();
    
    // undefined
    var obj2 = fun();
    console.log(obj);
```

##### 3.2 构造函数

- 用new调用一个函数,这个函数就被称为**构造函数**,任何函数都可以是构造函数,只需要用new调用它
- 构造函数用于构造新对象,它内部的语句将为新对象添加若干属性和方法,完成**对象的初始化**
- 构造函数必须用new关键字调用,开发者约定**构造函数命名时首字母要大写**

- 注意:构造函数中的this不是函数本身

```JavaScript
    function People(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    var xiaoming = new People('小明', 12, '男');
    var xiaohong = new People('小红', 10, '女');
    var xiaogang = new People('小刚', 13, '男');
```

##### 3.3 类和实例

- 类: (一类)只描述对象拥有的哪些属性和方法, 并不具体指明属性的值
- 实例: (一只)具体的对象

```JavaScript
```

#### 4. 原型和原型链

##### 4.1 prototype和原型链查找

##### 4.2 在prototype上添加方法

##### 4.3 原型链的终点

##### 4.4 继承

#### 5. 上升到面向对象

##### 5.1 红绿灯小案例

##### 5.2 炫彩小球小案例

#### 6. JS的内置对象

##### 6.1 包装类

##### 6.2 Math对象

##### 6.3 Date对象

### 第10章 正则表达式

#### 1. 什么是正则表达式

1. 描述字符串的规则
2. 正则表达式“按位”描述规则

#### 2. 正则表达式的基本使用

##### 2.1 正则表达式的创建

1. 正则表达式的创建

    ```JavaScript
       // 创建正则表达式方法1
        var regexp1 = /^\d{6}$/;
        var regexp2 = new RegExp('^\\d{6}$');

        var str = '555666';
        
        console.log(regexp1.test(str));  // true
        console.log(regexp2.test(str));  // true

        console.log(typeof regexp1); // object
        // 正则表达式无法相等，在内存中对比的地址不同 
    ```

##### 2.2 元字符

| 元字符 | 功能 |
| :----: | :----: |
| \d | 匹配一个数字 |
| \D | 匹配一个非数字字符 |
| \w | 匹配一个单字字符（字母、数字或者下划线）|
| \W | 匹配一个非单字字符 |
| \s | 匹配一个空白字符，包括空格、制表符和换行符 |
| .  | 任意字符 |
| ^  | 匹配开头 |
| $  | 匹配结尾 |

- 注意事项
  - 使用new RegExp()方法，注意元字符要写两个反斜线

- 字符的转义
  - 在特殊字符之前的反斜杠\表示下一个字符不是特殊字符,应该按照字面理解

    ```JavaScript
        /^.$/   // 检查字符串是不是任意字符
        /^\.$/  // 检查字符串是不是一个点
        /^\\$/  // 检查字符串是不是一个反斜杠
    ```
  
  - 不管一个符号有没有特殊意义,都可以在其之前加上一个\以确保它表达的是这个符号本身

    ```JavaScript
        // 某产品批号形式为: 123.45^67#89,请使用正则表达式检查某字符串是否符合此格式

        var regexp = /^\d\d\d\.\d\d\^\d\d\#\d\d$/;
    ```

##### 2.3 方括号表示法

- 1. 使用方括号,可以创建一个字符集合,表示匹配方括号中的任意字符
  
  ```JavaScript
    // 比如某学校的学号规定: 第1位是一个字母,b表示本科生,y表示研究生,后面是7位数字,用正则表示为:
    var regexp = /^[by]\d{7}$/;
  ```

- 2. 短横-来指定一个字符范围,^表示否定

    | 元字符 | 等价的方括号表示法 |
    | :----: | :----: |
    | \d | [0-9] |
    | \D | [^0-9] |
    | \w | [A-Za-z0-9_] |
    | \W | [^A-Za-z0-9_] |

    ```JavaScript
        // 请验证某字符串是否是5位字母,大小写均可
        var regexp7 = /^[A-Za-z]{5}$/;
        console.log(regexp7.test('ABxdw'));
        
        // 请验证某字符串是否为5位,且仅有小写字母,点构成
        var regexp8 = /^[a-z\.]{5}$/;
        console.log(regexp8.test('456ab'));

        // 请验证某i字符串是否是4位小写字母,且最后一位不能是m字母
        var regexp9 = /^[a-z]{3}[a-ln-z]$/
        console.log(regexp9.test('abcm'));
        console.log(regexp9.test('a7cm'));
        console.log(regexp9.test('A7cm'));
    ```

##### 2.4 量词

| 量词 | 意义 |
| :----: | :----: |
| * | 匹配前面一个表达式0次或者多次,等价于{0,} |
| + | 匹配前面一个表达式1次或者多次,等价于{1,} |
| ? | 匹配前面一个表达式0次或者1次,等价于{0,1} |
| {n} | n是一个正整数，匹配了前面一个字符刚好出现了n次 |
| {n,} | n是一个正整数，匹配前一个字符至少出现了n次 |
| {n,m} | n和m都是正整数，匹配前面的字符至少n次，至多m次 |、

```JavaScript
    // 请验证字符串是否符合手机号码的规则：11位数字，并且肯定以1开头
    var pattern1 = /^1\d{10}$/;

    // 请验证某字符串是否是这样的：以字母开头，中间是任意位数字（最少1位）构成，并以字母结尾
    var pattern2 = /^[A-Za-z]\d+[A-Za-z]$/;

    // 请验证某字符串是否符合网址规则：以www.开头，中间是至少一位的字符（字母数字下划线），最后以.com结尾，也可以以.com.cn结尾
    var pattern3 = /^www\.\w+\.com(\.cn)?$/
```

##### 2.5 修饰符

- 标志，flags，用于使用正则表达式实现高级搜索

| 修饰符 | 意义 |
| :----: | :----: |
| i | 不区分大小写搜索 |
| g | 全局搜索 |

```JavaScript
    var re = /m/gi;
    var re = new RegExp('m','gi');
```

#### 3. 正则表达式和字符串

##### 3.1 正则表达式的相关方法

| 方法 | 简介 |
| :----: | :----: |
| test() | 测试某字符串是否匹配正则表达式，返回布尔值 |
| exec() | 根据正则表达式，在字符串中查找，返回结果数组或者null |

```JavaScript
    var str = "abc123def456ghi789";
    var regexp = /\d+/g;
    var result1 = regexp.exec(str);
    // 返回一个结果数组
```

- exec()方法的逐条遍历，g让exec()方法自动变成“有状态的”，记录到每一次exec()寻找到的位置

```JavaScript
    var str = "abc123def456ghi789";
    var regexp = /\d+/g; //+表示贪婪的，尽可能多的
    //var result1 = regexp.exec(str);     // ["123", index: 3, input: "abc123def456ghi789", groups: undefined]
    //var result2 = regexp.exec(str);     // ["456", index: 9, input: "abc123def456ghi789", groups: undefined]
    //var result3 = regexp.exec(str);     // ["789", index: 15, input: "abc123def456ghi789", groups: undefined]
    //var result4 = regexp.exec(str);     // null

    while(result = regexp.exec(str)){
        console.log(result[0]);     //123,456,789
    }

    // regexp.exec(str)存在的时候，while执行; 赋值语句检测等号右边是否存在; 检测为null，结束循环
```

##### 3.2 字符串的相关正则方法

| 方法 | 简介 |
| :----: | :----: |
| search() | 在字符串中根据正则表达式进行查找匹配，返回首次匹配到的位置索引，测试不到则返回-1 |
| match() | 在字符串中根据正则表达式进行查找匹配，返回一个数组，找不到则返回null |
| replace() | 使用替换字符串替换掉匹配到的子字符串，可以使用正则表达式 |
| split() | 分隔字符串为数组，可以使用正则表达式 |

```JavaScript
    var str = "abc123def456ghi789";
    var regexp = /\d+/g;

    // search()
    var res1 = str.search(regexp);  //res1 = 3
    var res2 = str.search(/m/g); // res2 = -1
    
    // match()
    var res3 = str.match(/\d+/g); // res3 = [123,456,789]

    // replace()
    var res4 = str.replace(/[a-z]+/g, "*"); // + 表示贪婪的，尽可能多的连续匹配小写字母; res4 = *123*456*789

    // split()
    var res5 = str.split(/\d+/g); // ["abc","def","ghi",""]

```

##### 3.3 正则表达式的应用

### 第11章 ES6基础入门

#### 11.1 ES6简介

- ES6：ECMAScript的第六代标准
- ECMA：由名为欧洲计算机制造商协会的标准化制定了**语法**和**API**
- 命名方式：
  - ES6+
  - ES2015（年份）

- JavaScript（浏览器端） = ECMAScript（语法 & API）+ DOM + BOM

- ES6的兼容性
  - 主流浏览器的最新版本几乎全部支持ES6
  - IE老版本等不支持的浏览器，可以用**Babel**转码

#### 11.2 let和const

##### 1. let和const是什么

- let：代替var声明变量
- const：声明常量

##### 2. let和const的基本用法

```JavaScript
    var username = 'Alex';
    let age = 18;
    const sex = 'male';
    console.log(username, age, sex);
    username = "ZhangSan";
    age = 28;
    console.log(username,age);
    sex = 'female';   // 报错
```

##### 3. 变量和常量

- var和let声明的是变量，变量一旦初始化，还可以重新赋值
- const声明的是常量，常量一旦初始化，就不能重新赋值，否则会报错
- 4. const
- 为什么需要const
  - 为一旦初始化就不希望重新赋值的变量设计的，防止对不需要修改的变量误修改
- const的注意事项
  - const声明常量初始化时必须赋值
  - const声明的常量，允许在不重新赋值的情况下修改它
- 什么时候用const
  - 不知道用什么的时候，先用const，如果报错再用let

    ```JavaScript
        <!-- 基本数据类型：const声明的常量无法被修改 -->
        const sex = "male";
        
        <!-- 引用数据类型 -->
        const person = {
            username: "Tom"
        }
        person = {
            username: "张三" // 报错
        }
        person.username = "张三"; //不会报错
    ```

##### 5. let、const和var的区别

- 重复声明：已存在的变量或常量，又声明了一遍
  - var允许重复声明
  - let和const不允许重复声明
- 变量提升
  - var会提升变量的声明（但不提升初始化）提升到当前作用域的顶部
  - let和const不存在变量提升
- 暂时性死区
  - 只要作用域内存在let、const，它们所声明的变量或常量就自动“绑定”这个区域，不再受到外部作用域的影响
  - var没有绑定，因此不存在暂时性死区
- window对象的属性和方法（全局作用域中）
  - 全局作用域中，var声明的变量，通过function声明的函数，会自动变成window对象的属性或方法
- **块级作用域**
  - var没有块级作用域
  - let和const有块级作用域
  - 块级作用域
    - 一般有{}就有块级作用域，{}里的内容执行完之后就会被销毁
    - 循环：for(){},while(){},do{}while()
    - 条件：if(){},switch(){}
  - 函数作用域（不属于块级作用域）:只有在函数被调用的时候，才存在函数作用域
  - 对象没有块级作用域

    ```JavaScript
    <!-- 重复声明 -->
        function func(a){
            let a = 1;
            // 报错，重复声明
        }
        func();
    
    <!-- 变量提升 -->
        console.log(a);   // undefined
        var a = 1;
        console.log(a);   // 1
    
    <!-- 暂时性死区 -->
        let a = 2;
        let b = 1;
        function func(){
            console.log(a);
            let a = 1;
            console.log(b);
        }
        func();     // 打印a报错，打印b可以输出2
        // a绑定了当前作用域，和外部作用域没有关系，不会再向外寻找；b没有

    <!-- window对象的属性和方法 -->
        var age = 18;
        function add() {}
        console.log(window.age); // 18
        console.log(window.add === add); // true

        let age = 18;
        const add = function {}
        console.log(window.age); // undefined
        console.log(window.add === add); // false
    
    <!-- 块级作用域 -->

        for(var i = 0; i < 3; i++){
            console.log(i); // 0,1,2
        }
        console.log(i); // 3, var没有块级作用域



        for(let i = 0; i < 3; i++){
            console.log(i);   // 0,1,2
        }
        console.log(i); // 报错，i没有被定义

    ```

###### 6. let和const的应用

#### 11.3 模板字符串与箭头函数

##### 1. 模板字符串

###### 1.1 模板字符串是什么

- 1. 认识模板字符串

    ```JavaScript
        const str1 = 'alex';
        const str2 = "alex";

        const username = `alex`;
    ```

- 2. 模板字符串与一般字符串的区别
  - 与其他类型值混用是，使用模板字符串，方便注入

    ```JavaScript
        const person = {
            username: 'alex',
            age: 18,
            sex: 'male'
        }

        const info = '我的名字是：' + person.username + ', 性别：' + person.sex + ", 今年" + person.age + '岁了';

        const info2 = `我的名字是：${person.username}, 性别:${person.sex},今年${person.age}岁了`;
        console.log(info);
    ```

###### 1.2 模板字符串的注意事项

- 1. 输出多行字符串
  - 模板字符串中，所有的空格、换行或缩进都会被保留在输出中

- 2. 输出`和\等特殊字符
  - 通过\转义，如\`或\\

- 3. 模板字符串的注入
  - 只要最终可以得出一个值的就可以通过${}注入到模板字符串中

```JavaScript
    // 1. 输出多行字符串
    // 一般字符串
    const info = "第1行\n第2行";
    console.log(info);

    const info2 = `第1行
    第2行`;
    console.log(info2);

    // 2. 输出`和\等特殊字符
    const info = `\`\\`;
    console.log(info);

    // 3. 模板字符串的注入
    // ${}
    const username = 'alex';
    const person = {
        age:18,
        sex: "male"
    }
    const getSex = function(sex) {
        return sex === 'male' ? '男':'女';
    }
    const info = `${username}, ${person.age + 2}, ${getSex(person.sex)}`;   
```

###### 1.3 模板字符串的应用

##### 2. 箭头函数

###### 2.1 箭头函数是什么

- 1. 认识箭头函数
- 2. 箭头函数的结构
  - const/let 函数名 = 参数 => 函数体
- 3. 如何将一般函数改写成箭头函数

```JavaScript
    const add =  (x,y) => {
        return x+y;
    };
    console.log(add(1,1));

    // 一般函数：声明的形式
    function add(){}
    // 一般函数：函数表达式的形式
    const add = function(){}

    const add  = () => {}
```

###### 2.2 箭头函数的注意事项

- 1. 单个参数可以省略圆括号
- 2. 单个函数体可以省略大括号和return
- 3. 单个对象
  - 如果箭头函数返回单行对象，可以在{}外边加上()，让浏览器不再认为那是函数体的花括号

```JavaScript
    // 1. 单个参数
    const add = x => {
        return x+1;
    }

    // 2. 单行函数体
    const add = (x,y) => x + y;

    // 3. 单行对象
    // const add = (x,y) => {
    //     return {
    //         value: x+y
    //     };
    // }

    const add = (x,y) => ({
        value: x+y
    });
```

###### 2.3 非箭头函数中的this指向

- 1. 全局作用域中的this指向

    ```JavaScript
        console.log(this); //window
    ```

- 2. 一般函数（非箭头函数）中的this指向
  - 只有在函数调用的时候this指向才确定，不调用的时候不知道指向谁
  - this指向和函数在哪儿调用没有关系，只和谁在调用有关
  - 由于setTimeout函数中回调函数执行时没有指定调用对象，js语法中规定，默认是window对象调用的，所以this指向window

    ```JavaScript
        function add(){
            console.log(this);
        }

        add(); // 不知道谁在调用，this指向undefined；非严格模式下undefined -> window

        const calc = {
            add: add
        };
        calc.add();  // calc
        const adder = calc.add;
        adder(); //undefined -> window(非严格模式下)

        document.onclick = function(){
            console.log(this);  // document
        };

        function Person(username) {
            this.username = username;
            console.log(this);
        }

        const p = new Person('Ming'); // this指向p
        
    ```

- 3.  严格模式
  - 如何开启：在所有语句之前放一个特定语句"use strict"
  - 与非严格模式的区别
    - 严格模式中，变量未声明就赋值会报错；非严格模式下不会
    - 严格模式中，全局作用域中的函数内部this默认指向undefined；非严格模式默认值想window
    - 严格模式中，不允许重复变量命名；非严格模式下不会

- 4. 箭头函数中的this指向
  - 箭头函数没有自己的this，无法用call或apply修改指向
  - 箭头函数的this是根据作用域链查找

    ```JavaScript
        const calc = {
            add:() => {
                console.log(this);
            }
        };
        calc.add(); // window

        const calc = {
            add:function(){
                const adder = () => {
                    console.log(this);
                };
                adder();
            }
        };
        calc.add(); // calc
        const addFn = calc.add;
        addFn(); //
    ```

###### 2.4 不适合使用箭头函数的场景

- 1. 构造函数
- 2. 需要this指向调用对象的时候
- 3. 需要使用arguments的时候
  - 剩余参数可以解决这个问题

```JavaScript
    // 1. 作为构造函数
    const Person = () => {};
    new Person(); // 报错，箭头函数没有this

    // 2. 需要this指向调用对象的时候
    document.onclick = function(){
        console.log(this);
    }
    document.addEventListener(
        'click',
        () => {
            console.log(this); // 不指向document，指向window
        },
        false
    )

    // 3. 需要使用arguments的时候
    function add() {
        console.log(arguments);
    }
    add(1,2);

    const add = () => console.log(arguments);
    add();
    // 剩余参数
```

###### 2.5 箭头函数的应用

#### 11.4 解构赋值

- 解析某一数据的结构，将我们想要的东西提取出来，赋值给变量或常量

##### 1. 数组的解构赋值

###### 1.1 数组解构赋值的原理

- 模式（结构）匹配
- 索引值相同的完成赋值
- 不取的值通过逗号跳过

###### 1.2 数组解构赋值的默认值

- 默认值的基本用法

- 默认值的生效条件
  - 只有当一个数组成员严格等于（===）undefined时，对应的默认值才会生效

- 默认值表达式
  - 如果默认值是表达式，默认值表达式是惰性求值的（如果没用到默认值，就不会求值）

###### 1.3 数组解构赋值的应用

- 1. 常见的类数组解构赋值
  - arguments
  - NodeList(节点类数组)
- 2. 函数参数

```JavaScript
    // 1. 认识解构赋值
    const arr = [1,2,3];
    const a = arr[0];
    const b = arr[1];
    const c = arr[2];

    const [a,b,c] = [1,2,3];

    const [a,[,,b],c] = [1,[2,4,5],3]

    // 默认值的基本用法
    const [a,b] = [];
    // const [a,b] = [undefined, undefined];
    // a,b均为undefined
    const [a=1,b=2] = [];
    // a为1，b为2

    // 默认值的生效条件
    const [a = 1, b = 2] = [3, null];
    // a=3,b=null

    // 默认值表达式
    const func = () => {
        console.log('我被执行了');
        return 2;
    }
    const [x=func()] = [1];

    // 解构赋值的应用
    // arguments
    function func(){
        // console.log(arguments.push); //undefined
        const [a,b] = arguments;
        console.log(a,b);
    }
    
    func(1,2); // 1,2

    // NodeList
    const [p1,p2,p3] = document.querySelectorAll('p');

    // 函数参数的解构赋值
    const arr = [1,1];
    // const add = arr => arr[0] + arr[1];
    // 实参传入函数，有实参给形参赋值的过程
    // [x,y] = [1,1];
    const add = ([x=0,y=0]) => x + y;
    console.log(add([]));

    // 3. 交换变量的值
    let x = 1;
    let y = 2;

    let tmp = x;
    x = y;
    y = tmp;
    console.log(x,y);

    [x,y] = [y,x];
```

##### 2. 对象的解构赋值

###### 1.1 对象解构赋值的原理

- 模式（结构）匹配
- 属性名相同的完成赋值

```JavaScript
    // 1. 模式（结构）匹配
    // {} = {}
    // 2. 属性名相同的完成赋值
    const {username, age} = {username:'zhangshan',age:18}
    const {username:username, age:age} = {username:'zhangshan',age:18}
    const {'username':username, 'age':age} = {username:'zhangshan',age:18}

    // 取别名
    const {username:uname, age:age} = {username:'zhangshan',age:18};
    console.log(age,uname);
```

###### 1.2 对象解构赋值的默认值

- 对象解构赋值的默认值
- 将一个已经声明的变量用于解构赋值,需要在圆括号中进行
- 可以取到继承的属性

```JavaScript
    // 1. 默认值的生效条件
    // 对象的属性值严格等于undefined时，对应的默认值才会生效
    const {username = "ZhangSan",age = 0} = {username:'LiSi'};
    console.log(username,age); // LiSi, 0

    // 2. 默认值表达式
    // 如果默认值表达式,默认值表达式是惰性求值的

    // 3. 将一个已经声明的变量用于解构赋值
    let x = 11;
    {x} = {x:1};
    console.log(x); // 报错
    // {x}被理解为块级作用域,因此等号左右两边无法匹配
    ({x} = {x:1});

    // 4. 可以取到继承的属性
    const {toString}} = {};
    console.log(toString);
    // Object的toString方法
```

###### 1.3 对象解构赋值的应用

- 1. 函数参数的解构赋值

```JavaScript
    const logPersonInfo = user => console.log(user.username, user.age);
    logPersonInfo({username:'Alex',age:18});

    const logPersonInfo = ({username, age}) => console.log(user.username, user.age);
```

- 2. 复杂的嵌套

```JavaScript
    const obj = {
        x:1,
        y:[2,3,4],
        z: {
            a:5,
            b:6
        }
    };

    const {x,y,z} = obj;
    const {
        y,
        y:[,yy],
        z,
        z:{
            b
        }
    } = obj;


```

##### 3. 其他数据类型的解构赋值

###### 1. 字符串的解构赋值

```JavaScript
    // 数组形式的解构赋值
    const [a,b] = 'hello';
    // a为"h",b为"e"

    // 对象形式的解构赋值
    const {0:a,1:b,length} = 'hello';
    // a为"h",b为"e",length为5
```

###### 2. 数值和布尔值的解构赋值

```JavaScript
    // 对象形式的解构赋值
    // 先将等号右边的值转为对象
    // new Number(123)
    const {a = 1, toString} = 123;
    // new Boolean(true)
    const {b = 2, toString} = true;

```

###### 3. undefined和null的解构赋值

- 由于undefined和null无法转换为对象,所以对它们进行解构赋值,都会报错

##### 4. 解构赋值常见的应用场景

###### 1. 交换变量的值

```JavaScript
    let x = 1;
    let y = 2;
    [x, y] = [y, x]; // tips：x 和 y 已经声明了，这里就不用再添加 let 等关键字声明了
    console.log(x, y) // 2 1
```

###### 2. 从函数返回多个值

```JavaScript
// 返回一个数组
    function example() {
      return [1, 2, 3];
    }
    let [a, b, c] = example();
    console.log(a, b, c) // 1 2 3

// 返回一个对象
    function example() {
    return {
        foo: 1,
        bar: 2
        };
    }
    let {
        foo,
        bar
    } = example();

    console.log(foo, bar) // 1 2
```

###### 3. 函数参数的定义

```JavaScript
// 参数是一组有次序的值
    function f([x, y, z]) {
        console.log(x, y, z)
    }
    f([1, 2, 3])

// 参数是一组无次序的值
    function f({
        x,
        y,
        z
    }) {
        console.log(x, y, z)
    }
    f({
        z: 1,
        x: 2,
        y: 3
    })
```

###### 4. 指定函数参数的默认值

```JavaScript
```

###### 5. 遍历Map解构

```JavaScript
    function foo({x, y = 5}) {
        console.log(x, y);
    }
    foo({}) // undefined 5
    foo({x: 1}) // 1 5
    foo({x: 1, y: 2}) // 1 2
```

###### 6. 加载模块

```JavaScript
    var map = new Map();
    map.set('李四', '18');
    map.set('张三', '20');
    for (let [key, value] of map) {
        console.log(`${key}今年${value}岁`);
    }
```

###### 7. 提取JSON数据

```JavaScript
    var jsonData = {
        "name": "小慕",
        "age": "18",
        "data": [1, 2, 3, 4],
        "status": "OK"
    }
    let {
        name,
        age,
        data,
        status
    } = jsonData
    console.log(name, age, data, status);
```

#### 11.5 对象字面量的增强与函数参数的默认值

##### 1. 对象字面量的增强

###### 1. 属性和方法的简介表示法

- 对象字面量是什么
  
```JavaScript
    // 实例化构造函数
    const person = new Object();
    person.age = 18;
    person.speak = function(){};

    // 对象字面量
    const person = {
        age:18,s
        speak:funtion(){}
    }
```

- 属性的简介表示法
  - 键名和变量或常量名一样的时候,可以只写一个

```JavaScript
    const age = 18;
    const person = {
        // age:age
        age
    }
```

- 方法的简介表示法
  - 方法可以省略冒号和function关键字

```JavaScript
    const person = {
        // speak: function(){}
        speak();
    }
```

###### 2. 方括号语法

- 方括号语法的用法

```JavaScript
    const prop = 'age';
    const person = {};

    // person.prop = 18;
    // 方括号里的prop会被求值
    // person[prop] = 18;

    // ES6被增强
    const person = {
        [prop]: 18
    };
```

- 方括号中可以放什么
  - ${}
  - [值或者通过计算得到值的表达式]

```JavaScript
    const prop = 'age';
    const func = () => 'age';
    const person = {
        // [prop]: 18
        // [func()]:18
        // ['sex']: 'male'
        ['se'+'x']:'male'
    }

    
```

- 方括号语法和点语法的区别
  - 点语法是方括号语法的特殊形式
    - 使用点语法的条件:属性名由数字\字母\下划线以及$构成,并且数字不在首位
  - 属性名是合法标识符时,使用点语法和方括号语法都可;属性名不是合法标识符,只能使用方括号语法
  - 使用变量或常量保存属性名时,只能使用方括号语法,不能使用点语法

```JavaScript
    const person = {};
    // person.age <=> person['age']

    const obj = {
    "age": 2,
    "8i":"imooc"
    }
    // age是合法标识符，点语法和方括号语法都可以访问
    console.log(obj.age) // 2
    console.log(obj['age']) // 2
    //8i不属于合法的标识符，使用点语法访问属性会报错
    // console.log(obj.8i)  // 报错  为了方便看到其他结果，所以将这句代码注释了，可以自己打开注释   测试下代码效果
    // 不符合语法标识符的属性，可以使用方括号语法访问
    console.log(obj['8i'])// imooc

    const obj = {
    "age": 2,
    "8i": "imooc"
    }
    // 定义一个常量property，值为age
    const property = "age"
    // 当属性为变量或常量时，必须通过方括号语法，即：obj[property]，使用property保存的值age，所以等 价于obj.age这种写法
    console.log(obj[property]) // 2
    // 当属性为变量或常量时，如果通过点语法，会将property看做字符串，表示访问obj对象下的property属  性，而不是访问obj下的age属性，而obj对象中没有property属性，所以返回结果为undefined
    console.log(obj.property) // undefined
```

##### 2.函数参数的默认值

###### 1. 函数参数的默认值是什么

- 调用参数的时候传参了,就用传递的参数;如果没有传参,就用默认值

```JavaScript
    const mutiply = (x,y) => {
        if(typeof y === 'undefined'){
            y = 1;
        }
        return x * y;
    }


    const mutiply = (x,y=1) => x*y;
```

###### 2. 函数参数默认值的注意事项

- 默认值的生效条件
  - 不传参数或明确的传递undefined作为参数,只有这两种情况下,默认值才会生效
- 默认值表达式是惰性求值的
- 设置默认值的小技巧
  - 函数参数的默认值,最好从参数列表的右边开始设置

```JavaScript
    const multiply = (x, y = 1) => x*y;
    console.log(mutiply(2,null)); // 0

    const multiply = (x = 1, y) => x*y;
    multiply(undefined, 2); // 不方便
```

###### 3. 函数参数默认值的应用

- 接受很多参数的时候

```JavaScript
    const logUser = (
        username = 'LiSi',
        age = 18,
        sex = 'male'
        ) => console.log(username, age, sex);
    logUser('ZhangSan',18,'male')

    // 接收一个对象作为参数
    const logUser = ({username='ZhangSan', age=0, sex='male'}={}) => console.log(username, age, sex);
    logUser({
        username: "ZhangSan",
        age:18,
        sex:'male'
    })

    // {username='ZhangSan', age=0, sex='male'} = {username:'ZhangSan'};
    logUser({username:'ZhangSan'});
    logUser({});
    // logUser(undefined)
    // {username='ZhangSan', age=0, sex='male'} = undefined
    logUser(); //报错
```

### 第12章 ES6语法扩展

#### 12.1 剩余参数和展开运算符

##### 1. 剩余参数

###### 剩余参数是什么

- 剩余参数的本质
  - 剩余参数永远是个数组,即使没有值,也是空数组

```JavaScript
    const add = (x,y,...args) => {
        console.log(x,y,args);
    };

    add(); // undefined, undefined,[]
    add(1,2,3); // 1,2,[3]
```

###### 剩余参数的注意事项

- 箭头函数的剩余参数
  - 箭头函数的参数部分,即使只有一个剩余参数,也不能省略圆括号

```JavaScript
    const add = (...args)=> {}
```

- 使用剩余参数代替arguments获取实际参数
  - ...args是数组,arguments是类数组

```JavaScript
    const add = (...args) => {
        console.log(args);
    }
```

- 剩余参数的位置
  - 剩余参数只能是最后一个参数,之后不能再有其他参数

###### 剩余参数的应用

- 和解构赋值结合使用
  - 剩余元素:可以是数组,也可以是对象,具体看解构的是什么

```JavaScript
    const add = (...args) => {
        let sum = 0;
        for(let i = 0; i <args.length; i++){
            sum += args[i];
        }

        return sum;
    };

    // reduce方法

    // 剩余参数与解构赋值结合使用
    // 剩余参数不一定非要作为函数参数使用

    const [num,...args] = [1,2,3,4];
    console.log(num,args); // 1,[2,3,4]

    const func = ([num,...args]) => {};
    func([1,2,3]);

    const {x,y,...z} = {a:3, x:1,y:2,z:4};
    console.log(x,y,z); //1 2 {a:3,b:4}

    const {x,...z,y} = {a:3, x:1,y:2,z:4};
    console.log(x,y,z); // 报错,剩余元素

```

###### reduce方法

- 原理: reduce方法是数组的归并方法,这个方法与迭代方法(forEach等)一样,都会对数组进行遍历,不同的是reduce方法的回调函数中的第一个参数得到的是迭代计算后的结果

```JavaScript
    let arr = [1, 2, 3, 4];
    let sum = arr.reduce(function(acl, val, idx, array) {
        console.log(acl, val, idx, array);
        return acl+ val;
      })
    console.log(arr, sum);
    // 第一次迭代: acl = 1, val = 2, idx = 1, array = arr, 函数返回值:3
    // 第二次迭代: acl = 3, val = 3, idx = 2, array = arr, 函数返回值:6
    // 第三次迭代: acl = 6, val = 4, idx = 3, array = arr, 函数返回值:10

    let arr = [1, 2, 3, 4];
    let sum = arr.reduce(function(acl, val, idx, array) {
            console.log(acl, val, idx, array);
            return acl+ val;
        }, 10) // 设置初始值为10
    console.log(arr, sum);

```

- 应用

```JavaScript
// 数组元素中求和
    let arr = [1, 2, 3, 4];
    let sum = arr.reduce(function(acl, val) {
        return acl+ val;
    })
    console.log(sum);


// 数组去重
    let arr = [12, 34, 34, 342, 345, 34, 123, 345, 45, 12]
    let newArr = arr.reduce((prev, next) => {
            // 判断数组中是否存在当前元素，如果不存在的话，再将其添加到数组中
            prev.indexOf(next) == -1 && prev.push(next)
            return prev
        }, []) // 设置迭代初始值为一个空数组
    // 原数组不会发生改变
    console.log(arr) // [12, 34, 34, 342, 345, 34, 123, 345, 45, 12]
    // 去除重复项的新数组
    console.log(newArr) // [12, 34, 342, 345, 123, 45]
```

##### 2. 数组的展开运算符

###### 数组展开运算符的基本用法

- 认识展开运算符

```JavaScript
    // 求数组中的最小值
    // Math.min()
    console.log(Math.min([3,2,4])); // NaN
    console.log(Math.min(3,2,4));   // 2

    // 把[3,2,4] -> 3,2,4
    console.log(Math.min(...[3,2,4])); // 展开运算符

```

###### 区分剩余参数和展开运算符

- 根本区别
  - 展开运算符：把数组转换成参数列表的形式
  - 剩余参数：把参数列表转换成数组

```JavaScript
    // 剩余参数
    const add = (...args) => {
        // 展开运算符
        console.log(...args);
    }


    [...[1,2,3],4]
```

###### 数组展开运算符的应用

- 1. 复制数组

```JavaScript
    const a = [1,2];
    // const b = a;
    // console.log(b);
    // a[0] = 3;
    // console.log(b);

    const c = [...a];
```

- 2. 合并数组

```JavaScript
    const arr1 = [1,2];
    const arr2 = [3];
    const arr3 = [4,5];
    console.log([1,...b,2,...a,...c,3]);
```

- 3. 字符串转为数组

```JavaScript
    const str = "Number";
    console.log(...str); //"N","u","m","b","e","r"
    console.log([...str]); // ["N","u","m","b","e","r"]
```

- 4. 常见类数组转为数组

```JavaScript
// arguments
    function func(){
        // console.log(arguments.push); // undefined
        console.log([...arguments]);
    }

// NodeList
    console.log(document.querySelectorAll('p'));
    console.log([...document.querySelectorAll('p')]);
```

##### 3. 对象的展开运算符

###### 对象展开运算符的基本用法

- 1. 展开对象
  - 对象不能直接展开，必须在{}中展开
  - 对象的展开：把属性罗列出来，用逗号分隔，放到一个{}中，构成新对象

```JavaScript
    const apple = {
        color: '红色',
        shape: '球形',
        taste: '甜'
    };
    console.log(...apple);
    console.log({...apple});

    console.lot({...apple} === apple); // false
```

- 2. 合并对象
  - 新对象拥有全部属性；相同属性，后面对象覆盖前面对象

```JavaScript
    const apple = {
        color: '红色',
        shape: '球形',
        taste: '甜'
    };

    const pen = {
        color: '黑色',
        shape: '圆柱形',
        use: '写字'
    };
    console.log({...pen});
    console.log({...apple,...pen}); // 相同属性，后面对象覆盖前面对象
```

###### 对象展开运算符的注意事项

- 1. 空对象的展开
  - 如果展开一个空对象，则没有任何效果

```JavaScript
```

- 2. 非对象的展开
  - 如果展开的不是对象，则会自动将其转为对象，再将其属性罗列出来
  - 如果展开运算符后面是字符串，会自动转成一个类似数组的对象，因此返回的不是空对象

```JavaScript
    console.log({...1}); // {}
    console.log({...undefined}); // {}
    console.log({...null}); // {}
    console.log({...true}); // {}

    console.log({..."str"}); // {0:"s",1:"t",2:"r"}
    console.log([..."str"]); // ["s","t","r"]
    console.log({...[1,2,3]}); // {0:1,1:2,2:3}
```

- 3. 对象中对象属性的展开
  - 不会展开对象中的对象属性

```JavaScript
    const apple = {
        feature: {
            taste: "甜"
        }
    };

    const pen = {
        feature: {
            color: "黑色",
            shape: "圆柱形"
        }
        use："写字"
    };
    console.log({...apple,...pen});
```

###### 对象展开运算符的应用

- 1. 复制对象

```JavaScript
    const apple = {
        color: '红色',
        shape: '球形',
        taste: '甜'
    };
    console.log(...apple);
    console.log({...apple});

    console.lot({...apple} === apple); // false
```

- 2. 用户参数和默认参数

```JavaScript
    const logUser = ({
        username = "ZhangSan",
        age = 0,
        sex = "male"
    } = {}) => {
        console.log(username,age,sex);
    }

    const logUser = userParam => {
        const defaultParam = {
            username: "ZhangSan",a
            age: 0,
            sex: 'male'
        };

        // const param = {...defaultParam, ...userParam};
        const {username, age, sex} = {...defaultParam, ...userParam};

    }
```

#### 12.2 Set和Map数据结构

##### 1. Set

###### 1. Set是什么

- Set：一系列无序、没有重复值的数据集合
  - 无序：没有下标去标示每个值

```JavaScript
    // 数组：一系列有序列的数据集合
    console.log([1,2,1]);
    console.log(new Array(1,2,1));

    // Set中不能有重复的成员
    const s = new Set();
    s.add(1);
    s.add(2);
    s.add(2);
    console.log(s); {1,2}
```

###### 2. Set实例的方法和属性

- 方法
  - add():给Set中添加成员;可以连调；一次只能添加一个元素
  - has()：判断集合中存不存在某元素
  - delete()：删除集合中的某元素
  - clear()：清空集合
  - forEach(回调函数（value，key，set），指针)：按照成员添加进集合的顺序遍历；Set中的key等于value；数组也有这样的方法
    - forEach可用于遍历Set，该方法接收两个参数，第一个参数是回调函数，第二个参数指定了回调函数中（此时回调函数指的是普通函数）的this指向，如果回调函数是箭头函数的话，那么此时传不传第二个参数都不会影响箭头函数内部的this指向，因为箭头函数中的this指向该函数定义时所在作用域指向的对象，而不是使用时所在的作用域指向的对象。

```JavaScript
    // add()
    const s = new Set();
    s.add(1).add(2).add(2); // {1,2}

    // has()
    console.log(s.has(1));
    console.log(s.has(3));

    // delete()
    s.delete(1);
    s.delete(3); // 删除不存在的元素什么都不会发生
    console.log(s); // {2}

    // clear()
    s.clear();
    console.log(s); // {}

    // forEach()
    s.add(1).add(2).add(2); // {1,2}
    s.forEach(function(value,key,set){
        // Set中的key等于value；数组也有这样的方法
        console.log(value,key,set===s);  // true
        console.log(this);
    },document);

    // 按照成员添加进集合的顺序遍历
```

- 属性
  - size

```JavaScript
    const s = new Set();
    s.add(1).add(2).add(3);
    console.log(s.size); // 3
```

###### 3. Set构造函数的参数

- 数组

```JavaScript
    const s = new Set([1,2,1]);
    console.log(s);
```

- 字符串，arguments，NodeList，Set等

```JavaScript
// 字符串
    console.log(new Set("hi"));  // {"h","i"}
// arguments
    function func(){
        console.log(new Set(arguments));
    }
    func(1,2,1);
// NodeList
    console.log(new Set(document.querySelectorAll('p')));
// Set
    const set1 = new Set([1,2,1]);
    console.log(new Set(set1) === set1); // false
```

###### 4. Set的注意事项

- 1. 判断重复的方式
  - Set对重复值的判断基本遵循严格相等（===）
  - 耽氏对于NaN的判断与===不同，Set中的NaN等于NaN

```JavaScript
    const s = new Set();
    s.add({}).add({});
    console.log(s); //
```

- 2. 什么时候使用Set
  - 数组或字符串去重时
  - 不需要通过下标访问，只需要遍历时
  - 为了使用Set提供的方法和属性时（add delete clear has forEach size等）

###### 5. Set的应用

- 数组去重

```JavaScript
    // [1,2,1]
    const s = new Set([1,2,1]);
    // s.forEach
    const arr1 = [];
    s.forEach((v,k,s) => {
        arr1.push(v);
    })

    // 展开运算符
    const arr2 = [...new Set([1,2,1])];
```

- 字符串去重

```JavaScript
    const s = new Set('abbabcd');
    const string = [...s].join("");
```

- 存放DOM元素

```JavaScript
    const s = new Set(document.querySelectorAll('p'));
    // for循环
    s.forEach(function(elem){
        elem.style.color = "red";
        elem.style.backgroundColor = "yellow";
    })
```

##### 2. Map

###### 1. Map是什么

- 认识Map:键值对的集合

```JavaScript
// 对象
    const person = {
        name: "ZhangSan",
        age: 18
    } 

// Map
    const m = new Map();
    m.set('name','ZhangSan')
    m.set('age','18')
```

- Map和对象的区别

```JavaScript
    // 对象一般用字符串当作键
    const obj = {
        name: "ZhangSan",
        age: 18
    }

    // 基本数据类型：数字、字符串、布尔值、undefined、null
    // 引用数据类型：对象([]、{}、函数、Set、Map等)
    // 以上都可以作为Map的键
```

###### 2. Map实例的方法和属性

- 1. 方法
  - set():添加成员
    - 使用set添加的新成员，键如果已经存在，后添加的键值会覆盖已有的
  - get():获取成员
    - get获取不存在的成员，返回undefined
  - has():成员是否存在
  - delete():删除成员
  - clear():清除成员
  - forEach():遍历

```JavaScript
    const m = new Map();
    m.set('age',18).set(true,'true').('age',20);

    m.get('age'); // 20
    m.get(true); // 'true'

    m.delete('age'); // 删除delete
    m.delete('true'); // 删除不存在的键，什么都不发生

    m.forEach(function(value,key,map){
        console.log(value,key,map === m); // true
    }, document)
```

- 2. 属性
  - size

###### 3. Map构造函数的参数

- 数组:必须是二维数组

```JavaScript
    console.log(new Map(['name','alex'],['age',18]));
```

- Set、Map等
  - Set中必须提看出键和值

```JavaScript
    const s = new Set(['name','ZhangSan'],['age',18]);

    const m1 = new Map(['name','ZhangSan'],['age',18]);
    const m2 = new Map(s);
```

###### 4. Map的注意事项

- 1. 判断键名是否相同的方式
  - 基本遵循严格相等===
  - Map中NaN等于NaN

- 2. 什么时候使用Map
  - 如果只需要key -> value的结构，或者需要字符串以外的值做键，使用Map更合适
  - forEach for in
  - size

- 3. 什么时候适用对象
  - 只有在模拟现实世界的实体时，才使用对象

###### 5. Map的应用

- 1. 

```JavaScript
    const [p1,p2,p3] = document.querySelectorAll('p');
    const m = new Map();
    m.set(p1,{
        color:'red',
        backgroundColor:'yellow',
        fontSize:'40px'
    });
    m.set(p2,{
        color:'green',
        backgroundColor:'orange',
        fontSize:'40px'
    });
    m.set(p3,{
        color:'blue',
        backgroundColor:'yellow',
        fontSize:'40px'
    });

    m.forEach((propObj,elem) => {
        for(const p in propObj){
            elem.style[p] = propObj[p]'
        }
    })
```

#### 12.3 遍历器与for...of循环

##### 1. Itarator是什么

- Iterator的作用
  - 遍历

- 寻找Iterator

```JavaScript
    console.log([1,2][Symbol.iterator]());
```

- 什么是Iterator
  - it:可遍历对象（可迭代对象）
  - Symbol.iterator:可遍历对象（可迭代对象）的生成方法
  - Iterator：Symbol.iterator -> it.next() -> it.next() ... -> 一直到done为止

```JavaScript
    const it = [1,2][Symbol.iterator]();
    console.log(it.next()); //{value:1,done:false}
    console.log(it.next()); //{value:2,done:false}
    console.log(it.next()); //{value:undefined,done:true}
```

##### 2. Symbol

###### 1. 什么是Symbol

- ES6中引入的一种新的基本数据类型，用于表示一个独一无二的值。

```JavaScript
    const a = Symbol();
    console.log(a); // Symbol()
    console.log(typeof a); // 类型是：Symbol

    // Symbol独一无二
    let a = Symbol();
    let b = Symbol();
    console.log(a);  //Symbol()
    console.log(b);  //Symbol()
    console.log(a === b) // false

    // 
    let a = Symbol("symbol1");
    let b = Symbol("symbol2");
    console.log(a); //Symbol("symbol1")
    console.log(b); //Symbol("symbol2")
```

###### 2. Symbol语法

- 1. 基本语法

```JavaScript
    // 可以在调用Symbol的时候，传入一个字符串作为当前Symbol变量的描述
    let a = Symbol("symbol1");
    let b = Symbol("symbol2");
    console.log(a); //Symbol("symbol1")
    console.log(b); //Symbol("symbol2")

    //不能使用new调用；报错，Symbol is not a constructor
    const a = new Symbol();
```

- 2. Symbol属性的遍历
  - 以Symbol类型的变量作为对象属性时，该属性不会出现在for...in、for...of的循环中

```JavaScript
    let s1 = Symbol('a');
    let s2 = Symbol('b');
    // 由于 s1 和 s2 是一个变量，而不是字符串，因此需要使用中括号括起来（否则它会被当做字符串使用）
    let a = {
        name: "夕山雨",
        [s1]: 24,
        [s2]: function(){}
    }
```

- 3. Symbol.for(),Symbol.keyFor()
  - Symbol.for()：Symbol提供一种可以创建相同Symbol的机制，就是使用Symbol.for()方法进行注册
    - 通过该方法生成的Symbol会在当前作用域中注册指定的描述符，之后再次通过Symbol.for()传入相同的描述符时，就可以得到相同的Symbol值，所以变量a和b是相同的

    ```JavaScript
        let a = Symbol.for('imooc');  //全局注册了以"imooc"为描述符的 Symbol

        //由于描述符"imooc"已被注册到全局，因此这里创建的 Symbol 与上面是同一个
        let b = Symbol.for('imooc');  
        console.log(a === b) // true
    ```
  
  - Symbol.keyFor()：返回一个全局注册的Symbol的描述符

    ```JavaScript
        let a = Symbol.for('imooc');
        let res = Symbol.keyFor(a)
        console.log(res) // imooc
    ```

- 4. Symbol的作用
  - 由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由于多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

    ```JavaScript
        let s1 = Symbol('s1');

        let s2 = Symbol('s2')
        const obj = {
            age: 16,
            age: 19,
            [s1]: 'Hello!',
            [s2]: 'world'
        };
        console.log(obj)

    ```

- 5. 常用内置的Symbol值：Symbol.iterator

```JavaScript
    for(var item of [1,2,3]){
        console.log(item); //依次输出 1，2，3
    }
```

- 6. Symbol与基本数据类型转换
  - 不能转成数字

    ```JavaScript
        let s1 = Symbol('1');

        // 报错
        console.log(Number(s1))
    ```

  - 可以转成布尔值和字符串

    ```JavaScript
        let s1 = Symbol('1');

        console.log(typeof s1) // symbol
        let str = String(s1)
        console.log(typeof str) // string
        let bool = Boolean(s1)
        console.log(typeof bool) // boolean
    ```

##### 3. Itarator解惑

###### 1. 为什么需要iterator

- 遍历数组：for循环和forEach方法
- 遍历对象：for...in循环
- iterator遍历器是一个统一的遍历方式

###### 2. 如何更方便的使用iterator

- 封装iterator调用的过程：for...of循环

##### 4. for...of的用法

###### 1. 认识for...of

```JavaScript
    const arr = [1,2,3];
    const it = arr[Symbol.iterator]();
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    let next =  it.next(); // {value:1, done:false}
    while(!next.done){
        console.log(next.value);
        next = it.next();
    }

    for(const item of arr){
        console.log(item);
    }
```

###### 2. 与break、continue一起使用

```JavaScript
    const arr = [1,2,3];
    for(const item of arr){
        if(item == 2){
            break;
        }
        console.log(item);
    }

    for(const item of arr){
        if(item == 2){
            continue;
        }
        console.log(item);
    }
```

###### 3. 在for...of中取得数组的索引

- keys(),values(),entries()都是实例的方法

```JavaScript
    const arr = [1,2,3];
    // keys()得到的是索引的可遍历对象，可以遍历索引值
    console.log(arr.keys());
    for(const key of arr.keys()){
        console.log(key); // 0,1,2
    }
    // values()得到的是值的可遍历对象，可遍历出值
    for(const value of arr.values()){
        console.log(value);
    }

    // entries()得到的是索引+值组成的数组的可遍历对象
    for(const entries of arr.keys()){
        console.log(entries); //[0,1],[1,2],[2,3]
    }

    for(const [index,value] of arr.keys()){
        console.log(index,value); //0,1 1,2 2,3
    }
```

###### 4. 不同循环的使用

- 1、for
自由度高，对象数组都能遍历，“全能”的弊端就是不够简洁。
- 2、for…in
for(const keys in 对象){}：in 后面只能是对象，需说明js里万物皆对象，数组也是属性为数组下标的对象；keys 是属性；
- 3、for…of
for(const values of 数组){}：of后面只能是数组/类数组（有Symbol.iterator），需说明Object.entries等也属于数组；values是值；
- 4、forEach
arr.forEach(function(index,value,arr){},this指向)
new Set().forEach(function(value,value,set){},this指向)
new Map().forEach(function(key,value,map){},this指向)
forEach不能使用break、continue

- 总结使用场景：
1、对象优先使用for…in
2、数组优先使用for…of或forEach，根据需求选择
3、Set、Map优先使用forEach

##### 5. 原生可遍历

###### 1. 什么是可遍历

- 只要有Symbol.iterator方法，并且这个方法可以生成可遍历对象，就是可便利的
- 只要可遍历，就可以使用for...of循环来统一遍历

###### 2. 原生可遍历

- 1. 数组
- 2. 字符串
- 3. Set
- 4. Map
- 5. arguments
- 6. NodeList

##### 6. 非原生可遍历

- 1. 一般对象

```JavaScript
    const person = {sex:"male",age:18};
    person[Symbol.iterator]() => {
        let index = 0;
        return{
            next(){
                index++;
                if(index === 1){
                    return {
                        value: person.age,
                        done: false
                    }
                } else if (index === 2){
                    return {
                        value:person.sex,
                        done:false
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }

    for(const item of person){
        console.log(item);
    }
```

- 2. 有length和索引属性的对象

```JavaScript
    const obj = {
        0: 'ZhangSan',
        1: 'male',
        length: 2
    }

    obj[Symbol.iterator] = () => {
        let index = 0;
        return {
            next() {
                let value,done;
                if(index < obj.length){
                    value = obj[index];
                    done = false;
                } else {
                    value = undefinedl
                    done = true;
                }
            }

            index++;
        }
    }

    // 把数组的iterator方法继承
    obj[Symbol.iterator] = Array.prototype[Symbol.iterator];
```

##### 7. 使用Iterator的场合

###### 1. 数组的展开运算符

```JavaScript
    console.log(...[1,2,3]); 
    console.log(...'str'); 
    console.log(...new Set([1,2,3])); 
```

###### 2. 数组的解构赋值

```JavaScript
    const [a,b] = [1,2];
    const [c,d] = 'hi';
```

###### 3. Set和Map的构造函数

- new Set(iterator)
- new Map(iterator)

#### 12.4 ES的新增方法