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

> DOM提供了访问、存储和操纵文档不同部分的机构化方式。从较高层面讲，DOM是一种反映了XML文档层次结构的树形结构

> 使用React构建应用时，开发者通常不需要与DOM直接交互，而是由React来完成；但React也为开发者提供了直接和DOM交互的途径

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

· React是一个用来构建用户界面的库，它最初由Facebook的工程师创建
· React提供了一个基于组件的简单、灵活的API
· 组件是React的基本单元
· React在程序和浏览器DOM之间实现了一个虚拟DOM层
· 虚拟DOM使用快速对比算法对DOM进行高效更新
· 虚拟DOM具有优秀的性能，但最大的好处是它提供的思维模型

### 2.1 React组件介绍

#### 2.1.1 理解应用数据

#### 2.1.2 多组件：组合关系与父子关系

组件的可组合性：
    1.兄弟关系
    2.父子关系

illustration Here

#### 2.1.3 建立组件关系

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

React元素是React中轻量、无状态、不可变的基础类型。React元素有ReactComponentElement和ReactDOMElement两种类型。

###### ReactComponentELement：对React组件的一个函数或类的引用

###### ReactDOMElement：DOM元素的虚拟表示

