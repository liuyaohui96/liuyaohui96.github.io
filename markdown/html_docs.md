
# html_docs
1. [html_intro](#html_intro)
2. [doctype声明](#doctype声明)
3. [html元素](#html元素)
4. [head元素](#head元素)
    1. [meta元素](#meta元素)
    2. [base元素](#base元素)
    3. [link元素](#link元素)
    4. [style元素](#style元素)
    5. [script&noscript元素](#scriptnoscript元素)
    6. [title元素](#title元素)
    7. [template元素](#template元素)
5. [body元素](#body元素)
6. [文档结构元素](#文档结构元素)
7. [文本元素](#文本元素)
    1. [标题元素和段落元素](#标题元素和段落元素)
    2. [列表元素](#列表元素)
    3. [其他文本元素](#其他文本元素)
8. [超链接元素](#超链接元素)
9. [图片元素](#图片元素)
    1. [img元素](#img元素)
    2. [picture元素](#picture元素)
    3. [svg](#svg)
        1. [SVG添加到页面的方式](#svg添加到页面的方式)
        2. [svg绘制](#svg绘制)
        3. [svg的http header](#svg的http-header)
    4. [常见图片格式](#常见图片格式)
    5. [光栅图和矢量图片](#光栅图和矢量图片)
10. [音频元素](#音频元素)
    1. [audio元素](#audio元素)
    2. [常用音频格式（待整理）](#常用音频格式待整理)
11. [视频元素](#视频元素)
    1. [video元素](#video元素)
    2. [视频字幕](#视频字幕)
    3. [常用视频格式（待整理）](#常用视频格式待整理)
12. [其他嵌入元素](#其他嵌入元素)
    1. [iframe](#iframe)
    2. [object元素和embed元素](#object元素和embed元素)
13. [表格元素](#表格元素)
14. [表单元素](#表单元素)
    1. [form元素](#form元素)
    2. [input元素](#input元素)
        1. [input的type类型](#input的type类型)
    3. [textarea元素](#textarea元素)
    4. [label元素](#label元素)
    5. [select元素](#select元素)
    6. [datalist元素](#datalist元素)
    7. [progress元素](#progress元素)
    8. [meter元素](#meter元素)
    9. [output元素](#output元素)
    10. [fileset & lengend元素](#fileset--lengend元素)
    11. [button](#button)
15. [canvas元素](#canvas元素)
16. [其他元素](#其他元素)
    1. [交互元素](#交互元素)
    2. [地图元素](#地图元素)
    3. [figure & figurecapton](#figure--figurecapton)
    4. [source元素](#source元素)
17. [特殊字符渲染](#特殊字符渲染)
18. [html属性](#html属性)
    1. [data-*属性](#data-属性)
    2. [lang属性](#lang属性)
    3. [html全局属性](#html全局属性)
19. [附录](#附录)
    1. [html元素分类](#html元素分类)
    2. [块级元素，行内元素和inline-block元素的特点](#块级元素行内元素和inline-block元素的特点)
    3. [其他文本元素](#其他文本元素-1)
    4. [web quality（无障碍&可访问性)](#web-quality无障碍可访问性)
    5. [html语义化](#html语义化)
    6. [HTML validation](#html-validation)
    7. [SEO优化](#seo优化)
    8. [加快html页面加载](#加快html页面加载)

## html_intro
1. html(hyper text markup language)：定义网页内容的结构（structure）
  * hyper text：网页间的链接（links），不同网页之间的链接组成world wide web
  * markup：使用markup标注网页的text，image和其他内容。html元素由`<`和`>`包围标签（tag）组成，tag大小写不敏感（case insensitive），即`<Title>`, `<TITLE>`，相当于 `<title>`
2. html结构：`<tab attribute="value>content</tab>`
2. 注释：`<!--  -->`
3. HTML内容空白（HTML_content_whitespac）处理：无论内容里有多少whitespace（space character/ line break）都会被渲染（render）为一个sapce
4. Html和XHTML的区别：
    * HTML是一种基本的WEB网页设计语言；XHTML是基于XML的、语法严格的设计语言
    * XHTML元素必须有根元素，正确地嵌套，元素必须关闭，标签必须小写，属性必须使用双引号；而HTML 没有这些限制
5. html5的特性
    * 新增了一些语义化元素
    * 新增了表单控件类型以及属性
    * 音视频支持
    * 新增了一些api
    * 新增自定义数据`data-*`属性
    * 移除了一些产生负面影响的元素，如`frame | frameset | applet`等
    * 已处理一些表现元素`big | center | font | u | s`

```html
<!-- comment -->

<!-- === 特殊字符渲染 -->
<!-- < -->
&lt;

<!-- > -->
&gt;

<!-- & -->
&amp;

<!-- " -->
&quot;

<!-- ' -->
&apos;
```

[回到顶部](#html_docs)



## doctype声明
`<!DOCTYPE>` 是文档类型声明，必须是html文档第一行，`<html>`元素之前，作用是告诉web浏览器按照哪个版本html规范去解释html。浏览器本身分为三种模式:
1. 完全标准模式（full standards mode）：HTMl5的doctype`<!DOCTYPE html>`声明。行为符合html和css标准规定的行为
2. 怪异模式，如果html中省略了doctype，浏览器进入Quirks模式的怪异状态，在这种模式下，不同浏览器在怪异模式下的处理也是不同的（Navigator 4和Internet Explorer 5中的非标准行为）如，所以一定要在html开头使用doctype
3. 几乎标准模式（almost standards mode）：由很小量的怪异行为

> HTML4.01基于通用标记语言（Standard Generalized Markup Language），需要引用文档类型定义（Document Type Definition），HTML5不基于用标记语言（SGML），所以不需要引入DTD

```html
<!DOCTYPE html>
```

[回到顶部](#html_docs)

## html元素
`<html>`元素：
1. 描述：文档的根元素（root element）
2. 常用属性：
    * lang：这是可访问性的一部分，帮助屏幕阅读技术（screen reading technology）决定正确的语言，如果不设置，语言将默认由操作系统默认语言决定

```html
<!DOCTYPE html>
<html lang="en">
  <head>...</head>
  <body>...</body>
</html>
```

[回到顶部](#html_docs)


## head元素
`<head>`元素
1. 描述：包含文档（document)的机器可读信息（machine-readable information)，即metadata，如标题（title），脚本（scripts），样式表（style sheets）等，如果该元素被忽略，浏览器会自动创建
2. 父亲元素：`<head>`通常作为`<html>`的第一个孩子元素
3. 孩子元素：
    * meta
    * base
    * link
    * style
    * script & noscript
    * template
    * title
4. 常用元素属性（attributes）：全局html属性（global attributes）


```html
<head>
    <!-- === 用charset指定字符集 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<!-- vscode -->
<head>
    <!-- === 用charset指定字符集 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
```

[回到顶部](#html_docs)


### meta元素
`<meta>`元素：
1. 描述：表示那些不能由其它HTML元相关元素表示的元数据(metadata)信息
2. 属于空元素
3. 根据meta元素的属性分类为：
    * name属性 & content：文档级元数据，适用于整个页面，content为对应的值
    * http-euqiv属性 & content：是一个pragma指令，Web服务器提供的有关网页的信息，http-euqiv属性是对应的http header，content为对应http header的值
    * charset属性：字符编码声明
    * itemprop属性：用户定义的metadata
4. meta的常见的name属性值：
    * author：文档作者
    * description：简介的文档描述。一些浏览器中是书签的默认描述。在搜索引擎结果页面可以看到
    * keywords：用逗号分隔的网页内容的描述
    * generator：产生网页的软件标记
    * application-name：网页运行的应用名称
    * referrer：控制HTTP Referer header，对于的content属性值有：
        * origin：发送文档的origin
        * no-referrer：不发送HTTP Referer header
        * same-origin：为同源请求发送完整URL，cross-origin请求不会包含Referer header
        * origin-when-cross-origin：为同源请求发送完整URL，其他情况发送origin
        * 其他值待补充
    * viewport：viewport的初始大小，对应的content属性值有：
        * width：正整数值或`device-width`
        * height：正整数值或`device-height`
        * initial-scale：0.0 到 10.0之间，定义device width和viewport width之间的比率
        * maximum-scale：0.0 到 10.0之间，定义最大缩放，浏览器设定会忽略此规则
        * minimum-scale：0.0 到 10.0之间，定义最小缩放，浏览器设定会忽略此规则
    * robots：指定搜索引擎如何收录页面，对应的content属性值有：
        * index：允许对页面进行收录，默认
        * noindex：指示不对页面进行收录
        * follow：允许对页面的链接收录
        * nofollow：指示收录页面，但不收录页面上链接的其他页面
4. meta常见http-euqiv属性：
    * content-type：定义文档的MIME type & character encoding，如content属性的值是`"text/html; charset=utf-8"`，相当于`<meta charset="UTF-8">`
    * x-ua-compatible：如果定义了，content的值必须是`IE=edge`
    * refresh：指定时间重新刷新，content的值是非负数正值，还可以在值后附加`;url=...`指定时间后重定向到指定url


```html
<!-- === 使用name指定要设置的属性，使用content指定要设定的属性值 -->
<!-- author指示作者 -->
<meta name="author" content="liuyaohui">
<!-- description -->
<meta name="description" content="how to describe the document">
<!-- keyword -->
<meta name="keyword" content="keyword1, keyword2, ..." />
<!-- robots 指定搜索引擎如何收录页面 -->
<!-- noindex 指示不对页面进行收录 -->
<meta name="robots" content="noindex">
<!-- nofollow 指示收录页面，但不收录页面上链接的其他页面 -->
<meta name="robots" content="nofollow">


<!-- viewport -->
<meta name="viewport" content="...">
<!-- 
the content value may be
1. width or device-width
2. height or device-height
3. initial-scale: A positive number between 0.0 and 10.0
4. maximum-scale: A positive number between 0.0 and 10.0
5. minimum-scale: A positive number between 0.0 and 10.0
6. user-scalable: yes or no
 -->
<!-- example -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- 主要针对双内核浏览器，使用webkit内核 -->
<meta name="renderer" content="webkit">
<!-- === end meta name属性 -->


<!-- === meta http-equiv属性 + content -->
<!-- prama 指示不进行缓存 -->
<meta http-equiv="pragma" content="no-cache">
<!-- expires缓存 -->
<meta http-equiv="expires" content="Fri, 04 Apr 2014 23:59:59 GMT">

<!-- 如果content 只包含一个正整数,则是重新载入页面的时间间隔(秒) -->
<!-- 如果content 包含一个正整数并且跟着一个字符串,则是重定向到指定链接的时间间隔(秒) -->
<meta http-equiv="refresh" content="">
<!-- Redirect page after 3 seconds -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org">

<!-- IE浏览器以edge版本进行渲染 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!-- === end meta http-equiv属性 -->


<!-- === 用charset指定字符集 -->
<meta charset="UTF-8">
```


[回到顶部](#html_docs)


### base元素
`<base>`元素：给页面上所有的URL相对地址提供一个基础，文档只能有一个`<base>`元素，如果没有`<base>`元素，默认的baseURI是`location.href`。`<base>`元素常用属性：
1. href属性：指定地址，可以是相对地址和绝对地址
2. target属性：`a | area | from`没有显式target属性时的导航（navigation ）行为
    * `_self`：默认值，以当前窗口进行导航
    * `_blank`：以新窗口形式进行导航
    * `_parent`：如果当前窗口时在iframe中，在父级窗口进行导航。如果没有父亲窗口，相当于`_self`
    * `_top`：在最顶层父级窗口进行导航

```html
<base href="https://time.geekbang.org" target="_blank"/>

<!-- === -->
<base href="https://example.com">
<!-- 相当于链接到https://example.com/#anchor -->
<a href="#anchor">To anchor</a>
```

[回到顶部](#html_docs)


### link元素
`<link>`元素：
1. 描述：定义本页面与外部资源的链接，如样式表，网站icon
2. 位置：可以在`<head>`或`<body>`元素内，为了和body内容割裂，一般放在`<head>`元素内
3. 常用属性：
    * rel属性：定义link的类型，rel时relationship简写
        * stylesheet：样式表
        * icon: favicon
        * author: 作者网站
        * next：webTV支持该属性，指示预加载下一个页面
        * preload：指示浏览器预加载该资源
    * href属性：定义资源路径
    * crossorigin：fetch资源的时候CORS是否被使用，值有
        * anonymous：cross-origin请求执行，但是不会发送credential（例如cookie，HTTP Basic authentication）
        * use-credentials：cross-origin请求执行并发送credential
    * prefetch属性：指示下一次导航是否需要该资源，然后浏览器收集便于下一次反应更加迅速
    * sizes：定义大小
    * as属性：当rel属性值是`rel="preload" | rel="prefetch"`，用于指定加载的类型，有以下值
        * document：`<iframe> | <frame>`
        * audio: `<audio>`
        * video: `<video>`
        * track: `<track>`
        * style: `<link rel=stylesheet> | CSS @import`
        * script: `<script> | Worker importScripts`
        * font: `CSS @font-face`
        * image: `<img> | <picture> with srcset or imageset attributes | SVG <image> | CSS *-image rules`
        * fetch: `fetch, XHR`
        * embed: `<embed>`
        * object: `<object>`
        * worker: `Worker, SharedWorkers`
    * title属性：提供语义，在样式表中指示可以辨别不同`default stylesheet| alternate stylesheet`的不同版本
    * type属性：指示链接资源的MIME类型
    * media属性：指定媒体类型/媒体查询条件下加载外部资源，通常在样式表资源加载中使用


```html
<!-- === 样式表 -->
<!-- Including a stylesheet -->
<link href="main.css" rel="stylesheet">

<!-- choose which style sheet to use by choosing it 
from the View > Page Style menu.
This provides a way for users to see multiple versions of a page -->
<!-- 不同 -->
<link href="default.css" rel="stylesheet" title="Default Style">
<link href="fancy.css" rel="alternate stylesheet" title="Fancy">
<link href="basic.css" rel="alternate stylesheet" title="Basic">

<!-- 可以设置media，根据媒体类型和属性加载指定外部资源 -->
<link href="print.css" rel="stylesheet" media="print">
<link href="mobile.css" rel="stylesheet" media="all">
<link href="desktop.css" rel="stylesheet" media="screen and (min-width: 600px)">
<link href="highres.css" rel="stylesheet" media="screen and (min-resolution: 300dpi)">

<!-- === end 样式表 -->


<!-- === icon -->
<!-- the link to site's favicon -->
<!-- icon 需要使用.ico 后缀的文件 -->
<link href="favicon.ico" rel="icon">
 <!-- indicate special icon types for use on various mobile platforms -->
 <!-- 指示在不同手机平台特殊的icon类型 -->
 <!-- type指示链接资源的MIME类型 -->
 <!-- size指示icon的大小 -->
 <link rel="apple-touch-icon-precomposed" sizes="114x114"
      href="apple-icon-114.png" type="image/png">

<!-- Providing icons for different usage contexts -->
<!-- third-generation iPad with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon144.png">
<!-- iPhone with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon114.png">
<!-- first- and second-generation iPad: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png">
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="favicon57.png">
<!-- basic favicon -->
<link rel="icon" href="favicon32.png">
<!-- === end icon -->

<!-- 其他 -->
<!-- preload指示浏览器预加载该资源 -->
<!-- as指示被fetch的内容类型 -->
<!-- crossorigin指示fetch的资源是否是CROS请求  -->
<link rel="preload" href="myFont.woff2" as="font"
      type="font/woff2" crossorigin="anonymous">

<!-- dns-prefetch链接关系类型用于指示将用于获取所需资源的来源，使得用户代理应尽早解析。 -->
<link rel="dns-prefetch" href="//example.com">
```

[回到顶部](#html_docs)


### style元素
`<style>`元素：
1. 描述：用于在文档内定义css样式
2. 位置：必须在`<head>`元素内，通常使用`<link>`元素定义外部样式，可以有多个`<style>`和`<link>`元素，所以要注意顺序
3. 常用属性：
    * media属性：指定媒体类型/媒体查询条件下加载外部资源，通常在样式表资源加载中使用
    * title属性：指定alternative style sheet

```html
<style>
p {
  color: #26b72b;
}
</style>

<style media="all and (max-width: 500px)">
p {
    color: blue;
    background-color: yellow;
}
</style>
```

[回到顶部](#html_docs)

### script&noscript元素
`<script>`元素：
1. 描述：定义脚本或者通过src属性应用脚本
2. 常用属性：
    * src属性：脚本地址
    * async属性：如果应用了，fetch脚本的解析和尽可能的执行同时发生。对于模块脚本，如果应用了async，脚本及其脚本依赖在延迟队列执行，脚本的解析和尽可能的执行同时发生
    * defer属性：如果应用了，会在文档解析完，DOMContentLoaded之前执行。defer属性的脚本会阻止DOMContentLoaded事件的发生，只有应用了src属性的脚本才能使用该属性。模块脚本的defer不起作用，因为默认是defer
    * type属性：指定脚本类型。可能的值：
        * 忽略或者javascript MIME类型
        * module：指定为模块脚本。不同于传统脚本，模块脚本的cross-origin fetch需要使用CORS protocol
    * nomodule属性：浏览器不支持 ES2015 modules将不会执行该，这个可以用于为不支持ES module的浏览器作回退

```html
<script src="javascript.js"></script>

<script>
  alert("Hello World!");
</script>

<!-- Module fallback -->
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

[回到顶部](#html_docs)

### title元素
`<title>`元素在浏览器标题栏显示的文档标题。文档标题和SEO（search engine optimization）有重要影响，通常来说，长标题比短，简介标题更好。文档标题不仅是搜索引擎页面排名的一个参考，也是浏览者在搜索结果页面抓取注意力的重要因素，好的标题：
1. 使用描述性词组，避免一个或两个字的标题
2. 搜索引擎通常显示55–60字符，超过这个的会被隐藏，尽量不要超过
3. 不要使用关键字组合，标题由一系列关键字组成，搜索结果会减少位置

```html
<!-- 定义在浏览器tag显示的标题  -->
<title></title>
```

[回到顶部](#html_docs)


### template元素
`<template>`元素：
1. 描述：HTML内容模板（`<template>`）元素，用于保存客户端内容，内容在加载页面时不会立刻渲染，而是后续由javascript进行渲染



[回到顶部](#html_docs)

## body元素
`<body>`元素：文档的主体内容，只有一个

```html
<html>
  <head>
    <title>Document title</title>
  </head>
  <body>
    <p>This is a paragraph</p>
  </body>
</html>
```

[回到顶部](#html_docs)


## 文档结构元素
1. 更具语义的文档结构元素（document structure element）
    * `<header>`：一种用途是，作为`<body>`的子元素，表示页面的简介内容，通常是导航简介，header元素通常包括logo，搜索表单和其他元素。一种用途是作为`<main> <aside> <section> <article>`元素的内部header
    * `<nav>`：导航元素
    * `<main>`：`<body>`元素的主要内容，包含应用或文档的中心内容和功能，只有一个`<main>`元素
    * `<aside>`: 和文档主内容不相关的部分，通常是sidebar或者call-out box
    * `<footer>`：一种是页面尾部通常包括作者，copyright或者其他相关链接，另一种用途是作为`<main> <aside> <section> <article>`元素的内部header
    * `<article>`：独立可重用的部分。如论坛言论，杂志文章，博客入口，卡片和其他独立的内容，`<article>`通常包含标题元素`h1-h6`
    * `<section>`：文档独立的部分，这个部分不能用其他更具语义的元素表达，相当于以前的`<div>`元素，不过使得这块代码更具语义，`<section>`是文档的outline部分，而`<div>`通常是用于折叠元素的样式应用
2. 没有语义的wrapper元素：有时候需要对一大块元素应用css样式和javascript行为
    * `<div>`：块级（block）的没有语义的wrapper元素，没有更好的语义元素，或者不想增加指定语义时适用
    * `<span>`：行内（inline）的没有语义的wrapper元素，没有更好的语义元素，或者不想增加指定语义时适用
3. 换行元素`<br>`：通常用于文字换行，写诗歌或者地址有用。不要使用`<br>`去产生margin，用css margin控制
4. 段落级别元素（ paragraph-level elements）`<hr>`：视觉上是水平线，用于主题分割（thematic break）


```html
<!-- header -->
<!-- page header -->
<header>
  <h1>Main Page Title</h1>
  <img src="logo.png" alt="logo">
</header>

<!-- article header -->
<article>
  <header>
    <h2>Hello world</h2>
    <p>Hello world</p>
  </header>
  <p>Hello world</p>
</article>
<!-- === end header -->

<!-- === nav-->
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
<!-- === end nav-->

<!-- === main -->
<!-- other content -->

<main>
  <h1>Hello world</h1>
  <p>Hello world</p>

  <article>
    ...
  </article>

  <article>
    ...
  </article>
</main>

<!-- other content -->
<!-- === end main -->

<!-- === aside -->
<!-- <aside> 元素表示一个和其余页面内容几乎无关的部分，通常表现为侧边栏或者标注框-->
<article>
  <p>...</p>
  <aside>
    <p>Hello World</p>
  </aside>
  <p>...</p>
</article>
<!-- === end aside -->

<!-- === footer -->
<footer>
  Some copyright info or perhaps some author
  info for an &lt;article&gt;?
</footer>
<!-- === end footer -->


<!-- ===article -->
<!-- article 独立的，可复用的结构 -->
<!-- 每个<article>，通常包括标题（<h1> - <h6>元素）作为<article>元素的子元素 -->
<article></article>
<!-- ===end article -->

<!-- === section -->
<!-- 一般般通过是否包含一个标题 (<h1>-<h6> element) 作为子节点来辨识每一个<section> -->
<section>
  <h2>Heading</h2>
  <p>Bunch of awesome content</p>
</section>

<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>
<!-- === end section -->

<!-- === br -->
liuyaohui<br>
110 beijing<br>
China<br>
<!-- === end br -->
```

[回到顶部](#html_docs)




## 文本元素
通过文本元素：
1. 使得内容语义化，文本结构合理，用户更好阅读文字
2. 对于其中的标题元素：内容的标题是搜索引擎排名的重要关键字，有些屏幕阅读器从标题中可以提供outline


[回到顶部](#html_docs)


### 标题元素和段落元素
1. 标题元素（heading）`<h1> <h2> <h3> <h4> <h5> <h6>`：
    * 避免使用heading element去改变文字的样式，使用css font-size改变
    * 避免标题等级跳级使用
    * 每个页面只使用一次`<h1>`有利于屏幕阅读器的使用者
    * 有六个等级的标题元素，尽量不要使用超过三个等级的标题元素，深层标题难以导航，建议内容扩展到其页面
2. 段落元素（paragraph）`<p>`


```html
<!-- === heading element -->
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
<!-- === end heading element -->

<!-- === paragraph -->
<p>This is the first paragraph of text.
  This is the first paragraph of text.
</p>
<!-- === end paragraph -->
```

[回到顶部](#html_docs)


### 列表元素
列表（list）元素：
1. 描述：用来表示线性数据结构，如一组数据内容，导航栏，下拉列表等，li除了放纯文本，还可以嵌套`ul或ol`标签，表示树形的数据结构
2. `<ul>`：非排序列表（unordered lists），常用属性：
    * type：不建议使用，非排序列表默认是bullet样式，改变样式使用css`list-tyle-type`，其中`cycle`表示空心圆，`disc`表示实心圆，`square`是正方形样式，浏览器根据列表的嵌套等级自动选择样式
3. `<ol>`：排序列表（ordered list），默认是number样式。常用属性：
    * `start`：设置列表开始计数的整数，通常是阿拉伯数字
    * `reversed`：设置是否是反向列表计数
    * `type`: 排序列表默认是数字样式，`1`表示数字，`i`表示小写罗马数字，`I`表示大写罗马数字，`a`表示小写字母，`A`表示大写字母，通常使用css `list-type-type`设置
4. `<dl>`：描述列表（description list），内部是一组概念（term）和描述（descriptions）
    * 概念用`<dt>`元素表示
    * 描述用`<dd>`元素表示
5. 列表项元素`<li>`：包含在`<ul> | <ol> | <menu>`元素中的元素。常用属性
    * `type`： 非排序列表默认是bullet样式，改变样式使用css`list-tyle-type`，可以覆盖父亲元素的该属性，属性有`cycle`表示空心圆，`disc`表示实心圆，`square`是正方形样式，`1`表示数字，`i`表示小写罗马数字，`I`表示大写罗马数字，`a`表示小写字母，`A`表示大写字母
    * `value`：`<ol>`列表下的`<li>`元素设置计数值

```html
<!-- === 无序列表 -->
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
<!-- === end 无序列表 -->


<!-- === 有序列表 -->
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
<!-- === end 有序列表 -->


<!-- === 描述列表 -->
<!-- 
dl 定义一个描述列表
dt 定义一各描述列表的term（概念）
dd 定义一个term的description（描述）
-->
<dl>
  <dt>Web</dt>
  <dd>The part of the Internet that contains websites and web pages</dd>
  <dt>HTML</dt>
  <dd>A markup language for creating web pages</dd>
  <dt>CSS</dt>
  <dd>A technology to make HTML look better</dd>
</dl>
<!-- === 描述列表 -->
```

[回到顶部](#html_docs)

### 其他文本元素
1. 文本强调元素
    * 文本强调（Emphasis）元素`<em>`，通常强调的文字通常会自动应用斜体。`<em>` 元素是可以嵌套的，嵌套层次越深，则其包含的内容被认定为越需要着重阅读
    * 强调重要（strong important）元素`<strong>`，通常为强调重要的文字应用粗体
    * `<strong> <em> <b> <i>`的区别：`<strong> <em>`是语义化的元素，`<b> <i>`是视觉元素，非语义化的元素，因为历史原因，`<b> <i>`用来作为设置视觉样式，应该使用`font`css属性设置样式
2. 文本引用元素
    * 块引用元素`<blockquote>`：通常是应用缩进，其中文字来源可以用`<cite>`表示，常用属性：
        * cite：引用的来源URL
    * 短行内引用元素（short inline quotation）`<q>`：短引用元素会被浏览器自动添加引号包围，长的文本的引用请使用 `<blockquote> `替代。常用属性：
        * cite：引用的来源URL
    * `<cite>`元素：表示一个作品的引用。它必须包含引用作品的符合简写格式的标题或者URL，默认应用斜体样式
3. `<mark>`：表示文字被标记（marked）和高亮（hightlight），指示内容的相关程度
4. 缩写元素（Abbreviations）`<abbr>`： 常用属性
    * title属性：对缩写提供完整的描述
5. 定义元素`<dfn>`：定义一个术语，表示这个术语在这个地方被定义。常用属性
    * title属性：如果定义了，则`<dfn>`内的文本是缩写文本，title的属性值被认为是定义的概念
    * id属性：定义一个id，如果要导航到这个术语定义的地方，可以通过这个id导航
    * aria-describedby：如果定义是简短的一个句子，使用该属性连接概念（term）和定义（definition），属性值是定义和概念包含在内的元素的id
6. 联系信息元素`<address>`：提供某个人或某个组织等的联系信息
7. 时间元素`<time>`：表示指定的时间，常用属性
    * datetime属性：表示此元素的时间和日期，并且属性值必须是一个有效的日期格式。如`2011 |2011-11-18 | 14:54 | 2011-11-18 14:54:39.929 | 2011-11-18T14:54:39.929`
8. 上下标元素（superscript and subscript）`<sup> & <sub>`
    * `<sup>` 上标
    * `<sub>` 下标
9. 代码元素：
    * `<code>` ：文本中的短代码，呈现一段计算机代码. 默认情况下, 它以浏览器的默认等宽字体显示（default monospace font）
    * `<pre>` ：预定义格式文本，在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来（紧跟在`<pre>` 开始标签后的换行符也会被省略)。多行的代码使用`<pre>`包围`<code>`
    * `<var>`：变量的名称
    * `<kbd>`：键盘（或其他）输入到计算机的文字，它将产生一个行内元素，以浏览器的默认monospace字体显示
    * `<samp>`：计算机程序的输出，通常使用浏览器缺省的 monotype 字体


```html
<!-- === 文本强调元素 -->
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
<p>This liquid is <strong>highly toxic</strong>.</p>
<!-- === end 文本强调元素 -->


<!-- === 文本引用元素 -->
<blockquote cite="https://example.com">
  <p>Avian carriers can provide high delay, low
    throughput</p>
</blockquote>

<p>According to website,
  <q cite="https://example.com">hello world</q>
</p>

<p>According to the <a href="/en-US/docs/Web/HTML/Element/blockquote">
<cite>MDN blockquote page</cite></a>:
</p>
<!-- === end 文本引用元素 -->

<!-- === 缩写元素 -->
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big
time.</p>

<!-- 定义缩写 -->
<p><dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr>
</dfn> is a markup language used to create the semantics and structure
of a web page.</p>

<!-- aria-describedby  -->
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
<!-- === end 缩写元素 -->


<!-- address联系 -->
<address>
  <a href="mailto:liu@gmail.com">liu@gmail.com</a><br>
  <a href="tel:+110">110</a>
</address>
<!-- address联系 -->

<!-- === 上下标元素 -->
<p>Caffeine's chemical formula is 
    C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
<!-- === end 上下标元素 -->

<!-- === 代码元素 -->
<p>The function <code>selectAll()</code> highlights all the text in the
input field so the user can, for example, copy or delete the text.</p>

<p>Using CSS to change the font color is easy.</p>
<pre>
body {
  color: red;
}
</pre>

<p>A simple equation:
  <var>x</var> = <var>y</var> + 2 </p>


<p>Select all the text with 
    <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp>
<!-- === end 代码元素 -->

<!-- === 时间元素 -->
<p>The concert took place on <time datetime="2001-05-15 19:00">May 15</time>.</p>
<!-- === end 时间元素 -->
```

[回到顶部](#html_docs)



## 超链接元素
超链接元素`<a>`：
1. 描述：定义URL的链接用于链接到其他页面，邮件，Document fragments（通过id链接到页面内的某个部分）
2. 常用属性：
    * `href`：链接的url，绝对地址或相当地址。其中
        * 链接到非HTML资源，会导致下载（如pdf，word document），streamed（video or audio）等
        * 链接到email：`mailto:email address`格式，表示发送email到指定地址，地址是可以忽略的`mailto:`可以使得用户邮件客户端打开。链接邮件还可以指定一些信息：
        * 链接到电话`tel: phone number`
    * `target`：`a | area | from`没有显式target属性时的导航（navigation ）行为
        * `_self`：默认值，以当前窗口进行导航
        * `_blank`：以新窗口形式进行导航
        * `_parent`：如果当前窗口时在iframe中，在父级窗口进行导航。如果没有父亲窗口，相当于`_self`
        * `_top`：在最顶层父级窗口进行导航
    * `title`：链接的额外信息，例如链接目标的简介
    * `download`属性：对要下载的资源提供一个默认filename。如果不指定值，从http头部，或url path最后的segment，或http header中的content-type指定的MEME type等取得filename/extension
    * `referrerpolicy`：控制HTTP Referer header，对于的content属性值有：
        * `origin`：发送文档的origin
        * `no-referrer`：不发送HTTP Referer header
        * `same-origin`：为同源请求发送完整URL，cross-origin请求不会包含Referer header
        * `origin-when-cross-origin`：为同源请求发送完整URL，其他情况发送origin
        * 其他值待补充
3. 超链接元素`<a>`中可以包含很多元素，从而使得元素可以作为链接


```html
<!-- === 链接的种类 -->
<!-- 绝对地址链接 -->
<a href="http://www.example.com">example</a>
<!-- 相对地址链接 -->
<a href="./helloword.html">helloworld.html</a>
<!-- 邮件链接, 点击链接，浏览器尝试打开本地邮件客户端，向指定邮箱发送邮件-->
<a href="mailto:example@777.com">mail to example@777.com</a>
<!-- 电话链接 -->
<a href="tel:+1(555)5309">(555) 5309</a>
<!--锚点链接 -->
<!-- 跳转到对应的锚点 -->
<a href="#foo">#foo</a>
<!-- 跳转到对应url的对应的锚点 -->
<a href="http://www.example.com#foo">example.com#foo</a>
<!-- 空链接，用于返回顶部 -->
<a href="">空链接，用于返回顶部</a>
<!-- 实现代码功能的链接 -->
<a href="javascript:void(0)">javascript link</a>

<!-- taget 属性决定如何打开标签的方式 -->
<!-- _blank 在新标签打开 -->
<a href="http://www.example.com" target="_blank">_blank target</a>
<!-- _self 在当前标签打开 -->
<a href="http://www.example.com" target="_self">_self target</a>
<!-- _parent 在父级环境打开，如没有，就以_self打开 -->
<a href="http://www.example.com" target="_parent">_parent target</a>
<!-- _top 在top环境打开，如没有，以_self打开 -->
<a href="http://www.example.com" target="_top">_top target</a>

<!-- rel属性指定链接与网页的关系 -->
<!-- noopener 阻止在打开的页面拥有 window.opener 属性 -->
<a href="http://www.example.com" rel="noopener"></a>
<!-- rel="nofollow" 无关系，点击链接无反应 -->
<a href="http://www.example.com" rel="nofollow"></a>


<!-- 创建描点链接 -->
<a href="#title">调转到title</a>
<a href="#link">跳转到link</a>

<!-- 使用 id 属性创建锚点 -->
<h1 id="title">title</h1>
<!-- 特殊地，在使用a元素创建锚点，可以使用 name 属性为其命名 -->
<a name="link">链接</a> 
```

[回到顶部](#html_docs)

## 图片元素

### img元素
`img`元素：
1. 描述：用于定义图片
2. 常用属性：
    * `src`：定义图片的url，和超链接元素`<a>`的href属性一样。搜索引擎会读取图片的filename，所以给图片命名一个可描述的名称有利于SEO
    * `alt`（alternative）：定义图像不显示或网络缓慢还未加载图片的替换文字
    * `title`：定义鼠标悬停在图像上时显示的文本信息，不要和alt文字重复，不然在一些屏幕阅读器山是重复的
    * `width & height`：设置图形宽高
    * `sizes`：定义以逗号隔开的一个或多个字符串指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择。每一个资源大小包括：`一个媒体条件 一个资源尺寸的值`，例如`(max-height: 500px) 1000px`表示如果视口不高于500px，选择1000px的图片插槽宽度
    * `srcset`：该属性存在，src属性被忽略，定义以逗号分隔的一个或多个字符串，指示可能的图片资源路径，浏览器自行选择。还可以指定一些描述符：
        * `w`宽度描述符（width descriptor），由sizes属性的大小计算有效像素
        * `x`像素密度描述符（pixel density descriptor），描述符缺省，默认是`1x`
    * `crossorigin`：fetch资源的时候CORS是否被使用，值有
        * anonymous：cross-origin请求执行，但是不会发送credential（例如cookie，HTTP Basic authentication）
        * use-credentials：cross-origin请求执行并发送credential
    * `loading`: `loading="lazy"`可以应用懒加载
3. `<img>`元素的`tille`属性和`alt`属性的区别：
    * `title`属于通常当鼠标滑动到元素上的时候显示的文字信息
    * `alt`属性定义如果图片不显示，所要显示的替换文字。好处是
        * 用户有视力障碍，通过屏幕阅读器来浏览网页
        * 图片的路径或文件名拼错，浏览器会把图片替换为描述文本
        * 有利于搜索引擎优化（SEO），搜索引擎可能会将图片的文字描述和查询条件进行匹配
        * 用户关闭的图片显示以减少数据的传输，这在手机上是十分普遍的，并且在一些国家带宽有限且昂贵
4. 要为`<img>`添加标题，可以使用`<figure>`元素包围`<img>`元素，标题写在`<figcation>`元素中

```html
<img src="/images/sunset.jpg" alt="Picture of su1nset" title="image title">

<!-- src属性是作为1x被忽略 -->
<!-- 会代替src属性，获取srcset更高级的版本 -->
<img src="favicon72.png" alt="MDN logo" srcset="favicon144.png 2x">

<!-- src被忽略 -->
<!-- 根据设备宽度 -->
<!-- 选择sizes中符合的媒体条件，(max-width: 600px)符合 -->
<!-- 得到图片插槽宽度200px -->
<!-- 根据图片插槽宽度，从从`srcset`属性加载和图片插槽宽度一致宽度的图片，
如果不存在，选择不比图片插槽宽度大的第一张图片-->
<img src="clock-demo-200px.png" alt="Clock" srcset="clock-demo-200px.png 200w,
      clock-demo-400px.png 400w" sizes="(max-width: 600px) 200px, 50vw">

<img src="./images/footerlogo.jpg" loading="lazy">
```


[回到顶部](#html_docs)


### picture元素
`<picture>`元素：
1. 描述：包含若干`<source>`元素和1个`<img>`元素，`<source>`元素为图片在不同条件提供不同版本的来源，浏览器会自动匹配，如果没有匹配的，就会使用`<img>`元素src属性指定的图片，任何何情况下，必须在 `</picture>`之前正确提供一个`<img>`元素以及它的src和alt属性，否则不会有图片显示
2. `<source>`元素在`<picture>`元素中常用属性：
    * `media`：定义以逗号隔开的一个或多个字符串指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择。每一个资源大小包括：`一个媒体条件 一个资源尺寸的值`，例如`(max-height: 500px) 1000px`表示如果视口不高于500px，使用宽度为1000px的资源
    * `srcset`：定义以逗号分隔的一个或多个字符串，指示可能的图片资源，浏览器自行选择。还可以指定一些描述符：
        * `w`宽度描述符（width descriptor），由sizes属性的大小计算有效像素
        * `x`像素密度描述符（pixel density descriptor），描述符缺省，默认是`1x`
    * `type`：指定MIME类型

```html
<!-- picture 标签 -->
<picture>
  <!-- 如果media匹配为false，则这个source元素会被跳过 -->
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
  <!-- 如果type的MIME类型不匹配，source元素会被跳过 -->
  <source srcset="mdn-logo.svg" type="image/svg+xml">
  <img src="mdn-logo-narrow.png" alt="MDN">
</picture>


<picture>
  <source srcset="logo-768.png 768w, logo-768-1.5x.png 1.5x">
  <source srcset="logo-480.png, logo-480-2x.png 2x">
  <img src="logo-320.png" alt="logo">
</picture>

<picture>
  <source type="image/svg+xml" srcset="pyramid.svg">
  <source type="image/webp" srcset="pyramid.webp">
  <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles">
</picture>
```

[回到顶部](#html_docs)

### svg
svg：
1. 描述：svg是基于xml语言，用于描述矢量图片，像html一样的标记语言，标记图形，而不是内容。简单的svg通过文本编辑器就可以，通常，创建svg使用矢量图片编辑器，如Inkscape 或Illustrator
2. svg优势：
    * svg图片的文字是可访问的，有利于SEO；
    * svg适合应用样式和脚本，因为图片的每一个组件都是可以应用css和javascript的元素
3. svg劣势：
    * svg图片会变得复杂，意味着文件大小会增长
    * 复杂的svg图片需要浏览器花费一定时间处理；
    * 创建svg图片比光栅图更复杂
    * 旧浏览器可能不支持svg

[回到顶部](#html_docs)


#### SVG添加到页面的方式
将SVG添加到页面的方式：
1. `<img>`引入：熟悉的图像语法，还可以通过在`<a>`元素嵌套`<img>`，使图像轻松地成为超链接。对于`<img>`兼容svg，可以使用`srcset`属性或者css属性`backgruond: url("...png");backgruond-image: url("...svg")`
2. `<svg>`元素内定义svg图片，这叫做行内svg（inlining SVG）
    * 优点：行内svg减少http请求，因此减少加载时间；可以位行内svg应用css；可以将行内svg放到一个超链接元素`<a>`内
    * 缺点：增加了html文档大小；不方便复用，只适用于在一个地方使用的SVG。多次使用会导致资源密集型维护（resource-intensive maintenance）；浏览器不能不能像缓存普通图片一样缓存svg
3. 使用 `<iframe>`嵌入SVG：不是最好的方法，除非SVG和当前的网页具有相同的origin，否则不能在主页面上使用JavaScript来操纵SVG

```html
<!-- img引入svg -->
<img src="equilateral.svg" alt="triangle with all three sides equal"
    height="87px"
    width="100px" />

<!-- srcset属性兼容svg -->
<img src="equilateral.png" alt="triangle with equal sides" srcset="equilateral.svg">
<!-- img引入svg -->

<!-- 行内svg -->
<!-- 创建一个矩形和圆的例子 -->
<svg version="1.1" baseProfile="full" width="300" height="200" 
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>

<!-- iframe嵌入svg -->
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

[回到顶部](#html_docs)

#### svg绘制
绘制流程包括以下几步：
* 从svg根元素开始：
* 舍弃来自 (X)HTML的doctype声明，因为基于SVG的DTD验证导致的问题比它能解决的问题更多。
* 属性version和属性baseProfile属性是必不可少的，供其它类型的验证方式确定SVG版本。
* 作为XML的一种方言，SVG必须正确的绑定命名空间 （在xmlns属性中绑定）。 请阅读命名空间速成 页面获取更多信息。
* 绘制一个完全覆盖图像区域的矩形 `<rect/>`，把背景颜色设为红色。
* 一个半径80px的绿色圆圈`<circle/>`绘制在红色矩形的正中央 （向右偏移150px，向下偏移100px）。
* 绘制文字“SVG”。文字被填充为白色， 通过设置居中的锚点把文字定位到期望的位置：在这种情况下，中心点应该对应于绿色圆圈的中点。还可以精细调整字体大小和垂直位置，确保最后的样式是美观的。

SVG文件全局有效的规则是“后来居上”，越后面的元素越可见

```html
<!-- 例子 -->
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="red" />
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
```

[回到顶部](#html_docs)

#### svg的http header
对于普通SVG文件，服务器应该会发送下面的HTTP头
```shell
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

对于gzip压缩的SVG文件，服务器应该会发送下面的HTTP头
```shell
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

[回到顶部](#html_docs)


### 常见图片格式
常见图片格式：
1. png：静止图片（still images）有损解压（lossy compress）的好选择，质量比jpeg好
2. jpeg：静止图片（still images）有损解压（lossy compress）的好选择
3. gif：简单图片和动画的好选择
4. svg：矢量图片格式（vector image format），不同大小显示正确图片的好选择
5. webp：图片和动画的好选择

[回到顶部](#html_docs)

### 光栅图和矢量图片
光栅图（raster images）和矢量图片（vector images）：
1. 光栅图：用像素（pixel）定义。常用光栅图格式`.jpg | .png | .gif | .bmp | ...`
2. 矢量图片（vector vector images）：用算法定义。定义形状和路径，计算机在屏幕上渲染出来。常用的矢量图格式`.svg | ...`

    

[回到顶部](#html_docs)


## 音频元素

[回到顶部](#html_docs)

### audio元素
`<audio>`元素：
1. 描述：用于在文档中嵌入音频资源
2. 常用属性：
    * src属性：指定视频资源的路径
    * controls属性：是否显示控制按钮，一般包括开始，暂停，音量控制按钮。自定义控制按钮界面是通过相应的javascript api构建
    * autoplay属性：是否自动播放
    * loop属性：是否循环播放
    * muted属性：是否静音播放
    * volume：音频播放的音量。值从0.0 (无声) 到 1.0 (最大声)
    * preload属性：页面加载时预加载，用于缓存大文件。值是`none`时，不缓存文件，值是`auto`时缓存媒体文件，值是`metadata`时缓存metadata文件
    * crossorigin：fetch资源的时候CORS是否被使用，值有
        * anonymous：cross-origin请求执行，但是不会发送credential（例如cookie，HTTP Basic authentication）
        * use-credentials：cross-origin请求执行并发送credential
3. 由于`<audio>`元素并没有视觉部件，不支持width/height属性和poster属性
4. 在`<audio>`内的`<p>`，这个称为fallback content，浏览器的不支持`<audio>`，将会显示fallback content，这种情况，一般提供视频的直接链接
5. 在`<audio>`内通过`<source>`提供不同的视频源格式（source formats），`<source>`元素在`<audio>`内常用属性：
    * src属性：指定资源路径
    * type：指定MIME类型


```html
<!-- Simple audio playback -->
  <audio src="AudioTest.ogg" autoplay>
    Your browser does not support the <code>audio</code> element.
  </audio>

<audio controls>
  <source src="viper.mp3" type="audio/mp3">
  <source src="viper.ogg" type="audio/ogg">
  <p>你的浏览器不支持 HTML5 音频，可点击<a href="viper.mp3">此链接</a>收听。</p>
</audio>
```

[回到顶部](#html_docs)


### 常用音频格式（待整理）
常用音频格式：


[回到顶部](#html_docs)

## 视频元素

[回到顶部](#html_docs)

### video元素
`<video>`元素：
1. 描述：用于在文档中嵌入视频资源
2. 常用属性：
    * src属性：指定视频资源的路径
    * controls属性：是否显示控制按钮，一般包括开始，暂停，音量控制按钮。自定义控制按钮界面是通过相应的javascript api构建
    * autoplay属性：是否自动播放
    * loop属性：是否循环播放
    * muted属性：是否静音播放
    * preload属性：页面加载时预加载，用于缓存大文件。值是`none`时，不缓存文件，值是`auto`时缓存媒体文件，值是`metadata`时缓存metadata文件
    * poster属性：在视频播放前显示的图片资源的路径，通常作为广告屏
    * width属性 & height属性: 指定宽度和高度。视频会保持长宽比（aspect ratio），长宽比如果不被保持，没有填充的区域就会默认为固定的背景颜色
    * crossorigin：fetch资源的时候CORS是否被使用，值有
        * anonymous：cross-origin请求执行，但是不会发送credential（例如cookie，HTTP Basic authentication）
        * use-credentials：cross-origin请求执行并发送credential
3. 在`<video>`内的`<p>`，这个称为fallback content，浏览器的不支持`<video>`，将会显示fallback content，这种情况，一般提供视频的直接链接
4. 在`<video>`内通过`<source>`提供不同的视频源格式（source formats），`<source>`元素在`<audio>`内常用属性：
    * src属性：指定资源路径
    * type：指定MIME类，
    
```html
<!-- Simple video example -->
<!-- Poster from ... -->
<video controls src="..." poster="..." width="620">
  Sorry, your browser doesn't support embedded videos,
  but don't worry, you can <a href="...">download it</a>
  and watch it with your favorite video player!
</video>

<video controls width="400" height="400" autoplay loop muted poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>你的浏览器不支持 HTML5 视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
</video>
```

[回到顶部](#html_docs)


### 视频字幕
视频字幕：
1. 实现视频字幕使用`webvtt`格式文件和`<track>`元素
2. `webvtt`格式文件是文本文件，保存为`.vtt`文件，包括文本和metadata（如视频的时间点显示的文本字符串），这些文本字符串成为cues（提示），cues的类型有`subtitle | captions | timed descriptions`
3. `<track>`
    * 描述：媒体元素，指定时序文本字幕
    * 位置：`<audio> 和 <video>`的子元素，在所有的`<souce>`元素之后
    * 常用属性：
        * src属性：指定`webvtt`格式文件作为字幕，字幕文件格式是`.vtt`
        * srclang属性：告诉浏览器字幕的语言类型。如果kind属性被设为 subtitles, 那么srclang 必须定义
        * label属性：告诉阅读者使用的字幕语言类型，这种标题是用户可读的
        * kind属性：指定字幕类型，可能的值是`subtitle | captions | descriptions | chapters | metadata`。其中`subtitles`是默认的kind值，字幕给观影者看不懂的内容提供了翻译，字幕可能包含额外的内容，通常有附加的背景信息。`captions`是隐藏式字幕提供了音频的转录甚至是翻译，可能包含重要的非言语的信息，比如音乐提示或者音效，适用于耳聋的用户或者当调成静音的时候。`descriptions`是视频内容的文本描述，适用于失明用户或者当视频不可见的场景。`chapters`是用于用户浏览媒体资源的时候。`metadata`脚本使用的track。 对用户不可见。
4. 文本轨道（track）会使你的网站更容易被搜索引擎抓取到 （SEO），由于搜索引擎的文本抓取能力非常强大，使用文本轨道甚至可以让搜索引擎通过视频的内容直接链接



```html
<!-- webvtt例子 -->
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2
00:00:30.739 --> 00:00:34.074
This is the second.
  ...
<!-- webvtt例子 -->


<video controls>
  <source src="example.mp4" type="video/mp4">
  <source src="example.webm" type="video/webm">
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish">
</video>


<!-- 一个media 元素的任意两个 track 子元素不能有相同的 kind, srclang, 和 label属性 -->
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4">
  <source src="sample.ogv" type="video/ogv">
  <track kind="captions" src="sampleCaptions.vtt" srclang="en">
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en">
  <track kind="chapters" src="sampleChapters.vtt" srclang="en">
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de">
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en">
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja">
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz">
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1">
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2">
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3">
  <!-- Fallback -->
  ...
</video>
```

[回到顶部](#html_docs)

### 常用视频格式（待整理）
常用视频格式：


[回到顶部](#html_docs)


## 其他嵌入元素
嵌入元素的历史：
1. 互联网早期经常使用frames创建文档，把frame所在的文档成为`frameset`，指定每一个frame在屏幕中的填充位置
2. 有一段时间，插件技术非常受欢迎，如java applet和flash，这些可以嵌入视频和动画，就是通过`<object>`和`<embed>`嵌入这些插件，这些技术现代浏览器已经放弃了
3. 最后，`iframe`元素出现，可以在一个页面内嵌入其他页面，在今天仍然被正常使用


[回到顶部](#html_docs)

### iframe
`<iframe>`元素
1. 描述：用于在一个页面内嵌入其他页面，这对于合并第三方内容很方便
2. 常用属性：
    * src属性：指定iframe的路劲。为了提高速度，建议在主内容完成加载后，使用JavaScript设置iframe的src属性。这使页面可以更快地被使用，并减少页面加载时间
    * width属性 & height属性：设置宽度和高度
    * allowfullscreen属性： 允许通过javascript Fullscreen API 实现全屏显示iframe
    * name属性：一个targetable名称，可以用于`a | form | base`元素的target属性中，可以用于`input | button`的formtarget属性中，可以用于dom`window.open()`方法中
    * title属性:标识框架的主要内容，这样可以极大方便使用辅助技术（例如屏幕阅读器）浏览网页的人
    * sandbox: 沙盒。未沙盒化(Unsandboxed)内容可以做得太多（执行JavaScript，提交表单，弹出窗口等）。默认情况下，应该使用没有参数的sandbox属性来强制执行所有可用的限制。如果绝对需要，可以`sandbox=""`逐个添加权限，一个要注意的是，不要使用`allow-scripts | allow-same-origin`作为属性值，这种情况下，嵌入内容会绕过Same-origin policy。可能的值：
        * allow-downloads：允许用户下载
        * allow-forms：允许资源提交表格
        * allow-modals：允许资源打开modal窗口
        * allow-popups：允许资源打开窗口，如`window.open | target=_blank | showModalDialog()`
        * allow-orientation-lock：允许资源锁定屏幕方向
        * allow-scripts：允许运行脚本（但是不创建弹出窗口）
        * allow-same-origin：如果不声明这个，资源被被认为来自特殊的origin，然后因为same-origin policy失败
    * referrerpolicy：控制HTTP Referer header，对于的content属性值有：
        * origin：发送文档的origin
        * no-referrer：不发送HTTP Referer header
        * same-origin：为同源请求发送完整URL，cross-origin请求不会包含Referer header
        * origin-when-cross-origin：为同源请求发送完整URL，其他情况发送origin
        * 其他值待补充
3. iframe fallback content：在`<iframe>`元素内的`<p>`提示不能使用`<iframe>`元素的fallback content，也可以提供相应链接
4. 默认的`<iframe>`元素是有环绕的border，可以设置css`border:none`
5. 使用`<iframe>`元素时，使用嵌入第三方页面需要考虑版权，版本变更等问题
6. `<iframe>`元素有安全隐患，这是要意识到的，但并不是不能再网站上使用。黑客恶意修改网页时常把iframe作为攻击目标。如单击劫持是一种常见的iframe攻击，黑客将隐藏的iframe嵌入到您的文档中（或将文档嵌入到他们自己的恶意网站），并使用它来捕获用户的交互。这是误导用户或窃取敏感数据的常见方式。所以建议：
    * 尽可能使用https，HTTPS减少了远程内容在传输过程中被篡改的机会，防止嵌入式内容访问父文档中的内容
    * 始终使用sandbox属性
    * 配置CSP（content security policy ）指令：CSP代表内容安全策略，它提供一组HTTP header（由web服务器发送时与元数据一起发送的元数据），旨在提高HTML文档的安全性。当遇到`<iframe>`,配置`X-Frame-Options`http头部
7. iframe缺点
    * 阻塞主页面的onload事件
    * 搜索引擎无法解读这种页面，不利于SEO
    * iframe和页面共享连接池，而浏览器对相同区域有限制，所以会影响性能
8. iframe的优点
    * 可以解决加载缓慢的第三方内容，如图标和广告等的加载问题
    * 可以实现安全沙箱（Security Sandbox）
    * 可以并行加载脚本



```html
<iframe src="..." width="100%" height="500" allowfullscreen sandbox>
  <p>
    <a href="/en-US/docs/Glossary">
      Fallback link for browsers that don't support iframes
    </a>
  </p>
</iframe>
```


[回到顶部](#html_docs)

### object元素和embed元素
1. object元素和embed元素可以用来嵌入外部内容，例如pdf，但是，一般来说，不需要经常使用，因为显示pdf，通过提供pdf链接而不是嵌入，就能显示。历史原因，这两个元素用于嵌入插件，如flash，但是现代浏览器已经舍弃这个
1. `<object>`元素
    * 描述：嵌入一个外部资源，这个资源可能是一张图片，一个嵌入的浏览上下文，亦或是一个插件所使用的资源
    * 常用属性：
        * data属性：嵌入资源地址
        * width属性 & height属性 ：宽度和高度
        * type属性：嵌入资源的MIME类型
    * `<object>`元素内的`<param>`元素：用于为定义参数，`<param>`常用属性
        * name：参数的名字
        * value：参数的值
2. `<embed>`元素
    * 描述：嵌入一个外部资源，
    * 常用属性：
        * src属性：嵌入资源地址
        * width属性 & height属性 ：宽度和高度
        * type属性：嵌入资源的MIME类型



```html
<object data="mypdf.pdf" type="application/pdf"
        width="800" height="1200">
  <p>You don't have a PDF plugin, but you can
    <a href="mypdf.pdf">download the PDF file.
    </a>
  </p>
</object>

<embed type="video/quicktime" src="movie.mov" width="640" height="480">
```

[回到顶部](#html_docs)




## 表格元素
`<table>`元素
1. 描述：表格用于将结构化的数据行列化，更加一目了然的看到数据联系
2. 表格用于数据表达，而不是布局，有一段时间，表格经常被人们用来布局网页，表格的网页布局的缺点：
    * 可访问性：表格布局减少了视觉受损的用户的可访问性，屏幕阅读器的输出会让他们的用户感到困惑
    * 维护性：表格产生很多标签，使得代码难以维护
    * 表格不能自动响应
3. `<table>`元素内的元素
    * `<caption>`：定义表格的标题，是`<table>`的第一个子元素显示在表格内容的最前面，可以被CSS样式化在一个相对于表格的任意位置。如果`<caption>`是`<figure>`的唯一后代，那么使用`<figcaption>`代替
    * `<thead>`：定义一行表示表格的列的heading，表头有利于清晰查找数据，表头默认样式是加粗的
    * `<tbody>`：表格的主体
    * `<tfoot>`：表格尾行，通常用于定义一组表格中各列的汇总行
    * `<tr>`：定义表格中的行，出现在`thead | tbody | tfoot`内部。其内部元素：
        * `<th>`：定义thead内的表头单元格
        * `<td>`：定义tbody内包含数据的单元格
    * `<colgroup>`：定义一组表格的列
        * `<col>`：单元素，`<colgroup>`元素内定义表格中的列，并用于定义所有公共单元格上的公共语义，可以为column提供通用样式
        * `<col>`中的span属性可以用于跨行
4. 常用属性：
    * `<th>`的`scope`属性：告诉screenreader，这是一个column或列的header，可能的值是`col | row`
    * `<th>`的`id`属性：`<th>`的scope属性的另一个替代属性，用于创建header与单元格的联系，对表格对应的行/列的解释
    * `<td> | <th>`单元格的`colspan`属性：跨列数量
    * `<td> | <th>`单元格的`rowspan`属性：跨行数量




```html
<!-- === very simple table -->
<table>
  <tr>
    <td>Hi, I'm your first cell.</td>
    <td>I'm your second cell.</td>
    <td>I'm your third cell.</td>
    <td>I'm your fourth cell.</td>
  </tr>

  <tr>
    <td>Second row, first cell.</td>
    <td>Cell 2.</td>
    <td>Cell 3.</td>
    <td>Cell 4.</td>
  </tr>
</table>
<!-- === end very simple table -->

<table>
  <caption>表格标题</caption>
  <!-- === colground&col 为列应用一些统一行为 -->
  <colgroup>
    <col span="2">
    <col style="background-color:green">
    <col style="width:200px">
  </colgroup>
  <!-- === colground&col 为列应用一些统一行为 -->
  <!-- === thead表头 -->
  <thead>
    <th></th>
    <th scope="col">heder</th>
    <th scope="col">heder</th>
    <th scope="col">heder</th>
  </thead>

  <!-- === end thead表头 -->
  <!-- === 表格主体 -->
  <tbody>
    <tr>
      <th colspan="2">跨两列th</th>
      <td>单元格</td>
      <td>单元格</td>
    </tr>
    <tr>
      <th rowspan="2">跨两行th</th>
      <td>单元格</td>
      <td>单元格</td>
      <td>单元格</td>
    </tr>
    <tr>
      <td colspan="2">跨两列td</td>
      <td>单元格</td>
    </tr>
  </tbody>
  <!-- === 表格主体 -->
  <tfoot>
    <tr>
      <td colspan="3">表格脚部</td>
      <td>表格脚部</td>
    </tr>
  </tfoot>
</table>
```


[回到顶部](#html_docs)

## 表单元素


[回到顶部](#html_docs)

### form元素
`<form>`表单元素：
1. 描述：用于收集用户输入的数据，发送到服务器，是网站和用户交互的主要方式，`<form>`由form control（也叫widgets）组成，如输入框，多行文本输入，下拉框，按钮，单选/多选框等，其中的大多数通过`<input>`y元素创建
2. 常用属性：
    * `id`：指定id
    * `action`: 表单提交数据的URL，可以是相对或绝对地址，如果没有提供此属性，则数据将被发送到包含这个表单的页面的URL
    * `method`：定义发送数据的http方法，常见的是`get | post`方法
    * `autocomplete`：用于指示 input 元素是否能够拥有一个默认值
    * `enctype`：定义 MIME type，只有在post method 才产生效果，指定在提交表单时所生成的请求中的Content-Type的HTTP数据头的值。
        * enctype="application/x-www-form-urlencoded" 默认值，已编码为URL参数的表单数据
        * enctype="text/plain"
        * enctype="multipart/form-data" 推荐使用
    * `novalidate`：提交时表单是否处于未验证状态。定义浏览器再提交时，不进行验证，可以用 :valid 和 :invalid CSS 伪类来按照表单是否正确填涂来给 `<form>` 元素指定样式
    * `name`: 表单名称
3. 表单中的form control需要设置name属性，具有name属性的相关控件都会被发送，即使没有任何值被填。对于选择框，只有在勾选时才发送它们的值，以`name/value`对的形式发送
3. 表单中常用的form control：
    * `<input>`
    * `<textarea>`
    * `<label>`
    * `<select>`
    * `<button>`
    * `<datalist>`
    * `<meter>`
    * `<progress>`
    * `<output>`
    * `<fileset` & `<lengend>`
    * `<option>`
4. 表单中发送文件，需要做以下工作：
    * 将method属性设置为POST，因为文件内容不能放入URL参数中
    * 将enctype的值设置为multipart/form-data，因为数据将被分成多个部分，每个文件单独占用一个部分，表单body中包含的文本数据也要占用一个部分（如果文本也输入到表单中）
    * 包含一个或多个File picker小部件，允许用户选择将要上传的文件
5. 严格禁止在一个表单内嵌套另一个表单。嵌套会使表单的行为不可预知，而这取决于正在使用的浏览器
6. 表单常见的安全问题
    * XSS & CSRF （见网络安全部分）
    * sql注入 （见网络安全部分）
    * HTTP数据头注入和电子邮件注入（出现在当应用程序基于表单上用户的数据输入构建HTTP头部或电子邮件时。这些不会直接损害服务器或影响用户，但引发一个更深入的问题，例如会话劫持或网络钓鱼攻击）
7. 表单验证：表单可以提供客户端验证，但并不是完全安全的措施，因为客户端验证关闭很容易，导致脏数据会发送到服务器，所以服务器端验证也是必须的。发送到服务器的数据必须经过检查和消毒:
    * 远离有潜在危险的字符转义
    * 限制输入的数据量，只允许有必要的数据
    * 沙箱上传文件(将它们存储在不同的服务器上，只允许通过不同的子域访问文件，或者通过完全不同的域名访问文件更好)


```html
<form action="post" action="/foo" autocomplete novalidate></form>
```



[回到顶部](#html_docs)



### input元素
input元素：
1. 描述：默认为单行文本输入，表单最基本的form control（widgets），这是plain text filed，而不是rich text editing（加粗，倾斜等），rich text editors通过自定义表单控件实现
2. 通用属性：
    * `id`属性：设置id，可以配合`<label>`的for属性
    * `name`属性：对于大多数表单部件，一旦表单提交，所有具有name属性的相关控件都会被发送，即使没有任何值被填，但是单选按钮（radio button）和多选框（check box），只有在勾选时才发送它们的值
    * `type`属性：定义类型
    * `value`属性：值
    * `placeholder`属性：text`<input>`中的占位初始文本，用于简单介绍`<input>`的用途
    * `readonly`：用户不能修改`<input>`的value，值仍然可以作为表单数据发送
    * `disabled`：默认是false，指定用户不能修改`<input>`的value（也不能点选或拖动），值不能作为表单数据发送
    * `maxlength` & minlength属性：`<input>`中可以输入的最大，最小字符数量
    * `size`：受约束的`<input>`的物理大小
    * `spellcheck`：有利于拼写检查，如果浏览器支持
    * `autocomplete`：
    * `autofocus`：默认值是false，指定页面加载时候是否自动focus所在元素，文档里面和form有关的元素里面只有一个元素可以指定这个属性
    * `list`：提供自动补全的选项，由`<datalist>`元素定义，值是`<datalist>`的id属性
    * `required`：只有`<input>`元素有值时，整个表单才能提交
    * `tabindex`：当用户按键盘Tab键时，焦点会按序号从小到大落在对映的元素上（当此值为-1时，表示焦点永远不会通过Tab键落在此元素上
    * `checke`：`<input>`中的单选按钮（radio button）和多选框（check box），两者都使用checked属性，指示该部件的"选中"或"未选中"状态
    * `form`：指定form control联系的form，在form control不在`<form>`内使用，他的值是要联系的`<form>`的id属性
3. `disabled&readonly`属性比较
    * 相同：设为true，则控件不能被编辑
    * `disabled`设为true，则该表单输入项不能获取焦点，用户的所有操作（鼠标点击和键盘输入等）对该输入项都无效，最重要的一点是当提交表单时，这个表单输入项将不会被提交
    * `readonly`只是针对文本输入框这类可以输入文本的输入控件，如果设为true，用户只是不能编辑对应的文本，但是仍然可以聚焦焦点，并且在提交表单的时候，该输入项会作为form的一项提交


[回到顶部](#html_docs)

#### input的type类型
input的type类型：
1. `text | email | tel | password`：
    * 忽略type属性，默认是text，如果type类型浏览器不支持，text类型也是fallback的类型
    * 对于text来说，如果输入了换行（line break），换行（line break）在发送数据前会被移除
    * 对于email类型，通过`multiple`属性，它还可以让用户将多个电子邮件地址输入相同的输入(以逗号分隔)，通过`pattern`属性自定义验证
    * 对于tel类型移动端可以调出数字键盘，全世界有不同的手机号码格式，通过`pattern`属性自定义验证约束
2. `search | url `
    * search类型和text类型的主要区别是，search类型的样式通常是圆角框，输入文字之后右边显示Ⓧ
    * url类型：会验证url格式是否正确
3. `radio | checkbox`：
    * `checked`属性： 单选按钮（radio button）和多选框（check box），都通过`checked`属性确定有没有被选中；
    * 数据是否发送：所有具有name属性的控件都会被发送数据，即使没有任何值被填，但是对于单选按钮（radio button）和多选框（check box），只有在勾选时才发送它们的值。同一组单选按钮（radio button）和多选框（check box）具有相同的`name`属性
    * 如果不是重置表单，用户不能uncheck所有的单选按钮（radio button），必须选中其中的一个
4. `file | image`
    * image类型，和`<image>`元素相似，不过点击会提交数据，不是提交value，提交的是点击图片的x坐标，y坐标，图片的左上比较代表`(0, 0)`
    * file类型，用于选择一个或多个文件发送，可以用`accept`属性约定发送的文件类型，可以用`multiple`属性指定可以选择多个文件
5. `color | number | range | datetime-local | date | month | time | week`：
    * number类型，可以通过`min | max`属性指定最小最大值，还可以通过step指定增加减少的步长，step忽略默认为1；默认支持整数，允许浮点数，将`step="any"`
    * range类型，用slider选择number，，可以通过`min | max`属性指定最小最大值，还可以通过step指定增加减少的步长，step忽略默认为1
    * `datetime-local | date | month | time | week`类型：可以通过`min | max`属性指定最小最大值，还可以通过step指定增加减少的步长
6. `hidden`：用户看不到的不可访问的类型，数据可以被发送，不需要和`<label>`一起使用
7. `submit | reset | button`
    * submit类型提交表单数据
    * reset类型会重置表单控件为默认值
    * `input[type=button]`和`<button>`主要区别就是button元素更加容易应用样式

```html
<!-- === input -->
<!-- 单行文本类型 -->
<input type="text" id="comment" name="comment" value="I'm a text field">
<!-- E-mail类型 -->
<!-- 通过multiple属性，
它还可以让用户将多个电子邮件地址输入相同的输入(以逗号分隔)
-->
<input type="email" id="email" name="email" multiple>
<!-- 电话号码 移动端可以调出数字键盘-->
<input type="tel" id="tel" name="tel">
<!-- 密码 -->
<input type="password">


<!-- 搜索 -->
<input type="search" id="search" name="search">
<!-- URL -->
<input type="url" id="url" name="url">


<!-- 单选按钮 -->
<!-- 统一组复选框具有相同的name属性 -->
<!-- 具有checked属性，设置为选中状态 -->
<!-- 单选框用户必须选择一个 -->
<fieldset>
  <legend>What is your favorite meal?</legend>

  <div>
    <label for="soup">Soup</label>
    <input type="radio" id="soup" name="meal" value="soup" checked>
  </div>
  <div>
    <label for="curry">Curry</label>
    <input type="radio" id="curry" name="meal" value="curry">
  </div>
  <div>
    <label for="pizza">Pizza</label>
    <input type="radio" id="pizza" name="meal" value="pizza">
  </div>
</fieldset>

<!-- 复选框 -->
<!-- 统一组复选框具有相同的name属性 -->
<!-- 具有checked属性，设置为选中状态 -->
<fieldset>
  <legend>Choose all the vegetables you like to eat</legend>

  <div>
    <label for="carrots">Carrots</label>
    <input type="checkbox" id="carrots" name="vegetable" value="carrots" checked>
  </div>
  <div>
    <label for="peas">Peas</label>
    <input type="checkbox" id="peas" name="vegetable" value="peas">
  </div>
  <div>
    <label for="cabbage">Cabbage</label>
    <input type="checkbox" id="cabbage" name="vegetable" value="cabbage">
  </div>
</fieldset>


<!-- 文件 -->
<!-- accept约束类型 -->
<!-- multiple可以选择多种类型 -->
<input type="file" name="file" id="file" accept="image/*" multiple>

<!-- accept类型指定 -->
<!-- 还可以增加capture信息从camer，microphone捕获文件 -->
<input type="file" accept="image/*;capture=camera">
<input type="file" accept="video/*;capture=camcorder">
<input type="file" accept="audio/*;capture=microphone">
<!-- 
图像按钮是一个与<img>元素完全相同的元素，
除了当用户点击它时，它的行为就像一个提交按钮。
如果使用图像按钮来提交表单，这个小部件不会提交它的值；
相反，提交的是在图像上单击处的X和Y坐标(坐标是相对于图像的，
这意味着图像的左上角表示坐标0，0) 
-->
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30">



<!-- number -->
<!-- min & max 约束值，step 增加和减少按钮修改步进值大小-->
<input type="number" name="age" id="age" min="1" max="10" step="2">

<!-- range -->
<!-- min & max 约束值，step 增加和减少按钮修改步进值大小 -->
<input type="range" name="beans" id="beans" min="0" max="500" step="10">

<!-- 日期时间 -->
<!-- datetime -->
<input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30"
pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required>
<!-- date -->
<input type="date" name="myDate" min="2013-06-01" max="2013-08-31" step="7" id="myDate">
<!-- month -->
<input id="month" type="month" name="month" min="2017-06" max="2017-09" required>
<!-- time -->
<input id="appt-time" type="time" name="appt-time" min="12:00" max="18:00" required>
<!-- week -->
<input id="week" type="week" name="week" min="2017-W01" max="2017-W52" required>

<!-- 拾色器 -->
<input type="color" name="color" id="color">



<!-- 隐藏控件 -->
<!-- 有时候，由于为了方便技术原因，有些数据是用表单发送的，但不显示给用户 -->
<!-- timestamp的值可以通过javascript改变 -->
<input type="hidden" id="timestamp" name="timestamp" value="1286705410">


<!-- 提交和重置，button -->
<button type="submit">
    This is a <strong>submit button</strong>
</button>
<input type="submit" value="This is a submit button">

<button type="reset">
    This is a <strong>reset button</strong>
</button>

<input type="reset" value="This is a reset button">
<button type="button">
    This is an <strong>anonymous button</strong>
</button>
<input type="button" value="This is an anonymous button">
```


[回到顶部](#html_docs)



### textarea元素
`<textarea>`元素：
1. 描述：多行文本输入框，`<textarea>`元素内是默认的文本，所有内容都当作plain text，手动拖拽可以改变控件大小
2. 与单行文本框不同的是
    * 允许line break，发送数据也包括line break
    * `input`是空元素，默认值放在value属性上
3. 常用属性
    * `cols`：控制行宽度（columns），默认cols是20
    * `rows`：控制的可见文本行数，默认是2
    * `wrap`：常用的值有
        * soft: 默认值，在到达元素最大宽度的时候，视觉上换行，不会自动插入换行符，发送数据该处也不会换行
        * hard: 必须指定`cols`属性，在文本到达元素最大宽度的时候，浏览器自动插入换行符(CR+LF)，发送数据该处也会换行
    * `disabled`：默认是false，指定用户不能修改`<textarea>`的value（也不能点选或拖动），值不能作为表单数据发送

```html
<!-- 多行文本控件 -->
<!-- minlength maxlength 属性设置 -->
<textarea>
by default this element is filled with this text
</textarea>
```

[回到顶部](#html_docs)


### label元素
`<label>`元素：
1. 描述：用户界面中某个元素的说明，将 `<label>` 和一个 `<input> `元素匹配在一起，需要给 `<input>`一个id属性，同时`<label>`的for属性值与`<input>`id属性值一致。`<input>`直接放在 `<label>` 里，这种情况就不需要for和id属性
2. 将一个 `<label>` 和一个 `<input> `元素放在一起有以下好处：
    * 标签文本不仅与其相应的文本输入在视觉上相关联，它也以编程方式与它相关联，当用户点击到表单输入时，屏幕阅读器可以读出标签，使在使用辅助技术的用户更容易理解应输入哪些数据
    * 单击关联的label可以激活input，增加的命中区域为激活input提供了方便，包括那些使用触摸屏设备，当点击或者触碰（tap）一个与表单控件相关联的`<label>` 时，关联的控件的 click 事件也会触发
3. `<label>`可访问性问题：
    * 不要在label元素内部放置会相互影响的元素，比如anchors，或者buttons。这样做会让用户更难激活/触发与label相关联的表单元素input
    * 在一个`<label>`元素内部放置标题元素会干扰许多辅助技术，原因是标题通常被当成一个导航助手。若标签内的文本需要在视觉上做些调整，应该使用CSS伪类更改样式并应用到`<label>`元素中。若一个form元素，或者form元素中的一部分需要一个标题，此时应该使用`<legend>`元素做标题，并将它放在`<fieldset>`元素中
4. `<label>`元素的aria-label属性：被screen reader读取


```html
<label for="username">Click me</label>
<input type="text" id="username">

<label>Click me <input type="text"></label>
```

[回到顶部](#html_docs)



### select元素
`<select>`元素:
1. 描述：select框，里面包含若干`<option>`定义的选项
2. `<option>`元素：定义在`<select>`内的选项
3. `<optgroup>`：`<option>`元素可以嵌套在`<optgroup>`中，作为一个选项组，其中的`label`属性是`<optgroup>`嵌套选项的分组提示
4. 常用属性
    * `<select>`的`multiple`属性：可以选中多个选项
    * `<option>`的`selected`属性：指示属性被选中
    * `<option>`的`value`属性：当选项被选中，发送的是value属性指定的值，如果value属性被忽略，那么`<option>`的文本内容就作为value被提交，value虽然不是必须，但是option的文本内容是提示的时候，可以发送一个更简短的value值
    * `<optgroup>`的`label`属性：定义嵌套选项的分组提示


```html
<!-- === l例子 -->
<select>
  <option value="foo">foo</option>
  <option value="foo">foo</option>
  <option selected>foo</option>
</select>

<!-- 多选 -->
<select multiple>
  <option>Banana</option>
  <option>Cherry</option>
  <option>Lemon</option>
</select>

<!-- optiongroup -->
<select id="groups" name="groups">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>


<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

[回到顶部](#html_docs)


### datalist元素
`<datalist>`元素：
1. 描述：为form control提供自动补全值，自动补全的选项通过`<option>`定义
2. `<option>`元素：在`<datalist>`元素内，指定自动补全的选项，用于给表单控件提供建议的、自动完成的值

定义数据列表后，id属性绑定为需要提供自动补全功能的表单小部件的`list`属性指定的值

```html
<!-- datalist -->
<!-- Datalist元素有助于提供文本框自动完成特性 -->
<label for="myFruit">What's your favorite fruit?</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion">
<datalist id="mySuggestion">
  <option>Apple</option>
  <option>Banana</option>
  <option>Blackberry</option>
  <option>Blueberry</option>
  <option>Lemon</option>
  <option>Lychee</option>
  <option>Peach</option>
  <option>Pear</option>
</datalist>
```

[回到顶部](#html_docs)


### progress元素
`<progress>`元素：
1. 描述：用来显示一项任务的完成进度, 通常显示为进度条
2. 常用属性：
    * `max`：最大值
    * `value`：当前值，如果没有value属性,则该进度条的进度为"不确定",也就是说,进度条不会显示任何进度

```html
<!-- progress内的内容用于fallback -->
<progress value="70" max="100">70 %</progress>
```

[回到顶部](#html_docs)

### meter元素
`<meter>`元素：
1. 描述：用来显示已知范围的标量值
2. 常用属性：
    * `value`：当前的数值。如果设置了最小值和最大值（分别由min属性和max属性定义），它必须介于最小值和最大值之间。默认的min和max值分别为0和1
    * `min`：值域的最小边界值。如果设置了，它必须比最大值要小。如果没设置，默认为0。
    * `max`：值域的上限边界值。如果设置了，它必须比最小值要大。如果没设置，默认为1。
    * `low` & high属性：value在min-low之间表现inclusive样式，value在high-max之间表现inclusive，在low-high之间表现exclusive样式
    * `optimum`：定义最优值，在low-high之间
3. 样式：通常绿色是preferred range，黄色是average range，红色是worst range

```html
<!-- <meter>元素 -->
<meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter>
```

[回到顶部](#html_docs)




### output元素
`<output>`元素表示计算或用户操作的结果

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
</form>
```

[回到顶部](#html_docs)



### fileset & lengend元素
`<fileset>` & `<lengend>`元素：
1. `<fileset>`元素：通常用来对表单中的form control元素进行分组，方便统一样式和语义化，`<fileset>`元素是一个创建可访问表单关键元素，但是不要滥用，可能的话听听screen reader怎样解释再决定使用
2. `<lengend>`元素：在`<fieldset>`内作为标题，解释该组fileset的目的


```html
<form action="test.php" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" id="radio"> <label for="radio">Click me</label>
  </fieldset>
</form>
```

[回到顶部](#html_docs)


### button
`<button>`元素：
1. 描述：`<button>`元素或者`<input>`元素来创建一个submit, rest或者button按钮。使用 `<button>`元素或者`<input>`元素来创建表单中的按钮行为都是一致的，区别在于，button内容写在开闭合标签之间，而input标签的内容卸载value属性上
2. 常用属性
    * `type`：`submit | reset`，如果忽略type属性，或者不是一个有效值，默认为submi；reset类型会重置表单控件为默认值

```html
<!-- submit -->
<button type="submit">
    This a <br><strong>submit button</strong>
</button>

<input type="submit" value="This is a submit button">

<!-- reset -->
<button type="reset">
    This a <br><strong>reset button</strong>
</button>

<input type="reset" value="This is a reset button">

<!-- buttton -->
<button type="reset">
    This a <br><strong>reset button</strong>
</button>

<input type="reset" value="This is a reset button">
```

[回到顶部](#html_docs)


## canvas元素
`<canvas>`元素：
1. 描述：用来通过脚本（通常是JavaScript）绘制图形
2. 常用属性：
    * `width & height`属性

```html
<canvas id="canvas" width="300" height="300">
  Sorry, your browser doesn't support the &lt;canvas&gt; element.
</canvas>
```


## 其他元素

[回到顶部](#html_docs)

### 交互元素
`<details> & <summary>`，`<dialog>`

```html
<!-- <summary> 元素 用作 一个<details>元素的一个内容的摘要 -->
<!-- 默认除了summary，其他内容是折叠的 -->
<details>
  <summary>Read more</summary>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
</details>

<!-- <dialog> 元素表示一个对话框或其他交互式组件 -->
<!-- tabindex 特性不能被使用在 <dialog> 元素上 -->
<dialog open>
  <p>Greetings, one and all!</p>
</dialog>
```

[回到顶部](#html_docs)

### 地图元素
`<map>`元素：
1. 描述：定义图片地图，`<area>`元素设置热点hotspot（一个可点击的区域）
2. `<area>`元素：在`<map>`元素内，用于设置热点hotspot
3. 常用属性
    * `<map>`的name属性：设置map的名称，`<img>`元素上的usemap属性，可以通过值`#mapname`（必须包含`#`，创建图片地图
    * `<area>`的shape属性：`circle | rect | poly | default`，default是整张图片
    * `<area>`的coords属性：定义坐标，对于circle提供三个值`x,y,radius`，x,y是中间的坐标，radius是半径；对于rect，提供坐标值`x,y`，分别指定左上和右下的坐标；对于poly，为每一个边提供坐标值`x,y`
    * `<area>`的href属性：图片地图链接到的url
    * `<area>`的alt属性：图片地图链接出问题的替换文本

```html
<map name="example-map-1">
  <area shape="circle" coords="200,250,25" href="another.htm"  alt="/>
  <area shape="default" />
</map>

<!-- 创建世界地图热点区域 -->
<img src="/images/world-continents.png" width="320" height="160" orgwidth="320" orgheight="160" usemap="#world-continents">
<map name="world-continents">
  <area title="North America" href="https://en.wikipedia.org/wiki/North_America" shape="poly" coords="48,89,67,69,77,49,140,0,68,0,6,10,4,31,16,69">
  <area title="South America" href="https://en.wikipedia.org/wiki/South_America" shape="poly" coords="48,88,61,74,119,99,95,160,66,159">
  <area title="Europe" href="https://en.wikipedia.org/wiki/Europe" shape="poly" coords="124,49,145,46,158,50,187,43,198,6,146,1,115,21">
  <area title="Africa" href="https://en.wikipedia.org/wiki/Africa" shape="poly" coords="121,53,140,47,169,51,186,77,196,80,188,137,156,136,138,97,118,86">
  <area title="Asia" href="https://en.wikipedia.org/wiki/Asia" shape="poly" coords="166,50,184,77,201,74,215,91,258,108,263,87,283,74,297,8,192,3,191,29,187,46,170,42">
  <area title="Australia" href="https://en.wikipedia.org/wiki/Australia_(continent)" shape="poly" coords="257,107,263,85,314,89,316,137,294,151,249,132,248,114">
</map>
```

[回到顶部](#html_docs)

### figure & figurecapton
1. `<figure>`元素：包含若干内容及其标题`<figcaption>`，组成一个单元，表示独立内容。通常`<figure>`元素是图片，插图（illustration），代码片段（snippet）等，可以在文档main flow中，也可以移动到其他文档部分
2. `<figcaption>`元素：`<figure>`元素内的图片标题，通常作为`<figure>`元素的第一个或最后一个元素

```html
<!-- Just an image -->
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo.">
</figure>

<!-- Image with a caption -->
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo.">
  <figcaption>MDN Logo</figcaption>
</figure>

<!-- code snippet -->
<figure>
  <figcaption>Get browser details using <code>navigator</code>.</figcaption>
  <pre>
function NavigatorExample() {
var txt;
txt = "Browser CodeName: " + navigator.appCodeName + "; ";
}
</pre>
</figure>

<!-- Quotations -->
<figure>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>If debugging is the process of removing software bugs,
    then programming must be the process of putting them in.</blockquote>
</figure>

<!-- poem -->
<figure>
  <p>
    Bid me discourse, I will enchant thine ear,
    Or like a fairy trip upon the green</p>
  <figcaption><cite>Venus and Adonis</cite>,
    by William Shakespeare</figcaption>
</figure>
```

[回到顶部](#html_docs)



### source元素
`<source>` 元素为 `<picture>, <audio> 或者 <video>` 元素指定多个媒体资源。这是一个空元素，所以只有一个开始标签，没有闭合标签

常用属性：
1. src：对于`<audio>和<video>`，媒体资源的地址是必需的。将`<source>`元素放在`<picture>`元素内时，将忽略此属性的值
2. type: 指定资源的MIME类型
3. srcset & media：响应式图片使用该属性（参考css中布局-响应式设计-响应式图片部分）


```html
<video controls>
  <source src="foo.webm" type="video/webm">
  <source src="foo.ogg" type="video/ogg"> 
  <source src="foo.mov" type="video/quicktime">
  I'm sorry; your browser doesn't support HTML5 video.
</video>
```

[回到顶部](#html_docs)


## 特殊字符渲染
特殊字符渲染（html symbol unicode）
1. 常见的特殊字符的渲染，如
    * `< `：`&lt;`
    * `>`：`&gt;`
    * `&`：`&amp;`
    * `"`：`&quot;`
    * `'`：`&apos;`
    * 版权备案符号：`@copy;`
2. 常见的html symbol unicode：
    * 见[html symbol unicode](https://www.htmlsymbols.xyz/)
    * 导航字符：`&#9776; `，或者导航标记的链接值`data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e`
    * `<`字符：`&#10094;`
    * `>`字符：`&#10095;`
    * 比较小的`<`字符：`&#8249;`
    * 比较小的`>`字符：`&#8250; `
    * `<<`字符：`&laquo;`
    * `>>`字符：`&raquo;`
    * `×`字符：`&times;`
3. `√ | ×`字符：也可以使用css设置，设置元素css伪元素`::before | ::after`设置`content`为`√ | ×`，其中`×`也可以设置为`content: "\00D7"`
4. `+`：通过css伪元素`::before | ::after`设置`content: "\002B"`
5. `-`：通过css伪元素`::before | ::after`设置`content: "2212"`


[回到顶部](#html_docs)


## html属性

[回到顶部](#html_docs)


### data-*属性
`data-*`属性：
1. 描述：用于在html元素上存储额外的信息
2. javascript访问`data-*`属性：`HTMLElement.dataset`属性获取，如`data-columns`通过`HTMLElement.dataset.columns`访问，除了`data-*`，`data-*`属性后续的其他`-`后面的一个字符转换为大写，如`data-index-number`，通过`HTMLElement.dataset.indexNumber`访问。反之javascript创建`data-*`属性也是这样转换
3. css访问`data-*`属性：
    * `attr()`函数获取`data-*`属性值，如`attr(data-parent)`获取`data-parent`的属性值
    * `data-*`属性选择器，如`element[data-column='3']`
4. 不要存储可访问的内容在`data-*`属性上，因为为残疾人设计的技术不能访问他们


```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

[回到顶部](#html_docs)

### lang属性
lang属性：设置页面或者元素的语言

```html
<html lang="en-US">

<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```


[回到顶部](#html_docs)


### html全局属性
* lang: 元素内容的的语言
* id： 元素id，文档内唯一
* class：类
* style：行内css样式
* data-*：为元素增加自定义属性。在 JavaScript 框架变得流行之前，开发者经常使用data-属性，把额外数据存储在 DOM 自身，现在，不鼓励使用data-属性，原因
    * 用户可以通过在浏览器中利用检查元素，轻松地修改属性值，借此修改数据。
    * 数据模型最好存储在 JavaScript 本身中，并利用框架提供的数据绑定，使之与 DOM 保持更新
* title：与其所属元素相关信息的文本
* width & height
* href(链接)
* tabindex: 设置元素可以获得焦点，通过tab可以导航
* hidden: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果


其他非常用全局属性
* accesskey:设置快捷键，提供快速访问元素
* contenteditable: 指定元素内容是否可编辑
* contextmenu: 自定义鼠标右键弹出菜单内容
* dir: 设置元素文本方向
* draggable: 设置元素是否可拖拽
* dropzone: 设置元素拖放类型： copy, move, link
* spellcheck: 是否启动拼写和语法检查
* translate: 元素和子孙节点内容是否需要本地化

[回到顶部](#html_docs)


## 附录

[回到顶部](#html_docs)


### html元素分类
1. 按结构分类：
    * 一般结构：包括开口标签（opening tab），开口标签内的属性（attribute), 标签内的content, 闭合标签（closing tab）
    * 包含属性的单个标签（single tab include attribute)，也叫空元素（empty element），空元素通常作为插入/嵌入元素（insert/embed element），空元素不包含任何子元素。常见的空元素：
        * meta
        * hr
        * br
        * link
        * img
        * input
        * track
        * col(in colgroup 表格元素)
2. 按display属性值分为块级元素（`diaplay: block`），行内元素（`display: inline-block`）,`dispaly: inline-block`
    * 常见block元素：容器元素`div html5 新增结构标签...`，文本排版`标题（h1-h6) hr 段落p...`，列表（`ul li ol dl dt dd...`），表格（`table thead tbody tr td...`），表单（`form...`）等
    * 常见inline元素：容器元素（span），文本排版（`mark b strong em i small  del s  ins u q block code pre var...`，表单（`label...`）等
    * 常见line-block元素：`img input button textarea select...`
3. 按替换/非替换元素分类：替换元素（replaced elements），如`img video audio  表单元素textarea input object...`，浏览器根据元素的标签和属性，来决定元素的具体显示内容，只写元素不可以显示内容，css不能影响替换元素的内部布局（internal layout），替换元素如`img video audio`通常有固定的屏幕比例（aspect ratio）
4. 按内容分类
    * flow: 流内容，能够感知的
    * metadata： 元数据
    * section：分区
    * heading：标题
    * phrasing：措辞（文本修饰）
    * embedded：嵌入的，媒体元素
    * interative：互动的


```html
<!-- === 按html元素结构分类 -->
<!-- a html element -->
<tab attribute="attribute_value"> content </tab>

<!-- empty element -->
<img src="">
<!-- ==
```

[回到顶部](#html_docs)



### 块级元素，行内元素和inline-block元素的特点
块级元素，行内元素和inline-block元素的特点：
1. 块级元素（block element）特点：
    * 独占一行，没有width默认填满父元素，设置了width，仍然独占一行
    * 可以设置`margin padding width height`等css属性
    * 不可以设置 `vertical-align`等css属性
2. 行内元素（inline element）特点：
    * 宽度由内容决定，相邻行内元素不换行，空间不够才换行
        * 内联标签之间有空隙，空隙消除可以通过设置父元素font-size为0，然后内联元素设置该有的font-size覆盖，空隙就可以消除
    * 可以设置水平方向的`margin padding`的css属性, 垂直方向不产生效果，垂直方向由`line-height`产生
3. line-block元素特点：
    * 宽度换行和行内元素一样
    * 可以设置`width & heigth & margin & paddding & border & vertical-align`等 css属性


[回到顶部](#html_docs)



### 其他文本元素
* `<wbr>` 空元素，只有开始标签，没有闭合标签。指示浏览器可以在此进行换行，虽然换行规则不会再这里进行换行
* `<b>`加粗  `<i>`斜体
* `<mark>` 突出显示的文本
* `<small>`使文本的字体变小一号。HTML5中，除了它的样式含义，这个元素被重新定义为表示边注释和附属细则，包括版权和法律文本
* `<s>`删除文本
* `<ins> & <del>` 编辑标识标签
    * `<ins>` 表示文档中添加的内容
    * `<del>` 文档中删除的文字内容
* `<data>` 配合value属性，指定对应数据或者机器可读的翻译。如果内容是与时间或者日期相关的，则一定要使用 `<time>`。
    ```html
    <p>新产品</p>
    <ul>
    <li><data value="398">迷你番茄酱</data></li>
    <li><data value="399">巨无霸番茄酱</data></li>
    <li><data value="400">超级巨无霸番茄酱</data></li>
    </ul>
    <!-- css -->
    data:hover::after {
      content: '(' attr(value) ')';
    }
    ```

* `<bdo>` 用于覆盖当前文本的朝向，配合dir属性指定文本的朝向，dir的属性的值有：
    * ltr:  从左往右写
    * rtr: 从右往右写
    ```html
    <!-- <bdo> 元素 (HTML双向覆盖元素)用于覆盖当前文本的朝向，它使得字符按给定的方向排列 -->
    <!-- dir : ltr | rtl -->
    <bdo dir="rtl">This text will go right to left.</bdo>
    ```
    
* `<bdi>`告诉浏览器将指定文本隔离，当网站动态插入一些文本且不知道所插入文本的方向性时，此功能特别有用
    ```html
    <!-- 其中一位获胜者的名称由RTL文本组成。 -->
    <!-- 在这种情况下，“-1”（由具有中性或弱方向性的字符组成）将采用RTL文本的方向性，结果将出现乱码 -->
    <ul>
      <li><span class="name">اَلأَعْشَى</span> - 1st place</li>
      <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
    </ul>
    <!-- <bdi> 元素指示浏览器将名称与其嵌入上下文隔离，因此示例输出正确排序 -->
    <ul>
      <li><bdi class="name">اَلأَعْشَى</bdi> - 1st place</li>
      <li><bdi class="name">Jerry Cruncher</bdi> - 2nd place</li>
    </ul>
    ```
    
* `<ruby> & <rp> & <rt> & <rtc>`
    * `<ruby>`元素 被用来展示东亚文字注音或字符注释
    *  `<rb>` 用于分隔`<ruby>`中需要注释的文本内容
    * `<rp>` 用于不支持 `<ruby>` 元素的情况。 `<rp>` 的内容作为回退提供了应该展示的东西，通常是圆括号，以便表示注解的存在
    * `<rt>` 用于描述东亚字符的发音
    * `<rtc>` 东亚字符注释（chrome无效果）
    ```html
    <!-- 也可以省略rb -->
     <ruby>
      <rb>旧</rb><rt>jiù</rt> 
      <rb>金</rb><rt>jīn</rt> 
      <rb>山</rb><rt>shān</rt>
      <rtc>San Francisco</rtc>
    </ruby>

    <ruby>
    漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
    字 <rp>(</rp><rt>ji</rt><rp>)</rp>
    </ruby>
    ```

[回到顶部](#html_docs)




### web quality（无障碍&可访问性)
web quality指能够被视障人士使用的网站的可访问性

[回到顶部](#html_docs)


###  html语义化
1. 内容结构化，结构清晰正确， HTML 元素上就能看出页面的大致结构
2. 标签正确。用包含语义的标签（如h1-h6）恰当地表示文档结构
3. 具体一点：
    * 少使用无意义的 `<div>|<span>`元素
    * `<label>`元素中设置 for 属性和对应的`<input>`关联起来
    * `<img>`元素的 alt 属性，给 `<a>`元素设置title属性，利于 SEO
    * 其他
    * 为html标签添加有意义的class（css 语义化）
4. 语义化的好处
    * 页面内容结构化，方便浏览器和搜索引擎解析
    * 提高代码的维护性和重用性
    * 盲人使用读屏器更好地阅读
  
[回到顶部](#html_docs)



### HTML validation
[https://validator.w3.org/](https://validator.w3.org/)

[回到顶部](#html_docs)

### SEO优化
SEO（search engine optimization）优化：
1. 网站质量
  * 友好的设计，架构以及响应式的网站
  * 网站速度：网站速度是搜索引擎排序的一个重要指标
  * 网站的url使用语义化的有意义的名称`www.example.com/topic-name`
1. html标签语义化，语义化代码让搜索引擎容易理解网页
2. 设置合理的title、description、keywords
  * `<title>`设置合理title
  * `<meta name="description" content="...">`设置合理的description
  * `<meta name="keywords" content="...">`设置合理的keywords
3. 重要内容HTML代码放在最前。搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取；重要内容不要用js输出
4. 少用iframe：搜索引擎不会抓取iframe中的内容
5. 非装饰性`<img>`添加alt属性
6. 停止使用flash，搜索引擎会因为其不安全的性质决定不支持Flash
7. 使用网站地图
8. 提供社交分享

[回到顶部](#html_docs)


### 加快html页面加载
加快html页面加载：
1. 减少页面大小：页面加载重要因素
    * 排除不需要的空格和注释，这叫minimization，像[HTML Tidy](https://www.html-tidy.org/)这样的工具可以移除空格
    * 移动javascript，css文件到外部
2. 减少文件数量：减少文件数量，能够降低HTTP连接的数量，减少了请求时间，且请求的文件如果设置了`If-Modified-Since`header，会花费时间在询问文件是否修改上；对图片使用css image sprite
3. 使用Content Delivery Network（CDN）：减少服务器和访问者的物理距离
4. 减少域名查询，文件过多不同的域名，会花费时间在DNS查询上
5. 对重用内容进行缓存：确保内容可以被缓存，然后设置恰当的过期时间（expiration times），使用`Last-Modified`头部，设置有效率的页面缓存，很多服务器会根据文件系统last-modified日期自动对静态内容(e.g. .html, .css)添加`Last-Modified`头部
6. 优化页面加载顺序：先加载内容，再加载js/css，javascript可以应用async和defer
7. 使用现代css，可以减少markup的数量，如使用flexbox,grid,float,position布局，而不是表格元素嵌套；使用有效markup，浏览器不用转换更正
8. 压缩
    * 压缩svg资源，svg资源通常包含不需要的metadata，配置服务器，为svg资源使用gzip
    * 压缩图片，使用图片压缩工具，如potoshop内置的image-manipulation，[compress jpeg](https://compressjpeg.com/)，[tiny png](https://tinypng.com/)
9. 为图片和表格指定大小，而不是浏览器决定，表格的宽度通过`<col>`指定
10. 为图片应用懒加载，使用属性`loading="lazy"`

[回到顶部](#html_docs)

