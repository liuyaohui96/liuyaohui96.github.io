
# vue_docs
1. [vue_intro](#vue_intro)
    1. [vue.js是什么](#vuejs是什么)
    2. [vue安装](#vue安装)
        1. [构建工具场景下安装vue](#构建工具场景下安装vue)
        2. [非构建工具场景下安装vue](#非构建工具场景下安装vue)
            1. [非构建环境下使用模块语法](#非构建环境下使用模块语法)
    3. [完整版本和运行时版本](#完整版本和运行时版本)
2. [全局API](#全局api)
    1. [createApp()](#createapp)
    2. [nextTick()和更新时机](#nexttick和更新时机)
    3. [version](#version)
3. [app实例方法和实例属性](#app实例方法和实例属性)
    1. [app实例方法](#app实例方法)
        1. [app.mount()](#appmount)
        2. [app.unmount()](#appunmount)
        3. [app.component()](#appcomponent)
        4. [app.directive()](#appdirective)
        5. [app.use()](#appuse)
        6. [app.provide()](#appprovide)
    2. [app实例属性](#app实例属性)
        1. [app.version](#appversion)
        2. [app.config](#appconfig)
            1. [app.config.errorHandler](#appconfigerrorhandler)
4. [指令](#指令)
    1. [指令格式](#指令格式)
    2. [内置指令](#内置指令)
        1. [文本指令与文本插值](#文本指令与文本插值)
            1. [v-text](#v-text)
            2. [v-html](#v-html)
            3. [文本插值](#文本插值)
        2. [v-bind绑定html属性](#v-bind绑定html属性)
            1. [绑定布尔型html属性](#绑定布尔型html属性)
            2. [绑定class html属性](#绑定class-html属性)
            3. [绑定style html属性](#绑定style-html属性)
        3. [条件渲染指令](#条件渲染指令)
            1. [template元素上使用条件渲染指令](#template元素上使用条件渲染指令)
            2. [v-if和v-show的区别](#v-if和v-show的区别)
        4. [列表渲染指令](#列表渲染指令)
            1. [template元素使用v-for](#template元素使用v-for)
            2. [通过key属性管理状态](#通过key属性管理状态)
            3. [列表变化侦测](#列表变化侦测)
            4. [列表过滤或排序](#列表过滤或排序)
        5. [v-if和v-for的优先级](#v-if和v-for的优先级)
        6. [事件处理指令](#事件处理指令)
            1. [事件修饰符类型](#事件修饰符类型)
        7. [v-model](#v-model)
        8. [v-slot](#v-slot)
            1. [slot内置元素](#slot内置元素)
        9. [v-pre](#v-pre)
        10. [v-once](#v-once)
        11. [v-memo](#v-memo)
        12. [v-cloak](#v-cloak)
    3. [自定义指令](#自定义指令)
5. [模板ref注册](#模板ref注册)
    1. [选项api访问模板ref](#选项api访问模板ref)
    2. [组合式api访问模板ref](#组合式api访问模板ref)
6. [组件](#组件)
    1. [定义组件](#定义组件)
        1. [构建中定义组件](#构建中定义组件)
        2. [非构建中定义组件](#非构建中定义组件)
    2. [组件注册](#组件注册)
        1. [全局注册组件](#全局注册组件)
        2. [局部注册组件](#局部注册组件)
        3. [组件注册命名格式](#组件注册命名格式)
    3. [组件上的透传属性](#组件上的透传属性)
        1. [class和style作为透传属性被合并](#class和style作为透传属性被合并)
        2. [控制透传属性继承](#控制透传属性继承)
    4. [props](#props)
        1. [动态传递props](#动态传递props)
        2. [props单向向下传递](#props单向向下传递)
    5. [组件上的事件监听器](#组件上的事件监听器)
    6. [组件上的v-model](#组件上的v-model)
        1. [组件上v-model附加参数](#组件上v-model附加参数)
        2. [组件上v-model附加修饰符](#组件上v-model附加修饰符)
    7. [组件将插槽内容分发到组件内的插槽插口](#组件将插槽内容分发到组件内的插槽插口)
    8. [动态组件和缓存组件](#动态组件和缓存组件)
        1. [component内置元素](#component内置元素)
        2. [is属性](#is属性)
        3. [KeepAlive缓存组件](#keepalive缓存组件)
    9. [provide和inject](#provide和inject)
        1. [provide](#provide)
        2. [inject](#inject)
        3. [provide和inject的响应式](#provide和inject的响应式)
        4. [provide和inject使用symbol值](#provide和inject使用symbol值)
    10. [异步组件](#异步组件)
        1. [全局方法defineAsyncComponent()](#全局方法defineasynccomponent)
    11. [组件之间的循环引用](#组件之间的循环引用)
7. [过渡](#过渡)
    1. [Transition内置组件](#transition内置组件)
        1. [Transition事件监听器](#transition事件监听器)
    2. [TransitionGroup组件](#transitiongroup组件)
8. [附录](#附录)
    1. [组件实例的生命周期](#组件实例的生命周期)
        1. [实例从创建到挂载的生命周期](#实例从创建到挂载的生命周期)
        2. [实例挂载后更新的生命周期](#实例挂载后更新的生命周期)
        3. [实例挂载后卸载的生命周期](#实例挂载后卸载的生命周期)
        4. [缓存实例的生命周期](#缓存实例的生命周期)
    2. [响应式的实现](#响应式的实现)
    3. [DOM模板解析注意事项](#dom模板解析注意事项)
    4. [非父子组件传递数据](#非父子组件传递数据)
    5. [工程中的可重用（Reusability）](#工程中的可重用reusability)
    6. [为什么在模板中监听事件](#为什么在模板中监听事件)
    7. [各数据选项的应用场景以及区别](#各数据选项的应用场景以及区别)
        1. [computed的最佳实践](#computed的最佳实践)
        2. [计算缓存与方法比较](#计算缓存与方法比较)
        3. [计算属性和侦听属性的区别](#计算属性和侦听属性的区别)

## vue_intro

[回到顶部](#vue_docs)

### vue.js是什么
Vue是：
* 用于构建用户界面(user interface)的javascript 框架(framework)
* 渐进式的(progressive): 渐进式是一步步，有阶段地使用Vue.js，不必一开始就使用所有的东西
* 采用MVVM的设计模式：视图层变化的时候，自动更新到viewModel，Vue.js 通过MVVM模式将代码分为视图和数据两部分，只需要操作数据，vue会自动进行DOM操作（响应式编程，即保持状态和视图的同步）
* 组件化，可以将任何封装好代码注册成标签

[回到顶部](#vue_docs)

### vue安装
* 构建工具场景下安装vue
* 非构建工具场景下安装vue

[回到顶部](#vue_docs)

#### 构建工具场景下安装vue
npm安装，指令会自动安装并执行 create-vue，是一个脚手架工具

构建文件下的文件格式：
* 不提供压缩版本 (打包后与其余代码一起压缩)
* 自行import依赖：导入的依赖项也是 esm bundler 构建版本，并将依次导入其依赖项 (例如：@vue/runtime-core imports @vue/reactivity)
* vue.esm-bundler.js：包含运行时编译器
* vue.runtime.esm-bundler.js：(默认) 仅运行时，并要求所有模板都要预先编译，使用构建工具时，模板通常是预先编译的 (例如：在 `*.vue` 文件中)


```shell
# 最新稳定版
npm init vue@latest

# 建议设置淘宝镜像：https://npm.taobao.org/
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install [name]
```

也可以使用其他的构建工具（如 vue-cli | vite | webpackrollup | parcel 等）

[回到顶部](#vue_docs)

#### 非构建工具场景下安装vue
非构建环境下，可以通过从CDN直接引入或者自行下载托管，可以从[unpkg](https://unpkg.com/browse/vue@3.2.31/) 或者[jsdelivr](https://cdn.jsdelivr.net/npm/vue@next/dist/) 上引入或者下载：
* 其中对于非生产环境下，可以链接到`..../vue@next` 或者 `..../vue@latest`  会自动重定向到最新版本的`.../vue.global.js`文件
* 对于生产环境下，防止新版本造成破坏，推荐链接到一个明确的版本号和构建文件

非构建环境下的vue文件格式为 `vue(.runtime).global(.prod).js`
* vue.global.js：完整构建版本。包含编译器和运行时的，支持动态编译模板    
* vue.runtime.global.prod.js：vue.runtime.global.js 的压缩后的生产环境版本
* vue.runtime.global.js：只包含运行时，并且需要在构建步骤期间预编译模板
* vue.global.prod.js：vue.global.js的压缩后的生产环境版本

```html
<!-- 学习环境下使用 -->
<!-- 生产环境下应该指定版本和构建文件 -->
<script src="https://unpkg.com/vue@latest"></script>
<!-- latest 换成 next一样的效果 -->
<!-- <script src="https://unpkg.com/vue@next"></script> -->

<div id="app">{{ message }}</div>

<script>
  Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
      };
    },
  }).mount("#app");
</script>
```

[回到顶部](#vue_docs)

##### 非构建环境下使用模块语法
非构建环境下，启用es模块语法, 需要通过`<script type="moudle">` 引入，文件格式为`vue(.runtime).esm-browser(.prod).js`
* vue.esm-browser.js: 包含编译器和运行时的，支持动态编译模板
* vue.esm-browser.prod.js: vue.esm-browser.js 的压缩后的生产环境版本
* vue.runtime.esm-browser.js: 只包含运行时，并且需要在构建步骤期间预编译模板
* vue.runtime.esm-browser.js: vue.runtime.esm-browser.js 的压缩后的生产环境版本


```html
<script type="importmap">
  {
      "imports": {
          "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
      }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from "vue";

  createApp({
    data() {
      return {
        message: "Hello Vue!",
      };
    },
  }).mount("#app");
</script>

<!-- 模块导入cdn -->
<script type="module">
  import Vue from "https://unpkg.com/vue@next";
</script>
```

[回到顶部](#vue_docs)

### 完整版本和运行时版本
完整版本包含编译器和运行时(compiler + runtimer)。如果需要在客户端上编译模板 (即：将字符串传递给 template 选项，或者使用元素的 DOM 内 HTML 作为模板挂载到元素)，将需要编译器，即完整版本


当使用 vue-loader 时，*.vue 文件中的模板会在构建时预编译为 JavaScript，在最终的捆绑包中并不需要编译器，因此可以只使用运行时构建版本（运行时版本相比完整版体积要小大约 30%，所以应该尽可能使用运行时版本）

```js
// 需要编译器
Vue.createApp({
  template: '<div>{{ hi }}</div>'
})

// 不需要
Vue.createApp({
  render() {
    return Vue.h('div', {}, this.hi)
  }
})
```

[回到顶部](#vue_docs)


## 全局API
全局方法：
* createApp()
* nextTick()

[回到顶部](#vue_docs)

### createApp()
```typescript
// createApp()方法的 typescript 描述
// 第一个参数接收一个根组件
// 第二个参数，可选的，传递到根组件的props对象
// 返回一个应用实例
function createApp(rootComponent: Component, rootProps?: object): App
```

1. `createApp()`方法描述：返回创建的应用实例
2. 不同于vue2 通过`new Vue()`创建应用实例，vue3通过`createApp()`创建应用实例
3. `createApp()`不再受限于只有一个app实例，createApp() 允许允许多个 Vue 应用共存于同一个页面上，而且每个应用都拥有自己配置（configuration）和全局资源（global asset）


`createApp()`方法用例

```javascript
// 创建实例知乎需要使用app实例方法mount()挂载到
// 对应的DOM元素上
import { createApp } from 'vue'

const app = createApp({
  /* root component options */
})
app.mount('#app')
// === end

// === 
// 或者根组件从其他文件定义
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// === 创建多app实例
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
```

[回到顶部](#vue_docs)


### nextTick()和更新时机
```typescript
// nextTick()方法的 typescript 描述
// 第一个函数参数callback
// 等待更新完成之后调用callback
// 返回一个Promise
function nextTick(callback?: () => void): Promise<void>
```

1. `nextTick()`全局方法描述：等待DOM的下一次更新清空（next updata flush）
2. Vue中DOM更新是异步的：更改了响应式状态（mutate reactive state），将开启一个队列，缓存（buffer）同一事件循环中发生的所有数据变更直到更新周期（update cycle）中的"next tick"，从而确保无论改变多少次状态（state），每个组件只更新一次
3. `nextTick()`用途：状态更改之后，等待DOM更新的完成


`nextTick()`方法用例：

```javascript
nextTick(function () {
  // DOM 更新之后的callback调用
})
// === end

// ===
// nextTick()返回promise
// 可以作为一个 Promise 使用
nextTick()
  .then(function () {
    // DOM 更新了
  })

// === async awit语法
async functionName(){
  // 更新状态
  // 还不能访问更新后的DOM

  await nextTick()
  
  // 可以访问更新后的DOM
}
```

[回到顶部](#vue_docs)


### version
`version`全局属性返回vue当前版本的字符串

`version`全局属性用例

```javascript
import { version } from 'vue'

console.log(version)
```

[回到顶部](#vue_docs)

## app实例方法和实例属性
* app实例方法
* app实例属性

[回到顶部](#vue_docs)

### app实例方法
* app.mount()
* app.unmoount()
* app.component()
* app.directive()
* app.use()
* app.provide()

[回到顶部](#vue_docs)

#### app.mount()
```typescript
// app.mount() 方法的 typescript 描述
interface App {
    // 第一个参数是dom element
    // 或者一个string表示的css selector
    mount(rootContainer: Element | string): ComponentPublicInstance
    // 返回根组件实例（ root component instance）
}
```

1. `app.mount()`实例方法描述：挂载（Mounts ）应用实例到根容器上，每一个app实例，只能调用一次mount


`app.mount()`实例方法用例

```javascript
import { createApp } from 'vue'
const app = createApp(/* ... */)

// string to respresent css selector
app.mount('#app')

// dom element
app.mount(document.body.firstChild)
```

[回到顶部](#vue_docs)

#### app.unmount()
```typescript
// app.unmount()方法的 typescript 描述
interface App {
    unmount(): void
}
```
1. `app.unmount()`实例方法描述：卸载（unmount）已经挂载的应用实例，触发app的组件树内所有的组件的卸载生命周期钩子（unmoun lifecyc hook）

`app.unmount()`实例方法 用例

```javascript
app.unmount()
```

[回到顶部](#vue_docs)

#### app.component()
```typescript
// app.component() 方法的 typescript 描述
interface App {
    // 第一个参数，组件的string 名称
    // 对已经注册的组件进行检索（restrieve）
    component(name: string): Component | undefined
    // 返回检索到的Conponent

    // 如果有两个参数
    // 第一个参数是定义组件的名称，
    // 第二个参数定义一个Component对象
    component(name: string, component: Component): this
    // 返回app组件实例
}
```

1. `app.component()`实例方法描述：用于注册一个全局组件，全局组件在app内所有的tempalte上都能使用



app.component() 用例

```javascript
// 以下用例，app实例已经创建
import { createApp } from 'vue'
const app = createApp({})

// retrieve a registered component
// 获得已经注册的组件
const MyComponent = app.component('MyComponent ')
// === end

// === 
// 引入SFC，然后全局注册
import MyComponent from './App.vue'
app.component('MyComponent', MyComponent)
// 通过options 对象注册一个组件
app.component('MyComponent2', {
    /* ... */
})
// 可以链式注册全局组件
app
  .component('ComponentA', ComponentA)
  .component('ComponentB', ComponentB)
  .component('ComponentC', ComponentC)
```

[回到顶部](#vue_docs)

#### app.directive()
```typescript
// app.directive() 方法的 typescript 描述
interface App {
  // 第一个参数字符串名称
  directive(name: string): Directive | undefined
  // 返回字符串名称指定的Directive

  // 第一个参数指定指令的名称
  // 第二个参数是一个Directive对象，里面定义了生命周期钩子
  directive(name: string, directive: Directive): this
  // 返回app实例
}
```

1. `app.directive()`实例方法描述：注册全局自定义指令。如何注册全局使用，详细请看自定义指令部分

`app.directive()`实例方法用例

```javascript
import { createApp } from 'vue'

const app = createApp({
  /* ... */
})
// retrieve a registered directive
const myDirective = app.directive('my-directive')
// register (object directive)
app.directive('my-directive', {
  /* custom directive hooks */
})
// register (function directive shorthand)
// 相当于mounted，undated具有同样的行为
app.directive('my-directive', () => {
  /* ... */
})
```

[回到顶部](#vue_docs)

#### app.use()
```typescript
// app.use() 方法的 typescript 描述
interface App {
  // 第一个参数plugin，是要安装的插件
  // 后续的参数是可选的plugin option，是一个任意类型的数组
  use(plugin: Plugin, ...options: any[]): this
  // 返回app实例
}
```
1. `app.use()`实例方法描述： 用于安装插件（plugin）
2. 对于要引入的插件plugin，可能是
    * 一个对象，提供了 install 方法
    * 一个函数，它会被作为 install 方法
3. `app.use(plugin)`调用时， 对应的plugin中的install方法会被调用，`app.use()`的第二个后的后续参数，会传递给install方法。当 install 方法被同一个插件多次调用，插件将只会被安装一次


`app.use()`实例方法用例

```javascript
import { createApp } from 'vue'
import MyPlugin from './plugins/MyPlugin'

const app = createApp({
  /* ... */
})
// 调用 `MyPlugin.install()`
app.use(MyPlugin)
```

[回到顶部](#vue_docs)

#### app.provide()
```typescript
// app.provide()方法的 typescript 描述
interface App {
  // 第一个参数是provide属性的key，可以是symbol，字符串
  // 第二个参数是provide属性对应的值
  provide<T>(key: InjectionKey<T> | symbol | string, value: T): this
  // 返回app实例
}
```
1. `app.provide()`实例方法描述：用于在应用内为后代可以被注入（injected）的组件提供属性，是应用层级的provide


`app.provide()`实例方法用例:

```javascript
import { createApp } from 'vue'

const app = createApp(/* ... */)

app.provide('message', 'hello')
```

[回到顶部](#vue_docs)

### app实例属性
* app.version
* app.config

[回到顶部](#vue_docs)

#### app.version
```typescript
// app.version 方法的 typescript 描述
interface App {
  version: string
}
```
1. `app.version`实例属性描述：返回使用的vue版本的字符串，在plugin内使用很方便，可以根据不同的vue版本，选择需要的plugin：

`app.version`实例属性用例

```javascript
// erforming a version check inside a plugin
// 插件内检测版本
export default {
  install(app) {
    const version = Number(app.version.split('.')[0])
    if (version < 3) {
      console.warn('This plugin requires Vue 3')
    }
  }
}
```

[回到顶部](#vue_docs)

#### app.config
app实例暴露（expose）一个cofig对象，包含了app实例配置设置（configuration setting）

```javascript
import { createApp } from 'vue'

const app = createApp(/* ... */)
console.log(app.config)
```

[回到顶部](#vue_docs)

##### app.config.errorHandler
```typescript
// app.config.errorHandler 的 typescript 描述
interface AppConfig {
    // 是一个方
    errorHandler?: (
        // 错误
        err: unknown,
        // app实例
        instance: ComponentPublicInstance | null,
        // `info` is a Vue-specific error info,
        // 错误信息，字符串info
        info: string
    ) => void
}a
```
1. `app.config.errorHandler`属性描述：是app.cofig对象下的方法，用于处理app实例里面没有被捕获（uncatched）的error的全局handler

`app.config.errorHandler`属性用例

```javascript
app.config.errorHandler = (err, instance, info) => {
    // handle error, e.g. report to a service
}
```

[回到顶部](#vue_docs)


## 指令
vue指令可以在模板上的html元素上使用，带有`v-`前缀

* 指令格式
* 内置指令
* 自定义指令

[回到顶部](#vue_docs)

### 指令格式
1. 普通指令格式`v-directiveName= expression`：指令接收表达式作为值。例外：
    * `v-for` 接收的是 `xxx in xxx`的值
    * `v-on` 可以接收内联javascript语句
2. 指令通过`:`附加参数`v-directiveName:argumentName = expression`
3. 指令通过`[]`可以实现动态参数，即`v-directiveName:[argumentExpression] = expression`
    * argumentExpression是一个表达式，结果是字符串或者null，任何其它非字符串类型的值都将会触发一个警告
    * 动态参数的值可以被显性地用于移除绑定
    * `[]`动态参数的表达式如果很复杂，可以通过计算属性替换
4. 指令后可以通过`.`附加修饰符 (modifier)`v-directiveName.modifierName`，指令的修饰符表明指令需要以一些特殊的方式被绑定


[回到顶部](#vue_docs)

### 内置指令
内置指令分为：
* 文本指令
* html属性绑定指令

[回到顶部](#vue_docs)

#### 文本指令与文本插值
vue指令有两个和文本相关的指令：
* v-text
* v-html

对于文本处理，还有文本插值（text interpolation）

[回到顶部](#vue_docs)

##### v-text
1. `v-text`描述：接受一个表达式作为值，用于更新元素的 `textContent`属性
2.  `v-text`会替换整个元素的的textContent，如果要更新部分的 textContent ，需要使用文本插值` {{ Mustache }}`

`v-text`用例

```html
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```

[回到顶部](#vue_docs)

##### v-html
1. `v-html`描述：接受一个表达式，表达式的值作为普通HTML(plain HTML)，用于更新元素的`innerHTML`属性
2. 通过`v-html`组合模板（template）不是一个好思路，应该使用组件代替
3. 安全警告：在网站上动态渲染(dynamically rendering)任意HTML是危险的，因为这容易引起XSS attacks，仅在信任的内容上使用`v-html`, 而不要再用户提供的内容上使用。
4. 注意，在单文件组件（single file component）里， 作用域样式（scoped style）不会应用在`v-html`内部，因为那部分html没有被Vue的模板编译器处理。如果希望作用域样式(scoped style）可以定位到`v-html`的内容，可以使用CSS Modules或用一个额外的全局 `<style>` 元素手动设置类似BEM的作用域策略

`v-html`用例

```html
<!-- 
rawHTML:
<span style="color: red">This should be red.</span> 
-->
<p v-text="rawHtml"></p>
<!-- 
输出，不会解析html：=>
<span style="color: red">This should be red.</span>
-->

<p v-html="rawHtml"></p>
<!-- 
html 会被解析 => This should be red.
-->
```

[回到顶部](#vue_docs)

##### 文本插值
1. 文本插值（text interpolation）`{{ expression}}`的描述：使用“Mustache”语法，接受一个表达式


文本插值的用例：

```html
<span>Message: {{ msg }}</span>

{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

<!-- 调用表达式调用函数 -->
{{ formatDate(date) }}

{{ message.split('').reverse().join('') }
```

[回到顶部](#vue_docs)


#### v-bind绑定html属性
1. `v-bind`描述：用于动态绑定一个或多个html属性（attribute）
2. `v-bind=expression`, 接受一个包含多个html属性及其值的对象
3. `v-bind`通过`:`附加参数：`v-bind:attributeName=expression`，参数用于指定一个html属性名，表达式的值作为该html属性的值
4. `v-bind`通过`[]`实现动态参数：`v-bind:[attributeName]=expression`。某些字符（如空格和引号）在html属性名里是无效的，可以不要使用这些字符或者用计算属性替代这种复杂表达式
5. `v-bind`通过`.`附加修饰符`v-bind:attrebuteName.modifierName=expression`，修饰符有
    * .camel：将 kebab-case 命名转换为camelCase 命名
    * .prop：强制绑定为DOM property。如果标签是一个组件，`.prop`会在元素的`$el`属性上设置属性
    * .attr：强制绑定为DOM attribute
6. 缩写语法：
    * `v-bind`缩写为`:`
    * `v-bind:attrubuteName.prop` 缩写为`.attributeName`
    * * `v-bind:attrubuteName.attr` 缩写为`^attributeName`

`v-bind`用例

```html
<!-- binding an object of attributes -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- 附加参数 --><!-- 绑定一个属性 -->
<img v-bind:src="imageSrc">
<!-- 动态属性名-->
<button v-bind:[key]="value"></button>
<!-- shorthand -->
<img :src="imageSrc" />

<!-- 这会触发一个编译器警告，有空格和'' -->
<a :['foo' + bar]="value"> ... </a>

<!-- 附加修饰符 -->
<div :someProperty.prop="someObject"></div>
<!-- equivalent to -->
<div .someProperty="someObject"></div>

<div :someProperty.attr="someString"></div>
<!-- equivalent to -->
<div ^someProperty="someString"></div>

<!-- 通过 prop 修饰符绑定 DOM 属性 -->
<div v-bind:text-content.prop="text"></div>

<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
<!-- prop binding. "prop" must be declared in the child component. -->
<MyComponent :prop="someThing" />

<!-- pass down parent props in common with a child component -->
<MyComponent v-bind="$props" />
```

[回到顶部](#vue_docs)



##### 绑定布尔型html属性
`v-bind`绑定的html属性的值是null或者undefined，那么该 attribute将会从渲染的元素上移除

[回到顶部](#vue_docs)

##### 绑定class html属性
`v-bind`绑定class html属性，表达式的值可以是对象和数组：
1. 对象语法：`v-bind:class="{className: boolean_exprssion, ...}`
2. 数组语法：`v-bind:class="[expression|object, ...]`，数组内的元素可以是解析为字符串的expression或者`{className: boolean_exprssion}`的对象形式
3. 如果template中定义class html属性的语法比较长，可以将表达式把数据放到data或者computed上


`v-bind`绑定class html属性用例：

```html
<!-- 对象语法 -->
<!-- 已知 isActive: true, hasError: false-->
<div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>
<!-- 渲染成 -->
<div class="static active"></div>
<!-- === end -->

<!-- 数组语法 -->
<!-- 接收一个解析为字符串的表达式，或者对象语法 -->
<div :class="[classA, { classB: isB, classC: isC }]"></div>
<div :class="[activeClass, errorClass]"></div>
<div :class="[isActive ? activeClass : '', errorClass]"></div>
<div :class="[{ active: isActive }, errorClass]"></div>
```

[回到顶部](#vue_docs)

##### 绑定style html属性
`v-bind`style html属性，表达式的值可以是对象和数组：
1. 对象语法：`v-bind:style="{propertyName: value, ...}"`。CSS 属性名的命名方式。style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，Vue只会渲染数组中最后一个被浏览器支持的值
    * 驼峰式 (camelCase) 
    * 短横线分隔 （kebab-case），要用引号包围
2. 数组语法(可以将多个样式对象应用到同一个元素上)：`v-bind:style="[styleObj1, styleObj2, ...]`。
3. `v-bind:style` 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue会自动侦测并添加相应的前缀。

4. 如果template中定义style html属性的语法比较长，可以将表达式把数据放到data或者computed上


```html
<!-- 
css属性名使用camelCase，
或这引号包围的kebab-cased命名
-->
<!-- 对象语法 -->
<div :style="{ 'font-size': fontSize + 'px' }"></div>
<!-- style 多重值 -->
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>

<!-- 数组语法 -->
<div :style="[styleObjectA, styleObjectB]"></div>
```

[回到顶部](#vue_docs)



#### 条件渲染指令
条件渲染指令有：
1. `v-if=`描述：接受一个表达式，表达式为真时渲染元素或模板片段（template fragment）
2. `v-else`和`v-else-if`描述：配合`v-if`使用
    * `v-else` 不需要表达式，是`v-if / v-else-if` 的else 块，前一个兄弟元素必须有`v-if`或者`v-else-if`
    * `v-else-if` 不需要表达式，是`v-if / v-else-if` 的else if块，前一个兄弟元素必须是`v-if`或者`v-else-if`
* `v-show`描述：接受一个表达式，v-show 切换display css样式属性，在DOM 渲染中保留该元素，v-show不支持在 `<template> `元素上使用

条件渲染指令用例：

```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>

<!-- 例子-->
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

[回到顶部](#vue_docs)

##### template元素上使用条件渲染指令
条件渲染指令只能应用于一个元素，如果切换多个元素，可以用template元素包裹多个元素，在template元素上应用条件渲染指令`v-if v-else v-else-if`（v-show不能在`template`元素上使用）

用例：

```html
<!-- v-else 和 v-else-if 也可以在 <template> 上使用 -->
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

[回到顶部](#vue_docs)

##### v-if和v-show的区别
v-if和v-show的区别：
1. 初始渲染来看：
    * v-if是惰性（lazy）的，在初始渲染时条件为假，什么也不做，直到条件第一次变为真时，才会渲染条件块（condition block）
    * v-show不管初始条件是什么，元素总是会被渲染，
2. 从切换来看：
    * v-if切换会使得条件块内的事件监听器和子组件被销毁和重建；
    * v-show 只是简单地切换元素的 CSS display 属性，元素始终保留在 DOM 中

所以，v-if 有更高的切换开销，运行时条件很少进行切换，则使用 v-if。v-show 有更高的初始渲染开销。需要非常频繁地切换，则使用 v-show

[回到顶部](#vue_docs)


#### 列表渲染指令
指令`v-for`用于列表渲染：
1. `v-for`指令描述：根据源数据（source data）多次渲染元素或者模板块（template block）
2. 语法语法格式：
    * `v-for=alias in expression`
    * `v-for=aliaa of expression`，JavaScript 的迭代器语法非常相似
    * `alias` 第一个值是迭代项的value；可选的第二个值是key，数组是index；可选的第三个值是index（对于对象）
    * `expression` 是 Array | Object | number | string | Iterable 参与的表达式，不仅是迭代对象，使用number也可以
3. v-for支持对象解构

`v-for`指令用例：

```html
<div v-for="item in items">
  {{ item.text }}
</div>

<div v-for="(item, index) in items"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, name, index) in object"></div>

<span v-for="n in 10">{{ n }} </span>

<!-- 每个item是一个对象，将对象中的message解构出来 -->
<li v-for="{ message } in items">
  {{ message }}
</li>
```

[回到顶部](#vue_docs)

##### template元素使用v-for
v-for 默认只能渲染一个元素，多个元素的内容，可以使用`<template>`元素包裹这些元素，然后在`<template>`元素上使用v-for

用例：

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

[回到顶部](#vue_docs)

##### 通过key属性管理状态
通过key属性管理状态：
1. key的值是一个number | string | symbol 值，具有相同父元素的孩子的key必须是独一无二的，重复的key会导致渲染错误
2. key用途：
    * 用来和`v-for`一起使用。尽可能使用`v-for`时配合html `key`属性使用，除非DOM的迭代内容很简单。v-for渲染的列表默认使用“就地更新”的策略，使用最小化移动的算法，就地(in place)修补和重用元素。如果列表项有key属性，在新旧节点（node）比较的时候，key作为虚拟DOM算法（virtual DOM algorithm）的线索（hint），用来去识别（identify）虚拟节点（vnode），基于key顺序的变化重新排列（reorder）元素，并且会移除不再存在key的元素
    * 用来强值元素/组件的替换，而不是重用它们，当需要正确触发生命周期钩子，或者触发过渡的时候很有用

用例：

```html
<div v-for="item in items" v-bind:key="item.id">
  <!-- 内容 -->
</div>

<!-- text changes -->
<!-- <span> will always be replaced -->
<!-- instead of patched -->
<!-- a transition will be triggered -->
<transition>
  <span :key="text">{{ text }}</span>
</transition>
```

[回到顶部](#vue_docs)


##### 列表变化侦测
数组是列表常用的数据源，更新数组的方法：
1. 包装了一批侦听数组的变更（mutation）方法，这些方法将会触发视图更新：
    * push()
    * pop()
    * shift()
    * unshift()
    * splice()
    * sort()
    * reverse()
2. 对于非变更方法，需要将旧的数组替换为新的


用例

```javascript
// 非变更方法，将旧的数组替换为新的
this.items = this.items.filter((item) => item.message.match(/Foo/))
```

[回到顶部](#vue_docs)

##### 列表过滤或排序
显示数组经过过滤或排序后的内容，而不实际变更或重置原始数据:
1. 可以使用计算属性
2. 方法`Array.prototype.sort() | Array.prototype.reverse()` 排序会改变原数组，所以，创建可以使用扩展运算符，复制副本后再使用`[...arr].sort() | [...arr].reverse()`


[回到顶部](#vue_docs)


#### v-if和v-for的优先级
当`v-if`和`v-for`同时存在于一个元素上的时候，v-if 会首先被执行，不建议同时使用 v-if 和 v-for

用例：

```html
<!--
This will throw an error because property "todo"
is not defined on instance.
-->
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>

<!-- 修改 -->
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```

[回到顶部](#vue_docs)

#### 事件处理指令
事件处理指令是`v-on`指令：
1. `v-on`指令描述：用于为元素绑定一个事件监听器（event listener）
2. `v-on=eventHandlerObject`，接受一个对象，这个对象键/值 对应若干个 事件类型/事件处理器
3. `v-on`的事件处理器有两种
    * 方法事件处理器（method handler）：使用定义在组件上的方法作为事件处理器
    * 内联事件处理器（inline handler）：javascript语句作为事件处理器。可以在内联事件处理器中调用方法，传递实参传给方法的形参，如`$event`作为实参传递给方法（方法定义一个位置形参接受这个实参即可）
    * 是何种事件处理器，会自动检测，如合法的JavaScript标识符或属性访问，如`foo | foo.bar | foo[bar]等`就是方法事件处理器，如`foo() | count++`就是内联事件处理器
4. `v-on`通过`:`附加参数, 参数指定事件类型`v-on:eventTypeName`
5. `v-on`通过`[]`实现动态参数，即动态事件类型`v-on:[eventTypeName]`
6. `v-on`通过`.`附加修饰符`v-on:eventTypeName.modifierName`，事件修饰符类型见下一个section
7. `v-on`缩写为 `@`

> `v-on` 通过`:`附加参数指定事件类型，事件类型可以参考[native DOM events](https://developer.mozilla.org/en-US/docs/Web/Events)


用例：

```html
<!-- object syntax -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>

<!-- 方法事件处理器 -->
<button @click="say">Say hello</button>
<!-- 内联事件处理器 -->
<button @click="say('hello')">Say hello</button>
<button @click="say('bye')">Say bye</button>

<!-- 附加参数-->
<button v-on:click="doThis"></button>
<!-- 动态参数，动态事件类型 -->
<button v-on:[event]="doThis"></button>
```

[回到顶部](#vue_docs)


##### 事件修饰符类型
事件修饰符类型
1. 常用
    * `.stop`：调用 `event.stopPropagation()` 停止冒泡，阻止事件继续传播
    * `.prevent`：调用 `event.preventDefault()` 阻止默认行为
    * `.capture`：事件捕获模式（capture mode）中添加事件监听器，即先处理外部的事件，再处理该目标事件
    * `.self`：`event.target`是当前元素自身时才进行事件处理
    * `.once`：事件只会被触发一次。对应`addEventListener`中的once选项
    * `.passive`： 以 `{ passive: true }` 模式添加侦听器，对应`addEventListener`中的passive选项，表示监听器（listener）永远不会调用 preventDefault()，如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告（即`.prevent 与 .passive`不能一起使用）。`.passive` 修饰符一般用于触摸事件的监听器，可以用来改善移动端设备的滚屏性能
2. 鼠标配合`@click`等鼠标事件的修饰符：
    * `.left`：点击鼠标左键时触发。
    * `.right`：点击鼠标右键时触发。
    * `.middle`：点击鼠标中键时触发。
3. 键盘配合`@keyup`等键盘事件的修饰符：
    * `.keyAlias`：将 [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的任意有效按键名转换为kebab-case来作为修饰符,如`@keyup.enter | @keyup.page-down`
    * 以下别名修饰符：
        * `.enter`
        * `.tab`
        * `.delete` (捕获“Delete”和“Backspace”两个按键)
        * `.esc`
        * `.space`
        * `.up`
        * `.down`
        * `.left`
        * `.right`
4. 系统按键别名修饰符：系统按键别名修饰符与常规按键不同，与 `keyup` 事件一起使用时，处在按下（pressed）状态时候事件才被触发，即`@keyup.ctrl` 只会在按住 ctrl 但松开了另一个键时被触发。系统按键别名修饰符有：
    * `.ctrl`
    * `.alt`
    * `.shift`
    * `.meta`（在Windows键盘上，meta 键是Windows键，其他电脑系统也许不一样）
* `.exact修饰符`：精确（exact）控制系统修饰符组合 触发的事件


串联使用修饰符时的注意事项：
* 顺序很重要，按照顺序执行：`v-on:click.prevent.self`会阻止所有的点击，`v-on:click.self.prevent` 只会阻止对元素自身的点击。
* 不要把 `.passive`和`.prevent` 一起使用，`.passive`会告诉浏览器不想阻止事件的默认行为，`.prevent`将会被忽略，同时浏览器可能会展示一个警告

用例：

```html
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div @click.capture="doThis">...</div>

<!-- the click event will be triggered at most once -->
<a @click.once="doThis"></a>

<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for `onScroll` to complete  -->
<!-- in case it contains `event.preventDefault()`                -->
<div @scroll.passive="onScroll">...</div>

<!-- ============= @keyup 配合别名 -->
<!-- only call `vm.submit()` when the `key` is `Enter` -->
<input @keyup.enter="submit" />
<!-- 将查找出来的key别名转换为kebab-case -->
<input @keyup.page-down="onPageDown" />


<!-- ==== exact -->
<!-- this will fire even if Alt or Shift is also pressed -->
<button @click.ctrl="onClick">A</button>
<!-- this will only fire when Ctrl and no other keys are pressed -->
<button @click.ctrl.exact="onCtrlClick">A</button>
<!-- this will only fire when no system modifiers are pressed -->
<button @click.exact="onClick">A</button>
```

[回到顶部](#vue_docs)


#### v-model

`v-model`指令：
1. `v-model`指令描述用于为表单输入（form input）或组件创建双向绑定（two way binding）
2. 在`<input> | <select> | <textarea> | 自定义组件`元素上使用
3. `v-model=data`表单控件和对应的data设置双向绑定，对于不同的表单控件，监听对应的表单事件和修改相应的html属性，然后将更新绑定到数据上
4. `v-model`通过`.`附加修饰符，修饰符有：
    * .lazy：`v-model`会在每次 input 事件后更新数据 (IME composition 阶段的状态例外), 附加lazy修饰符用于每次 change 事件后更新数据, 而不是input事件
    * `.number`：用户输入自动转换为数字。即使在 `type="number"`时，`<input>`元素的值也总会返回字符串，因此`.number`修饰符会在输入框有type="number" 时自动应用
    * `.trim`：过滤表单输入的首尾空格
5. `<input type="text">` 和 `<textarea>`的`v-model`实现
    * 使用`value`属性和`input`事件
    * `v-model=data`绑定到一个字符串数据上
6. `<input type="checkbox">`的`v-model`实现
    * 使用`checked`属性和`change`事件
    * 单个复选框（checkbox），`v-model=data`绑定到一个接收boolean值的数据上；如果不满足于boolean值，`true-value`和`false-value`的html属性，分别指定单选框，复选框（checkbox）选中和未选中的值，这两个html属性，只有在`v-model`存在时工作
    * 多个复选框（checkbox），需要给每一个checkbox设置一个value html属性，`v-model=data`绑定到一个保存各个选中checkbox的value属性的数组或者集合上
7. `<input type="radio">`的`v-model`实现
    * 使用`checked`属性和`change`事件
    * 需要给每一个radio设置一个value html属性，`v-model=data`绑定到一个存放radio的value属性的字符串类型数据上
8. `<select>` 的`v-model`实现
    * 使用的`value`属性和`change`作为事件
    * 单选时，如果`<option>`没有指定value html属性，v-model把`<option>`的内容作为value属性，`v-model=data`绑定到一个接收字符串的数据上
    * 多选时，如果`<option>`没有指定value html属性，v-model把`<option>`的内容作为value属性，`v-model=data`绑定到一个数组上
9. 对于需要使用 IME 的语言 (中文，日文和韩文等)， v-model 不会在 IME 输入的组合状态时触发更新。如果想在此时也触发更新，请使用`input`事件监听器和`value`绑定值而不要使用`v-model`


> 注意插值表达式不能在textarea使用

`v-model`指令用例：

```html
<!-- 修饰符 -->
<!-- synced after "change" instead of "input" -->
<input v-model.lazy="msg" />
<input v-model.number="age" />
<input v-model.trim="msg" />
<!-- === end -->

<!-- 以下是v-model在各控件上的双向绑定-->

<!-- 
input[type="text"] 和 textare
绑定到一个字符串数据上
-->
<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />
<!-- textarea -->
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
<!-- === end -->

<!-- === -->
<!-- 单选checkbox，绑定到boolean值上-->
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
<!-- 不满足于boolean值，可以使用true-value，false-value属性 -->
<input type="checkbox" v-model="toggle" 
    true-value="yes" false-value="no" />
<!-- ===end -->

<!-- === -->
<!-- 多个checkbox -->
<!-- 绑定到一个数组上 -->
<div>Checked names: {{ checkedNames }}</div>
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<!-- === end -->

<!-- === -->
<!-- radio 单选按钮 -->
<!-- 绑定到一个字符串上 -->
<div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>
<!-- === end -->

<!-- === -->
<!-- select -->
<!-- 单选绑定到字符串数据上 -->
<!-- 多选绑定到数组数据上 -->
<div>Selected: {{ selected }}</div>
<select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
```

[回到顶部](#vue_docs)


#### v-slot
`v-slot`指令
1. `v-slot`指令描述：在组件上或者`<template>`内置元素上使用。用于将组件上的插槽内容（slot content）分发到组件内的插槽插口（slot outlet），插槽插口（slot outlet）由内置元素`<slot>`定义
2. `v-slot`不附加参数，如果不指定argument，会把插槽内容分发到name 属性是default的`<slot>`插槽插口
3. `v-slot`通过`:`附加argument，`v-slot:slotName`，argument用于指定插槽的名称，使其成为具名插槽（named slots），将内容分发到有相同名称属性（name attribute）的`<slot>`插槽插口（slot outlet）上
4. `v-slot:slotName=expression`：接收一个表达式，接收来自`<slot>`插槽插口（slot outlet）传递的slot props。
    * 接收来自name属性是default的`<slot>`插槽插口（slot outlet），可以显式指定argument为default或者忽略argument
    * 表达式可以使用对象解构语法接收slotprops
* `v-slot:`缩写是`#`

`v-slot`指令用例

```html
<!-- 默认插槽 -->
<button type="submit">
  <slot>
    Submit <!-- 默认内容 -->
  </slot>
</button>
<!-- === end -->

<!-- Named slots -->
<BaseLayout>
  <template v-slot:header>
    Header content
  </template>

  <template v-slot:default>
    Default slot content
  </template>

  <template v-slot:footer>
    Footer content
  </template>
</BaseLayout>
<!-- === end -->

<!-- ===-->
<!-- 动态插槽名 -->
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
<!-- === end -->

<!-- === -->
<!-- scoped slots作用域插槽 -->
<!-- in <MyComponent> template -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
<!-- in slot content -->
<!-- defualt插槽接收 slotprops，解构语法 -->
<MyComponent v-slot="{ text, count }">
  {{ text }} {{ count }}
</MyComponent>
<!-- === end -->

<!-- === -->
<!-- Named slot that receives props from <slot>-->
<InfiniteScroll>
  <!-- 可以使用解构语法，也可以不使用 -->
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</InfiniteScroll>

<!-- in slot template -->
<ul>
  <li v-if="!items.length">
    Loading...
  </li>
  <li v-for="item in items">
    <slot name="item" v-bind="item"/>
  </li>
</ul>
```

[回到顶部](#vue_docs)

##### slot内置元素
```typescript
// <slot> typescript 描述
interface SlotProps {
   /**
   * Reserved for specifying slot name.
   */
  /**
   * 用于指定插槽插口（slot outlet）的名称
   * 如果不指定，则为default
   */

  name?: string

  /**
   * Any props passed to <slot> to passed as arguments
   * for scoped slots
   */
  /**
   * 其他属性用定义slot props
   * 传递给组件上的（外部的）作用域插槽（scopeed slot）
   */
  [key: string]: any
}
```

1. `<slot>`内置元素描述：在模板（template）中存放分发内容的插槽插口（slot outlet），虽然是元素，但是在模板（template）中这个元素会被编译为javascirpt，并不是原生的html 元素
2. 定义在父亲组件上的slot props，这些slot props，也可以使用`v-bind`动态绑定


`<slot>`内置元素用例：

```html
<slot name="header" message="hello"></slot>

<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
```

[回到顶部](#vue_docs)


#### v-pre
`v-pre`指令
1. `v-pre`指令描述：用于指定当前元素及其子元素跳过编译（Skip compilation ），最常见的用途是用来显示原始 Mustache 标签
2. 不需要附加参数，附加修饰符，也不接受表达式

```html
<!-- 显示原生的mustanche标签 -->
<span v-pre>{{ this will not be compiled }}</span>
```

[回到顶部](#vue_docs)

#### v-once
`v-once`指令
1. `v-once`指令描述：用于只渲染元素或组件一次，跳过后续的更新，后续的重新渲染（re-render）元素或组件以及它们的所有孩子都会被当作静态内容而忽略。可以用于优化更新的性能。
2. 不需要附加参数，附加修饰符，也不接受表达式
3. 建议不要过度使用`v-once`指令，当需要渲染大量静态内容时，极少数的情况下它会带来便利，除非渲染变慢了，不然完全是没有必要的，另外它在后期会带来很多困惑（例如，设想另一个开发者并不熟悉 v-once 或漏看了它在模板中，他们可能会花很多个小时去找出模板为什么无法正确更新）

`v-once`指令用例：

```html
<!-- single element -->
<span v-once>This will never change: {{msg}}</span>
<!-- the element have children -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- component -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` directive -->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```

[回到顶部](#vue_docs)


#### v-memo
`v-memo`指令：
1. `v-memo`指令描述：用于缓存模板（template）的子树（sub-tree），在元素和组件上都可以使用，接受一个存放依赖值（dependency value）的固定长度数组，用于对比缓存（memoization），如果数组在每一个值和上一次渲染一样，整个子树（sub-tree）的更新就会跳过更新
2. 存放依赖值的数组为空，相当于`v-once`
3. 用途：常用的场景是`v-memo`指令和`v-for`指令在同一个元素上一起使用，v-for list很大的时候（length > 1000），是`v-memo`接收的数组中的依赖值没有改变，就认为和上次渲染一样，跳过更新
4. v-memo 是开发者的责任去指定正确的依赖数组去避免跳过必须的更新

`v-memo`指令用例

```html
<!-- 
下一次渲染，如果valueA,ValueB的值不变
div元素及其子元素的更新就会跳过。
-->
<div v-memo="[valueA, valueB]">
  ...
</div>

<!-- Usage with v-for -->
<div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
  <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
  <p>...more child nodes</p>
</div>
```

[回到顶部](#vue_docs)

#### v-cloak
`v-cloak`指令
1. `v-cloak`指令描述：，用于建立一个规则，规则应用直到未编译（un-compile）模板（template）直到编译完。
2. 不附加argument，不附加修饰符，不接受表达式
3. 用途：通常用来配合css规则`display: none`,隐藏未编译的 Mustache 标签直到实例编译完
4. 这个指令只在no-build-step 的设置（setup）中发挥作用，因为使用`in-DOM-template`写template，在组件实例没有挂载到元素时候，可以看到mustache tags

`v-cloak`指令用例：

```html
[v-cloak] {
  display: none;
}
<!-- The <div> 不会显示，直到编译结束-->
<div v-cloak>
  {{ message }}
</div>
```

[回到顶部](#vue_docs)

### 自定义指令
1. 自定义指令描述：封装原生元素（plain element）上的底层DOM访问（low level access）的逻辑的，以便重用
2. 自定义指令注册
    * 使用`app.directive()`实例方法在app 层（app level）全局注册自定义指令。见`app.directive()`实例方法
    * optionsAPI：组件实例上的`directives`选项用于自定义指令的局部注册（ocal registration），然后才能在tempalte上使用。见`directives`选项
    * compositionAPI：`<script setup>` 中，任何以 v 开头的 camelCase 格式的变量都会可以被用作一个自定义指令；不使用 `<script setup>`，自定义指令也可以通过 directives 选项注册
3. 自定义指令对象内包含了生命周期钩子函数`created | beforeMount | mounted | beforeUpdate | updated | beforeUnmount | mounted `。对于指令对象内的生命周期钩子函数：
    * 第一个参数el：指令绑定的元素（element），用于直接处理DOM
    * 第二个参数binding：是一个对象，包含了以下属性：
        * value：传递给指令的值。例如`v-my-directive="1 + 1"`，这个值是2
        * oldValue：前一个值，只能在beforeUpdate 和 update  这两个生命周期钩子上有
        * arg：指令的argument，例如`v-my-directive:foo`，这个值是foo。和内置指令一样，自定义指令的argument也能是动态的
        * modifiers：是一个包含modifier的对象。例如`v-my-directive.foo.bar`，这个值是`{ foo: true, bar: true }`
        * instance：组件的实例
        * dir：指令的定义对象
    * 第三个参数vNode：代表绑定元素（element）的底层 VNode
    * 第四个参数PreVnode：上一次渲染代表绑定元素（element）的底层 VNode。只能在beforeUpdate和updated钩子函数中获得
    * 这些参数，除了el，其他参数是只读的，不要修改他们。不同钩子之间共享信息，推荐使用原生的dataset html属性
4. 自定义指令对象的函数缩写语法：很多情况下mounted 和 updated钩子函数具有相同的行为，而且不需要使用其他指令钩子，所以自定义指令除了是一个对象，还可以使用缩写的函数语法，相当于在指令对象内的生命周期钩子mounted 和 updated都应用了相同的行为。函数的参数与自定指令对象内的钩子函数参数一样
5. 组件上自定义指令，类似于HTML属性中未被prop接收的一样，是透传属性（fallthrough attribute），即应用在组件内的根节点上（root node），但是组件可能有多个root node，多个root node时，指令会被忽略和发出警告，所以不推荐在组件上使用自定义指令

```javascript
import { createApp } from 'vue'

const app = createApp({...})
// register app-level directive (object directive)
app.directive('my-directive', {
  /* custom directive hooks */
  // called before bound element's attributes
  // or event listeners are applied
  created(el, binding, vnode, prevVnode) {
    // see below for details on arguments
  },
  // called right before the element is inserted into the DOM.
  beforeMount() {},
  // called when the bound element's parent component
  // and all its children are mounted.
  mounted() {},
  // called before the parent component is updated
  beforeUpdate() {},
  // called after the parent component and
  // all of its children have updated
  updated() {},
  // called before the parent component is unmounted
  beforeUnmount() {},
  // called when the parent component is unmounted
  unmounted() {}
  }
})
// === end

/** ===
 * 缩写语法：相当于mounted，undated具有相同的行为
 * <div v-color="color"></div>
 */
app.directive('color', (el, binding) => {
  // this will be called for both `mounted` and `updated`
  el.style.color = binding.value
})
```

[回到顶部](#vue_docs)



## 模板ref注册
1. 模板ref描述：通过ref html属性为为元素或子组件（child component）注册一个模板ref
2. ref html属性的值：
    * 接收一个字符串或者函数，为DOM元素注册一个引用（reference）
    * 或者接收一个函数，每次组件更新都会重新调用这个函数，这个函数的第一个参数el是该元素的引用，在函数内可以灵活指定哪里存储元素的引用
3. ref html属性在使用v-for指令的元素上，会注册用若干个元素的refs，用一个数组来存储（注意ref 数组不能保证与源数组有相同的顺序）
4. 模板ref在plain DOM 元素上使用，ref是元素本身
5. 模板ref在组件上使用，ref是组件实例，这意味着可以访问到子组件所有的方法和属性，这使得在父组件和子组件之间创建紧密耦合的实现细节（tightly coupled implementation details）变得很容易。应该只在绝对需要时才使用组件ref，建议是用标准的props 和 emit 接口来实现父子组件交互。
6. 为了不被外部组件通过组件树父子关系，模板ref访问到组件内的数据
    * 对于options API，可以在子组件中定义expose选项，限制父组件对子组件实例的访问。见`expose`选项
    * 对于composition API，使用了 `<script setup>` 的组件 默认私有的，一个父组件无法访问到一个使用了`<script setup>`的子组件中的任何东西，除非子组件在其中通过 defineExpose 宏显式暴露。见`defineExpose()`方法
7. ref是render函数创建的，所以需要组件挂载之后才可以访问
8. html ref不是响应式的，不要在模板中用来做数据绑定

用例：

```html
<p ref="p">hello</p>

<!-- ref可以是一个函数 -->
<ChildComponent :ref="(el) => child = el" />
```

[回到顶部](#vue_docs)

### 选项api访问模板ref
选项api访问模板ref：模板ref可以通过组件的实例属性`$refs`访问，实例挂载（mounted）之后，可以通过`this.$refs.refName` 引用相应的ref。见`this.$refs`

用例：

```html
<!-- 通过$refs.refs_name 引用 -->
<script>
  export default {
    mounted() {
      this.$refs.input.focus()
    }
  }
</script>

<template>
  <input ref="input" />
</template>


<!-- 组件上的ref -->
<!-- 指向ref的组件实例 -->
<script>
  import Child from './Child.vue'

  export default {
    components: {
      Child
    },
    mounted() {
      // this.$refs.child will hold an instance of <Child />
    }
  }
</script>

<template>
  <Child ref="child" />
</template>
```

[回到顶部](#vue_docs)


### 组合式api访问模板ref
组合式api访问模板ref：使用`ref()`函数，不传递参数，如果refs是一个数组，则传递一个空数组，如`ref([]`，然后使用模板ref的同名变量接收对应的ref，在实例挂载之后就可以访问这个模板ref。更多可以查看`ref()`


用例：

```html
<!-- 接收一个模板ref -->
<script setup>
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板 ref 同名
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>

<!-- ref html属性配合v-for -->
<!-- ref是一个数组 -->
<script setup>
import { ref, onMounted } from 'vue'

const list = ref([
/* ... */
])

const itemRefs = ref([])

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>

<!-- 组件上的ref -->
<!-- ref引用的组件的实例 -->
<script setup>
import { ref, onMounted } from 'vue'
import Child from './Child.vue'

const child = ref(null)

onMounted(() => {
  // child.value 是 <Child /> 组件的实例
})
</script>

<template>
  <Child ref="child" />
</template>


```

[回到顶部](#vue_docs)



## 组件
一个应用通常被组织为组件树的形式。组件可以重用，重用的每一个都是不同的组件实例
  

[回到顶部](#vue_docs)

### 定义组件
* 构建中定义组件
* 非构建中定义组件

#### 构建中定义组件
构建步骤中，组件通常定义在`.vue`的文件中，这是一个SFC（singel file component）：

```html
<!-- *.vue -->
<!-- options API -->
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>


<!-- composition API -->
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```

[回到顶部](#vue_docs)


#### 非构建中定义组件
在非构建中，定义组件：
* options API：可以在选项template中指定，template接收模板字符串，或者可以使用 ID 选择器来指向一个元素 ，见`template`选项
* composiiton API：`setup()`作为逻辑入口，template选项中指定

```javascript
// 非构建中的option API
export default {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
}

// 非构建中的composition API
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
  // 或者 `template: '#my-template-element'`
}
```


[回到顶部](#vue_docs)


### 组件注册
使用组件，首先要导入和注册组件，注册组件分为全局注册和局部注册


[回到顶部](#vue_docs)

#### 全局注册组件
1. 全局注册组件：app内所有的tempalte上都能使用，对于全局注册组件，options API和coposition api都是使用`app.component()`实例方法，详细见`app.component()`实例方法
2. 全局注册组件的短板：
    * 全局组件会阻止构建系统（build system）删除没有使用到的component(也叫“tree-shaking”)，全局注册了一个组件，却一次都没有使用，它仍然会出现在最终的构建产物中。
    * 大型application中，使用太多的全局组件，不利于定位子组件，影响将来的维护

[回到顶部](#vue_docs)

#### 局部注册组件
局部注册组件:
1. options API：局部注册需要使用`components`选项，详细见components 选项
2. coposition api中：单文件组件中的 `<script setup>`，导入的组件会自动进行局部注册。如果不使用 `<script setup>`,需要使用 `components` 选项

用例：

```html
<!-- options API -->
<script>
  import ButtonCounter from './ButtonCounter.vue'

  export default {
    components: {
      ButtonCounter
    }
  }
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>

<!-- composition API -->
<script setup>
import ComponentA from './ComponentA.vue'
</script>

<template>
  <ComponentA />
</template>
```

[回到顶部](#vue_docs)

#### 组件注册命名格式
1. 组件注册的命名推荐为 `PascalCase`：用来区分原生HTML， HTML 标签名是不区分大小写的，但 Vue 单文件组件是可以在编译中区分大小写的
2. Vue 支持将使用 kebab-case 的标签解析为使用 PascalCase 注册的组件，以 MyComponent 为名注册的组件，在模板中可以通过 `<MyComponent>` 或 `<my-component> `引用

[回到顶部](#vue_docs)


### 组件上的透传属性
1. 组件上的透传属性（fallthrough attribute）有: 
    * 是组件内props不声明接收的HTML属性
    * emits不声明接收的事件监听器
2. 组件上的透传属性（fallthrough attribute）在组件内只有一个根元素的时候，会自动添加到组件内的根元素的属性上。如果一个组件内在根节点上渲染另一个组件，透传属性可以深层传递。有多个根节点的组件没有自动透传属性的行为，如果 `$attrs` 没有被显式绑定，将会抛出一个运行时警告

用例：
```html
<!-- template of <MyButton> -->
<button>click me</button>
<!-- add class attribute to componenet -->
<MyButton class="large" />
<!-- The final rendered DOM -->
<button class="large">click me</button>

<!-- 多根节点的透传属性 -->
<CustomLayout id="custom-layout" @click="changeValue" />

<!-- 如果 $attrs 没有被显式绑定，将会抛出一个运行时警告 -->
<!-- 模板内$attrs 被显式绑定，不会有警告 -->
<header>...</header>
<main v-bind="$attrs">...</main>
<footer>...</footer>
```

[回到顶部](#vue_docs)

#### class和style作为透传属性被合并
如果class或style属性作为透传属性，组件内的根元素也有了class或style属性，这些属性值会自动被合并

```html
<!-- template of <MyButton> -->
<button class="btn">click me</button>
<!-- add class attribute to componenet -->
<MyButton class="large" />
<!-- The final rendered DOM -->
<button class="btn large">click me</button>
```


[回到顶部](#vue_docs)


#### 控制透传属性继承
控制透传属性继承：
1. options API： 
    * 通过`inheritAttrs`选项控制根元素的继承，然后使用`this.$attrs`访问透传属性，使用场景是场景是要将透传属性应用到根节点外的元素。详细情况`inheritAttrs`选项和`this.$attrs`实例属性
    * 对于`this.$attrs`，访问透传属性根据原来的名称格式，而不会被自动转换大小写，事件监听器类型的如`click`，通过`onClick`访问。详细见`this.$attrs`实例属性
2. composition API：使用了`<script setup>`，需要外部一个额外的`<script>`块来写`inheritAttrs`选项


```html
<!--  in composition API -->
<script>
// 使用一个简单的 <script> to declare options
export default {
  inheritAttrs: false
}
</script>

<script setup>
// ...setup 部分逻辑
</script>
```

[回到顶部](#vue_docs)


### props
1. props描述：组件上HTML属性（也叫自定义属性），可以被组件的props接收，从而可以在组件内的template上访问其他组件上的属性一样访问props，不被接收的作为透传属性（fallthrough attribute）
2. 定义props
    * option API: 由props选项定义接收哪些外部传入HTML属性（也叫自定义属性），见`props`选项
    * composition API：`<script setup>` 中的`defineProps()`，函数参数和props选项的值一样，见`defineProps()`

[回到顶部](#vue_docs)


#### 动态传递props
动态props（Dynamic Props）：props值是由外层HTML属性传入，props声明来接收这个HTML属性，如果这些外层HTML属性是由`v-band`动态绑定的，外层HTML的属性值是动态的，props自然也是动态的

用例

```html
<!-- 以下例子的html属性，在props已经定义接收 -->

<!-- Even though `42` is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.       -->
<BlogPost :likes="42" />

<!-- Dynamically assign to the value of a variable. -->
<BlogPost :likes="post.likes" />

<!-- 注意，prop没有值默认为true-->
<!-- Including the prop with no value will imply `true`. -->
<BlogPost is-published />

<!-- Even though `false` is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.-->
<!-- 动态绑定html属性，false是一个表达式 -->
<BlogPost :is-published="false" />
```

[回到顶部](#vue_options_api)


#### props单向向下传递
1. 所有的props都是单向向下绑定的（one-way-down binding ），从外部传入到组件内，不会逆向传递，防止修改外部的状态，因为外部状态可能是多个组件的依赖，往往会牵一发而动全身，数据流（data flow）也会变得难以理解），所以在组件内修改prop是不被允许的，控制台会发出警告。
2. 要想修改prop，两个方法：
    * 把值赋值给data
    * 如果这个值需要进一步处理，可以使用computed依赖这个prop，如果表达式简单能够处理，就用表达式，不过逻辑放在了template上了
3. prop不能被修改，也有例外，因为javascript 对象是以引用（reference）传递，虽然不能改变对象，但可以改变对象内的嵌套属性，这是javascript本身的局限，这个缺陷会使得子组件以不明显的方式影响外部的状态（state），对将来数据流（data flow）的推理变得困难。


根据实践来说，应该避免对prop的修改。大多数情况下，应该组内内通过抛出（emit）一个事件，通知监听这个事件的外部修改外部状态，让外部去处理状态

[回到顶部](#vue_options_api)



### 组件上的事件监听器
1. 组件上同样可以使用`v-on`指令监听事件，根据透传属性（fallthrough attribute），默认地，事件监听器会被添加到组件内的根元素上，如果由多个根元素，则会发出警告
2. options API处理组件监听：
    * emits选项：声明要抛出的自定义事件属于外部事件（组件监听器），从而避免将监听器添加到组件内的根元素上，`this.$attributes`也会相应移除。详细见emits选项
    * emits选项可以通过接收一个对象语法，对象属性通过方法返回boolean值校验事件。详细键emits选项
    * `this.$emit()`实例方法：用于触发定义在组件上对应的事件。详细见`this.$emit()`实例方法
* composition API：`<script setup>` 中的`defineEmits()`，函数参数和emits选项的值一样，见`defineEmits()`


[回到顶部](#vue_options_api)


### 组件上的v-model
对于组件上的v-model:
1. 如果没有附加参数
    * 组件内默认使用`modelValue`这个prop接收组件上 v-model 表达式的值
    * 组件内默认使用`update:modelValue`，抛出（emit）事件
2. 组件内的表单控件使用各自的原生`v-model`的实现，更新modelValue和抛出`update:modelValue`。也可以组件内的表单控件使用`v-model`，然后绑定到一个计算属性



```html
<CustomInput v-model="searchText" />

<!-- 实际相当于 -->
<CustomInput
  :modelValue="searchText"
  @update:modelValue="newValue => searchText = newValue"
/>

<!-- 组件模板内 -->
<!-- CustomInput.vue -->
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<!-- 或者使用 -->
<!-- CustomInput.vue -->
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<template>
  <input v-model="value" />
</template>
```

#### 组件上v-model附加参数
组件上的v-model附加参数：
1. 这个参数为组件内接收的prop
2. 相应的组件内抛（emit）出的事件是`update:augumentName`
3. 通过附加参数可以定义多个v-model

```html
<UserName
  v-model:first-name="firstName"
  v-model:last-name="lastName"
/>

<!-- template -->
<script>
export default {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName']
}
</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```

[回到顶部](#vue_docs)

#### 组件上v-model附加修饰符
组件上的v-model附加修饰符：
1. 被组件内`modelModifiers`prop接收
2. 如果v-model附加了参数也附加了修饰符，相应的`argumentNameModifiers`被prop接收

```html
<MyComponent v-model.capitalize="myText" />

<script>
export default {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>

<!-- ======= -->
<!-- 对于附加参数，附加修饰符组件上的v-model -->
<MyComponent v-model:title.capitalize="myText">

<script>
export default {
  props: ['title', 'titleModifiers'],
  emits: ['update:title'],
  created() {
    console.log(this.titleModifiers) // { capitalize: true }
  }
}
</script>
```

### 组件将插槽内容分发到组件内的插槽插口
见`v-slot`指令和`<slot>`元素

[回到顶部](#vue_docs)


### 动态组件和缓存组件
动态组件（组件切换），可以通过内置`<component>`元素和特殊的`is`属性实现。`<component>`元素和特殊的`is`属性在这里介绍。


[回到顶部](#vue_docs)

#### component内置元素
```typescript
// component元素 方法的 typescript 描述
interface DynamicComponentProps {
  // 接收一个字符串，可以是一个html 
  // 标签名，或者一个已经注册的组件名
  // 也可以是内置组件
  is: string | Component
}
```

1. `<component>`元素描述：用于配合is html属性渲染动态组件，渲染的组件由is属性来决定。
2. is配合`v-bind`指令，还可以实现动态绑定


`<component>`元素用例

```html
<!-- Component changes when currentTab changes -->
<component :is="currentTab"></component>

<!-- === -->
<!-- Rendering HTML elements -->
<component :is="href ? 'a' : 'span'"></component>
<script>
  import Foo from './Foo.vue'
  import Bar from './Bar.vue'

  export default {
    components: { Foo, Bar },
    data() {
      return {
        view: 'Foo'
      }
    }
  }
</script>

<template>
  <component :is="view" />
</template>

<!-- 组合式api中 -->
<script setup>
  import Foo from './Foo.vue'
  import Bar from './Bar.vue'
</script>

<template>
  <component :is="Math.random() > 0.5 ? Foo : Bar" />
</template>
```

[回到顶部](#vue_docs)

#### is属性
1. is属性描述：
    * `<component>`元素已经介绍了is的作用了
    * is还可以应用到元素html元素上，需要有前缀的`vue:`用于将组件代替原生的html元素

is属性用例

```html
<!--  render the element as a component instead -->
<table>
  <tr is="vue:my-row-component"></tr>
</table>
```

[回到顶部](#vue_docs)

#### KeepAlive缓存组件
```typescript
// KeepAlive 组件directives方法的 typescript 描述
interface KeepAliveProps {
  /**
   * If specified, only components with names matched by
   * `include` will be cached.
   */
  // 用来匹配缓存的组件，根据组件的 name 选项
  // 所以要想通过KeepAlive有条件地缓存的组件
  // 必须显式声明一个name
  include?: MatchPattern
  /**
   * Any component with a name matched by `exclude` will
   * not be cached.
   */
  // 根据组件的name，排除缓存的组件
  exclude?: MatchPattern
  /**
   * The maximum number of component instances to cache.
   */
  // 指定缓存组件实例的最大数量
  // 如果缓存实例的数量即将超过指定的最大数量
  // 最近访问次数最少的缓存实例将被销
  max?: number | string
}

// include 和exclude的值可以是以下形式
type MatchPattern = string | RegExp | (string | RegExp)[]
```

1. `<KeepAlive>`组件描述：使得包裹的组件切换的时候进行动态缓存，而不是销毁，保留组件状态或避免重新渲染，组件内只有一个直接child是活跃（active）组件
2. `<KeepAlive>`组件是一个抽象组件，自身不会渲染一个 DOM 元素，也不会出现在继承链中
3. 基本用途：
    * 当使用 `<component :is="..."> `来在多个组件间作切换时，组件会在被切换掉后卸载，可以通过 `<KeepAlive>` 组件强制不活跃的组件仍然保持“存活”的状态
    * 使用v-if切换的时候，缓存不活动的分支，而不是销毁他们
4. 生命周期：当组件在 `<KeepAlive>` 内被切换，组件的`activated`和`deactivated`生命周期钩子会在`<KeepAlive>` 的嵌套组件中触发，而不是和普通组件一样触发mounted，unmounted


`<KeepAlive>`组件用例:

```html
<KeepAlive>
  <component :is="view"></component>
</KeepAlive>

<KeepAlive>
  <comp-a v-if="a > 1"></comp-a>
  <comp-b v-else></comp-b>
</KeepAlive>

<!-- comma-delimited string -->
<KeepAlive include="a,b">
  <component :is="view"></component>
</KeepAlive>

<!-- regex (use `v-bind`) -->
<KeepAlive :include="/a|b/">
  <component :is="view"></component>
</KeepAlive>

<!-- Array (use `v-bind`) -->
<keepalive :include="['a', 'b']">
  <component :is="view"></component>
</keepalive>

<KeepAlive :max="10">
  <component :is="view"></component>
</KeepAlive>
```

[回到顶部](#vue_docs)



### provide和inject
父组件传递数据给子组件，我们使用props，存在一种情况，子组件需要较远的祖先组件（ancestor component）的数据，如果将prop一层一层传递下去，这就出现叫做prop drilling的情况，解决prop drilling是使用provide 和 inject：
* 父组件可以作为所有后代的dependency provider（依赖提供者）
* 子组件可以被父组件注入（inject）依赖（dependency）

[回到顶部](#vue_docs)

#### provide
提供（provide）数据给后代组件：
1. app层级的provide：使用`app.provide()`
2. 组件层级的provide
    * options API: 使用`provide`选项
* composition API：使用`provide()`

[回到顶部](#vue_docs)

#### inject
1. 父组件提供数据后，子组件就要相应的注入，解析注入的时候，如果该注入名（key）没有任何组件提供，则会抛出一个运行时警告
2. 注入会在组件自己的状态之前被解析
3. 注入provide：
    * options API：组件使用`inject`选项
    * composition API：`inject()`

[回到顶部](#vue_docs)

#### provide和inject的响应式
provide和inject数据的响应式：
1. 在options API中需要使用 computed() 函数提供一个计算属性。 
2. provide选项不会使得注入（inject）响应式，但是provide()在composition API中，可以传递ref数据，可以保持注入的响应式。当使用响应式 provide/inject 值时，建议尽可能将任何对反应式状态的变更都保持在 provider 内部。 这样可以确保 provide 的状态和变更操作都在同一个组件内，使其更容易维护

> computed() 函数常用于组合式 API 风格的组件中，但它同样还可以用于补充选项式 API 风格的某些用例

用例：

```javascript
// options API
import { computed } from 'vue'

export default {
  data() {
    return {
      message: 'hello!'
    }
  },
  provide() {
    return {
      // explicitly provide a computed property
      message: computed(() => this.message)
    }
  }
}


// composition API
// 供给的响应式状态使后代组件可以由此和供给者建立响应式的联系
import { ref, provide } from 'vue'
const count = ref(0)
provide('key', count)
```

[回到顶部](#vue_docs)


#### provide和inject使用symbol值
建议provide和inject的symbol命名值放在一个文件中

```js
// keys.js
export const myInjectionKey = Symbol()

// in provider component
import { myInjectionKey } from './keys.js'

export default {
  provide() {
    return {
      [myInjectionKey]: {
        /* data to provide */
      }
    }
  }
}

// in injector component
import { myInjectionKey } from './keys.js'

export default {
  inject: {
    injected: { from: myInjectionKey }
  }
}
```

[回到顶部](#vue_docs)


### 异步组件
大型项目中，需要对应用拆分，仅在需要时再从服务器加载相关组件，实现这个使用`defineAsyncComponent()`方法

[回到顶部](#vue_docs)

#### 全局方法defineAsyncComponent()
```typescript
// defineAsyncComponent()方法的 typescript 描述
function defineAsyncComponent(
  // source 是一个AsyncComponentLoader函数
  // 或者控制更多加载行为的对象AsyncComponentOptions
  source: AsyncComponentLoader | AsyncComponentOptions
): Component

// 返回一个promise的组件
// 可以在函数内return 新建一个promise 返回
type AsyncComponentLoader = () => Promise<Component>

// 控制更多加载行为的对象
interface AsyncComponentOptions {
  // loader function
  loader: AsyncComponentLoader
  // 加载异步组件时候使用的组件
  loadingComponent?: Component
  // 加载失败后展示的组件
  errorComponent?: Component
  // 网络状况较好时，加载完成得太快
  // 导致最终组件的替换可能看起来像是闪烁
  delay?: number
  // 时间限制
  // 超时也会显示配置了的errorCompnent
  timeout?: number // default：infinity
  suspensible?: boolean
  onError?: (
    error: Error,
    retry: () => void,
    fail: () => void,
    attempts: number
  ) => any
}
```

1. `defineAsyncComponent()`全局方法描述：用于定义一个异步组件，它是懒加载（lazy load）的，只在需要的时候渲染加载


`defineAsyncComponent()`用例:

```javascript
// 方法参数是loader function
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ...从服务器获取组件
    resolve(/* 获取到的组件 */)
  })
})
// ... 像使用其他一般组件一样使用 `AsyncComp`

// 构建工具中，支持ES 模块动态导入返回一个 Promise
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
// === end


// ===
// defineAsyncComponent()形参是对象
// 可以提供更多的控制
const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import('./Foo.vue'),

  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认为 200ms
  // 避免网络状况较好时，加载完成得太快，
  // 导致最终组件的替换可能看起来像是闪烁
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
})
```
[回到顶部](#vue_docs)


### 组件之间的循环引用
组件之间的循环引用的情况：
1. 递归组件：组件可以在它们自己的模板中调用自身。稍有不慎，递归组件就可能导致无限循环，发生“max stack size exceeded”错误，所以请确保递归调用是条件性的 (例如使用一个最终会得到 false 的 v-if)
2. 组件之间的循环引用：组件在渲染树中互为对方的后代和祖先

[回到顶部](#vue_docs)



## 过渡
两个内置组件提供了过渡的功能`<Transition>` 和 `<Transition-group>` , 除了这两个，通过其他技术手段来应用动画，比如切换 CSS class 或者样式绑定的状态驱动（state-driven animations via style bindings）


[回到顶部](#vue_docs)

### Transition内置组件
```typescript
// Transition内置组件方法的 typescript 描述
interface TransitionProps {
  /**
   * 用于自动产生过渡的css类
   * e.g.如`name: liu'` 扩展为 `.liu-enter`
   */
  name?: string
  /**
   * 是否应用过渡类
   * Default: true
   */
  css?: boolean
  /**
   * Specifies the type of transition events to wait for to
   * determine transition end timing.
   * 默认行为是自动检测拥有
   * 较长持续时间（duration）的类型
   */
  type?: 'transition' | 'animation'
  /**
   * 指定过渡的持续时间
   * Default behavior is wait for 
   * the first `transitionend`
   * or `animationend` event on 
   * the root transition element.
   */
  duration?: number | { enter: number; leave: number }
  /**
   * 控制leaving/entering过渡序列
   * 默认是同时存在的（simultaneous）
   */
  mode?: 'in-out' | 'out-in'
  /**
   * 第一次渲染是否应用过渡，默认是false
   */
  appear?: boolean

  /**
   * 用于定义自定义的过渡类的属性
   * 模板中是kebab-case存在
   * e.g. enter-from-class="xxx"
   */
  enterFromClass?: string
  enterActiveClass?: string
  enterToClass?: string
  appearFromClass?: string
  appearActiveClass?: string
  appearToClass?: string
  leaveFromClass?: string
  leaveActiveClass?: string
  leaveToClass?: string
}
```

1. `<Transition>`内置组件描述用于为元素或组件提供过渡效果。对于Transition内置组件
2. 限制：仅支持单个元素或组件作为其插槽内容
3. 过渡触发条件：
    * v-if
    * v-show
    * `<component>`动态组件
4. 过渡触发时机：当组件中的元素被插入或移除时：
    * 自动检测目标元素是否应用了 CSS 过渡或动画，如果应用了，则CSS 过渡 class 会在适当的时机被添加和移除
    * 如果有过渡的事件监听器，相应的钩子函数会在适当时机被调用
5. css过渡类
    * v-enter-from：enter的起始状态，元素插入之前添加，元素插入完成之后的下一帧移除
    * v-enter-active：enter的激活状态，整个enter阶段应用。在元素插入之前添加，过渡或动画结束之后移除。这个 class 可以被用来定义enter动画的持续时间（duration）、延迟（delay）与速度曲线类型（easing curve）
    * v-enter-to：enter的结束状态。在元素插入之后添加（同时，v-leave-from）移除，过渡或动画结束之后移除
    * v-leave-from：leave的起始状态，leave过渡触发之后添加，下一帧移除
    * v-leave-active：leave的激活状态，整个leave阶段应用。leave过渡触发之后添加，过渡或动画结束之后移除。这个 class 可以被用来定义enter动画的持续时间（duration）、延迟（delay）与速度曲线类型（easing curve）
    * v-leave-to：enter的结束状态。leave过渡触发之后的下一帧（同时，v-leave-from）移除，过渡或动画结束之后移除
6. 当为Transitoin的name HTML属性命名之后，相应的过渡类会从前缀v，改变为相应的name前缀。同样，如果使用v-band动态绑定name属性，可以实现动态过渡
7. css过渡和css动画都可以配合Transition的过渡类使用，不同的是`*-enter-from`不是在元素插入后移除，而是在animationend 事件触发时被移除
8. 深层过渡：尽管过渡 class 仅能应用在 `<Transition> `的直接子元素上，可以使用深层级的 CSS 选择器，使深层级的元素发生过渡

`<Transition>`组件用例

```html
<Transition>
  <div v-if="ok">toggled content</div>
</Transition>

<Transition name="fade" mode="out-in" appear>
  <component :is="view"></component>
</Transition>


<Transition @after-enter="onTransitionComplete">
  <div v-show="ok">toggled content</div>
</Transition>
```

[回到顶部](#vue_docs)



#### Transition事件监听器
Transition事件监听器，对于这些事件监听器的钩子函数，第一个参数都是el，指向元素：
* `@before-enter`：在元素被插入到 DOM 之前被调用，用这个来设置元素的 "enter-from" 状态
* `@enter`：在元素被插入到 DOM 之后的下一帧被调用，用这个来开始进入动画。对于它的钩子函数接收第二哥参数done，调用回调函数 done 表示过渡结束
* `@after-enter`: 进入过渡完成时调用
* `@enter-cancelled`
* `@appear`
* `@after-appear`
* `@appear-cancelled`
* `@before-leave`：在 leave 钩子之前调用,大多数时候，你应该只会用到 leave 钩子
* `@leave`：在离开过渡开始时调用。对于它的钩子函数接收第二哥参数done，调用回调函数 done 表示过渡结束
* `@after-leave`：在离开过渡完成，且元素已从 DOM 中移除时调用
* `@leave-cancelled` (v-show only)：且元素已从 DOM 中移除时调用


注意，如果`<Transition>`的css HTML属性设置为false，就是不应用过渡类，那么。这种情况下对于`@enter`和`@leave`钩子来说，回调函数 done 就是必须的。否则，钩子将被同步调用，过渡将立即完成


[回到顶部](#vue_docs)


### TransitionGroup组件
```typescript
// TransitionGroup方法的 typescript 描述
interface TransitionGroupProps extends Omit<TransitionProps, 'mode'> {
  /**
   * If not defined, renders as a fragment.
   */
  // 用于渲染一个包括列表的元素，
  // 如果不定义，默认是fragement
  tag?: string
  /**
   * For customizing the CSS class applied during move transitions.
   * Use kebab-case in templates, e.g. move-class="xxx"
   */
  // 用于设置移动的过渡类
  moveClass?: string
}
```

1. `<TransitionGroup>`组件描述：用于实现列表之中多元素，多组件的过渡
2. `<TransitionGroup>`和`<Transition>`触发相同的事件监听器，基本相同的HTML属性，css 过渡类
3. 为了 `<TransitionGroup>`能够正确工作， `<TransitionGroup>`的孩子必须有单独的key
4. CSS 过渡 class 会被应用在其中的每一个元素上，而不是这个组的容器上

`<TransitionGroup>`组件用例

```html
<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</TransitionGroup>

<!-- in css -->
<!-- 
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
} -->
```

[回到顶部](#vue_docs)



## 附录

[回到顶部](#vue_docs)

### 组件实例的生命周期
组件实例在创建过程中会经历一系列初始化步骤，如，数据观察（data observation），编译模板（compile the template），安装实例到DOM（mount the instance to the DOM），数据改变时更新DOM（update the DOM when data changes）。这个过程中，会运行生命周期钩子（lifecycle hook）函数，从而可以在特定阶段进行自定义操作。对于生命周期钩子：
* 所有生命周期钩子函数的 this 上下文都会自动指向当前调用生命周期钩子函数的组件实例。避免用箭头函数来定义生命周期钩子，这样会丢失this
* 除了beforeCreate，created这两个钩子函数，在服务器端渲染（server-side rendering）不会被调用



对于生命周期可以分类为
* 实例从创建到挂载的生命周期
* 实例挂载后更新的生命周期
* 实例挂载后卸载的生命周期
* 缓存实例的生命周期


[回到顶部](#vue_docs)

#### 实例从创建到挂载的生命周期
实例从创建到挂载的生命周期：
* 调用 setup（composition API）
* 调用 beforeCreate
    * 调用时机：实例初始化（instance initialized），props解决（after props solution）之后立即调用，在其他选项（如`data()` or computed）处理之前
    * 用途：略
* 初始化选项api（init options API）
* 调用 created：
    * 调用时机：在处理所有状态相关选项（state-ralated option）之后被调用，挂载阶段（mounting phasse）还没开始，所以还不能访问`el`
    * 用途：在选项api之前就初始化了，所以响应式数据（reactive data）, 计算属性（computed properties）, 方法（methods）, 侦听器（ watchers）能够被访问
* 是否有预编译模板（pre-compiled template），如果没有就是compile template on the fly
* 调用 beforeMount：
    * 调用时机：在组件挂载之前调用，调用时，已经完成响应状态（reactive）设置，但是还没有DOM节点被创建
    * 用途：略
* 进行初始化渲染（initial render），创建和插入DOM节点
* 调用 mounted：
    * 调用时机：组件在挂载之后调用，所有的同时存在的子组件已经被挂载，DOM tree已经创建和插入到父容器
    * 用途： `el`已经挂载，业务逻辑通常在这里开始

[回到顶部](#vue_docs)

#### 实例挂载后更新的生命周期
实例从挂载后更新的生命周期:
* 调用beforeUpdate
    * 调用时机：响应式状态（reactive state）改变之后，组件更新之前被调用
    * 用途：这个钩子用来在DOM更新之前访问DOM 状态（DOM state），在这个钩子内修改组件状态也是安全的
* 更新：重渲染和补丁（re-render&patch）
* 调用updated：
    * 调用时机：组件更新完成之后被调用，父组件的updated钩子在子组件的updated钩子之后被调用
    * 注意：因为不同状态（state）的改变，会导致这个钩子在组件DOM更新后被调用，如果需要访问一个特定状态（specified state）改变之后的更新完成的DOM，使用`nextTick()`代替
    * 警告：不要再updated钩子内改变状态（state），这会导致无限更新循环

[回到顶部](#vue_docs)

#### 实例挂载后卸载的生命周期
实例挂载后卸载的生命周期：
* 调用beforeUnmount
    * 调用时机：在卸载组件之前被调用，这个钩子调用时，组件实例仍然有用
    * 用途：略
* 卸载组件
* 调用unmounted：
    * 调用时机：卸载组件之后被调用，所有的子组件被卸载，所有相关的响应式效果被移除
    * 用途：使用这个钩子移除自定义创建的副作用（side effect），例如timer和DOM event，server connnection

[回到顶部](#vue_docs)


#### 缓存实例的生命周期
组件实例由`<keep-alive>` 内置组件缓存，对于缓存组件实例：
* 其他组件挂载到DOM后，调用的是mounted，缓存组件实例调用的是activated
* 其他组件实例卸载后，调用的是unmounted，缓存组件实例调用的是deactivated
* 被`<keep-alive>`包围的组件，它的子组件也是缓存组件

[回到顶部](#vue_docs)

### 响应式的实现
vue 2使用使用 getter/setters 实现响应式。Vue 3 中使用了 Proxy 来创建响应式对象，将 getter/setter 用于 ref

reactive() 返回的proxy（代理）尽管行为上表现得像原始对象，但通过使用 === 运算符还是能够比较出它们的不同

响应式伪代码用例

```js
function reactive(obj) {
    return new Proxy(obj, {
        get(target, key) {
            track(target, key)
            return target[key]
        },
        set(target, key, value) {
            trigger(target, key)
            target[key] = value
        }
    })
}

function ref(value) {
    const refObject = {
        get value() {
            track(refObject, 'value')
            return value
        },
        set value(newValue) {
            trigger(refObject, 'value')
            value = newValue
        }
    }
    return refObject
}
```

[回到顶部](#vue_docs)


### DOM模板解析注意事项
写模板的方式：
* 通常选择在构建工具中的`.vue`文件（即single file compile）中写模板
* 或者options API中的template选项中写模板
* `<script type="text/x-template">`中写模板，设置ID属性，可以被template选项引用


如果在DOM里写template(in-DOM templates），需要从DOM中提取模板，浏览器对HTML的默认解析行为，会出现很多要注意的情况：
* HTML元素标签，HTML属性会大小写不敏感，会将大写的字符解释为小写，PascalCase格式命名的组件名称、camelCase形式的props和v-on事件名称，都需要转换为相应等价的 kebab-case (短横线连字符) 形式才能使用
* 单元素，即闭合标签，也叫空元素。在其他模板中，组件是可以像闭合标签一样书写，但是在in-DOM template中，会被认为还没有闭合，所以组件不能在in-DOM template中以单元素闭合标签形式使用
* 元素位置限制：某些 HTML 元素对于放在其中的元素类型有限制，例如 `<ul>，<ol>，<table> 和 <select>`，某些元素仅在放置于特定元素中时才会显示，例如 `<li>，<tr> 和 <option>`。可以使用特殊的 is attribute 作为一种解决方案。当使用在原生 HTML 元素上时，is 的值必须加上前缀 vue: 才可以被解析为一个 Vue 组件。这一点是必要的，为了避免和原生的自定义内置元素相混淆


用例：

```html
<!-- 在 in dom template中需要转换为kebab-case -->
<!-- kebab-case in HTML -->
<blog-post post-title="hello!" @update-post="onUpdatePost"></blog-post>

<!-- ================== -->
<!-- in dom template 中 组件不能以单元素闭合标签格式使用 -->
<!-- we intend to close the tag here... -->
<my-component /> 
<span>hello</span>
<!-- 如果上面的组件在 in-dom template中 -->
<!-- 省略了关闭标签，原生的 HTML 解析器会认为开启的标签永远没有结束 -->
<!-- 会被解析为 -->
<my-component>
  <span>hello</span>
</my-component> 
<!-- but the browser will close it here. -->

<!-- 修改为有闭合标签 -->
<my-component></my-component>


<!-- =============================== -->
<!-- in dom template中，特殊元素才能被解析 -->
<!-- 自定义的组件 <blog-post-row> 将作为无效的内容被忽略 -->
<table>
  <blog-post-row></blog-post-row>
</table>

<!-- 添加is -->
<table>
  <tr is="vue:blog-post-row"></tr>
</table>
```

[回到顶部](#vue_docs)


### 非父子组件传递数据
几种待验证的非父子组件传递数据的方式
* 模板ref
* 中央事件总线(bus)：实例化的时候监听bus实例的事件，组件通过bus实例触发事件，从而调用事件处理程序
* provide & inject
* 状态管理：多个组件共享一个共同的状态。如状态管理库pinia


[回到顶部](#vue_docs)


### 工程中的可重用（Reusability）
可重用：
* 组件的可重用，是用于构建区块（building blocks）的可重用
* 函数封装有状态逻辑的可重用（Composable）：使用composition API去封装和重用有状态的逻辑（staful logic）。封装了无状态的逻辑（stateless logic）的函数，是接收一些输入后立刻返回所期望的输出，如复用无状态逻辑的库lodash。而封装了有状态的逻辑有状态的逻辑（staful logic）的函数负责管理会随时变化的状态
* 自定义指令：负责封装了可重用的对底层 DOM 访问的逻辑
* 插件：添加全局功能的工具代码

[回到顶部](#vue_docs)


### 为什么在模板中监听事件
事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。其实所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。
使用 v-on 还有几个好处：
* 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法
* 无须在 JavaScript 里手动绑定事件
* ViewModel 被销毁时，所有的事件处理器都会自动被删除。无须担心如何清理它们

[回到顶部](#vue_docs)

### 各数据选项的应用场景以及区别
各数据选项的应用场景：
* data: 响应式的数据，简单的数据逻辑表达式
* computed: 复杂的数据逻辑表达式（默认只有getter，可以设置setter)；基于响应式的依赖进行缓存，所以适用于性能开销巨大的计算（如遍历较大数组进行操作）
* method: 重新渲染，方法都会被重新调用
* watch：观察数据表达式，适用于执行异步或者开销较大的操作
* props: 接受父级组件定义的属性数据

[回到顶部](#vue_docs)

#### computed的最佳实践
computed的最佳实践：
* computed getter函数执行的是纯粹的计算（pure computation ），而不应有副作用（side effects，例如，做异步请求或者更改 DOM），computed getter要做的是计算并返回值
* 避免修改计算属性值：计算属性是一个派生的state（derived state），更改这个值没有意义，因此计算属性的返回值应该被视为只读的，应该更新计算属性依赖的响应状态（state）触发重新计算（（re-evaluate）

[回到顶部](#vue_docs)

#### 计算缓存与方法比较
很多时候会发现computed 和 method 都能做同样的事情，达到相同的运算效果。他们是有区别的：
* 对于计算属性(computed)，基于它们的响应式依赖（reactive dependencies）进行缓存，只在它的响应式依赖发生改变时才会重新求值（re-evaluate）
* 对于方法(method)，每当触发重新渲染（re-render）时，方法调用表达式会重新执行方法

所以使用计算属性的原因就是：如果消耗性能做大量运算得到一个结果，而这个结果要经常被使用，通过每次执行方法进行运算得到结果明显是不效率的，因此，可以用计算属性对运算结果进行缓存，计算属性只有在响应式依赖发生改变时才会重新求值（re-evaluate）

```javascript
// now计算属性不会更新
// 因为没有响应式依赖
computed: {
    now() {
        return Date.now()
    }
}
```

[回到顶部](#vue_docs)

#### 计算属性和侦听属性的区别
计算属性和侦听属性的区别：
* watch：监测的是属性值， 只要属性值发生变化，其都会触发执行回调函数来执行一系列操作
* computed：监测的是依赖值，依赖值不变的情况下其会直接读取缓存进行复用，变化的情况下才会重新计算。

有一些数据需要随着其它数据变动而变动时，可以使用watch。可能会滥用watch，特别是有Anguar.js的背景情况下。通常更好的做法是使用计算属性而不是命令式的 watch 回调。

当数据变化时执行异步或者开销较大的操作时，使用watch属性是最有用的

[回到顶部](#vue_docs)
