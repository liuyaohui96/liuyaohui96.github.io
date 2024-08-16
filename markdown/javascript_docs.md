
# javascript_docs
1. [使用javascript](#使用javascript)
    1. [JavaScript使用类型](#javascript使用类型)
    2. [javasript调用策略](#javasript调用策略)
        1. [DOMContentLoaded事件触发javascript调用](#domcontentloaded事件触发javascript调用)
        2. [async异步javascript](#async异步javascript)
        3. [defer延迟javascript](#defer延迟javascript)
2. [javascript_intro](#javascript_intro)
    1. [什么是javascript](#什么是javascript)
    2. [javascript用途](#javascript用途)
    3. [注释](#注释)
    4. [关键字](#关键字)
3. [javascript客户端web应用生命周期](#javascript客户端web应用生命周期)
4. [javascript内存管理](#javascript内存管理)
5. [javascript变量](#javascript变量)
    1. [标识符](#标识符)
    2. [变量声明](#变量声明)
        1. [无关键字|var|let|const变量声明的区别](#无关键字varletconst变量声明的区别)
        2. [块级声明](#块级声明)
            1. [const 常量声明限制](#const-常量声明限制)
            2. [全局块级声明](#全局块级声明)
    3. [变量解构赋值](#变量解构赋值)
        1. [数组字面量语法解构](#数组字面量语法解构)
        2. [对象字面量语法解构](#对象字面量语法解构)
        3. [多重解构](#多重解构)
    4. [变量作用域](#变量作用域)
        1. [为什么有作用域](#为什么有作用域)
        2. [词法作用域](#词法作用域)
        3. [词法作用域分类](#词法作用域分类)
        4. [词法作用域注册标记符](#词法作用域注册标记符)
        5. [作用域查找与作用域链](#作用域查找与作用域链)
    5. [执行上下文](#执行上下文)
        1. [执行上下文分类](#执行上下文分类)
        2. [执行上下文生命周期](#执行上下文生命周期)
        3. [执行上下文栈](#执行上下文栈)
    6. [执行上下文与作用域的区别](#执行上下文与作用域的区别)
6. [javascript运算符，表达式和语句](#javascript运算符表达式和语句)
    1. [javascript运算符](#javascript运算符)
    2. [javascript表达式](#javascript表达式)
    3. [javascript语句](#javascript语句)
7. [javascript数据类型](#javascript数据类型)
    1. [原始数据类型（primitive types）](#原始数据类型primitive-types)
        1. [number](#number)
            1. [下划线数字字面量](#下划线数字字面量)
            2. [最大安全数字](#最大安全数字)
            3. [NaN](#nan)
            4. [浮点数精度丢失](#浮点数精度丢失)
            5. [Number](#number-1)
        2. [string](#string)
            1. [创建字符串](#创建字符串)
            2. [模板字符串](#模板字符串)
            3. [转义序列（escape sequence）](#转义序列escape-sequence)
            4. [字符串属性和方法](#字符串属性和方法)
        3. [boolean](#boolean)
        4. [null](#null)
        5. [undefined](#undefined)
        6. [symbol（待补充）](#symbol待补充)
    2. [对象类型简介](#对象类型简介)
    3. [原始类型和对象类型区别](#原始类型和对象类型区别)
    4. [数据类型转换](#数据类型转换)
        1. [原始数据类型转换](#原始数据类型转换)
8. [javascript面向对象编程](#javascript面向对象编程)
    1. [javascript对象与传统面向对象的不同](#javascript对象与传统面向对象的不同)
    2. [对象原型和原型链](#对象原型和原型链)
        1. [原型链关系](#原型链关系)
        2. [Object.prototype.isPrototypeOf()判断原型](#objectprototypeisprototypeof判断原型)
        3. [Object.getPrototypeOf()&Object.setPrototypeOf()访问设置原型](#objectgetprototypeofobjectsetprototypeof访问设置原型)
    3. [创建对象](#创建对象)
        1. [对象字面量（object literal）](#对象字面量object-literal)
        2. [new内置对象类型](#new内置对象类型)
        3. [new自定义构造函数](#new自定义构造函数)
        4. [Object.create()](#objectcreate)
    4. [对象属性](#对象属性)
        1. [对象属性的访问和设置](#对象属性的访问和设置)
            1. [基本语法](#基本语法)
            2. [对象属性的getter和setter](#对象属性的getter和setter)
            3. [对象属性缩写](#对象属性缩写)
            4. [计算属性名（computed property name）](#计算属性名computed-property-name)
            5. [symbol属性名](#symbol属性名)
            6. [扩展运算符（spread operator）](#扩展运算符spread-operator)
            7. [对象方法缩写](#对象方法缩写)
        2. [对象属性原型链访问设置过程](#对象属性原型链访问设置过程)
            1. [对象属性原型链访问过程](#对象属性原型链访问过程)
            2. [对象属性原型链设置过程](#对象属性原型链设置过程)
            3. [判断对象属性是否存在](#判断对象属性是否存在)
            4. [对象属性访问设置的错误](#对象属性访问设置的错误)
        3. [对象属性特性](#对象属性特性)
            1. [对象属性特性给属性分类](#对象属性特性给属性分类)
            2. [Object.defineProperties()&Object.defineProperties()设置属性特性](#objectdefinepropertiesobjectdefineproperties设置属性特性)
            3. [Object.getOwnPropertyDescriptor()获取属性特性对象](#objectgetownpropertydescriptor获取属性特性对象)
        4. [删除对象属性](#删除对象属性)
        5. [对象属性遍历](#对象属性遍历)
    5. [对象扩展](#对象扩展)
    6. [对象不变性设置](#对象不变性设置)
    7. [对象序列化](#对象序列化)
    8. [Object原型属性和方法](#object原型属性和方法)
        1. [Object原型方法用例](#object原型方法用例)
        2. [Object.toJSON()](#objecttojson)
    9. [Object静态方法](#object静态方法)
        1. [Object静态方法用例](#object静态方法用例)
9. [javascript数组（array）](#javascript数组array)
    1. [创建数组的方式](#创建数组的方式)
        1. [数组字面量创建数组](#数组字面量创建数组)
        2. [可迭代对象上使用扩展运算符创建数组](#可迭代对象上使用扩展运算符创建数组)
        3. [Array()创建数组](#array创建数组)
        4. [Array.of() & Array.from()创建数组](#arrayof--arrayfrom创建数组)
    2. [数组元素访问和设置](#数组元素访问和设置)
    3. [javascript稀疏数组](#javascript稀疏数组)
    4. [数组长度](#数组长度)
    5. [数组增加删除元素](#数组增加删除元素)
    6. [数组遍历](#数组遍历)
    7. [多维数组](#多维数组)
    8. [类数组对象](#类数组对象)
    9. [数组原型属性和方法](#数组原型属性和方法)
        1. [数组原型属性和方法用例](#数组原型属性和方法用例)
    10. [数组静态属性和方法](#数组静态属性和方法)
        1. [数组静态属性和方法用例](#数组静态属性和方法用例)
10. [javascript函数编程](#javascript函数编程)
    1. [javascript函数和其他编程语言的异同](#javascript函数和其他编程语言的异同)
    2. [函数定义（创建）的方式](#函数定义创建的方式)
        1. [function声明](#function声明)
        2. [function表达式和IIFE](#function表达式和iife)
        3. [箭头函数](#箭头函数)
    3. [函数调用](#函数调用)
        1. [函数作为函数调用](#函数作为函数调用)
        2. [函数作为对象方法调用](#函数作为对象方法调用)
            1. [对象方法中的嵌套函数](#对象方法中的嵌套函数)
        3. [函数作为构造函数被调用](#函数作为构造函数被调用)
        4. [函数使用bind方法显式绑定后调用函数](#函数使用bind方法显式绑定后调用函数)
        5. [函数使用call或apply方法间接调用函数](#函数使用call或apply方法间接调用函数)
        6. [隐式的函数调用](#隐式的函数调用)
    4. [函数参数](#函数参数)
        1. [可选形参和默认形参](#可选形参和默认形参)
        2. [变量长度实参列表](#变量长度实参列表)
            1. [剩余形参](#剩余形参)
            2. [arguments对象](#arguments对象)
        3. [函数调用实参使用扩展运算符](#函数调用实参使用扩展运算符)
        4. [实参解构赋值形参](#实参解构赋值形参)
        5. [实参数据类型](#实参数据类型)
    5. [作为对象的函数](#作为对象的函数)
    6. [函数命名空间（作用域）](#函数命名空间作用域)
    7. [闭包](#闭包)
        1. [词法作用域与闭包](#词法作用域与闭包)
        2. [闭包的应用](#闭包的应用)
            1. [通过闭包访问函数外部作用域标识符](#通过闭包访问函数外部作用域标识符)
            2. [通过闭包设置函数外部作用域标识符](#通过闭包设置函数外部作用域标识符)
            3. [对象方法通过闭包共享方法外部作用域标识符](#对象方法通过闭包共享方法外部作用域标识符)
        3. [闭包生命周期](#闭包生命周期)
        4. [闭包的缺点](#闭包的缺点)
    8. [作为对象的函数编程](#作为对象的函数编程)
        1. [使用函数处理数组](#使用函数处理数组)
        2. [高阶函数](#高阶函数)
        3. [偏函数](#偏函数)
        4. [记忆函数](#记忆函数)
    9. [Function构造函数](#function构造函数)
    10. [函数的属性和方法](#函数的属性和方法)
11. [javascript_class](#javascript_class)
    1. [工厂函数模拟类](#工厂函数模拟类)
    2. [构造函数模拟类](#构造函数模拟类)
    3. [class关键字创建类](#class关键字创建类)
    4. [类的getter，setter和其他对象语法](#类的gettersetter和其他对象语法)
    5. [类的静态方法](#类的静态方法)
    6. [类也是对象](#类也是对象)
    7. [类继承](#类继承)
        1. [原型继承](#原型继承)
        2. [extends和super关键字实现类继承](#extends和super关键字实现类继承)
    8. [委托代替继承](#委托代替继承)
    9. [抽象类和整章类例子](#抽象类和整章类例子)
12. [javascript_module](#javascript_module)
    1. [模块](#模块)
    2. [ES模块前的模块化方法](#es模块前的模块化方法)
    3. [ES模块](#es模块)
        1. [ES模块导出](#es模块导出)
        2. [ES模块导入](#es模块导入)
        3. [按需导入模块](#按需导入模块)
        4. [用于合并的模块](#用于合并的模块)
13. [javascript迭代器和生成器](#javascript迭代器和生成器)
    1. [迭代器](#迭代器)
    2. [生成器](#生成器)
        1. [生成器原型方法](#生成器原型方法)
14. [异步javascript](#异步javascript)
    1. [单线程的javascript](#单线程的javascript)
    2. [javascript异步模型](#javascript异步模型)
    3. [异步javascript解决方案](#异步javascript解决方案)
    4. [promise](#promise)
        1. [创建未决的promise对象](#创建未决的promise对象)
        2. [promise原型方法](#promise原型方法)
        3. [promise静态方法](#promise静态方法)
            1. [Promise静态方法用例](#promise静态方法用例)
    5. [async/await](#asyncawait)
15. [javascript元编程（待整理）](#javascript元编程待整理)
16. [javascript错误处理](#javascript错误处理)
    1. [error事件](#error事件)
17. [代码测试](#代码测试)
18. [javascript标准库](#javascript标准库)
    1. [Map](#map)
        1. [Map用例](#map用例)
    2. [WeakMap](#weakmap)
        1. [WeakMap用例](#weakmap用例)
    3. [Set](#set)
        1. [Set用例](#set用例)
    4. [WeakSet](#weakset)
        1. [WeakSet用例](#weakset用例)
    5. [Date](#date)
    6. [Math](#math)
        1. [Math用例](#math用例)
        2. [Regexp](#regexp)
    7. [Regexp](#regexp-1)
        1. [Regexp用例](#regexp用例)

## 使用javascript
* javascript使用类型
* javasript调用策略

[回到顶部](#javascript_docs)

### JavaScript使用类型
* 外部脚本
* 内部JavaScript
* 内部JavaScript处理器
```html
<!-- 外部脚本 -->
<head>
    <script src="script.js" async></script>
</head>

<body>
    <!-- 在 </body> 标签结束前插入 -->
    <script>
    // 在此编写 JavaScript 代码
    </script>
</body>

<body>
    <!-- 不建议这样做。 这将使 JavaScript 污染到 HTML -->
    <button onclick="createParagraph()">clike me</button> 
</body>
```

[回到顶部](#javascript_docs)


### javasript调用策略
javascript 需要HTML元素渲染出来后才能对元素进行管理，否则代码会出错，解决这个问题的方法：
* DOMContentLoaded 事件触发脚本调用
* async异步javascript。如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 async
* defer延迟javascript。如果脚本需要等待解析，且依赖于其它脚本，调用这些脚本时应使用 defer

[回到顶部](#javascript_docs)


#### DOMContentLoaded事件触发javascript调用
监听浏览器的`DOMContentLoaded"`事件，在HTML 文档体加载、解释完毕后加载脚本，避免出错
```javascript
document.addEventListener("DOMContentLoaded", function() {
  // ...
})
```
[回到顶部](#javascript_docs)

#### async异步javascript
async 使用原因：把脚本元素放在文档体的底端,这样脚本就可以在 HTML 解析完毕后加载了, 此方案以及 DOMContentLoaded 方案的问题是：只有在所有 HTML DOM 加载完成后才开始脚本的加载/解析过程。对于有大量 JavaScript 代码的大型网站，可能会带来显著的性能损耗。这也是脚本 async 特性诞生的初衷。


async 属性指示异步执行脚本，使得脚本不会阻塞页面渲染，只能用于外部脚。但脚本的运行次序就无法控制。当页面的脚本之间彼此独立，且不依赖于本页面的其它任何脚本时，async 是最理想的选择
```javascript
<script src="script.js" async></script>
```

[回到顶部](#javascript_docs)


#### defer延迟javascript
defer属性通知浏览器在该脚本将在文档完成解析后，触发 DOMContentLoaded 事件前执行。 defer 属性的脚本将按照在页面中出现的顺序加载

```javascript
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script.js"></script>
```

[回到顶部](#javascript_docs)

## javascript_intro
* 什么是javascript
* javascript用途
* 注释
* 关键字（保留字）

### 什么是javascript
JavaScript 是面向对象，基于原型，动态，单线程，命令式和声明式兼备，解释型编程语言：
* 面向对象和基于原型（参考 面向对象程序设计部分）
* 动态（非静态）：动态修改数据类型
* 单线程：JavaScript 传统上是单线程的。即使有多个内核，也只能在单一线程上运行多个任务，此线程称为主线程（main thread）。单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。CPU大多数时候都是空闲的
    * 单线程的原因：作为作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。如果javascript是多线程的，那么当两个线程同时对dom进行一项操作，例如一个向其添加事件，而另一个删除了这个dom，就会出现错误
* 命令式，声明式，解释型语言。
    * 命令式，需要指定具体的实现步骤
    * 声明式，指定被实现的行为，如何实现已经被封装好，例如函数式编程的实现
    * 解释型（非编译）：虽然JavaScript转换器都使用即时编译（just-in-time compiling）, 但编译是在代码运行中而非之前发生的，所以JavaScript仍然被认为是一种解释性语言（编译型语言代码需要先编译成另一种形式才得以运行）

[回到顶部](#javascript_docs)

### javascript用途
* DOM改变页面
* 表单数据存储与验证
* 页面交互
* 借助API实现功能
    * 浏览器内置API
    * 第三方API

[回到顶部](#javascript_docs)


### 注释
```javascript
// This is a single-line comment.
/* This is also a comment */ // and here is another comment.
/*
 * This is a multi-line comment. The extra * characters at the start of
 * each line are not a required part of the syntax they just look cool!
 */
```

[回到顶部](#javascript_docs)


### 关键字
保留字（reseverd word），或关键字（keyword):

| keyword                           |
| --------------------------------- |
| as async  await                   |
| break                             |
| case catch class const continue   |
| debugger default delete do        |
| else export extends               |
| false finally for from function   |
| get                               |
| if import in instanceof           |
| let                               |
| new null                          |
| of                                |
| return                            |
| set static super switch           |
| target this throw true try typeof |
| var void                          |
| while with                        |
| yield                             |
             

| keyword may be must in future verson                       |
| ---------------------------------------------------------- |
| enum implements interface package private protected public |
             

[回到顶部](#javascript_docs)

## javascript客户端web应用生命周期
javascript客户端web应用生命周期（client-side web application lifecycle）：
* people: enter url/ click a link
* browser(cient): generate a request -> set to server
* server: send response to browser(client)
* browser(client): process(处理) html/css/javascript & build a apge
    * parse（解析）HTML -> build dom
    * execute javascript code
* browser(client): monitor(监视) event loop，processing events at a time（事件发送立刻处理）
* people: interact（交互） with page elements
* people: close browser(client) -> app lifecycle end


more in secrets of javascript part 1 chapter2
[回到顶部](#javascript_docs)


## javascript内存管理
现在javascript基本是基于v8引擎解析运行

一般过程：
* javascript代码
* parser解析器 --> 转换为 抽象语法树（AST）
    * 词法分析：将代码拆解为token，即`let | a | = | b`这种
    * 语法分析：根据生成的token转换为ast
* Ignition解释器(interpreter)
    * --> 将ast转换为bytecode字节码执行。字节码比机器码占用内存小，生成速度加快，虽然执行效率不如机器码
    * --> feedback反馈 ->收集 优化编译器trubofan需要的信息 -->将字节码转换为优化的机器码
        
预解析（pre-prase）或惰性解析（lazy-prase）：完全解析需要等待时间，预解析只会验证函数语法，解析函数声明，确定函数作用域，调用函数才完全解析。

查看字节码
```terminal
node --print-bytecode index.js
```

[回到顶部](#javascript_docs)


## javascript变量
* 标识符
* 变量声明
* 变量解构赋值
* 变量作用域
* 执行上下文
* 执行上下文与变量作用域的区别

[回到顶部](#javascript_docs)

### 标识符
javascript标识符命名规则：
* 开头是 `_ letter $`
* 后续可以是 `_ letter number $`
* 不可以是关键字(keyword | reserved word)

[回到顶部](#javascript_docs)

### 变量声明
* 无关键字|var|let|const变量声明的区别
* 块级声明
    * const块级声明限制
    * 全局块级声明

[回到顶部](#javascript_docs)

#### 无关键字|var|let|const变量声明的区别
可以使用var，let和const关键字声明变量，非严格模式下可以不使用关键字声明变量，区别是：
* 直接赋值，不使用关键字声明。在非严格模式下，如果变量没有声明，它将赋值为全局对象（浏览器中的 window，nodejs中的global）的一个属性（（在严格模式下，给未声明的变量赋值，会抛出ReferenceError错误）。避免这个问题，可以使用`use strict`
* var 关键字用来声明局部变量和全局变量，具体看所在的作用域。
* let和const 关键字声明块级变量。所有的声明都会被提升到它们的作用域顶部, 然而，let 和 const 有一个叫暂时性死区的概念（TDZ，Temporal Dead Zone）。虽然声明被提升了，但有一段时间在进入作用域和被声明之间它们是不能被访问的。const 声明一个只读的常量。一旦声明，常量的值就不能改变(如果声明是一个对象，那么不能改变的是对象的引用地址)
* 建议：推荐 const 作为所有变量的默认声明，除非它们之后会被重新分配，则使用 let，var 应该尽可能的避免使用


变量异常：用 var 或 let 语句声明的变量，如果没有赋初始值，则其值为 undefined, 如果访问一个未声明的变量会导致抛出一个引用错误（ReferenceError）异常

[回到顶部](#javascript_docs)


#### 块级声明
块级声明的变量仅在声明所在的作用域内可以被访问。块级作用域通常在以下情况被创建：
1. 函数内部
2. 代码块内部（花括号包裹）

块级声明的关键字是`let | const`


**同一个块级作用域**，块级声明不允许重复声明,试图这样做会跑出一个`SyntaxError`
```javascript
let foo = 'bar'
let foo = 'baz' // 'SyntaxError'
```

[回到顶部](#javascript_docs)


##### const 常量声明限制
* 常量必须被初始化为某个值
* 不可以通过重新赋值改变其值，也不可以在代码运行时重新声明。试图对const声明的常量进行赋值会抛出`TypeError`错误。
* const 声明对象变量，并不会阻止对象变量成员的修改
```javascript
const foo = 'bar'
foo = 'baz' // 'TypeError'

// === const 与对象
const person = {
  name: "liu"
}
// works
person.name = "liuyaohui"
// throws an error
person = {
  name: "liuyaohui"
}
```

const声明的变量如果在循环迭代总被改变，会抛出`TypeError`错误

const声明的变量可以在`for-of | for-in`中使用
```javascript
var funcs = []
// throws an error after one iteration
for (const i = 0 i < 10 i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// === 可以在for in 或 for of 中使用
var funcs = [],
  object = {
    a: true,
    b: true,
    c: true
  }

// doesn't cause an error
for (const key in object) {
  funcs.push(function() {
    console.log(key)
  })
}

funcs.forEach(function(func) {
  func() // outputs "a", then "b", then "c"
})
```

[回到顶部](#javascript_docs)

##### 全局块级声明
在全局作用域使用`var`声明变量时，会创建一个全局变量，并成为全局对象(window | global)的一个属性

> 若想在全局对象上访问变量，如浏览器跨帧或窗口访问代码时，使用`var`变量声明是非常普遍的。
```javascript
// in a browser
var RegExp = "Hello!"
console.log(window.RegExp)     // "Hello!"

var ncz = "Hi!"
console.log(window.ncz)        // "Hi!"
```

在全局作用域使用`let | const`声明变量，不会将任何属性添加到全局对象上
```javascript
// in a browser
let RegExp = "Hello!"
console.log(RegExp)                    // "Hello!"
console.log(window.RegExp === RegExp)  // false

const ncz = "Hi!"
console.log(ncz)                       // "Hi!"
console.log("ncz" in window)           // false
```

[回到顶部](#javascript_docs)

### 变量解构赋值
解构赋值，将`=`运算符的右操作数（right operand）中属于结构对象（structural object），解构赋值为`=`运算符的左操作数（left operand）中的变量，这些变量使用数组或对象字面量的语法

解构赋值在函数调用中实参赋值给形参同样可以发挥作用，后面会涉及

[回到顶部](#javascript_docs)

#### 数组字面量语法解构
数组语法解构，数组语法解构可以
* 对数组以及可迭代对象元素根据元素顺序进行解构
* 跳过元素解构赋值
* 像函数剩余形参一样使用`...`把剩余的元素保存到数组中


```javascript
// 数组解构
let [x,y] = [1,2] // Same as let x=1, y=2
[x,y] = [x+1,y+1] // Same as x = x + 1, y = y + 1
[x,y] = [y,x] // Swap the value of the two variables
[x,y] // => [3,2]: the incremented and swapped values

// ===
let o = { x: 1, y: 2 } // The object we'll loop over
for (const [name, value] of Object.entries(o)) {
    console.log(name, value) // Prints "x 1" and "y 2"
}

// 数组跳过（skip）解构
let [x,y] = [1] // x == 1 y == undefined
[x,y] = [1,2,3] // x == 1 y == 2
[,x,,y] = [1,2,3,4] // x == 2 y == 4

// 可迭代对象都可以通过数组解构语法解构元素
let [first, ...rest] = "Hello" // first == "H" rest == ["e","l","l","o"]
// 剩余数组元素解构
let [x, ...y] = [1,2,3,4] // y == [2,3,4]
```

#### 对象字面量语法解构
对象字面量语法将赋值运算符右边的对象的与左操作符中的同名变量的属性 解构赋值给与属性同名变量，如果对象中不存在同名属性，则赋值为undefined，也可以将使用`{proprety: variable_name}`的方式赋值给一个不同名变量

对象字面量语法解构也可以在最后像函剩余形参一样将剩余的对像放到这个对象中（不一样的是，函数中的剩余形参是一个数组，数组字面量语法解构也是要给数组，而这个`...`剩余解构的是一个对象）

建议，如果不是同名的变量名，将对象属性赋值给另一个名称的变量，对象解构语法并不是那么简洁。
```javascript
let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0} // A RGBA color
let {r, g, b} = transparent // r == 0.0 g == 0.0 b == 0.0

// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
const {sin, cos, tan} = Math

// Same as const cosine = Math.cos, tangent = Math.tan
const { cos: cosine, tan: tangent } = Math

// 剩余对象属性解构
let o = {
    name: 'liu',
    years: 24,
    gender: 'man'
}

let { name, ...rest } = o
// => name: 'liu'
// => rest: {years: 24, gender: "man"}
```

[回到顶部](#javascript_docs)

#### 多重解构
对于多重解构，会是得代码很难读写，当嵌套复杂时候，建议使用传统的赋值语句
```javascript
let [a, [b, c]] = [1, [2,2.5], 3] // a == 1 b == 2 c == 2.5

let points = [{x: 1, y: 2}, {x: 3, y: 4}] // An array of two point objects
let [{x: x1, y: y1}, {x: x2, y: y2}] = points // destructured into 4 variables.
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true
```

[回到顶部](#javascript_docs)

### 变量作用域
* 为什么有作用域
* 词法作用域
* 作用域分类
* 词法作用域标识符注册
* 作用域查找与作用域链
[回到顶部](#javascript_docs)


#### 为什么有作用域
变量的引入：编程语言最基本的功能就是通过变量的访问或者修改保存程序的状态。

变量引入程序给我们带来了一下问题：
1. 变量存储在哪里
2. 如何找到这个变量


作用域正是为解决这个问题而设计的，作用域是收集和维护已经声明的标识符(变量)查找列表，确定变量（标识符）的访问规则，作用域还起到隔离变量的作用，使得不同作用域下同名变量不会有冲突。

[回到顶部](#javascript_docs)

#### 词法作用域
词法作用域是定义在词法阶段的作用域，由代码块在哪里决定的）大多数变成编程语言采用的都是词法作用域,JavaScript 也是如此）

> 动态作用域不是在代码编写时静态决定的，而是在执行过程中被确定,动态作用域使用函数调用的位置决定哪些变量你可以使用

[回到顶部](#javascript_docs)


#### 词法作用域分类
无论何时创建函数，都会创建一个与之关联的词法作用域，存储在函数的内部属性`function_name.[[environment]`上，通过这个可以访问到函数定义的词法作用域


词法作用域可以分为三类：
1. 全局作用域
  * 在最外层定义的变量，对象和函数
  * 所有为声明直接赋值的变量自动声明为拥有全局作用域（严格模式下报错）
  * 所有window对象的属性拥有全局作用域

> 全局作用域有个弊端：如果变量，对象，函数等都定义在全局作用域，就会 污染全局命名空间, 容易引起命名冲突。为了避免这个问题，很多库都是用IIFE避免命名冲突

2. 函数作用域，声明在函数内部的变量

3. 块级作用域，可通过`let | const`声明，所声明的变量在指定块的作用域内能被访问
  * 在函数内容或者代码块（花括号包裹）内部声明
  * 块级作用域变量声明不会进行变量提升（暂时性死区）
  * 禁止重复声明

[回到顶部](#javascript_docs)


#### 词法作用域注册标记符
* 全局作用域注册
    * 注册函数（不是箭头函数和函数表达式）标记符（注意，不关注函数内部），标识符已经才能在，则重写该标识符的值
    * 注册函数外（outside function）关键字是var的变量，注册函数外（outside function），块外（outside block）的关键字是let和const的变量。对于这些变量，如果还没注册，就注册初始化为undefined
* 函数词法作用域注册
    * 首先创建 argument和函数形参（parameter）的标识符
    * 注册函数（不是箭头函数和函数表达式）外（outside function）关键字是var的变量，注册函数外（outside function），块外（outside block）的关键字是let和const的变量
* 块级词法作用域注册
    * let, const变量声明并初始化为undefined


变量和函数提升。因为作用域在编译阶段（解释阶段）就已经确定了，所以在作用域的任何位置，都可以访问到作用域中的变量，该现象称为变量和函数提升。根据词法作用域标识符注册规则，表现为：
* 函数被优先提升（标识符已经才能在，则重写该标识符的值），函数表达式不会被提升
* 通过var定义的变量，在赋值前可以访问到它的值：undefined
* let关键字和const声明的块级作用域变量虽然也存在变量提升，但并没有进行初始化，在声明（初始化）语句前，它们是不可访问的，试图访问会抛出一个`ReferenceError`，这被称为“暂时性死区”（`TDZ temporal dead zone`）

```javascript
// 函数提升
sayHi()
function sayHi() {
  // 变量提升
  console.log(name) // undefined
  // 块级变量暂时性死区
  console.log(age) // refreence error
  var name = 'Lydia'
  let age = 21
}
```

验证let是否存在变量提升
```javascript
// 如果不存在变量提升
// console.log(name)就会输出ConardLi
// 结果却抛出了ReferenceError
let name = 'ConardLi'
{
  console.log(name) // Uncaught ReferenceError: name is not defined
  let name = 'code秘密花园'
}
```

[回到顶部](#javascript_docs)


#### 作用域查找与作用域链
查询可以分为LHS(left-hand-side)和RHS(right-hand-side)查询
* 变量出现在左侧进行LHS查询。**查找变量本身**
* 出现在右侧进行RHS查询 **查找变量的值**

作用域链：作用域是分层的，内层作用域可以访问外层作用域的变量，在当前作用域无法找到某个变量时，就会在外层嵌套作用域中继续查找，反之则不行。


作用域查找异常：
1. RHS 查询在所有嵌套的作用域中遍寻不到所需的变量，引擎就会抛出 ReferenceError 异常
2. **严格模式中**，LHS 查询失败时，并不会创建并返回一个全局变量，引擎会抛出同 RHS 查询失败时类似的 ReferenceError 异常。（非严格模式下会创建变量）
3. 如果 RHS 查询找到了一个变量，但是你尝试对这个变量的值进行不合理的操作，引擎会抛出另外一种类型的异常，叫作 TypeError

[回到顶部](#javascript_docs)

### 执行上下文
执行上下文：JavaScript执行环境的抽象概念，JavaScript代码在执行上下文中被执行时产生。

* 执行上下文分类
* 执行上下文生命周期
* 执行上下文栈

[回到顶部](#javascript_docs)


#### 执行上下文分类
分为全局执行上下文和函数执行上下文
1. 全局执行上下文（global execution context）
    * 创建时间：javascript程序执行时已经创建全局执行上下文
    * 数量限制：一个程序只存在一个全局执行上下文
    * 任何不在函数内部的代码都在全局上下文中。
    * 任务：创建一个全局对象，浏览器中这个全局对象是 window 对象；将 this 指针指向这个全局对象。
2. 函数执行上下文。（function execution context）
    * 创建时间：函数被调用时, 都会为该函数创建一个新的上下文。
    * 数量：一个程序中可以存在任意数量的函数执行上下文。
3. Eval 函数执行上下文（可以忽略）： 运行在 eval 函数中的代码也有自己的执行上下文，不建议使用Eval函数，所以不在详细介绍Eval 函数执行上下文

[回到顶部](#javascript_docs)

#### 执行上下文生命周期
1. 创建阶段。需要完成三件事：
    * this 绑定，确定this的指向
    * 创建变量环境。
        * 不同的是只用来存储 var 变量绑定（变量初始化为undefined）和函数
        * 保存外部环境的引用，用于访问外部环境
    * 创建词法环境。词法环境是标识符-变量的映射结构。
        * 绑定let和const声明的作用域内的标识符（该变量未被初始化）
        * 保存外部环境的引用，用于访问外部环境
    
2. 执行阶段。执行变量赋值、代码执行

3. 回收阶段。执行上下文出栈，等待垃圾回收该执行上下文



[回到顶部](#javascript_docs)

#### 执行上下文栈
JavaScript 引擎创建了执行上下文栈来管理执行上下文。JavaScript执行在单线程上，所有的代码都是排队执行

1. 第一次执行代码时，建一个全局的执行上下文并且压入当前执行栈
2. 遇到一个函数调用，它会为该函数创建一个新的执行上下文并压入栈的顶部。函数执行结束时，该执行上下文从栈中弹出。

[回到顶部](#javascript_docs)

### 执行上下文与作用域的区别
JavaScript 属于解释型语言，执行JavaScript分为两个阶段：
1. 解释阶段，由编译器负责
  * 首先进行分词/词法分析（Tokenizing/Lexing）：将代码字符串分解为token（词法单元)。如程序`var a = 2`这段程序通常会被分解成为下面词法单元：`var、a、=、2 、`(空格是否会被当作词法单元，取决于空格在这门语言中是否具有意义。)
  * 解析/语法分析（Parsing）：token转换为AST(抽象语法树)
  * 编译器开始进行代码生成（将AST转换为机器可执行的代码），并且确定作用域规则（遇到变量声明和函数声明，编译器询问当前作用域是否存在已经存在该名称的标识符，如果不存在，则在作用域注册）

2. 执行阶段，有JavaScript引擎负责
  * 创建执行上下文
  * 执行代码
    * 执行代码需要使用变量，就使用作用域查找
  * 垃圾回收

所以，JavaScript解释阶段（编译阶段）已经确定作用域规则而执行上下文属于代码执行阶段，但在代码执行之前创建

一个作用域下可能包含若干个上下文环境，也有可能从来没有过上下文环境（函数从来就没有被调用过）；同一个作用域下，不同的调用会产生不同的执行上下文环境

[回到顶部](#javascript_docs)



## javascript运算符，表达式和语句


[回到顶部](#javascript_docs)


### javascript运算符
| Operator             | 描述             | 结合方向 | 操作数 | operand type     |
| -------------------- | ---------------- | -------- | ------ | ---------------- |
| ++                   | 前加或后加       | R        | 1      | lval→num         |
| --                   | 前减或减去       | R        | 1      | lval→num         |
| -                    | 负值             | R        | 1      | num→num          |
| +                    | 正值或转换为num  | R        | 1      | any→num          |
| ~                    | 按位非           | R        | 1      | int→int          |
| !                    | 非               | R        | 1      | bool→bool        |
| delete               | 删除对象属性     | R        | 1      | lval→bool        |
| typeof               | 判断数据类型     | R        | 1      | any→str          |
| void                 | 返回undefined    | R        | 1      | any→undef        |
| **                   | 幂运算           | R        | 2      | num,num→num      |
| *, /, %              | 乘除模运算       | L        | 2      | num,num→num      |
| +, -                 | 加减运算         | L        | 2      | num,num→num      |
| +                    | 连接字符串       | L        | 2      | str,str→str      |
| <<                   | 位左移           | L        | 2      | int,int→int      |
| >>                   | 位右移           | L        | 2      | int,int→int      |
| >>>                  | 位右移           | L        | 2      | int,int→int      |
| <, <=,>, >=          | 数字比较         | L        | 2      | num,num→bool     |
| <, <=,>, >=          | 字符串比较       | L        | 2      | str,str→bool     |
| instanceof           | 判断原型         | L        | 2      | obj,func→bool    |
| in                   | 判断属性是否存在 | L        | 2      | any,obj→bool     |
| ==                   | 判断非严格相等   | L        | 2      | any,any→bool     |
| !=                   | 判断非严格不相等 | L        | 2      | any,any→bool     |
| ===                  | 判断严格相等     | L        | 2      | any,any→bool     |
| !==                  | 判断严格不相等   | L        | 2      | any,any→bool     |
| &                    | 按位与           | L        | 2      | int,int→int      |
| ^                    | 按位异或         | L        | 2      | int,int→int      |
| `|`                  | 按位或           | L        | 2      | int,int→int      |
| &&                   | 逻辑与           | L        | 2      | any,any→any      |
| `||`                 | 逻辑或           | L        | 2      | any,any→any      |
| ??                   | 是否先定义       | L        | 2      | any,any→any      |
| ?:                   | 三元选择         | R        | 3      | bool,any,any→any |
| =                    | 赋值运算         | R        | 2      | lval,any→any     |
| **=, *=, /=, %=      | 赋值运算         | R        | 2      | lval,any→any     |
| `+=, -=, &=, ^=, |=` | 赋值运算         | R        | 2      | lval,any→any     |
| <<=, >>=, >>>=       | 赋值运算         | R        | 2      | lval,any→any     |
| ,                    | 逗号运算         | L        | 2      | any,any→any      |


javascript运算符可以分为：
1. 一元算术运算符（ Unary Arithmetic Operators）
    * ++（Increment）：前加或后加
    * --（Decrement）：前减或减去
    * +（Unary plus）：转换为number
    * -（Unary minus）：转换为number并改变符号
2. 位运算符（Bitwise Operators）：32位二进制运算
    * ~（Bitwise NOT）：按位非（Bitwise NOT），对应位取反
    * &（Bitwise AND）：按位与（与其他位运算符不同，有较低运算等级，比逻辑运算符高），对应位都是1，结果才为1，只要一个为0，都是0
    * |（Bitwise OR）：按位或（与其他位运算符不同，有较低运算等级，比逻辑运算符高），都应数位都是0，结果才为0，只要一个为1，都是1
    * ^（Bitwise XOR）：按位异或（与其他位运算符不同，有较低运算等级，比逻辑运算符高
    * <<（Shift left）：位左移，高位溢出截去，低位补0，移动一位相当于乘上2
    * `>>`（Shift right with sign）：位右移，低位溢出截去，高位根据符号补充，对于正数，高位都是补充0，对于负数，高位都是补充1，移动一位相当于除以2的一个整数
    * `>>>`（Shift right with zero fill）：位右移，低位溢出截去，高位都是补充0，所以也叫无符号右移
    * 补充：原码，正数的二进制表示。对原码取反得到反码，反码加1得到补码，补码表示负数。一个负数二进制数，先减去1，再反码，得到相应正数二进制，就可以得到十进制的负数
3. 二元算术运算符（Arithmetic operation）
    * `+` （addition）
    * `-`（subtraction）
    * `*` （multiplication）
    * `/` （division）
    * `**` 乘方 （exponentiation）相当于以前的 Math.pow()
    * `%` 求模运算符，将两个数相除并返回余数（modulo: remainder after division）
4. 关系运算符（Relational operator）:用于判断两个值之间关系（相等，大于，小于，大于等于，少于等于），然后返回true或false
    * 比较运算符（ Comparison Operators）：`< | > | <= | >=`
    * in：判断属性是否存在
    * instanceof：实际上` o instanceof f` 相当于f.proto原型链上是否有对象o
    * 相等和不等运算符（ Equality and Inequality Operators）：`== | === | != | !==`
5. 逻辑运算符
    * `&&`（Logical AND）
    * `||`（Logical OR）
    * `!`（Logical NOT）（具有很高的运算符优先级）

6. 先定义运算符??（first-defined operator）：如果左操作数不是null和undefined，返回左操作数，否则返回右操作数，` a ?? b`相当于`(a !== null && a !== undefined) ? a : b`
7. 条件运算符`?:`：
8. 赋值运算符
    * =
    * 赋值运算符与二元运算符的简写组合：`+= | -= | *= | /= | %= | **= |`
    * 赋值运算符与位运算的简写组合`^= , |=, &=, <<=, >>=, >>>=`
9. 其他：
    * eval运算符（Evaluation）
    * delete运算符：删除对象属性（具有较高优先级）
    * typeof运算符：类型检测（具有较高优先级）
    * void运算符：返回undefined（具有较高优先级）
    * await运算符
    * 逗号运算符（comma operator）：（运算符中最低优先级）


运算符用例：

```javascript
// === + 运算
1 + 2 // => 3: addition
"1" + "2" // => "12": concatenation
"1" + 2 // => "12": concatenation after number-to-string
1 + {} // => "1[object Object]": concatenation after object-to-string
true + true // => 2: addition after boolean-to-number
2 + null // => 2: addition after null converts to 0
2 + undefined // => NaN: addition after undefined converts to NaN
// === end + 运算


// === 位运算
// 0...1111
// 取反 => 0xfffffff0
// 11...0000
// 是一个负数，-1
// 11..01111
//取反00...10000 => 16 => -16
~0x0F  // evaluates to 0xFFFFFFF0,or −16


// 位左移
// 高位溢出截去，低位补0
// 7 => 0...0000 0111
// => 0...0001 1100 = 16 + 8 + 4 = 28
// 移动一位相当于乘上2
// 7 * 2 * 2 = 28
7 << 2 // =>  28

// 位有符号右移
// 低位溢出截去，正数的高位补0
// 7 => 0...0111
// => 00...011 = 2+1
7 >> 1 // => 3

// 7 => 0...0111
// 取反 => 1...1000
// 加1 => 1...1001 = -7
// 右移一位,负数的高位补1,=>  11...1100
// 转为正数
// 减1 => 11...1011
// 取反 => 00...0100 => 4 => -4
−7 >> 1  // =>  −4

// 位无符号右移
// 溢出总是填充0
// 7 => 0...0111
// 取反 => 1...1000
// 加1 => 1...1001 = -7
// 右移一位，溢出总是补0 => 01...100 => 0x7ffffffc
// 2147483644
-7 >>> 1 // => 2147483644



// 按位与运算
// 0001 0010 0011 0100
// 0000 0000 1111 1111
// => 0000 0000 0011 0100
0x1234 & 0x00FF // => 0x0034

// 按位与运算
// 0001 0010 0011 0100
// 0000 0000 1111 1111
// => 0001 0010 1111 1111
0x1234 | 0x00FF  // => 0x12FF

// 按位异或
// 1111 1111 0000 0000
// 1111 0000 1111 0000
// 异或 => 0000 1111 1111 0000
// => 0x0ff0
0xFF00 ^ 0xF0F0 // evaluates to 0x0FF0
// === end 位运算
```


[回到顶部](#javascript_docs)


### javascript表达式
常见javascript表达式有：
1. 基本表达式（Primary expression）：不包括其他更简单的表达式，如标识符（variab | constant），字面值（literal），一些关键字（keyword）都是基本表达式
2. 由运算符和操作数一起集合组成的表达式，如一元运算表达，位运算表达式，二元运算表达式，关系表达式，逻辑表达式等
3. 内置类型初始化表达式
    * 函数定义表达式
    * 对象，数组等的初始化表达式（Initializers）
4. 对象属性访问表达式
    * 对象条件访问表达式
5. 函数调用表达式
    * 条件调用表达式
6. new表达式


javascript表达式 用例

```javascript
// === 基本表达式
1.23    // A number literal
"hello"   // A string literal
/pattern/  // A regular expression literal
[] // An empty array，array literal
{} // An empty object with no properties，object literal

// keyword
true // Evalutes to the boolean true value
false // Evaluates to the boolean false value
null // Evaluates to the null value
this // Evaluates to the "current" object

// 变量
i // Evaluates to the value of the variable i.
sum // Evaluates to the value of the variable sum.
undefined // The value of the "undefined" property of the global object
// === end 基本表达式
```

[回到顶部](#javascript_docs)




### javascript语句
javascript常见语句有
1. 空语句（empty stament)：只有`;`
2. 表达式语句（Expression Statements）：表达式作为一条语句
3. 声明语句
    * 变量声明
    * 函数声明
    * 类声明
    * 模块导入/导出
4. 条件语句（conditional statement）
    * if...else
    * if...else if... else
    * switch
5. 循环语句（loop statement）
    * for
    * while
    * do{}while
    * for/of：新增的用于遍历可迭代对象（ iterable objects）的循环语句
    * for/in：javascript很早就有用于遍历对象属性的循环语句
6. 跳转语句（jump statement）
    * continute statement：跳转到下一次迭代
    * break statement：结束迭代
    * labeled statement：`identifier: statement`，给语句标签化之后，可以再程序中引用
    * return statement：返回调用函数的值，并结束函数调用
    * yield：statement：生成器函数中的语句
    * throw statement：抛出异常
    * try/catch/finally：处理异常的语句
7.  其他语句
    * with
    * `'use strict'`

>  语句块（statement block）：由`{}`包围的若干语句组成，也叫组合语句（compound statement）

javascript语句用例：

```javascript
// condition statement -- switch
function convert(x) {
  switch (typeof x) {
    case "number": // Convert the number to a hexadecimal integer
      return x.toString(16);
    case "string": // Return the string enclosed in quotes
      return '"' + x + '"'
    default: // Convert any other type in the usual way
      return String(x)
  }
}


// identifier: statement
mainloop: while (token !== null) {
  // Code omitted...
  continue mainloop; // Jump to the next iteration of the named loop
  // More code omitted...
}
```

[回到顶部](#javascript_docs)


## javascript数据类型
* 原始数据类型（primitive types）
* 对象类型（object types）

[回到顶部](#javascript_docs)


### 原始数据类型（primitive types）
* number
* string
* boolean
* null
* undefined
* symbol

[回到顶部](#javascript_docs)

#### number
```javascript
// ==== 十进制整数
0
3
10000000

// === hexadecimal (base-16) 十六进制整数
0xff // => 255: (15*16 + 15)
0xBADCAFE // => 195939070

// === 八进制整数
// 浏览器环境下的严格模式不允许使用八进制整数字面量
070 // 56
079 // 序列大于7，当作十进制整数79
0o377 // => 255: (3*64 + 7*8 + 7*1)

// 所有八进制和十六进制的数值进行算术运算都会被转换为十进制
070 + 070 // 56

// === 二进制
0b10101 // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1)

//==== 浮点数
3.14
2345.6789
.333333333333333333
6.02e23 // 6.02 × 10²³
1.4738223E-32 // 1.4738223 × 10⁻³²


```

[回到顶部](#javascript_docs)

##### 下划线数字字面量
下划线（underscore）可以使得数字字面量更具可读性

```javascript
let billion = 1_000_000_000 // Underscore as a thousands separator.
let bytes = 0x89_AB_CD_EF // As a bytes separator.
let bits = 0b0001_1101_0111 // As a nibble separator.
let fraction = 0.123_456_789 // Works in the fractional part, too.
```

[回到顶部](#javascript_docs)

##### 最大安全数字
IEEE 754双精度64位规范的限制：
* 指数位能表示的最大数字：1023(十进制)
* 尾数位能表达的最大数字即尾数位都位1的情况
* 1.111...X 21023 这个结果转换成十进制是1.7976931348623157e+308,这个结果即为`Number.MAX_VALUE`

最大安全数字 `Number.MAX_SAFE_INTEGER`。超出`Number.Max_value`的值为Infinity，超出了`Number.Min_value`的值为-Infinity

```javascript
// 正数除以0,返回Infinity
3/0 // infinity
-3/0 // -infinity
```

[回到顶部](#javascript_docs)


##### NaN
NaN 是一个特殊的数值，用于表示返回数值的操作数未返回数值的情况。
```javascript
// NaN 是 Number类型
typeof NaN // 'Nnumber'

// 其他语言除以0返回错误，ECMAScript 则返回NaN
0/0  // NaN

// ==== 判断NaN
NaN === NaN // false
Naumber.isNaN(value)
Object.is(value1, value2)
```

[回到顶部](#javascript_docs)

##### 浮点数精度丢失
精度丢失。二进制存储的，所以在计算时计算机要把数据先转换成二进制进行计算。

例如计算`0.1+0.2`时，二进制计算发生了精度丢失
  
ECMAScript中的Number类型遵循IEEE 754标准。使用64位固定长度来表示。JavaScript使用的是64位双精度浮点数编码，所以它的符号位占1位，指数位占11位，尾数位占52位
* 符号位就是标识正负的，1表示负，0表示正
* 指数位存储科学计数法的指数
* 尾数位存储科学计数法后的有效数字

```javascript
// 浮点数存在精确性问题，永远不要比较浮点数值
// IEEE754 浮点数运算的通病
0.1 + 0.2 == 0.3 // false

// 一个解决方案是，定义一个误差值（epsilon），使得两数之差小于这个值，
// 然后通过函数判断它们是否近似相等
const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon
approxEqual(0.1 + 0.2, 0.3) // true
```

[回到顶部](#javascript_docs)


##### Number
```javascript
Infinity // A positive number too big to represent
Number.POSITIVE_INFINITY // Same value

-Infinity // A negative number too big to represent
Number.NEGATIVE_INFINITY // The same value

NaN // The not-a-number value
Number.NaN // The same value, written another way
// The following Number properties are defined in ES6
Number.parseInt() // Same as the global parseInt() function
Number.parseFloat() // Same as the global parseFloat() function
Number.isNaN(x) // Is x the NaN value?
Number.isFinite(x) // Is x a number and finite?
Number.isInteger(x) // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON // => 2**-52: smallest difference between numbers
```

[回到顶部](#javascript_docs)

#### string

[回到顶部](#javascript_docs)

##### 创建字符串
字符串字面量使用单引号，双引号，反引号包围

```javascript
// '' "" `` ( single or double quotes or backticks )
"" // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"τ is the ratio of a circle's circumference to its radius"

// es6 backticks
`"She said 'hi'", he said.`
```

[回到顶部](#javascript_docs)


##### 模板字符串
模板字符串好处：
* javascript 长字符串原来通过多个单字符串 `+` 操作符连接起来，或者单行之后结尾`\`进行多行连接为一行，ES6模板语法可以避免这个
* 更好地拼接表达式
* HTML转义，转换字符串使其更加安全地插入到HTML中

```javascript
// 使用 + 连接
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."

// A one-line string written on 3 lines:
"one\
 long\
 line"
// A two-line string written on two lines:
`the newline character at the end of this line
is included literally in this string`


// 如果缩进很重要，可以这样做
let html = `
<div>
    <p> hello world</p>
</div>`.trim() // 使用trim移除起始空行

// 模板字符串中使用表达式
let greeting = `Hello ${ name }.` // greeting == "Hello Bill."

```
[回到顶部](#javascript_docs)


##### 转义序列（escape sequence）
对于非打印字符，可以使用`\`进行转义

| sequence | character represented                                               |
| -------- | ------------------------------------------------------------------- |
| \0       | The NUL character (\u0000)                                          |
| \b       | Backspace (\u0008)                                                  |
| \t       | Horizontal tab (\u0009)                                             |
| \n       | Newline (\u000A)                                                    |
| \v       | Vertical tab (\u000B)                                               |
| \f       | Form feed (\u000C)                                                  |
| \r       | Carriage return (\u000D)                                            |
| \"       | Double quote (\u0022)                                               |
| \'       | Apostrophe or single quote (\u0027)                                 |
| \\       | Backslash (\u005C)                                                  |
| \xnn     | The Unicode character specified by the two hexadecimal digits nn    |
| \unnnn   | The Unicode character specified by the four hexadecimal digits nnnn |
| \u{n}    | The Unicode character specified by the codepoint n, where           |
|          | n is one to six hexadecimal digits between 0 and 10FFFF (ES6)       |

[回到顶部](#javascript_docs)

##### 字符串属性和方法
```typescript
interface String {
  // 返回字符串长度
  readonly length: number;

  // === 访问字符串内单个字符
  // 可以通过index访问当个字符
  // 这是只读属性，所以不能通过index修改原字符串
  readonly [index: number]: string;

  // 第一个参数pos：字符位置
  // 返回值：返回pos位置的字符
  charAt(pos: number): string;
  // 第一个参数pos：字符位置
  // 返回值：返回这个index位置的字符的Unicode
  // 如果没有指定的字符，返回NaN
  charCodeAt(index: number): number;
  // === end 访问字符串内单个字符


  // === 重写一般方法
  // 返回字符串的字符串表达
  toString(): string;
  valueOf(): string;
  // === end 重写一般方法


  // === 查找子串
  // 第一个参数searchString：查找的子串
  // 第二个可选参数position，指定查找开始的位置
  // 如果忽略，默认是0
  // 返回值：从字符串始端方向，position位置开始查找子串
  // 返回子串在字符串第一次出现的位置
  indexOf(searchString: string, position?: number): number;
  // 与indexOf()不一样的是，从末端开始寻找
  // position省略，默认是length-1
  lastIndexOf(searchString: string, position?: number): number;

  // 第一个参数regexp: 字符串或者正则表达式
  // 返回值：返回和regexp参数匹配的第一个子串的位置
  search(regexp: string | RegExp): number;
  // 与search()不一样的是返回值
  // 返回返回和regexp参数匹配的所有子串，放到数组中返回
  // 如果找不到，返回null
  match(regexp: string | RegExp): RegExpMatchArray | null;
  // === end 查找子串

  // === 子串判断
  // 第一个参数searchString：指定要查找的字符串
  // 第二个可选参数position：指定查找的开始位置
  // 如果忽略，默认为0
  // 返回值：判断在position开始，字符串是否是以searchString开始
  startsWith(searchString: string, position?: number): boolean;
  // 第一个参数searchString：指定要查找的字符串
  // 第二个可选参数 endPosition：指定查找的结束位置
  // 如果忽略，默认是length
  // 返回值：判断截止到endPosition上，字符串是否是以searchString结尾
  endsWith(searchString: string, endPosition?: number): boolean;

  // 第一个参数searchString：指定要查找的字符串
  // 第二个可选参数position：指定查找的开始位置
  // 如果忽略，默认是0
  // 返回值：从positon位置开始查找searchString，
  // 找到了返回true，找不到，返回false
  includes(searchString: string, position?: number): boolean;


  // === 返回子串（切片）
  // 第一个参数start：指定子串开始的位置
  // 第二个可选参数end：指定子串结束的位置（不包括end）
  // end忽略，默认是length
  // 返回值：返回start到end（不包括end）的子串，
  substring(start: number, end?: number): string;
  // 第一个可选参数start：指定子串开始的位置
  // start 忽略，默认为0
  // 第二个可选参数end：指定子串结束的位置（不包括end）
  // end 忽略，默认为length
  // 返回值：返回start到end（不包括end）的子串，
  slice(start?: number, end?: number): string;

  // 第一个参数separator：指定分割符
  // separator忽略，则不进行分割
  // 第二个可选参数limit：指定分割的子串数量
  // limit忽略，分割次数不受限制
  // 返回值：根据分隔符，分割limit次数的子串，将子串分别放进数组返回
  split(separator: string | RegExp, limit?: number): string[];
  // === end 返回子串（切片）


  // === 移除空格
  // 移除字符串前导和末尾的空格和line terminator
  trim(): string;
  // 移除字符串前导的空格和line terminator
  trimEnd(): string;
  // 移除字符串末尾的空格和line terminator
  trimStart(): string;
  // === 移除空格结束


  // === 大小写转换
  // 转换字符串中的小写字母为大写字母
  toUpperCase(): string;
  // 转换字符串中的大写字母为小写字母
  toLowerCase(): string;
  // === end 大小写转换


  // === 填充
  // 第一个参数maxLength: 填充后的字符串最大长度，
  // 如果这个长度比字符串长度小，那么返回当前的字符串
  // 第二个可选参数fillString：填充的字符串，
  // fillString 忽略，默认是" "
  // 返回值：返回在字符串始端填充fillString的字符串
  padStart(maxLength: number, fillString?: string): string;
  // 与padStart不同的是从，字符串末端填充fillString的字符串
  padEnd(maxLength: number, fillString?: string): string;
  // === end 填充

  // === 其他
  // 第一个参数count：只当重复的次数
  // 返回值：返回重复count次的字符串
  // 如果count是0，返回empty string
  repeat(count: number): string;

  // 接收若干个字符串参数，若干字符串参数分别添加到字符串末端
  concat(...strings: string[]): string;

  // 第一个参数searchString：查找的字符串或正则表达式
  // 第二个参数replaceString：替换的字符串
  // 返回替换后的字符串
  replace(searchString: string | RegExp, replaceString: string): string;
  // 第一个参数searchString：查找的字符串或正则表达式
  // 第二个参数replacer，是一个函数
  // replacer函数：
  // 第一个参数substring：原字符串
  // 若个其他参数
  // 返回值：返回字符串作为替换的字符串
  replace(searchString: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;

  // 如果属性和方法不存在，从lib.es5.d.ts或其他更新文件中查找补充
}
```

javascript中的字符串是不可以修改的（immutable）,如`replace()|toUpperCase()d`等方法调用不会修改原字符串，而实返回新的字符串


用例：

```javascript
let s = "Hello, world" // Start with some text.
// Obtaining portions of a string
s.substring(1,4) // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.split(", ") // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l") // => 2: position of first letter l
s.indexOf("l", 3) // => 3: position of first "l" at or after 3
s.indexOf("zz") // => -1: s does not include the substring "zz"
s.lastIndexOf("l") // => 10: position of last letter l
// Boolean searching functions in ES6 and later
s.startsWith("Hell") // => true: the string starts with these
s.endsWith("!") // => false: s does not end with that
s.includes("or") // => true: s includes substring "or"
// Creating modified versions of a string
s.replace("llo", "ya") // => "Heya, world"
s.toLowerCase() // => "hello, world"
s.toUpperCase() // => "HELLO, WORLD"
s.normalize() // Unicode NFC normalization: ES6
s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD"
// Inspecting individual (16-bit) characters of a string
s.charAt(0) // => "H": the first character
s.charAt(s.length-1) // => "d": the last character
s.charCodeAt(0) // => 72: 16-bit number at the specified position
s.codePointAt(0) // => 72: ES6, works for codepoints > 16 bits
// String padding functions in ES2017
"x".padStart(3) // => " x": add spaces on the left to a length of 3
"x".padEnd(3) // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*") // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3
// Space trimming functions. trim() is ES5 others ES2019
" test ".trim() // => "test": remove spaces at start and end
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd() // => " test": remove spaces at right. Also trimRight
// Miscellaneous string methods
s.concat("!") // => "Hello, world!": just use + operator instead
"<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6
```

[回到顶部](#javascript_docs)



#### boolean
Boolean：Boolean类型只有true和false 两个值。任何类型都可以转换为与这两个Boolean值等价的值。

```javascript
// falsy values
// 会被转换认为是false 的值
undefined
null
0
-0
NaN
"" // the empty string
```
[回到顶部](#javascript_docs)

#### null
以下场景中使用Null类型：
1. 定义的变量在将来用于保存对象，最好其初始化为null
2. 当一个数据不再需要使用时，通过将其值设置为null来释放其引用，这个做法叫做解除引用

特殊的typeof null，返回的类型是"object"
1. 逻辑角度来看，null值表示一个空对象指针，它代表的其实就是一个空对象，所以使用typeof操作符检测时返回"object"
2. JavaScript 中的值是由一个表示类型的标签和实际数据值表示的(对象的类型标签是 0)，null 代表的是空指针（大多数平台下值为 0x00），因此，null的类型标签也成为了 0，typeof null就错误的返回了"object"


实际上，undefined值是继承自null值得。undefined==null 为true

[回到顶部](#javascript_docs)

#### undefined
Undefined类型只有一个undefined值，表示声明变量单位对变量进行初始化。

以下场景返回undefine：
1. 声明一个变量，但是没有赋值
2. 访问对象上不存在的属性
3. 函数定义了形参，但没有传递实参
4. 函数没有返回值
5. 使用void对表达式求值。ECMAScript 明确规定 void 操作符 对任何表达式求值都返回 undefined 


```javascript
// 特殊地，初始化和尚未声明的变量使用typeof都返回`undefined`
let a
typeof a // undefined
typeof b // undefined
```

[回到顶部](#javascript_docs)

#### symbol（待补充）
```javascript
let strname = "string name" // A string to use as a property name
let symname = Symbol("propname") // A Symbol to use as a property name
typeof strname // => "string": strname is a string
typeof symname // => "symbol": symname is a symbol
let o = {} // Create a new object
o[strname] = 1 // Define a property with a string name
o[symname] = 2 // Define a property with a Symbol name
o[strname] // => 1: access the string-named property
o[symname] // => 2: access the symbol-named property

let s = Symbol("sym_x")
s.toString() // => "Symbol(sym_x)

let s = Symbol.for("shared")
let t = Symbol.for("shared")
s === t // => true
s.toString() // => "Symbol(shared)"
Symbol.keyFor(t) // => "shared"
```

[回到顶部](#javascript_docs)



### 对象类型简介
* Object
* Array
* Function
* Class
* Date
* Math
* etc.

[回到顶部](#javascript_docs)



### 原始类型和对象类型区别
值是否能改变：
* 原始类型值是不可改变的
* 对象类型值是可变的
```javascript
// ===不可以改变的原始值
let name = 'java'
name.toUpperCase() // 输出 'JAVA'
console.log(name) // 输出  'java'
```

内存存放位置：
* 原始类型存储在栈内存（占据空间小、大小固定，是被频繁使用数据）
* 对象类型存储在堆内存（占据空间大、大小不固定）。解释器寻找对象类型所引用的值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

复制操作：
* 复制原始类型，相对于在栈内存复制一个相同的空间，虽然两个值是相同的，内存空间是不同的，两个变量的任何操作互不影响
* 复制对象类型，复制的是栈中存储的地址，两个值都是指向堆内存中的同一空间，对两个变量的操作会相互影响。

比较操作
* 原始类型，比较时会直接比较它们的值
* 对于对象类型，比较时会比较它们的地址

传递方式分为，值传递和引用传递，ECMAScript中所有的函数的参数都是按值传递的，但是
* 原始类型，传递的是他们的值
* 对象类型，传递引用地址的值

[回到顶部](#javascript_docs)

### 数据类型转换

[回到顶部](#javascript_docs)

#### 原始数据类型转换
原始数据类型转换（Type Conversions）
| Value        | to String         | to Number | to Boolean |
| ------------ | ----------------- | --------- | ---------- |
| undefined    | "undefined"       | NaN       | false      |
| null         | "null"            | 0         | false      |
| true         | "true"            | 1         |            |
| false        | "false"           | 0         |            |
| ""           |                   | 0         | false      |
| "1.2"        |                   | 1.2       | true       |
| "one"        |                   | NaN       | true       |
| 0            | "0"               |           | false      |
| -0           | "0"               |           | false      |
| 1            | "1"               |           | true       |
| Infinity     | "Infinity"        |           | true       |
| -Infinity    | "-Infinity"       |           | true       |
| NaN          | "NaN"             |           | false      |
| {}           | see §3.9.3        |           | true       |
| []           | ""                | 0         | true       |
| [9]          | "9"               | 9         | true       |
| ['a']        | use join() method | NaN       | true       |
| function(){} |                   | NaN       | true       |


[回到顶部](#javascript_docs)


## javascript面向对象编程
javascript面向对象编程（javascript object oriented programming）：

* javascript对象与传统面向对象的不同
* 创建对象
* 对象属性
* 对象扩展
* 对象序列化
* Object.prototype方法
* Object.prototype.constructor静态方法

[回到顶部](#javascript_docs)


### javascript对象与传统面向对象的不同
javascript 的对象与传统面向对象语言（如java）不同，javascript具有以下特点。
* JavaScript 基于原型的语言 (prototype-based language)，对象以其原型（prototype）为模板、从原型继承方法和属性
* JavaScript 可以通过定义构造函数来创建具有一组特定的初始属性和属性值的对象。而基于类的语言，在定义类时，通过定义构造器方法来创建该类的实例
* 允许运行时添加或者移除任何对象的属性


[回到顶部](#javascript_docs)


### 对象原型和原型链
每个实例对象（ object ）都有一个私有属性`__proto__`,指向它的构造函数的原型对象（prototype ）,该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null(`Object.proptotype.__proto__ 值为null`)，这种关系被称为原型链 (prototype chain)


[回到顶部](#javascript_docs)

#### 原型链关系
* 每一个对象，都有一个都有一个内部属性`[[prototype]]`指向对象的原型（prototype），可以通过许多浏览器的非标准属性`__proto__`访问设置（或者标准的Object.getPrototypeOf()&Object.setPrototypeOf()访问设置），对象原型链的顶端是`Object.prototype`，因为`Object.prototype.__proto__`是null，`Object.prototype.constructor`则指向`function Object(){}`
* 对于每一个函数
    * 都有显式原型（prototype，不是内部属性`[[prototype]]`） 对象，而`function_name.prototype.constructor` 指向函数本身，而`function_name.prototype.__proto__ == Object.prototype`
    * 每一个函数的内部属性`[[prototype]]`指向`Function.prototype`，而`Fonction.prototype.__proto__ = Object.prototype`, `Function.prototype.constructor = function Function(){}`

```javascript
// foo.prototype.constructor 是函数本身
function foo(){}
foo.prototype
// 浏览器控制台输出
/*
{
    constructor: ƒ foo() 
    __proto__: {
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
        // 还有其他略
}
*/

// 对象的内部属性`[[prototype]]`等于其构造函数的prototype属性
function Person(name) {
    this.name = name
}
let p = new Person('Tom')
p.__proto__ === Person.prototype // true
P.__proto__ === Function.prototype // true


// ===
/*
要点：
1. 对象的内部原型属性指向构造函数的原型
2. 原型关系可以一层层往上追溯，最终指向null
3. 所有函数都是Function的实例，因此`function.__proto = Function.prototype`
*/
function Fn() {}
let fn = new Fn()

fn.__proto__ === Fn.prototype // true

Fn.prototype.__proto__ === Object.prototype // true

Fn.__proto__ === Function.prototype // true

Function.prototype.__proto__ === Object.prototype // true

// ===
let F = function() {} // This is a function object.
let p = F.prototype // This is the prototype object associated with F.
let c = p.constructor // This is the function associated with the prototype.
c === F // => true: F.prototype.constructor === F for any F

// ===
let  = new F() // Create an object o of class F
o.constructor === F // => true: the constructor property specifies the class
```

[回到顶部](#javascript_docs)

#### Object.prototype.isPrototypeOf()判断原型
Object.prototype.isPrototypeOf() 测试一个对象是否存在于另一个对象的原型链上

[回到顶部](#javascript_docs)

#### Object.getPrototypeOf()&Object.setPrototypeOf()访问设置原型
`[[Prototype]]` 可以通过 `Object.getPrototypeOf(obj) 和 Object.setPrototypeOf(obj)` 访问器来访问和设置对象的原型。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 `__proto__`

[回到顶部](#javascript_docs)

### 创建对象
* 对象字面量（object literal）
* new内置对象类型
* new自定义构造函数
* Object.create()

[回到顶部](#javascript_docs)


#### 对象字面量（object literal）
对象字面量中，属性会自动转换为字符串，只有不符合标识符规则的属性需要自定义为字符串
```javascript
// === 对象字面量
let empty = {} // An object with no properties
let point = { x: 0, y: 0 } // Two numeric properties
let p2 = { x: point.x, y: point.y + 1 } // More complex values
let book = {
    "main title": "JavaScript", // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences", // for is reserved, but no quotes.
    author: { // The value of this property is
        firstname: "David", // itself an object.
        surname: "Flanagan"
    }
}
```

[回到顶部](#javascript_docs)

#### new内置对象类型
```javascript
// === new 操作符 + 对象类型()

// 内置构造函数
let o = new Object() // Create an empty object: same as {}.
let a = new Array() // Create an empty array: same as [].
let d = new Date() // Create a Date object representing the current time
let r = new Map() // Create a Map object for key/value mapping

/*
new Object([
  { [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }])
*/
let person = new Object()
person.name = 'liuyaohui'
person.greeting = function() {
  console.log('Hi!' + this.name)
}

// 也可以传递对象参数
let person = new Object({
    name: 'liuyaohui',
    greeting(){
        console.log('Hi! '+this.name)
    }
})
```

[回到顶部](#javascript_docs)

#### new自定义构造函数
```javascript
// === 实例共享原型对象的属性和方法
// ======= 构造函数，创建特定类型的对象
// 缺点：不同实例上的同名函数是不相等
// 借助this的机制，可以将函数的定义转移到构造函数外部来解决问题
function Person(...args){
  //...
}
let person = new Person()

// === 自定义对象类型构造函数，原型模式创建对象
// 每个函数都有一个prototype属性，指向一个对象
function Person(...args){
  //...
}
Person.prototype.sayName = function(){
  // ...  
}
let person = new Person()
```

[回到顶部](#javascript_docs)

#### Object.create()
Object.create(proto[, propertiesObject])
* proto：新创建对象的原型对象
* propertiesObject: 可选，描述对象属性（添加到新创建对象的不可枚举（默认）属性对象的属性描述符以及相应的属性名称）

```javascript
// 第一个参数是原型对象，对象根据这个原型对象创建对象
let o1 = Object.create({x: 1, y: 2}) // o1 inherits properties x and y.
o1.x + o1.y // => 3

// 没有原型对象的对象，新建的对象没有从原型对象继承的方法
let o2 = Object.create(null) // o2 inherits no props or methods.

// 传入Object.prototype 相当于{} 或者 new Object()一样创建对象
let o3 = Object.create(Object.prototype) // o3 is like {} or new Object().


// see definite guide in p151
let o = { x: "don't change this value" }
library.function(Object.create(o)) // Guard against accidental modifications
```

[回到顶部](#javascript_docs)

### 对象属性
* 对象属性的访问和设置
* 对象属性原型链查找
* 对象属性特性
* 删除对象属性
* 对象属性遍历

[回到顶部](#javascript_docs)

#### 对象属性的访问和设置
* 基本语法
* 对象属性的getter和setter
* 对象属性缩写
* 计算属性名（computed property name
* symbol属性名
* 扩展运算符（spread operator）
* 对象方法缩写

[回到顶部](#javascript_docs)


##### 基本语法
对象属性的访问和设置都可以通过`.`运算符(dot operator)和`[]`运算符(bracket opearator) :
* 使用`.`访问和设置属性，属性名（property name）是一个有效的标识符（identifier）
* 使用`[]`访问和设置属性，属性名（property name）是字符串或symbol，任何非字符串对象，都会通过 toString 方法，被转换成一个字符串

选择：
* 一个属性的名称如果不是一个有效的 JavaScript 标识符（例如，一个由空格或连字符，或者以数字开头的属性名），就只能通过方括号标记访问
* 变量用来构造key（可计算属性）使用方括号访问

注意：如果使用`[]`设置一个不是标识符的属性，那么通过`.`是无法访问的

```javascript
let author = book.author // Get the "author" property of the book.
author = book["author"] // Get the "author" property of the book.
let title = book["main title"] // Get the "main title" property of the book.

book.edition = 7 // Create an "edition" property of book.
book["main title"] = "ECMAScript" // Change the "main title" property.

// 使用[]可以使用计算属性配合模板字符串创建更灵活的属性
let addr = ""
for(let i = 0 i < 4 i++) {
    addr += customer[`address${i}`] + "\n"
}
```

[回到顶部](#javascript_docs)

##### 对象属性的getter和setter
基本语法定义的对象属性，成为数据属性（data property），是有value的（具有属性特性`[[value]]`），而访问器属性（accessor property）没有value，用getter()和setter()方法代替（具有属性特性`[[get]]` 和`[[set]]`）。 设置访问器属性的原因：
* 需要访问对象的其他属性作为访问和设置的结果
* 访问和设置的属性需要简单的表达式转换
* 需要控制用户的非法设置

访问器属性的getter和setter具有和属性名一样的名称，前面仅仅多了get 或set，方法内this指向本对象，通过this访问对象的属性和方法。当查找访问器属性，调用getter方法，方法返回值作为属性的值；当设置访问器属性，调用setter方法，由方法完成值的设置，方法的返回值会被忽略。

根据是否有gettter和setter给访问器属性分类：
* 如果属性有getter/setter方法，是read/write属性
* 如果属性只有getter方法，是只读属性（read-only）
* 如果属性只有setter方法，是只写属性（write-only），通常这是不可能只写不读的，如果要读取只写属性，返回undefined


对象初始化时定义getter和setter
```javascript
const METHOD_NAME = "m"
const symbol = Symbol() let p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,
    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() { return Math.hypot(this.x, this.y) },
    set r(newvalue) {
        let oldvalue = Math.hypot(this.x, this.y)
        let ratio = newvalue / oldvalue
        this.x *= ratio
        this.y *= ratio
    },
    // theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x) }
}
p.r // => Math.SQRT2
p.theta // => Math.PI / 4

let q = Object.create(p) // A new object that inherits getters and setters
q.x = 3 q.y = 4 // Create q's own data properties
q.r // => 5: the inherited accessor properties work
q.theta // => Math.atan2(4, 3)


// === 筛选输入，属性需要简单计算
// This object generates strictly increasing serial numbers
const serialnum = {
    // This data property holds the next serial number.
    // The _ in the property name hints that it is for internal use only.
    _n: 0,
    // Return the current value and increment it
    get next() { return this._n++ },
    // Set a new value of n, but only if it is larger than current
    set next(n) {
        if (n > this._n) this._n = n
        else throw new Error("serial number can only be set to a larger value")
    }
}
serialnum.next = 10 // Set the starting serial number
serialnum.next // => 10
serialnum.next // => 11: different value each time we get next


// === 使用场景，需要表达式对值简单转换
// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.
const random = {
 get octet() { return Math.floor(Math.random()*256) },
 get uint16() { return Math.floor(Math.random()*65536) },
 get int16() { return Math.floor(Math.random()*65536)-32768 }
}
```


使用`Object.defineProperties`方法对一个已创建的对象在任何时候添加getter或setter方法
```javascript
let o = { a: 0 }

Object.defineProperties(o, {
    "b": { get: function () { return this.a + 1 } },
    "c": { set: function (x) { this.a = x / 2 } }
})

o.c = 10 // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.b) // Runs the getter, which yields a + 1 or 6
```

[回到顶部](#javascript_docs)


##### 对象属性缩写
属性值名称和属性名 相同，可以只写一个
```javascript
let x = 1, y = 2
let o = {
    x: x,
    y: y
}

// === 缩写
let x = 1, y = 2
let o = { x, y }
o.x + o.y // => 3
```

[回到顶部](#javascript_docs)

##### 计算属性名（computed property name）
有时候需要根据变量值或者函数返回值 创建对象属性值，可以使用计算属性（computed property）,`[]`的属性名会自动计算表达式（expression）的值，如果不是字符串，转换为字符串然后作为对象的属性名

另一个使用计算属性的场景：使用一个javascript 库，需要传递一个一些列指定属性的对象，而这些属性名定义在库的常量里面，如果手写属性，会使得属性硬编码（hardcode），写错了属性名会报错，将来版本更新可以这个值会改变，使用javascript库中定义的常量作为计算属性，会使得程序更加健壮（rubst）

```javascript
const PROPERTY_NAME = "p1"
function computePropertyName() { return "p" + 2 }
let o = {}
o[PROPERTY_NAME] = 1
o[computePropertyName()] = 2


//
const PROPERTY_NAME = "p1"
function computePropertyName() { return "p" + 2 }
let p = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
}
p.p1 + p.p2 // => 3
```

[回到顶部](#javascript_docs)


##### symbol属性名
symbol 作为属性名，可以使用过计算属性

symbol是不透明（opaque）值，每一个symbol都是唯一的，因此可以用来创建唯一属性名

创建symbol可以调用`Symbol()`工厂函数（factory function），symbol是原始值（primitive），所以`Symbol()`不是配合new使用的构造函数，每一个`Symbol()`返回值都是不相等的，`Symbol()`接受一个字符串参数用于转换为symbol，即使两个相同的字符串参数的symbol都是彼此不同

symbol属性名的一个应用场景是，从第三方JavaScript库中取得一个对象，想添加自己的属性，但害怕属性名冲突，可以使用symbol属性名 

> The point of Symbols is not security, but to define a safe extension mechanism for JavaScript objects. That third-party code could, of course, use Object.getOwnPropertySymbols() to discover the Symbols you’re using and could then alter or delete your properties. This is why Symbols are not a security mechanism. (see in 6.10.3 in definitive guide)

```javascript
const extension = Symbol("my extension symbol")
let o = {
    [extension]: { /* extension data stored in this object */ }
}
o[extension].x = 0 // This won't conflict with other properties of o

```

[回到顶部](#javascript_docs)


##### 扩展运算符（spread operator）
扩展运算符：
* 描述：`newObj = {property1:value1, ...obj}` 可以展开多个对象属性
* 作用：可以在对象语法中拷贝对象的属性添加到新对象中
* 扩展运算符只扩展对象拥有的属性，不包括继承的属性
* `...`语法虽然叫扩展运算符，但并不是运算符，只能在对象字面量（object iteral）中产生这种效果，`...`在其他环境有不同的用法

> If an object has n properties, the process of spreading those properties into another object is likely to be an O(n) operation

```javascript
let position = { x: 0, y: 0 }
let dimensions = { width: 100, height: 75 }
let rect = { ...position, ...dimensions }
rect.x + rect.y + rect.width + rect.height // => 175

// 扩展运算符只扩展对象拥有的属性，不包括继承的属性
let o = Object.create({x: 1}) // o inherits the property x
let p = { ...o }
p.x // => undefined
```

[回到顶部](#javascript_docs)


##### 对象方法缩写
在对象中定义的属性是一个函数（function），通常把这个属性叫做对象的方法

对象方法缩写，可以清晰分辨方法和属性，对象方法一样可以使用字符串属性名，计算属性名，symbol属性名的语法
```javascript
let square = {
    area: function () { return this.side * this.side },
    side: 10
}
square.area() // => 100

// 对象方法缩写
let square = {
    area() { return this.side * this.side },
    side: 10
}
square.area() // => 100

// ===
const METHOD_NAME = "m"
const symbol = Symbol()
let weirdMethods = {
    "method With Spaces"(x) { return x + 1 },
    [METHOD_NAME](x) { return x + 2 },
    [symbol](x) { return x + 3 }
}
weirdMethods["method With Spaces"](1) // => 2
weirdMethods[METHOD_NAME](1) // => 3
weirdMethods[symbol](1) // => 4
```

[回到顶部](#javascript_docs)

#### 对象属性原型链访问设置过程
* 对象属性原型链访问过程
* 对象属性原型链设置过程
* 判断对象属性是否存在
* 对象属性访问设置的错误

[回到顶部](#javascript_docs)

##### 对象属性原型链访问过程
访问对象属性，使用对象内置的属性特性`[[get]]`实现：
* 根据属性名称（property name），查询对象是否有该属性（property），有则返回属性对应的值（有getter，则调用getter返回值）
* 如果对象上找不到这个属性，则遍历对象原型链查找该属性，原型链上如果找到该属性，返回该属性值（有getter，则调用getter返回值）
* 原型链上也找不到该属性，则返回undefined

```javascript
let o = {
    'x': 1,
    'y': 2
}

let p = Object.create(o)
p.z = 3
p.x + p.y // 3
```

##### 对象属性原型链设置过程
设置对象属性值，使用对象内置的属性特性`[[set]]`实现：
* 根据属性名称（property name），查询对象是否有该属性（property），存在该属性且对象的`extensible attribute is true`，则直接更新这个属性值（有setter则调用setter更新值）
* 如果对象上找不到这个属性，则遍历对象原型链查找该属性，原型链上如果找到该属性
    * 且对象属性特性`[[writable]]: true`，即该属性不是只读属性，且对象的`extensible attribute is true`，就在对象上添加一个同名属性并赋值（有setter则调用setter更新值），不会修改原型链上的属性值，然后**屏蔽**该属性。
    * 且对象属性特性`[[writable]]: fasle`, 对象属性赋值语句会被忽略，严格模式下会抛出错误
    * 原型链上的属性具有setter，那么就调用setter，**同名属性不会添加到对象上**。即属性的setter会覆盖对象属性的set操作

> 屏蔽：对象及其原型链上的相同命名属性，在原型链上层的属性被最下层的属性屏蔽，只能访问原型链中最底层的该命名属性。

```javascript
let unitcircle = { r: 1 } // An object to inherit from
let c = Object.create(unitcircle) // c inherits the property r
c.x = 1 c.y = 1 // c defines two properties of its own
c.r = 2 // c overrides its inherited property

unitcircle.r // => 1: the prototype is not affected

// ====
// ==== 原型链存在该属性，且属性特性`writable: true`，属性屏蔽
let otherObj = { foo: 1 }
let obj = Object.create(otherObj)
obj.foo = 2
console.log(otherObj) // { foo: 1 }
console.log(obj) // { foo: 2 }


// === 原型链存在该属性，且属性特性`writable: fasle`
let otherObj = {}
Object.defineProperty(otherObj, 'foo', {
  value: 1,
  writable: false
})
let obj = Object.create(otherObj)
obj.foo = 2 // 非严格模式下，静默赋值无效
console.log(otherObj.hasOwnProperty('foo')) // true
console.log(obj.hasOwnProperty('foo')) // false
console.log(obj.foo) // 1

// === 原型链上存在该属性，且具有setter
let otherObj = {}

Object.defineProperty(otherObj, 'foo', {
  get: function() {
    return this._foo_
  },
  set: function(val) {
    this._foo_ = val
  }
})

let obj = Object.create(otherObj)
obj.foo = 2
console.log(obj.hasOwnProperty('foo')) // false
console.log(obj) // { _foo_: 2 }
console.log(obj.hasOwnProperty('_foo_')) // true

console.log(obj.foo) // 2
```

[回到顶部](#javascript_docs)

##### 判断对象属性是否存在
对象属性如果不存在，会返回undefined，对象属性为undefined的值也有可能设置为undefined，所以需要判断属性是否存在。

测试对象属性是否存在的方法
* in 运算符: 检查属性是否在对象及其原型链中
* `Object.prototype.hasOwnProperty()`: 检查当前的对象，不会检查原型链
* Object.prototype.propertyIsEnumerable(): 通常对象内置的属性是nont-enumerable，用户自定义属性且不指定属性特性`[[enumerable]]：false`，则默认的属型特性`[[enumerable]]：true`
* 对象属性访问`!== undefined`，相当于in操作符，当时当对象属性是undef是例外的

```javascript
// in 操作符
// 检查属性是否在对象及其原型链中
// property in obj

let o = { x: 1 }
"x" in o // => true: o has an own property "x"
"y" in o // => false: o doesn't have a property "y"
"toString" in o // => true: o inherits a toString property


//  === hasOwnProperty(property)
// 仅检查当前的对象，不会检查原型链
let o = { x: 1 }
o.hasOwnProperty("x") // => true: o has an own property x
o.hasOwnProperty("y") // => false: o doesn't have a property y
o.hasOwnProperty("toString") // => false: toString is an inherited property

// ===  propertyIsEnumerable()
// 通常对象内置的属性是nont-enumerable
// 用户自定义属性通常为[[enumerable]]:true
let o = { x: 1 }
o.propertyIsEnumerable("x") // => true: o has an own enumerable property x
o.propertyIsEnumerable("toString") // => false: not an own property
Object.prototype.propertyIsEnumerable("toString") // => false: not enumerable

// !==
let o = { x: 1 }
o.x !== undefined // => true: o has a property x
o.y !== undefined // => false: o doesn't have a property y
o.toString !== undefined // => true: o inherits a toString property

let o = { x: undefined } // Property is explicitly set to undefined
o.x !== undefined // => false: property exists but is undefined
o.y !== undefined // => false: property doesn't even exist
"x" in o // => true: the property exists
"y" in o // => false: the property doesn't exist
delete o.x // Delete the property x
"x" in o // => false: it doesn't exist anymore
```

[回到顶部](#javascript_docs)

##### 对象属性访问设置的错误
```javascript
// 访问对象不存在的属性，不会报错，返回undefined
book.subtitle // => undefined: property doesn't exist

// 对象如果是null或undefined，对这个对象访问设置属性报错
// !TypeError: undefined doesn't have length
let len = book.subtitle.length 
```

对象是null和undefined错误避免方法
```javascript
// A verbose and explicit technique
let surname = undefined
if (book) {
    if (book.author) {
        surname = book.author.surname
    }
}

// A concise and idiomatic alternative to get surname or null or undefined
surname = book && book.author && book.author.surname

// ES2020 supports conditional property access with ?.
let surname = book?.author?.surname
```

[回到顶部](#javascript_docs)

#### 对象属性特性
对象属性特性(也叫属性描述符), 也称为属性的属性，描述了属性（property）的各种特征（attribute）

* 对象属性特性给属性分类
* Object.defineProperties()&Object.defineProperties()设置属性特性
* Object.getOwnPropertyDescriptor()获取属性特性对象

[回到顶部](#javascript_docs)

##### 对象属性特性给属性分类
根据数据属性特性，可以给属性分类为 数据属性和访问器属性

| 对象属性特性       | 作用                                 | 默认值    | 属性分类   |
| ------------------ | ------------------------------------ | --------- | ---------- |
| `[[value]]`        | 保存属性值                           | undefined | 数据属性   |
| `[[writable]]`     | true时属性值才能被更新               | true      | 数据属性   |
| `[[get]]`          | 获取该属性的访问器函数（getter）     | undefined | 访问器属性 |
| `[[set]]`          | 获得属性的设置器函数（setter）       | undefined | 访问器属性 |
| `[[enumerable]]`   | 能否枚举属性                         | false     |            |
| `[[configurable]]` | 能否修改属性特性，delete能否删除属性 | false     |            |

[回到顶部](#javascript_docs)



##### Object.defineProperties()&Object.defineProperties()设置属性特性
使用Object.defineProperties()方法定义单个属性及其属性特性
```javascript
// descriptor 是属性特性的描述特性
// 在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象
Object.defineProperty(obj, prop, descriptor)
```

使用Object.defineProperties()方法定义多个属性及其属性特性
```javascript
// === 例子
let book = {}
Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this._year
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue
                this.edition += newValue - 2004
            }
        }
    }
})
```

[回到顶部](#javascript_docs)

##### Object.getOwnPropertyDescriptor()获取属性特性对象
`Object.getOwnPropertyDescriptor(obj, prop)` 方法返回指定对象的指定属性 的属性特性组成的对象

返回的对象结果可能是：
* 如果指定属性是数据属性。返回属性特性的对象包括的属性有value, writable, enumerable, configurable
* 如果指定属性是访问器属性。返回属性特性的对象包括的属性有get, set, enumerable, configurable
* 如果指定对象不存在指定属性，返回undefined

```javascript
Object.getOwnPropertyDescriptor(obj, prop)

// === 例子
let o, d
o = { bar: 42 }
d = Object.getOwnPropertyDescriptor(o, "bar")
/*
d 
{
    configurable: true,
    enumerable: true,
    value: 42,
    writable: true
}
*/

o = { get foo() { return 17 } }
d = Object.getOwnPropertyDescriptor(o, "foo")
/*
d
{
    configurable: true,
    enumerable: true,
    get:  //the getter function,
    set: undefined
}
*/

o = {}
Object.defineProperty(o, "baz", {
    value: 8675309,
    writable: false,
    enumerable: false
})
d = Object.getOwnPropertyDescriptor(o, "baz")
/*
d 
{
    value: 8675309,
    writable: false,
    enumerable: false,
    configurable: false
}
*/
```

[回到顶部](#javascript_docs)

#### 删除对象属性
delete 操作符删除一个**不是继承而来**的属性，delete 之后是一个访问对象属性的表达式，要删除继承来的属性，你需要从原型链上相应的原型对象中指定删除（进行这个操作会影响到所有继承这个原型对象的对象）

```javascript
//Creates a new object, myobj, with two properties, a and b.
let obj = new Object
obj.a = 5
//Removes the a property
delete obj.a

// 删除对象所有的属性
for(let prop in obj){
  delte obj[prop]
}
```

delete表达式无论要删除的属性是否存在，结果都是true
```javascript
let o = {x: 1} // o has own property x and inherits property toString
delete o.x // => true: deletes property x
delete o.x // => true: does nothing (x doesn't exist) but true anyway
delete o.toString // => true: does nothing (toString isn't an own property)
delete 1 // => true: nonsense, but true anyway
```

如果对象属性特性`[[configurable]]: false`，delete不能删除这个属性，所有的内置对象都是non-configurable，严格模式下，删除non-configurable对象属性，会报TypeError错误，非严格模式下，delete表达式结果返回false

```javascript
// In strict mode, all these deletions throw TypeError instead of returning false
delete Object.prototype // => false: property is non-configurable
var x = 1 // Declare a global variable
delete globalThis.x // => false: can't delete this property
function f() {} // Declare a global function
delete globalThis.f // => false: can't delete this property either
```

从全局对象上删除属性，严格模式下需要指定全局对象，否则会报错
```javascript
// non-strict mode
globalThis.x = 1 // Create a configurable global property (no let or var)
delete x // => true: this property can be deleted

delete x // SyntaxError in strict mode
delete globalThis.x // This works
```

[回到顶部](#javascript_docs)


#### 对象属性遍历
对象属性遍历:
1. 对象属性遍历方法：
    * for-in：遍历对象及其原型链中所有可枚举（enumerable）的属性，对象内置属性是不可遍历的（non-enumerable）
    * `Object.keys()&Object.values()&Object.entries()`
    * `Object.getOwnPropertyNames()&Object.getOwnPropertySymbols()`
    * Reflect.ownKeys()（略）：Reflect.ownKeys() returns all own property names, both enumerable and non-enumerable, and both string and Symbol. (See §14.6. in definitive guid)
2. 对象属性遍历次序
    * 对象属性名是字符串，名称是非负数，按照数字大小从小到大遍历，即类数组下表的属性名先遍历
    * 再遍历属性名是负数和浮点数等其他字符串，按照他们定义次序遍历
    * 最后按symbol属性名定义次序

对象属性遍历用例

```javascript
// === for in
let o = { x: 1, y: 2, z: 3 } // Three enumerable own properties
o.propertyIsEnumerable("toString") // => false: not enumerable
for (let p in o) { // Loop through the properties
    console.log(p) // Prints x, y, and z, but not toString
}

// 可以明确指定跳过遍历原型链上属性或者方法
for (let p in o) {
    if (!o.hasOwnProperty(p)) continue // Skip inherited properties
}
for (let p in o) {
    if (typeof o[p] === "function") continue // Skip all methods
}
// === end for in

// Object.keys()&Object.values()&Object.entries()
let target = {x: 1}, source = {y: 2, z: 3}
for(let key of Object.keys(source)) {
 target[key] = source[key]
}
target // => {x: 1, y: 2, z: 3}
// end Object.keys()&Object.values()&Object.entries()


// === 属性遍历次序
let obj = {}
obj['-2'] = -2
obj['1.2'] = 1.2
obj['3'] = 3
obj['b'] = 'b'
obj['1.1'] = 1.1
obj['-1'] = -1
obj['1'] = 1
obj['2'] = 2
obj['a'] = 'a'

for (prop in obj) {
    console.log(obj[prop])
}
// 1
// 2
// 3
// -2
// 1.2
// b
// 1.1
// -1
// a
```

[回到顶部](#javascript_docs)


### 对象扩展
1. 对象扩展描述：复制其他对象的属性到对象中
2. 方式：
    * 对象属性迭代方法依次添加对象属性
    * `Object.assign()`拷贝属性。拷贝的对象属性都是可枚举的（enumerable），包括是symbol名称的属性。如果属性已经存在，则依次重写（override）属性值。拷贝过程中的`[[get]]`和`[[set]]`：如果目标对象的属性有setter，会被调用，如果源对象的属性有getter也会再拷贝过程中被调用
    * 如果需要扩展的是目标对象不存在的属性，可以自定义一个merge函数的自定义

```javascript
// for-of 依次添加对象属性
let target = { x: 1 }, source = { y: 2, z: 3 }
for (let key of Object.keys(source)) {
    target[key] = source[key]
}
target // => {x: 1, y: 2, z: 3

// === foreach
// 迭代提取suppplier对象的属性，将其放到指定的receiver对象中
function mixin(receiver, supplier) {
  Object.keys(supplier).forEach(function(key) {
    receiver[key] = supplier[key]
  })
  return receiver
}


// === Object.assign()扩展对象
// 如果对一个对象进行默认对象属性的覆盖，
// 但是不想已经存在的对象属性被默认对象属性覆盖
// 只想没有存在的属性被默认覆盖

// 所有属性都会被覆盖
Object.assign(o, defaults) // overwrites everything in o with defaults

// 解决方法
// 因为不能修改default，所以建一个{}空对象
o = Object.assign({}, defaults, o)

// === sperator operatoru扩展运算符可以简化这个操作
o = {...defaults, ...o}
// === end Object.assign()扩展对象

// === 自定义merge函数
// Like Object.assign() but doesn't override existing properties
// (and also doesn't handle Symbol properties)
function merge(target, ...sources) {
    for (let source of sources) {
        for (let key of Object.keys(source)) {
            if (!(key in target)) { // This is different than Object.assign()
                target[key] = source[key]
            }
        }
    }
    return target
}
Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }) // => {x: 2, y: 3, z: 4}
merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }) // => {x: 1, y: 2, z: 4}
```

[回到顶部](#javascript_docs)


### 对象不变性设置
1. 设置对象属性常量：
    * 描述：属性不可修改
    * 通过方法`Object.defineProperty() & Object.properties()`设置属性特性`[[writable:false]]`,`[[configurable:false]]`，
2. 设置对象不可扩展。
    * 描述：不可以添加新属性
    * 通过方法`Object.preventExtensions() & Object.isExtensible()`
3. 设置对象封闭。
    * 描述：相当于 `Object.prevetnExtensions() + [[configurable]]:false`，即不可扩展，不可配置和删除属性，但现存属性仍然可以修改
    * 通过方法`Object.seal() & Object.isSeal()`
4. 设置对象冻结。通过方法`Object.freeze() & Object.isFrozen()`
    * 描述：相当于 `Object.prevetnExtensions() + [[configurable]]:false + [writable: false]`，即不可扩展，不可配置和删除属性，不可修改现存属性


对象不变性用例


```javascript
// === 对象常量属性
Object.defineProperty(obj, {
  writable: false,
  configurable: false
  // ...
})
// === end 对象常量属性


// === 对象不可扩展
// 禁止对象添加新属性
// 非严格模式下添加属性静默失败。严格模式下，会抛出 TypeError 错误
Object.prevetnExtensions(obj);

// Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）
Object.isExtensible(obj)
// === end 对象不可扩展


// === 对象封闭
// 相当于 Object.prevetnExtensions + [[configurable]]:false
// 密封之后不仅不能添加新属性，也不能重新配置或者删除任何现有属性
// 一个数据属性不能被重新定义成为访问器属性，或者反之
// 属性的值仍然可以修改
Object.seal(obj)
// === end 对象封闭


// === 对象冻结
// object.seal() + [[writable]]:false
Object.freeze(obj)
、
// 判断一个对象是否被冻结
Object.isFrozen(obj)
// === end 对象冻结
```

[回到顶部](#javascript_docs)


### 对象序列化
对象序列化（object serialization）是将对象转换为字符串，然后方便保存。

* JSON.stringify()序列化对象
* JSON.parse() 将字符串还原为对象

JSON（javascript objct notation）的转换规则：
* 可以序列化Objects, arrays, strings, finite numbers, true, false, null
* NaN, Infinity, -Infinity 序列化为null
* 日期对象（date object）序列化为 ISO-formatted date strings
* Function, RegExp,  Error对象，undefined不能被序列化和还原
* 仅仅序列化对象的枚举（enumerable）属性
* JSON.stringify() & JSON.parse() 都接受第二个参数指定序列化的属性，从而自定义序列化和还原

详细见 JSON Serialization and Parsing(see in definitive guide §11.6.)

[回到顶部](#javascript_docs)



### Object原型属性和方法
```typescript
interface Object {
  // Object.prototype.constructor
  // 是内置的构造函数
  constructor: Function;

  // 返回用来表示对象值的字符串
  // 当对象要转换为字符串时会被自动调用
  // 如+ 操作符连接对象和字符串
  // 如方法需要一个字符串，传递对象却是一个对象时
  toString(): string;
  // 返回一个表示对象的本地化字符串（localized string）
  toLocaleString(): string;

  // 将对象转换为原始类型，而不仅是字符串，
  // 典型的转换为数值
  // 默认的Object.valueOf()不做行为，
  // 内置的对象类型（类）会重定义Object.valueOf()
  valueOf(): Object;

  // 第一个参数v：是一个对象属性key
  // 返回值：检测当前对象是否有指定属性v
  // 不会检测原型链
  hasOwnProperty(v: PropertyKey): boolean;

  // 第一个参数v：是一个对象属性key
  // 返回值：检测属性v是否是emumerable可枚举的
  // 内置的对象属性一般[[emumerable:false]]
  // 自定义属性一般[[emumerable:true]]
  propertyIsEnumerable(v: PropertyKey): boolean;

  // 第一个参数v：是一个对象
  // 返回值：检测是否存在原型链上找到对象v
  isPrototypeOf(v: Object): boolean;
}
```


1. Object原型属性和方法描述
    * `Object.prototype`上定义的数学和方法
    * 所有的javascript对象都从`Object.prototype`上继承属性和方法
2. 之前涉及的来自Object.prototype的方法：
    * Object.prototype.isPrototypeOf()
    * Object.prototype.hasOwnProperty()
    * Object.prototype.isEnumerable() 
3. 未涉及的：
    * Object.prototype.toString()
    * Object.prototype.toLocaleString()：`Date``和Number`内置的对象类型（或类）定义了自定义的Object.toLocaleString()，会对number和date数据进行格式化（formated），即本地转换（local convention）
    * Object.prototype.valueOf()
    * Object.prototype.toJSON()

[回到顶部](#javascript_docs)


#### Object原型方法用例
```javascript
// === Object.toString()
let s = { x: 1, y: 1 }.toString() // s == "[object Object]"

// 重写toString方法
// 默认的Object.toString()不提供很多信息，
// 很多类（class）会重新定义这个方法
let point = {
    x: 1,
    y: 2,
    toString: function () { return `(${this.x}, ${this.y})` }
}
String(point) 
// => "(1, 2)": toString() is used for string conversions
// === end Object.toString()


// === Object.toLocaleString()
let point = {
    x: 1000,
    y: 2000,
    toString: function () { return `(${this.x}, ${this.y})` },
    toLocaleString: function () {
        return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`
    }
}
point.toString() // => "(1000, 2000)"
point.toLocaleString() // => "(1,000, 2,000)": note thousands separators
// === end Object.toLocaleString()


// === Object.valueOf()
let point = {
    x: 3,
    y: 4,
    valueOf: function () { return Math.hypot(this.x, this.y) }
}
Number(point) // => 5: valueOf() is used for conversions to numbers
point > 4 // => true
point > 5 // => false
point < 6 // => true
// === end Object.valueOf()
```

[回到顶部](#javascript_docs)


#### Object.toJSON()
Object.prototype没有定义toJSON()方法，但是JSON.stringify() 在序列化过程中会查找对象的，入股有toJSON() 方法，就会调用这个方法，将这个方法的返回值序列化，而不是序列化这个对象

Date内置对象类型（类）就定义了toJSON()方法，返回一个表达date的序列化字符串

```javascript
let point = {
    x: 1,
    y: 2,
    toString: function () { return `(${this.x}, ${this.y})` },
    toJSON: function () { return this.toString() }
}
JSON.stringify([point]) // => '["(1, 2)"]'
```

[回到顶部](#javascript_docs)


### Object静态方法
```typescript
// Object.prototype.constructor
interface ObjectConstructor {
  // === 调用形式
  new(value?: any): Object;
  (): any;
  (value: any): any;
  // === end 调用形式

  // === 原型链相关
  // 显式prototyp属性访问Object.prototype
  readonly prototype: Object;

  // 第一个参数o：一个对象
  // 返回值：返回对象的o的原型
  getPrototypeOf(o: any): any;

  // 第一个参数o：一个对象
  // 第二个参数proto：原型对象
  // 返回值：设置对象o的原型为proto，返回对象o
  setPrototypeOf(o: any, proto: object | null): any;
  // === end 原型链相关

  // 第一个参数o：指定对象o
  // 第二个可选参数properties：包含若干属性描述符的对象
  create(o: object | null, properties?: PropertyDescriptorMap & ThisType<any>): any;


  // === 属性和属性特性
  // 第一个参数o：指定对象
  // 返回值：返回对象o的所有属性，
  // 无论是否可枚举，组成的字符串数组
  getOwnPropertyNames(o: any): string[];
  // 第一个参数o：指定对象
  // 返回值：返回对象o的所有symbole属性，
  // 无论是否可枚举，组成的字符串数组
  getOwnPropertySymbols(o: any): symbol[];

  // 第一个参数o：进行属性修改的对象
  // 第二个参数p：对象的属性key
  // 第三个参数attributes：对象的属性特性对象，
  // 根据不同属性特性分为data property 或 
  // accessor property
  defineProperty<T>(o: T, p: PropertyKey,
    attributes: PropertyDescriptor & ThisType<any>): T;
  // 第一个参数o：进行属性修改的对象
  // 第二个是properties：是一个PropertyDescriptorMap
  // 包含了若干对象属性，属性对应的值是属性特性对象
  defineProperties<T>(o: T, properties: PropertyDescriptorMap & ThisType<any>): T;


  // 第一个参数o：对象
  // 第二个参数p：属性key
  // 返回值：返回对象o的属性p的属性特性对象
  getOwnPropertyDescriptor(o: any, p: PropertyKey):
    PropertyDescriptor | undefined;
  // 第一个参数o：对象
  // 返回值：返回对象o所有的属性特性对象
  getOwnPropertyDescriptors<T>(o: T): {
    [P in keyof T]: TypedPropertyDescriptor<T[P]> } & {
      [x: string]: PropertyDescriptor
    };
  // === end 属性和属性特性


  // === 对象遍历
  // 第一个参数o：一个对象
  // 返回值：返回对象上可枚举（enumerable）的属性key
  // 组成的数组
  keys(o: object): string[];
  // 第一个参数o：一个对象
  // 返回值：返回对象上可枚举（enumerable）的属性的值
  // 组成的数组
  values(o: {}): any[];
  values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];

  // 第一个参数o：一个对象
  // 返回值：返回对象上可枚举（enumerable）的key/value数组
  // 组成的数组
  // 数组每一项是[key, vlaue]
  entries(o: {}): [string, any][];
  entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];
  // === end 对象遍历


  // 对象扩展
  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param sources One or more source objects from which to copy properties
   */
  // 第一个参数target：目标对象
  // 后续若干对象参数，指定源对象
  // 返回值：把sources指定的若干对象属性扩展到target对象
  // 修改目标对象，并返回修改后的目标对象
  assign(target: object, ...sources: any[]): any;


  /**
   * Returns true if the values are the same value, false otherwise.
   * @param value1 The first value.
   * @param value2 The second value.
   */
  // 相等判断
  // 第一个参数value1：指定value1
  // 第一个参数value2：指定value2
  // 返回值：判断value1和value2是否相等
  is(value1: any, value2: any): boolean;

  // === 对象不变性
  // 对象不可扩展：不可以添加新属性

  // 第一个参数o：指定对象
  // 返回值：判断对象是否是可扩展的
  isExtensible(o: any): boolean;
  // 将参数o指定的对象设置为不可扩展
  preventExtensions<T>(o: T): T;

  // 对象封闭：相当于 Object.prevetnExtensions()
  //  + [[configurable]]:false
  // 即不可扩展
  // 不可配置和删除属性
  // 但现存属性仍然可以修改

  // 第一个参数o：指定对象
  // 返回值：判断对象o是否封闭
  isSealed(o: any): boolean;
  // 将参数o指定的对象设置为封闭
  seal<T>(o: T): T;


  // 对象冻结：相当于Object.prevetnExtensions()
  //  + [[configurable]]:false
  //  + [writable: false]
  // 即不可扩展
  // 不可配置和删除属性
  // 不可修改现存属性

  // 第一个参数o：指定对象
  // 返回值：判断对象o是否被冻结
  isFrozen(o: any): boolean;
  // 将参数o指定的对象设置为冻结
  freeze<T>(o: T): Readonly<T>;
  // === end对象不变性

  // 如果属性和方法不存在，从lib.es5.d.ts或其他更新文件中查找补充
}
```

1. Object静态方法描述：定义在`Object.prototype.constructor`的静态方法:
2. 之前涉及的Object静态方法：
    * 访问设置原型：Object.getPrototypeOf()&Object.setPrototypeOf()
    * 对象创建：Object.create() 
    * 对象属性-设置属性特性：Object.defineProperty() & Obect.defineProperties()
    * 对象属性-返回指定对象指定属性的 属性特性组成的对象：Object.getOwnPropertyDescriptor()
    * 对象遍历：
        * Object.keys() & Object.values()& Object.entries() 
        * Object.getOwnPropertyNames()&Object.getOwnPropertySymbols()
    * 对象扩展：Object.assign()
3. 未涉及的Object静态方法：
    * Object.is()判断相等：严格相等运算符`===`并不完全准确，它认为`+0 === -0` 是true，`NaN===NaN`是false，Object.is()可以解决这个问题（定义在Object.prototype.constructor 的静态方法）。选择`Object.is() | == | === ` 取决于实际情况

[回到顶部](#javascript_docs)

#### Object静态方法用例
```javascript
// === Object.is
Object.is(+0, -0)     // false
Object.is(NaN, NaN)   // true
Object.is(5, 5)       // true
Object.is(5, "5")     // false
// === end Object.is
```

[回到顶部](#javascript_docs)



## javascript数组（array）
数组（array）是一个元素（element）的集合（collection），每一个元素都有下标（index）表明位置，javascript 的数组是没有类型的（untyped），动态的（dynamic）

javascript数组是javascript对象的特殊形式

array从Array.prototype继承属性和方法，其中很多都是通用的（generic），这让类数组对象也能使用这些方法

JavaScript 类型数组（typed array）有固定长度和固定类型

[回到顶部](#javascript_docs)


### 创建数组的方式
1. 数组字面量创建数组
2. 可迭代对象上使用扩展运算符创建数组
3. Array()创建数组
4. Array.of() & Array.from()创建数组

[回到顶部](#javascript_docs)


#### 数组字面量创建数组
```javascript
let empty = [] // An array with no elements
let primes = [2, 3, 5, 7, 11] // An array with 5 numeric elements
let misc = [ 1.1, true, "a", ] // 3 elements of various types + trailing comma

// 元素可以是数组或对象
let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]]

// 可以忽略元素
let count = [1,,3] // Elements at indexes 0 and 2. No element at index 1
// optional trailing comma, 
// so [,,] has a length of 2,not 3.
let undefs = [,,] // An array with no elements but a length of 2
```

[回到顶部](#javascript_docs)

#### 可迭代对象上使用扩展运算符创建数组
在数组字面量中可以配合扩展运算符使用，这个对象一定要是可迭代对象才能在数组上使用扩展运算符

```javascript
let a = [1, 2, 3]
let b = [0, ...a, 4] // b == [0, 1, 2, 3, 4]

// 扩展运算符是简单复制数组的方法
// The spread operator is a 
// convenient way to create a (shallow) copy of an array
let original = [1,2,3]
let copy = [...original]
copy[0] = 0 // Modifying the copy does not change the original
original[0] // => 1

// 扩展运算符可以在可迭代对象上发挥作用，例如字符串是可迭代的let digits = [..."01234567"]
digits // => ["0","1","2","3","4","5","6","7"]

// ===
let letters = [..."hello world"]
[...new Set(letters)] // => ["h","e","l","o"," ","w","r","d"]
```

[回到顶部](#javascript_docs)

#### Array()创建数组
Array() 调用如果只传递一个数字参数，是指定创建数组的长度，如果是多个数字参数，这些参数是数组的元素（element）
```javascript
// 创建一个空数组
let arr = new Array()

// 指定length
let arr = new Array(10) // length 为 10
// 指定值
let arr = new Array('foo', 'bar')

// 可以省略new
// 建议使用new，更醒目地表示调用数组
let arr = Array('foo', 'bar')
```

[回到顶部](#javascript_docs)


#### Array.of() & Array.from()创建数组
```typescript
// 类数组对象
// 有length数学
// 可以通过数字index访问
interface ArrayLike<T> {
    readonly length: number;
    readonly [n: number]: T;
}

interface ArrayConstructor {
  // 第一个参数arrarLike：类数组对象
  // 返回值：从arrarLike类数组对象创建
  // 一个shallow-coppied数组实例
  from<T>(arrayLike: ArrayLike<T>): T[];

  // 第一个参数arrarLike：类数组对象
  // 第二个参数mapFn：数组中每个元素调用的map函数
  // 第三个可选参数thisArg：指定mapFn函数中this指向
  from<T, U>(arrayLike: ArrayLike<T>,
    // 第一个参数v：数组当前元素
    // 第二个参数k：当前元素index
    mapfn: (v: T, k: number) => U,
    thisArg?: any): U[];

  // 若干个参数
  // 返回值：返回若干个参数组成的数组实例
  of<T>(...items: T[]): T[];
}
```

`Array.from() & Array.of()`用例：

```javascript
// array from string
Array.from('foo') // [ "f", "o", "o" ]

// array from set
const set = new Set(['foo', 'bar', 'baz', 'foo'])
Array.from(set) // [ "foo", "bar", "baz" ] 

// array from map
const map = new Map([[1, 2], [2, 4], [4, 8]])
Array.from(map) // [[1, 2], [2, 4], [4, 8]]

// 使用第二个参数mapFn
Array.from([1, 2, 3], x => x + x) // [2, 4, 6]
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

// Array.of 创建数组
Array.of() // => [] returns empty array with no arguments
Array.of(10) // => [10] can create arrays with a single numeric argument
Array.of(1,2,3) // => [1, 2, 3]

// Array.from创建数组
// copy 数组
// 转换类数组为数组
let copy = Array.from(original)
```

[回到顶部](#javascript_docs)


### 数组元素访问和设置
1. 数组元素通过index访问和设置
2. 数组是对象，区别是数组的属性是0到2的32次方-2范围的整数，才是数组下表（index）
3. 因为数组是对象，所以不会有"out of bounds"的错误，对象访问不存在属性，返回undefined

```javascript
// 数组元素通过index访问和设置
let a = ["world"] // Start with a one-element array
let value = a[0] // Read element 0
a[1] = 3.14 // Write element 1
let i = 2
a[i] = 3 // Write element 2
a[i + 1] = "hello" // Write element 3
a[a[i]] = a[0] // Read elements 0 and 2, write element 3
// === end 数组元素通过index访问和设置

// 数组是对象
a[-1.23] = true // This creates a property named "-1.23"
a["1000"] = 0 // This the 1001st element of the array
a[1.000] = 1 // Array index 1. Same as a[1] = 1

// 数组是对象，所以不会有"out of bounds"的错误
let a = [true, false] // This array has elements at indexes 0 and 1
a[2] // => undefined no element at this index.
a[-1] // => undefined no property with this name.
```

[回到顶部](#javascript_docs)

### javascript稀疏数组
javascript稀疏数组（sparse array）：元素并不是从0开始连续的，所以稀疏数组中，数组的长度（length）大于数组的元素个数

```javascript
let a = new Array(5) // No elements, but a.length is 5.
a = [] // Create an array with no elements and length = 0.
a[1000] = 0 // Assignment adds one element but sets length to 1001.

let a1 = [,] // This array has no elements and length 1
let a2 = [undefined] // This array has one undefined element
0 in a1 // => false: a1 has no element with index 0
0 in a2 // => true: a2 has the undefined value at index 0
```

[回到顶部](#javascript_docs)

### 数组长度
javascript 通过定义在数组对象本身的length属性获取数组长度

```javascript
[].length // => 0: the array has no elements
["a","b","c"].length // => 3: highest index is 2, length is 3


a = [1,2,3,4,5] // Start with a 5-element array.
a.length = 3 // a is now [1,2,3].
a.length = 0 // Delete all elements. a is [].
a.length = 5 // Length is 5, but no elements, like new Array(5)
```

[回到顶部](#javascript_docs)

### 数组增加删除元素
数组增加删除元素的方法
1. 一般方法：
    * 直接赋值增加元素
    * 用delete删除数组元素，就像对象属性一样，但是不会通知改变length
    * 改变数组长度可以奇怪地做到增删元素的操作
2. 数组增加/删除元素的原型法（见数组原型属性和方法部分）

```javascript
// 直接赋值增加元素
let a = [] // Start with an empty array.
a[0] = "zero" // And add elements to it.
a[1] = "one"

// delete删除数组元素
let a = [1,2,3]
delete a[2] // a now has no element at index 2
2 in a // => false: no array index 2 is defined
a.length // => 3: delete does not affect array length
```


[回到顶部](#javascript_docs)


### 数组遍历
1. for-of：
    * 数组（包括可迭代对象）最简单的遍历数组的方式是for-of，对于稀疏数组的处理，不存在的元素返回undefined
    * for-of 中还可以解构数组元素
    * `for..of`循环首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的next() 方法来遍历所有返回值。数组有内置的`@@iterator`，因此`for..of`可以直接应用在数组上。数组手动获取`@@iterator`遍历进行遍历：`@@iterator`本身并不是一个迭代器对象，而是一个返回迭代器对象的函数
2. 循环语句：对于所有元素都需要遍历进行操作的，可以使用其他遍历方法，如果需要一部分不进行遍历，通常采用原始循环语句
3. 数组迭代方法（见数组原型属性和方法中的迭代方法）：根据个人经验，如果选用多个嵌套这些迭代方法才能解决问题，往往使用原始循环语句更加容易理解


```javascript
let letters = [..."Hello world"] // An array of letters
let string = ""
for (let letter of letters) {
    string += letter
}
string // => "Hello world" we reassembled the original text

// for-of解构数组
let letters = [..."Hello world"] // An array of letters
let everyother = ""
for (let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter // letters at even indexes
}
everyother // => "Hlowrd"

//Symbol.iterator 来获取对象的 @@iterator 内部属性
// 进行遍历
var myArray = [ 1, 2, 3 ]
var it = myArray[Symbol.iterator]()
it.next() // { value:1, done:false }
it.next() // { value:2, done:false }
it.next() // { value:3, done:false }
it.next() // { done:true }

// === 循环语句遍历
let vowels = ""
let letters = [..."hello world"]
for (let i = 0 i < letters.length i++) { // For each index in the array
    let letter = letters[i] // Get the element at that index
    if (/[aeiou]/.test(letter)) { // Use a regular expression test
        vowels += letter // If it is a vowel, remember it
    }
}
vowels // => "eoo"
```

[回到顶部](#javascript_docs)

### 多维数组
javascript不支持多维数组（multi-dimensional array），可以使用数组中的数组代替

```javascript
// Create a multidimensional array
let table = new Array(2) // 10 rows of the table
for (let i = 0 i < table.length i++) {
    table[i] = new Array(2) // Each row has 10 columns
}
// Initialize the array
for (let row = 0 row < table.length row++) {
    for (let col = 0 col < table[row].length col++) {
        table[row][col] = row * col
    }
}
// Use the multidimensional array to compute 5*7
table[1][1] // => 1

// === 改写，数组迭代方法处理稀疏数组，对待undefined不处理
// 所以用for-of改写
let table = new Array(2)
for (const row_idx of table.keys()) {
    table[row_idx] = new Array(2)
}
for (const row_idx of table.keys()) {
    for (const col_idx of table.keys()) {
        table[row_idx][col_idx] = row_idx * col_idx
    }
}
table // [[0, 0], [0, 1]]
```

[回到顶部](#javascript_docs)


### 类数组对象
javascript数组和对象最大的不同
* 有length属性，length属性自动更新
* 自定义改变length属性，可以改变数组
* 从Array.prototype继承方法和属性
* Array.isArray()返回true

通常把有length属性，非负整数属性的对象看作类数组对象

```javascript
let a = {} // Start with a regular empty object
// Add properties to make it "array-like"
let i = 0
while (i < 10) {
    a[i] = i * i
    i++
}
a.length = i
// Now iterate through it as if it were a real array
let total = 0
for (let j = 0 j < a.length j++) {
    total += a[j]
}
```

很多javascript数组方法都是定义为通用的，所以array-like对象都可以使用。客户端javascript里面中，HTML document返回array-like 可迭代对象。
```javascript
document.querySelectorAll('div').forEach(e => {
    console.log('ff')
    e.innerHTML = 'hhh'
})
```

测试对象是否是array-like的方法
```javascript
// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType !== 3 test.
function isArrayLike(o) {
    if (o && // o is not null, undefined, etc.
        typeof o === "object" && // o is an object
        Number.isFinite(o.length) && // o.length is a finite number
        o.length >= 0 && // o.length is non-negative
        Number.isInteger(o.length) && // o.length is an integer
        o.length < 4294967295) { // o.length < 2^32 - 1
        return true // Then o is array-like.
    } else {
        return false // Otherwise it is not.
    }
}   
```

因为数组方法定义在Array.prototype上，所以对于array-like对象不能直接调用，需要使用Function.call方法
```javascript
let a = {"0": "a", "1": "b", "2": "c", length: 3} // An array-like object
Array.prototype.join.call(a, "+") // => "a+b+c"
Array.prototype.map.call(a, x => x.toUpperCase()) // => ["A","B","C"]
Array.prototype.slice.call(a, 0) // => ["a","b","c"]: true array copy
Array.from(a) // => ["a","b","c"]: easier array copy
```

[回到顶部](#javascript_docs)

### 数组原型属性和方法
```typescript
interface Array<T> {
  // 通过index访问设置
  [n: number]: T;
  // 返回数组长度
  length: number;

  // === 增加删除数组元素
  // 接收若干个函数参数item
  // 返回值：将若干个参数的item添加到数组的末尾，
  // 返回数组的新长度
  push(...items: T[]): number;
  // 返回值：移除数组最后一个元素，
  // 返回这个被删除的值，如果数组是空的
  // 返回undefined
  pop(): T | undefined;

  // 接收若干个函数参数item
  // 返回值：将若干个参数的item添加到数组的始端，
  // 返回数组的新长度
  unshift(...items: T[]): number;
  // 返回值：移除数组第一个元素，
  // 返回这个被删除的值，如果数组是空的
  // 返回undefined
  shift(): T | undefined;

  // 第一个可选参数start：指定切片的开始位置
  // 如果忽略start，默认是0
  // 第二个可选参数end：指定切片的结束位置（不包括end）
  // 如果忽略end，默认是length
  // 返回值：返回数组从start到end（不包括end）的切片
  slice(start?: number, end?: number): T[];

  // 第一个参数start：指定移除/插入的开始位置
  // 第二个参数：deleteCount：指定删除的个数
  // 后续的若干参数item：要插入的元素
  // 返回值：从start开始，删除deleteCount个数的元素，
  // 从start开始，插入若干item，
  // 返回删除元素组成的数组
  splice(start: number, deleteCount: number, ...items: T[]): T[];

  // 接收若干个函数参数item
  // 返回值：将元素添加到数组末端，数组需要扁平化
  // 会进行一次扁平化，然后返回新的数组
  concat(...items: (T | ConcatArray<T>)[]): T[];
  // ==== end 增加删除数组元素


  // === 数组迭代方法
  /**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
  // 第一个参数callbackFn: 数组中的每个元素都会调用这个callbackFn
  // 第二个可选参数thisArg：指定callbckFn中的this
  // 如果忽略thisArg，callbckFn中的this是undefined
  // 返回值：空
  forEach(
    // 第一个参数value：数组元素的值
    // 第二个参数idex：数组的index
    // 第三个参数array：数组本身
    // 返回值：空
    callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

  // 第一个参数callbackFn: 数组中的每个元素都会调用这个callbackFn
  // 第二个可选参数thisArg：指定callbckFn中的this
  // 如果忽略thisArg，callbckFn中的this是undefined
  // 返回值：数组每一项都调用callbackFn，将callbackFn的返回值
  // 作为数组项的新值，最后返回包含每项数新值的数组
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

  // 第一个参数callbackFn: 数组中的每个元素都会调用这个callbackFn
  // 第二个可选参数thisArg：指定callbckFn中的this
  // 如果忽略thisArg，callbckFn中的this是undefined
  // 返回值：数组每一项都调用callbackFn，将callbackFn的返回值
  // 为true的每一项，筛选出来放到新数组中返回
  filter(
    callbackFn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];

  // 第一个参数callbackFn: 数组中的每个元素都会调用这个callbackFn
  // 第二个可选参数thisArg：指定callbckFn中的this
  // 如果忽略thisArg，callbckFn中的this是undefined
  // 返回值：数组每一项都调用callbackFn，直到callbackFn返回false，
  // 返回false，否则最后返回true
  every(
    callbackFn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
  // 第一个参数callbackFn: 数组中的每个元素都会调用这个callbackFn
  // 第二个可选参数thisArg：指定callbckFn中的this
  // 如果忽略thisArg，callbckFn中的this是undefined
  // 返回值：数组每一项都调用callbackFn，直到callbackFn返回true，
  // 返回true，否则最后返回false
  some(
    callbackFn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;

  // 第一个参数callbackFn: 数组中的每个元素都会调用这个callbackFn
  // 第二个可选参数thisArg：指定callbckFn中的this
  // 如果忽略thisArg，callbckFn中的this是undefined
  // 返回值：数组每一项都调用callbackFn，直到callbackFn返回true，
  // 返回这个元素，否则最后返回undefined
  find(
    callbackFn: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
  // 第一个参数callbackFn: 数组中的每个元素都会调用这个callbackFn
  // 第二个可选参数thisArg：指定callbckFn中的this
  // 如果忽略thisArg，callbckFn中的this是undefined
  // 返回值：数组每一项都调用callbackFn，直到callbackFn返回true，
  // 返回这个元素的index，否则最后返回-1
  findIndex(
    callbackFn: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;

  // 第一个参数callbackFn: 数组中的每个元素都会调用这个callbackFn
  // 第二个可选参数initialValue：指定第一次accumulate的previousValue
  // 如果忽略thisArg，callbckFn中的this是undefined
  // 如果initialValue忽略，第一次accumulate跳过
  // 返回值：数组每一项都调用callbackFn，除了第一次accumulate，
  // 把callbackFn的返回值作为下一次的previousValue，
  // 最后一次的callbackFn的返回值作为最后的返回值
  reduce<U>(
    callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
    initialValue?: U): U;
  // reduceRight()是从数组末端开始进行reduce()操作
  reduceRIght<U>(
    callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
    initialValue?: U): U;

  // 返回IterableIterator用于迭代
  [Symbol.iterator](): IterableIterator<T>;
  // 返回IterableIterator，每一项是[index, value]
  entries(): IterableIterator<[number, T]>;
  // 返回IterableIterator，每一项是index
  keys(): IterableIterator<number>;
  // 返回IterableIterator，每一项是value
  values(): IterableIterator<T>;
  // === end 数组迭代方法


  // === 数组查找方法
  // 第一个参数searchElement:指定要查找的元素
  // 第二个可选参数fromIndex：指定查找的开始位置
  // fromIndex忽略，默认是0
  // 返回值：从fromIndex位置开始，
  // 返回找到的第一个searchElement的index
  // 找不到则返回-1
  indexOf(searchElement: T, fromIndex?: number): number;
  // 从数组末端开始的indexOf()
  lastIndexOf(searchElement: T, fromIndex?: number): number;

  /**
    * Determines whether an array includes a certain element, returning true or false as appropriate.
    * @param searchElement The element to search for.
    * @param fromIndex The position in this array at which to begin searching for searchElement.
    */
  // 第一个参数searchElement:指定要查找的元素
  // 第二个可选参数fromIndex：指定查找的开始位置
  // 返回值：searchElement存在则返回true，不存在返回false
  includes(searchElement: T, fromIndex?: number): boolean;
  // === end 数组查找方法

  // == 扁平化方法
  // 第一个可选参数depth：指定扁平化的最大深度
  // depth省略，则默认为1
  // 返回值：返回扁平化后的数组
  flat<A, D extends number = 1>(
    this: A,
    depth?: D
  ): FlatArray<A, D>[]
  // 和map一样，不过最后对数组进行扁平化
  // 第一个参数callbackFn: 数组中的每个元素都会调用这个callbackFn
  // 第二个可选参数thisArg：指定callbckFn中的this
  // 如果忽略thisArg，callbckFn中的this是undefined
  // 返回值：数组每一项都调用callbackFn，将callbackFn的返回值
  // 作为数组项的新值，最后对包含每项数新值的数组扁平化后返回
  flatMap<U, This = undefined>(
    callbackFn: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,
    thisArg?: This
  ): U[]
  // === end 扁平化方法结束


  // === 数组转字符串
  // 第一个可选参数separator：指定数组的分隔符
  // 如果忽略，默认是`,`作为分隔符
  // 返回值：根据separator，将数组元素合并在一起组成字符串
  join(separator?: string): string;

  // 返回数组的字符串形式
  toString(): string;
  // 返回数组的字符串形式
  // 数组内的元素使用各自的toLocaleString()方法
  toLocaleString(): string;
  // === end 数组转字符串

  // === 数组排序方法
  // 第一个参数compareFn：指定一个对比函数
  // 返回值：根据compareFn的函数返回值进行排序，
  // 如果compare函数返回值小于0，compareFn参数a在参数b前面
  // 如果compare函数返回值大于0，compareFn参数a在参数b后面
  // 如果compare函数返回值等于0,compareFn参数a等于参数b
  // 返回排序好的数组
  sort(compareFn?: (a: T, b: T) => number): this;
  // 数组原地倒序反转
  reverse(): T[];
  // === end 数组排序方法


  // === 其他

  // 第一个参数value：指定填充的元素值
  // 第二个可选参数start：指定填充开始的位置
  // 如果忽略，则从0下标开始填充
  // 第三个可选参数end：指定填充结束的位置（不包括end）
  fill(value: T, start?: number, end?: number): this;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  // 第一个参数target：指定要覆盖的位置
  // 第二个参数start：指定复制的开始位置
  // 第三个可选参数end：指定复制的结束位置（不包括end）
  // 返回值：从数组的target位置开始，将数组中start到end（不包括end）
  // 的值复制进去，最后返回修改后的数组
  copyWithin(target: number, start: number, end?: number): this;

  // 如果属性和方法不存在，从lib.es5.d.ts或其他更新文件中查找补充
}
```

1. 数组原型属性和方法定义在Array.prototype上
2. 数组原型属性和方法分类可以为：
    * 增加/删除数组元素方法
        * push()
        * unshift()
        * pop()
        * shift()
        * splice()
        * slice()
        * concat()
    * 迭代方法（iterator method）
        * forEach()
        * map()
        * flter()
        * every() & some()
        * find() & findIndex()
        * reduce()& reduceRight()
    * 数组查找方法
        * indexOf() & lastIndexOf()
        * includes()
    * 扁平化数组方法
        *  Array.prototype.flat()
        *  Array.prototype.flatMap()
    * 数组转字符串方法
        * join()
        * toString()
        * toLocaleString()
    * 数组排序方法
        * sort()
        * reverse()
    * 其他方法
        * fill()
        * copyWithin()
3. 会对原数组对象进行改变的方法：
    * 增加/删除中元素方法中除了`slice() & concat()`
    * 排序方法中的`sort() & reverse()`
    * 其他方法中的`fill() & copyWithin()`


[回到顶部](#javascript_docs)

#### 数组原型属性和方法用例
```javascript
// === 增加/删除元素方法
// fist-in last-out stack
let stack = [] // stack == []
stack.push(1,2) // stack == [1,2]
stack.pop() // stack == [1] returns 2
stack.push(3) // stack == [1,3]
stack.pop() // stack == [1] returns 3
stack.push([4,5]) // stack == [1,[4,5]]
stack.pop() // stack == [1] returns [4,5]
stack.pop() // stack == [] returns 1
// queue
let q = [] // q == []
q.push(1,2) // q == [1,2]
q.shift() // q == [2] returns 1
q.push(3) // q == [2, 3]
q.shift() // q == [3] returns 2
q.shift() // q == [] returns 3

let a = [] // a == []
a.unshift(1) // a == [1]
a.unshift(2) // a == [2, 1]
a = [] // a == []
a.unshift(1,2) // a == [1, 2]


// concat()
let a = [1,2,3]
a.concat(4, 5) // => [1,2,3,4,5]
a.concat([4,5],[6,7]) // => [1,2,3,4,5,6,7] arrays are flattened
a.concat(4, [5,[6,7]]) // => [1,2,3,4,5,[6,7]] but not nested arrays
a // => [1,2,3] the original array is unmodified


// slice()
let a = [1,2,3,4,5]
a.slice(0,3) // Returns [1,2,3]
a.slice(3) // Returns [4,5]
a.slice(1,-1) // Returns [2,3,4]
a.slice(-3,-2) // Returns [3]


// splice()
let a = [1,2,3,4,5,6,7,8]
a.splice(4) // => [5,6,7,8] a is now [1,2,3,4]
a.splice(1,2) // => [2,3] a is now [1,4]
a.splice(1,1) // => [4] a is now [1]
// === end 增加/删除数组元素


// === 迭代方法
// foreach()
let uppercase = ""
let letters = [..."hello world"]
letters.forEach(letter => { // Note arrow function syntax here
    uppercase += letter.toUpperCase()
})
uppercase // => "HELLO WORLD"

// map()
let a = [1, 2, 3]
a.map(x => x*x) // => [1, 4, 9]: the function takes input x and returns x*x


// filter()
let a = [5, 4, 3, 2, 1]
a.filter(x => x < 3) // => [2, 1] values less than 3
a.filter((x,i) => i%2 === 0) // => [5, 3, 1] every other value
// === 稀疏数组变为稠密数组
let dense = sparse.filter(() => true)
// === 稀疏数组排除null和undefined
a = a.filter(x => x !== undefined && x !== null)


// every() & some()
let a = [1,2,3,4,5]
a.every(x => x < 10) // => true: all values are < 10.
a.every(x => x % 2 === 0) // => false: not all values are even.
// some()
let a = [1,2,3,4,5]
a.some(x => x%2===0) // => true a has some even numbers.
a.some(isNaN) // => false a has no non-numbers.


// find() & findIndex()
let a = [1,2,3,4,5]
a.findIndex(x => x === 3) // => 2 the value 3 appears at index 2
a.findIndex(x => x < 0) // => -1 no negative numbers in the array
a.find(x => x % 5 === 0) // => 5: this is a multiple of 5
a.find(x => x % 7 === 0) // => undefined: no multiples of 7 in the array


// reduce() & reduceRight()
let a = [1, 2, 3, 4, 5]
a.reduce((x, y) => x + y, 0) // 15
a.reduce((x, y) => x + y) // 15
a.reduce((x,y) => x*y, 1) // => 120 the product of the values
a.reduce((x,y) => (x > y) ? x : y) // => 5 the largest of the values


// reduceRight()
// Compute 2^(3^4). Exponentiation has right-to-left precedence
let a = [2, 3, 4]
a.reduceRight((acc,val) => Math.pow(val,acc)) // => 2.4178516392292583e+2



// === 数组元素查找方法
// indexOf() & lastIndexOf()
let a = [0,1,2,1,0]
a.indexOf(1) // => 1: a[1] is 1
a.lastIndexOf(1) // => 3: a[3] is 1
a.indexOf(3) // => -1: no element has value 3

// Find all occurrences of a value x in an array a and return an array
// of matching indexes
function findall(a, x) {
    let results = [], // The array of indexes we'll return
        len = a.length, // The length of the array to be searched
        pos = 0 // The position to search from
    while (pos < len) { // While more elements to search...
        pos = a.indexOf(x, pos) // Search
        if (pos === -1) break // If nothing found, we're done.
        results.push(pos) // Otherwise, store index in array
        pos = pos + 1 // And start next search at next element
    }
    return results // Return array of indexes
}


// includes()
let a = [1,true,3,NaN]
a.includes(true) // => true
a.includes(2) // => false
a.includes(NaN) // => true
a.indexOf(NaN) // => -1 indexOf can't find NaN
// === end 数组查找元素方法



// === 扁平化数组方法
// flat()
[1, [2, 3]].flat() // => [1, 2, 3]
[1, [2, [3]]].flat() // => [1, 2, [3]]

let a = [1, [2, [3, [4]]]]
a.flat(1) // => [1, 2, [3, [4]]]
a.flat(2) // => [1, 2, 3, [4]]
a.flat(3) // => [1, 2, 3, 4]
a.flat(4) // => [1, 2, 3, 4]


// flagmap()
let phrases = ["hello world", "the definitive guide"]
let words = phrases.flatMap(phrase => phrase.split(" "))
words // => ["hello", "world", "the", "definitive", "guide"]
let words2 = phrases.map(phrase => phrase.split(" "))
words2 // => [["hello", "world"], ["the", "definitive", "guide"]]

// Map non-negative numbers to their square roots
// 空数组会扁平化为nothing
[-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x)) // => [1, 2**0.5]
// === end 扁平化数组方法


// === 数组数组排序方法
let a = ["banana", "cherry", "apple"]
a.sort() // a == ["apple", "banana", "cherry"]

// === 改写成数字比较
let a = [33, 4, 1111, 222]
a.sort() // a == [1111, 222, 33, 4] alphabetical order
a.sort(function (a, b) { // Pass a comparator function
    return a - b // Returns < 0, 0, or > 0, depending on order
}) // a == [4, 33, 222, 1111] numerical order
a.sort((a, b) => b - a) // a == [1111, 222, 33, 4] reverse numerical order

// === 改写成大小写不敏感（case-insensitive）字母表顺序
let a = ["ant", "Bug", "cat", "Dog"]
a.sort() // a == ["Bug","Dog","ant","cat"] case-sensitive sort
a.sort(function (s, t) {
    let a = s.toLowerCase()
    let b = t.toLowerCase()
    if (a < b) return -1
    if (a > b) return 1
    return 0
}) // a == ["ant","Bug","cat","Dog"] case-insensitive sort


let a = [1,2,3]
a.reverse() // a == [3,2,1]
// === end 数组排序方法



// === 数组转换字符串方法
let a = [1, 2, 3]
a.join() // => "1,2,3"
a.join(" ") // => "1 2 3"
a.join("") // => "123"
let b = new Array(10) // An array of length 10 with no elements
b.join("-") // => "---------": a string of 9 hyphens


[1,2,3].toString() // => "1,2,3"
["a", "b", "c"].toString() // => "a,b,c"
[1, [2,"c"]].toString() // => "1,2,c"
// === end 数组转换字符串方法



// === 数组其他方法
let a = new Array(5) // Start with no elements and length 5
a.fill(0) // => [0,0,0,0,0] fill the array with zeros
a.fill(9, 1) // => [0,9,9,9,9] fill with 9 starting at index 1
a.fill(8, 2, -1) // => [0,9,8,8,9] fill with 8 at indexes 2, 3

let a = [1,2,3,4,5]
a.copyWithin(1) // => [1,1,2,3,4]: copy array elements up one
a.copyWithin(2, 3, 5) // => [1,1,3,4,4]: copy last 2 elements to index 2
a.copyWithin(0, -2) // => [4,4,3,4,4]: negative offsets work, too
```

[回到顶部](#javascript_docs)


### 数组静态属性和方法
```typescript
interface ArrayConstructor {
  // 构造函数
  new(arrayLength?: number): any[];
  new <T>(arrayLength: number): T[];
  new <T>(...items: T[]): T[];
  (arrayLength?: number): any[];
  <T>(arrayLength: number): T[];
  <T>(...items: T[]): T[];
  // end 构造函数

  // 第一个参数arg：指定接收一个arg
  // 返回值：判断接收的arg是否是一个数组
  isArray(arg: any): arg is any[];
  // 显式原型
  readonly prototype: any[];

  // 第一个参数arrarLike：类数组对象
  // 返回值：从arrarLike类数组对象创建
  // 一个shallow-coppied数组实例
  from<T>(arrayLike: ArrayLike<T>): T[];

  /**
   * Creates an array from an iterable object.
   * @param arrayLike An array-like object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  // 第一个参数arrarLike：类数组对象
  // 第二个参数mapFn：数组中每个元素调用的map函数
  // 第三个可选参数thisArg：指定mapFn函数中this指向
  from<T, U>(arrayLike: ArrayLike<T>,
    // 第一个参数v：数组当前元素
    // 第二个参数k：当前元素index
    mapfn: (v: T, k: number) => U,
    thisArg?: any): U[];

  // 若干个参数
  // 返回值：返回若干个参数组成的数组实例
  of<T>(...items: T[]): T[];
}
```

1. 数组静态属性和方法是定义在`Array.prototype.constructor`上的方法
2. 之前涉及到的静态方法：
    * Array.of()
    * array.from()



[回到顶部](#javascript_docs)


#### 数组静态属性和方法用例
```javascript
// 判断传递的值是否是一个 Array
Array.isArray(obj)

// === 例子
Array.isArray([1, 2, 3])  // true
Array.isArray({foo: 123}) // false

// 当检测Array实例时, Array.isArray 优于 instanceof
// 因为Array.isArray能检测iframes,如下
let iframe = document.createElement('iframe')
document.body.appendChild(iframe)
xArray = window.frames[window.frames.length - 1].Array
// 通过iframe 的 Array构造一个数组对象
let arr = new xArray(1, 2, 3) // [1,2,3]

Array.isArray(arr)  // true
arr instanceof Array // false
```

[回到顶部](#javascript_docs)



## javascript函数编程
* javascript函数和其他编程语言的异同
* 定义（创建）函数的方式
* 函数调用
* 函数参数
* 作为对象的函数
* 函数命名空间（作用域）
* 闭包

[回到顶部](#javascript_docs)

### javascript函数和其他编程语言的异同
javascript函数（function）和大多数编程语言一样：
* 一致的功能：基本构成块（fundamental building block），是可以重用的代码块
* 函数是参数化的（parameterized），即定义函数包括一系列参数列表（parameter list），参数（parameter）可以在函数体（function body）内当作局部变量（local variable）使用
* 函数调用（invocation）将实参（arguments）传递给函数形参（parameter），函数内可以使用return语句返回值，作为函数调用表达式（function-invocation expression）的值
* 把初始化建立一个新对象（initialize a newly created object）的函数叫做构造函数（constructor）
* 函数里面可以定义函数函数，他们只能被定义的作用域访问，这个叫做闭包（closures）

```javascript
// 函数在所有编程语言的一般形式表达
// parameter as local variable in function body
function function_name(parameter_list){
    // function body
    // excute some operation

    // maybe have the reutrn value
    // as the function invocation value
    return value
}

// function invocation
// argument pass to parameter
function_name(argument_list)
```

javascript函数最大的不同，在于函数是第一类对象（first-class-object）：
* 像对象类型值一样：可以赋值给其他值，可以作为函数参数传递，可以作为返回值返回，可以动态设置和访问属性
* 每一个函数调用都有调用环境（invocation context），用this关键字表示，前面介绍Object已经涉及到，把定义在对象类型内的函数叫做方法（method），当在对象上调用方法（即函数），函数的调用环境（invocation context），即this的值是这个对象

[回到顶部](#javascript_docs)

### 函数定义（创建）的方式
* function声明
* function表达式和IIFE
* 箭头函数
* 构造函数
* Function()构造函数创建函数


在对象中定义函数（被称为方法），前面以及涉及，在类（class）中定义函数，后面会涉及。对于特殊类型的函数，如生成器（generator function）函数 `function*`和异步函数（async function）后面会涉及

[回到顶部](#javascript_docs)


#### function声明
函数声明（declaration）定义函数，这种方式定义的函数在作用域内会被进行函数提升（hoisted），所以函数声明创建的函数，在定义函数前也能调用，因为函数标识符已经被作用域提升（hoist）注册了。
```javascript
// Print the name and value of each property of o. Return undefined.
function printprops(o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}\n`)
    }
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1
    let dy = y2 - y1
    return Math.sqrt(dx * dx + dy * dy)
}
// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1
    return x * factorial(x - 1)
}
```

#### function表达式和IIFE
function表达式（expression），即在function中用关键字创建函数，将创建的function对象类型赋值给另一个变量，函数表达式可以省略函数名（除非函数内递归调用本身）。

function表达式并不像function声明一样提升作用域，只有在执行到这条语句才创建一个function对象，赋值给其他变量。在function表达式赋值给一个变量引用前，并不能使用这个变量调用函数

```javascript
// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
// 如果函数不需要覆盖赋新值，用const是一个很好的实践
const square = function(x) { return x*x }

// Function expressions can include names, which is useful for recursion.
const f = function fact(x) { if (x <= 1) return 1 else return x*fact(x-1) }

// Function expressions can also be used as arguments to other functions:
[3,2,1].sort(function(a,b) { return a-b })

// Function expressions are sometimes defined and immediately invoked:
// 立即执行
let tensquared = (function(x) {return x*x}(10))
```


IIFE是在函数声明后立即调用的函数表达式，当函数只使用一次时，通常使用IIFE (Immediately Invokable Function Expressions)。
```javascript
/*
函数表达式达式被创建就立即调用执行, 在 JavaScript 库中经常被使用。
在文件中包围整个内容创建一个闭包（创建里一个私有命名空间），从而避免与其他JavaScript 模块和库存在潜在命名冲突。
*/
const myLibrary = (function() {
  var privateVariable = 2
  return {
    publicMethod: () => privateVariable
  }
})()
privateVariable // ReferenceError
myLibrary.publicMethod() // 2
```
[回到顶部](#javascript_docs)

#### 箭头函数
当函数作为参数传递给另一个函数，箭头函数是更简洁的定义函数的语法。参数和`=>`之间不能隔行，否则会把`=>`之前当成一个语句。

箭头函数和其他函数定义不同的是：
* 从他们定义的环境中继承this关键字，而不是像其他定义函数的方式一样，从调用环境（invocation context）决定this的值
* 没有显示原型prototype属性, 这意味着他们没法作为构造函数使用（没有`function_name.prototype.constructor`），不能被new调用。
* this由定义的环境决定，使用`call | apply | bind`不能更改this，这些方法的第一个参数会被忽略
* 没有`super & arguments & new.target`

```javascript
const sum = (x, y) => { return x + y }

// 更简洁
// 直接return，可以省略{}
const sum = (x, y) => x + y

// 只有一个参数，省略()
const polynomial = x => x*x + 2*x + 3

// 没有参数，不能省略()
const polynomial = x => x*x + 2*x + 3
```

但是，如果箭头函数返回值是一个对象字母量，因为函数体的`{}`和对象字面量`{}`有冲突，要注意冲突
```javascript
const f = x => { return { value: x } } // Good: f() returns an object
const g = x => ({ value: x }) // Good: g() returns an object
const h = x => { value: x } // Bad: h() returns nothing
const i = x => { v: x, w: x } // Bad: Syntax Error
```

函数作为参数传递，是箭头函数最大的用武之地
```javascript
// Make a copy of an array with null elements removed.
let filtered = [1,null,2,3].filter(x => x !== null) // filtered == [1,2,3]
// Square some numbers:
let squares = [1,2,3,4].map(x => x*x) // squares == [1,4,9,16]
```


箭头函数可以被可以识别
```javascript
let comparator = (a, b) => a - b

console.log(typeof comparator)                 // "function"
console.log(comparator instanceof Function)    // true

// 可以对箭头函数使用 call apply bind, 虽然this值不会被改变
let sum = (num1, num2) => num1 + num2
console.log(sum.call(null, 1, 2))      // 3
console.log(sum.apply(null, [1, 2]))   // 3
let boundSum = sum.bind(null, 1, 2)
console.log(boundSum())                // 3
```

[回到顶部](#javascript_docs)



### 函数调用
1. 函数调用都是通过函数调用表达式（functon invocation expression）调用函数，特殊的，构造函数的调用需要函数调用表达式前添加关键字new，函数调用表达式的结果是函数的返回值（如果没有return语句，函数体执行完返回undefined）函数表达式的组成：
    * (：open parenthesis 开口圆括号
    *  comma-separated argument-list
    * )：close parenthesis 闭口圆括号
2. 函数调用表达式方式
    * 作为函数调用
    * 作为对象的方法调用
    * 作为构造函数被调用
    * 函数的bind方法显式绑定后调用函数
    * 函数的call或apply方法间接调用函数
    * 隐式的函数调用
3. 函数调用中this指向：this通常指函数的执行环境(function context)或者调用环境（invocation text）, this的指向受到函数调用方式的影响，总结如下：
    * 作为构造函数被调用时，构造函数内的this指向新建的对象。这个优先级比其他函数调用的this绑定都要高
    * 作为对象的方法被调用，this指向这个对象。包括使用`Function.prototype.bind()`修改函数绑定到对象上（模拟对象方法），后面调用这个函数，this指向bind()方法的第一个参数指向的对象
    * `Function.prototype.call() & Function.prototype. `间接调用函数，this是方法的第一个参数指定的对象
    * 作为函数调用时，即是默认绑定。this为global对象（非严格，严格为undefined）
    * 特殊的，箭头函数的this由定义的环境决定（箭头函数没有自己的 this, 它的this继承于上一层代码块的this）

[回到顶部](#javascript_docs)

#### 函数作为函数调用
函数作为函数调用是理所当然，又是常见的一种函数调用方式。函数作为函数调用，函数的调用环境（invocation context），即this关键字的值在非严格（non-strict）模式下是global object，严格模式下是this的值是undefined，注意，箭头函数调用从定义箭头函数的地方继承this

函数作为函数调用用例：

```javascript
// 函数作为函数调用
printprops({x: 1})
let total = distance(0,0,2,1) + distance(2,1,3,5)
let probability = factorial(5)/factorial(13)

// 函数调用表达式可以在条件运算符中使用
(f !== null && f !== undefined) ? f(x) : undefined

// Define and invoke a function to determine if we're in strict mode.
// IIFE函数也不使用this
const strict = (function() { return !this }())
```

[回到顶部](#javascript_docs)

#### 函数作为对象方法调用
1. 面向对象编程中已经介绍，在对象中的函数称为方法。函数作为对象方法调用，方法的调用环境（invocation context）是对象本身，所以this指向对象本身
2. 函数作为对象方法调用，this指向对象本身，当对象方法接着使用这个返回对象，执行下一个对象方法，依次类推，就是方法链（method-chain）编程方式


```javascript
// === 函数作为对象方法调用
let calculator = { // An object literal
  operand1: 1,
  operand2: 1,
  add() {
    // We're using method shorthand syntax for this function
    // Note the use of the this keyword to refer to the containing object.
    this.result = this.operand1 + this.operand2
  }
}
calculator.add() // A method invocation to compute 1+1.
calculator.result // => 2
// === end 函数作为对象方法调用

// 对象象方法调用支持更复杂的语法
customer.surname.toUpperCase() // Invoke method on customer.surname
f().m() // Invoke method m() on return value of f()
// === end 对象象方法调用支持更复杂的语法

// === 对象方法链调用
// Run three asynchronous operations in sequence, handling errors.
doStepOne().then(doStepTwo).then(doStepThree).catch(handleErrors)

new Square().x(100).y(100).size(50).outline("red").fill("blue").draw()
// === end 对象方法链调用
```

[回到顶部](#javascript_docs)


##### 对象方法中的嵌套函数
在对象方法中的this指向对象本身，但在对象方法中的嵌套函数，和一般函数（非箭头函数）一样，this在非严格模式下指向global object，严格模式下返回undefined，解决这个问题：
* 用箭头函数可以解决这个问题
* 另一个解决的方法是为方法内的嵌套函数调用bind方法指定该函数的调用对象


对象方法中的嵌套函数用例：

```javascript
let o = { // An object o.
  m: function () { // Method m of the object.
    let self = this // Save the "this" value in a variable.
    this === o // => true: "this" is the object o.
    f() // Now call the helper function f().
    function f() { // A nested function f
      this === o // => false: "this" is global or undefined
      self === o // => true: self is the outer "this" value.
    }
    // 箭头函数可以的this是定义的环境决定的
    const g = () => {
      this === o // =>true
    }
    g()

    // 嵌套函数调用bind绑定隐式对象
    h.bind(this)()
    function h() {
      this === 0 // => true
    }
  }
}
o.m() // Invoke the method m on the object o.
```

[回到顶部](#javascript_docs)

#### 函数作为构造函数被调用
1. 构造函数描述：用于构造函数用于初始化创建一个对象
2. 构造函数与一般函数的区别：
    * 函数作为构造函数被调用，需要在函数调用表达式前添加new关键字
    * 构造函数的首字母大写
    * 函数体内不显式使用return语句，构造函数默认返回新创建的对象。如果构造函数内显式定义了return，那么就返回return表达式的值
3. 构造函数创建的对象，隐式原型指向构造函数的显式原型，例如用构造函数Foo创建了一个对象bar，`bar.[[prototype]] ===Foo.prototype`
4. 函数作为构造函数被调用，函数的调用环境（invocation context），this指向新建的对象
5. 函数体内`new.target`用于判断函数是不是作为构造函数被调用，如果这个值存在，则这个函数是被作为构造函数使用new关键字调用，如果这个值是undefined，函数调用没有使用new关键字。另外，用class关键字创建的类，不允许不用new调用
6. 构造函数的判断使用instanceof表达式：`instanceof`运算符的左侧是要检测的对象，右侧是构造函数，如果这个对象是从构造函数的原型上继承，表达式返回true。这个运算符不是测试对象是否是由构造函数实例化的，而是测试对象的原型是否是构造函数的原型`FunctionName.property`。如果想在原型链上判断指定原型，不需要使用构造函数作为中间人（intermediary），可以使用`Object.prototype.isProtopeOf()`方法


> 箭头函数因为没有property属性，所以不能作为构造函数。也不能在构造函数内使用箭头函数作为方法，因为箭头函数从定义他们的环境（context）继承this，而不是将this设置为调用函数的对象上，调用方法中的this是需要指向调用方法的实例对象，箭头函数做不到这一点。


函数作为构造函数被调用用例：

```javascript
// === 函数作为构造函数被调用
o = new Object()
o = new Object
// === end 函数作为构造函数被调用 

// === 使用new.target
// 判断函数是否作为构造函数被调用
// 避免构造函数不是作为构造函数被调用
function C() {
    if (!new.target) return new C()
    // initialization code goes here
}
// === end 使用new.target


// === instanceof
// 判断对象的原型是否是构造函数的原型
function Foo(){}
let f = new Foo()
// f inherits Foo.prototype
f instanceof Foo // => true

// 两个不同的构造函数，可以指定相同的原型对象
function Bar(){}
Bar.prototype = Foo.prototype
let b = new Bar()
b instanceof Foo // => true
// === end instanceof
```

[回到顶部](#javascript_docs)

#### 函数使用bind方法显式绑定后调用函数
```typescript
interface Function {
  // 第一个参数thisArg：指定调用对象，
  // 即指定调用环境（invocation context）
  // 后续的参数传递给调用bind方法的函数
  // 中的形参
  // 将函数绑定到对象上，后续调用这个函数
  // 可以像在对象上调用方法一样调用函数
  bind(this: Function, thisArg: any, ...argArray: any[]): any;
}
```
1. 所有函数都有一个隐式原型`[[prototype]]`，指向`Function.prototype`
2. `Function.prototype.bind()`在隐式原型上定义，这个方法显式将函数绑定到对象上，后续调用这个函数，可以像在对象上调用方法一样调用函数
3. 注意，箭头函数的this由定义的环境决定（从定义环境中继承this），不能使用call()和apply()方法修改this的值，如果箭头函数调用这个方法，第一个参数会被忽略

函数的bind方法显式绑定后调用函数用例：

```javascript
function f(y) { return this.x + y } // This function needs to be bound
let o = { x: 1 } // An object we'll bind to
let g = f.bind(o) // Calling g(x) invokes f() on o
g(2) // => 3
let p = { x: 10, g } // Invoke g() as a method of this object
p.g(2) // => 3: g is still bound to o, not p.

// 后续参数会传递给函数
let sum = (x,y) => x + y // Return the sum of 2 args
let succ = sum.bind(null, 1) // Bind the first argument to 1
succ(2) // => 3: x is bound to 1, and we pass 2 for the y argument
function f(y,z) { return this.x + y + z }
let g = f.bind({x: 1}, 2) // Bind this and y
g(3) // => 6: this.x is bound to 1, y is bound to 2 and z is 3
```

[回到顶部](#javascript_docs)

#### 函数使用call或apply方法间接调用函数
```typescript
interface Function {
  // 第一个参数thisArg：指定调用对象，
  // 即指定调用环境（invocation context）
  // 第二个可选argArray参数：是一个数组，数组中
  // 的元素传递给调用call方法的函数
  // 中的形参
  apply(this: Function, thisArg: any, argArray?: any): any;
  // 第一个参数thisArg：指定调用对象，
  // 即指定调用环境（invocation context）
  // 后续的参数传递给调用call方法的函数
  // 中的形参
  call(this: Function, thisArg: any, ...argArray: any[]): any;
}
```

1. 所有函数都有一个隐式原型`[[prototype]]`，指向`Function.prototype`
2. `Function.prototype.call() & Function.prototype.apply()`在隐式原型上定义，这两个方法可以实现间接调用函数，显式指定this的值
3. 注意，箭头函数的this由定义的环境决定（从定义环境中继承this），不能使用call()和apply()方法修改this的值，如果箭头函数调用这两个方法，第一个参数会被忽略


函数使用call或apply方法间接调用函数用例：

```javascript
let o = {}
function f() { }
f.call(o)
f.apply(o)

// 和下面对象调用方法一样作用
o.m = f // Make f a temporary method of o.
o.m() // Invoke it, passing no arguments.
delete o.m // Remove the temporary method.

// call方法后续的参数会传递给function f
f.call(o, 1, 2)
// apply方法的第二个参数（数组）会传递给function f
f.apply(o, [1, 2])


// === apply() 
// 这里实参arrayOfNumbers是一个数组
// 而Math.max()只能接受连续的参数列表
// 使用apply()可以将数组参数转换为函数的参数列表
let biggest = Math.max.apply(Math, arrayOfNumbers)

// === 用apply将数组添加到另一个数组
// 传递一个数组来push，它实际上会将该数组作为单个元素添加，而不是添加数组中的每个元素
let array = ['a', 'b']
let elements = [0, 1, 2]
array.push.apply(array, elements)
console.log(array) // ["a", "b", 0, 1, 2]

// === apply和扩展运算符
// apply方法如果只是将数组转换为连续参数
// 扩展运算符也可以完成
// Replace the method named m of 
// the object o with a version that logs
// messages before and after invoking the original method.
function trace(o, m) {
  let original = o[m] // Remember original method in the closure.
  o[m] = function (...args) { // Now define the new method.
    console.log(new Date(), "Entering:", m) // Log message.
    let result = original.apply(this, args) // Invoke original.
    console.log(new Date(), "Exiting:", m) // Log message.
    return result // Return result.
  }
}
```

[回到顶部](#javascript_docs)

#### 隐式的函数调用
很多功能是由javascript自己隐式调用函数完成的。但是隐式的函数调用，也是bug和副作用（side effect），性能问题（performance issue）产生的重要原因隐式调用函数举例：
* 访问设置对象属性，如果存在getter和setter，会自动被调用
* 当对象在string 环境中使用（例如使用+连接对象和字符串），会自动调用toString()方法，当对象在number环境中使用，则自动调用valueOf()方法
* 对迭代对象循环，会自动调用很多方法（后面介绍迭代对象会涉及）

[回到顶部](#javascript_docs)


### 函数参数
javascript 形参（parameter）不指定类型，函数调用（function-invocation）过程中不会检测实参（argument）的值

* 可选形参和默认形参
* 变量长度实参列表
    * 剩余形参
    * arguments对象
* 函数调用实参使用扩展运算符
* 实参解构赋值形参
* 实参数据类型

[回到顶部](#javascript_docs)


#### 可选形参和默认形参
函数调用时，当实参（argument）个数少于形参（parameter），其余的形参被称为可选的形参（optional parameter）会设置为默认值，通常是undefined，设置可选形参，要确保可选形参是在参数列表末尾

```javascript
// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a) {
    if (a === undefined) a = [] // If undefined, use a new array
    for (let property in o) a.push(property)
    return a
}
// getPropertyNames() can be invoked with one or two arguments:
let o = { x: 1 }, p = { y: 2, z: 3 } // Two objects for testing
let a = getPropertyNames(o) // a == ["x"] get o's properties in a new array


// 上面的操作可以简化if判断，使用逻辑表达式
a = a || []
```

现在，通常使用，形参列表默认值（defualt parameter in parameter-list）解决可选形参及其默认值的问题

```javascript
// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a = []) {
    for (let property in o) a.push(property)
    return a
}
```


形参默认值，还可以根据前面的形参使用表达式决定默认值
```javascript
// This function returns an object representing a rectangle's dimensions.
// If only width is supplied, make it twice as high as it is wide.
const rectangle = (width, height = width * 2) => ({ width, height })
rectangle(1) // => { width: 1, height: 2 }
```

形参默认值存在tdz，在初始化前不能访问，否则会抛出`ReferenceError`错误，参数的初始化在函数调用时进行
```javascript
// seconde 存在暂时性死区
function add(first = second, second) {
  return first + second
}

console.log(add(1, 1)) // 2
console.log(add(undefined, 1)) // Reference Error
```

[回到顶部](#javascript_docs)


#### 变量长度实参列表
变量长度参数列表（variable-length-argument-list）即不确定的参数列表。对于实参个数少于形参的函数调用，通过形参默认值解决，而对于不确定的实参个数，通常通过以下方式解决：

* 剩余形参
* argument对象

[回到顶部](#javascript_docs)


##### 剩余形参
当实参多余形参，或者实参是任意不确定数量这些情况则由剩余形参（rest parameter）将多余实参放到一个数组里，这个数组可以是空的（empty），但从不是undefined

注意事项：
* 剩余形参（rest parameter）必须在形参列表最后一个定义
* 剩余参数不能再对象的`setter`属性中使用，因为setter规定只能使用单个参数
* 不要和和扩展运算符混淆，在函数形参中，`...`是表示剩余形参，而扩展运算符在对象字面量，数组字面量，函数调用等情景中都各有特点。

```javascript
function max(first = -Infinity, ...rest) {
    let maxValue = first // Start by assuming the first arg is biggest
    // Then loop through the rest of the arguments, looking for bigger
    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n
        }
    }
    // Return the biggest
    return maxValue
}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6) // => 1000
```

[回到顶部](#javascript_docs)


##### arguments对象
剩余形参（rest parameter）之前，变量长度实参函数通过argument对象解决。在严格模式下，这是一个保留字（reserverd word），应该避免标识符命名使用arguments

在函数体（function body），`arguments`标识符指向arguments 对象，这是一个array-like 对象。

建议，介绍arguments对象仅仅是以前的代码大量使用，使用这个会让优化苦难，重构代码，建议使用剩余参数代替

```javascript
function max(x) {
    let maxValue = -Infinity
    // Loop through the arguments, looking for, and remembering, the biggest.
    for (let i = 0 i < arguments.length i++) {
        if (arguments[i] > maxValue) maxValue = arguments[i]
    }
    // Return the biggest
    return maxValue
}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6) // => 1000    `
```
[回到顶部](#javascript_docs)


#### 函数调用实参使用扩展运算符
函数实参（实参是可迭代对象，iterable object）可以使用扩展运算符，取出（uppack）和扩展（spread out）这个可迭代对象


函数调用中的实参使用扩展运算符，通常可以配合和剩余形参一起使用
```javascript
// This function takes a function and returns a wrapped version
function timed(f) {
    return function (...args) { // Collect args into a rest parameter array
        console.log(`Entering function ${f.name}`)
        let startTime = Date.now()
        try {
            // Pass all of our arguments to the wrapped function
            return f(...args) // Spread the args back out again
        }
        finally {
            // Before we return the wrapped return value, print elapsed time.
            console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`)
        }
    }
}
// Compute the sum of the numbers between 1 and n by brute force
function benchmark(n) {
    let sum = 0
    for (let i = 1 i <= n i++) sum += i
    return sum
}
// Now invoke the timed version of that test function
timed(benchmark)(1000000) // => 500000500000 this is the sum of the numbers  1
```

[回到顶部](#javascript_docs)

#### 实参解构赋值形参
前面介绍过变量的解构赋值，函数调用中，将实参赋值给形参，也是一个赋值过程，所以在函数中可以在形参中，可以解构实参的值

如果多重的解构让代码难以读写，不建议复杂化
```javascript
function f([a, b]) {
    return a - b
}
f([2, 1]) // => 1

// ===
function vectorAdd([x1,y1], [x2,y2]) { // Unpack 2 arguments into 4 parameters
 return [x1 + x2, y1 + y2]
}
vectorAdd([1,2], [3,4]) // => [4,6]

// Multiply the vector {x,y} by a scalar value
function vectorMultiply({ x, y }, scalar) {
    return { x: x * scalar, y: y * scalar }
}
vectorMultiply({ x: 1, y: 2 }, 2) // => {x: 2, y: 4}

// ===
// Unpack 1st object into x1 and y1 params
// Unpack 2nd object into x2 and y2 params
function vectorAdd({ x: x1, y: y1 }, { x: x2, y: y2 }) {
    return { x: x1 + x2, y: y1 + y2 }
}
vectorAdd({ x: 1, y: 2 }, { x: 3, y: 4 }) // => {x: 4, y: 6}
```

解构中可以使用默认形参
```javascript
// Multiply the vector {x,y} or {x,y,z} by a scalar value
function vectorMultiply({ x, y, z = 0 }, scalar) {
    return { x: x * scalar, y: y * scalar, z: z * scalar }
}
vectorMultiply({ x: 1, y: 2 }, 2) // => {x: 2, y: 4, z: 0}
```

数组剩余解构和对象剩余解构，同样可以在函数中使用
```javascript
// This function expects an array argument. The first two elements of that
// array are unpacked into the x and y parameters. Any remaining elements
// are stored in the coords array. And any arguments after the first array
// are packed into the rest array.
function f([x, y, ...coords], ...rest) {
    return [x + y, ...rest, ...coords] // Note: spread operator here
}
f([1, 2, 3, 4], 5, 6) // => [3, 5, 6, 3, 4]

// ===
// Multiply the vector {x,y} or {x,y,z} by a scalar value, retain other props
function vectorMultiply({ x, y, z = 0, ...props }, scalar) {
    return { x: x * scalar, y: y * scalar, z: z * scalar, ...props }
}
vectorMultiply({ x: 1, y: 2, w: -1 }, 2) // => {x: 2, y: 4, z: 0, w: -1}
```

[回到顶部](#javascript_docs)

#### 实参数据类型
javascript 形参是没有类型和类型检查的，所以函数名和形参名称需要更加可描述，文档解析也要更加清晰

就行之前涉及到，javascript对待类型转换是很宽容的。如果函数形参接受一个string，传递的实参如果不是string，会被自动转换为string（所有原始类型都有string，所有的对象都有toString()方法），所以不会出现错误

函数里面添加一些实参类型的检测，如果不想这样，可以选择typescript
```javascript
// Return the sum of the elements an iterable object a.
// The elements of a must all be numbers.
function sum(a) {
    let total = 0
    for (let element of a) { // Throws TypeError if a is not iterable
        if (typeof element !== "number") {
            throw new TypeError("sum(): elements must be numbers")
        }
        total += element
    }
    return total
}
sum([1, 2, 3]) // => 6
sum(1, 2, 3) // !TypeError: 1 is not iterable
sum([1, 2, "3"]) // !TypeError: element 2 is not a number
```

[回到顶部](#javascript_docs)


### 作为对象的函数
javascript的函数也是对象：
* 像对象一样赋值给其他变量
* 作为对象内的属性（方法），作为数组中的元素
* 也能作为实参传递
* 也能为函数添加属性，相当于静态属性，可以在多次调用中访问某个数据状态，不建议使用这个特性，很可能会出现bug，可以通过函数返回一个函数，函数闭包访问外部变量共享这个数据状态


作为对象一样赋值给其它变量，作为对象内的属性（方法），作为数组中的元素
```javascript
function square(x) { return x * x }
let s = square // Now s refers to the same function that square does

// function可以作为对象属性的值，在对象中的function叫做方法
let o = {square: function(x) { return x*x }} // An object literal
let y = o.square(16) // y == 256

// function可以作为数组的元素
let a = [x => x*x, 20] // An array literal
a[0](a[1]) // => 400
```

作为实参传递
```javascript
// For the sake of the example, we implement the simple functions again,
// this time within an object literal
const operators = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    pow: Math.pow // This works for predefined functions too
}
// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands. Note
// the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function") {
        return operators[operation](operand1, operand2)
    }
    else throw "unknown operator"
}
operate2("add", "hello", operate2("add", " ", "world")) // => "hello world"
operate2("pow", 10, 2) // => 100
```

函数添加属性，相当于静态属性，可以在多次调用中访问某个数据状态
```javascript
// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
    return uniqueInteger.counter++ // Return and increment counter property
}
uniqueInteger() // => 0
uniqueInteger() // => 1
```

[回到顶部](#javascript_docs)


### 函数命名空间（作用域）
函数有自己的命名空间（namespace，或scope作用域），不会污染外部的命名空间

因此引入其他第三方库不必担心污染变量
```javascript
function chunkNamespace() {
    // Chunk of code goes here
    // Any variables defined in the chunk are local to this function
    // instead of cluttering up the global namespace.
}
chunkNamespace() // But don't forget to invoke the function!s
```

对于第三方代码通常以立即执行表达式（IIFE，immedi‐ately invoked function expression）引入，通过闭包还可以通过函数命名空间访问里面的函数
```javascript
(function () { // chunkNamespace() function rewritten as an unnamed expression.
    // Chunk of code goes here
}()) // End the function literal and invoke it now.
```

[回到顶部](#javascript_docs)


### 闭包
* 词法作用域和闭包
* 闭包生命周期
* 闭包的应用
* 闭包的缺点

#### 词法作用域与闭包
很容易描述的是，闭包是因为函数访问外部函数作用域的变量产生的。实际上，要想了解闭包，和词法作用域是密切相关的，像很多编程语言一样，javascript使用词法作用域（lexical scoping），这意味着函数执行使用的变量作用域由定义函数的环境（the context of function definition）决定，而不是取决于什么时候被调用。


为了实现词法作用域，javascript 函数对象（javascript函数也是对象）在被定义（创建）的时候，创建自己的函数作用域（scope）注册标识符，不在函数作用域内注册的标识符，通过函数的`[[enviroment]]`保存的词法作用域，沿着作用域链向上查找。
* 如果找到标识符了，就创建一个闭包对象，如果已经创建，那么就忽略创建，把标识符注册到闭包对象中，闭包对象放到函数对象的内部属性scopes（`function_name.[[scopes]]`）指定的数组中
* 到全局作用域都找不到标识符，会返回ReferenceError
* 越靠近函数作用域的闭包对象，在`function_name.[[scopes]]`数组中元素的下标越小，scopes数组最少有一个`global`作用域对像（非闭包对象，可用于使用内置的全局属性和全局方法）


```javascript
// 词法作用域，由函数定义，而不是看哪里执行决定
let scope = "global scope" // A global variable
function checkscope() {
    let scope1 = 'scope1'
    function f1() {
        let scope2 = 'scope2'
        function f2() {
            return { scope1, scope2, scope }
        }
        return f2
    }
    return f1
}

/* === f1["[[Scopes]]"]: scopes[3]
f1["[[Scopes]]"][0]: 
    Closure (checkscope) {scope1: 'scope1'}
f1["[[Scopes]]"][1]:
     Closure {scope: 'global scope'}
f1["[[Scopes]]"][2]: 
    Global  {...}
*/
let f1 = checkscope()

/* === f2["[[Scopes]]"]: scopes[4]
f2["[[Scopes]]"][0] : 
    Closure (f1) {scope2: 'scope2'}
f2["[[Scopes]]"][1]: 
    Closure (checkscope) {scope1: 'scope1'}
f2["[[Scopes]]"][2]: 
    Closure {scope: 'global scope'}
f2["[[Scopes]]"][3]: 
    Global  {...}
*/
let f2 = f1()

// {
//     scope1: "scope1",
//     scope2: "scope2",
//     scope: "global scope",
// }
let f3 = f2()
```

[回到顶部](#javascript_docs)

#### 闭包的应用
闭包其实就是访问外部作用域标识符建立的对象。

在这个特点上可以做：
* 通常遇到一种情况，调用一个函数，返回一个一个函数对象，这个函数对象是在调用函数内定义的，通过闭包仍然可以访问这个调用函数的作用域
* 模拟私有变量，函数向外暴露函数，通过函数访问设置私有变量
* 通过立即执行函数，将对象挂载到window对象上

[回到顶部](#javascript_docs)

##### 通过闭包访问函数外部作用域标识符
```javascript
let scope = "global scope" // A global variable
function checkscope() {
    let scope = "local scope" // A local variable
    function f() { return scope } // Return the value in scope here
    return f()
}
checkscope() // => "local scope"

// 词法作用域，由函数定义，而不是看哪里执行决定
let scope = "global scope" // A global variable
function checkscope() {
    let scope = "local scope" // A local variable
    function f() { return scope } // Return the value in scope here
    return f
}
let s = checkscope()() // => local scope
```

[回到顶部](#javascript_docs)

##### 通过闭包设置函数外部作用域标识符
之前我们介绍可以使用函数也是对象这个特点，将多次调用函数要用到的属性定义到对象上，这个很容易造成bug，用闭包可以很好实现私有数据的访问
```javascript
// 注意，函数是IIFE
// 所以uniqueInteger接受的是函数调用后的返回值
// 返回值返回的是一个函数
// 返回对函数访问外部作用域的变量
let uniqueInteger = (function () { // Define and invoke
    let counter = 0 // Private state of function below
    return function () { return counter++ }
}())
uniqueInteger() // => 0
uniqueInteger() // => 1
```

[回到顶部](#javascript_docs)


##### 对象方法通过闭包共享方法外部作用域标识符
在函数内，通过对象返回定义在函数内的多个函数，即以多个对象方法形式返回，这多个对象方法，可以共享外部作用域标识符，因为词法作用域，当函数被调用，定义在函数内的函数就注册标识符和创建闭包，函数内的函数作用域层级一样，所以闭包对象里的相同标识符也是一致的，从而实现不同对象方法共享外部作用域标识符。

```javascript
function counter() {
    let n = 0
    return {
        count: function () { return n++ },
        reset: function () { n = 0 }
    }
}
// 注意，c和d是两次对函数的调用，每次调用都会创建一个不同的闭包环境
// 而同一个调用counter返回的对象方法，因为词法环境，可以共享标识符
let c = counter(), d = counter() // Create two counters
c.count() // => 0, but n=1
d.count() // => 0: they count independently, but n=1
c.reset() // n reset 0, count and reset share same n
c.count() // => 0: because we reset, but n=1
d.count() // => 1: d was not reset,but n=2
```

[回到顶部](#javascript_docs)


#### 闭包生命周期
闭包生命周期：词法作用域都是在解析阶段注册的，闭包自然在解析阶段建立闭包对象，而不是执行调用函数的时候，闭包在函数标记为为垃圾对象的时候消亡

[回到顶部](#javascript_docs)

#### 闭包的缺点
函数执行完，函数内的被引用变量没有被释放，占用内存，容易造成内存泄漏（占用内存但是不使用）。解决：
* 能不用闭包就不用
* 及时释放

> 扩展：内存溢出，程序运行出现的错误，当程序需要的内存超过剩余内存，就会发生内存溢出
> 扩展：内存泄漏 参考内存泄漏

[回到顶部](#javascript_docs)

### 作为对象的函数编程
作为对象的函数，使得javascript函数编程有函数编程的风格

* 使用函数处理数组
* 高阶函数
* 偏函数
* 记忆函数

#### 使用函数处理数组
前面数组使用函数已经有所涉及，这是javascript函数编程的一个应用
```javascript
// First, define two simple functions
const sum = (x, y) => x + y
const square = x => x * x
// Then use those functions with Array methods to compute mean and stddev
let data = [1, 1, 3, 5, 5]
let mean = data.reduce(sum) / data.length // mean == 3
let deviations = data.map(x => x - mean)
let stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1))
stddev // => 2
```

[回到顶部](#javascript_docs)

#### 高阶函数
高阶函数（higher-order-function）是使用函数作为函数形参（parameter），然会函数

```javascript
// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value
function not(f) {
    return function (...args) { // Return a new function
        let result = f.apply(this, args) // that calls f
        return !result // and negates its result.
    }
}
const even = x => x % 2 === 0 // A function to determine if a number is even
const odd = not(even) // A new function that does the opposite
[1, 1, 3, 5, 5].every(odd) // => true: every element of the array is odd
```

另一个例子
```javascript
// Return a new function that computes f(g(...)).
// The returned function h passes all of its arguments to g, then passes
// the return value of g to f, then returns the return value of f.
// Both f and g are invoked with the same this value as h was invoked with.
function compose(f, g) {
    return function (...args) {
        // We use call for f because we're passing a single value and
        // apply for g because we're passing an array of values.
        return f.call(this, g.apply(this, args))
    }
}
const sum = (x, y) => x + y

const square = x => x * x
compose(square, sum)(2, 3) // => 25 the square of the sum
```

[回到顶部](#javascript_docs)

#### 偏函数
偏函数（partial_application_functions）的一个应用就是，之前的`Function.prototype.bind()`方法，将函数绑定到第一个参数对象上，然后将后续的参数作为后续函数调用的开始部分。

这是javascript函数编程的一部分，也并不是总被人认可的
```javascript
// The arguments to this function are passed on the left
function partialLeft(f, ...outerArgs) {
    return function (...innerArgs) { // Return this function
        let args = [...outerArgs, ...innerArgs] // Build the argument list
        return f.apply(this, args) // Then invoke f with it
    }
}
// The arguments to this function are passed on the right
function partialRight(f, ...outerArgs) {
    return function (...innerArgs) { // Return this function
        let args = [...innerArgs, ...outerArgs] // Build the argument list
        return f.apply(this, args) // Then invoke f with it
    }
}

// The arguments to this function serve as a template. Undefined values
// in the argument list are filled in with values from the inner set.
function partial(f, ...outerArgs) {
    return function (...innerArgs) {
        let args = [...outerArgs] // local copy of outer args template
        let innerIndex = 0 // which inner arg is next
        // Loop through the args, filling in undefined values from inner args
        for (let i = 0 i < args.length i++) {
            if (args[i] === undefined) args[i] = innerArgs[innerIndex++]
        }
        // Now append any remaining inner arguments
        args.push(...innerArgs.slice(innerIndex))
        return f.apply(this, args)
    }
}

// Here is a function with three arguments
const f = function (x, y, z) { return x * (y - z) }
// Notice how these three partial applications differ
partialLeft(f, 2)(3, 4) // => -2: Bind first argument: 2 * (3 - 4)

partialRight(f, 2)(3, 4) // => 6: Bind last argument: 3 * (4 - 2)
partial(f, undefined, 2)(3, 4) // => -6: Bind middle argument: 3 * (2 - 4)

// ===
const increment = partialLeft(sum, 1)
const cuberoot = partialRight(Math.pow, 1 / 3)
cuberoot(increment(26)) // => 3

//===
const not = partialLeft(compose, x => !x)
const even = x => x % 2 === 0
const odd = not(even)
const isNumber = not(isNaN)
odd(3) && isNumber(2) // => true

// === 
// sum() and square() functions are defined above. Here are some more:
const product = (x, y) => x * y
const neg = partial(product, -1)
const sqrt = partial(Math.pow, undefined, .5)
const reciprocal = partial(Math.pow, undefined, neg(1))
// Now compute the mean and standard deviation.
let data = [1, 1, 3, 5, 5] // Our data
let mean = product(reduce(data, sum), reciprocal(data.length))
let stddev = sqrt(product(reduce(map(data,
    compose(square,
        partial(sum, neg(mean)))),
    sum),
    reciprocal(sum(data.length, neg(1)))))
[mean, stddev] // => [3, 2]
```

[回到顶部](#javascript_docs)

#### 记忆函数
记忆函数（memorization），缓存之前的计算结果，在函数编程里面叫memorization

```javascript
// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
    const cache = new Map() // Value cache stored in the closure.
    return function (...args) {
        // Create a string version of the arguments to use as a cache key.
        let key = args.length + args.join("+")
        if (cache.has(key)) {
            return cache.get(key)
        } else {
            let result = f.apply(this, args)
            cache.set(key, result)
            return result
        }
    }
}


// Return the Greatest Common Divisor of two integers using the Euclidian
// algorithm: http://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a, b) { // Type checking for a and b has been omitted
    if (a < b) { // Ensure that a >= b when we start
        [a, b] = [b, a] // Destructuring assignment to swap variables
    }
    while (b !== 0) { // This is Euclid's algorithm for GCD
        [a, b] = [b, a % b]
    }
    return a
}
const gcdmemo = memoize(gcd)
gcdmemo(85, 187) // => 17
// Note that when we write a recursive function that we will be memoizing,
// we typically want to recurse to the memoized version, not the original.
const factorial = memoize(function (n) {
    return (n <= 1) ? 1 : n * factorial(n - 1)
})
factorial(5) // => 120: also caches values for 4, 3, 2 and 1.

```

[回到顶部](#javascript_docs)

### Function构造函数
```typescript
// Function 构造函数
interface FunctionConstructor {
  // 前面的参数作为函数的参数
  // 最后一个参数作为函数体
  // 由Function创建的函数不是词法作用域
  new(...args: string[]): Function;
  (...args: string[]): Function;
  // Function() 创建的函数
  // 显式原型是Function.prototype
  readonly prototype: Function;
}
```

1. Function构造函数创建的是一个匿名函数，在运行的时候动态创建和编译的
2. Function构造函数创造的函数不是词法环境的
3. 一般是不需要用到Function构造函数，这个构造函数每次调用都会创建一个新函数，如果在循环或者经常调用的函数里面，这是很不高效的，与此相反，嵌套函数和表达式函数在循环里多次遇到，不会进行重新编译（re-compile）

Function构造函数用例：

```javascript
const f = new Function("x", "y", "return x*y")

// 大致相当于
function f(x, y){
    return x*y
}

// 不是词法作用域
let scope = "global"
function constructFunction() {
    let scope = "local"
    return new Function("return scope") // Doesn't capture local scope!
}
// This line returns "global" because the function returned by the
// Function() constructor does not use the local scope.
constructFunction()() // => "global"
```

[回到顶部](#javascript_docs)

### 函数的属性和方法
```typescript
interface Function {
  // this property mady by developer yaohui liu
  // 返回Function的构造函数
  constructor // => [Function Function]

  // 返回函数希望接收的实参数量
  // Function.prototype上有这个属性
  // 但是会函数会自动创建这个属性
  // 从而覆盖Function.prototype的这个属性
  readonly length: number;

  // 返回函数名称
  // 通常用于调试看函数名称
  // Function.prototype上有这个属性
  // 但是会函数会自动创建这个属性
  // 从而覆盖Function.prototype的这个属性
  // 不同函数有不同的字符串信息：
  // 对象的get属性函数具有`get`前缀
  // 对象的set属性函数具有`set`前缀
  // bind 在函数名称前具有`bound`前缀
  // Function构造器创建的函数，名称属性具有`anonymous`前缀
  readonly name: string;

  // 每一个函数都有一个显式原型prototype
  // Function.prototype上没有这个属性
  // 函数创建会自动创建这个属性
  prototype: any;

  // 返回函数的源代码字符串表达
  toString(): string;

  // 第一个参数thisArg：指定调用对象，
  // 即指定调用环境（invocation context）
  // 第二个可选argArray参数：是一个数组，数组中
  // 的元素传递给调用call方法的函数
  // 中的形参
  apply(this: Function, thisArg: any, argArray?: any): any;
  // 第一个参数thisArg：指定调用对象，
  // 即指定调用环境（invocation context）
  // 后续的参数传递给调用call方法的函数
  // 中的形参
  call(this: Function, thisArg: any, ...argArray: any[]): any;


  // 第一个参数thisArg：指定调用对象，
  // 即指定调用环境（invocation context）
  // 后续的参数传递给调用bind方法的函数
  // 中的形参
  // 将函数绑定到对象上，后续调用这个函数
  // 可以像在对象上调用方法一样调用函数
  bind(this: Function, thisArg: any, ...argArray: any[]): any

  // 如果属性和方法不存在，从lib.es5.d.ts或其他更新文件中查找补充
}
```

1. 函数隐式原型，即`function_name.[[protoytpe]]`,都是指向`Function.prototype`
2. 每个函数都会自动创建以下属性
    * length（覆盖Function.prototype）
    * name（覆盖Function.prototype）
    * prototype（函数的显式原型，Function.prototype上沒有）
3. 所有的函数的constructor属性都是Function，即`everyFunction.constructor === Function`,因为函数隐式原型`Function.prototype`上的constructor指向Function构造函数
4. 函数的显式原型`anyFunction.prototype`上的constructor属性指向函数本身，即`everyFunction.prototype.constructor === everyFunction`


[回到顶部](#javascript_docs)




## javascript_class
其他对面对象程序语言中（如Java），一个类就是一张蓝图。为了获得真正对象，必须使用类来进行实例化。有需要的话，可以直接在实例上调用方法并访问其所有公有数据属性。JavaScript 中只有对象，并不存在可以被实例化的“类”。这是基于原型继承（prototype-base）和基于类继承（class-base）的区别

虽然javascript 新增了class 关键字, 但是javascript实际上是没有类的，javascript class 是`[[Prototype]]`（委托）机制的一种语法糖

[回到顶部](#javascript_docs)

### 工厂函数模拟类
javascript 类是用来创建具有相同初始属性方法，继承相同原型对象（继而继承相同属性方法）的对象的语法糖

`Object.constructor.create()`方法可以指定原型，创建一个对象，这是一个简单的javasript类，可以配合这个方法，使用工厂函数，批量创建对象

```javascript
// This is a factory function that returns a new range object.
function range(from, to) {
    // Use Object.create() to create an object that inherits from the
    // prototype object defined below. The prototype object is stored as
    // a property of this function, and defines the shared methods (behavior)
    // for all range objects.
    let r = Object.create(range.methods)
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    r.from = from
    r.to = to
    // Finally return the new object
    return r
}
// This prototype object defines methods inherited by all range objects.
range.methods = {
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.

    includes(x) { return this.from <= x && x <= this.to },
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from) x <= this.to x++) yield x
    },
    // Return a string representation of the range
    toString() { return "(" + this.from + "..." + this.to + ")" }
}
// Here are example uses of a range object.
let r = range(1, 3) // Create a range object
r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
let arr = [...r]// iterator
arr // => [1, 2, 3] convert to an array via 
```

[回到顶部](#javascript_docs)


### 构造函数模拟类
构造函数之前已经涉及（作为构造函数调用）。构造函数（constructor）是为新建对象进行初始化的函数，新创建的对象的隐式原型`[[prototype]]`等同于构造函数的显式原型`Construcor_name.prototype)`，即即新对象的显式原型继承属性和方法。

原型对象是类的基础的本体（ fundamental to the identity of a class），如果两个对象从一个原型对象（property object）上继承，这两个对象都是同一个类的实例。而两个构造器函数的显式原型prototype属性可能指向同一个原型对象（prototype object），所以不能仅仅根据构造函数是确定两个不同的类，基础判断类还是根据原型对象（prototype object。


class 关键字出现之前，构造函数模拟类是javascript代码的风格，了解构造函数也是了解javascript类工作机制的途径。另外，构造函数对箭头函数是有限制的，因为箭头函数没有prototype，所以不能作为构造函数，因为箭头函数的this从定义他的环境中继承，所以不能把this指定到新的创建对象中。幸运的，javascript 定义class不会允许用箭头函数定义方法


```javascript
// This is a constructor function that initializes new Range objects.
// Note that it does not create or return the object. It just initializes this.
function Range(from, to) {
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    this.from = from
    this.to = to
}
// All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = {
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes: function (x) { return this.from <= x && x <= this.to },
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    [Symbol.iterator]: function* () {
        for (let x = Math.ceil(this.from) x <= this.to x++) yield x
    },
    // Return a string representation of the range
    toString: function () { return "(" + this.from + "..." + this.to + ")" }
}
// Here are example uses of this new Range class
let r = new Range(1, 3) // Create a Range object note the use of new
r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
let arr = [...r] // => [1, 2, 3] convert to an array via iterator
```

上面的Range.protype重新赋值一个新的对象，使得原来的原型对象丢失了，从而没有定义的`constructor`属性和其他属性方法，可以显式的弥补

```javascript
Range.prototype = {
    constructor: Range, // Explicitly set the constructor back-reference
    /* method definitions go here */
}
```
另外一个常用的技术解决这个问题的方法是，添加属性到构造方法的原型对象上，而不是替换这个原型对象
```javascript
// Extend the predefined Range.prototype object so we don't overwrite
// the automatically created Range.prototype.constructor property.
Range.prototype.includes = function (x) {
    return this.from <= x && x <= this.to
}
Range.prototype.toString = function () {
    return "(" + this.from + "..." + this.to + ")"
}
```

[回到顶部](#javascript_docs)

### class关键字创建类
使用类关键字创建类的语法：
* class关键字，紧跟着类名，`{class body}`
* 类内可以定义`constructor`构造方法和其他方法
* 方法可以使用对象方法的语法简写。不同于对象方法，方法之间不需要逗号
* constructor方法最后会被自动处理为类名称的构造函数

使用class创建类，可以简化很多操作：
* 类声明不会被提升，与块作用域的变量`let | const`行为类似，程序在执行到声明之前，类存在暂时性死区，在到达执行语句前访问，会抛出ReferenceError
* 类声明中所有代码自动运行在严格模式，而且无法退出严格模式（相当于使用`'use strict'`)
* 构造方法不使用new关键字调用，会抛出错误（相当于检测`new.target === 'undefined'`为true抛出错误）
* 对于类里面的方法
    * 不可枚举的（相当于定义方法时，属性特性`enumerable: false`)
    * 都没有`[[Construct]]`，因此使用new调用它们会抛出错误（相当于检测`new.target !== 'undefined'`为true时抛出错误）
    * 类的方法内重写类名，会抛出错误（相当于在类内使用const声明构造函数），类的外部重写是允许的

```javascript
class Person {
    // 相当于Person()构造函数
    constructor(name) {
        this.name = name
    }
    // 相当于Person.prototype.sayName = function(){}
    sayName() {
        console.log(this.name)
    }
}

let p = new Person('liu')
p.sayName() // "liu"
p instanceof Person // => true
p instanceof Object // => true
```

上述的类，大致相当于以下代码
```javascript
// 类声明作用域内会注册标识符, 但不会提升，且存在暂行性死区
// 函数表达式赋值给 let|const 变量可以模拟这个类功能
let Person = (function () {
    'use strict' // 类声明语法自动运行在严格模式下
    // 使用const声明构造函数
    // 这样试图在类的方法内重写类名，会抛出错误
    // 在类的外部重写是允许的
    const Person = function (name) {
        // 构造函数检查了new.target，不使用new调用类构造器，会抛出错误
        if (typeof new.target === 'undefined') {
            throw new Error('构造函数必须使用new调用')
        }
        this.name = name
    }

    // 方法都是不可枚举的，而且被new调用要抛出错误
    Object.defineProperty(Person.prototype, 'sayName', {
        value: function () {
            // 被new调用要抛出错误
            if (typeof new.target !== 'undefined') {
                throw new Error('方法不能使用new被调用')
            }
            return this.name
        },
        enumerable: false, // 方法都是不可枚举的
        writable: true,
        configurable: true
    })

    // 返回构造函数
    return Person
})()

let p = new Person('liuyaohui')
p.sayName() // => 'liuyaohui'
p instanceof Person // => true
p instanceof Object // => true
```

上面的用工厂方法，构造函数方法模拟类的例子使用class关键字改写如下
```javascript
class Range {
    constructor(from, to) {
        // Store the start and end points (state) of this new range object.
        // These are noninherited properties that are unique to this object.
        this.from = from
        this.to = to
    }
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to }
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from) x <= this.to x++) yield x
    }
    // Return a string representation of the range
    toString() { return `(${this.from}...${this.to})` }
}
class Range {
    constructor(from, to) {
        // Store the start and end points (state) of this new range object.
        // These are noninherited properties that are unique to this object.
        this.from = from
        this.to = to
    }
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to }
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from) x <= this.to x++) yield x
    }
    // Return a string representation of the range
    toString() { return `(${this.from}...${this.to})` }
}
// Here are example uses of this new Range class
let r = new Range(1, 3) // Create a Range object
r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
[...r] // => [1, 2, 3] convert to an array via iterator      
```

[回到顶部](#javascript_docs)

### 类的getter，setter和其他对象语法
在类中，可以使用很多对象语法：
* 属性和方法的计算属性（不再列举）
* 生成器简写（后面会涉及）
* getter和setter
* 其他对象语法

不一样的是属性（或方法）之间不用逗号分隔。

这里不再列举其他，简单介绍getter和setter

在对象中，访问器属性才需要设置getter和setter，类同样可以为访问器属性设置getter和setter

```javascript
class Person {
    constructor(person_info) {
        this.person_info = person_info
    }

    set person_name(value) {
        this.person_info.person_name = `hello, ${value}`
    }

    get person_name() {
        return this.person_info.person_name
    }
}

let p = new Person({ person_name: 'liuyaohui', person_age: 12 })
let a = p.person_name // => "liuyaohui"
p.person_name = 'yaohuiliu'
let b = p.person_name // => "hello yaohuiliu"
```

class 之前模拟类，是这样设置getter和setter的
```javascript
let Person = (function () {
    'use strict'
    const Person = function (person_info) {
        // 一定要使用new调用
        if (typeof new.target === 'undefined') {
            throw new Error('使用new调用构造函数')
        }
        this.person_info = person_info
    }

    Object.defineProperty(Person.prototype, 'person_name', {
        enumerable: false,
        configurable: true,
        get() {
            return this.person_info.person_name
        },
        set(value) {
            this.person_info.person_name = `hello ${value}`
        }
    })

    return Person
})()

let p = new Person({ person_name: 'liuyaohui', person_age: 12 })
p.person_name // => "liuyaohui"
p.person_name = 'yaohuiliu'
p.person_name // => "hello yaohuiliu"
```

[回到顶部](#javascript_docs)

### 类的静态方法
类之前的静态方法，这样实现
```javascript
function Person() { }
Person.sayHello = function () {
    console.log('hello')
}
let p = new Person()
Person.sayHello() // => hello
```


javascript 类内使用static关键字创建静态方法，静态方法是定义在构造函数（constructor function）上，而不是原型对象（prototype object）上。静态方法也叫做类方法（class method），因为调用他们需要类名/构造函数名
```javascript
class Person {
    constructor(name) {
        this.name = name
    }
    static sayHello() {
        console.log('hello')
    }
}

let p = new Person('liuyaohiui')
Person.sayHello() // => Hello
p.sayHello() //typeError 
```
### 类也是对象
javascript 类只是一系列基于原型对象（prototype object）操作的语法糖，类的本质还是对象。那就意味这类可以：
* 赋值给其他变量
* 作为函数参数传递
* 对类的原型对象的修改也能影响到类本身

```javascript
class Person{}
let p = new Person()
p instanceof Object // true
```

和函数一样，类作为对象，可以传递参数给函数，赋值给其他变量等操作
```javascript
// 类作为函数参数传递
function createObject(classDef) {
    return new classDef()
}

let obj = createObject(
    class {
        sayHi() {
            console.log('Hi!')
        }
    }
)
obj.sayHi() // "Hi!"

// 类赋值，和函数一样，可以作为类表达式
let Square = class { constructor(x) { this.area = x * x } }
new Square(3).area // => 9
```

对类的原型对象的修改也能影响到类本身，注意添加到类的原型对象上的属性是可枚举的，而不是类定义的属性不可枚举
```javascript
class Person {
    constructor(person_name) {
        this.person_name = person_name
    }
}

Person.prototype.sayName = function () {
    console.log(`hello ${this.person_name}`)
}

let p = new Person('liuyaohui')
p.sayName() // hello liuyaohui
```

[回到顶部](#javascript_docs)

### 类继承
* 类继承的本质是原型继承
* extends和super关键字实现类继承

#### 原型继承
javascript 本质是原型继承，所以了解原型继承，有利于了解原型操作语法糖的类来说

原型继承，注意会丢失原来原型对象的一些属性（如constructor等）
```javascript
// This is a constructor function that initializes new Range objects.
// Note that it does not create or return the object. It just initializes this.
function Range(from, to) {
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    this.from = from
    this.to = to
}
// Extend the predefined Range.prototype object so we don't overwrite
// the automatically created Range.prototype.constructor property.
Range.prototype.includes = function (x) {
    return this.from <= x && x <= this.to
}
Range.prototype.toString = function () {
    return "(" + this.from + "..." + this.to + ")"
}

// This is the constructor function for our subclass
function Span(start, span) {
    if (span >= 0) {
        this.from = start
        this.to = start + span
    } else {
        this.to = start
        this.from = start + span
    }
}

// Ensure that the Span prototype inherits from the Range prototype
Span.prototype = Object.create(Range.prototype)
// We don't want to inherit Range.prototype.constructor, so we
// define our own constructor property.
Span.prototype.constructor = Span
// By defining its own toString() method, Span overrides the
// toString() method that it would otherwise inherit from Range.
Span.prototype.toString = function () {
    return `(${this.from}... +${this.to - this.from})`
}

let s = new Span(1, 5)
s.constructor // f Span(...){...}
s.includes(3) // true
s.includes(7) // false
s.toString() // "(1... +5)"
```

[回到顶部](#javascript_docs)

#### extends和super关键字实现类继承
健壮的（rubust）的子类继承需要允许类区调用父类（supercalss）的方法和构造方法，super关键字出现之前是做不了这种事情。


extends 关键字用实现子类继承父类，这时, super关键字调用父类父类的构造方法需要注意:
* 如果子类有构造方法，必须使用super关键字调用父类构造函数
* 如果子类没有构造方法`super()`自动被调用, 自动使用实例创建的所有参数
* 子类构造方法中，必须在访问this之前调用super()，由于super赋值初始化this，在此之前试图访问this，都会造成错误
* 唯一避免调用super()的办法，就是从类构造器上返回一个对象
* 子类被调用的时候，构造函数被调用时，在父类中的new.target是子类

没有构造方法的继承
```javascript
// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
    get first() { return this[0] }
    get last() { return this[this.length - 1] }
}
let a = new EZArray()
a instanceof EZArray // => true: a is subclass instance
a instanceof Array // => true: a is also a superclass instance.
a.push(1, 2, 3, 4) // a.length == 4 we can use inherited methods
a.pop() // => 4: another inherited method
a.first // => 1: first getter defined by subclass
a.last // => 3: last getter defined by subclass
a[1] // => 2: regular array access syntax still works.
Array.isArray(a) // => true: subclass instance really is an array
EZArray.isArray(a) // => true: subclass inherits static methods, too!
// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
    get first() { return this[0] }
    get last() { return this[this.length - 1] }
}
let a = new EZArray()
a instanceof EZArray // => true: a is subclass instance
a instanceof Array // => true: a is also a superclass instance.
a.push(1, 2, 3, 4) // a.length == 4 we can use inherited methods
a.pop() // => 4: another inherited method
a.first // => 1: first getter defined by subclass
a.last // => 3: last getter defined by subclass
a[1] // => 2: regular array access syntax still works.
Array.isArray(a) // => true: subclass instance really is an array
EZArray.isArray(a) // => true: subclass inherits static methods, too!

// EZArray inherits instance methods because EZArray.prototype
// inherits from Array.prototype
Array.prototype.isPrototypeOf(EZArray.prototype) // => true
// And EZArray inherits static methods and properties because

// EZArray inherits from Array. This is a special feature of the
// extends keyword and is not possible before ES6.
Array.isPrototypeOf(EZArray) // => true
```

有构造方法的继承，需要使用super关键字
```javascript
class Person {
    constructor(person_name) {
        this.person_name = person_name
    }

    say_person_name() {
        console.log(`hello, ${this.person_name}`)
    }
}

class Child extends Person {
    constructor(child_name) {
        super()
        this.child_name = child_name
    }

    say_child_name() {
        console.log(`hello, childR`)
    }
}
```

[回到顶部](#javascript_docs)


### 委托代替继承
如果需要一些类（对象）的方法，可以使用继承，但是更简单灵活的方法是使用其他类（对象）的实例委托方法给类，委托（delegation）也叫组合（composition），面向对象编程的常用概念

```javascript
/**
 * A Set-like class that keeps track of how many times a value has
 * been added. Call add() and remove() like you would for a Set, and
 * call count() to find out how many times a given value has been added.
 * The default iterator yields the values that have been added at least
 * once. Use entries() if you want to iterate [value, count] pairs.
 */
class Histogram {
    // To initialize, we just create a Map object to delegate to
    constructor() { this.map = new Map() }
    // For any given key, the count is the value in the Map, or zero
    // if the key does not appear in the Map.
    count(key) { return this.map.get(key) || 0 }
    // The Set-like method has() returns true if the count is non-zero
    has(key) { return this.count(key) > 0 }
    // The size of the histogram is just the number of entries in the Map.
    get size() { return this.map.size }
    // To add a key, just increment its count in the Map.
    add(key) { this.map.set(key, this.count(key) + 1) }
    // Deleting a key is a little trickier because we have to delete
    // the key from the Map if the count goes back down to zero.
    delete(key) {
        let count = this.count(key)
        if (count === 1) {
            this.map.delete(key)
        } else if (count > 1) {
            this.map.set(key, count - 1)
        }
    }
    // Iterating a Histogram just returns the keys stored in it
    [Symbol.iterator]() { return this.map.keys() }
    // These other iterator methods just delegate to the Map object
    keys() { return this.map.keys() }
    values() { return this.map.values() }
    entries() { return this.map.entries() }
}
```

[回到顶部](#javascript_docs)


### 抽象类和整章类例子
抽象类提供了部分的实现，而继承它的子类（subclass）需要定义具体的行为，javascript没有这个抽象类和抽象正式定义，可以把没有实现的方法和类简单定义为抽象

下面的例子即使抽象类的实现，也是整章类的例子
```javascript
/**
 * The AbstractSet class defines a single abstract method, has().
 */
class AbstractSet {
    // Throw an error here so that subclasses are forced
    // to define their own working version of this method.
    has(x) { throw new Error("Abstract method") }
}
/**
 * NotSet is a concrete subclass of AbstractSet.
 * The members of this set are all values that are not members of some
 * other set. Because it is defined in terms of another set it is not
 * writable, and because it has infinite members, it is not enumerable.
 * All we can do with it is test for membership and convert it to a
 * string using mathematical notation.
 */
class NotSet extends AbstractSet {
    constructor(set) {
        super()
        this.set = set
    }
    // Our implementation of the abstract method we inherited
    has(x) { return !this.set.has(x) }
    // And we also override this Object method
    toString() { return `{ x| x ∉ ${this.set.toString()} }` }
}
/**
 * Range set is a concrete subclass of AbstractSet. Its members are
 * all values that are between the from and to bounds, inclusive.
 * Since its members can be floating point numbers, it is not
 * enumerable and does not have a meaningful size.
 */
class RangeSet extends AbstractSet {
    constructor(from, to) {
        super()
        this.from = from
        this.to = to
    }
    has(x) { return x >= this.from && x <= this.to }
    toString() { return `{ x| ${this.from} ≤ x ≤ ${this.to} }` }
}
/*
 * AbstractEnumerableSet is an abstract subclass of AbstractSet. It defines
 * an abstract getter that returns the size of the set and also defines an
 * abstract iterator. And it then implements concrete isEmpty(), toString(),
 * and equals() methods on top of those. Subclasses that implement the
 * iterator, the size getter, and the has() method get these concrete
 * methods for free.
 */
class AbstractEnumerableSet extends AbstractSet {
    get size() { throw new Error("Abstract method") }
    [Symbol.iterator]() { throw new Error("Abstract method") }
    isEmpty() { return this.size === 0 }
    toString() { return `{${Array.from(this).join(", ")}}` }
    equals(set) {
        // If the other set is not also Enumerable, it isn't equal to this one
        if (!(set instanceof AbstractEnumerableSet)) return false
        // If they don't have the same size, they're not equal
        if (this.size !== set.size) return false
        // Loop through the elements of this set
        for (let element of this) {
            // If an element isn't in the other set, they aren't equal
            if (!set.has(element)) return false
        }
        // The elements matched, so the sets are equal
        return true
    }
}
/*
 * SingletonSet is a concrete subclass of AbstractEnumerableSet.
 * A singleton set is a read-only set with a single member.
 */
class SingletonSet extends AbstractEnumerableSet {
    constructor(member) {
        super()
        this.member = member
    }
    // We implement these three methods, and inherit isEmpty, equals()
    // and toString() implementations based on these methods.
    has(x) { return x === this.member }
    get size() { return 1 }
    *[Symbol.iterator]() { yield this.member }
}
/*
 * AbstractWritableSet is an abstract subclass of AbstractEnumerableSet.
 * It defines the abstract methods insert() and remove() that insert and
 * remove individual elements from the set, and then implements concrete
 * add(), subtract(), and intersect() methods on top of those. Note that
 * our API diverges here from the standard JavaScript Set class.
 */
class AbstractWritableSet extends AbstractEnumerableSet {
    insert(x) { throw new Error("Abstract method") }
    remove(x) { throw new Error("Abstract method") }
    add(set) {
        for (let element of set) {
            this.insert(element)
        }
    }
    subtract(set) {
        for (let element of set) {
            this.remove(element)
        }
    }
    intersect(set) {
        for (let element of this) {
            if (!set.has(element)) {
                this.remove(element)
            }
        }
    }
}
/**
 * A BitSet is a concrete subclass of AbstractWritableSet with a
 * very efficient fixed-size set implementation for sets whose* elements are non-negative integers less than some maximum size.
*/
class BitSet extends AbstractWritableSet {
    constructor(max) {
        super()
        this.max = max // The maximum integer we can store.
        this.n = 0 // How many integers are in the set
        this.numBytes = Math.floor(max / 8) + 1 // How many bytes we need
        this.data = new Uint8Array(this.numBytes) // The bytes
    }
    // Internal method to check if a value is a legal member of this set
    _valid(x) { return Number.isInteger(x) && x >= 0 && x <= this.max }
    // Tests whether the specified bit of the specified byte of our
    // data array is set or not. Returns true or false.
    _has(byte, bit) { return (this.data[byte] & BitSet.bits[bit]) !== 0 }
    // Is the value x in this BitSet?
    has(x) {
        if (this._valid(x)) {
            let byte = Math.floor(x / 8)
            let bit = x % 8
            return this._has(byte, bit)
        } else {
            return false
        }
    }
    // Insert the value x into the BitSet
    insert(x) {
        if (this._valid(x)) { // If the value is valid
            let byte = Math.floor(x / 8) // convert to byte and bit
            let bit = x % 8
            if (!this._has(byte, bit)) { // If that bit is not set yet
                this.data[byte] |= BitSet.bits[bit] // then set it
                this.n++ // and increment set size
            }
        } else {
            throw new TypeError("Invalid set element: " + x)
        }
    }
    remove(x) {
        if (this._valid(x)) { // If the value is valid
            let byte = Math.floor(x / 8) // compute the byte and bit
            let bit = x % 8
            if (this._has(byte, bit)) { // If that bit is already set
                this.data[byte] &= BitSet.masks[bit] // then unset it
                this.n-- // and decrement size
            }
        } else {

            throw new TypeError("Invalid set element: " + x)
        }
    }
    // A getter to return the size of the set
    get size() { return this.n }
    // Iterate the set by just checking each bit in turn.
    // (We could be a lot more clever and optimize this substantially)
    *[Symbol.iterator]() {
        for (let i = 0 i <= this.max i++) {
            if (this.has(i)) {
                yield i
            }
        }
    }
}
// Some pre-computed values used by the has(), insert() and remove() methods
BitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128])
BitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128])
```

[回到顶部](#javascript_docs)

## javascript_module


[回到顶部](#javascript_docs)

### 模块
对于模块：
1. 模块概念：将一个复杂的程序按照一定规则拆分，并能依照相应规则组合的几个文件
2. 模块要求：
    * 隐藏内部实现，可以防止不必要的修改导致副作用（side effect）和bug
    * 向外暴漏接口（interface）或者方法访问模块功能以及模块通信
3. 模块优点：
    * 内部数据私有，避免命名冲突(减少命名空间污染)
    * 分离的模块，更好维护，复用以及按需加载


[回到顶部](#javascript_docs)

### ES模块前的模块化方法
ES模块前的模块化方法：
1. javascript对象：对象可以定义内部属性和方法，但是不能防止内部实现被修改（通过设置对象属性可以外部修改内部实现），所以不适合作为模块实现。（归根到底是对象没有自己的作用域）
2. 函数闭包：函数可以定义内部数据，因为有自己的作用域，通过闭包可以返回一个访问内部实现的接口，函数内部的实现外部是修改不，所以函数闭包是模块规范前的最好模块化方法
3. IIFE: 立即执行函数IIFE内定义数据和操作数据的方法，通过`window.module = {method1, method2, ...}`暴露操作数据的方法，因为闭包的存在，暴露的方法可以操作IIFE内的数据，还可以通过IIFE参数实现模块之间的依赖。IIFE仍然具有以下问题：
    * 模块之间的依赖不够清晰，不利于维护
    * 依赖的多个模块，如果在不脚本文件，脚本文件的请求就会很多


ES模块前的模块化方法用例

```javascript
// === 对象模拟模块局限性
let module_obj = {
    data: 1,
    plus_data() {
        this.data++
    }
}

module_obj.plus_data() // => module_obj.data 2
module_obj.data = 3 // => 可以修改内部实现
// === end 对象模拟模块局限性

// === 改用IIFE
let module_IIFE = (function (window, $) {
    let data = 'hello'
    function foo() {
        console.log(data)
        // 通过参数使用依赖的模块
        $('body').css('bakcground', 'red')
    }
    window.module1 = { foo } // 暴露数据操作方法
})(window, jQuery)


// === 模拟es模块
const modules = {}
// define require
function require(moduleName) {
  return modules[moduleName]
}
// module obj's prperty sets.js
//  & stats.js is a IIFE
modules["sets.js"] = (function () {
  const exports = {}
  // The contents of the sets.js file go here:
  exports.BitSet = class BitSet { ... }
  return exports
}())
modules["stats.js"] = (function () {
  const exports = {}
  // The contents of the stats.js file go here:
  const sum = (x, y) => x + y
  const square = x = > x * x
  exports.mean = function (data) { ... }
  exports.stddev = function (data) { ... }
  return exports
}())

// use require to get what we need
// form module
const stats = require("stats.js")
const BitSet = require("sets.js").BitSet
// Now write code using those modules
let s = new BitSet(100)
s.insert(10)
s.insert(20)
s.insert(30)
let average = stats.mean([...s]) // average is 20
// === end 模拟es模块
```

[回到顶部](#javascript_docs)


### ES模块
对于ES模块：
1. javascript模块中的规则
    * 严格模式：自动运行在严格模式下
    * 数据私有：模块顶级作用域创建的变量，模块内部私有
    * this指向：模块顶级作用域的this指向undefined
    * 导入：允许模块重其他模块导入绑定
    * 导出：对于需要让模块外部访问的内容，模块必须要导出他们
    * 模块不允许在代码中使用HTML风格注释
2. 浏览器中使用javascript模块的规则
    * `script`标签的type属性标记为module
    * 运行在严格模式
    * 默认使用defer模式：遇到模块文件时会立即下载，但不会执行，直到整个网页文档解析完再执行。模块中需要导入的资源也会递归下载导入
    * 默认使用CROS跨域
    * 同一个文档，模块加载运行一次
    * 如果模块脚本设置了async属性，与脚本文件一样，脚本文件总是在下载完之后立即执行，无序等待包含它的文档解析完毕，唯一的区别就是import导入的资源在模块自身执行前下载，保证了模块执行所需的资源是可用的
3. 模块还可以作为woker加载，worker构造器的第二个参数是一个对象，可以指定对象内`type`属性为module，从而导入一个模块，即`new Worker("module.js", { type: "module" })`，worker 脚本限制只能从同源网页加载，而woker模块不受此限制。尽管worker模块具有相同的默认限制，当响应头具有恰当的跨域资源共享（CROS）时就允许跨域加载文件
   

[回到顶部](#javascript_docs)

#### ES模块导出
ES模块导出使用export关键字：
1. 导出单个标识符：`export identifyName`
2. 导出多个标识符：`export {indenfify1, indentify2, ...}`，注意，这不是导出为一个对象
3. 默认导出：`export default`，默认导出，只导出指定的一个变量，函数，或类，每个模块只能有一个默认导出
4. 重命名导出：每个标识符后面使用as关键字，且必须要使用{}包围
5. export 关键字可以在javascript代码的顶部出现

ES模块导出用例

```javascript
// === 导出单个标识符
export const PI = Math.PI
export function degreesToRadians(d) {
  return d * PI / 180
}
export class Circle {
  constructor(r) { this.r = r }
  area() { return PI * this.r * this.r }
}
// === end 导出单个标识符


// === 导出多个标识符
export { Circle, degreesToRadians, PI }
// === end导出多个标识符

// === 默认导出
// 默认导出一个类
// 每个模块只能有一个默认导出
export default class BitSet {
  // implementation omitted
}

// 默认导出一个函数
// 每个模块只能有一个默认导出
function sum(num1, num2) {
  return num1 + num2;
}
export default sum
// === end 默认导出

// === 重命名导出
function sum(num1, num2) {
  return num1 + num2;
}
// 必须要使用{}包围
export { sum as add }
// === end 重命名导出
```

[回到顶部](#javascript_docs)

#### ES模块导入
ES模块导入：
1. 导入当个标识符：`import {identify} from 'module_name'`
2. 导入多个标识符：`import {indentify1, identify2, ...} from 'module_name'`
3. 导入所有：`import * from 'module_name'`
4. 默认导入：`import identify from 'module_name'`
5. 重命名导入：每个标识符后面使用as关键字，且必须要使用{}包围
6. 无绑定导入：有些模块没有进行任何导出，相反只是修改全局作用域的对象
7. 导入的绑定无法被修改，但通过模块中的方法却可以达到修改绑定的目的
8. 当从一个模块导入了一个绑定，就像使用const定义了一个变量，后续不能再定义同一个变量；也不能在import语句之前使用该绑定，因为存在暂时性死区，也不能修改它的值

> 如果在同一个文件夹 `./module_name.js`，上一个文件夹`../module_name.js`

ES模块导入用例

```javascript
// 导入单个绑定
import { sum } from "./example.js"
// 导入多个绑定
import { mean, stddev } from "./stats.js"
// 导入所有
import * as stats from "./stats.js"
// 默认导入
import BitSet from './bitset.js'
// 重命名导入
// 必须使用{}包围
import { add as sum } from "./example.js"
// 无绑定导入
import "./example.js"


// === 修改导入绑定
// 必须通过暴露的方法
// in example.js
export let name = "liuyaohui";
export function setName(newName) {
  name = newName;
}
// in test.html
import { name, setName } from "./example.js";

console.log(name) // "liuyaohui"
setName("liu")
console.log(name) // "liu"
// Uncaught TypeError: 
// Assignment to constant variable
name = "yaohui" // error
// === end 修改导入绑定
```

[回到顶部](#javascript_docs)

#### 按需导入模块
按需导入模块：仅在需要时动态加载模块，而不必预先加载所有模块

按需导入模块用例

```javascript
// import()作为函数调用，参数是模块的路径返回它返回一个 promise
import('/modules/myModule.mjs')
  .then((module) => {
    // Do something with the module.
  })

// === 例子
// 为每个按钮附加一个事件监听器，以便在按下时，
// 相关模块被动态加载并用于绘制形状：
squareBtn.addEventListener('click', () => {
  import('/js-examples/modules/dynamic-module-imports/modules/square.mjs')
    .then((Module) => {
      let square1 = new Module.Square(myCanvas.ctx,
        myCanvas.listId, 50, 50, 100, 'blue')
      square1.draw()
      square1.reportArea()
      square1.reportPerimeter()
    })
})
```

[回到顶部](#javascript_docs)


#### 用于合并的模块
有些模块用于合并，将多个子模块组合到一个父模块中，再进行导出

用于合并的模块用例

```javascript
// shapes.js，聚合模块导出
export { Square } from './square.js'
export { Triangle } from './triangle.js'
export { Circle } from './circle.js'
```

[回到顶部](#javascript_docs)

## javascript迭代器和生成器


[回到顶部](#javascript_docs)


### 迭代器
1. 可迭代协议（iterable protocol）允许javascript对象自定义迭代行为，例如哪些值被`for-of`遍历，一些内置类型有默认的迭代行为（iteration behavior），例如：
    * String
    * Array & TypedArray
    * Map
    * Set
    * NodeList（浏览器DOM）
2. 可迭代对象：可迭代对象需要实现`@@iterator`方法，意味着对象或者对象原型链上必须有`@@iterator`属性。`@@iterator`属性属性可以通过常量`Symbol.iterator`获得，`@@iterator`方法返回遵循可迭代协议的对象，即返回迭代器，当对象需要被迭代时，例如被`for of`迭代，它的`@@iterator`方法被无参数调用，并返回迭代器，迭代器可以用来获取被迭代的值。
    * `@@iterator`方法内this指向：`@@iterator`被调用时，函数内部的this指向可迭代对象，因此可以访问可迭代对象的属性，从而决定迭代要提供的东西
    * `@@iterator`方法可以是普通函数，也可以是一个生成器函数
3. 迭代器：`@@iterator`方法返回迭代器iterator，迭代器`next()`方法必须要返回一个对象，该对象有两个属性:
  * value：迭代器返回值。done为true时省略。
  * done：用于描述是否有更多值的boolean值。true则迭代器已经超过了可迭代次数，这种情况下,value的值可以被省略, false则迭代器可以产生迭代序列中下一个值
4. 可迭代对象的迭代常见迭代场景
    * 内置类型的迭代方法：如`Array.prototype.foreach`
    * 内置类型的构造方法的参数`Map([iterable]) | WeakMap([iterable]) | Set([iterable]) | WeakSet([iterable])`
    * 迭代语句：如`for-of`，自动调用`@@iterator`返回iterator迭代器，`iterator.next()`返回的对象的value属性放入到指定变量中，返回对象的done变为true时，迭代就退出
    * 扩展运算符：扩展运算符可以使用在任意的迭代对象
    * yield *
    * 解构赋值
    * 自定义迭代器

   
可迭代协议和可迭代对象用例：

```javascript
// 通过 `Symbole.iterator`获得可迭代对象的默认迭代器
// 获取迭代器就可以使用next()方法进行显式迭代
let values = [1, 2, 3]
// !!!注意要调用这个方法
let iterator = values[Symbol.iterator]() 
iterator.next() // {value: 1, done: false}
iterator.next() // {value: 2, done: false}
iterator.next() // {value: 3, done: false}
iterator.next() // {value: undefined, done: true}

// 可迭代对象的应用场景
// === for-of循环
let values = [1, 2, 3]
for (let num of values) {
  console.log(num) // 1 2 3
}
// === end for-of循环

// === 扩展运算符
let set = new Set([1, 2, 3, 4, 1, 2, 4])
[...set] // [1, 2, 3, 4]

let map = new Map([['name', 'liuyaohui'], ['age', 24]])
[...map] // [['name', 'liuyaohui'], ['age', 24]]
// === end 扩展运算符

// === yield *
function* gen() {
  yield* ["a", "b", "c"]
}
gen().next() // { value:"a", done:false }
// === end yield *

// === 解构赋值
[a, b, c] = new Set(["a", "b", "c"])
a // "a"
// === end 解构赋值
```

[回到顶部](#javascript_docs)


### 生成器
生成器：
1. 生成器的需求：自定义的迭代器需要显式维护内部状态。而生成器函数可以定义一个包含迭代算法，自动维护迭代器状态。最初调用时，生成器函数不执行任何代码，而是返回一种称为generator的迭代器。 通过调用生成器的next()方法消耗值时，generator函数将执行，直到遇到yield关键字
2. 生成器对象是由生成器函数`function *`返回的，并且返回的对象符合可迭代协议和迭代器协议。注意，不能使用箭头函数创建生成器函数
3. 生成器函数执行上下文看生成器状态：
    * 使用`function*`语法创建生成器函数时，代码还没开始执行，生成器进入**挂起开始(Suspended start)状态**
    * 初次调用生成器，生成器函数不执行任何代码，而是返回generator类型迭代器。通过迭代器，来控制生成器的执行，只要迭代器一直存在，生成器的环境就会一直存在
    * 生成器返回的generator类型迭代器，调用`next()`，生成器进入**执行(Executing)状态**，不会像平时函数一样创建一个next的执行环境，而是会把生成器的环境重新放进执行栈的顶部，生成器函数将会继续执行
    * 生成器执行过程中，如果遇到yield关键字，返回一个对象作为next()方法的返回值，这个返回的对象的value属性值是yield表达式的值，然后生成器环境从栈中弹出，随后进入**挂起让渡(Suspend yield)状态**
    * 下一次迭代器调用`next()`方法会从上次离开的位置继续执行
    * 生成器函数执行完或者遇到return语句，生成器进入**完成(Completed)状态**。其中如果生成器函数执行完，返回一个`{value: undefined, done: true}`的对象；如果生成器函数遇到return语句，如果提供了返回值，返回值作为`value`值，done被赋值为`true`，即返回`{value: returnValue, done: true}`的对象
4. 传递参数给Generator类型的迭代器的next方法，首次调用`next()`，所有参数都会忽略；后续调用`next()`可以传递实参作为yield语句的值
5. 生成器委托：生成器内部调用多个生成器，生成器返回的迭代器调用`next()`，生成器会依次委托`内部的生成器的迭代器`, 依次迭代完
6. 生成器与异步任务：生成器能够在执行过程中暂停代码的操作，这为异步编程提供了可能性

    
生成器用例

```javascript
function* createIterator() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator = createIterator(); // Object[Generator]{}  挂起开始
iterator.next(); // {value: 1, done: false}  执行 -> 挂起
iterator.next(); // {value: 2, done: false}  执行 -> 挂起
iterator.next(); // {value: 3, done: false}  执行 -> 挂起
iterator.next(); // {value: undefined, done: true} 执行 -> 挂起完成

// === 生成器中的return
function* createIterator() {
  yield 1;
  return 42;
}

let iterator = createIterator();
console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 42, done: true }"
console.log(iterator.next()); // "{ value: undefined, done: true }"


// === 传递参数给Generator类型的迭代器的next方法
function* createInterator() {
  let first = yield 1
  let second = yield first + 2
  yield second + 3
}
let interator = createInterator()
// 执行返回1
interator.next() // {value: 1, done: false}
// 执行first的赋值，以及返回first+2
interator.next(2) // {value: 4, done: false} 
// 执行second的赋值，以及返回second + 3
interator.next(3) // {value: 6, done: false}
interator.next() // {undefined, done: false}
// === end 传递参数给Generator类型的迭代器的next方法


// === 生成器委托
function* createNumberIterator() {
  yield 1
  yield 2
}

function* createColorIterator() {
  yield 'red'
  yield 'green'
}

function* createCombinedIterator() {
  yield* createNumberIterator()
  yield* createColorIterator()
  yield true
}

let iterator = createCombinedIterator()

console.log(iterator.next()) // "{ value: 1, done: false }"
console.log(iterator.next()) // "{ value: 2, done: false }"
console.log(iterator.next()) // "{ value: "red", done: false }"
console.log(iterator.next()) // "{ value: "green", done: false }"
console.log(iterator.next()) // "{ value: true, done: false }"
console.log(iterator.next()) // "{ value: undefined, done: true }"
// === end 生成器委托
```

[回到顶部](#javascript_docs)



#### 生成器原型方法
```typescript
interface Generator<T = unknown, TReturn = any, TNext = unknown>
  extends Iterator<T, TReturn, TNext> {
  // 生成器函数返回迭代器对象
  [Symbol.iterator](): Generator<T, TReturn, TNext>;

  // 若干参数：传递给yield语句的值
  // 首次调用`next()`，所有参数都会忽略
  // 后续调用`next()`可以传递实参作为yield语句的值
  // 返回值：返回generator迭代器的结果IteratorResult
  // {value: ..., done:...}
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;

  // 第一个参数value：指定生成器return值
  // 返回值：返回{value: value, done: true}，并结束生成器
  return(value: TReturn): IteratorResult<T, TReturn>;

  // 第一个参数e：指定异常对象
  // 返回值：生成器抛出异常，然后继续生成器执行
  // 遇到yield语句，返回IteratorResult
  // {value: ..., done:...}
  throw(e: any): IteratorResult<T, TReturn>;
}
```

生成器原型方法用例：

```javascript
// === Generator.prototype.return()
function* gen() { 
  yield 1
  yield 2
  yield 3
}
let g = gen()
g.next()        // { value: 1, done: false }
g.return("foo") // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }
// === end Generator.prototype.return()


// === 处于“完成”状态的生成器调用return
function* gen() {
  yield 1
  yield 2
  yield 3
}

let g = gen()
g.next() // { value: 1, done: false }
g.next() // { value: 2, done: false }
g.next() // { value: 3, done: false }
// 生成器处于完成状态
g.next() // { value: undefined, done: true }
// 不提供参数
g.return() // { value: undefined, done: true }
// 提供参数
g.return(1) // { value: 1, done: true }
// === end 处于“完成”状态的生成器调用return


// === Generator.prototype.throw
function* createInterator() {
  let first = yield 1
  try {
    let second = yield first + 2
  } catch (e) {
    second = 6
  }
  yield second + 3
}

let interator = createInterator()
interator.next() // {value: 1, done: false}
interator.next(2) // {value: 4, done: false}

// 迭代器处理错误后继续执行
interator.throw(new Error('Boom')) // {value: 9, done:false}
interator.next() // {undefined, done: false}
// === end Generator.prototype.throw
```


[回到顶部](#javascript_docs)




## 异步javascript

[回到顶部](#javascript_docs)

### 单线程的javascript
单线程的javascript：
1. javascript是单线程程序语言，每个任务顺序执行，只有前面的结束了，后面的才能开始，所以有产生阻塞的可能，例如当浏览器里面的一个web应用进行密集运算（或一个耗时任务），还没有把控制权返回给浏览器的时候，就会对浏览器形成阻塞，浏览器无法继续处理用户的输入并执行其他任务，直到web应用交回处理器的控制
2. 解决单线程javascript的局限
    * 通过Web workers可以把一些任务交给一个名为worker的单独的线程，这样就可以同时运行多个javascript代码块，但是web workers也有局限，不能访问DOM，所以不能让一个worker直接更新UI
    * 异步javascript

[回到顶部](#javascript_docs)


### javascript异步模型
事件循环（event loop），javascript引擎的一个内部处理线程，监视和管理作业队列（job queue）
* 单线程（single thread），同一时刻只能执行一段代码
* 代码放置在作业队列（job queue）中，每当一段代码准备被执行，就会被添加到作业队列
* 当javascript引擎结束当前代码的执行后，事件循环就会执行队列中的下一个作业


> Promise是微任务，setTimeout是宏任务，同一个事件循环中，promise.then总是先于setTimeout执行

[回到顶部](#javascript_docs)


### 异步javascript解决方案
1. 事件模型：监听事件。这种方式，异步任务的执行不取决于代码的顺序，而取决于某个事件是否发生，当事件发生时，事件处理程序就会被添加到作业队列（job queue）的尾部。事件可以完成简单的交互，但是多个分离的异步调用串联在一起会很麻烦，面对复杂的需求时仍然不够灵活
2. 异步回调：如Ajax的回调函数，setTimeout/setInterval中的回调函数，node.js的回调等。回调模式的串联会导致回调地狱（callbac hell），代码难以阅读和维护
3. 合作异步JavaScript：setTimeout() & setInterval() & requestAnimationFrame()
4. promise：
    * 异步操作结果的占位符
    * 优点：异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数
    * 缺点：无法取消 Promise，当处于pending状态时，无法得知目前进展到哪一个阶段；使用Promise的链式调用，其实并没有从根本上解决回调地狱的问题，只是换了一种写法
5. generator：Generator函数可以是异步任务的容器，需要暂停的地方，使用yield语句注明。但是Generator使用起来较为复杂
6. async / await：async是 Generator 函数的语法糖，async/await 使得异步代码看起来像同步代码


[回到顶部](#javascript_docs)


### promise
promise：
1. promise是异步操作结果的占位符
2. promise状态
    * 初始为挂起状态(pending state)，异步操作还没有开始，也可以说是未决的(unsettled)
    * 异步操作结束后，promise就是已决的（settled），进入以下两种状态之一：
        * fullfilled：已完成状态
        * rejected：表示未完成
3. 串联promise：promise很多原型方法和静态方法都返回promise，因此可以串联多个promise
    * 串联promise中的return返回值：可以作为下一个promise的value
    * 串联promise中抛出错误，可以作为下一个promise的reject的reason
[回到顶部](#javascript_docs)

#### 创建未决的promise对象
```typescript
interface PromiseConstructor {
  // 创建promise
  // 第一个参数excutor：指定一个执行器函数
  // excutor函数内，根据参数resolve或者reject
  // 决定promise进入fullfilled或则reject状态
  // 执行器内部抛出错误，相当于自动调用reject
  new <T>(
    executor: (
      // excutor的第一个参数resolve：执行器成功结束时调用的函数
      // 示意promise进入fullfilled状态
      // resolve的第一个参数value | PromiseLike：执行器成功的值
      // 或者其他promise的结果
      resolve: (value: T | PromiseLike<T>) => void,
      // excutor的第二个可选参数reject：执行器失败时调用的函数
      // 示意promise进入rejected状态
      // reject函数第一个可选参数reason：指定失败的原因
      reject: (reason?: any) => void) => void)
    : Promise<T>; // 返回一个promise对象
}
```


创建未决的promise对象用例

```js
// === fullfilled promise
let p = new Promise((resolve, reject) => {
  console.log('in promise 1')
  resolve('resolve value')
})

p.then((value) => {
  console.log('resolved state: fullfilled state')
  console.log(value)
})
// === end fullfilled promise


// === rejected promise
let p2 = new Promise((resolve, reject) => {
  console.log('in promise 2')
  reject('reject reason')
})

p2.then(null, (reason) => {
  console.log('resolved state: rejected state')
  console.log(reason)
})
// === end rejected promise

// => in promise 1
// => in promise 2
// => resolved state: fullfilled state
// => resolve value
// => resolved state: rejected state
// => reject reason
```

[回到顶部](#javascript_docs)


#### promise原型方法
```typescript
// 代表异步操作的完成
interface Promise<T> {
  then<TResult1 = T, TResult2 = never>(
    // 可选的onfulfilled，promise resolve的时候调用的回调函数
    // 回调函数第一个参数value：接收resolve的值
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined | null,
    // 可选的onrejected，promise reject的时候调用的回调函数
    // 回调函数第一个参数reason，接收reject的值
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined | null)
    : Promise<TResult1 | TResult2>; // 返回promise

  // 用于处理reject的promise
  // catch处理reject会使得处理reject更加清晰
  catch<TResult = never>(
    // 第一个参数onrejected：指定promise reject的回调函数
    // 回调函数的第一个参数reason：接收的reject的reson
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined | null): Promise<T | TResult>; // 返回promise

  // 当promise已经settled，无论promise是fullfilled
  // 还是rejected，都会执行finally的回调函数
  // 第一个参数onfinally：指定回调函数onfinally
  // 返回值：返回promise，无论promise状态是fulfilled还是rejected，
  // 都需要在他们状态改变之后进行一些操作，
  // 避免同样的语句需要在then()和catch()中出现重复的代码
  finally(onfinally?: (() => void) | undefined | null): Promise<T>
}
```

promise原型方法用例：

```javascript
// promise原型方法例子
fetch('https://stackoverflow.com/')
  .then(response => {
    console.log(response.status)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log(`finally, promise is setted, 
      whatever is resolved or rejectd`)
  })
```

[回到顶部](#javascript_docs)


#### promise静态方法
```typescript
interface PromiseConstructor {
  // prototype显式原型
  // 返回一个promise
  readonly prototype: Promise<any>;

  // 第一个参数values：promise的数组
  // 返回值：返回一个settled已决的promise实例
  // 如果values中的promise都被resolved，则返回一个
  // resolved的promise，所有的resolved promise的value都会放到
  // 返回的resolveed promise的values数组中
  // 如果values中的promise有一个rejected，则返回一个
  // rejected的promise，rejected的promies的reason作为
  // 返回的rejected promise的reason
  // values如果是空或者没有promise，返回一个resolved的promise
  all<T extends readonly unknown[] | []>
    (values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;


  // 第一个参数values：promise的数组
  // 返回值：返回一个settled已决的promise实例
  // 如果values中的某个promise被resolved或者
  // rejected，则返回相应的resolved或者rejected的promise
  // 相应的返回的resolve的promise
  // 的value是race中resolve promise的value
  // 相应的返回的rejected的promise
  // 的reason是race中rejected promise的reason
  race<T extends readonly unknown[] | []>
    (values: T): Promise<Awaited<T[number]>>;


  // 第一个参数value：指定一个value或者promise
  // 返回值：如果值是promise，返回promise，如果是一个value
  // 则返回一个resolved的promise，这个promise的value是参数value
  resolve<T>(value?: T | PromiseLike<T>): Promise<T>;

  // 第一个可选参数reason：指定一个reason或者promise
  // 返回值：如果值是promise，返回promise，如果是一个reason
  // 则返回一个rejected的promise，这个promise的reason是参数reason
  reject<T = never>(reason?: any): Promise<T>;
}
```

[回到顶部](#javascript_docs)

##### Promise静态方法用例
```javascript
// === Promise.all
let p1 = Promise.resolve(3)
let p2 = 1337
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})
let p4 = new Promise((resolve, reject) => {
  reject(2)
})

Promise.all([p1, p2, p3]).then(values => {
  console.log(Array.isArray(values)) // true
  console.log(values) // [3, 1337, "foo"]
})

Promise.all([p1, p2, p3, p4]).catch(reason => {
  console.log(Array.isArray(reason)) // false
  console.log(reason) // 2
})
// === end Promise.all


// === Promise.race
let p1 = Promise.resolve(1);
let p2 = new Promise((resolve, reject) => {
  resolve(2);
});
let p3 = new Promise((resolve, reject) => {
  resolve(3);
});

let p4 = Promise.race([p1, p2, p3]);
p4.then(function (value) {
  console.log(value); // 1
});
// === end Promise.race


Promise.resolve('1').then(value => {
  console.log(value) // => 1
})

Promise.reject('reject reason')
  .then(null, reason => {
    console.log(reason) // => reject reason
  })
```

[回到顶部](#javascript_docs)


### async/await
async/await:
1. 原因：promise能很好地解决回调地狱的问题，如果处理流程比较复杂，整段代码将充斥着then，语义化不明显，代码不能很好地表示执行流程，所以引进了async/await，是Generator函数的语法糖
2. async异步函数：
    * async异步函数内使用await关键字，一旦遇到await，await后是promise，等待await后的promise执行完成，才进行后续的操作，await后不是promise对象，直接返回对应的值
    * async异步函数返回一个promise，只有函数内部所有的await执行完，返回的promise才是resolved；如果async函数内出错，或者await后的promise返回rejected状态，返回返回的promise是rejected
3. async/await缺陷：await关键字阻止执行所有代码，直到promise完成, 这意味着代码可能会因为大量等待的promises相继发生而变慢。所以，多个await后的异步操作，如果不存在继发关系，可以同时触发（如Promise.all）

async/await用例

```javascript
async function sayHello() {
  return await Promise.resolve("Hello")
};

sayHello().then((value) => {
  console.log(value) // => Hello
})
```

## javascript元编程（待整理）


[回到顶部](#javascript_docs)


## javascript错误处理
1. 使用`try...catch...finally`语句块处理错误
2. javascript错误类型：
    * Error：基类型，所有错误类型都继承自该类型
    * Reference Error: 访问不存在的标识符发送的错误
    * TypeError：执行特定类型的操作，类型不是特定的类型引发的错误
    * SyntaxError：语法错误
    * RangerError：数值超过范围触发
    * EvalError：Eval函数使用异常引发的错误
    * URIError: `encodeURI()| decodeURI()`调用，URI格式不正确引发的错误
3. 使用`throw`语句抛出错误，应该在检测到某种特定的错误后，抛出错误，良好的错误处理机制，可确保仅抛出自己的错误
4. 发生错误的常见原因：
    * 类型错误：弱类型语言，类型控制不了，而且有隐式类型转换的存在
    * 通信错误: 常见的是发送数据给服务器没有使用encodeURIComponent()对数据进行编码

javascript错误处理用例：

```javascript
// === `try...catch...finally`语句块
try {
  //...
} catch (e) {
  // 错误对象中的信息因为浏览器而异
  // 但是e.message在各浏览器中是统一的
  console.log(e.message)
} finally {
  /*
  finally 子句是可选的，无论有无错误如何finally子句都会执行
  有finally子句的情况下，
  try或catch子句中的return语句不会执行
  */
}
// === end `try...catch...finally`语句块


//=== 错误类型判断和处理
try {
  // ...
} catch (e) {
  if (e instanceof TypeError) {
    //...
  } else {
    // ...
  }
}
//=== end 错误类型判断和处理


// === 抛出错误
// 抛出通用错误
throw new Error('custom error message');
// 模拟浏览器错误
throw new ReferenceError('custom reference errror');
// === 自定义错误
throw new CustomError('custom error...');
// === end 抛出错误
```


[回到顶部](#javascript_docs)


### error事件
发生了错误，都会触发error事件，可以为相应错误添加监听器

```javascript
// error事件处理程序 避免浏览器报告错误的最后一道防线
// 三个参数: message, url , line
window.onerror = function(message, url, line){
    // ...
}

// 图像的src属性终端url不能返回被识别的图像格式也能触发error事件
let image = new Image();
image.addEventListener('error', function(){
    // ...
})
```

[回到顶部](#javascript_docs)


## 代码测试
1. 功能检测（feature detection）: 确定浏览器是否支持某段代码，以便浏览器始终能够正常运行代码功能，而不会在某些浏览器中出现崩溃和错误
2. 功能推断（feature inference）：对功能可用性进行检查，但是在判断通过后，还会使用其他功能，因为它假设其他功能也可用

> useragent 字符串：通过`navigator.userAgent`访问，识别请求用户代理的应用类型、操作系统、应用供应商和应用版本。但这个字符串很难解析并且很可能存在欺骗性

[回到顶部](#javascript_docs)


## javascript标准库

[回到顶部](#javascript_docs)


### Map
```typescript
// map构造函数
interface MapConstructor {
  new(): Map<any, any>;
  new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
  readonly prototype: Map<any, any>;
}
declare var Map: MapConstructor;


interface Map<K, V> {
  // 返回map内key-value对的数量
  readonly size: number;

  // 第一个参数key：指定key
  // 第二个参数value：指定value
  // 返回值：设置一个key/value 对，返回map对象
  set(key: K, value: V): this;
  // 第一个参数key
  // 返回值：返回key匹配的value
  get(key: K): V | undefined;
  // 第一个参数key
  // 返回值：判断是否有匹配的key
  has(key: K): boolean;
  // 第一个参数key
  // 返回值：删除匹配的key，删除成功返回true
  // 否则false
  delete(key: K): boolean;
  // 清空map
  clear(): void;


  // === 迭代方法
  forEach(callbackfn: (value: V,
    key: K, map: Map<K, V>) => void,
    thisArg?: any): void;

  // 返回map中entires的迭代对象（iterable）
  [Symbol.iterator](): IterableIterator<[K, V]>;

  // 返回一个IterableIterator
  // 包含每个map元素的[key, value]数组
  entries(): IterableIterator<[K, V]>;

  // 返回一个IterableIterator
  // 包含每个map元素的key
  keys(): IterableIterator<K>;

  // 返回一个IterableIterator
  // 包含每个map元素的value
  values(): IterableIterator<V>;
}
```

1. Map描述：键值对（key-value）映射集合，通常用于缓存，存储数据用来检索
2. key可以是任意类型，包括函数、对象、基本类型
3. Map可以直接进行迭代：
    * iterable的，可以被迭代
    * key-value按插入顺序排序和迭代
4. 可以通过方法获得大小，插入，删除。在涉及频繁增删键值对的场景下会有些性能优势

[回到顶部](#javascript_docs)

#### Map用例
```javascript
let m = new Map() // Start with an empty map
m.size // => 0: empty maps have no keys
m.set("one", 1) // Map the key "one" to the value 1
m.set("two", 2) // And the key "two" to the value 2.
m.size // => 2: the map now has two keys
m.get("two") // => 2: return the value associated with key "two"
m.get("three") // => undefined: this key is not in the set
m.set("one", true) // Change the value associated with an existing key
m.size // => 2: the size doesn't change
m.has("one") // => true: the map has a key "one"
m.has(true) // => false: the map does not have a key true
m.delete("one") // => true: the key existed and deletion succeeded
m.size // => 1
m.delete("three") // => false: failed to delete a nonexistent key
m.clear() // Remove all keys and values from the map

// Map.prototype.entries
let myMap = new Map()
myMap.set('0', 'foo')
myMap.set(1, 'bar')
myMap.set({}, 'baz')
let mapIter = myMap.entries()
mapIter.next().value // => ["0", "foo"]
mapIter.next().value // => [1, "bar"]
mapIter.next().value // => [Object, "baz"]

// ===  Map.prototype[@@iterator]()
let myMap = new Map()
myMap.set('0', 'foo')
myMap.set(1, 'bar')
myMap.set({}, 'baz')
let mapIter = myMap[Symbol.iterator]()
//返回的其实是个generator
mapIter.next().value // => ["0", "foo"]
mapIter.next().value // => [1, "bar"]
mapIter.next().value // => [Object, "baz"]
```

[回到顶部](#javascript_docs)

### WeakMap
```typescript
// 构造方法
interface WeakMapConstructor {
  new <K extends object = object, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;
  readonly prototype: WeakMap<object, any>;
}
declare var WeakMap: WeakMapConstructor;

interface WeakMap<K extends object, V> {
  // 第一个参数key：指定key
  // 第二个参数value：指定value
  // 返回值：设置一个key/value 对，返回weakmap对象
  set(key: K, value: V): this;
  // 第一个参数key
  // 返回值：返回key匹配的value
  get(key: K): V | undefined;
  // 第一个参数key
  // 返回值：判断是否有匹配的key
  has(key: K): boolean;
  // 第一个参数key
  // 返回值：删除匹配的key，删除成功返回true
  // 否则false
  delete(key: K): boolean;
}
```

1. WeakMap描述：也是键值对（key-value）的集合，但键（key）必须是对象类型，值可以是任意类型，它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被GC回收掉
2. WeakMap提供的接口与Map基本一致，与Map对象不同的是，WeakMap的键是不可枚举的



[回到顶部](#javascript_docs)

#### WeakMap用例
```javascript
const wm1 = new WeakMap(),
      wm2 = new WeakMap(),
      wm3 = new WeakMap();
const o1 = {},
      o2 = function() {},
      o3 = window

wm1.set(o1, 37)
wm1.set(o2, 'azerty')
// // a value can be anything, including an object or a function
wm2.set(o1, o2)
wm2.set(o3, undefined)
// keys and values can be any objects. Even WeakMaps!
wm2.set(wm1, wm2)

wm1.get(o2) // =>  "azerty"
//there is no key for o2 on wm2
wm2.get(o2) // => undefined
// because set value `undefined`
wm2.get(o3) // => undefined

wm1.has(o2) // => true
wm2.has(o2) // => false
// even if the value itself is 'undefined'
wm2.has(o3) // => true

wm3.set(o1, 37)
wm3.get(o1) // => 37

wm1.has(o1) // => true
wm1.delete(o1)
wm1.has(o1) // => false
```

[回到顶部](#javascript_docs)


### Set
```typescript
// 构造方法
interface SetConstructor {
  new <T = any>(values?: readonly T[] | null): Set<T>;
  readonly prototype: Set<any>;
}
declare var Set: SetConstructor;

interface Set<T> {
  // 返回set内值的数量
  readonly size: number;

  // 第一个参数value：指定value
  // 返回值：增加一个value，返回set
  add(value: T): this;
  // 第一个参数value：指定value
  // 返回值：set内是否有value
  has(value: T): boolean;
  // 第一个参数value：指定value
  // 返回值：删除value，成功返回true
  delete(value: T): boolean;
  // 清空set
  clear(): void;

  // === 迭代方法
  forEach(callbackfn: (value: T,
    value2: T,
    set: Set<T>) => void, thisArg?: any): void;

  // 返回set中entires的迭代对象（iterable）
  [Symbol.iterator](): IterableIterator<T>;

  // 返回一个IterableIterator
  // 包含每个set元素的[value, value]数组
  entries(): IterableIterator<[T, T]>;

  // 返回一个IterableIterator
  // 包含每个set元素的value
  keys(): IterableIterator<T>;

  // 返回一个IterableIterator
  // 包含每个set元素的value
  values(): IterableIterator<T>;
}
```

1. Set描述：Set对象是值的集合，存储任何类型的唯一值（不重复值），通常用于检测某个值是否存在
2. 数组和set的对比：
    * set对象不存储重复的值，不需要手动处理包含重复值的情况
    * 查找上元素上： 数组中用来判断元素是否存在的indexOf方法效率较低；数组的indexOf方法无法找到NaN值
    * 删除元素：set对象允许运用值来删除元素

[回到顶部](#javascript_docs)

#### Set用例
```javascript
// === 例子
let set = new Set();
set.add(5);
set.add("5"); // 没有重复
set.add(5);  // duplicate - this is ignored

// === 例子
let mySet = new Set();
mySet.add('foobar');
mySet.add(1);
mySet.add('baz');

let setIter = mySet.entries();
console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]

// === Set.prototype[@@iterator]()
let mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

let setIter = mySet[Symbol.iterator]();
console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // Object
```

[回到顶部](#javascript_docs)


### WeakSet
```typescript
// 构造方法
interface WeakSetConstructor {
  new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>;
  readonly prototype: WeakSet<object>;
}
declare var WeakSet: WeakSetConstructor;

interface WeakSet<T extends object> {
  // 第一个参数value：指定value
  // 返回值：增加一个value，返回weakset
  add(value: T): this;
  // 第一个参数value：指定value
  // 返回值：set内是否有value
  has(value: T): boolean;
  // 第一个参数value：指定value
  // 返回值：删除value，成功返回true
  delete(value: T): boolean;
}
```

1. WeakSet描述：值必须是对象类型，不可以是别的类型，对集合中的对象，如果不存在其他引用，对象的弱引用在自己成为对象唯一引用时，那么该对象将可被垃圾回收
2. 由于 WeakSet是对象的弱引用，不可迭代，所以不能使用`for-of`迭代，没有`forEach()`方法，没有`size`属性
3. WeakSet无法暴露任何迭代器(例如 `keys()` 和 `values()`)，所以没有编程手段用于判断WeakSet内容

[回到顶部](#javascript_docs)


#### WeakSet用例
```javascript
const ws = new WeakSet()
const foo = {}
const bar = {}

ws.add(foo)
ws.add(bar)

ws.has(foo) // => true
ws.has(bar) // => true

ws.delete(foo) // => removes foo from the set
ws.has(foo) // => false, foo has been removed
ws.has(bar) // => true, bar is retained
```

[回到顶部](#javascript_docs)


### Date
```typescript
// 存储和获取日期时间
// UTC（Coordinated Universal Time，国际协调时间）
// Date类型以UTC 1970-1-1 0时 开始经过的毫秒数保存日期
interface Date {
  // === 获取代表时间的字符串
  /**
  * 例子：同一个date => 星期几 月 日 年 时:分:秒
  * d.toString() => Mon Jun 28 1993 14:39:07 GMT-0600 (PDT)
  * d.toDateString => Mon Jun 28 1993
  * d.toTimeString => 14:39:07 GMT-0600 (PDT)
  */
  // 返回一个代表date对象的string
  toString(): string;
  // 根据主机环境的current locale的toString()
  toLocaleString(): string;

  // 返回代表date的string
  toDateString(): string;
  // 根据主机环境的current locale的toDateString()
  toLocaleDateString(): string;

  // 返回代表time的string
  toTimeString(): string;
  // 根据主机环境的current locale的toTimerString()
  toLocaleTimeString(): string;
  //=== end 获取代表时间的字符串


  // === 转换日期格式
  // 将日期对象使用UTC转换为string
  toUTCString(): string;
  // 使用ISO格式将日期对象转换为string
  // ISO的分割符 T . Z
  // ISO格式如：2022-04-01T23:25:59.204Z
  toISOString(): string;
  // 使用JSON.stringify()方法将日期对象JSON序列化
  toJSON(key?: any): string;
  // === 转换日期格式


  //=== 获取代表时间的数字
  // 返回当前时间距离UTCUTC 1970-1-1 0时的毫秒数
  valueOf(): number;
  // 返回当前时间距离UTCUTC 1970-1-1 0时的毫秒数
  getTime(): number;

  // 以下 星期几 月 日 年 时:分:秒 排列
  // 返回当前时间的星期几（0-6）
  getDay(): number;
  // 返回UTC时间的星期几
  getUTCDay(): number;

  // 返回当前时间的月份（0-11）
  getMonth(): number;
  // 返回UTC时间的月份
  getUTCMonth(): number;

  // 返回当前时间的当月日期（1-31）
  getDate(): number;
  // 返回UTC时间的当月日期
  getUTCDate(): number;

  // 返回当前时间的年份
  getFullYear(): number;
  // 返回UTC时间的年份
  getUTCFullYear(): number;

  // 返回当前时间的小时（hours）（0-24）
  getHours(): number;
  // 返回UTC时间的小时（hours）
  getUTCHours(): number;

  // 返回当前时间的分钟（minutes）（0-59）
  getMinutes(): number;
  // 返回UTC时间的分钟（minutes）
  getUTCMinutes(): number;

  // 返回当前时间的秒（seconds）（0-59）
  getSeconds(): number;
  // 返回UFC时间的分钟（seconds）
  getUTCSeconds(): number;

  // 返回当前时间的毫秒（milliseconds）（0-1000）
  getMilliseconds(): number;
  // 返回UTC时间的毫秒（milliseconds）
  getUTCMilliseconds(): number;
  //=== end 获取代表时间的数字


  // === 设置Date对象的日期时间
  // 接收一个time毫秒参数，设置距离GMT 1970-1-1 0时的时间
  setTime(time: number): number;

  // 接收一个ms毫秒参数，设置当前时间的Date对象的毫秒值
  setMilliseconds(ms: number): number;
  // 接收一个ms毫秒参数，设置UTC时间的Date对象的毫秒值
  setUTCMilliseconds(ms: number): number;

  // 接收一个sec秒参数，设置当前时间的Date对象的秒值
  // 第二个可选参数设置毫秒
  setSeconds(sec: number, ms?: number): number;
  // 接收一个sec秒参数，设置UTC时间的Date对象的秒值
  // 第二个可选参数设置毫秒
  setUTCSeconds(sec: number, ms?: number): number;

  // 接收一个min分钟参数，设置当前时间的Date对象的分钟值
  // 第二个可选参数设置秒
  // 第三个可选参数设置毫秒
  setMinutes(min: number, sec?: number, ms?: number): number;
  // 接收一个min分钟参数，设置UTC时间的Date对象的分钟值
  // 第二个可选参数设置秒
  // 第三个可选参数设置毫秒
  setUTCMinutes(min: number, sec?: number, ms?: number): number;

  // 接收一个min分钟参数，设置当前时间的Date对象的分钟值
  // 第二个可选参数设置分
  // 第三个可选参数设置秒
  // 第四个可选参数设置毫秒
  setHours(hours: number, min?: number, sec?: number, ms?: number): number;
  // 接收一个min分钟参数，设置UTC时间的Date对象的分钟值
  // 第二个可选参数设置分
  // 第三个可选参数设置秒
  // 第四个可选参数设置毫秒
  setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;

  // 接收一个date参数，设置当前时间的当月日期
  setDate(date: number): number;
  // 接收一个date参数，设置UTC时间的当月日期
  setUTCDate(date: number): number;

  // 接收一个month参数，设置当前时间的月份
  // 可选的第二个参数，设置当月日期
  setMonth(month: number, date?: number): number;
  // 接收一个month参数，设置UTC时间的月份
  // 可选的第二个参数，设置当月日期
  setUTCMonth(month: number, date?: number): number;

  // 接收一个year参数，设置当前时间的年份
  // 可选的第二个参数，设置月份
  // 可选的三个参数，设置当月日期
  setFullYear(year: number, month?: number, date?: number): number;
  // 接收一个year参数，设置UTC时间的年份
  // 可选的第二个参数，设置月份
  // 可选的三个参数，设置当月日期
  setUTCFullYear(year: number, month?: number, date?: number): number;
  // === end 设置Date对象的日期时间

  // 如果属性和方法不存在，从lib.es5.d.ts或其他更新文件中查找补充
}
```

[回到顶部](#javascript_docs)


### Math
```typescript
// Math constants & Math methods
// Unlike other global object
// Math is not a constructor
// all properties & methods in Math are static
interface Math {
  // 圆周率，大约是`3.14159`
  readonly PI: number;

  // 接收若干参数，返回参数中的最大值
  max(...values: number[]): number;
  // 接收若干参数，返回参数中的最小值
  min(...values: number[]): number;

  // 返回0到1之间的随机数
  random(): number;

  // absloute value 绝对值
  abs(x: number): number;

  // == 近似数
  // 返回等于或大于参数x的的整数
  ceil(x: number): number;
  /**
    * Returns the greatest integer less than or equal to its numeric argument.
    * @param x A numeric expression.
    */
  // 返回小于或等于参数x的整数
  floor(x: number): number;
  // 返回四舍五入的近似数
  round(x: number): number;
  // 返回参数x的整数部分
  trunc(x: number): number;
  // === end 近似数

  // === 指数
  // ½的平方根，大约是`0.707`
  readonly SQRT1_2: number;
  // 2的平方根，大约是`1.414`
  readonly SQRT2: number;

  // 第一个参数：指定底数
  // 第二个参数；指定指数
  // 返回  `x^y`
  pow(x: number, y: number): number;
  // e，大约是`2.718`，e为底树的值数，e^x
  exp(x: number): number;
  // 返回e^x - 1的结果
  expm1(x: number): number;
  // 平方根，square root
  sqrt(x: number): number;
  // 立方根，cube root
  cbrt(x: number): number;
  // === === 指数

  // === 对数
  // 欧拉数字，自然对数的底数
  // 大约是`2.718`
  readonly E: number;
  // 2的自然底数，大约是`0.693`
  readonly LN2: number;
  // 10的自然对数，大约是`2.303`
  readonly LN10: number;


  // e的2为底数的对数，大约是 `1.443`
  readonly LOG2E: number;
  // e的10为底数的对数，大约是`0.434`
  readonly LOG10E: number;

  // 以10为底数，返回参数x的对数
  log10(x: number): number;
  // 以2为底数，返回参数x的对数
  log2(x: number): number;
  // === end 对数


  // === 三角函数，需要用到再补充进来
  // 正弦 对边/斜边
  sin(x: number): number;
  // 余弦 邻边/斜边
  cos(x: number): number;
  // 正切 对边/邻边
  tan(x: number): number;
  // === end 三角函数

  // === 其他
  // 返回参数x的数字符号
  // 用于判断正数，负数，0
  sign(x: number): number;
}
```

[回到顶部](#javascript_docs)

#### Math用例
```javascript
Math.pow(2,53) // => 9007199254740992: 2 to the power 53
Math.round(.6) // => 1.0: round to the nearest integer
Math.ceil(.6) // => 1.0: round up to an integer
Math.floor(.6) // => 0.0: round down to an integer
Math.abs(-5) // => 5: absolute value
Math.max(x,y,z) // Return the largest argument
Math.min(x,y,z) // Return the smallest argument
Math.random() // Pseudo-random number x where 0 <= x < 1.0
Math.PI // π: circumference of a circle / diameter
Math.E // e: The base of the natural logarithm
Math.sqrt(3) // => 3**0.5: the square root of 3
Math.pow(3, 1/3) // => 3**(1/3): the cube root of 3
Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10) // Natural logarithm of 10
Math.log(100)/Math.LN10 // Base 10 logarithm of 100
Math.log(512)/Math.LN2 // Base 2 logarithm of 512
Math.exp(3) // Math.E cubed

// === ES6 defines more functions on the Math object
Math.cbrt(27) // => 3: cube root
Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments
Math.log10(100) // => 2: Base-10 logarithm
Math.log2(1024) // => 10: Base-2 logarithm
Math.log1p(x) // Natural log of (1+x) accurate for very small x
Math.expm1(x) // Math.exp(x)-1 the inverse of Math.log1p()
Math.sign(x) // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3) // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf) // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9) // => 3: convert to an integer by truncating fractional part
Math.fround(x) // Round to nearest 32-bit float number
Math.sinh(x) // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x) // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()
```

#### Regexp
```javascript
/^HTML/ // Match the letters H T M L at the start of a string
/[1-9][0-9]*/ // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i // Match "javascript" as a word, case-insensitive


let text = "testing: 1, 2, 3" // Sample text
let pattern = /\d+/g // Matches all instances of one or more digits
pattern.test(text) // => true: a match exists
text.search(pattern) // => 9: position of first match
text.match(pattern) // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#") // => "testing: #, #, #"
text.split(/\D+/) // => ["","1","2","3"]: split on nondigits
```

[回到顶部](#javascript_docs)


### Regexp


[回到顶部](#javascript_docs)

#### Regexp用例
```javascript
/^HTML/ // Match the letters H T M L at the start of a string
/[1-9][0-9]*/ // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i // Match "javascript" as a word, case-insensitive


let text = "testing: 1, 2, 3" // Sample text
let pattern = /\d+/g // Matches all instances of one or more digits
pattern.test(text) // => true: a match exists
text.search(pattern) // => 9: position of first match
text.match(pattern) // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#") // => "testing: #, #, #"
text.split(/\D+/) // => ["","1","2","3"]: split on nondigits
```

[回到顶部](#javascript_docs)
