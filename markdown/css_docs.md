
# css_docs
1. [css_instro](#css_instro)
2. [使用css样式](#使用css样式)
3. [css语法](#css语法)
4. [选择器](#选择器)
    1. [css选择器简介](#css选择器简介)
    2. [css选择器类型](#css选择器类型)
        1. [简单选择器](#简单选择器)
        2. [伪类选择器](#伪类选择器)
        3. [伪元素选择器](#伪元素选择器)
        4. [组合选择器](#组合选择器)
    3. [css声明冲突，级联和特指度](#css声明冲突级联和特指度)
5. [独特元素属性](#独特元素属性)
    1. [列表属性](#列表属性)
    2. [超链接属性](#超链接属性)
    3. [替换元素属性](#替换元素属性)
    4. [图片属性](#图片属性)
    5. [表格属性](#表格属性)
6. [布局属性](#布局属性)
    1. [normal flow](#normal-flow)
    2. [display](#display)
    3. [flexbox](#flexbox)
        1. [flexbox简介和创建](#flexbox简介和创建)
        2. [flex container属性](#flex-container属性)
        3. [flex item属性](#flex-item属性)
    4. [grid](#grid)
        1. [grid简介和创建](#grid简介和创建)
        2. [grid container属性](#grid-container属性)
        3. [gird item属性](#gird-item属性)
    5. [multi-column](#multi-column)
    6. [float&clear](#floatclear)
    7. [position相关属性](#position相关属性)
    8. [over-flow处理溢出](#over-flow处理溢出)
    9. [visibility](#visibility)
    10. [resize](#resize)
    11. [clip](#clip)
7. [盒子模型属性](#盒子模型属性)
    1. [css盒子模型和box-sizing](#css盒子模型和box-sizing)
    2. [width&height相关属性](#widthheight相关属性)
    3. [padding](#padding)
    4. [border](#border)
    5. [border-radius](#border-radius)
    6. [margin](#margin)
8. [外观属性](#外观属性)
    1. [背景属性](#背景属性)
        1. [background](#background)
        2. [背景图像属性](#背景图像属性)
        3. [backgorund-color背景颜色](#backgorund-color背景颜色)
    2. [前景色color&-webkit-flll-color](#前景色color-webkit-flll-color)
    3. [outline相关属性](#outline相关属性)
    4. [box-shadow](#box-shadow)
    5. [content](#content)
    6. [cursor](#cursor)
9. [文本属性](#文本属性)
    1. [字体样式font以及@font-face](#字体样式font以及font-face)
    2. [其他字体样式](#其他字体样式)
    3. [文本布局属性](#文本布局属性)
    4. [writing-mode](#writing-mode)
10. [过渡属性](#过渡属性)
11. [动画属性](#动画属性)
12. [变形属性](#变形属性)
    1. [transform及其相关属性](#transform及其相关属性)
    2. [常用的transform-function值](#常用的transform-function值)
13. [css图形](#css图形)
14. [css滚动捕捉](#css滚动捕捉)
15. [css counter](#css-counter)
16. [@rule](#rule)
17. [其他属性](#其他属性)
    1. [opacity](#opacity)
    2. [user-select](#user-select)
    3. [appearance](#appearance)
    4. [filter](#filter)
    5. [backdrop-filter](#backdrop-filter)
    6. [mix-blend-mode](#mix-blend-mode)
    7. [scroll-behavior](#scroll-behavior)
    8. [mask](#mask)
    9. [-webkit-line-clamp](#-webkit-line-clamp)
    10. [quotes](#quotes)
18. [继承属性](#继承属性)
19. [属性值](#属性值)
    1. [数值](#数值)
    2. [颜色值](#颜色值)
    3. [gradient渐变图像值](#gradient渐变图像值)
        1. [linear-gradient()线性渐变及其重复渐变](#linear-gradient线性渐变及其重复渐变)
        2. [radial-gradient()径向渐变即其重复渐变](#radial-gradient径向渐变即其重复渐变)
        3. [conic-gradient()圆锥渐变及其重复渐变](#conic-gradient圆锥渐变及其重复渐变)
    4. [位置值](#位置值)
    5. [图像值](#图像值)
    6. [图形值](#图形值)
    7. [时间值](#时间值)
    8. [函数产生值](#函数产生值)
    9. [默认属性值](#默认属性值)
20. [响应式解决方案](#响应式解决方案)
    1. [@media媒体查询](#media媒体查询)
    2. [其他形式的媒体查询](#其他形式的媒体查询)
    3. [flexible grid响应式布局](#flexible-grid响应式布局)
    4. [响应式尺寸值](#响应式尺寸值)
    5. [响应式图片](#响应式图片)
21. [附录](#附录)
    1. [附录属性](#附录属性)
        1. [border-image](#border-image)
    2. [BFC块级格式上下文](#bfc块级格式上下文)
    3. [css兼容性和样式统一](#css兼容性和样式统一)
    4. [css雪碧图（sprities）](#css雪碧图sprities)
    5. [css预处理器和后处理器](#css预处理器和后处理器)
    6. [CSS隐藏元素](#css隐藏元素)
    7. [浏览器开发工具调试](#浏览器开发工具调试)
    8. [CSS Validator](#css-validator)
    9. [css代码风格指导](#css代码风格指导)

## css_instro
1. css：文档样式，如应用文本样式，布局，过渡，动画等
2. 注释：`/*  */`，便于理解代码，且在css文件变得大的时候，可以用于定位代码
3. whitespace：和html一样忽略whitespace
4. 浏览器遇到不能理解或者错误的css样式，会自动跳过。利用这种行为让开发者可以随意书写新版本css，然后提供简单的fallback

```css
/* 注释 */
/* Handle basic element styling */
/* -------------------------------------------------- */


/* 遇到不能理解或错误的css样式自动跳过 */
.box {
  width: 500px;
  width: calc(100% - 50px);
}
```

[回到顶部](#css_docs)

## 使用css样式
使用css样式:
1. `<link rel="stylesheet" href="">` 引入外部样式表（External stylesheet），这是最常用的引入css样式的方式
2. `<style>`内书写css样式，称为内部样式表（Internal stylesheet）。有些情况，使用内部样式修改重写外部样式；对多个页面应用同样的内部样式表，效率不高且不容易维护
3. html元素`style属性`书写css样式，称为行内样式（Inline styles），尽可能避免用这种方式使用css，首先不利于维护css，与html代码混合，使得代码难以阅读和理解
4. `@import url("style.css")`引入样式表，与`<link>`引入外部样式表的区别
    * 用途：`<link>`是html元素，除了可以加载CSS外，还可以做其它的事情，比如定义RSS等; `@import`只能加载CSS
    * 加载样式表的时间点：`<link>`引入的样式，在页面加载时同时加载，`@import`引入的样式需等页面加载完成后再加载
    * 兼容性：`<link>`没有兼容性问题，`@import`是在 CSS2.1 提出的，低版本的浏览器不支持(不兼容ie5以下)
    * 是否可以通过javascript动态引入样式：`<link>`可以通过js操作DOM动态引入样式表改变样式，而`@import`不可以




[回到顶部](#css_docs)


## css语法
css语法（css syntax）：
1. css是基于规则（rule）的语言，语法格式是`selector{declarations;declarations;...}`，其中declarations由`property: value`组成，即`selector{property: value;property: value;...}`
2. 一个css declarations有`proeprty：value`对组成，多个css declarations组成css declarations block



```css
/* selector 出错，将会应用样式与元素发生错误 */
selector{
    /* description = property + value  */
    /* description 出错将不会对其进行解析，不会影响其余description的解析 */
    property: value;
}

/* selectorGroup任意一个selector出错，所有语法都会出错 */
selectorGroup{
    property: value;
}


/* === BEM命名规则 */
/* 块 组件 */
.block {
}

/* 元素 */
.block__element {
}

/* 修饰符 */
.block__element--modifier {
}
/* === end BEM命名规则 */
```

[回到顶部](#css_docs)



## 选择器



### css选择器简介
1. css选择器：定位应用样式规则的html元素，被定位引用的html元素称为subject
2. css选择器命名规则，一般遵循BEM命名规则
    * Block（块）是单独组件，可以跨项目使用
    * Element（元素）作为Block（块）子组件的命名空间
    * Modifier（修饰符）被用来标识一个 Block（块）或 Element（元素）是某个状态或不同结构或样式
3. css选择器解析方向:
    * CSS选择器的解析是从右向左解析的，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历
    * 两种匹配规则的性能差别很大，从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能


[回到顶部](#css_docs)


### css选择器类型
css选择器类型：
1. css选择器类型大致可以分为
    * 简单选择器
    * 伪类选择器
    * 伪元素选择器
    * 组合选择器
2. 选择器列表（Selector lists），通过`,`分割，让多个选择器应用相同css规则。如果列表中的一个selector失效（invalid ），Selector lists整个css规则都会被忽略
3. CSS 伪类和伪元素选择器区别：
    * 语法上：伪类为单冒号`:`，伪元素为`::`
    * 用途：伪类用于定义元素的状态，当一个元素达到一个特定状态时，就会应用指定规则，当状态改变时，它又会失去规则；伪元素用于定义元素的特定内内容，如元素内容中的第一个字母，第一行，元素的前后内容，用于设置特定内容（如三角形）和添加不占空间的元素

```css
/* selector lists */
/* white space被忽略，selectot lists 可以换行，增强代码可读性 */
h1,
.special {
  color: blue;
}
```
[回到顶部](#css_docs)

#### 简单选择器
css简单选择器包括：
1. id选择器 `#id`，拥有较高的specifity，每一个页面的id都是唯一的
2. 类选择器 `.class`
3. 类型选择器（type selector）`element` 
4. 属性选择器：元素的属性
    * `[attr]`
    * `[attr=val]`
    * `[attr~=val]`：属性attr的属性值是val，或者在空格分隔（space separated）的值列表中包含val，例如`li[class~="a"]` 表示li元素上，属性为class，空格分隔（space separated）的属性值列表中包含a属性值的li元素
    * `[attr|val]`：属性attr的属性值是val，或者属性值以val开始，以连字符进行分割。如`li[class]
    * `[attr^val]`：属性attr的属性值以val开头
    * `[attr&val]`: 属性attr的属性值以val结尾
    * `[attr*=val]`：属性attr的属性值val被包含在值字符串中
5. 通用选择器（Universal selector） `*`
    * 选择文档中的所有元素，通常使用这个reset浏览器默认全局样式
    * 使得某些选择器更加可读，容易理解，如`article :first-child`选择器表示，article的所有子元素，这些元素中是其父元素的第一个孩子，这与`article:first-child`不一样，`article:first-child`表示作为其父元素的一个元素的article元素，为了区别开来，可以用`article *:first-child`表示

[回到顶部](#css_docs)


#### 伪类选择器
伪类选择器（Pseudo-class selector），根据元素的状态（state）定位，就像为特定元素添加类一样
1. 根元素选择器 `:root`
    * `:root`表示 `<html>`元素，除了优先级更高之外，与`html`类型选择器相同
    * 还可以定义css自变量，该变量带有前缀`--`的属性名，比如`--example`，可以通过`var()`函数在全文档范围内复用。注意，在任何位置选择器内都可以定义css变量，根据选择器优先级，会对优先级低的选择器中同名css变量进行覆盖
2. 关系选择器
    * `:first-child`: 在父元素中，作为第一个孩子
    * `:last-child`: 在父元素中，作为最后一个孩子
    * `:nth-child(odd|even|n)`: 在父元素中，作为第n或奇偶数孩子，从1开始计数 
    * `:nth-last-child(odd |even | n)`: 在父元素中，作为倒数第n或奇偶数孩子，从1开始计数
    * `:empty`: 没有孩子的元素
3. 关系类型选择器
    * `:first-of-type`: 在父元素中，作为第一个该类型孩子
    * `:last-of-type`: 在父元素中，作为最后一个该类型孩子
    * `:nth-of-type(odd|even|n)`: 在父元素中，作为第n或奇偶数该类型孩子孩子，从1开始计数 
    * `:nth-last-of-type(odd |even | n)`: 在父元素中，作为倒数第n或奇偶数该类型孩子孩子，从1开始计数 
4. 用户行为伪类（User-action pseudo classes）
    * `:hover` 在元素上时
    * `:focus` 聚焦元素时
    * `:active` 激活元素时，例如单击元素
    * `:focus-within`内部元素被聚焦时候
5. 超链接伪类：链接除了使用常用的属性外，还按lvha顺序应用以下伪类
    * `:link`
    * `:visited`
    * `:hover`
    * `:actived`
    * `:target`: 元素被锚点链接定位时
6. 表单相关补充：
    * `:blank`：`<input>`元素的值是空
    * `:checked`：单选按钮和多选框的被选择状态
    * `:disabled`: 处于disabled状态的元素
    * `:enable`:处于enable状态的元素
    * `:autofill`：元素被浏览器自动填充
    * `:read-only`: 元素具有readonly属性
    * `:placeholder-shown`：元素具有placeholder
    * `:valid`：有效内容
    * `:invalid`：无效内容
    * `:required`: 元素具有required属性
7. 资源状态相关
    * `:playing`：媒体元素正在播放
    * `:paused`：媒体元素暂停播放
8. 其他
    * `:not(selector)`: 不具有某种选择性质
    * `:fullscreen`: 进入全屏状态的样式


```css
/* === root 选择器定义变量 */
/* 定义css全局变量 */
:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}
#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
/* === end root 选择器定义变量 */
```

[回到顶部](#css_docs)


#### 伪元素选择器
伪元素选择器（Pseudo-element selectors），定位元素的某个部分，就像为元素添加新元素一样
1. `::first-line`：元素的第一行 
2. `::first-letter`：元素第一个letter
3. `::before` & `::after`：通常与css属性`content`一起为元素前后插入内容
    * 通常不使用这个插入文本，这使得屏幕阅读器的文本不可访问
    * 通常用于插入icon
    * 通常用于插入一个空文本，然后作为一个html元素一样可以被应用样式规则
4. `::selection`：文档的部分被选中时，通常设置选中文字的背景颜色和文字颜色
5. 滚动条选择器（只能在webkit内核浏览器应用）
    * `::-webkit-scrollbar `：整个滚动条
    * `::-webkit-scrollbar-track `： 滚动条轨道，常用于设置颜色和盒子属性
    * `::-webkit-scrollbar-thumb`：滚动条拖动按钮，常用于设置背景颜色和圆角
    * `::-webkit-scrollbar-button `：滚动条中的button（向上和向下的箭头）
    * `::-webkit-scrollbar-track-piece`：轨迹未奔手柄覆盖的部分（进度条）
    * `::-webkit-scrollbar-corner `：滚动条的底角，水平和垂直滚动条都在此相遇
    * `::-webkit-resizer`：出现在某些元素底角的可拖动大小调整手柄
6. 起初，伪元素的前缀使用的是单冒号语法，如CSS2.1里`:before 和 :after` 这两个伪元素，但在CSS3的规范里，伪元素的语法被修改成使用双冒号语法，成为`::before 和 ::after`


```css
/* === 滚动条样式案例 */
::-webkit-scrollbar {
  /* 设置滚动条的高度或者宽度 */
  width: 8px;
}
/* 设置滚动条轨道背景和圆角 */
::-webkit-scrollbar-track {
  background: #1E3F20;
  border-radius: 12px;
}
/* 设置滚动条拖动按钮背景和圆角 */
::-webkit-scrollbar-thumb {
  background: #4A7856;
  border-radius: 12px;
}
/* === end 滚动条样式案例 */


/* === ::selection伪元素 */
::selection{
  background: deeppink;
  color: white;
}
/* === end ::selection伪元素 */
```

[回到顶部](#css_docs)


#### 组合选择器
组合选择器:
1. 后代选择器（Descendant combinator） `selector1 selector2`
2. 孩子选择器（Child combinator） `selector1 > selector2`，不同于后代选择器，孩子选择器不会深层查找
3. 兄弟选择器（General sibling combinator） `selector1 ~ selector2`
4. 邻接兄弟选择器（Adjacent sibling combinator） `selector1 + selector2`


[回到顶部](#css_docs)

### css声明冲突，级联和特指度
css声明冲突（Conflicting declarations）
1. 描述：对同一个html元素的多个相同属性的css声明的应用，产生了css声明冲突
2. css声明冲突需要确定哪一个最终被应用：
    * 首先根据css声明定义的来源确定，靠前的覆盖靠后的：`用户样式表中的重要（important）css声明 > 开发者样式表中的重要（important）css声明 >  开发者样式表中的css声明 > 用户样式表中的css声明 > 用户客户端（user agent）定义的默认css声明`
    * 对于定义在同一处来源，相同属性的不同的css声明，由级联（cascading）确定应用那一条css声明
3. css级联（cascading）
    * 相同特指度（specificity的css声明，根据规则的order确定，次序较后的将会被应用
    * 特指度（specificity）由高到低为：
        * `!important`：对相同的css声明进行覆盖，会破坏组件的可扩展性，大的css文件更加难以维护，如果不是必须不建议使用
        * 行内样式（inline style）
        * id (= a)
        * class, attribute, pseudo-class  (= b)
        * type selector, pseudo element (= c)
        * universal selector（*）

```css
/* === css specificity*/
*               /* a=0 b=0 c=0 -> specificity =   0 */
LI              /* a=0 b=0 c=1 -> specificity =   1 */
UL LI           /* a=0 b=0 c=2 -> specificity =   2 */
UL OL+LI        /* a=0 b=0 c=3 -> specificity =   3 */
H1 + *[REL=up]  /* a=0 b=1 c=1 -> specificity =  11 */
UL OL LI.red    /* a=0 b=1 c=3 -> specificity =  13 */
LI.red.level    /* a=0 b=2 c=1 -> specificity =  21 */
#x34y           /* a=1 b=0 c=0 -> specificity = 100 */
#s12:not(FOO)   /* a=1 b=0 c=1 -> specificity = 101 */ 
/* === end css specificity*/
```


[回到顶部](#css_docs)



## 独特元素属性

[回到顶部](#css_docs)

### 列表属性
列表属性：
1. `list-style`: 设置列表样式，是`list-style-type list-style-image list-style-position`的属性缩写
2. `list-style-type`: 定义列表项目元素（list item elment）的标记（marker）的类型；通常在`<li>`元素上使用，但是由于该属性是可继承的，所以可以在`<ol> | <ul>`上设置，值可能是
    * `none`: 移除默认类型
    * `decimal`：数字
    * `decimal-leading-zero`：前导0
    * `lower-alpha`：小写字母
    * `upper-alpha`：大写字母
    * `lower-roman`：小写罗马
    * `upper-roman`：大写罗马
    * `circel`：圆
    * `square`：正方形
3. `list-style-image`: 自定义图像作为列表项目标记，这属性有限制，不能控制图像的位置和大小，更好的是通过`background`设置；值可能是：
    * `none`：默认值
    * `<image>`：图像值，如`url(/images/list-style-image.png)`
4. `list-style-position`：设置列表项目标记的位置，值可能是
    * `outside`：默认值，列表项目标记在块盒子（block box）外
    * `inside`：列表项目标记是列表项目内容的第一个元素
5. 列表的默认样式
    * `<ul>`和`ol`元素设置了1em的上下外边距（1em，即与字体大小相同）
    * `<ul>`和`ol`元素设置40px的左内边距和右边距
6. 其他常用于列表的非列表独有的属性：
    * 盒子模型属性
    * 表现属性如`color...`
    * 文本属性

[回到顶部](#css_docs)

### 超链接属性
超链接属性：
1. 超链接具有不同的状态，每一个状态都可以用对应的伪类来应用样式:
    * Link (没有访问过的): 超链接的默认状态，没有处在其他状态的时候的状态。使用`:link `伪类来应用样式。
    * Visited: 超链接已经被访问过，存在于浏览器的历史纪录, 可以使用 `:visited` 伪类来应用样式。
    * Hover: 用户鼠标光标停留在超链接上，可以使用 `:hover` 伪类来应用样式。
    * Focus: 超链接被聚焦的时候，比如通过键盘的`Tab `移动到超链接或者使用编程的方法来选中这个链接 `HTMLElement.focus()`，可以使用 `:focus` 伪类来应用样式。
    * Active: 超链接被激活的时候，比如被点击的时候，可以使用 `:active` 伪类来应用样式
2. 超链接具有一些默认样式
    * 超链接具有下划线。一般具有下划线的时超链接，所以不要随便给元素设置下划线，会让用户迷惑
    * 未被访问（Unvisited）的超链接`color:blue`
    * 已经被访问（visited）的超链接`color:purple`
    * `cursor: pointer`使得鼠标移动到超链接指针上时鼠标样式变化
    * 聚焦（focused）的超链接会有一个outline
    * 激活（actived）的超链接那一瞬间`color:red`
3. 超链接和它的伪类的样式设置顺序很重要`a -> lvfha`
4. 一些样式的应用：
    * 链接图标：通过`backgoround + padding`设置
    * 将链接样式化为按钮（button）
5. 其他常用于超链接的非超链接独有的属性：
    * 盒子模型属性
    * 表现属性
    * 文本属性
    

```css
/* 这个顺序是重要的,要记住这个顺序 */
a {}
a:link {}
a:visited {}
a:focus {}
a:hover {}
a:active {}
```

[回到顶部](#css_docs)


### 替换元素属性
替换元素属性：
1. `object-fit`属性，用于设置替换元素的内容（replaced content）如何被重设尺寸（resized），来适应元素的内容盒子（element's content box）：
    * `fill`：默认值，替换内容（replaced content），完全填充元素的内容盒子（element's content box），如果替换内容的长宽比（aspect ratio）和元素的内容盒子长宽比不一致，替换元素会不保持原有的长宽比（aspect ratio），拉伸（stretched）去适应元素的内容盒子，
    * `contain`：替换内容适应元素的内容盒子时，宽度或宽度一个填满一个即可，保持原有长宽比缩放
    * `cover`：替换内容适应元素的内容盒子时，填充元素的整个内容盒子，保持原有长宽比缩放，如果替换内容的长宽比和元素的内容盒子长宽比不一致，部分内容可能被裁切
    * `none`：替换内容不被重设尺寸
2. `object-position`属性，通常与`object-fit`一起使用，用于设置替换元素的内容（replaced content）在元素盒子（element box）内的位置，没有被替换元素内容覆盖的元素盒子区域会显示元素的背景。属性值是`<position>`，是一个定义元素的二维位置的一些值

```css
/* <position> values */
object-position: center top;
object-position: 100px 50px;
```

[回到顶部](#css_docs)

### 图片属性
图片属性：
1. 为了防止图片溢出父亲容器，通常设置`max-width`，不超过父亲容器元素尺寸的图片保持原来的尺寸，超过父亲容器元素尺寸的图片设置为一个`max-width`指定的限制值
2. `object-fit`设置元素内容如何调整尺寸适应元素的内容盒子
3. css布局技术中，替换元素的表现和其他元素有些不一样，在flex和grid布局中，元素默认是填充整个区域，图片不会伸展（stretch），且对齐grid area或者flex container的开始（start），因为伸展图片，一般不是想做的事

[回到顶部](#css_docs)


### 表格属性
表格属性：
1. 表格的box模型默认为`border-sizing: border-box`
2. `table-layout`：用于`<table>`元素的属性，设置表格的单元格，行，列的布局，可能的值：
    * `auto`：默认值，如果表格宽度不足以容乃宽度，`width`属性被舍弃，表格和单元格的宽度由内容调整
    * `fixed`：表格和列yon的宽度由`<table> | <col>`元素设置，如果没有设置，则宽度由单元格内容自动调整。设置了宽度的固定表格，可能会出现溢出，单元格可以使用`overflow`属性处理，对于溢出的文字处理，还可以使用`text-overflow`进一步处理
3. `empty-cells`：用于`<table>`元素的属性，定义表格单元格没有内容的时，border和background的行为，可能的值：
    * `show`：默认值，显示border和background
    * `hide`：隐藏border和background
4. `caption-side`：定义表格内`<caption>`元素在表格的哪一侧，这个值是相对于表格的writing mode，可能的值：
    * `top | bottom`：caption在表格的顶部或者顶部
    * `block-start | block-end | inline-start | inline-end`：表格writing mode的逻辑值
5. `border-collapse`：用于表格单元格元素`<td> | <th>`，定义表格单元格的边框是分离的还是重叠的，可能的值
    * `separate`：默认，分离在表格和表格单元格之间有空隙
    * `collapse`：边框折叠为一个，表格经常使用的样式
6. `border-spacing`：定义表格单元格`<td> | <th>`之间的距离，只有在`border-collapse: seprate`情况下生效，分为水平距离和垂直距离两个值，接收的值是`<length>`，可以设置一个值同时表示水平距离和垂直距离
7. 其他常用于表格元素的非表格元素独有属性：
    * 盒子模型属性中用于`<table>`元素的`border...`, 用于表格单元格元素的`padding...`
    * 文本属性中用于表格单元格元素的`letter-spacing & text-align...`，用于`<table>`元素的`font...`
    * 外观属性中的 `background | background-color | color | box-shadow...`
    * 使用伪类选择器`tr:nth-child(odd) | tr:nth-child(even)`配合`background-color`设置斑马条纹（Zebra striping）
  

[回到顶部](#css_docs)


## 布局属性
1. 浮动元素与绝对定位的元素的异同：
    * 相同都是脱离文档流，并且可以设置宽高
    * float不会遮盖另一个BFC区域；position:absolute会产生一个遮盖
2. 传统布局，使用`position & float`的布局，是以前跨浏览器布局的常用兼容布局属性，但是有些很简单的布局设计需要困难或不可能的方式实现
    * 在父亲元素内垂直居中一块内容
    * 让所有的容器内单元素具有相同的高度/宽度
3. 流式布局：也叫百分比布局，弹性盒布局，流式布局中，常使用`width | height | padding | margin`设置`<pencentage>`值

[回到顶部](#css_docs)

### normal flow
normal flow：时页面默认布局，对于很多的元素，normal flow创建所需要的布局，这也就是为什么一个很好的HTML文档结构是如此重要，normal flow规定了块元素，行内元素，margin折叠等默认行为

[回到顶部](#css_docs)


### display
display属性：
1. 描述：noraml flow中的元素都有默认的display值，改变`display`属性的值，可以改变元素在normal flow 中的布局，细节地讲，`display`属性指定了元素的显示类型，元素盒子（box）有外部显示类型（outer display type）和内部显示类型（inner display type）：
    * 外部显示类型定义了元素怎样参与流式布局的处理，决定盒是块级还是行内
    * 内部显示类型定义了元素内子元素的布局方式，定了盒子内部元素是如何布局的
    * 如设置`display: flex`，在一个元素上，外部显示类型是`block`，但是内部显示类型修改为`flex`，该盒子的所有直接子元素都会成为flex元素，会根据Flexbox规则进行布局
2. `display`属性值
    * `none`：元素完全被移除
    * `block`：以块级元素形式显示
    * `inline`：以行内元素形式显示
    * `inline-block`：不会换行，但是可以设置 width &height & margin 等特性
    * `flex`: flexbox
    * `inline-flex`: 不会换行，但是可以设置 width &height & margin 等特性
    * `grid`:  grid container
    * `inline-grid`: 不会换行，但是可以设置 width &height & margin 等特性
    * `list-item`：像li元素一样显示，元素会作为列表显示
    * `table | table-cell | table-row` ：`tabel`内容和子元素像表格一样，元素会作为块级表格来显示; `tabel-cell`像table-cell 一样，`table-row`像table-row一样
3. 元素盒子（box）的外部显示类型（outer display type）决定了元素盒子（box）是块盒子（block box）还是行内盒子（inline box）：
    * 元素盒子（box）如果是外部显示类型（outer display type）为block，具有以下行为：
        * 独占新的一行，没有设置`width`属性，默认填满父元素，设置了width，仍然独占一行；
        * 可以设置`padding border margin  width height`等css属性；不可以设置 `vertical-align`等css属性
    * 元素盒子（box）如果是外部显示类型（outer display type）为inline，具有以下行为：
        * 不会独占新的一行，宽度由元素内容决定，父元素空间不够才自动换行（行内元素之间有空隙，空隙消除可以通过设置父元素`font-size: 0`，然后行内元素设置该有的font-size覆盖，空隙就可以消除）
        * `width & height`属性被忽略可以设置水平方向的`padding border margin`的css属性, 垂直方向的`padding border margin`不产生效果；垂直方向由`line-height`产生
    * 设置了`display: inline-block`的元素盒子具有以下行为：
        * 不会独占新的一行，宽度由元素内容决定，可以通过`width`设置宽度
        * 可以设置`padding border margin  width height & vertical-align`等css属性；


[回到顶部](#css_docs)


### flexbox

[回到顶部](#css_docs)


#### flexbox简介和创建
flexbox简介和创建：
1. flexbox描述：flexbox（flexible box layout module）
2. flex model：控制flex item在flex container内的布局，根据两个轴进行布局
    * `main axis`：flex item的布局方向，如页面水平方向或者垂直方向，通过`flex-direction`属性定义。`main axis`开始和结束称为`main start | main end`
    * `cross axis`：flex item布局方向的垂直方向；`cross axis`的开始和结束称为`cross start | cross end`
    * `main size`：flex item在main axis上的尺寸
    * `cross size`：flex item在cross axis上的尺寸
3. 创建flexbox：父容器元素应用`display:flex | display:inline-flex`，具有以下表现：
    * 父亲元素成为flex container：如果是`display:flex`，父亲元素的外部显示类型是block元素，如果是`display:inline-flex`，外部显示类型是inline元素
    * flex container内的内容元素成为flex item，默认情况下，每一个flex item具有相同的高度
    * `flex-direction:row`默认值，使得flex item按行方向进行排列。
    * `justify-content:start`默认值，设置flex item从main axis的main start开始布局
    * `flex-wrap:nowroap`默认值，flex containter中的flex item不换行
    * flex items 在main axis 方向不会被扩展（stretch），但会被收缩（shrink）
    * `align-items:stretch`默认值，flex item在cross axis上拉伸填充flex containter
    * `flex-basis:auto`默认值

[回到顶部](#css_docs)

#### flex container属性
flex container属性：
1. `flex-flow`属性：`flex-direction flex-wrap`的缩写属性
2. `flex-direction`：设置flex container的main axis，main axis是flex item的布局方向，值可能是
    * `row`：默认值，flex container的main axis是文字方向，其中`main-start & main-end`和文字方向相同
    * `row-reverse`：flex container的main axis是文字方向，但是`main-start & main-end`与`flex-direction:row`指定的`main-start & main-end`相反
    * `column`：flex container的main axis是块方向（block flow direction），main-start点和main-end点和`writing mode`的before，after点相同
    * `column-reverse`：flex container的main axis是块方向，但是`main-start & main-end`与`flex-direction:column`指定的`main-start & main-end`相反
3. `flex-wrap`：该属性用于控制flex item在一行布局，还是溢出时候折叠（wrap）为多行布局，可能的值：
    * `nowrap`：默认值，flex item在一行布局，flex container如果有固定宽度和高度，flex item可能会从flex container内溢出
    * `wrap`：flex item溢出时候折叠为多行布局，从cross start到cross end方向折叠
    * `wrap-reverse`：flex item溢出时候折叠为多行布局，从cross end方向到cross start方向折叠
4. `justify-content`：设置在flex container内的flex item沿着main axis如何为content item分配空间，可能的值：
    * `flex-start`： 默认值，flex item在flex container的main axis的main start上布局
    * `flex-end`： flex item在main axis的main end上布局
    * `center`： flex item在main axis的center上布局
    * `space-between`：flex item在main axis上均匀分布，flex item之间的距离相等，首尾两端的flex item与flex container相切
    * `space-around`：flex item在main axis上均匀分布，flex item之间的距离相等，第一个flex item前的空白和最后一个flex item的空白是其他flex item间距的一半
    * `space-evenly`：flex item在flex container的main axis上均匀分布，flex item之间的距离相等
5. `justify-items`: 在flexbox布局中被忽略，其他如grid，block，absolute布局中基本都是为容器内的item设置默认的`justify-self`，在inline方向进行布局，可能的属性值与`justify-content`一致，如grid布局中可以控制grid item在其grid area内的inline方向上的布局
6. `align-items`：设置在flex container内的flex item沿着cross axis对如何布局，flex item可以单独设置`align-self`属性覆盖整个属性，`align-items`可能的值：
    * `stretch`: 默认值，flex item在cross axis上拉伸填充flex containter
    * `flex-start`： flex item在cross axis上的cross start布局
    * `flex-end`： flex item在cross axis上的cross end布局
    * `center`： flex item在cross axis上的center布局
7. `align-content`：设置在flex container内的flex item沿着main axis如何为content item分配空间，可能的值与`align-items`一致，对于grid布局来说，是block axis方向；对于flexbox中只有单行，不起布局作用

[回到顶部](#css_docs)



#### flex item属性
flex item属性：
1. `flex`：是`flex-grow flex-shrink flex-basics`的缩写属性，可能的值：
    * 只有一个值时：`<number>`被当作`flex-grow`的属性值，`<length> | <percetage>`值是`flex-basis`的属性值
    * 两个值时：第一个值必须为`<number>`，当作 `flex-grow`的属性值；第二个值如果为`<number>`，则作为 `flex-shrink` 的属性值，如果为`<length> | <percetage>`，作为`flex-basis`的属性值
    * 三个值时：第一个值必须为`<number>`，当作 `flex-grow`的属性值；第二个值必须为`<number>`，作为 `flex-shrink` 的属性值，第三个值必须`<length> | <percetage>`，作为`flex-basis`的属性值
    * `flex: initial`：初始值，相当于`flex: 0 1 auto`，即flex item的`flex-grow`不可以扩展（stretch），`flex-shrink`可以缩小防止溢出
    * `flex: auto`：相当于`flex: 1 1 auto`，flex item既可以拉伸也可以收缩
    * `flex: none`：相当于`flex: 0 0 auto`，flex item既不能拉伸或者收缩，但是元素会按具有 `flex-basis: auto`进行布局
2. `flex-grow`：设置flex item的main size的扩大因数（grow factor），值是`<number>`类型，决定了flex item以`flex-basis`为基础，在main axis上剩余空间如何分配，如两个元素，一个`flex-grow: 2`值为2，一个`flex-grow: 1`，则第一个元素增长2/3的布局空白，第二个元素增长1/3的布局空白，默认值是`0`，表示即使main axis上还有空间可以获得，flex item都不会进行扩展
3. `flex-shrink`：设置flex item的收缩因数（shrink factor），值是`<number>`类型，在所有flex item的大小（size）超过flex container时，flex item根据收缩因数进行收缩，默认值是`1`，即按照1倍数缩小
4. `flex-basics`：设置flex item初始main size，设置的是内容盒子（content box）的大小，值是`<length> | <percetage>`，默认值是`auto`，浏览器会检测这个元素是否具有确定的尺寸，假如宽度（width）为100px，`flex-basis`值为100px，如果没有给元素设定尺寸，`flex-basis`的值采用元素内容的尺寸，
5. `justify-self`：在flexbox布局中被忽略，其他如grid，block，absolute布局中基本都是为item在inline方向进行布局，可以覆盖容器上`justify-items`的值，可能的属性值与`justify-content`一致，如grid布局中可以控制grid item在其grid area内的inline方向上的布局
6. `align-self`：指定单个flex item在cross axis上的布局方式，值与`align-items`一致，会覆盖flex container上`align-items`的值，如grid布局中可以控制grid item在其grid area内的block方向上的布局
7. `order`：设置flex container内flex item的布局次序（layout order），值是`<integer>`类型，整数值越大，排列顺序越往后，相同的值根据代码出现先后顺序布局，默认值为0


[回到顶部](#css_docs)






### grid
有些属性对grid item不起作用：
* float
* `display: inline-block`, `display: table-cell`
* vertical-align 
* column-* 

#### grid简介和创建
grid简介和创建：
1. 描述：grid用于一个处理行和列的二维网格布局，grid有column & row，在行和列之间还有gutter
2. 创建grid：grid container设置`display：grid 或 display：inline-grid`，grid container内的直接子元素变为grid item进行布局，默认是一列布局


[回到顶部](#css_docs)


#### grid container属性
1. `grid`：是`grid-template-rows grid-template-columns grid-template-areas grid-auto-rows  grid-auto-columns grid-auto-flow`的缩写属性，可能的值是
    * `grid-template`
    * `grid-template-rows / grid-auto-flow grid-auto-columns`
    * `grid-auto-flow grid-auto-rows / grid-template-rows`
2. `grid-template`：`grid-template-areas grid-template-rows / grid-template-column values`的缩写属性，可能的值
    * `none`：设置三个属性为`none`，不创建命名grid区域（named grid area），不创建行和列
    * `grid-template-row / grid-template-column`：为`grid-template-rows`和`grid-template-columns`指定值，不指定grid area
    * `grid-template-areas grid-template-rows / grid-template-column values`：
3. `grid-template-rows`：定义grid row的网格线名称（line name）和轨道大小（track size），可能的值：
    * `[linename]`：是一个可选的字符串，在方括号内用于定义对应位置的网格线名称（grid line neme），不一定要把全部网格线都命名，只需要为布局时用到的关键线命名即可，网格线不仅有一个名称，还可以使用空格进行分隔拥有多个名称，有了网格线，grid items就可以使用网格线名称定位；定义的名称是大小写敏感的
    * `none`：默认值，不创建显式（explicit ）的grid track，意味着创建隐式（implicitly ）的grid track，`grid-template-rows`不是创建显式grid track的唯一方式，`grid-template-areas`同样可以实现
    * `<track-size>`：值可以是`<length> | <percentage> | <flex>`；`<length>`是非负的，单位如px，em，rem；`<percentage>`是grid container各自方向的百分比，使用百分比的缺点是，grid track之间增加gap可能会导致溢出；`<flex>`使用fr单位指定轨道（track）的flex因数（factor），根据每一个flex因数分配grid container的可用空间（remaining space），从而创建一个响应式的grid，例如创建定义了一个2fr轨道和两个1fr轨道，可用空间被四等分，其中两份给了第一个轨道，剩下两个轨道各占一份；
    * `minmax(min, max)`：接受min和max参数，设定grid track尺寸在大于等于min值，并且小于等于max范围（size range）内，min值不能是`<fr>`值，常用于连接相对单位，如`minmax(100px, 1fr)`
    * `auto`：很多情况下表现与`minmax(min-content,max-content)`一样；很像fr单位，但是不像fr单位一样分配剩余空间
    * `max-content`：在内容没有溢出或折叠前提下，grid item占内容的最大尺寸，如`CSS is awesome`一行字，整个句子的宽度就是max-content的宽度
    * `min-content`：在内容没有溢出前提下，grid item占内容的最小尺寸，如`CSS is awesome`一行字，`awesome`的宽度就是min-content的宽度
    * `fit-content(<length-percentage> )`：相当于`min(max-content, max(auto, <length-percentage>))`，在auto和`<length-percentage>`中取一个最大值，然后和max-content比较中取一个最小值，使得grid track不会超过`max-content | <length-percentage>`
    * `repeat([ <positive-integer> | auto-fill | auto-fit ] , <track-list>)`：重复部分或整个轨道列表；除了使用整数重复，还可以使用`auto-fill | autofit`关键字，其中其中`auto-fill`在一行尽可能容纳更多的column，如果grid item布局完，会遗留空的空间；`auto-fit`扩展列的容纳空间，没有空的容乃空间；使用`auto-fill | autofit`关键字不能配合`<fr>`使用，`repeat(autofill autofit, 1fr)`是无效语法
4. `grid-template-columns`：定义grid column的网格线名称（line name）和轨道大小（track size），可能的值与`grid-template-rows`一致
5. `grid-template-areas`：为grid area指定字符串名称，grid items后续可以通过grid位置属性（grid placement property）引用，grid placement属性包括`grid-area | grid-row | grid-row-start | grid-row-end | grid-column | grid-column-start | grid-column-end`
6. `gap`：设置行和列的之间的gutter，是`row-gap column-gap`的缩写属性，值的类型是`<length> | <percentage>`，可能的值是：
    * 一个值：`row-gap`和`column-gap`的属性值一致
    * 两个值：分别指定`row-gap`和`column-gap`
7. `grid-auto-rows`：设置隐式创建的grid row的track尺寸，如果在grid row内的grid item没有被`grid-template-row`定义显式尺寸，隐式的grid row会自动创建，可能的值与可能的值与`grid-template-rows`一致
8. `grid-auto-columns`：设置隐式创建的grid column的track尺寸，如果在grid column内的grid item没有被`grid-template-column`定义显式尺寸，隐式的grid row会自动创建，可能的值与可能的值与`grid-template-rows`一致
9. `grid-auto-flow`：为没有进行定位的grid item设置自动布局定位，可能的值是
    * `row`：grid item填满每一行，有必要的时候添加新行
    * `column`：grid item填满每一列，有必要的时候添加新列
    * `dense`：尝试填满之前未填满的行或列，如果指定了`row`则填满row，指定了`column`则填满column
10. 与flexbox一样的属性，如
    * `justify-content`对于flexbox来说是main axis的布局，对于grid来说是inline axis的布局
    * `align-items`同理
    * `justify-items`在inline axis方向上，控制对应的grid area内的item的布局
11. `place-items: <align-items> <justify-items>`
12. `place-content: <align-content> <justify-content>`

```css
grid: <'grid-template'>
grid: <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?
grid: [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>

/* grid 例子 */
grid: 100px 300px / 3fr 1fr;
grid: auto-flow / 200px 1fr;
grid: auto-flow dense 100px / 1fr 2fr;
grid: 100px 300px / auto-flow 200px;
grid: [row1-start] "header header header" 1fr [row1-end]
  [row2-start] "footer footer footer" 25px [row2-end]
  / auto 50px auto;


/* === grid-template */
grid-template: none;
/* grid-template-rows / grid-template-columns values */
grid-template: 100px 1fr / 50px 1fr;
grid-template: auto 1fr / auto 1fr auto;
grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;


/* 相当于 */
/* 
grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
grid-template-columns: auto 50px auto;
grid-template-areas: 
    "header header header" 
    "footer footer footer"; 
*/
grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
/* === grid-template */

/* === grid-template-row */
grid-template-rows: none;
/* 可分配空间不包括100px */
grid-template-rows: 100px 1fr;
grid-template-rows: [linename] 100px;
/* 可选的为网格线定义名称 */
grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
/* 网格线不仅可以有一个名称，还可以拥有两个名称，如下的row1-end & row2-start */
grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
/* grid-template-columns: 1fr 1fr 1fr; */
grid-template-columns: repeat(3, 1fr);
/* === end grid-template-row */


/* === grid teamplate area */
grid-template-areas: none;

/* <string> values */
grid-template-areas: "a b";
grid-template-areas: "a b b"
                     "a c d";
/* 留出空白的网格单元出空单元的方法是使用句点符`.` */
/* 使得侧边栏下面的三个单元格为空 */
grid-template-areas: 
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      ".  .  .  ft   ft   ft   ft   ft   ft";
/* === end grid teamplate area */


/* === grid-auto-columns & grid-auto-rows 例子 */
.container {
  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px;
  /* 设置隐式的grid track，指定宽度 */
  grid-auto-columns: 60px;
}
/* 在范围内 */
.item-a {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
/* .item-b从第5列开始到第6列结束，但从未定义第5或6列 */
/* 所以会产生隐式的grid track，宽度为变得不受控制 */
.item-b {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}

/* ===  end grid-auto-columns & grid-auto-rows 例子 */
```

[回到顶部](#css_docs)




#### gird item属性
gird item属性：
1. `grid-area`：指定grid item在grid container中的位置和尺寸，是`grid-row-star grid-column-start grid-row-end   grid-column-end`的缩写属性，可能的值是
    * 四个`<grid-line>`值：依次指定`grid-row-star grid-column-start grid-row-end   grid-column-end`
    * 如果省略了`grid-column-end`，除非`grid-column-start`是一个`<custom-ident>`自定义字符串值，否则`grid-column-end`为auto值
    * 如果省略了`grid-row-end`，除非`grid-row-start`是一个`<custom-ident>`自定义字符串值，否则`grid-row-end`为auto值
    * 如果省略了`grid-column-start`，除非`grid-row-start`是一个`<custom-ident>`自定义字符串值，所有四个值都会设置为该值，否则为auto值
2. `<gird-line>`，表示网格线，值包括
    * `<integer>`：指定grid item的grid line，如果是负数，则从grid container的末端边缘开始计数，例如右端的列线和底端的行线记为-1,倒数第2条线会被记为-2,依此类推；后面可以附加一个`<custom-ident>`自定义字符串值，只有line具有该名称才会被计数；0是无效数字
    * `auto`：设置grid item为自动布局
    * `span`：跨越相应grid item，后面可以附加一个`<integer>`表示跨越的grid item，0和负数是无效数字，默认是1；还可以附加一个`<custom-ident>`自定义字符串值，只有line具有该名称才会被计数
3. `grid-row`：是`grid-row-start/grid-row-end`的缩写属性，用于设置grid item在grid row中的位置，可能的值：
    * 如果是一个值，即指定`grid-row-start`，可以省略`grid-row-end`，默认延伸一个轨道
    * 如果是两个值，则需要使用`/`分割，`/`前的值表示`grid-row-start`, `/`前的值表示`grid-row-end`
4. `grid-column`：是`grid-column-start/grid-column-end`的缩写属性，用于设置grid item在grid column中的位置，可能的值与`grid-row`类似
5. `grid-row-star | grid-column-start | grid-row-end | grid-column-end`：指定grid item行列开始结束位置，`<gird-line>`类型值
6. 与flexbox一样的属性，如
    * `justify-self`对于flexbox item来说是main axis的布局，对于grid来说是inline axis的布局
    * `align-self`同理
7. `place-self: <align-self> <justify-self>`

```css
/* <integer> && <custom-ident>? values */
grid-area:  4 some-grid-area;
grid-area:  4 some-grid-area / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] values */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;
```

[回到顶部](#css_docs)



### multi-column
multi-column：
1. 描述：多列布局，没有办法使得改变单独一列的样式，如使得其中的一列比另外一列宽度大，如单独改变一列背景颜色，文本颜色等
2. `column`：多列布局容器属性，是`column-count column-width`的缩写属性
    * `column-count`：多列布局容器属性，设置column的数量，coulmn具有flexible宽度，`<integer> | auto`值
    * `column-width`：多列布局容器属性，设置column的理想宽度，`<length | auto>`值，真实宽度可能会更宽或更窄
3. `column-gap`：多列布局容器属性，设置column之间的gutter，可能的值：
    * `normal`：column之间的默认值
    * `<length> | <percentage>`
4. `column-rule`：多列布局容器属性，设置多列之间的列线样式，是`column-rule-width column-rule-style column-rule-color`的缩写属性
5. `column-span`：column item属性，设置column item是否跨越所有的column，可能的值
    * `none`：默认值，不跨越column
    * `all`：跨越所有的column
6. `break-inside`：column item属性，多列布局的内容默认是碎片化（fragmented），为了使得多列布局避免内容brekaking，可以设置`break-inside: avoid`


[回到顶部](#css_docs)

### float&clear
float&clear：
1. `float`：最初是经常用于文字内浮动图片，使得文字环绕图片，后来被用于浮动其他元素，用于首字下沉，甚至用于浮动创建多列布局，这种布局方式现在是不推荐的
2. 元素设置浮动具有以下特性：
    * 脱离正常文档流（normal flow），浮动元素使得元素向左或向右移动，直到浮动元素的边缘碰到包含元素或者另外一个浮动元素为止；浮动元素前的同级元素会被浮动元素覆盖，特殊地，**不与文字内容产生重叠，不与图片内容重叠，不与表达元素重叠**
    * 元素变为块级元素，且宽度根据内容调整：元素自动设置`display:block`，变为块级元素，特殊地，对于块级元素，在不设置宽度的情况下，宽度默认铺满容器，一旦设置了浮动，变为块级元素的浮动元素，宽度根据内容自动调整
    * 子元素都被设置为浮动后，父级元素的高度会变为0，导致父级元素塌陷的现象
3. `float`属性可能的值：
    * `none`：默认值，或者用于移除浮动
    * `left`：左浮动
    * `right;`：右浮动
4. 浮动引发的高度塌陷及其解决：
    * 父级元素设置高度。给元素设置高度不能适应页面的变化，不具有扩展性
    * 清除浮动。通常是在容器所有的浮动元素之后，容器结束之前清除浮动元素
5. 浮动引发的元素下移：下移浮动元素内的元素宽度大于浮动元素本身（典型的如浮动元素内的图片）。大多数浏览器会在浮动之外渲染图像，但突出的部分不会影响其他布局
6. `clear`属性：设置是否需要将元素移动到前面的浮动元素的下方，通常用于清除浮动，可能的值
    * `none`：默认值
    * `left`：清除左边的浮动元素
    * `right`：清除右边的浮动元素
    * `both`：清除两边的浮动元素
7. 清除浮动的方式
    * 新块级元素 + `clear:both`：父级元素最后增加一个`<div>`空元素并设置样式`clear:both` 或者为最后一个浮动元素设置`clear:both`样式
    * 父级元素添加一个`.clearfix::after`伪元素，这是推荐的方式，在元素末尾添加一个看不见的块元素来清理浮动，具体规则见用例代码
    * 为容器创建BFC，利用BFC内浮动元素参与高度计算的特性，注意使用`overflow: !vivible`创建BFC，如果内容发生溢出，将会被裁切或者出现滚动条；现代的解决方法是使用`display:flow-root`，这是一种创建BFC没有不良后果的方式


```css
/* 清除浮动 */
/* === .clearfix::after */
.clearfix::after{
  content: "";
  clear: both;
  display: block;
}


/* float首字下沉 */
/* 设置浮动，外边距，颜色，大小，粗细，行高等 */
p:first-child::first-letter {
  float: left;
  margin: 0 8px 0 4px;
  color: #5f79ff;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
}
```
[回到顶部](#css_docs)



### position相关属性
position相关属性：
1. position相关属性包括：`position | left right top bottom | z-index`
2. `position`：设置元素的位置，使得元素脱离文档流
3. `position`属性可能的值
    * `static`：元素的默认值，遵从normal flow
    每一个元素的默认position属性，元素，所以`left right top bottom | z-index`不会对该元素起作用
    * `relative`：类似于static position，元素仍然在normal flow占据位置，但是`left right top bottom | z-index`对该元素起作用，位置相当于文档流的原始位置进行偏移
    * `absoulte`: 元素从normal flow中移除，其他元素会当此元素不存在一样布局，`left right top bottom | z-index`起作用，位置相当于最近的非static定位的祖先元素进行定位，如果都不指定定位，则相对于整个html文档
    * `fixed`：元素从normal flow中移除，位置相对于浏览器视口进行定位（不受滚动的影响）
    * `sticky`：是relative position和fixed position的混合。元素在滚动到指定位置的阈值时候是relative position，跨越特定后为fixed position
4. `position`属性通常用于
    * 设置弹出式box的位置
    * 设置固定于viewport的元素
5. `left right top bottom`：对于定位元素（positioned element）指定具体位置，位置相对于 `left right top bottom`边缘；其中`left | right`影响定位元素的水平位置，`top | bottom`影响定位元素的垂直位置，可能的值
    * `<length>`：对于absolute position元素，相对于包含块（containing block）的`left right top bottom`边缘；对于relative position元素，相当于正常位置（normal position）的`left right top bottom`边缘
    * `<percetage>`：`left | right`相当于包含块（containing block）的宽度的`left | right`边缘；`top | bottom`相当于包含块（containing block）的高度的`top | bottom`边缘
    * `auto`：如`top`设置了该值，元素的位置基于`bottom`，`left | right | bottom`类似
6. `z-index`：设置定位元素（position element）z轴值，即设置元素的层叠上下文，当元素使用了`position | left right top bottom`进行定位，定位元素之间可能会发生层叠，这时具有较高的层叠上下文的元素会覆盖较低层叠上下文的元素，具体层叠次序（stacking order）是
    * `background-color/border`
    * `z-index: <0`
    * `block element < float elelment < inline/inline-block element`：因为block和float是布局使用的，inlin/inline-block最初用于显示文字内容，发生层叠时，优先显示文字内容，保证不被覆盖
    * `z-index: 0`
    * `z-index: >1`
    * 层叠次序相同，在DOM结构中后面出现的元素覆盖前面的元素
7. `z-index`的值
    * `auto`：默认，通常是0
    * `<integer>`
8. 具有层叠上下文的元素
    * 根元素html具有“根层叠上下文”
    * 元素设置为非static值并设置z-index属性为**具体数值**，产生层叠上下文
    * 父元素设置了`display:flex|inline-flex`, 子元素z-index属性值不是auto，子元素生层叠上下文
    * `transform`的值不是none的元素
    * `opacity`的值不是1的元素



[回到顶部](#css_docs)



### over-flow处理溢出
`overflow`:
1. 描述：定义如何处理元素盒子（box）的内容溢出，是`overflow-x`和`overflow-y`的简写属性
2. 可能的属性值：
    * `visible`：默认值，溢出的内容出现在父元素之外。CSS尽可能不会隐藏内容，这样做会导致数据丢失，所以默认是显示溢出
    * `hidden`：溢出隐藏* `hidden`：溢出隐藏
    * `auto`：子元素内容大于父元素时出现滚动条
    * `scroll`：必会出现滚动条
3. 单独的值
    * `overflow-x` 
    * `overflow-y`
4. `overflow`创建BFC（Block Formatting Context）：`overflow`的值不为`visible`，即不是默认值，如`hidden | scroll`，可以创建BFC，获得自包含布局（self-contained layout），容器外部的东西不能进入容器，容器内部的东西也不会突出到容器周围的布局
5. 网页设计中不期望的oveflow：在过去，一些网站使用固定高度的容器（fixed height container）去对齐元素盒子们的底部，在遗留问题（legacy application）的应用中，可能会遇到元素内容覆盖页面的其他内容，理想的方法是，不要依赖固定高度的容器进行布局。开发过程中，牢记溢出问题，测试包含大量内容和少量内容，测试增加文本的字体大小等等，确保CSS能够以健壮的方式应对。现代布局方法可以很好地管理溢出



[回到顶部](#css_docs)


### visibility
`visibility`属性：
1. 描述：用于在不改变文档的布局情况下，显示或隐藏元素；如果需要隐藏元素且在文档布局中移除，使用`display:none`
2. 可能的属性值：
    * `visible`：默认值，显示元素
    * `hidden`：隐藏元素
    * `collapse`：不同元素具有不同效果，对于表格的row & column就像使用`diaplay:none`一样，这种快速移除表格行列的方式不会导致表格宽度和高度的重新计算；对于其他元素，就像`visibility:hidden`一样对待

[回到顶部](#css_docs)


### resize
`resize`属性：
1. 描述：设置元素是否可以调整大小及其调整大小的方向
2. `resize`在下列元素上不生效
    * 行内元素（Inline elements）
    * 块元素(Block elements）设置了`overflow: visible`
3. 可能的值：
    * `none`：元素不能被调整大小
    * `both`：元素可以水平和垂直方向调整大小
    * `horizontal`：元素可以水平方向调整大小
    * `vertical`：元素可以垂直方向调整大小
    * `block`：元素可以块流方向（block direction）调整大小（水平还是垂直取决于`writing-mode | direction`
    * `inline`：元素可以行内方向（inline direction）调整大小（水平还是垂直取决于`writing-mode | direction`

[回到顶部](#css_docs)



### clip
`clip`：
1. 描述：定义元素的可见部分，只能应用于`position: absolute | fixed`元素
2. 可能的属性值：
    * `auto`：默认值，元素不会clip。`rect(auto, auto, auto, auto)`在元素边框边缘内clip，与auto不一样
    * `<shape>`：通过`rect(top, right, bottom, left)`定义的形状，通过指定border内边缘在方向上的偏移量


## 盒子模型属性


[回到顶部](#css_docs)

### css盒子模型和box-sizing
css盒子模型：
1. css盒子模型：定义了内容content，元素内容和边框之间的填充`padding` ，边框`border`，外边距`margin`怎样在页面上一起创建元素盒子（box）。组成元素盒子（box）的部分
    * content box：显示内容（content）的区域，大小尺寸通过`width` & `height`属性定义
    * padding box：元素内容和边框之间的填充，使用`padding`属性定义
    * border box：边框，由`border`属性定义
    * margin box：外边距，由`margin`属性定义
2. 两种css盒子模型属性：
    * 标准(W3C)盒子模型（standard CSS box model）：由内容content，元素内容和边框之间的填充`padding` ，边框`border`，外边距`margin`组成，规定了其中`width`和`height`属性是内容content的宽高度。
    * 低版本IE的盒子模型：由内容content，元素内容和边框之间的填充`padding` ，边框`border`，外边距`margin`组成其中`width`和`height`属性是`content+padding+border`的宽高，相当于设置了`box-sizing: border-box`
3. 通过`box-sizing`设置元素应用哪种类型的盒子模型，会影响元素的width和height如何计算。可能的属性值为：
    * `content-box`：w3c标准，内容（content）宽度作为width
    * `border-box`：IE 标准，width包括content，padding，border
    


```css
/* 在css 标准模型中 */
/* 元素盒子占据的宽度 350 + 25 + 25 + 5 + 5 */
/* 元素盒子占据的高度 150 + 25 + 25 + 5 + 5 */
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

[回到顶部](#css_docs)



### width&height相关属性
width&height相关属性：
1. `width & height`: 在`box-sizing:content-box`的默认情况下，`width & height`属性指定了元素conent的宽度。默认情况下，一个盒子的大小刚好容纳其中的content，如果需要自定义，需要使用`width & height`属性，属性值有
    * `auto`: 根据内容自动调整宽度，高度
    * `px | em | rem | percentage`: 其中em相当于当前盒子的文本大小，percentage相对于父元素容器的宽度
2. 盒子宽度和高度限制的属性：`max-width min-width max-height min-heihgt`，`min-width`和 `max-width`属性会覆盖`width`属性
3. 元素的尺寸（size）：html元素有自然尺寸或固有尺寸（intrinsic size），元素的固有尺寸(原始尺寸)由其所包含的内容决定，如`img`没有自定义尺寸，就会使用固有尺寸；空的div元素，高度为0
4. 可以给元素指定值，这种值称为非固有尺寸（extrinsic size），例如为元素指定`width`
5. 处理固定尺寸，元素可以设置最小和最大尺寸
    * `min-height`：元素有可变的内容，可以通过这个属性指定最小确定高度，元素保持最小高度，但会自动变高使得有空间容纳元素内容，这是避免溢出的非常有用的犯法
    * `max-width`：设置一个最大宽度，防止元素超出这个宽度，用于`<image>`可以避免图片缩放使得没有空间展示图片，例如`<image>`设置`width：100％`，如果图像固有宽度小于其容器，图像将被强制拉伸并变大，从而使其看起来像素化，使用`max-width:100%`则避免了空间不足和像素化。这是图像响应式的一种方法，在较小的设备上查看可以适当缩小，但是不应使用此技术加载非常大的图像，下载过大的图片会导致网站变慢


[回到顶部](#css_docs)


### padding
padding属性：
1. 描述：`padding`定义盒子的内边距，是`padding-top padding-right padding-bottom and padding-left`的缩写属性
2. 可以单独设置单边padding的属性：
    * `padding-top`
    * `padding-right`
    * `padding-bottom`
    * `padding-left`

```css
/* === 例子 */
padding: 0; /* Removes all paddings. */
/* 第一个值是上下内边距， 第二个值是左右内边距 */
padding: 30px 60px; 
 /* 第一个值是上内边距，第二个值是左右内边距，第三个值是下内边距 */
padding: 30px 60px 45px;
/* 上右下左内边距一一对应 */
padding: 30px 60px 45px 85px; 
```

[回到顶部](#css_docs)



### border
`border`属性
1. 描述：`border`定义盒子的边框。是`border-width border-style border-color`的缩写属性。
2. 可以设置border缩写属性中的单独属性
    * `border-width`
    * `border-style`
    * `border-color`
3. 单独设置单边border的属性：
    * `border-top`
    * `border-right`
    * `border-bottom`
    * `border-left`
4. 可以单独设置单边border的单独属性，如`border-top-width | border-top-style border-top-color...`
5. 常用的`border-style`属性值有：
    * `none`：没有样式
    * `hidden`：隐藏
    * `solid`：实线框
    * `dotted`：点框
    * `dashed`：破折号框
    * `double`：双线框
    * `groove`：槽，显示镂刻的边框
    * `ridge`：岭，显示具有突出外观的边框
    * `inset`：嵌入的边框
    * `outset`：显示使元素看起来浮雕的边框



[回到顶部](#css_docs)

### border-radius
`border-radius`:
1. 描述：设置边框圆角，其中：
    * radius应用于整个background，即使元素没有border，剪辑的位置由`background-clip`决定
    * 设置一个radius，就是设置圆角（circular corners）；设置两个radius，就是设置椭圆角（elliptical corners），对于椭圆来说，长轴和短轴不等，所以`border-radius`还有种写法是用`/`来分开表示水平方向和垂直方向的半径
2. 可能的值`<length> |<percetage>`，使用百分比作为单位时，水平半径设置相对于盒子模型宽度，垂直半径相当于盒子模型高度
3. 各自语法形式
    * 一个值：表示四个圆角都是指定值
    * 两个值：第一个值表示`border-top-left-radius`及其对角`border-bottom-right-radius`；第二个值表示`border-top-right-radius`及其对角`border-bottom-left-radius`
    * 三个值：第一个值表示`border-top-left-radius`，第二个值表示`border-top-right-radius`及其对角`border-bottom-left-radius`，第三个值表示`border-bottom-right-radius`
    * 四个值：依次表示四个圆角
    * `水平半径/垂直半径`
4. 单独的border-radius属性：
    * `border-top-left-radius`
    * `border-top-right-radius`
    * `border-bottom-right-radius`
    * `border-bottom-left-radius`

```css
/* Global values */
border-radius: inherit;
border-radius: initial;
border-radius: revert;
border-radius: unset;


/* 设置四个圆角为10px */
border-radius: 10px;
/* 移除所有的 border radius */
border-radius: 0; 

/*四值*/
/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* 三值 */
/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;


/*  */
/* 代表的的是四个角的水平半径均为 10px，垂直半径均为20px */
border-radius: 10px / 20px; 


/* 
表示的是左上、右下角的水平半径是10px，垂直半径是 30px；
右上、左下角的水平半径是20px，垂直半径是 40px。
 */
border-radius: 10px 20px / 30px 40px;


border-radius: 4px 3px 6px / 2px 4px;
/* ... is equivalent to: */
border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius:  3px 4px;
```

[回到顶部](#css_docs)




### margin
margin属性：
1. 描述：`margin`定义盒子的外边距，是`margin-top margin-right margin-bottom and margin-left`的缩写属性
2. 语法形式：
    * 一个值：四个外边距都是这个值
    * 两个值：第一个值表示`margin-top`及其对边`margin-bottom`，第二个值表示`margin-right`及其对边`margin-left`
    * 三个值：第一个值是`margin-top`，第二个值表示`margin-right`及其对边`margin-left`，第三个值表示`margin-bottom`
    * 四个值：依次对应四个外边距
3. 可以单独设置单边margin的属性： 
    * `margin-top`
    * `margin-right`
    * `margin-bottom`
    * `margin-left`
4. margin传递给父元素：嵌套盒子中，如果对父元素的首个子元素设置了`margin-top`属性，`margin-top`应用在父元素上，而不是首个元素上。解决办法：
    * 父元素创建BFC
    * 父元素添加边框
    * 父元素设置padding-top,父元素在标准模型下高度尺寸会增加（可以减少相应height尺寸或者使用box-sizing:border-box)
5. margin折叠：多个相邻普通流的块级元素在垂直方向上margin会重叠，折叠的值计算：
    * 两个相邻外边距为正数时，折叠结果是两者中的最大值
    * 两个相邻的外边距为负数时，折叠结果是两者绝对值中的较大值
    * 两个外边距一正一负时，折叠结果是两者的相加的和
6. margin折叠解决：
    * 为其中一个元素创建BFC
    * 只给一个元素添加margin
    
```css
/* === 例子 */
margin: 0; /* Removes all margins. */
/* 第一个值是上下外边距， 第二个值是左右外边距 */
margin: 30px 60px; 
 /* 第一个值是上外边距，第二个值是左右外边距，第三个值是下外边距 */
margin: 30px 60px 45px;
/* 上右下左外边距一一对应 */
margin: 30px 60px 45px 85px; 
```

[回到顶部](#css_docs)




## 外观属性
外观（appearance）属性

[回到顶部](#css_docs)

### 背景属性

[回到顶部](#css_docs)

#### background
background属性：
1. 描述：`background`用于定义背景属性, 是一系列背景属性`background-image| background-position / background-size | background-repeat| background-attachment | background-origin | background-clip | background-color`的缩写，可以指定多个背景层，使用逗号分隔每个背景层，`background-*`等属性都可以通过逗号设置多个图像的属性值
2. 在每一个背景层中：
    * `background-image| background-position / background-size | background-repeat| background-attachment`出现0次或1次
    * `<background-size>` 只能紧接着`background-position` 出现，以`/`分割，如`center/80%`
    * `<box>` 可能出现0次、1次或2次。如果出现1次，它同时设定 `background-origin` 和 `background-clip`。如果出现2次，第一次的出现设置 `background-origin`，第二次的出现设置 `background-clip`
    *  `<background-color>` 只能被包含在最后一层，只能在background的最后一个属性上定义，因为整个元素只有一种背景颜色
3. `background-image`，`background-color`与`border`之间的关系：
    * `background-image`将会覆盖`background-color`
    * 定义多个背景图片，按照背景图片定义的顺序，先出现的背景图片将会置于背景层的最顶层，指定的第一个图像“最接近用户”
    * 元素的`border`会在背景图像之上被绘制，背景图像的绘制与元素盒子，元素border盒子之间的关系，通过`background-clip & background-origin`定义
4. 背景的可访问性：
    * 背景上放置文字时，需要保证足够的对比度，使得文字能够清晰显示
    * 如果使用背景图像，需要指定一个background-color以便背景图像不能加载时作为回退


```css
/* Using a <background-color> */
background: green;

/* Using a <bg-image> and <repeat-style> */
background: url("test.jpg") repeat-y;

/* Using a <box> and <background-color> */
background: border-box red;

background-image: url(image1.png), url(image2.png), url(image3.png), url(image1.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position: 10px 20px,  top right;
```

[回到顶部](#css_docs)


#### 背景图像属性
背景图像属性可以通过`background-image| background-position / background-size | background-repeat| background-attachment| background-origin | background-clip`定义，其中：
1. `background-image`：用于为一个元素设置一个或者多个背景图像，背景图像太大，不会自动进行缩小，背景图像太小，默认会进行repeat；设置了`backgournd-image`会覆盖`background-color`，一般要设置`background-color`，用于为图像无法被加载（例如，在网络连接断开的情况下），绘制背景色作为回退。可能的值：
    * `none` 移除元素的背景图片
    * `<url>` 使用使用相对路径，或者绝对路径的图片作为背景图片指定的图像无法被绘制 (比如，被指定的URL表示的文件无法被加载)，浏览器会将此情况等同于其值被设为`none`
    * `<gradient>` 使用渐变作为背景图片
2. `background-position`:为每一个背景图片在元素盒子上初始位置，第一个值是水平方向位置，第二个值指示纵方向位置，元素左上角的坐标是`(0, 0)`，可能的值是`<length> | <percentage> | left | center | right | top | bottom`，几种表示形式例子：
    * `top center`
    * `20px 10%`
    * `20px top`
    * `top 20px right 10px`
3. `background-size`设置背景图片大小，第一个值是图像的宽度，第二个值是图像的高度。属性值可以是：
    * `<length>`：指定背景图片大小，不能为负值。
    * `<percentage>`：背景图片相对背景区的百分比
    * `auto`：以背景图片的比例缩放背景图片
    * `cover`：缩放背景图片以完全覆盖背景区，同时保持图像的宽高比例（图像不会被压扁），这种情可能使得背景图片部分超出元素盒子，从而看不见这部分
    * `contain`：缩放背景图片以完全装入背景区，如果图像长宽比与元素盒子的长宽比不一致，图片的边缘可能出现空隙
4. `background-repeat`属性定义背景图像的重复方式.它的值可能是：
    * `repeat`：背景图像按需要重复来覆盖整个背景区域. 如果大小不合适，最后一个图像会被裁剪
    * `repect-x`: 背景图像水平方向上重复
    * `repect-y`: 背景图像垂直方向上重复
    * `no-repeat`: 背景图像不重复
    * `space`: 图像会尽可能重复, 但是不会裁剪，第一个和最后一个图像会被固定在元素(element)的相应的边上, 同时空白会均匀地分布在图像之间
    * `round`: 缩放。随着允许的空间在尺寸上的增长,重复的图像将会伸展,直到有足够的空间来添加一个图像。当下一个图像被添加后, 所有的当前的图像会被压缩来腾出空间
5. `background-attachment` 定义背景图像的滚动方式。属性值可能是：
    * `scroll`：默认值，页面滚动时元素背景图像滚动，背景图像相对于元素本身固定，元素内容（element content）滚动，背景不会滚动
    * `fixed`：背景图像相对于视口固定，页面滚动和元素内容滚动时，背景图像都不会滚动
    * `local`：背景图像相对于元素的内容固定，元素内容滚动，背景图像随着元素内容滚动
6. `background-image`用逗号分隔可以指定多个属性值，创建多个背景图像互相重叠。对于`backgruond-positon/backgorund-size,backgorund-repeat,background-attackment`也可以设置逗号分隔的多个值指定该层次的背景图像的相应属性，其中不同属性的每个值将与其他属性中相同位置的值匹配，当不同的属性具有不同数量的值时, 值会被循环利用
7. `background-origin`：用于定义背景图像原点（origin）位置，可能的值是
    * `padding-box`：默认值，背景图像位置相对于padding box
    * `border-box`：背景图像位置相对于border box
    * `content-box`：背景图像位置相对于content box
8. `background-clip`：设置元素的背景扩展的显示范围，如果元素没有设置`bakcground-image & background-color`，border区域只有在透明区域才有视觉效果，通常是
    * `border-box`：默认值，背景扩展到border的外边缘，但是z轴上在border下
    * `padding-box`：背景扩展到padding外边缘，border下没有背景描绘
    * `content-box`：背景扩展到content内
    * `text`：背景扩展到前景文字内（foreground text），通常是`-webkit-background-clip`才有该属性


```css
/* === backgournd-image */
background-image: none; 
background-image: url(/images/jt.png); 
background-image: url(image1.png), url(image2.png), url(image3.png), url(image4.png);
background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
                  url("../../media/examples/lizard.png");



background-image: url(image1.png), url(image2.png), url(image3.png), url(image1.png);
background-repeat: no-repeat, repeat-x, repeat;
/*
只有两个背景位置值。前两个位置值将应用于前两个图像，
然后它们将再次循环—image3将被赋予第一个位置值，image4将被赋予第二个位置值
 */
background-position: 10px 20px,  top right;
/* === end backgournd-image */


/* === backgruond-position */
/* 第一个值是水平方向位置，第二个值指示纵方向位置 */
background-position:  <length> | <percentage> | left | center | right | top | bottom
/* === 例子 */
backgorund-position: 12px 14px; /* 距离图像左边12px, 距离图像右边14px */
background-position: bottom right;
background-position: top 20px right 10px;
background-position: 20px top;
/* === end backgruond-position */


/* ===  bakcgournd-size*/
/* 第一个值是图像的宽度，第二个值是图像的高度 */
/* 如果只有一个值，那么高度被默认为auto */
bakcgournd-size: <length> {1,2} | <percentage>{1,2} | auto ]{1,2} | cover | contain

/* === 例子 */
background-size: auto auto; /* default, 保持默人长宽比 */
background-size: 120px 80px;
background-size: contain;
```


[回到顶部](#css_docs)

#### backgorund-color背景颜色
`backgorund-color`:
1. 描述：设置元素的背景颜色
2. 属性值：接收一个`<color>`值，值可能是`<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor`，初始值是`transparent`


[回到顶部](#css_docs)



### 前景色color&-webkit-flll-color
前景色:
1. `color`：用于设置元素内容的前景色（ foreground color），通常是文本，也能应用于`text-decoration`指定的上划线，下划线；属性值是`<color>`
2. `-webkit-flll-color`：填充文本颜色，如果没有设置该值，文本颜色是`color`属性值，属性值是`<color>`


[回到顶部](#css_docs)

### outline相关属性
`outline`相关属性：
1. 描述：设置元素的轮廓线（outline），是`outline-width outline-style outline-color`是属性缩写
2. `outline-width`：`length | pencentage`值，设置元素outline的宽度
3. `outline-style`：设置元素outline的样式，与`border-style`样式一致，常用的属性值有：
    * `none`：没有样式
    * `hidden`：隐藏
    * `solid`：实线框
    * `dotted`：点框
    * `dashed`：破折号框
    * `double`：双线框
    * `groove`：槽，显示镂刻的边框
    * `ridge`：岭，显示具有突出外观的边框
    * `inset`：嵌入的边框
    * `outset`：显示使元素看起来浮雕的边框
4. `outline-color`：`<color>`值，设置元素outline的颜色

[回到顶部](#css_docs)

### box-shadow
`box-shadow`属性
1. 描述：设置元素周围的阴影
2. 可能的属性值`[inset] <offset-x> <offset-y> [<blur-radius>] [<spread-radius>] [<color>]`：
    * `[inset]`：可选的keyword，如果不指定，默认是drop shadow，阴影向内容外面，设置该值，阴影向内容里面，该阴影在border内，background上，内容下面
    * `<offset-x> <offset-y>`：`<length>`值指定阴影的偏移距离，`<offset-x>`指示水平偏移，正值表示向右偏移，`<offset-y>`表示垂直偏移，正值表示向下偏移
    * `[<blur-radius>]`：可选的`<length>`值，表示阴影模糊半径，值越大阴影越大越轻，默认值是0，不允许负值
    * `[<spread-radius>]`：可选的`<length>`值，表示阴影扩展半径，正值阴影扩展变大，负值阴影收缩变小，默认值是0
    * `[<color>]`：可选的`<color>`值，指定阴影颜色
    * 通过`,`分隔，设置多重阴影效果

```css
box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
```

[回到顶部](#css_docs)


### content
`content`属性
1. 描述：用产生的值代替元素，用`content`属性被插入的对象称为匿名替代元素（anonymous replaced elements；`content`属性除了代替元素，还可以配合元素的`::before | ::after`选择器，用来在元素前或后插入文本，图像，计数等内容，也可以用于清除浮动
2. 可能的属性值：
    * `none`：在伪元素上使用，不会产生伪元素；在元素上使用，不会产生元素
    * `normal`：`::before | ::after`伪元素在伪元素上使用相当于`none`
    * `<string>`：指定元素的文本内容，对于非拉丁字符需要使用`\`转义序列（escape sequences），如`\000A9`是版权符号
    * `<image>`：用`<url> | <gradient>`创建图片
    * `<counter>`：值是css counter的值，见css counter相关内容
    * `attr(x)`：返回元素的x属性的值作为string
    * `open-quote | close-quote`：值由`quotes`属性定义的字符串代替

```css
/* Keywords that cannot be combined with other values */
content: normal;
content: none;

/* <image> values */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);
content: image-set("image1x.png" 1x, "image2x.png" 2x);

/* alt text for generated content, added in the Level 3 specification */
content: url("http://www.example.com/test.png") / "This is the alt text";

/* <string> value */
content: "prefix";

/* <counter> values, optionally with <list-style-type> */
content: counter(chapter_counter);
content: counter(chapter_counter, upper-roman);
content: counters(section_counter, ".");
content: counters(section_counter, ".", decimal-leading-zero);

/* attr() value linked to the HTML attribute value */
content: attr(value string);
```

[回到顶部](#css_docs)


### cursor
`cursor`属性：
1. 描述：设置鼠标指针类型，用于通知用户当前位置要进行的操作，比如选择文字，激活帮助，激活菜单，复制内容等等
2. 可能的属性值
    * `url()`：指向图像文件（扩展名通常是`.cur | .ico`，后面可选的可以通过空格分隔，指定图像相对于左上角作为原点的x轴，y轴位置；后续可以通过分隔，指定多个`<url> | <cursor-keyword>`作为回退值
    * `<cursor-keyword>`：
3. 常用`<cursor-keyword>`值：
    * `auto`：浏览器根据当前内容决定cursor样式，如在文本上hover时候为`text`
    * `default`：默认值，通常是箭头arrow样式
    * `none`：没有鼠标指针
    * `help`：可获取帮助信息，箭头鼠标样式旁边有问号
    * `pointer`：指示是超链接，通常是手指向的样式
    * `progress`：系统繁忙，用户仍然可以交互，通常是箭头样式旁边有沙漏等待（或转动等待）样式
    * `wait`：系统繁忙，用户不可以交互，需要等待，通常是沙漏（或转动等待）样式
    * `copy`：有些内容已经被复制，通常是箭头样式旁边有加号
    * `not-allowed`：指示操作不被允许，是一个禁止样式
    * `grabbing`：内容可以被抓取移动，通常是一个手掌样式
    * `ns-resize`：指示可以从上下方向改变元素大小，样式是上下方向的双箭头样式
    * `ew-resize`：指示可以从左右方向改变元素大小，样式是左右方向的箭头样式
    * `nesw-resize`：指示从右上左下的方向改变元素大小，样式是右上左下方向的箭头样式
    * `nwse-resize`：指示从左上右下的方向改变元素大小，样式是左上右下方向的箭头样式
    * `move`：指示内容可以被移动，通常是上下左右方向箭头的交会组成的样式
    * `zoom-in`：指示可以被放大，通常是放大镜和加号的组合样式
    * `zoom-out`：指示可以被放大，通常是放大镜和减号的组合样式

```css
/* Keyword value */
cursor: auto;
cursor: pointer;
...
cursor: zoom-out;

/* URL with mandatory keyword fallback */
cursor: url(hand.cur), pointer;

/* URL and coordinates, with mandatory keyword fallback */
cursor: url(cursor_1.png) 4 12, auto;
cursor: url(cursor_2.png) 2 2, pointer;
```

[回到顶部](#css_docs)














## 文本属性
元素中的文本（text）是在元素的内容盒子（content box）排列（lay out），默认情况下从内容区域（content area）的左上开始排列到行尾（the end of the line），到达行尾排列到下一行（或者通过`<br>`文本换行）。文本属性，可以分为两类：
* 字体样式（font style）
* 文本布局样式（text layout style）


[回到顶部](#css_docs)

### 字体样式font以及@font-face
字体样式：
1. `font`属性，设置元素的字体样式，` font-style font-variant font-weight font-stretch font-size /line-height font-family`属性的缩写属性。也可以通过关键字指定系统字体作为属性值，可能有
    * `status-bar`
    * `menu`
    * 其他略
2. `font`属性约束：
    * 没有指定的属性值，会被设为各自属性的初始值
    * 必须指定`font-size & font-family`的属性值，否则属性值是无效的；可选的包含`font-style | font-variant |  font-weight | font-stretch | line-height`
    * `font-style | font-variant | font-weight`必须在`font-size` 之前
    * `line-height`必须跟在`font-size`后面以`/`分隔，例如`16px/3`
    * `font-family`必须最后指定
3. `font-style`：设置字体斜体样式，可能的值
    * `normal`：默认值
    * `italic`：斜体
    * `oblique`：模拟的斜体版本
4. `font-variant`
5. `font-weight`：设置字体的加粗程度
    * `normal`
    * `bold`
    * `lighter`
    * `bolder`
    * `100-900`
6. `font-stretch`
7. `font-size`：设置字体大小，可能的值是`<length-percetage>`
8. `line-height`：设置line box的高度，通常用于设置文本行之间的距离（行高可以理解为上下间距加上文本高度，或者文本基线之间的距离，其中上下间距相等）。在块元素上使用，指定元素内的line box的最小高度；对于行内元素且是非替代元素，指定line box的高度。CSS中起高度作用的是`height`和`line-height`，没有定义`height`属性，最终其表现作用一定是`line-height`。一般将文本行高设置为字体高度的1.5倍，可用的属性值
    * `normal`：默认值
    * `<number>`：元素`font-size`的倍数
    * `<length>`：设置line box的高度
    * `<percentage>`：相当于元素`font-size`
9. `line-height`也常用于单行文本垂直居中，把`line-height`值设置为`height`一样的值可以实现单行文字的垂直居中，也可以把`height`删除；对于多行文本垂直居中：需要设置`display: table-cell & vertical-align: middle`
10. `font-family`：指定一个或多个字体值，多个值使用`,`分隔，优先级从高到低按顺序应用，所以一般在字体列表的最后提供一个通用字体，字体值都不可用则使用浏览器默认的字体代替。非法的字体命名需要使用`""`包围；可能的属性值
    * `<family-name>`
    * `<generic-name>`：通用字体名称，一般用作回退，当使用这些通用名称时，使用通用字体，取决于浏览器和运行的操作系统，可能的值
        * `-apple-system`：ios
        * `BlinkMacSystemFont`：macOS Chrome
        * `'Segoe UI'`：Windows 10
        * `Roboto`：Android
        * `Oxygen-Sans`：Linux with KDE
        * `Ubuntu`：Ubuntu (all variants)
        * `'Helvetica Neue' | Helvetica`： macOS 10.10或以下
        * `Arial`：所有操作系统都支持
        * `sans-serif`：无衬线字体，如 Arial, Verdana, Helvetica
        * `serif`：衬线字体，通常用于长篇文本，如Times, Times New Roman
        * `monospace`：等宽字体，通常用于代码，如Courier, Courier New
        * `cursive`
        * `fantasy`
11. 把能应用到所有系统的字体，称为网页安全字体，它们包括：
    * Arial（属于sans-serif）
    * Verdana（属于sans-serif）
    * Courier New（属于monospace）
    * Georigia（属于serif）
    * Times New Roman（属于erif）
12. `@font-face`可以指定路径引入自定义字体，然后可以被`font-family`使用，属于CSS at-rule，规则体内常用的描述符有：
    * `font-family`：定义能被后续引用的字体名称
    * `src`：设置字体的路径，可以通过`format()`为浏览器提供一个字体格式提示，字体格式类型可能有
        * `woff`：Web Open Font Format，MIME类型是`font/woff`
        * `woff2`：Web Open Font Format 2，MIME类型是`font/woff2`
        * `truetype`：MIME类型是`font/ttf`
        * `opentype`：MIME类型是`font/otf`
    * `font-weight`
    * `fong-style`


```css
/* === font */
/* Set the font size to 12px and the line height to 14px.
   Set the font family to sans-serif */
p { font: 12px/14px sans-serif }
/* Set the font weight to bold,
   the font-style to italic,
   the font size to large,
   and the font family to serif. */
p { font: bold italic large serif }
/* Use the same font as the status bar of the window */
p { font: status-bar }

/* === 字体粗细 */
/* 
100 Thin
200 Extra Light
300 Light
400 Normal
500 Medium
600 Semi Bold
700 Bold
 */
font-weight: normal; 
font-weight: bold;
font-weight: 600;

/* === font-size */
/* px作为单位 */
font-size: 16px; /* 浏览器默认字体大小 */
/* 百分比作为单位，相对于父级元素字体大小 */
/* em作为单位，相对于父级元素字体大小 */
font-size: 1.2em;
/* rem作为单位，相对于根元素（html）大小 */
font-size: 1.2rem;


/* === line-height */
line-height: normal; /* default */
/* 百分比相对大小 */
line-height: 1.5; /* 相对于元素字体大小 */
/* px单位 */
line-height: 30px;
/* em单位，也是相对于元素字体大小 */
line-height: 0.8em;

/* === font-family */
font-family: Helvetica, Arial, sans-serif;
font-family: "Source Sans Pro", "Arial", sans-serif;

/* 引入外部字体 */@font-face {
font-family: "Open Sans";
src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}


/* 网络安全字体 */
.system-font-stack {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
}
```

[回到顶部](#css_docs)



### 其他字体样式
其他字体样式：
1. `text-transform`：用于转换文本大小写，可能的值
    * `none`：阻止大小写转换
    * `uppercase`：大小
    * `lowercase`：小写
    * `capitalize`：首字母大写
    * `full-width`：象形文字（glyphs）在固定宽度的矩形书写，就像`monospace`字体一样，允许拉丁字幕和亚洲语言象形文对齐
2. `text-decoration`设置文本的装饰线，是`text-decoration-line text-decoration-thickness text-decoration-color text-decoration-style`的缩写
    * `text-decoration-line`：值是 `none | underline | line-through | overline`，其中`none`是默认值，`underline`是下划线，`line-through`是删除线，`overline`是上划线
    * `text-decoration-thickness`：设置文本装饰线的厚度，值是`<length>`
    * `text-decoration-color`：设置文本装饰线的厚度的颜色，值是`<color>`
    * `text-decoration-style`：设置文本装饰线的样式，例如`solid | dash | wavy`
3. `text-shadow`：设置文字阴影，有四个值，可以用`,`分隔多重阴影，阴影从前到后：
    * 第一个值`<offset-x>`：值是`<length>`，设置水平阴影，正值阴影向右，负值向左
    * 第二个值`<offset-y>`：值是`<length>`，设置垂直阴影，正值向下，负值向上
    * 第三个值`<blur-radius>`：值是`<length>`，设置模糊半径：值越大，阴影分散的更宽，默认为0，意味着没有模糊
    * 第四个值：值是`<color>`，设置阴影颜色


```css
/* text-decoration */
text-decoration: none;
text-decoration: underline red;
text-decoration: solid underline purple 4px;

/* text-shadow */
text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
```

[回到顶部](#css_docs)


### 文本布局属性
文本布局（Text layout）属性：
1. `text-align`：设置内容盒子（content box）内的文本的水平对齐，可能的值
    * `left`：文本左对齐
    * `right`：文本右对齐
    * `center`：文本居中
    * `justify`：文本扩散（spread out），更改文字之间的宽度，使得隔行文本宽度一致，需要警惕使用，尤其是行内有长文字的时候
2. `vertical-align`：设置`inline，inline-block， table-cell`元素盒子的垂直对齐方式，块元素（block level element）该属性不产生效果；常用的用途是行内元素内的line box设置垂直对齐，如在一行文字内设置图像的垂直对齐，还有一个用途是设置表格单元格的垂直对齐，可能的值：
    * `super`：元素的基线（baseline）与父元素的上标基线对齐
    * `baseline`：元素的基线与父元素基线对齐
    * `sub`：元素的基线与父元素的下标基线对齐
    * `text-top`：元素的顶部（top）与父元素字体的顶部对齐
    * `text-bottom`：元素的底部（bottom）与父元素字体的底部对齐
    * `middle`：元素的中间（middle）与父元素基线（baseline）加上高度的一般对齐，居中
    * `top`：元素顶部（top）与线顶部对齐
    * `bottom`：元素的底部（bottom）与线顶部对齐
    * `<length-percetage>`：元素的基父元素基线上方对齐，百分比相对于`line-height`
3. `letter-spacing`：设置字符之间的间距，值是`normal | <length>`
4. `word-spacing`：设置单词之间的间距，值是`normal | <length>`
5. `text-indent`: 设置文本第一行的缩进，值是`<length> | <percetage>`
6. `text-overflow`：设置文本内容在溢出时如何处理，值肯是：
    * `clip`：默认值，溢出文本内容被剪裁
    * `ellipsis`：溢出文本内容使用`…`代替
7. `white-space`：控制元素如何处理空格，如何对待换行，如何对待折叠，可能的值是
    * `normal`：默认值，一系列的空格被当作一个，忽略换行，文字内容可以被折叠
    * `nowrap`：一序列的空格被当作一个，忽略换行，文字内容不会被折叠，而是保持在一行
    * `pre`：一序列的空格都被被保留，只有在新的一行或者遇到`<br>`元素才会发生换行
    * `pre-wrap`：一序列的空格都被保留，换行发生在新的一行，或者遇到`<br>`元素，或者到达一行的末端
    * `pre-line`：一序列的空格都会当作一个，一序列的空格都会当作一个，换行发生在新的一行，或者遇到<br>元素，或者到达一行的末端
8. `word-break`：控制单词在一行结尾，可能的值
    * `normal`：默认值，没有空格，不间断的一个单词在一行末尾不会被分隔
    * `break-all`：没有空格，不间断的一个单词在一行末尾会被分隔

[回到顶部](#css_docs)




### writing-mode
`writing-mode`属性：
1. 描述：改变文字的writing mode，改变元素块流方向（block flow direction），然后指示在句子中的文字的方向
2. 可能的值：
    * `horizontal-tb`：块流方向（block flow direction）从上到下，句子（sentences）水平排列
    * `vertical-rl`：块流方向（block flow direction）从左到右，句子（sentences）垂直排列
    * `vertical-lr`：块流方向（block flow direction）从右到左，句子（sentences）垂直排列
3. `writing-mode`的逻辑属性
    * 元素盒子大小属性：`block-size | inline-size | max-block-size| max-inline-size | min-block-size | min-inline-size`
    * 对于padding，border，margin等，假如`writing-mode`是`horizontal-tb`，根据`block | inline`方向进行划分，`margin-top`为`margin-block-start`，`padding-left`为`padding-inline-start`，`border-bottom`为`border-block-end`，以此类推
4. 如果不是使用多个`writing-mode`，使用逻辑属性没有必要

[回到顶部](#css_docs)






## 过渡属性
过渡属性：
1. 描述：css过渡属性用于创建指定属性的值之间的过渡，CSS transitions可以决定哪些属性发生动画效果 (明确地列出这些属性)，通常是鼠标单击或者聚焦元素发生等状态发送改变时，改变元素的属性值，从而自动触发过渡；过渡可以设置何时开始 (设置 delay），持续多久 (设置 duration) 以及如何动画 (定义timing function，比如匀速地或先快后慢)
2. javascript过渡和css过渡比较：CSS3之前使用JavaScript实现过渡效果，CSS3之后添加了transition的属性，使得过渡的实现更加容易，而且可以应用浏览器加速效果，性能更好
3. 可以应用过渡的属性：并不是所有的属性都可以应用过渡，可以过渡的属性参考[CSS animated properties](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animated_properties)
4. `transition`：是`transition-property transition-timing-function transition-duration  transition-delay`的缩写属性，使用逗号分隔可以指定一个或多个属性的过渡，可能的值
    * `none | all | <custom-ident>`：0个或1个值，用于指定过渡的属性
    * `<easing-function>`：0个或1个ease function
    * `<time>`：0个，1个或2个值，第一个值是`transition-duration`，第二个值是`transition-delay`
5. `transition-property`：用于指定应用的过渡属性，使用逗号分隔可以指定一个或多个过渡属性，可能的值是：
    * `none`：默认值，没有属性应用过渡
    * `all`：所有属性引用过渡
    * `<custom-ident>`：指定的属性应用过渡
6. `transition-timing-function`：设置属性过渡如何被中间值（intermediate values）的计算影响，可以使用逗号分隔可以指定一个或多个过渡的中间值，一一对应`transition-property`的分隔属性，如果属性值列表长度短于`transition-property`，则重复其值以长度一致；可能的值：
    * `<easing-function>`
    * `step-start`：相当于steps(1, jump-start)，立即跳至结束状态并停留在该位置，直到结束
    * `step-end`：相当于steps(1, jump-end)，保持其初始状态直至结束，然后直接跳至最终位置
7. 常用的`<easing-function>`值有：
    * `ease`：默认值，相当于`cubic-bezier(0.25, 0.1, 0.25, 1.0)`，向过渡中间时增加速率，在向过渡最后时减小速率
    * `ease-in`：相当于`cubic-bezier(0.42, 0, 1.0, 1.0)`，开始很慢，完成时速率增加
    * `ease-out`：相当于`cubic-bezier(0, 0, 0.58, 1.0)`，开始很快，完成时速率减小
    * `ease-in-out`：相当于`cubic-bezier(0.42, 0, 0.58, 1.0)`，开始和结束都很慢，中间阶段加速
    * `linear`：相当于`cubic-bezier(0.0, 0.0, 1.0, 1.0)`，过渡平均速率
    * `cubic-bezier(p1, p2, p3, p4)`：自定义的cubic-Bezier curve，p1到p3的范围都是0到1
    * `steps( n, <jumpterm>)`：设置过渡的步骤，如设置n为5，则过渡在0%，20%，40%，60%，80%有暂停，` <jumpterm>`值有`jump-start jump-end jump-none jump-both`，其中`jump-start`表示定义一个左持续函数，第一个jump发生在过渡开始；`jump-end`定义一个右持续函数，最后一个jump发生在过渡结束；`jump-none`表示过渡两端no jump；`jump-both`定义两端都有jump
    * [在线cubic-bezier 曲线](https://cubic-bezier.com/#.17,.67,.83,.67)
8. `transition-duration`：值是`<time>`类型，设置过渡完成的时间，可以使用逗号分隔可以指定一个或多个过渡的完成时间，一一对应`transition-property`的分隔属性，如果属性值列表长度短于`transition-property`，则重复其值以长度一致
9. `transition-delay`：值是`<time>`类型，设置属性值发生改变之后属性过渡效果开始的等待时间，可以使用逗号分隔可以指定一个或多个过渡的等待时间，一一对应`transition-property`的分隔属性，如果属性值列表长度短于`transition-property`，则重复其值以长度一致；注意，`transition-delay`的值可以是负数，表示过渡会立刻开始，负的延迟会提前duration的相应进程，如`transition-duration: 3;transition-delay: -2`，过渡在第3s开始执行



```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;
/* property name | duration | delay */
transition: margin-right 4s 1s;
/* property name | duration | easing function */
transition: margin-right 4s ease-in-out;
/* property name | duration | easing function | delay */
transition: margin-right 4s ease-in-out 1s;
/* Apply to 2 properties */
transition: margin-right 4s, color 1s;
/* Apply to all changed properties */
transition: all 0.5s ease-out;


transition-property: opacity, left, top, height;
transition-duration: 3s, 5s;
/* 相当于 */
transition-property: opacity, left, top, height;
transition-duration: 3s, 5s, 3s, 5s;
```



[回到顶部](#css_docs)



## 动画属性
动画属性：
1. 描述：设置css属性值的动画序列，可以为一个CSS样式配置过渡到另一个添加动画，css动画包括两个部分：
    * 定义动画序列：使用`@keyframes`定义动画序列，指示动画样式的开始结束状态，包括中间路径（intermediate waypoints）
    * 使用动画序列，创建动画：使用`animation`及其子属性
2. CSS动画和javascript动画区别：    
    * JavaScript动画较复杂，Css animation非常容易创建简单动画
    * Css animation让浏览器控制动画序列，允许浏览器优化性能和效果，如降低位于隐藏选项卡中的动画更新频率，甚至在低性能的系统上，使用JavaScript实现的动画通常表现不佳（除非经过很好的设计）
3. `@keyframes`：建立两个或两个以上关键帧来定义动画序列，可能的值
    * `<percentage>`：关键帧使用percentage来指定动画发生的时间点。0%表示动画的第一时刻，100%表示动画的最终时刻。因为这两个时间点十分重要，所以还有特殊的别名：from和to
    * `from`：画的第一时刻
    * `to`：动画的最终时刻
    * 属性在某些关键帧中可以缺省；重复的关键帧，会组合它们；关键帧中的规则使用`!imporant`，该规则会被忽略
4. `animation`：创建一个或多个动画，多个动画使用`,`分隔，是`animation-name animation-timing-function animation-duration  animation-delay  animation-iteration-count animation-direction animation-fill-mode animation-play-state`的缩写属性，可能的值
    * `animation-name`：可选值
    * `animation-timing-function`出现0次或1次
    * `<time>`值出现0，1，2次，第一个`<time>`值是`animation-duration`，第二个`<time>`值是`animation-delay`
    * `animation-iteration-count animation-direction animation-fill-mode animation-play-state`这些属性只能出现0次或1次
5. `animation-name`：为元素创建一个或多个`@keyframes`定义的动画名称，可能的值是“
    * `none`：设置没有keyframe，用于解除动画（deactivate deactivate）
    * `<custom-ident>`：指定动画名称；命名规则是`a-z | 0-9 | -`，第一个非`-`字符必须是字母，两个`-`开头被禁止
    * 使用其他缩写属性的关键字作为值，该不被`animation-name`接受
6. `animation-timing-function`：设置动画在每个周期（cycle）内持续时间的进程（progress），值可能是：
    * `<easing-function>`
    * `step-start`：相当于steps(1, jump-start)，立即跳至结束状态并停留在该位置，直到结束
    * `step-end`：相当于steps(1, jump-end)，保持其初始状态直至结束，然后直接跳至最终位置
7. 常用的`<easing-function>`值有：
    * `ease`：默认值，相当于`cubic-bezier(0.25, 0.1, 0.25, 1.0)`，向动画中间时增加速率，在向动画最后时减小速率
    * `ease-in`：相当于`cubic-bezier(0.42, 0, 1.0, 1.0)`，开始很慢，完成时速率增加
    * `ease-out`：相当于`cubic-bezier(0, 0, 0.58, 1.0)`，开始很快，完成时速率减小
    * `ease-in-out`：相当于`cubic-bezier(0.42, 0, 0.58, 1.0)`，开始和结束都很慢，中间阶段加速
    * `linear`：相当于`cubic-bezier(0.0, 0.0, 1.0, 1.0)`，动画平均速率
    * `cubic-bezier(p1, p2, p3, p4)`：自定义的cubic-Bezier curve，p1到p3的范围都是0到1
    * `steps( n, <jumpterm>)`：设置动画的步骤，如设置n为5，则动画在0%，20%，40%，60%，80%有暂停，` <jumpterm>`值有`jump-start jump-end jump-none jump-both`，其中`jump-start`表示定义一个左持续函数，第一个jump发生在动画开始；`jump-end`定义一个右持续函数，最后一个jump发生在动画结束；`jump-none`表示动画两端no jump；`jump-both`定义两端都有jump
    * [在线cubic-bezier 曲线](https://cubic-bezier.com/#.17,.67,.83,.67)
8. `animation-duration`：设置动画每一个周期完成的时间，`<time>`值，可以使用逗号分隔可以指定一个或多个过渡的中间值，一一对应`animation-name`的分隔属性，如果属性值列表长度短于`animation-name`，则重复其值以长度一致
9. `animation-delay`：值是`<time>`类型，设置执行动画开始前的等待时间，可以使用逗号分隔可以指定一个或多个动画的等待时间，一一对应`animation-name`的分隔属性，如果属性值列表长度短于`animation-name`，则重复其值以长度一致；注意，`animation-delay`的值可以是负数，表示动画会立刻开始，负的延迟会提前duration的相应进程，如`animation-delay-duration: 3;animation-delay-delay: -2`，动画在第3s开始执行
10. `animation-iteration-count`：设置动画序列播放次数，可以使用逗号分隔可以指定一个或多个动画的播放次数，一一对应`animation-name`的分隔属性，如果属性值列表长度短于`animation-name`，则重复其值以长度一致；值可能是：
    * `infinite`：动画一直循环
    * `<number>`：默认是1，0.5会播放动画的一半，负值不是有效值
11. `animation-direction`：设置动画的播放方向；可以使用逗号分隔可以指定一个或多个动画的播放次数，一一对应`animation-name`的分隔属性，如果属性值列表长度短于`animation-name`，则重复其值以长度一致；值可能是：
    * `normal`：默认值，每一个周期都是向前播放动画，这意味着重复播放动画过程中，动画结束后从开始状态开始
    * `reverse`：每一个周期动画向后（backward）播放，意味着每一次动画周期，开始状态和结束状态都会重新设置，timing function也是被reverse，如`ease-in`变为`ease-out`
    * `alternate`：每一个周期之后逆转（reverse）方向，第一个周期向前方向播放动画，第二周期从后播放.
    * `alternate-reverse`：每一个周期之后逆转（reverse）方向，第一个周期向后方向播放动画
12. `animation-fill-mode`：设置动画执行前后，如何应用样式；可以使用逗号分隔可以指定一个或多个动画的应用样式的模式，一一对应`animation-name`的分隔属性，如果属性值列表长度短于`animation-name`，则重复其值以长度一致；可能的值：
    * `none`：默认值，动画未执行时，动画将不会将任何样式应用于目标，元素应用原来的样式; 运动结束后，回到起始位置，延迟情况下，样式延迟之后执行
    * `forwards`：动火结束后，停留在终点，样式保留在动画结束时候的状态
    * `backwards`：样式保留在第一帧中的状态
    * `both`：遵顼forwards和backwards规则，在两个方向上应用
13. `animation-play-state`：设置动画运行和暂停状态，可能的值：
    * `running`：默认值，动画运行状态
    * `paused`：动画暂停状态

```css
/* === 例子 */
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  animation-name: rotate;
  animation-duration: 0.7s;
}
/* === end例子 */


/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes name | duration | easing-function | delay */
animation: slidein 3s linear 1s;

/* @keyframes name | duration */
animation: slidein 3s;
```

[回到顶部](#css_docs)



## 变形属性
css变形（transform）：
1. 描述：定义元素在二维（two-dimensional）或者三维（three-dimensional）空间中，在不影响normal flow的情况下（不影响其他元素的布局）对元素进行变形，可以进行的变形包括位移（translate），旋转（rotate），缩放（scale），倾斜（skew）
2. 限制：变形操作只能应用于块级元素
3. css变形常用属性：
    * `transform`
    * `transform-b​​ox`
    * `transform-style`
    * `transform-origin`
    * `perspective`
    * `perspective-origin`
    * `backface-visibility`
4. [三维变形学习网站](https://3dtransforms.desandro.com/)

[回到顶部](#css_docs)

### transform及其相关属性
`transform`及其相关属性：
1. `transform`：为元素设置变形，可以进行的变形包括位移（translate），旋转（rotate），缩放（scale），倾斜（skew），多个变形值通过空格（space）分隔，组合的变形从右向左应用（最后面的变形操作先执行），可能的值：
    * `none`：不设置变形
    * `<transform-funcion>`：由函数产生的变形值
2. `transform-origin`：设置位置原点，默认是元素的center，变形的一些操作，如旋转（rotate），缩放（scale），倾斜（skew）等可能需要指定位置原点，可能的属性值：
    * 一个值的语法：`<lentgh> | <percentage> | left right bottom top center`表示水平偏移
    * 两个值语法：一个值是`<lentgh> | <percentage> | left right center`表示水平偏移，另一个值是`<lentgh> | <percentage> | bottom top center`表示垂直偏移
    * 三个值语法：前两个值与两个值语法一样，第三个值是一个`<length>`值，表示z轴偏移
3. `transform-box`：定义`transform`和`transform-origin`属性相关的布局盒子（layout box），可能的值
    * `view-box`：最近的SVG视口作为引用盒子（reference box）
    * `border-box`：border box作为引用盒子；特殊的`<table>`的引用盒子是包围table的box的border box，不是table box
    * `content-box`：content box作为引用盒子；特殊的`<table>`的引用盒子是包围table的box的border box，不是table box
    * `fill-box`：对象绑定的box作为引用盒子
4. `transform-style`：设置元素的子元素是位于元素的3D空间中还是平面中，可能的值
    * `flat`：元素的子元素在元素的平面中
    * `preserve-3d`：元素的子元素在元素的3D空间中
5. `perspective`：设置3D效果，定义了`z=0`平面与用户的距离，使具有三维位置变换的元素产生perspective效果，可能的值：
    * `none`：没有perspective变形被应用
    * `<length>`：值越大，距离屏幕越远，立体效果越小，可能的值
6. `perspective-origin`：指定了用户观察的位置，可能的值：
    * 一个值：`<length> | <percentage> | left right center`指定横轴位置
    * 两个值：第一个值`<length> | <percentage> | left right center`指定横轴位置，第二个`<length> | <percentage> | top bottom center`指定纵轴位置
7. `backface-visibility`：指定元素背面朝向用户时是否可见，可能的值：
    * `visible`：元素背面朝向用户时可见
    * `hidden`：元素背面朝向用户时不可见
  

```css
/* Keyword values */
transform: none;

/* === Function values */
/* Single <length-percentage> values */
transform: translate(200px);
transform: translate(50%);
/* Double <length-percentage> values */
transform: translate(100px, 200px);
transform: translate(100px, 50%);


transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);

transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);

transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
/* === end Function values */

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);
```

[回到顶部](#css_docs)


### 常用的transform-function值
常用的`<transform-funcion>`值：
1. `translate()`：2D平面上，在水平/垂直方向上重新定位（reposition）元素，一个`<length-percentage>`值，表示横坐标移动矢量（abscissa tranlating vector），纵坐标移动矢量被设置为0，即`tranlate(2px) 相当于 translate(2px, 0)`；两个`<length-percentage>`值，则第一个值指定横坐标移动矢量，第二个值指定纵坐标移动矢量；对于百分比值，相对于`transform-box`定义的box；其他相关的`<transform-funcion>`值：
    * `translateX()`：2D平面上，在水平方向上重新定位（reposition）元素，接受一个`<length-percentage>`值，设置横坐标移动矢量，`translateX(tx)`相当于`translate(tx, 0) | translate3d(tx, 0, 0)`
    * `translateY()`：2D平面上，在垂直方向上重新定位（reposition）元素，接受一个`<length-percentage>`值，设置纵坐标移动矢量，`translateY(tY)`相当于`translate(0, ty) | translate3d(0, ty, 0)`
    * `translateZ()`：3D空间上，在z轴上重新定位（reposition）元素，设置远离或者靠近用户，是一个`<length>`值，不能是一个`<percentage>`值，正值表示靠近用户，负值表示远离用户，`translateZ(tz)`相当于`translate3d(0, 0, tz)`
    * `translate3d()`：3D空间上，重新定位（reposition）元素，前两个值是`<length-percentage>`值，分别指定x轴和y轴的移动矢量，第三个值表示z轴移动矢量，是一个`<length>`值
2. `scale()`：2D平面上，对元素在水平/垂直方向上进行缩放改变元素尺寸，一个`<number>`值，表示元素在x轴方向和y轴方向都是同一个缩放系数（scaling vector），两个`<number>`值分别指定x轴和y轴上的缩放系数，当值在`[-1，1]`内，元素沿着指定方向收缩，值超出`[-1，1]`，元素沿着指定方向增长，负值为点反射（反方向），值为1时无效；其他相关的`<transform-funcion>`值：
    * `scaleX()`：对元素在水平方向上进行缩放改变元素尺寸，接受一个和`<number>`值，表示素在x轴方向上的缩放系数，`scaleX(sx)`相当于`scale(sx, 1) | scale3d(sx, 1, 1)`，`<number>`值的约束和`scale()`一致
    * `scaleY()`：对元素在垂直方向上进行缩放改变元素尺寸，接受一个和`<number>`值，表示素在y轴方向上的缩放系数，`scaleY(sy)`相当于`scale(1, sy) | scale3d(1, sy, 1)`，`<number>`值的约束和`scale()`一致
    * `scaleZ() `：对元素在z轴方向上进行缩放改变元素尺寸，接受一个和`<number>`值，表示素在z轴方向上的缩放系数，`scaleY(sz)`相当于`scale3d(1, 1, sz)`，`<number>`值的约束和`scale()`一致
    * `scale3d()`：在3D空间上，对元素进行缩放改变元素尺寸，接受三个`<number>`值，定义x轴，y轴，z轴方向上的缩放系数，`<number>`值的约束和`scale()`一致
3. `rotate()`：2D平面上，围绕一个固定点（fixed point）旋转（roate），这个定点由`transform-origin`属性指定，接受一个`<angel>`值，旋转方向由书写方向决定（writing direction），从左到右的书写环境中，正值表示顺时针（clockwise）方向旋转，负值表示逆时针（counter-clockwise）方向旋转；其他相关的`<transform-funcion>`值：
    * `rotateX()`：围绕横坐标旋转，旋转的轴的原点可以通过`transform-origin`属性指定，值的类型与`rotate()`一样，`rotateX(a)`相当于`rotate3d(1, 0, 0, a)`，
    * `rotateY()`：围绕纵坐标旋转，旋转的轴的原点可以通过`transform-origin`属性指定，值的类型与`rotate()`一样，`rotateY()(a)`相当于`rotate3d(0, 1, 0, a)`
    * `rotateZ()`：围绕z轴旋转，旋转的轴的原点可以通过`transform-origin`属性指定，值的类型与`rotate()`一样，`rotateZ(a)`相当于`rotate(a) | rotate3d(0, 0, 1, a)`
    * `roate3d()`：3D空间上，设置元素围绕固定的轴旋转，接受三个`<number>`值，用0和1表示旋转的轴，依次分别是x轴，y轴，z轴，第四个值的类型与`rotate()`一样
4. `skew()`：2D平面上，定义元素的水平方向/垂直方向上的倾斜（skew），就像将元素的每一个角牵引到指定的角度，只有一个`<angel>`值指定x轴上的倾斜角度，两个`<angel>`值则分别指定x轴和y轴上的倾斜角度；其他相关的`<transform-funcion>`值：
    * `skewX()`：2D平面上，定义元素的水平方向方向上的倾斜（skew），接受一个`<angel>`值指定x轴上的倾斜角度
    * `skewY()`：2D平面上，定义元素的垂直方向方向上的倾斜（skew），接受一个`<angel>`值指定y轴上的倾斜角度
5. `matrix()`：定义一个二维（2D）变换矩阵，共六个`<nubmber>`值前四个值定义线性变形（linear transformation），后两个值定义移动位置（translation）；` matrix(a, b, c, d, tx, ty)`相当于`matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`；其他相关的`<transform-funcion>`值：
    * `matrix3d() `：定义一个4 × 4的三维（3D）变换矩阵，共16个`<number>`值，前12个值定义线性变形（linear transformation），后四个值定义移动位置，`matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)`
6. `perspective(<lenggh>)`：定义用户和z=0平面的距离，负值是不允许的，


[回到顶部](#css_docs)


## css图形
css图形（css shppe）:
1. 描述：css图形（css shppe）是用css构建图形，标准规定，css图形可以在浮动元素上应用；例如一个元素向左浮动，文本会环绕在矩形（rectangular）元素的右边和下边，如果应用了圆形（circle）图形，文本会环绕在圆线周围
2. `shape-outside`：定义基本图形，为浮动元素定义浮动区域（float area），图形后续的行内内容（inline content）会环绕（wrap around）图形，默认情况下，行内内容会环绕元素图形的margin box，`shape-outside`可以修改环绕的box，可能的属性值：
    * `none`：浮动区域不受影响，行内内容会环绕元素图形的margin box
    * `conent-box | padding-box | border-box | margin-box`：根据浮动元素的边缘box设置浮动区域，图形被外界指定box边缘包围起来
    * `<image>`：由`url() | <gradient>`设置图像，浮动区域由`shape-image-threshold`指定的图像的alpha通道决定
    * `<basic-shape>`：由一些函数创建的图形确定浮动区域，常见的函数见`<basic-shape>`属性值
3. `shape-image-threshold`：为`shape-outside`指定的图像，设置不透明阈值（ opacity threshold value），值从0.0（完全透明）到1.0（完全不透明），图像中opacity具有相同或大于阈值的部分会被用来作为图形的一部分，以此确)定图形边缘；如0.5的值表示图形围绕（enclose）超过50%的不透明（opaque）
4. `shape-margin`：`<length-percentage>`值，为`shape-outlisde`创建的图形设置外边距，设置浮动元素的边缘和围绕内容的距离


```css
/* === shape outline */
/* Keyword values */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* Function values */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);
shape-outside: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,
  0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');

/* <url> value */
shape-outside: url(image.png);
/* <gradient> value */
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);
/* === end shape outline */

```
[回到顶部](#css_docs)


## css滚动捕捉
css滚动捕捉（css scroll snap）：
1. 描述：css滚动捕捉是一种当用户在文档内滚动时候，捕捉滚动到特定点的方式，css scroll snap关键的属性是`scroll-snap-type & scroll-snap-align`
2. `scroll-snap-type`：在scroll container上用来描述滚动的类型和方向，只是`<keyword> [mandatory | proximity]`，其中：
    * `none`: `<keyword>`类型，当scroll container被滚动，忽略捕捉点（snap points）
    * `x`：`<keyword>`类型，scroll container在水平轴上滚动到捕捉位置（snap positions）
    * `y`: `<keyword>`类型，scroll container在垂直轴上滚动到捕捉位置
    * `block`: `<keyword>`类型，scroll container在block轴上滚动到捕捉位置
    * `inline`：`<keyword>`类型，scroll container在inline轴上滚动到捕捉位置
    * `both`：`<keyword>`类型，scroll container分别在两个轴上滚动到捕捉位置
    * `mandatory | proximity`：可选的值，`mandatory`（强制）指示无论滚动到哪里，内容需要捕捉（snap）到确定的点，带来一致的体验，捕捉到每一个确定的点，但是当内容大的超处计划，不能滚动和看奥内容中的确定点； `proximity`（接近），当靠近（close by）才会捕捉到确定的点，但不不是必须的；如果内容被添加、移动、删除或者重置大小，滚动偏移（offset）调整为保持在捕捉点
3. `scroll-snap-align`：用于scroll container上的child element上，设置元素盒子滚动的捕捉点作为捕捉区域的对齐，单个值指定两个值都是一样的，两个值分别指定block轴和inline轴的对齐，可能的值是：
    * `none`：元素盒子不指定捕捉位置
    * `start`：元素盒子滚动捕捉区域的开始对齐
    * `center`：元素盒子滚动捕捉区域的中间对齐
    * `end`：元素盒子滚动捕捉区域的末端对齐
4. `scroll-padding`：用于scroll container上的child element上，像元素的`padding`一样用于设置元素所有边的滚动内边距，是`scroll-padding-top scroll-padding-right scroll-padding-bottom scroll-padding-left`的缩写属性，值的类型是`<length-percentage> | auto`，例如设置`scroll-padding: 40px`，滚动捕捉到第二个section的start时候，滚动会在section的start远离40px的地方停下
5. `scroll-margin`：用于scroll container上的child element上，像元素的`margin`一样用于设置元素所有边的滚动外边距，是`scroll-margin-top scroll-margin-right scroll-margin-bottom scroll-margin-left`的缩写属性，值的类型是`<length-percentage> | auto`，例如设置`scroll-margin: 40px`，滚动捕捉到第二个section的start时候，滚动会在section的start远离40px的地方停下
6. `scroll-snap-stop`：用于scroll container上的child element上，设置scroll container是否越过（pass over）捕捉位置（snap position），可能的值：
    * `normal`：默认值，scroll container的可视化视口滚动，可能会越过捕捉位置（snap position）
    * `always`：scroll container的可视化视口滚动，不越过该捕捉位置（snap position），即在这个捕捉点滚动挺尽可能停下来；一定捕捉第一个元素的捕捉位置（snap position）

```css
/* === scroll-snap-type */
/* Keyword values */
scroll-snap-type: none;
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* Optional mandatory | proximity*/
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;
/* === end scroll-snap-type */

```

[回到顶部](#css_docs)


## css counter
css counter：
1. 描述：css counter用于基于文档的位置调整内容外观，如自动产生标题数字，在有序列表中改变数字
2. css counter相关属性
    * `counter-set`
    * `counter-reset`
    * `counter-increment`
3. `counter-set`：如果counter还不被创建，会设置一个新的counter，可能的值：
    * `none`：没有counter执行
    * `<custom-ident> [<integer>]`：`<custom-ident>`命名一个counter，后续可选的`<integer>`指定counter的初始值，如果不指定，默认的初始值为0
    * 空格分隔可以分隔创建多个counter
4. `counter-reset`：对一个counter进行重置（reset）赋值；正常的counter具有默认的初始值0，颠倒的（reversed）的counter会向下计数，默认初始值为当前元素等级（level）的数字，可能的值：
    * `none`：没有counter执行
    * `<custom-ident> [<integer>]`：为名称为`<custom-ident>`的counter，重设值，后续可选的`<integer>`指定counter的重设值，如果不指定，默认值为0
    * `reversed(<custom-ident>) [<integer>]`：使得`<custom-ident>`的counter颠倒次序，后续可选的`<integer>`指定counter的重设值，如果不指定，默认值为当前元素的number
    *  空格分隔可以重设多个counter
5. `counter-increment`：增减指定counter的值，可能的值：
    * `none`：没有counter增减
    * `<custom-ident> [<integer>]`：为名称为`<custom-ident>`的counter，设置增减值，后续可选的`<integer>`指定counter的增减值，如果不指定，默认值为1
    * 空格分隔可以增减多个counter
6. `counter(<custom-ident>[, <counter-style>])`函数：返回`<custom-ident>`指定名称counter的字符串值，函数通常在伪元素的`content`属性中使用，其中
    * `<custom-ident>`：counter的名称，返回指定名称counter的值
    * 可选的`<counter-style>`用于指定counter样式，可选的值有`numeric | decimal-leading-zero | lower-alpha | alphabetic | symbolic| decimal...`，如果不指定，默认样式是decimal
7. `counters(<custom-ident>[,<string>, <counter-style>])`函数：设置嵌套counter，返回由外到内（from outermost to innermost）的指定名称的counter，不同层级之间使用指定`<string>`作为分隔字符的字符串；函数通常在伪元素的`content`属性中使用，其中
    * `<custom-ident>`：counter的名称，返回指定名称counter的值
    * `<string>`：连接counter的自定义字符串
    * 可选的`<counter-style>`用于指定counter样式，可选的值有`numeric | decimal-leading-zero | lower-alpha | alphabetic | symbolic| decimal...`，如果不指定，默认样式是decimal



```css
/* === counter-set */
/* Set "my-counter" to 0 */
counter-set: my-counter;
/* Set "my-counter" to -1 */
counter-set: my-counter -1;
/* Set "counter1" to 1, and "counter2" to 4 */
counter-set: counter1 1 counter2 4;
/* === end counter-set */


/* === counter-reset */
/* Set "my-counter" to 0 */
counter-reset: my-counter;
/* Set "my-counter" to -3 */
counter-reset: my-counter -3;

/* reversed函数反转次序 */
/* Set reversed "my-counter" to "the number of peer elements" */
counter-reset: reversed(my-counter);
/* Set reversed "my-counter" to -1 */
counter-reset: reversed(my-counter) -1;
/* Set counter2 to 9 and reversed "counter1" 
and "counter3" to 1 and 4, respectively*/
counter-reset: reversed(counter1) 1 counter2 9 reversed(counter3) 4;
/* === end counter-reset */


/* === counter-increment */
/* Increment "my-counter" by 1 */
counter-increment: my-counter;
/* Decrement "my-counter" by 1 */
counter-increment: my-counter -1;
/* Increment "counter1" by 1, and decrement "counter2" by 4 */
counter-increment: counter1 counter2 -4;
/* === end counter-increment */

/* === counter function */
/* Simple usage */
counter(countername);
/* changing the counter display */
counter(countername, upper-roman)

/* Simple usage  - style defaults to decimal */
counters(countername, '-');
/* changing the counter display */
counters(countername, '.', upper-roman)
/* === end counter function */


/* === display a counter */
h3::before {
  /* Increment the value of section counter by 1 */
  counter-increment: section;  
  /* Display counter value in default style (decimal) */               
  content: "Section " counter(section) ": ";  
}
/* === display a counter */


/* === 表使用counter例子 */
ul {
  /* 设置或重设计数器默认为0 */
  counter-reset: counter;
  /* 移除默认列表样式，从而使用计数器作为列表自定义样式 */
  list-style: none;
}

li:before {
  /* 计数器默认增加1 */
  counter-increment: counter;
  /* 使用counters函数创建嵌套计数器，嵌套的计数使用'.'分隔 */
  content: counters(counter, '.') ' ';
}
/* ==== end列表使用counter例子 */
```

[回到顶部](#css_docs)




## @rule
css提供了`@rule`的指令形式，提供一些功能，常见的css`@rule`：
1. `@import`：在一个样式表内引入另一个样式表
2. `@media`：创建媒体查询（media queries）

```css
/* 当浏览器视口大于30em，应用下面样式 */
@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

[回到顶部](#css_docs)


## 其他属性


[回到顶部](#css_docs)


### opacity
`opacity`属性
1. 描述：设置元素的不透明程度（opcity degree）
2. 可能的属性值`<number> | <percentage>`：其中`<number>`的范围是0.0到1.0，对应了`<percentage>`0%到100%，其中
    * 0：表示完全透明
    * 1：表示完全不透明（opaque）
3. `opacity`属性应用于整个元素，包括内容它的内容，即使子元素不会继承这个值，使用了不是`opacity: 1`的属性，元素在新的层叠上下文（new stacking context）

[回到顶部](#css_docs)

### user-select
`user-select`属性：
1. 描述：控制用户能否可以选中文本，注意，并不是一个避免用户复制内容的安全方法
2. 可能的属性值：
    * `auto`：默认，对于`::before ::after`伪元素，值是`none`；如果父元素设置了`user-select:all | none`，元素也设置`user-select:all | none`；对于其他情况，是`text`
    * `text`：用户可以选中文本
    * `none`：元素的文本及其子元素不能被选中
    * `all`：鼠标点击会自动选择所中所有内容

[回到顶部](#css_docs)

### appearance
`appearance`属性：
1. 描述：基于操作系统主题，控制UI组件（control）的原生外观（native appearance）
2. 可能的属性值：
    * `none`：隐藏组件的一些特征，如选择框中的下拉箭头隐藏
    * `auto`：浏览器根据元素应用
    * 其他不列举，需要使用再进行补充

[回到顶部](#css_docs)


### filter
`filter`属性：
1. 描述：将图形效果应用于元素上，如模糊（布鲁日）或颜色偏移（color shift）等图形效果，通常用于调整图形，背景，边框的渲染
2. 可能的属性值：
    * `none`：清除图形效果
    * `url()`：svg filter的url地址值，可以嵌入一个外部的xml文件
    * `<filter-function>`：多个`<filter-function>`可以空格分隔
3. 常用的`<filter-function>`值：
    * `blur(<length>)`：高斯模糊应用于输出图像，函数参数定义模糊半径值
    * `drop-shadow(<length>, <length>, <length>, <color>)`：为图片设置阴影，类似于`box-shadow`，`box-shadow`创建的是元素盒子后的矩形阴影，而`drop-shadow()`创建的是图像形状的阴影，第一个`<length>`值是必须的设置阴影水平偏移（offset）距离，正值向右偏移；第二个`<length>`值是必须的设置阴影垂直偏移（offset）距离，正值向上偏移；第三个`<length>`值是可选的设置阴影半径，默认是0；第四个`<color>`值是可选的指定阴影颜色
    * `hue-rotate(<angle>)`：元素及其内容的色彩（hue）进行旋转：0deg完全不变，正值增加hue值，负值减少负值
    * `saturate(<number | percentage>)`：设置图像饱和度，0完全不饱和，1完全饱和
    * `brightness(<number | percentage>)`：使得图像的亮度线性增减，0图片全黑，1完全不变
    * `opacity(<number | percentage>)`：图像应用透明，和`opacity`属性类型，0完全透明
    * `grayscale(<number | percentage>)`：图像转换为灰度图像，0完全不变，1为完全灰度，参数忽略默认为1
    * `sepia(<number | percentage>)`：图片引用深褐色效果，0完全不变，1完全深褐色
    * `contrast(<number | percentage>)`：调整图片对比度，0图片全灰色，1完全不变，值越大越具有对比度
    * `invert(<number | percentage>)`：颠倒图像的颜色，0完全不变，1完全颠倒

```css
/* Use no filter */
filter: none;

/* URL to SVG filter */
/* which may be embedded in an external XML file */
filter: url("filters.svg#filter-id");

/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: hue-rotate(.5turn)  /* 180deg rotation */
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Multiple filters */
filter: contrast(175%) brightness(3%);
```

[回到顶部](#css_docs)


### backdrop-filter
`backdrop-filter`：
1. 描述：为元素后面的的区域应用图像效果，因为是元素后应用的，所以元素或者它的背景至少要部分透明
2. 属性值与`filter`属性一致

```css
/* Keyword value */
backdrop-filter: none;

/* URL to SVG filter */
backdrop-filter: url(commonfilters.svg#filter);

/* <filter-function> values */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);
```

[回到顶部](#css_docs)


### mix-blend-mode
`mix-blend-mode`属性
1. 描述：设置元素的内容与父元素，元素的背景如何混合（blend）
2. 可能的属性值：
    * `normal`：默认值
    * `multiply`：
    * `darken`：
    * `lighten`：
    * `overlay`：

[回到顶部](#css_docs)


### scroll-behavior
`scroll-behavior`属性：
1. 描述：被导航或者cssom 滚动api触发时，指定滚动的盒子的滚动行为
2. 可能的属性值：
    * `auto`：滚动盒子立即滚动
    * `smooth`：滚动盒子使用浏览器定义的timing function平滑滚动

[回到顶部](#css_docs)


### mask
`mask`属性
1. 描述：用于通过在图像指定点上，遮掩（mask）或者剪切（clip），达到部分或全部隐藏元素的效果，是`mask-image [mask-position / mask-size] mask-repeat mask-origin mask-clip mask-composite  mask-mode`的缩写属性
2. `mask-image`：设置mask图像的来源
3. `mask-position`：设置mask图像的位置
4. `mask-size`：设置mask图像的大小尺寸
5. `mask-repeat`：设置mask图像的repeat方式
6. `mask-origin | mask-clip`：值类似，如果只出现一次，指定的是`mask-origin`
7. `mask-composite`：设置当前mask图像层次的组合操作（compositing operation）
8. `mask-mode`：设置mask图像的模式

```css
/* 使用位图来做遮罩 */
mask: url(mask.png);
/* 使用 SVG 图形中的形状来做遮罩 */                  
mask: url(masks.svg#star);                 
/* 使用 SVG 图形中的形状来做遮罩并设定它的位置：离上边缘40px，离左边缘20px */
mask: url(masks.svg#star) 40px 20px;

/* Element within SVG graphic used as luminance mask */
mask: url(masks.svg#star) luminance;    
/* Element within SVG graphic used as mask positioned 40px 
 from the top and 20px from the left */   
mask: url(masks.svg#star) 40px 20px;
/* Element within SVG graphic used as mask with a width and height of 50px */  
mask: url(masks.svg#star) 0 0/50px 50px;   
/* Element within SVG graphic used as horizontally repeated mask */
mask: url(masks.svg#star) repeat-x;    
/* Element within SVG graphic used as mask extending 
to the box enclosed by the stroke */    
mask: url(masks.svg#star) stroke-box;      
/* Element within SVG graphic used as mask and combined with 
background using non-overlapping parts */
mask: url(masks.svg#star) exclude;         
```

[回到顶部](#css_docs)


### -webkit-line-clamp
`-webkit-line-clamp`：
1. 描述：设置block container的内容限制为指定的行数，只有设置`display:-webkit-box | -webkit-inline-box`和`-webkit-box-orient: vertical`属性才能产生效果，很多情况下需要设置`overflow: hidden`去隐藏超过行数的内容
2. 属性值是`none | <integer-number>`

```css
p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

[回到顶部](#css_docs)



### quotes
`quotes`
1. 描述：设置浏览器如何渲染引用符号
2. 可能的值：
    * `none`: `content`属性的open-quote, close-quote的值不产生引用符号
    * `auto`：根据语言值（如通过lang属性）自动应用正确的引用符号
    * `<string> [<string>]...`：第一个是最外层的引用符号

```css
/* Keyword value */
quotes: none;
quotes: auto;

/* <string> values */
quotes: "«" "»";           /* Set open-quote and close-quote to the French quotation marks */
quotes: "«" "»" "‹" "›";   /* Set two levels of quotation marks */



q {
  quotes: '"' '"' "'" "'";
}
q::before {
  content: open-quote;
}
q::after {
  content: close-quote;
}
```

[回到顶部](#css_docs)


## 继承属性
css继承：
1. 描述：html元素应用的某些css属性及其值（css declaration），子元素也能继承这些属性。继承条件：
    * 该属性是可继承的
    * 父级元素设置属性，子元素没有覆盖该属性
2. css提供了四个特殊通用值`<inheritance-value>`控制继承，每个css属性都有这些值
    * `inherit`: 属性的值继承父元素该属性的值
    * `initial`: 属性的值为元素的该属性的初始值
    * `unset`: 属性的值重设为自然值（natural value），即如果属性是自然继承的，相当于`inherit`，否则相当于`initial`
    * `revert`：很多情况下与`unset`一样效果，但是会反转浏览器默认样式而不是应用属性默认值
3. css缩写属性`all`: 用于重设几乎所有的属性，属性值有
    * `inherit`: 元素的所有属性的值继承父元素属性的值
    * `initial`：元素的所有属性的值继承父元素属性的初始值
    *  `unset`：unset`: 属性的值重设为自然值（natural value），即如果属性是自然继承的，相当于`inherit`，否则相当于`initial`
    *  `revert`：
    *  `revert-layer`:
3. 常见可继承的css属性
    * 文字排版的属性
        * `font`
        * `word-break`
        * `letter-spacing`
        * `text-align`
        * `text-rendering`
        * `word-spacing`
        * `white-space`
        * `text-indent`
        * `text-transform`
        * `text-shadow`
    * `line-height`
    * `color`
    * `visibility`
    * `cursor`

[回到顶部](#css_docs)







## 属性值



[回到顶部](#css_docs)

### 数值
数值包括：
1. `<integer>`：整数
2. `<number>`：十进制数字
3. `<length>`
    * 绝对长度单位: `px`像素，最常使用的绝对值单位
    * 相对长度单位：相当于某些属性值
        * `em`：一些文本属性如`font-size`，相当于父元素的`font-size`；其他属性如`width`相对于当前元素的`font-size`大小
        * `rem`：相对于根元素的`font-size`
        * `vw`：相对于viewport的宽度，1vw相当于1%的视口宽度
        * `vh`：相对于viewport的高度，1vh相当于1%的视口高度
        * `vmin`：相对于viewport的最小尺寸（dimension），1vmin相当于1%的最小视口尺寸
        * `vmax`：相对于viewport最大尺寸（dimension），1vmax相当于1%的最大视口尺寸
4. `<percent>`：百分比相对于其他值设置的。例如:
    * `font-size`的百分比，是相对于父元素字体大小的百分比
    * `width & height`的百分比，是相对于父元素宽度的百分比
    * `margin & padding`的百分比，是相对于元素的`inline size`，即在`writing-mode: horizontal-tb`的默认情况下，相对于元素的`width`
5. `<length-percent>`：值是`<length>`或者`<percent>`


[回到顶部](#css_docs)


### 颜色值
颜色值：
1. 现代计算机颜色系统（color system）有24bit，通过red，green，blue通道（channel）组合产生256个不同的值，所以颜色值有`256 x 256 x 256 = 16,777,216`个值
2. css中，指定颜色值有多种方式，包括`<color> | 十六进制RGB值 | rgb() | rgba() | hsl() | hsla()`
3. `<color>`: 颜色关键词
4. 十六进制RGB值（Hexadecimal RGB values）：每一个十六进制前都有`#`，每一对值代表红绿蓝通道的一个，可以允许指定`16 x 16 = 256`的可能值，这种方式虽然不如颜色关键字容易理解，但是，这是通用的一种颜色表达方式
5. `rgb(r, g, b) & rgba(r, g, b, a)`：红绿蓝三原色，几乎能显示所有颜色，显示器用这种显示图像，`r | g | b`的值是0到255的十进制整数，`a`用于控制透明度（opacity），0表`示完全透明，1表示完全不透明，值从0到1
6. `hsl(h, s, l) & hsla(h, s, l)`：HSL模式在旧的IE浏览器不被支持，支持性这方面不如rgb模式，其中
    * `h`表示色调（hue），颜色的底色，值在0和360之间，表示色轮周围的角度
    * `s`表示颜色饱和度（saturation）,值为0 - 100%，其中0为无颜色(显示为灰色阴影)，100%为全色饱和度
    * `l`表示亮度（lightness），0-100%，其中0表示无亮度（全黑），100%表示全亮（全白）；`a`用于控制透明度（opacity），0表`示完全透明，1表示完全不透明，值从0到1
7. `rgba()`函数产生属性透明值，`opacity`属性设置元素透明。对于二者：
    * 共同点：rgba()和opacity都能实现透明效果；其中值0表示透明，1表示不透明，0.5表示半透明
    * `rgba()`只作用于元素的颜色或其背景色，设置`rgba`透明的元素的子元素不会继承透明效果
    * `opacity`作用于元素，还作用于元素内所有内容的透明度



```css
/* 颜色关键字 */
color: transparent;
color: red; /* 140+ 表示文字的单词 */

/* 十六进制颜色代码*/  
color: #fff; 

/* === rgb() & rgba() 函数 */
/* 
使用rgb函数，三个参数分别是
第一个值是red
第二个值是green
第三个之是blue
*/
color: rgb(255, 255, 255);
/*
使用rgba函数，第四个参数表示颜色的透明度
*/
color: rgba(255, 255, 255, .3);


/* === hsl() & hsla() 函数 */
/* Hue Saturation Lightness */
color: hsl(14, 100%, 53%);
color: hsla(14, 100%, 53%, 0.6);
```

[回到顶部](#css_docs)

### gradient渐变图像值
`<gradient>`渐变图像值:
1. 描述：`<gradient>`创建两个或多个颜色的逐渐过渡，用于作为图像，渐变由浏览器生成，可以用来实现类似效果的栅格图像文件（raster images files）的需求，但是放大时看起来比栅格图像更好，并且可以动态调整大小
2. css渐变类型有：
    * `linear-gradient()`创建的线性渐变
    * `radial-gradient()`创建的径向渐变
    * `repeating-linear-gradient()`和`repeating-radial-gradient()`创建的重复渐变，重复渐变填充区域
    * `conic-gradient()`创建圆锥渐变
3. 渐变的辅助生成，如[cssgradient.io](https://cssgradient.io/)


#### linear-gradient()线性渐变及其重复渐变
`linear-gradient()`线性渐变：
1. 描述：`linear-gradient()`函数用于沿着直线（along straight line）创建两个或多种颜色线性渐变的图像
2. 线性渐变的构成： 
    * 渐变线（gradient line）：由元素盒子包含的渐变图像的中心（center）和角度定义
    容器中心按一定角度延伸
    * 颜色停止点（color-stop）：该点之后的颜色会从一个颜色过渡到另一个
    * 着色线（colored lines）：根据颜色停止点，作垂直于渐变线的着色线
    * 起点（starting point ）：从元素盒子顶点出发，作垂直于渐变线的着色线，着色线与渐变性的交点作为起点
    * 终点（ending point ）：从元素盒子顶点出发，作垂直于渐变线的着色线，着色线与渐变性的交点作为起点
    * 顶点效应（magic corners）：靠近起点和终点的角（corner）的颜色对应于它们起点和终点定义的颜色
3. `linear-gradient([to <side-or-corner> | <angle>, ] <linear-color-stop>[, <color-hit>])`可能的参数：
    * `<side-or-corner>`：指定渐变性的起点位置，可能的值是`to right|left [bottom | top]`，如果不指定，默认值是，`to bottom`，其中`to top = 0deg, to bottom = 180deg, to right = 90deg, to left = 270deg = -90deg`
    * `<angle>`：指定渐变线方向的角度，`to top = 0deg`，顺时针增加值
    * `<linear-color-stop>`：指定渐变的color stop
    * `<color-hint>`：定义两个邻接color stop的插入点（interpolation hint），定义两个color stop颜色过渡的中点（midpoint），如果忽略，两个color stop的的终点作为颜色过渡的中点（midpoint）
4. `linear-gradient()`中的 `<linear-color-stop>`的参数形式是`<color>[,<length-percentage>{1, 2}`，可能的值：
    * `<color>`：必须提供一个`<color>`值指定颜色
    * `<length-percentage>`：可选的提供1个或2个`<length-percentage>`值，分别指定color stop的开始和结束位置
    * 没有显式指定`<length-percentage>`：第一个color stop默认开始位置为0%，最后一个color stop默认结束位置为100%；既不是始点和终点的color stop，默认为前后两个color stop的中点位置
    * color stop指定的开始位置比前面的color stop的结束位置小，则使用前一个color stop的结束位置作为开始位置，如`linear-gradient(#fb3 30%, #58a 0)`，第二个color stop位置调整为前一个color stop的位置
    * 上一个color stop的结束位置和下一个color stop的开始位置一样，两个color之间没有渐变过渡，反而产生hard line
5. `repeating-linear-gradient()`创建一个由重复线性渐变组成的背景图像，和`linear-gradient()`具有相同的参数，但是重复color stop直到覆盖整个容器，如果第一个color stop和最后一个color stop不一样从颜色，重复渐变会导致非常突兀的渐变效果。注意：
    * `<linear-color-stop>`的参数形式是`<color>[,<length-percentage>{1, 2}`，其中显式指定`<length-percentage>`为100%，则没有重复渐变



```css
/* 默认渐变角度是to bottom，starting blue and finishing red*/
linear-gradient(blue, red); 

linear-gradient(red, orange, yellow, green, blue);
/* 五个值，四个分段，100/4=25，相当于 */
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);

linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
/* 相当于 */
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);

/* 50%处是hardline而不是过渡 */
linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);

linear-gradient(red 40%, yellow 30%, blue 65%);
/* yellow开始位置比red结束位置小，相当于 */
linear-gradient(red 40%, yellow 30%, blue 65%);
linear-gradient(red 40%, yellow 40%, blue 65%);


/* 渐变角度为45度，starting blue and finishing red */
linear-gradient(45deg, blue, red);
/* 渐变从右下到左上，starting blue and finishing red */
linear-gradient(to left top, blue, red);


/* 
color hit:
.25turn = 90deg = to right, 渐变角度为从左到右
从red开始，到达渐变的10%，开始发生渐变过渡到blue
*/
linear-gradient(.25turn, red, 10%, blue);
/* 
red从开始到10%位置，blue从90%位置开始直到结束 
10%到90%之间是red到blue的过渡
过渡的midpoint设置为30%，而不是50%
*/
linear-gradient(red 10%, 30%, blue 90%);


/* === 重复线性渐变 */
/* A repeating gradient tilted 45 degrees,
   starting blue and finishing red, repeating 3 times */
repeating-linear-gradient(45deg, blue, red 33.3%);

/* A repeating gradient going from the bottom right to the top left,
   starting blue and finishing red, repeating every 20px */
repeating-linear-gradient(to left top, blue, red 20px);

/* A gradient going from the bottom to top,
   starting blue, turning green after 40%,
   and finishing red. This gradient doesn't repeat because
   the last color stop defaults to 100% */
repeating-linear-gradient(0deg, blue, green 40%, red);

/* A gradient repeating five times, going from the left to right,
   starting red, turning green, and back to red */
repeating-linear-gradient(to right, red 0%, green 10%, red 20%);
```

[回到顶部](#css_docs)

#### radial-gradient()径向渐变即其重复渐变
`radial-gradient()`径向：
1. 描述：`radial-gradient()`函数用于创建从原点（origin）发散（radiate）的两个或多种颜色渐变的图像
2. 径向渐变的构成：
    * 中心点（center point）
    * 边缘形状（ending shape）：边缘形状是圆形或者椭圆，默认是椭圆
    * 颜色停止点（color stop）：从中心点向右水平延申出虚拟渐变射线（virtual gradient ray），在这条线的位置上定义颜色停止点
3. `radial-gradient([<ending-shape> <size> at <position>] <linear-color-stop>[, <color-hit>])`可能的参数：
    * `<ending-shape>`：设置渐变的边缘形状，值是`circle | ellipse`，如果不指定默认为ellipse
    * `<position>`：设置渐变的位置，不指定则默认为center
    * `<size>`：设置渐变边缘形状的尺寸，默认是`farthest-corner`
    * `<linear-color-stop>`：指定渐变的color stop
    * `<color-hint>`：定义两个邻接color stop的插入点（interpolation hint），定义两个color stop颜色过渡的中点（midpoint），如果忽略，两个color stop的的终点作为颜色过渡的中点（midpoint）
4. `radial-gradient()`中参数`<size>`可能的值：
    * `farthest-corner`：默认值，渐变的边缘形状尺寸从元素盒子的中心到最远的角
    * `closest-corner`：渐变的边缘形状尺寸从元素盒子的中心到最近的角
    * `farthest-side`：对于circle来说，渐变的边缘形状尺寸从元素盒子的中心到元素盒子最远的一边，对于ellipses来说，渐变的边缘形状尺寸从元素盒子的中心到元素盒子水平和垂直最远的一边
    * `closest-side`：对于circle来说，渐变的边缘形状尺寸从元素盒子的中心到元素盒子最近的一边，对于ellipses来说，渐变的边缘形状尺寸从元素盒子的中心到元素盒子水平和垂直最近的一边
    * `<length-percentage>`：对于circle来说，只能通过`<length>`指定半径，负值不是有效值；对于ellipses，提供两个`<length-percentage>`值，第一个指定水平尺寸，第二个指定垂直尺寸
5. `radial-gradient()`中的 `<linear-color-stop>`的参数形式是`<color>[ <length-percentage>{1, 2}`，可能的值：
    * `<color>`：必须提供一个`<color>`值指定颜色
    * `<length-percentage>`：可选的提供1个或2个`<length-percentage>`值，分别指定color stop的开始和结束位置
    * 没有显式指定`<length-percentage>`：第一个color stop默认开始位置为0%，最后一个color stop默认结束位置为100%；既不是始点和终点的color stop，默认为前后两个color stop的中点位置
    * color stop指定的开始位置比前面的color stop的结束位置小，则使用前一个color stop的结束位置作为开始位置
    * 上一个color stop的结束位置和下一个color stop的开始位置一样，两个color之间没有渐变过渡，反而产生hard line
    * 上一个color stop的结束位置和下一个color stop的开始位置一样，两个color之间没有渐变过渡，反而产生hard line
6. `repeating-radial-gradient()`用于创建从原点（origin）发散（radiate）的两个或多种颜色重复渐变的图像


```css
/* 指定渐变形状为circle，从green向purple过渡 */
radial-gradient(circle, green, purple);
radial-gradient(circle, green 0%, purple 20%, orange 100%);

/* 渐变结束的位置 */
radial-gradient(circle closest-side, green 0%, purple 20%, orange 100%);
/* 渐变的位置 */
 radial-gradient(circle closest-side at 45px 45px, green 0%, purple 20%, orange 100%);



/* 重复渐变 */
/* 一个从容器中心点开始的重复渐变,
   从红色开始，渐变到蓝色，再渐变到绿色 */
repeating-radial-gradient(circle at center, red 0, blue, green 30px);
```

[回到顶部](#css_docs)

#### conic-gradient()圆锥渐变及其重复渐变
`conic-gradient()`圆锥渐变：
1. 描述：`conic-gradient()`用于创建围绕中心点旋转的颜色渐变的图像
2. 圆锥渐变的组成：
    * 中心点（center point）
    * 颜色停止点（color-stop）：以中心点为圆心的一个圆中的位置作为颜色停止点，通过`<angle>`指定位置
3. `conic-gradient([from <angle> <position>] <angular-color-stop>[, <color-hit>])`可能的参数值：
    * `<angle>`：在顺时针方向指定渐变角度
    * `<position>`：设置渐变的位置，不指定则默认为center
    * `<angular-color-stop>`：指定颜色停止点
    * `<color-hint>`：定义两个邻接color stop的插入点（interpolation hint），定义两个color stop颜色过渡的中点（midpoint），如果忽略，两个color stop的的终点作为颜色过渡的中点（midpoint）
4. `conic-gradient()`中的`<angular-color-stop>`参数的形式是`<color> [ <angle>{1, 2}]`，可能的值
    * `<color>`：必须提供一个`<color>`值指定颜色
    * `<angle>`：可选的提供1个或2个`<angle>`值，分别指定color stop的开始和结束位置
    * 没有显式指定`<angle>`：第一个color stop默认开始位置为0%，最后一个color stop默认结束位置为360deg；既不是始点和终点的color stop，默认为前后两个color stop的中点位置
    * color stop指定的开始位置比前面的color stop的结束位置小，则使用前一个color stop的结束位置作为开始位置
5. `repeating-conic-gradient()`创建围绕中心点旋转的重复的颜色渐变的图像

```css
/* 指定渐变中心位置 */
conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
/* 改变渐变 */
conic-gradient(from 45deg, red, orange 50%, yellow 85%, green);

conic-gradient(red, orange, yellow, green, blue);
/* 五个颜色，4个区段，360/4=90，相当于 */
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);


/* 重复渐变 */
/* Starburst: a blue on blue starburst: the gradient
   is a starburst of lighter and darker blue,
   centered in the upper left quadrant,
   offset by 3degrees so there is no up/down straight line */
background: repeating-conic-gradient(
    from 3deg at 25% 25%,
    hsl(200, 100%, 50%) 0deg 15deg,
    hsl(200, 100%, 60%) 10deg 30deg);
);
```

[回到顶部](#css_docs)




### 位置值
位置值：
1. 描述：`<position>`值是一组2D坐标，相对于元素盒子（element box）去设置一个位置（location），如背景图像，通过 `background-position`定位背景图像在元素上的位置，`<position>`典型由两个值组成，第一个值表示水平位置，第二个值表示垂直位置
2. `<position>`的值`[ left | center | right | <length> | <percentage> ] [ top | center | bottom | <length> | <percentage> ]?`，其中：
    * top：元素盒子的上边缘
    * left：元素盒子的上边缘
    * bottom：元素盒子的下边缘
    * right：元素盒子的右边缘
    * center：元素盒子的中间点
    * `<length-percentage>`：可以用尺寸和百分比表示位置偏移值。正值朝着right或者botttom偏移，负值则相反反向偏移
    * 如果只有一个值，定义x轴位置，另外一个值默认是center
    * `left | right | top | botttom`也可以指定`<length-percentage>`作为偏移值，对于top，top作为坐标轴，正值相对于top下方偏移，负值相对于top上方偏移，`left | right | bottom`以此类推


```css
/* 有效的位置值 */
center
left
center top

right 8.5%
bottom 12vmin right -6px

10% 20%
8rem 14px
```

[回到顶部](#css_docs)


### 图像值
图像值：
1. `<image>`值用于图像为有效值的任何地方
2. `<image>`可能的值
    * 通过`url()`函数指向的实际图像文件指定路径
    * 也可以是一个渐变`<gradient>`

```css
background-image: url(example.png);
background-image: linear-gradient(90deg, rgba(119,0,255,1) 39%, rgba(0,212,255,1) 100%);
```

[回到顶部](#css_docs)


### 图形值
图形值`<basic-shape>`常用的值：
1. 描述：被`shape-outside | clip-path  | offset-path`属性使用的图形值，坐标系统从元素引用盒子（reference box）的左上角开，x轴向右，y轴向下，百分比相对于元素引用盒子的面积（dimensions），默认的元素引用盒子是margin box
2. `inset( <shape-arg>{1,4} [<border-radius>]? )`：创建inset矩形
    * `<shape-arg>{1,4}`：1到4个`<length-percentage>`值分别表示top，right，bottom，left从元素引用盒子（reference box）向内（inward）的偏移，以此确定inset矩形边缘的位置，就像`margin`属性一样，可以设置所有的矩形边缘使用一个值，两个值，四个值的语法
    * `<border-radius>]`：可选的值，设置inset矩形的圆角半径
3. `circle( [<shape-radius>]? [at <position>]? )`：使用半径和位置创建一个圆形，参数可能是：
    * `<shape-radius>`：用`<length-percentage> | closest-side | farthest-side`，其中`closest-side`表示从图形中心到元素引用盒子最近的距离，`farthest-side`表示从图形中心到元素引用盒子最远的距离；百分比计算需要用到引用盒子的`width & height`，具体是`sqrt(width^2+height^2)/sqrt(2)`
    * `<position>`：设置圆心位置，默认值是center
4. `ellipse( [<shape-radius>{2}]? [at <position>]? )`：使用两个半径和位置创建一个椭圆形，参数可能是：
    * `<shape-radius>`：用`<length-percentage> | closest-side | farthest-side`，其中`closest-side`表示从图形中心到元素引用盒子最近的距离，`farthest-side`表示从图形中心到元素引用盒子最远的距离；百分比计算需要用到引用盒子的`width & height`，具体是`sqrt(width^2+height^2)/sqrt(2)`
    * `<position>`：设置圆心位置，默认值是center
5. `polygon( [<fill-rule>]? [<shape-arg> <shape-arg>]# )`：创建一个多边形，其中
    * `<fill-rule>`：可选值，代表svg属性fillrule，决定了多边形的内部，默认值为`nonzero`，可以指定`evenodd`
    * `<shape-arg>`：三对或以上的用逗号分割的值，每一对`<shape-arg>`都是两个`<length-percentage>`值值表示x轴和y轴位置表示多边形的顶点（vertex）
6. `path( [<fill-rule>,]? <string>)`：接受svg path字符串创建一个图形，其中
    * `<fill-rule>`：可选值，代表svg属性fillrule，决定了多边形的内部，默认值为`nonzero`，可以指定`evenodd`
    * `<string>`：定义svg path的数据字符串


```css
polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%);
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
```
 

[回到顶部](#css_docs)

### 时间值
时间值`<time>`：
1. 描述：时间值
2. 可能的值：`[+ | -]<number>`，单位有
    * `s`：秒
    * `ms`：毫秒

[回到顶部](#css_docs)

### 函数产生值
css属性值除了是关键字，数值，还可以通过函数产生，常用的函数有：
1.  `var()`函数：用来插入自定义属性的值，除了用来作为属性值不能作为属性，选择器；可以使用使用逗号提供回退值
2. `calc()`：用于计算产生值，在不能指定明确值，需要浏览器在运行时计算值时很有用。如`width: calc(90% - 30px)`，宽度是90%的父亲宽度，减去30px
3. `min(val, val2)`产生一个最小值
4. `max(val, val2)`产生一个最大值
5. `clamp(min, val, max)`产生一个基于最小值和最大值之间的值，相当于`max(min, min(max, val))`
    * min指定最小值
    * val指定首选值（preferred value），如果首选值小于min，使用min值，首选值大于max，使用max值，首选值在min和max之间使用首选值
    * max指定最大值
6. `<transform-function>`：为`<transform>`提供变形值
7. 产生颜色值的`rgb() | rgba() | hsl() | hsla()`
8. 产生图像值的`url()`
9. 产生图形值`<basic-shape>`中的函数


```css
/* === var() */
:root{
  --main-bg-color: pink
}
/* `var()`使用自定义的属性值 */
div{
  backgruond-color: var(--main-bg-color)
}
/* 可以使用使用逗号提供回退值 */
div{
  backgruond-color: var(--main-bg-color, red)
}
/* === end var() */

/* === min */
width: min(1000px, calc(70% + 100px));
/* === end min */

/* === max */
font-size: max(1.2rem, 1.2vw);
/* === end max */

/* === clamp */
/* fluid typography */
font-size: clamp(1rem, 8vw - 2rem, 3rem);
/* === end  clamp */

```

[回到顶部](#css_docs)


### 默认属性值
css默认属性值，见[css默认属性值](https://www.w3schools.com/cssref/css_default_values.asp)，其中：
1. `<body>`: `margin:8px`
1. `<a>`:`cursor:auo;text-decoration:none`
2. `<h1-h6`: `margin:....;font-size:...`
3. `<ul`: `margin-top: 1em; margin-bottom: 1em;padding-left:40px；list-style-type: disc`
4. 对于可替换元素：成为grid或Flex布局的一部分时，具有不同的默认行为，不会进行拉伸，从根本上避免了布局奇怪地拉伸它们，强制图像拉伸，需要设置`width:100% & height:100%`

```css
body{
    margin: 8px;
}
a{
    cursor: auto;
    text-decoration: none;
}
h1,h2,h3,h4,h5,h6{
    margin: ...;
}
h1{
    font-size: ...;
}
/* 其他标题字体大小*/

ul{
    margin-top: 1em;
    margin-bottom: 1em;
    padding-left: 50px;
    list-style-type: disc;
}
```

[回到顶部](#css_docs)




## 响应式解决方案
响应式解决方案，并不是单一的技术，是实现响应式网页设计的一系列组合方案
1. 提供多个网站版本：为不同设备提供不同网站版本，后端判断用户设备，选择返回桌面端页面（或移动端）页面，还是302重定向返回移动端（或桌面端）页面，通常具有不同的URL访问，如移动版本，通过m.example.com这种形式的url访问网站，移动版本会缺少一些桌面版本的功能，这种响应式解决方案：
    * 适用于功能复杂，性能要求高的网站
    * 需要维护至少两个站点
    * 多了一次重定向
2. 媒体查询
3. Flexible grids响应式布局
4. 响应式尺寸
5. 响应式图片
6. 响应式设计原则
    * 小屏幕显示高优先级的内容
    * 提供更友好的手指操作链接；支持移动设备习惯（大部分内容右手点击，左手把握设备）
7. 常见的响应式breakpoint：
    * phones：`max-width:600`
    * tablet/large phone：`min-width:768px`
    * laptops/destops：`min-width:992px`
    * larget laptops/large destops：`min-width:1200px`

[回到顶部](#css_docs)

### @media媒体查询
`@media`媒体查询（Media Queries）：
1. `@media`媒体查询：是css at rule，用于指定一个媒体查询，当媒体查询匹配（match），`@media`内的css样式就会被应用，其中
    * `@media`位置：通常在样式表代码顶部（At the top level of code）中定义
    * 移动优先设计（mobile first design）：首先为窄屏设备使用媒体查询创建一列布局（one column layout），然后检查宽屏实现多列布局
2. `@media`语法：`@media <media-type> <logical-operator> (<media-feature>)`
3. `<media-type>`：指定媒体类型，这个值是可选的，前面可以添加`not | only`的`<logical-operator>`值，常用的值：
    * `all`：适用于所有设备，默认为all
    * `screen`：屏幕设备
    * `print`：使用于页面在打印预览模式
4. `<logical-operator>`：用于组合媒体查询的操作符
    * `and`：如果存在`<media-type>`，用于连接`<media-type>`和`<media-feature>`，以及组合多个`<media-feature>`，
    * `not`：用于否定媒体查询，如果在逗号分隔的媒体查询列表中，仅仅否定该位置的媒体查询
    * `only`：整个媒体查询匹配才会应用样式，在避免老版本浏览器引用样式很有用，如不使用`only`老版本浏览器`screen and (max-width: 500px)`解释为`screen`，使用了`only`，一定要指定`<media-type>`
    * `,`：组合多个媒体查询为一个规则
5. `<media-feature>`：指定用户浏览器的特征，每一个`<media-feature>`都是被`()`包围，常用`<media-feature>`值：
    * `width | min-width | max-width`：视口宽度
    * `height | min-height | max-height`：视口高度
    * `device-width`：设备宽度，可添加max/min前缀
    * `device-height`：设备高度，可添加max/min前缀
    * `device-aspect-ratio`: 设备宽高比，可添加max/min前缀，如` @media screen and (device-aspect-ratio: 16/9)`
    * `orientation`：视口方向（orientation），可能的值是`portrait | landscape`，portrait是纵向，landscape是横向
6. Media Queries Level 4 语法：
    * `<media-feature>`可以使用范围，如`@media (30em <= width <= 50em )`
    * `<media-feature>`可以使用not进行否认，如`@media (not(hover)) { ... }`
    * `<media-feature>`可以使用or，如`@media (not (color)) or (hover) { ... }`

```css
/* === width media feature */
/* Exact width */
@media (width: 360px) {
  div {
    color: red;
  }
}

/* Minimum width */
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/* Maximum width */
@media (max-width: 50rem) {
  div {
    border: 2px solid blue;
  }
}



/* Media Queries Level 4 */
@media (height > 600px) {
    body { line-height: 1.4; }
}

@media (400px <= width <= 700px) {
    body { line-height: 1.4; }
}
/* === end width media feature */


/* === orientation media feature */
@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
/* === end orientation media feature */

/* === logic operator */
@media only screen
  and (min-width: 320px)
  and (max-width: 480px) {
    body { line-height: 1.4; }
}

@media screen and (min-width: 600px) and (orientation: landscape) {
    body {
        color: blue;
    }
}


/* `,` operator相当于 or */
@media screen and (min-width: 600px), screen and (orientation: landscape) {
    body {
        color: blue;
    }
}

@media not all and (orientation: landscape) {
    body {
        color: blue;
    }
}

/* 如果是一个800像素宽的屏幕设备，媒体语句将会返回真 */
/* 如果我是一个500像素宽的横屏手持设备，
  尽管第一部分因为宽度问题而不匹配，第二部分仍会成功，因此整个媒体查询返回真 */
@media (min-width: 700px), handheld and (orientation: landscape) { ... }
/* === end logic operator */

```

[回到顶部](#css_docs)

### 其他形式的媒体查询
除了使用`@media`媒体查询，还有其他形式的媒体查询：
1. `<style>|<link>|<source>`和其他具有media属性的HTML元素
2. 监测媒体状态的JavaScript方法：
    * `Window.matchMedia()`
    * `MediaQueryList.addListener() `

```html
<!-- link元素中的CSS媒体查询 -->
<!-- 即使媒体查询返回false，<link> 标签指向的样式表也将会被下载(但是它们不会被应用) -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
```

[回到顶部](#css_docs)

### flexible grid响应式布局
flexible grid响应式布局：
1. 描述：在内容变得不可读的时候，增加breakpoint，改变样式使得内容可读
2. 早期响应式布局使用弹性浮动布局（Flexible floated layouts），使用`float`和`width: <percentage>`，布局中元素总宽度不能超过100%，如某一列宽度为60px，在960px的环境下，设置宽度为`width: 6.25%`，这是过时的布局方法
3. 现代布局方法默认是响应式的，如
    * flexbox
    * grid
    * multi column

```css
/* === 早期使用`float`和`width: <percentage>`创建弹性布局 */
.col { 
  width: 6.25%; /* 60 / 960 = 0.0625 */ 
} 

/* float + media query 例子*/
@media screen and (min-width: 600px) {
    .col1 {
        width: 31.24999999%;
        float: left;
    }
    .col2 {
        width: 64.58333331%;
        float: right;
    }
}
/* === end 早期使用`float`和`width: <percentage>`创建弹性布局 */
```

[回到顶部](#css_docs)


### 响应式尺寸值
不同设备和媒体查询条件下，px尺寸显示会不一致，如pc和移动端都设置`font-size: 16px`，但移动端字体会显得很小。应用响应式尺寸值：
1. 视口（viewport）：浏览器显示内容的屏幕区域
    * 布局视口（layout viewport）：不设置网页viewport的情况下，pc端的网页默认以布局视口为基准，在移动端进行展示，因此，会出现根植于pc端的网页在移动端展示很模糊
    * 视觉视口（visial viewport）：浏览器内看到的网站的显示区域，用户可以通过缩放查看网页的显示内容，从而改变视觉视口
    * 理想视口（ideal viewport）：在给定的物理设备像素情况下，最佳的布局视口
2. viewprt meta的需求：手机端与PC端视口存在差异，电脑端的视口宽度等于分辨率，而移动端的视口宽度跟分辨率没有关系，宽度默认值是设备厂家指定的，移动端视口通常设置为980px，因为iPhone推出并且人们开始在小手机屏幕上查看网站时，最初各个网站还没有手机端网页，用户不得不用手机访问电脑版的网页，用手机访问电脑版网页的时候，绝大多数 PC 网页的布局宽度是980px，所以将移动端视口设置为980px，旁边刚好没有留白，不过页面缩放后文字会变得非常小，用户需要手动放大缩小才能看清楚，体验非常差
3. viewport meta：因为pc端的网页默认以布局视口为基准，所以为了使得移动端获得理想视口，可以设置`<meta name="viewport" content="width=device-width,initial-scale=1">`，通常需要设置：
    * `width=device-width`：视口宽度等于设备宽度
    * `initial-scale =1.0`：控制初始缩放比例
4. 不同设备的px自适应：在不同设备下，1px所表示的物理像素大小是不同的，因此一套样式是不能实现各端的自适应。通常采用媒体查询的方式，针对不同多媒体类型和分辨率采用不同的样式规则，如
    * PC端有一个750 * 1134的设计稿，要布局在分辨率为980的pc端设备，则设计稿上1px相当于`750设计像素/pc设备980分辨率 = 0.76px`
    * PC端有一个750 * 1134的设计稿，要布局在分辨率为375的移动端设备，则设计稿上1px相当于`750设计像素/pc设备375分辨率 = 2px`
5. `<percentage>`：百分比存在一些缺点，首先是需要根据设计稿，换算为百分比单位；然后各属性使用百分比，相对元素并不唯一
    * 子元素`width & height`的百分比相对于子元素的直接父元素的`width & height`
    * 子元素的`top & right & bottom & left`的百分比相对于非static父元素定位
    * `padding & margin`的百分比相对与直接父元素的width，与父元素的height无关
    * `border-radius`的百分比则是相对于自身元素的width
6. rem：rem相对于根元素（`<html>`元素）`font-size`计算的尺寸，如设置了`<html>`元素`font-size:16px`，则`1rem = 16px`；响应式设计中，可以动态设置设置根元素HTML的`font-size`实现响应式布局，通常
    * 拿到PSD设计稿后，给HTML根元素设置一个容易计算的`font-size`属性值，如`fong-size:100px`，将设计稿中的像素值转换为rem值，这里将像素值除以100就可以得到rem值，实际开发中一般通过自动转换工具将px转换为rem，如`px to rem`；
    * 假如设计稿宽度为640px，设备宽度可以通过`document.documentElement.clientwidth`获得，则根元素的`font-size`的值可以设置为`document.documentElement.clientwidth/640`
    * rem单位的缺点：在响应式布局之中，不许使用javascript来动态控制根元素font-size的大小；css样式与js代码有一定的耦合
7. vw/vh：相对于视口的值，如果这个单位应用于文字，并不能缩放文字大小，可以使用`calc()`配合`rem | em | vw`实现文本的视口响应式，如`font-size: clac(1.5rem + 3vw)`


```js
// === 根据当前屏幕的宽度和设计稿的宽度来计算font-size值
// # 设计稿宽度为 640px
let designWidth = 640; // 设计稿宽度
let deviceWidth = document.documentElement.clientwidth; // 设备宽度
let ratio = deviceWidth/deviceWidth;
document.documentElemnt.fontSize = ratio * 100 + 'px'
// === end 根据当前屏幕的宽度和设计稿的宽度来计算font-size值
```

[回到顶部](#css_docs)



### 响应式图片
响应式图片（responsive images）：
1. 不同设备，媒体查询条件下，会出现分辨率切换（Resolution switching）问题：
    * 当图片宽度大于设备宽度，图片会溢出，为了避免溢出，通常为图片设置`max-width:100%`（既能保证图片会按自身的比例进行自适应，又能保证图片不会溢出容器），`max-width:100%`的缺点式在小设备显示大图片，浪费带宽（特殊情况，高解决方案屏幕high resolution screens的设备需要大图片显示更清晰）
    * 对于小的光栅图（raster image），如果显示比原尺寸大，就会有颗粒状模糊出现
2. 矢量图片看起来适合解决不同设备图片加载的问题，但是矢量图片不适用所有图片类型，矢量图片对于简单图形，路径，元素都适用，但是创建复杂有细节的照片（photo）很复杂
3. 创建响应式图片：
    * 通过`<img>`的`sizes | srcset`属性解决分辨率切换（Resolution switching），是不同资源的切换：首先查询设备宽度，然后从`sizes`属性找到适合的媒体条件，得到对应的图片插槽宽度，从`srcset`属性加载和图片插槽宽度一致宽度的图片，如果不存在，选择不比图片插槽宽度大的第一张图片
    * 通过图片的`srcset`属性配合css设置图片`width`，由图片分辨率宽度和css像素宽度比例，由浏览器选择图片
    * 通过`<picture>`元素设置响应式图片
4. 不适用css属性或者javascript，使用html属性实现响应式图片的原因：
    * 减少了页面加载时间（一般能减少加载时间的20%），为了当浏览器开始加载一个页面, 它会在主解析器开始加载和解析页面的CSS和JavaScript之前先下载 (预加载) 任意的图片
    * 这个缺点是不能先加载`<img>`元素后, 再用JavaScript检测可视窗口的宽度，再动态地加载小的图片替换已经加载好的图片，这种行为不利于用户体验
5. 图片服务器：浏览器访问服务器照片时带上浏览器useragent或者url参数，服务器根据不同useragent或者url参数返回不同的图片

```html
<!-- === 通过图片的`sizes | srcset`属性创建响应图片 -->
<!-- srcset属性定义了浏览器选择的图片列表，列表由逗号分割 -->
<!-- sizes属性定义媒体条件，以及对应的图片插槽宽度 -->

<!-- max-width:600px 480px表示当视口少于600px，选择480px的图片插槽宽度 -->
<img srcset="elva-fairy-480w.jpg 480w,
elva-fairy-800w.jpg 800w" sizes="(max-width: 600px) 480px,
800px" src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
<!-- === end 通过图片的`sizes | srcset`属性创建响应图片 -->


<!-- === 通过图片的`srcset`配合css设置相同图片大小创建响应式图片 -->
<!-- 当1个设备像素代表每一个css像素，应用elva-fairy-320w.jpg，这里1x自动应用 -->
<!-- 当两个设备像素代表一个css像素，即2x，应用elva-fairy-640w.jpg -->
<!-- 选择更高质量的版本 -->
<img srcset="elva-fairy-320w.jpg,
elva-fairy-480w.jpg 1.5x,
elva-fairy-640w.jpg 2x" src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">
<!-- === end 通过图片的`srcset`配合css设置相同图片大小创建响应式图片 -->


<!-- === picuture元素创建响应式图片 -->
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
  <source media="(min-width: 800px)" srcset="elva-800w.jpg">
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
</picture>
<!-- === end picuture元素创建响应式图片 -->

```
[回到顶部](#css_docs)







## 附录


[回到顶部](#css_docs)

### 附录属性

[回到顶部](#css_docs)



#### border-image
border-image定义边框图像
```css
/* === backgruond-image-source 指示边框图像的url */
border-image-source: url('/media/examples/border-diamonds.png');
/* === backgorund-image-source 指示剪切边框图像的上右左下四个角 */
/*
下面例子假如背景图像是300px * 240px，
则剪切的图像大小是 60px 90px 30px 60px
其中60px = 25% * 240px， 其他结果，依次类推
*/
border-image-slice: 25% 30% 15% 20%;
/* === border-image-width 指示边框图像的宽度*/
border-image-width: 20px;
/* === border-image-repeat 是处理上右下左四个角之后边框图像的重复形式 */
border-image-repeat: repeat| stretch | round
/* === border-image 是以上边框图像属性的缩写 */
border-image: url('/media/examples/border-diamonds.png') 30;

/* border-image还可以使用渐变定义，渐变详情见背景-background-image中关于渐变的内容 */
border-image: linear-gradient(red, blue) 27 / 35px;
```

[回到顶部](#css_docs)

### BFC块级格式上下文
BFC块级格式上下文：
1. 描述：块级格式上下文（Block Formatting Context），规定内部的Block box如何布局
2. BFC规则：
    * BFC是一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
    * BFC内部的元素box独占一行，在在垂直方向上，一个接一个放置
    * BFC内部的元素box垂直方向的距离由`margin`决定，内部相邻或者嵌套的元素box，之间没有其他阻挡（比如边框、非空内容、padding等的阻挡），margin会发生折叠，具体值为：两个相邻的外边距都是正数时，折叠的结果是它们两者中较大的值；两个相邻的外边距都是负数时，折叠的结果是它们两者中绝对值较大的值；两个外边距一正一负时，折叠的结果是两者相加的和
    * BFC内每一个元素box的margin box左边与包含块的border box左边接触
    * BFC区域不会与float box 重叠（默认情况下，文字围绕着浮动元素排列）
    * 计算BFC的高度时，浮动元素也会参与计算
3. 根据BFC规则，应用场景有
    * margin折叠：同一个BFC内相邻的两个box垂直外边距会折叠，如果不想外边距折叠，只需要为其中一个box创建新的BFC；子元素设置`margin-top`作用在父亲元素上，而不是子元素，这是要注意的点
    * 使得内容不和浮动元素重叠：默认情况下，文字围绕着浮动元素排列，为内容创建BFC，利用BFC的区域不会与float box重叠的特性，创建自适应两栏布局
    * 因为内部元素设置浮动之后，不参与高度计算，有可能导致高度塌陷，利用计算BFC的高度时，浮动元素也会参与计算的规则，设置容器为BFC可以解决高度塌陷
4. 创建BFC的方式
    * 根元素html
    * `dispaly: inline-block | table | flow-root | flex | inline-flex`
    * `float`
    * `postition: absolute | fixed | sticky`
    * `overflow: !visible`
5. 其他格式上下文
    * IFC（Inline Formatting Context) 指的是内联格式上下文，IFC的线框(line box)由其包含元素中最高的的实际高度决定，不受垂直方向上的margin/padding的影响。
    * Flex Formatting Context 指的是flex格式上下文，容器内的元素都是伸缩元素
    * Grid Formatting Context 指的是grid格式上下文，可以在网格容器上定义行和列，在具体的网格item定义网格行和列实现布局

[回到顶部](#css_docs)


### css兼容性和样式统一
css兼容性和样式统一：
1. 设备兼容：对于不同的设备样式兼容，使用响应式
2. 浏览器兼容：根据出现兼容问题的浏览器加载样式表，这种方法需要使用服务器端渲染
3. reset&normalize&neat方法进行样式兼容：
    * reset：将不同浏览器的的元素的默认样式清除，使样式保持一致
    * normalize：没有去掉所有的默认样式，而是保留了有用的一部分，纠正了一些错误样式，使样式保持一致
    * neat：将reset&normalize结合，根据实际，对部分元素进行样式清除，对部分元素进行样式重写
4. 样式兼容的工具：
    * normalize.css库
    * 使用`autoprefixer | postcss | prefix free...` 自动生成CSS属性前缀
    * 使用包装好的css库，如bootstrap
5. 自定义reset样式文件，通常要注意：
    * 浏览器默认margin paddin不同。解决方案是用全局的`*{ margin:O;padding:O;}`来统一它们
    * 不同元素在不同浏览器盒子模型处理不一致，通常设置`*,*:before,*:after{box-sizing:border-box}`统一
    * 不同浏览器的样式统一，添加浏览器前缀`-ms- | -moz- | -webkit- | -o-`，标准语法与带有前缀的属性语法在不同浏览器可能具有不同表现，一般将标准语法放在最后书写，浏览器css属性的前缀通常通过工具自动生成，如`postcss | autoprefixer`
    * 某些浏览器中，表单元素默认情况下不继承字体样式。因此，确保表单字段使用在正文或父元素上定义的字体，则应将此规则添加到CSS中
6. 优雅降级和渐进增强：，逐步减少功能的过程
    * 渐进增强（progressive enhancement）：渐进增强一开始考虑兼容性，从基础的功能开始设计，针对低版本浏览器构建页面，保证基本功能，然后针对高级浏览器进行功能增强，达到更好的用户体验
    * 优雅降级（graceful degradation）：优雅降级从完整的功能设计到考虑兼容，然后再针对低版本浏览器进行兼容

```css
/* 表单reset */
button, 
input, 
select, 
textarea { 
  font-family : inherit; 
  font-size : 100%; 
} 
```

### css雪碧图（sprities）
css雪碧图（sprities）：
1. 描述：将一个页面涉及到的所有零星图片包含到一张大图中去，访问页面时，载入的图片就不会像以前那样一幅一幅地慢慢显示出来了。利用CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能,CSS Sprites能减少图片的字节

[回到顶部](#css_docs)

### css预处理器和后处理器
css预处理器和后处理器：
1. CSS预处理器，用来预编译css, 增强了css代码的复用性和便于维护，常用css预处理器有`sass | less | stylus...`，预处理器一般提供了
    * 变量
    * 重用代码：@mixin & @iinclue 混合器， @extend 继承，@import 导入模块，函数
    * 提供了控制指令，如条件，循环
    * 提供了嵌套层级
    * 函数
2. CSS后处理器：根据CSS规范处理CSS，让其更有效，常做的是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题，常用的CSS后处理器如`posscss...`

[回到顶部](#css_docs)

### CSS隐藏元素
CSS隐藏元素：
1. CSS隐藏元素的方法
    * `display: none`
    * `visibility: hidden`
    * `opacity: 0`
    * `width: 0 & heiht: 0`
    * `z-index: -10000` 设置z-index值使其它元素遮盖该元素也算是一种隐藏
    * `transform: scale(0,0)`
    * `margin-left: -100%`
    * `position: relative; left: -100%` & `position:absolute; left:-9999px` 置于屏幕之外
    * `overflow: hidden`  隐藏元素溢出部分，占据空间,无法响应点击事件
    * `text-index: -9999px`: 只适用于block元素中的文本
2. `opacity: 0 & visibility: hidden & display: none`隐藏元素的区别
    * 是否占据空间：`display:none` 属性的元素不占据空间，脱离文档流，不能点击； `visibility: hidden`属性占据空间，不能点击；`opacity: 0` 占据空间，可以点击
    * 继承性：`display: none `是非继承属性，子孙元素一起消失，修改子孙节点属性无法显示；`visibility: hidden` ，子元素继承该属性，子，通过设置visibility: visible 可以让子孙节点显式；`opacity: 0` ，子元素也会继承opacity，子元素可以重新设置opacity值使得子元素显示
    * 使用场景：`display:none`显示出原来这里不存在的结构；`visibility: hidden` 显示不会导致页面结构发生变动；`opacity: 0`可以配合transition一起使用
    * 使用性能：修改`display:none`通常会造成文档重排(回流)；修改`visibility: hidden`只会造成本元素的重绘；修改`opacity: 0 `只会造成本元素的重绘

[回到顶部](#css_docs)

### 浏览器开发工具调试
浏览器开发工具调试（browser DevTools debug）：
1. 右键查看源代码（view source）
2. 视察元素（inspect element），`shift + ctrl + c`
3. 编辑css规则，如`uncheck css rule | edit css rule | add new css rule...`
4. computed -> 查看元素的box model和相关属性

[回到顶部](#css_docs)

### CSS Validator
[CSS Validator](https://jigsaw.w3.org/css-validator/)

[回到顶部](#css_docs)

### css代码风格指导
css代码风格指导（css coding style guide）：
1. 保持一致性，如相同的命名约定，选择一种描述颜色的方法或保持一致的格式，代码缩进风格等
2. 代码可读
    * 利用好换行和空格
    * 注释：在样式表中的各个不同功能部分添加分割注释，方便维护；一些属性如果必须，可以解释为什么使用
3. 代码组织，如
    * 第一部分通常为`GENERAL STYLES`，在样式表开头为一些元素设置通用默认样式
    * 然后工具类`utility`，该类多次被多个元素使用
    * 接着是为全站所有内容设置的样式`SITEWIDE`
    * 最后是页面各个部分的单独样式`STORE PAGES`
4. 避免不必要的重复，适当合并不同类里的重复规则
5. 避免使用过度使用selector，因为浏览器从最右边的选择器，向左依次匹配，所以
    * 选择器匹配语句链越短，浏览器的匹配速度越快， 解析速度：`ID > class > element > universal`，虽然ID选择器速度最快，但是会降低代码的可读性，不方便维护；后代选择器是低效的
    * 避免最右边的选择器使用`标签和通用选择器`作为选择器，这样会匹配大量的元素，浏览器必须要进行大量的工作，去判断这些元素的父元素们是否匹配
6. 样式表文件很大，可以进行拆分
7. 搞清楚哪些CSS属性会触发重新布局（reflow）、重绘（repaint）和合成（compositing）
8. 来自社区的css代码风格指导
    * OOCSS
    * BEM，[bem 指导](https://css-tricks.com/bem-101/)
9. css构建系统（build system）
    * `pre-processors`：常用的如sass
    * `post-processors`：
10. 构建系统中css架构：需要将CSS划分为不同的模块，一个模块负责一个功能
    * base: 通用CSS，比如重置样式，动画工具等
    * components：用于构建也main的所有组件，如按钮，表单，弹窗等
    * layout：页面布局相关，如grid布局，flexbox布局，页面，页脚等
    * pages：页面之间的不同样式
    * themes：应用不同的主题
    * abstracts：变量，函数等辅助工具
    * vendors：第三方css，如bootstrap，iconfont等
    * main.css: 使用`@import`导入所有需要的css文件
11. css编码技巧
    * 减少代码的重复（DRY，dont't repeat again)
    * 减少改动需要编辑的代码。值相互依赖，使用相对单位（相对于父级字号em，相对于根元素字号rem）
    * 可以使用一些关键字代替属性值，如`currentColor`随着元素的`color`属性变化，`inherit`继承父级的属性
    * 媒体查询会增加成本，它应该是最后的手段。以下避免使用媒体查询的建议：布局上使用flexbox和grid 布局；使用响应式尺寸值；使用`max-width`，尤其是替换元素img，object，video，iframe；背景图片自动铺满容器 `background-size: cover`
12. 其他
    * 不滥用web字体。web fonts通常体积庞大，而且一些浏览器在下载web fonts时会阻塞页面渲染损伤性能
    * 不声明过多的font-size：这是设计层面的问题，设计精良的页面不会有过多的font-size声明
13. 某些属性对某些元素是无效的，避免使用，如
    * `display:inline`后不应该再使用width、height、margin、padding以及float
    * `display:inline-block`后不应该再使用float
    * `display:block`后不应该再使用vertical-align
    * `display:table-*`后不应该再使用margin或者float

```css
/* === GENERAL STYLES */
/* === UTILITIES */
/* === SITEWIDE */
/* === STORE PAGES */
```
[回到顶部](#css_docs)
