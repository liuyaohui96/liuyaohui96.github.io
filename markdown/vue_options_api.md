
# vue_options_api
1. [状态选项](#状态选项)
    1. [data](#data)
        1. [this.$data实例属性](#thisdata实例属性)
    2. [props](#props)
        1. [this.$props实例属性](#thisprops实例属性)
    3. [computed](#computed)
    4. [methods](#methods)
    5. [watch](#watch)
        1. [this.$watch()实例方法](#thiswatch实例方法)
    6. [expose](#expose)
    7. [emits](#emits)
        1. [this.$emits()实例方法](#thisemits实例方法)
2. [生命周期选项](#生命周期选项)
3. [渲染选项](#渲染选项)
    1. [template](#template)
    2. [render](#render)
4. [组合选项](#组合选项)
    1. [provide](#provide)
    2. [inject](#inject)
    3. [mixins（未整理）](#mixins未整理)
    4. [extends（未整理）](#extends未整理)
5. [混杂选项](#混杂选项)
    1. [name](#name)
    2. [inheritAttrs](#inheritattrs)
        1. [this.$attrs实例属性](#thisattrs实例属性)
    3. [components](#components)
    4. [directives](#directives)
6. [组件实例的属性和方法](#组件实例的属性和方法)
    1. [访问元素的实例属性](#访问元素的实例属性)
        1. [this.$root](#thisroot)
        2. [this.$el](#thisel)
        3. [this.$parent](#thisparent)
        4. [this.refs](#thisrefs)
    2. [更新相关的实例方法](#更新相关的实例方法)
        1. [this.$forceUpdate()](#thisforceupdate)
        2. [this.$nextTick()](#thisnexttick)
    3. [其他](#其他)
        1. [this.$options](#thisoptions)
        2. [this.$slots](#thisslots)


## 状态选项
* data

[回到顶部](#vue_options_api)

### data
```typescript
// data 方法的 typescript 描述
// data类型：是一个函数
interface ComponentOptions {
    data?(
        // 函数内的this指向组件实例
        this: ComponentPublicInstance,
        // 第一个函数形参vm：指向组件实例
        vm: ComponentPublicInstance
    ): object
    // 返回值：返回一个响应式对象
}
```

1. data选项描述：data用于返回组件（component）的初始响应（initial reactive）状态（state）
2. vue2中，data在vue实例是一个对象，在组件内是一个函数，vue3开始，data都是函数
3. vue3中，data是基于JavaScript Proxy（代理）实现响应式，这意味着，响应式对象的嵌套属性是响应式的（deep reactive），响应式对象是原对象的代理，所以原对象和代理对象不是同一个

> 注意：datata使用箭头函数定义，内部的this会丢失，这里可以根据data函数的第一个参数传入组件实例


data用例：

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）

data() {
  return { a: 1 }
},
created() {
  this.a // => 1
  this.$data // => { a: 1 }
}
// === end

// ===
// 箭头函数里访问组件实例，通过函数参数传入组件实例
data: (vm) => { a: vm.myProp }
// === end

// === 
// 基于proxy 代理，响应式对象不是原对象
data() {
  return {
    someObject: {}
  }
}
mounted() {
  const newObject = {}
  this.someObject = newObject
  newObject === this.someObject // => false
}
// === end

// ===
// 基于proxy代理，深度响应式
data() {
  return {
    obj: {
      nested: { count: 0 },
      arr: ['foo', 'bar']
    }
  }
},
methods: {
  mutateDeeply() {
    // these will work as expected.
    this.obj.nested.count++
    this.obj.arr.push('baz')
  }
}
```

[回到顶部](#vue_options_api)


#### this.$data实例属性
`data()`选项，data选项是一个函数，返回一个响应式对象，对于`this.$data`，返回这个响应式对象

[回到顶部](#vue_options_api)


### props
```typescript
// props的 typescript 描述
interface ComponentOptions {
  // props选项是一个字符串数组，存放若个prop
  // 或者是一个对象，提供更多的控制
  props?: ArrayPropsOptions | ObjectPropsOptions
}

// props类型是字符串数组
type ArrayPropsOptions = string[]

// props类型是对象时，属性key是prop的名称
type ObjectPropsOptions = { [key: string]: Prop }
/*
prop的属性key对应值有三个
1. null
2. 类型或类型组成的数组，类型包括：
  javascript的内置类型中可以new调用的（如Number）
  自定义类型
3. 一个propOptions对象
*/
type Prop<T = any> = null | PropType<T> |PropOptions<T>
type PropType<T> = { new (): T } | { new (): T }[]

interface PropOptions<T> {
  // type：类型或类型组成的数组
  type?: PropType<T>
  // required: prop是否必须
  // true，如果prop没有对应值，发出警告
  required?: boolean
  // default：prop值是undefined，
  // 或者没有对应值
  // 就使用default指定的值
  // 对象类型（除了Function）默认值需要使用工厂函数返回
  // 工厂函数使用rawProps object作为参数
  default?: T | ((rawProps: object) => T)
  // validator：验证函数
  // prop的值作为函数参数
  // 返回false，非生产环境下会发出警告
  validator?: (value: unknown) => boolean
}
```
1. props选项描述：props 选项声明组件的props，用于接收定义在组件上（外部）的HTML属性，不被props接收的作为透传属性（fallthrough attribute）
2. 一个prop在组件上（外部）没有对应的HTML属性，相应的一个prop值是`undefined`
3. 一个prop，如果声明类型为Boolean，如果在组件上（外部）没有接收到对应的HTML属性，这个prop的值是false。如果有这个对应HTML属性，但是没有显式赋值，相应的一个prop值是true



props选项用例：

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）

// props是数组类型
props: ['size', 'myMessage']
// === end

// ===
// props是对象，更多控制
props: {
  // type check
  propA: Number,
  // Multiple possible types
  propB: [String, Number],
  // Required option
  propC: {
    type: String,
    required: true
  },
  // default option
  propD: {
    type: Number,
    default: 100
  },
  // Object with a default value
  propE: {
    type: Object,
    // Object or array defaults must be returned from
    // a factory function. The function receives the raw
    // props received by the component as the argument.
    default(rawProps) {
      // default function receives the raw props object as argument
      return { message: 'hello' }
    }
  },

  // Function with a default value
  propF: {
    type: Function,
    // Unlike object or array default, 
    // this is not a factory function 
    // this is a function to serve as a default value
    default() {
      return 'Default function'
    }
  },
  // Custom validator function
  propG: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
}
```

[回到顶部](#vue_options_api)

#### this.$props实例属性
this.$props 返回在props选项中定义的，解决的（resolved）的props 所组成的对象。

```typescript
// this.$props 方法的 typescript 描述
interface ComponentPublicInstance {
  $props: object
}
```

[回到顶部](#vue_options_api)


### computed
```typescript
// computed 方法的 typescript 描述
interface ComponentOptions {
    // computed是一个对象
    computed?: {
        // 对象内定义的计算属性
        // 分为只读的ComputedGetter
        // 可写的WritableComputedOptions
        [key: string]: ComputedGetter<any> | WritableComputedOptions<any>
    }
}

// 只读的计算数学ComputedGetter是一个函数
type ComputedGetter<T> = (
    // 函数内的this指向组件实例
    this: ComponentPublicInstance,
    // 函数的第一个参数指向组件实例
    vm: ComponentPublicInstance
) => T // 返回值：返回一个依赖其他响应式状态的值

// 可写的计算属性WritableComputedOptions
// 因为要定义get和set，所以是一个对象
type WritableComputedOptions<T> = {
    get: ComputedGetter<T>
    set: ComputedSetter<T>
}

type ComputedSetter<T> = (
    // 函数内的this指向组件实例
    this: ComponentPublicInstance,
    // 函数的第一个参数用于更新的值
    value: T
) => void
```

1. computed选项描述：用于定义依赖响应式状态的复杂逻辑，随着依赖的状态改变，computed会自动更新计算。
2. 为什么使用computed：在模板（template）中写简单表达式很方便，但是模板中写太多逻辑，会让使其变得臃肿，难以维护，所以将依赖响应式状态的复杂逻辑写在computed里

> 注意，使用箭头函数定义计算属性，其中，computedSetter函数没有参数指向组件实例，computedSetter会丢失this，所以不要用箭头函数定义computedSetter，而computedGetter可以通过方法的第一个参数获得组件实例

computed选项用例

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）
data() {
  return { a: 1 }
},
computed:{
  // readonly computed
  aDouble() {
    return this.a * 2
  },
  // writable computed
  aPlus: {
    get() {
      return this.a + 1
    },
    set(v) {
      this.a = v - 1
    }
  }
},
created() {
  // computedGeter
  this.aDouble // => 2
  // computedGetter
  this.aPlus // => 2
  
  // computedSetter
  this.aPlus = 3
  this.a // => 2
  this.aDouble // => 4
}
```

[回到顶部](#vue_options_api)


### methods
```typescript
// app.component() 方法的 typescript 描述
interface ComponentOptions {
    // methods选项是一个对象
    methods?: {
        // 用函数定义方法
        // 方法内的this指向组件实例
        [key: string]: (this: ComponentPublicInstance, ...args: any[]) => any
    }
}
```
1. methods选项描述：用于声明可以在组件中使用的方法

> 方法内的this都是指向组件实例，使用箭头函数定义方法，this会丢失

methods选项用例

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）
data() {
  return { a: 1 }
},
methods: {
  plus() {
    this.a++
  }
},
created() {
  this.plus()
  console.log(this.a) // => 2
}
```

[回到顶部](#vue_options_api)


### watch
```typescript
interface ComponentOptions {
    // watch是一个对象
    watch?: {
        // 对象的属性对应要侦听的响应式状态
        // 值可能是一个WatchOptionItem
        // 或者WatchOptionItem组成的数组
        [key: string]: WatchOptionItem | WatchOptionItem[]
    }
}

// WatchOptionItem 可能是一个方法名的字符串
// 可能是一个回调函数 WatchCallback
// 或者提供更多控制的对象
type WatchOptionItem = string | WatchCallback | ObjectWatchOptionItem

// 回调函数 WatchCallback
type WatchCallback<T> = (
    // 更新后的值
    value: T,
    // 更新前的值
    oldValue: T,
    onCleanup: (cleanupFn: () => void) => void
) => void

type ObjectWatchOptionItem = {
    // 回调函数
    handler: WatchCallback | string
    // true，则在watch创建的时候立刻触发回调
    // 第一次调用，oldValue 是undefined
    immediate?: boolean // default: false
    // true，则指定对象或数组深度改变（deep mutation）
    // 也会触发回调
    deep?: boolean // default: false
    // 指定回调函数刷新时机
    // 默认侦测器回调在组件实例更新之前被调用
    flush?: 'pre' | 'post' | 'sync' // default: 'pre'
    onTrack?: (event: DebuggerEvent) => void
    onTrigger?: (event: DebuggerEvent) => void
}
```
1. watch描述：watch用于声明组件内的侦听器。要侦听的响应式状态改变的时候，对应名称的侦听器调用指定方法或者callback
2. watch选项内属性的key可以是`dot-delimited path`的类型，即属性是对象，可以侦听对象下的属性，如`a.b.c`，其他更复杂的表达式可以选择`this.$watch()`
3. 一个应用场景：响应式数据变化，watch侦听了该属性，数据变化时，就会执行回调，回调内进行异步操作，最后根据操作结果修改状态（state）
4. 积极侦听器：watch选项内的侦听器默认是懒侦听的，只有侦听的源数据变化时，才会执行回调。设置一个侦听器的值为一个对象，对象内的`immediate`设置true，组件实例创建之后，立即执行一遍回调，这时oldValue为undefined
5. 深度侦听器：watch选项内的侦听器默认是浅层的（shallow ），嵌套的property如果不通过`dot-delimited path`这种显式方式指定侦测，嵌套的property发生改变不会触发回调。设置一个侦听器的值为一个对象，对象内的`deep`设置true则指定对象或数组深度改变（deep mutation）也会触发回调，深度侦听需要遍历被侦听对象中的所有嵌套的 property，当用于大型数据结构时，开销很大。因此请只在必要时才使用它，并且要留意性能
6. 侦听器callback的刷新时机：默认侦测器回调在组件实例更新之前被调用，这意味着在侦听器回调中访问的dom式更新之前的dom。如果想侦听器能够访问更新之后的dom，设置一个侦听器的值为一个对象，对象内的`flush`设置为`post`

> watch内的函数，this默认指向组件实例，使用箭头函数来定义 watch内的函数，会丢失this
   

watch选项用例：

```javascript
data() {
  return {
    a: 1,
    b: 2,
    c: {
      d: 4
    },
    e: 5,
    f: 6
  }
},
watch: {
  // string method name
  a: 'someMethod',
  // callback
  b(val, oldVal) {
    console.log(`new: ${val}, old: ${oldVal}`)
  },
  // watching a single nested property:
  'c.d': function (val, oldVal) {
    // do something
  },
  // the callback will be called whenever 
  // any of the watched object properties change 
  // regardless of their nested depth
  c: {
    handler(val, oldVal) {
      console.log('c changed')
    },
    deep: true
  },
  
  // the callback will be called immediately 
  // after the start of the observation
  e: {
    handler(val, oldVal) {
      console.log('e changed')
    },
    immediate: true
  },
  // you can pass array of callbacks, they will be called one-by-one
  f: [
    'handle1',
    function handle2(val, oldVal) {
      console.log('handle2 triggered')
    },
    {
      handler: function handle3(val, oldVal) {
        console.log('handle3 triggered')
      }
      /* ... */
    }
  ]
}
```

[回到顶部](#vue_options_api)


#### this.$watch()实例方法
```typescript
// this.$watch() 方法的 typescript 描述
interface ComponentPublicInstance {
  $watch(
    // 第一个参数是一个表示侦听源的字符串
    // 或者是一个getter函数
    // 函数内可以返回一个复杂的表达式的值
    // 作为侦听源
    source: string | (() => any),
    // 回调函数
    callback: WatchCallback,
    // 一个侦听器设置对象
    options?: WatchOptions
  ): StopHandle // 调用这个返回值可以移除这个侦听器
}

// 回调函数
type WatchCallback<T> = (
  // 新值
  value: T,
  // 旧值
  oldValue: T,
  onCleanup: (cleanupFn: () => void) => void
) => void


interface WatchOptions {
  // true，则在watch创建的时候立刻触发回调
  // 第一次调用，oldValue 是undefined
  immediate?: boolean // default: false
  // true，则指定对象或数组深度改变（deep mutation）
  // 也会触发回调
  deep?: boolean // default: false
  // 指定回调函数刷新时机
  // 默认侦测器回调在组件实例更新之前被调用
  flush?: 'pre' | 'post' | 'sync' // default: 'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
}

type StopHandle = () => void
```
1. `this.$watch()` 描述：用于为响应式状态创建对应的侦听器（watcher）
2. 第一个参数的字符串侦听源，可以是`dot-delimited path`的类型，即属性是对象，可以侦听对象下的属性，如`a.b.c`
3. 第一个参数指定的侦听源还可以是支持复杂表达式的getter函数


> 如果想在回调函数调用this.$watcher 返回的StopHandler清除侦听器，因为第一次调用回调时还没有这个StopHandler，所以应该判断这个StopHandler是否存在才能使用这个StopHandler



`this.$watch()`用例

```javascript
// Watch a property name
this.$watch('a', (newVal, oldVal) => {})
// Watch a dot-delimited path
this.$watch('a.b', (newVal, oldVal) => {})

// Using getter for more complex expressions
this.$watch(
  // 表达式 `this.a + this.b` 
  // 每次得出一个不同的结果时， 
  // 回调函数都会被调用
  // 就像没有定义计算属性，侦听计算属性一样
  () => this.a + this.b,
  (newVal, oldVal) => {}
)

// Stopping the watcher
const unwatch = this.$watch('a', cb)
// later...
unwatch()
// === end

// ===
// 在回调内部调用一个取消侦听的函数
// 应该先检查unwatch的可用性
let unwatch = this.$watch(
  'value',
  function() {
    doSomething();
    if (unwatch) {
      unwatch();
    }
  },
  { immediate: true }
);
```

[回到顶部](#vue_options_api)


### expose
```typescript
interface ComponentOptions {
  // expose是一个字符串数组
  // 数组内的属性能够被外部组件引用
  expose?: string[]
}
```
1. expose选项描述：声明外部组件通过`$parent | $root | template ref` 等访问时，组件对外部暴露（expose）的属性。
2. 如果没有声明expose，默认，当组件实例被`$parent | $root | template ref` 访问时，组件实例暴露（expose）所有的属性
3. 为了避紧耦合（tight coupling），组件实例内部的状态（state）和方法（method）应该是私有的。当expose选项使用的时候，只有在expose数组上显式列出的属性嫩能暴露给父组件访问
4. expose选项只作用于用户定义属性，内置属性不会被过滤

expose选项用例：

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）
// expose声明的属性才能被外部访问
expose: ['publicData', 'publicMethod'],
data() {
  return {
    publicData: 'foo',
    privateData: 'bar'
  }
},
methods: {
  publicMethod() {
    /* ... */
  },
  privateMethod() {
    /* ... */
  }
}
```

[回到顶部](#vue_options_api)

### emits
```typescript
// emits 方法的 typescript 描述
interface ComponentOptions {
  // emits接收一个存放若干个自定义事件的字符串数组
  // 或者为了提供更多的控制，emits还可以是一个对象
  emits?: ArrayEmitsOptions | ObjectEmitsOptions
}

// emits接收一个存放若干个自定义事件的字符串数组
type ArrayEmitsOptions = string[]

// emits是对象时候
// 属性key对应要抛出的自定义事件的名称
// 值可以是null
// 或者是一个用于验证的函数
type ObjectEmitsOptions = { [key: string]: EmitValidator | null }

// emit的验证函数
// 函数参数接收`this.$emit()`的额外参数
// 验证这些额外参数
// `this.$emit('foo', 1)`
// 抛出了foo自定义事件
// 验证函数就会接收到这个额外参数1
type EmitValidator = (...args: unknown[]) => boolean // 验证触发的事件是否有效
```
1. emits选项描述：声明组件内触发的(emit)的自定义事件（csutom event）。
2. 声明emits的好处
    * 利于描述组件如何工作
    * 没有声明emits的组件上的监听器，将会作为透传属性（fallthrough attribute），这会传递到组件内的根元素上，如果组件内不止一个根元素，控制台会发出警告
    * 声明了emits后组件上的监听器不会作为透传属性，也会从`this.$attrs`对象中移除
3. 如果组件内触发（emit）的自定义事件不在emits声明中，控制台会发出警告）
4. 如果一个原生事件的名字 (例如 click) 被定义在 emits 选项中，则监听器只会监听组件触发的 click 事件而不会再响应原生的 click 事件


emits选项用例

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）
// 数组语法
emits: ['check']

// === 对象语法提供验证
emits: {
  // no validation
  click: null,
  // with validation
  submit: (payload) => {
    if (payload.email && payload.password) {
      return true
    } else {
      console.warn(`Invalid submit event payload!`)
      return false
    }
  }
}
```

[回到顶部](#vue_options_api)


#### this.$emits()实例方法
```typescript
//  this.$emits() 方法的 typescript 描述
interface ComponentPublicInstance {
  // 第一个参数：抛出事件的字符串名称
  // 其余参数会传递给监听这个自定义事件的回调函数
  $emit(event: string, ...args: any[]): void
}
```
1. `this.$emits()`的描述：触发一个自定义事件

`this.$emits()`用例

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）
created() {
  // only event
  this.$emit('foo')
  // with additional arguments
  this.$emit('bar', 1, 2, 3)
}
```

[回到顶部](#vue_options_api)


## 生命周期选项
生命周期选项内的生命周期钩子使用时间和用途，参考实例生命周期的基础部分，这里不再列举

生命周期选项包括：
* befeforeCreate
* created
* beforeMount
* mounted
* beforeUpdate
* updated
* beforeUnmount
* unmounted

对于被内置组件`<keep-alive>`缓存的组件实例的生命周期选项：
* activated
* deactivated


```typescript
// 生命周期钩子函数的 this 上下文都会自动指向当前调用生命周期钩子函数的组件实例
// 避免用箭头函数来定义生命周期钩子，这样会丢失this
interface ComponentOptions {
  beforeCreate?(this: ComponentPublicInstance): void
}

interface ComponentOptions {
  created?(this: ComponentPublicInstance): void
}

interface ComponentOptions {
  beforeMount?(this: ComponentPublicInstance): void
}

interface ComponentOptions {
  mounted?(this: ComponentPublicInstance): void
}

interface ComponentOptions {
  updated?(this: ComponentPublicInstance): void
}

interface ComponentOptions {
  updated?(this: ComponentPublicInstance): void
}

interface ComponentOptions {
  beforeUnmount?(this: ComponentPublicInstance): void
}

interface ComponentOptions {
  unmounted?(this: ComponentPublicInstance): void
}

interface ComponentOptions {
  activated?(this: ComponentPublicInstance): void
}

interface ComponentOptions {
  deactivated?(this: ComponentPublicInstance): void
}
```

[回到顶部](#vue_options_api)


## 渲染选项
* template
* render

[回到顶部](#vue_options_api)

### template
```typescript
// template 方法的 typescript 描述
interface ComponentOptions {
  // template接收一个字符串
  // 如果以字符串以#开头，这是一个CSS ID selector
  // 根据ID，`querySelector`找到这个元素
  // 将这个元素的`innerHTMl`作为模板
  // 如果是其他字符串，则解析为模板
  template?: string
}
```

1. template选项描述：声明组件的字符串模板（string template）。
2. 不建议在template选项直接书写html字符串，与js代码混合在一起，不便于维护。建议:
    * 使用构建工具中的SFC文件`.vue`
    * 非构建环境中通过`script type="x-template">`的定义ID属性引入template
3. template在运行时（runtime）被编译，有模板编译器（template compiler）才支持，在vue构建文件内有`*runtime*`的名称的不包括模板编译器
4. template选项与render选项：组件内定义了render选项，template选项会被忽略。根元素没有指定template和render选项，会把挂载的元素作为template


template 用例

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）
data() {
  return {
    count: 0
  }
},
template: `
  <button @click="count++">
    You clicked me {{ count }} times.
  </button>`
```

[回到顶部](#vue_options_api)

### render
```typescript
// render typescript 描述
interface ComponentOptions {
  // render是一个函数
  // 函数中的this指向组件实例
  render?(this: ComponentPublicInstance) => VNodeChild 
  // 返回一个组件的virtual DOM tree（VNodeChild）
}

type VNodeChild = VNodeChildAtom | VNodeArrayChildren

type VNodeChildAtom =
  | VNode
  | string
  | number
  | boolean
  | null
  | undefined
  | void

type VNodeArrayChildren = (VNodeArrayChildren | VNodeChildAtom)[]
```
1. render选项描述：是字符串模板的代替，可以使用javascript编程渲染组件的输出（render output of component）。
2. template选项与render选项：组件内定义了render选项，template选项会被忽略。根元素没有指定template和render选项，会把挂载的元素作为template


[回到顶部](#vue_options_api)


## 组合选项
* provide
* inject
* mixins
* extends

[回到顶部](#vue_options_api)

### provide
```typescript
// provide方法的 typescript 描述
interface ComponentOptions {
  // provide是一个对象
  // 或者是一个函数，函数内this指向组件实例
  // 从而可以依赖当前组件实例的状态（state）
  // 函数返回一个对象
  provide?: object | ((this: ComponentPublicInstance) => object)
}
```
1. provide选项：为可注入（injected）的后代组件，声明可以提供（provide）的属性。后代组件根据声明的inject，找到对应provide的属性（key），将属性值注入（inject）到对应的值上
2. provide不会使得注入（inject）响应式，提供的值如果是一个响应式对象，对象内的属性是保持响应式的



provide选项用例:

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）
// const s = Symbol()
provide: {
  foo: 'foo',
  // symbol命名的provide属性
  // symbol在外部创建
  [s]: 'bar'
},
// === end

// ===
// 使用当前组件的实例状态
data() {
  return {
    message: 'hello!'
  }
},
provide() {
  // use function syntax so that we can access `this`
  return {
    message: this.message
  }
}
```

[回到顶部](#vue_options_api)


### inject
```typescript
// inject方法的 typescript 描述
interface ComponentOptions {
  // 接收一个字符串数组，
  // 将将同名的provide值
  // 注入到同名的injec项目上
  // 更多的控制，接收一个对象
  inject?: ArrayInjectOptions | ObjectInjectOptions
}

type ArrayInjectOptions = string[]

// 接收一个对象，更多的控制
type ObjectInjectOptions = {
  // 对象的key是string或者symbol类型，注入的别名
  [key: string | symbol]:
    | string // provide的属性
    | symbol // provide的属性
    // 一个对象
    // 其中的from是provide的属性
    // defualt默认值，对于非基础类型数据，
    // 如果创建开销比较大，或每个组件实例需要独立数据的
    // 可以使用工厂函数返回作为默认值
    | { from?: string | symbol; default?: any }
}
```
1. inject选项：声明接收父组件提供（provide）的属性注入到对应的值
2. 一个 injected 属性，如果没有匹配的属性和defualt值，值是undefined
3. 注入不是响应式的，如果注入的值是一个响应式对象，对象内的属性是保持响应式的
4. 注入在组件状态（state）之前被解析，所以在`data()`内访问到注入的数据


inject选项用例:

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）

// 字符串数组形式
// 将provide的message注入到message中
inject: ['message'],
data() {
  return {
    // initial data based on injected value
    fullMessage: this.message
  }
}
// === end

// ===
// 对象语法，更多的控制
inject: {
  // inject别名
  localMessage: {
    // prove的属性key
    from: 'message', 
    // 默认值
    default: 'default value'
  },

  user: {
    // use a factory function for non-primitive values 
    // that are expensiveto create, 
    // or ones that should be unique per component instance.
    default: () => ({ name: 'John' })
  }
}
```

[回到顶部](#vue_options_api)

### mixins（未整理）


[回到顶部](#vue_options_api)

### extends（未整理）

[回到顶部](#vue_options_api)

## 混杂选项
混杂选项（misc options）包括：
* name
* inheriAttrs
* components
* directives

[回到顶部](#vue_options_api)

### name
```typescript
// inheritAttrs方法的 typescript 描述
interface ComponentOptions {
  // 字符串
  name?: string
}
```
1. name选项描述：声明组件的名称。单文件组件（SFC）中，name从文件名中自动推断（inferred），如果组件使用`app.component()`全局方法注册，全局id自动设为它name。
2. name选项用途：
    * 组件的模板（tempalte）内递归引用本身
    * Vue DevTools的组件树中显示
    * 组件警告追踪
    * `<keep-alive>`缓存组件需要通过`include/exclude`匹配的时候，组件的name是必须的


[回到顶部](#vue_options_api)

### inheritAttrs
```typescript
// inheritAttrs方法的 typescript 描述
interface ComponentOptions {
  // false，则fallthrough属性不会基础
  inheritAttrs?: boolean // default: true
}
```

1. inheritAttrs选项：声明是否继承组件上的透传属性（fallthrough attribute）。默认是true，组件上不被组件内props接收的HTML属性，是fallthrough的，自动添加到组件内的根元素
2. 使用场景： `inheritAttrs: false & this.$attrs`的配合将透传属性应用到根节点外的元素上

[回到顶部](#vue_options_api)

#### this.$attrs实例属性
```typescript
// `this.$attrs`方法的 typescript 描述
interface ComponentOptions {
  directives?: { [key: string]: Directive }
}
```

1. `this.$attrs`实例属性描述：是一个包含组件上（外部）定义的透传属性的对象。
2. `this.$attrs`内的属性名
    * 保留了原始的大小写，所以像属性名是foo-bar的属性，需要通过 `$attrs['foo-bar']`来访问
    * 如果透传属性是一个事件监听器，像 `@click` v-on事件监听器将在此对象下被暴露为一个函数 `$attrs.onClick`



[回到顶部](#vue_options_api)

### components
```typescript
// components方法的 typescript 描述
interface ComponentOptions {
  // 一个对象
  // 对象的属性（key）定义组件的名称
  // 对象的属性值是引用或定义的 Component
  components?: { [key: string]: Component }
}
```
1. components选项描述：声明（注册）组件实例内可以使用的组件

> ES2015 的缩写语法，如果属性和属性值名称一样，可以缩写省略为单独一个属性key, 书写component选项，通常属性名和值一样，可以使用缩写语法

components选项用例:

```javascript
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
  components: {
    // shorthand
    Foo,
    // register under a different name
    RenamedBar: Bar
  }
}
```

[回到顶部](#vue_options_api)

### directives
```typescript
// directives方法的 typescript 描述
interface ComponentOptions {
  // 对象的属性key定义指令的名称
  // 对象的属性的值是Directive对象
  // Directive对象内是定义的生命周期钩子
  directives?: { [key: string]: Directive }
}
```

1. directives选项描述：声明组件实例的自定义指令.自定义指令具体如果使用，参考自定义指令部分。


directives选项用例:

```javascript
// 以下用例在一个对象中定义，对象被默认导出（export default）
directives: {
  // 定义一个v-focus指令
  focus: {
    mounted(el) {
      el.focus()
    }
  },
  id1: {
    // 定义钩子函数
  },
  id2: {
    // 定义钩子函数
  }
  // 
}
```

[回到顶部](#vue_options_api)


## 组件实例的属性和方法
前面涉及过的实例属性和方法：
1. 与state状态选项相关的实例属性和方法
    * this.$data
    * this.$props
    * this.$watch()
    * this.$emit()
2. 和inheriAttrs选项相关的实例属性
    * this.$attrs

未涉及的实例属性和方法有：
* 访问元素的实例属性
    * this.$root
    * this.$el
    * this.$parent
    * this.$refs
* 更新相关
    * this.forceUpdate()
    * this.nextTick()
* 其他
    * this.$options
    * this.$slots

[回到顶部](#vue_options_api)

### 访问元素的实例属性
* this.$root
* this.$el
* this.$parent
* this.$refs

[回到顶部](#vue_options_api)

#### this.$root
```typescript
// this.$root方法的 typescript 描述
interface ComponentPublicInstance {
  $root: ComponentPublicInstance
}
```

1. `this.$root`实例属性描述：返回当前组件树（component tree）的根组件实例


[回到顶部](#vue_options_api)

#### this.$el
```typescript
// this.$el 方法的 typescript 描述
interface ComponentPublicInstance {
  // 组件挂载前是undefined
  // 组件只有一个根元素，`$el`指向这个根节点
  // 多个根节点`$el`是DOM 点占位符
  $el: Node | undefined
}
```

1. `this.$el`实例属性描述：返回组件实例的DOM根节点（root DOM node）。
2. 保持一致性（consistency），使用模板引用（template ref）取访问元素，而不是依赖于`this.$el`


[回到顶部](#vue_options_api)

#### this.$parent
```typescript
// this.$parent方法的 typescript 描述
interface ComponentPublicInstance {
  $parent: ComponentPublicInstance | null
}
```

1. `this.$parent`实例属性描述：返回当前组件实例的父实例，对于根组件实例父实例是空的
2. 父子组件的通信更多是使用prop和事件监听的形式


[回到顶部](#vue_options_api)

#### this.refs
```typescript
// this.$refs方法的 typescript 描述
interface ComponentPublicInstance {
  $parent: ComponentPublicInstance | null
}
```

1. `this.$refs`实例属性描述：返回包含所有模板ref的一个对象
2. `$refs`在组件渲染完成之后生效，并且不是响应式的，这仅作为一个用于直接操作子组件的“逃生舱”，应该避免在模板或计算属性中访问`$refs`


[回到顶部](#vue_options_api)


### 更新相关的实例方法
* this.$forceUpdate()
* this.$nextTick()

[回到顶部](#vue_options_api)


#### this.$forceUpdate()
```typescript
// this.$forceUpdate()方法的 typescript 描述
interface ComponentPublicInstance {
  $forceUpdate(): void
}
```
1. `this.$forceUpdate()`实例方法描述：强制组件实例重新渲染(re-render)，影响实例本身和插入插槽内容的子组件，而不是所有子组件。
2. 需要强制更新，一般来说是响应式数据处理出来问题。`$forceUpdate()` 对于整体自动响应式的系统（fully automatic reactivity system）不是很需要，仅仅在一些非响应式的组件中使用高级的reactivity API会被使用到


[回到顶部](#vue_options_api)

#### this.$nextTick()
```typescript
// nextTick()方法的 typescript 描述
interface ComponentPublicInstance {
  // 强制更新之后，调用回调函数callback
  $nextTick(callback?: (this: ComponentPublicInstance) => void): Promise<void> // 返回一个Promise
}
```

1. `this.$nexttick`实例方法描述：全局方法`nextTick()`的实例绑定（instance-bound）版本，具体用法可以参考全局方法`nextTick()`

[回到顶部](#vue_options_api)


### 其他
* this.$options
* this.$slots

[回到顶部](#vue_options_api)

#### this.$options
```typescript
// this.$options方法的 typescript 描述
interface ComponentPublicInstance {
  $options: ComponentOptions
}
```

1. `this.$options`实例属性：返回当前组件实例的已经解决（resolved）的option对象。对于`this.$options`，还返回以下的来源的合并结果：
    * 全局mixins
    * 组件的extends
    * 组件的mixins

`this.$options`实例属性用例

```javascript
// get custom component options
const app = createApp({
  customOption: 'foo',
  created() {
    console.log(this.$options.customOption) // => 'foo'
  }
})
```

[回到顶部](#vue_docs)

#### this.$slots
```typescript
// `this.$slots`方法的 typescript 描述
interface ComponentPublicInstance {
  // 是一个对象
  // 属性的key对应了一个slot contents的名称
  // 属性的值就是对应的slot contents
  $slots: { [name: string]: Slot }
}

type Slot = (...args: any[]) => VNode[]
```

1. `this.$slots`属性：返回组件上的插槽内容（slot contents）的对象。渲染函数（render function）会用到。对于`this.$slots`，是一个对象：

`this.$slots`实例属性用例:

```javascript
// === 例子
app.component('blog-post', {
  render: function (createElement) {
    let header = this.$slots.header
    let body   = this.$slots.default
    let footer = this.$slots.footer
    return createElement('div', [
      createElement('header', header),
      createElement('main', body),
      createElement('footer', footer)
    ])
  }
})
```

[回到顶部](#vue_options_api)