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
