# Learning Notes of *React in Action*

## 第1章 初识React

### 1.1 初识React

#### 思维模型
  
函数式、面向对象

#### 开发方式

开发人员用组件创建用户界面，React的渲染系统管理着这些组件并保持着应用视图的同步

#### React的主要“成分”

##### 1. 组件

封装的功能单元，也是React的主要单元。它们利用数据（属性和状态）将UI渲染为输出。

组件原则

1. 组件应该易于理解并且容易和其他组件集成
2. 遵循可预测的生命周期，能够维持自己的内部状态，并与“常规JavaScript”兼容

##### 2. React库

React使用一组**核心库**。

这组核心库与react-dom（渲染器）和react-native（原生平台：iOS、Android）紧密配合，侧重于组件规范和定义。

##### 3. 第三方

React不自带数据建模、HTTP调用、样式库或其他前端应用的常见工具，因此由开发者自行配备。

##### 4. 运行React 

运行在开发人员为之构建的平台上（web、React Native、React VR等）

### 1.2 React不能做什么

#### React是什么

React是一个声明性的、基于组件的库，用于构建在各种平台上，甚至是未来虚拟现实平台上（React VR）工作的用户界面：Web、原生、移动、服务器和桌面。

##### 使用React的第一个权衡： React主要关注视图（UI）方面

React仅关注视图，并没有Angular、Ember全面。

**注**：JavaScript框架很少能真正地相互协同

##### 使用React的第二个权衡：由Facebook开发和构建满足了Facebook的UI需求

有特殊性性能需求的应用可能并不适合（如高速股票行情自动收录器）

##### 使用React的第三个权衡：React的实现和设计

使用React构建应用，必须要遵循React的构建和渲染规则

开发者失去对底层系统的一些可见性

### 1.3 虚拟DOM

React使用自己实现的**虚拟DOM**驱动着管理、UI更新以及反应更改的内部机制

#### 1.3.1 DOM

DOM是一个允许JavaScript程序与不同类型的文档（HTML/XML/SVG）进行交互的编程接口，它有标准的驱动规范

1. DOM提供了访问、存储和操纵文档不同部分的机构化方式。从较高层面讲，DOM是一种反映了XML文档层次结构的树形结构

2. 使用React构建应用时，开发者通常不需要与DOM直接交互，而是由React来完成；但React也为开发者提供了直接和DOM交互的途径

#### 1.3.2 虚拟DOM

虚拟DOM的存在是为了解决大型应用对DOM进行许多修改时发生冲突或是重复计算的问题——对于开发者来说，难以开发；对于用户来说，体验不佳。

##### 1.3.3 更新与差异对比

虚拟DOM由React创建于内存中，并且像一个React-DOM这样的渲染器基于更改对浏览器DOM进行更新。

React可以执行只能更新并且只更新已更改的部分，因为它可以使用启发式对比来计算内存DOM的哪些部分需要更新到DOM。

对比：diff 什么改变了

更新：patch 只更新改变的部分

#### 1.3.4 虚拟DOM：渴求速度

1. 性能提升
2. 开发简便

### 1.4 组件：React的基本单元

#### 1.4.1 组件概览

将页面分割为组件。
每一个不同部分都可以认为是一个组件；具有相同性质的重复项可以被认为是一个组件在不同数据上得到复用

#### 1.4.2 React中的组件：封装与复用

React组件具有良好的封装性、复用性、组合性。

### 1.5 团队的React

简单易用

### 1.6 小结

React是一个用来创建用户界面的库，最初由Facebook创建并开源。它是一个考虑了简单、高性能和组件化的JavaScript库。
它没有提供创建应用的全面工具集，而是允许使用者选择如何实现以及使用什么来实现数据模型、服务器调用和其他应用的关注点。
这些关键因素以及其它因素是的React可以成为大大小小的应用和团队的绝佳工具。

- React是一个用来构建用户界面的库，它最初由Facebook的工程师创建

- React提供了一个基于组件的简单、灵活的API

- 组件是React的基本单元

- React在程序和浏览器DOM之间实现了一个虚拟DOM层

- 虚拟DOM使用快速对比算法对DOM进行高效更新

- 虚拟DOM具有优秀的性能，但最大的好处是它提供的思维模型

### 2.1 React组件介绍

#### 2.1.1 理解应用数据

#### 2.1.2 多组件：组合关系与父子关系

组件的可组合性：
    1.兄弟关系
    2.父子关系

illustration Here

#### 2.1.3 建立组件关系

1. 组件应该以合理的方式被组织；组件应该被灵活使用

2. 出现了重复多次的界面元素——成为组件的好选择

3. 迭代改进

### 2.2 用React创建组件

#### 2.2.1 创建React元素

```javascript
ReactDOM.render(
    ReactELement element,
    DOMElement container,
    [function callback]
) -> ReactComponent
```

使用React DOM的render方法让React创建和管理组件。
React DOM需要一个ReactElement类型的元素和一个DOM元素。

##### ReactELement

###### React元素是React中轻量、无状态、不可变的基础类型。React元素有ReactComponentElement和ReactDOMElement两种类型。

1. ReactComponentELement：对React组件的一个函数或类的引用
2. ReactDOMElement：DOM元素的虚拟表示

#### 2.2.4 创建React类

```JavaScript
class MyReactClassComponent extends Component {
    render(){}
}
```

#### 2.3 组件的一生

##### 2.3.1 React的状态

##### 2.3.2 设定初始状态

###### 1. 什么时候使用状态?

- 需要改变存储在组件的数据时

###### 2. 如何设置初始状态

- 在类构造函数中，调用super并将初始state对象赋值给类实例的state属性

```JavaScript
constructor(props){
    super(props);
    // 此处应补充super函数的作用
    this.state = {
        //初始状态
    }
}
```

###### 3. 更新组件初始状态

- 不能直接覆盖this.state，因为React需要追踪状态并确保虚拟DOM和时机DOM保持同步
  
- 使用this.setState更新: 这个属性接收一个用来更新状态的更新器函数

```JavaScript
setState(
    function(preState, props) -> nextState,
    callback
) -> void

// this.setState接收一个返回对象的更新器函数，该对象与状态进行浅合并
```

- 直接赋值更改与使用this.setState更改的区别：React能够根据状态变化选择批量更新以便效率最大化，即this.setState无需立即执行，而是由React决定

###### 4. 什么引起React进行更新

- JavaScript由事件驱动。

- React实现了一个合成事件系统作为虚拟DOM的一部分，这个部分将浏览器事件转化为React应用的事件

- 因而亦是事件促使了React的更新

###### 5. 数据流动

- 自顶向下，从父组件到子组件：当创建复合组件时，可以通过属性（props）向子组件传递信息并在子组件中使用这些信息

- 子组件向父组件传递数据：利用函数，因为函数在JavaScript中可以作为参数传递。在父组件中定义一个方法并将其作为属性传递给子组件，让子组件把数据传递过来

#### 2.4 JSX

##### 2.4.1 使用JSX创建组件

###### JSX是什么

- 是JavaScript的扩展，类似于XML且仅用于代码转换工具

- 不会被并入ECMAScript规范

###### Bable

- Bable是将JavaScript代码转换成与旧浏览器兼容的代码的转义器

- Bable如果被直接导入并在没有构建步骤的情况下（如Webpack）工作，运行会非常慢

##### 2.4.2 JSX的好处以及JSX与HTML的差别

###### 好处

- 类似于HTML且语法简单

- 声明式和封装：通过将组成视图的代码与相关联的方法包含在一起，使用者创建了一个功能组

###### 与HTML的差别

- HTML标签与React组件：使用React.createClass创建的自定义React组件按惯例首字母是大写的

- 属性表达式：JSX为prop = {表达式}，而非prop = “”的写法

- 布尔属性：省略属性的值（如 < Input checked /> ）会让JSX将其视为true，要传入false值需要使用表达式（attribute={false}）

- 嵌套表达式：JSX要在元素内部插入表达式的值，也需要使用大括号

### 2.5 小结

## 第三章 React中的数据和数据流

### 3.1 状态

#### 3.1.1 什么是状态

- **状态**   程序在特定瞬间可访问的所有信息

- React对现代UI复杂状态的简化，提供了两个API：  
    > 属性（props）
    > 状态（state）

#### 3.1.2 可变状态与不可变状态

##### 在React数据通信和交互的方法有两类

1. **状态（state）** 可以在组件中改变的数据

2. **属性（props）** 组件接受并且不应该被组件改变的数据

##### 不变的数据和可变的数据

**不变的** ： 不可变的持久的数据结构，随着时间推移可以支持多个版本，不能直接覆盖；不可变的数据结构通常是持久的（保留历史）

**可变的** ：可变的临时数据结构，随着时间的推移只支持一个版本；可变的数据结构在其变化时可以被覆盖并且不支持其它版本（不保留历史）

