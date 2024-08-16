

# vue_composition_api
1. [reactivity_core_api](#reactivity_core_api)
  1. [ref()](#ref)
    1. [ref自动解包](#ref自动解包)
      1. [ref在模板中的自动解包](#ref在模板中的自动解包)
      2. [ref在响应式对象中作为属性的自动解包](#ref在响应式对象中作为属性的自动解包)
  2. [reactive()](#reactive)
    1. [响应式对象内的嵌套也是代理](#响应式对象内的嵌套也是代理)
    2. [reactive()的代理丢失](#reactive的代理丢失)
  3. [computed()](#computed)
  4. [watch()](#watch)
    1. [侦听器停止](#侦听器停止)
  5. [watcheffect()](#watcheffect)
  6. [watch()和watchEffect()比较](#watch和watcheffect比较)
2. [生命周期钩子函数](#生命周期钩子函数)
3. [provide() & inject()](#provide--inject)
  1. [provide()](#provide)
  2. [inject()](#inject)
4. [setup()](#setup)
  1. [setup()不能直接解构prop](#setup不能直接解构prop)
  2. [setup()接收context](#setup接收context)
5. [SFC中的setup脚本](#sfc中的setup脚本)
  1. [SFC中setup脚本的编译宏](#sfc中setup脚本的编译宏)
    1. [defineProps()](#defineprops)
    2. [defineEmits()](#defineemits)
    3. [defineExpose()](#defineexpose)




## reactivity_core_api
reactivity_core_api 包括：
* ref()
* reactive()

[回到顶部](#vue_composition_api)

### ref()
ref() 返回一个响应式，可修改的ref对象，通过`.value`获得内部值，这个内部值式响应式的。对于ref() 函数：
* 第一个参数value：value是任何类型，这个value被包装（wrapped）为一个ref对象。如果这个值是对象，会自动调用`reactive()`方法，`reactive()`是深层响应式的，对象内的嵌套属性是解包的refs（unwrap refs），可以不用通过`.value`取访问和修改他们的值，避免深层转换，使用`shalldowRef()`
* 返回值UnwrapRef：是一个ref对象（UnwrapRef object），对于这个返回对象，有一个与函数参数value对应的`value`属性，这个对象是可以修改的（mutable），可以为`value`属性赋新值
* 相较于reactive()，ref() 能创造一种对任何值的 "引用"，并能够不丢失响应性地随意传递，即赋值或者解构赋值给一个变量，或者作为函数的实参，都能保持响应式


```typescript
// ref() 方法的 typescript 描述
function ref<T>(value: T): Ref<UnwrapRef<T>>

interface Ref<T> {
    value: T
}
```

ref() 用例：

```javascript
import { ref } from 'vue'
const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1

// =========================
// 包含对象类型值的 ref 可以响应式地替换整个对象
const objectRef = ref({ count: 0 })
// this works reactively
objectRef.value = { count: 1 }

// ===============
// ref 赋值或者解构赋值给一个变量，
// 或者作为函数的实参，都能保持响应式
const obj = {
  foo: ref(1),
  bar: ref(2)
}
// the function receives a ref
// it needs to access the value via .value but it
// will retain the reactivity connection
callSomeFunction(obj.foo)
// still reactive
const { foo, bar } = obj
```

[回到顶部](#vue_composition_api)


#### ref自动解包
* ref在模板中的自动解包
* ref在响应式对象中作为属性的自动解包
* 数组和集合类型的ref解包


##### ref在模板中的自动解包
ref在模板（template）再以下情况下会被自动解包（automatically "unwrapped"），不需要使用`.value`：
* 作为顶层属性（top-property）
* 文本插值表达式最后的计算


用例： 
```html
<!-- 
const object = { foo: ref(1) }
-->
<template>
<!-- ref不是作为顶层属性 -->
<!-- 渲染的结果会是[object Object] -->
{{ object.foo + 1 }}

<!-- 如果是文本插值的最终计算值 -->
<!-- ref 也会被自动解包 -->
<!-- 相当于 {{ object.foo.value }} -->
{{ object.foo }}
</template>

<!-- 
const object = { foo: ref(1) }
const { foo } = object 
-->
<template>
<!-- ref是顶层属性，可以自动解包 -->
{{ foo + 1 }}
</template>
```

[回到顶部](#vue_composition_api)


##### ref在响应式对象中作为属性的自动解包
当ref作为响应式对象中的 property 被访问（access）或更改（mutation）时，会被自动解包（automatically unwrapped），即可以不用通过`.value`取访问和修改他们的值。注意，ref解包发生在深层响应对象（deep reactive object），作为浅层响应对象属性被访问不会应用解包

特殊的，ref在数组和集合类型对象中元素被访问修改不会自动解包


用例：

```javascript
// ref 在响应式对象中作为属性
// 时被被访问修改自动解包
const count = ref(0)
const state = reactive({
  count
})
console.log(state.count) // 0
state.count = 1
console.log(count.value) // 1


// 对象类型是数组和集合
// 作为其中元素的ref，不会被自动解包
const books = reactive([ref('Vue 3 Guide')])
// need .value here
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// need .value here
console.log(map.get('count').value)
```

[回到顶部](#vue_composition_api)


### reactive()
reactive() 返回一个对象的响应式代理（reactive proxy），基于ES2015 Proxy实现的，所以返回的proxy对象和原对象不是同一个。对于reactive()：
* 第一个参数target：接收对象类型值
    * 如果不是对象类型值，开发模式抛出警告，生产环境直接返回目标对象
    * 如果已经是proxy，直接返回这个proxy
    * 如果参数在proxyMap中有对应的proxy，返回这个对象的proxy
    * 对于数组和`Map | Set | WeakSet | WeakMap`内的元素不进行解包ref
* 返回值UnwrapNestedRefs：返回一个reactive proxy对象，这个对象和原始对象不是同一个，对象是深层响应式（deep reactive），对象内的嵌套属性是解包的refs（unwrap refs），可以不用通过`.value`取访问和修改他们的值
* 避免深层的转换只保持根层级的属性是响应式（reactive），可以使用`shallowReactive()`，根层级（root-level）不会自动解包refs


```typescript
// reactive() 方法的 typescript 描述
function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
```

reactive() 用例

```javascript
const count = ref(1)
const obj = reactive({ count })
// ref will be unwrapped
// 嵌套属性式自动解包的ref
console.log(obj.count === count.value) // true
count.value++ 
console.log(count.value) // 2
console.log(obj.count) // 2
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3

// ========================
// 数组和集合不会解包
const books = reactive([ref('Vue 3 Guide')])
// need .value here
console.log(books[0].value)
const map = reactive(new Map([['count', ref(0)]]))
// need .value here
console.log(map.get('count').value)

// ======================
// 将ref赋值给reactive对象的属性
// 会自动解包
const count = ref(1)
const obj = reactive({})
obj.count = count
console.log(obj.count) // 1
console.log(obj.count === count.value) // true

// ==========
// 同一个对象代理式一样的
// calling reactive() on the same object returns the same proxy
console.log(reactive(raw) === proxy) // true

// 对代理使用reactive()，返回代理本身
// calling reactive() on a proxy returns itself
console.log(reactive(proxy) === proxy) // true
```

[回到顶部](#vue_composition_api)

#### 响应式对象内的嵌套也是代理
```javascript
const proxy = reactive({})

const raw = {}
proxy.nested = raw

console.log(proxy.nested === raw) // false
```

[回到顶部](#vue_composition_api)


#### reactive()的代理丢失
reactive()的代理丢失：
* reactive()返回的代理存到一个变量，这个变量再存放其他代理，原代理丢失，这意味着不可以随意地 “替换” 一个响应式对象
* 把reactive()返回的响应式代理对象中的属性，赋值或者解构赋值给一个变量，或者作为函数的实参，这个变量并不能实现响应式

```javascript
let state = reactive({ count: 0 })
// this won't work!
// 原来的代理丢失了
state = reactive({ count: 1 })

// ==========
// 响应式对象属性，赋值或者解构赋值给一个变量
const state = reactive({ count: 0 })
// n is a local variable that is disconnected
// from state.count.
let n = state.count
// does not affect original state
n++
// count is also disconnected from state.count.
let { count } = state
// does not affect original state
count++

// the function receives a plain number and
// won't be able to track changes to state.count
callSomeFunction(state.count)
```

[回到顶部](#vue_composition_api)


### computed()
在模板（template）中写简单表达式很方便，但是模板中写太多逻辑，会让使其变得臃肿，难以维护。而计算属性用于描述依赖响应式状态的复杂逻辑。composition API 中用computed方法返回计算属性。

如果要创建computedGetter，只包含计算属性的getter，即只读的computed，对于computed():
* 第一个参数getter: 是一个有返回值的getter函数
* 返回值：根据getter参数的返回值，返回一个只读的响应式ref

如果要创建WritableComputed，即可写的计算属性，包含计算属性的getter和setter，对于computed():
* 第一个参数WritableComputedOptions对象，对象内包括两个属性
    * get：是一个有返回值的函数computedGetter
    * set：是一个没有返回值的函数，函数的第一个参数value，用于更新值
* 返回值：返回一个可写（writable）的ref


```typescript
// computed()方法的 typescript 描述
// read-only
function computed<T>(
  getter: () => T,
  // see "Computed Debugging" link below
  debuggerOptions?: DebuggerOptions
): Readonly<Ref<Readonly<T>>>

// writable
function computed<T>(
  options: {
    get: () => T
    set: (value: T) => void
  },
  debuggerOptions?: DebuggerOptions
): Ref<T>
```

computed() 用例

```javascript
// 只读的computed
const count = ref(1)
const plusOne = computed(() => count.value + 1)
console.log(plusOne.value) // 2
plusOne.value++ // error

// 可写的computed
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  }
})
plusOne.value = 1
console.log(count.value) // 0
```

[回到顶部](#vue_composition_api)

### watch()
watch() 侦听一个或多个响应式数据源，当数据变化的时候，调用回调函数。对于watch():
* 第一个参数source：只要是侦听响应式的数据，如ref，reactive object，或getter函数或者包括上面这些数据的数组
* 第二个参数callback：是一个callback function，当响应式数据源发生改变，这个callback被调用，对于这个callback
    * 第一个参数value：更新后的值value。如果要检测的是一个包含多个数据的数组，这是一个数组，对应了各个数组源的更新后的值
    * 第二个参数oldvalue：更新前的值oldValue。如果要检测的是一个包含多个数据的数组，这是一个数组，对应了各个数组源的更新前的值
* 第三个参数WatchOptions：是一个对象，包含以下属性:
    * 可选的imediate：boolean值，默认值false。true，则在watch创建的时候立刻触发回调，第一次调用，oldValue 是undefined。watch 默认是懒侦听的，只有侦听的源数据变化时，才会执行回调，可以将可选的属性`immediate`设置true，立即执行一遍回调，这时oldValue为undefined
    * 可选的deep：boolean值，默认值false。true，则指定对象或数组深度改变（deep mutation）也会触发回调。深度侦听需要遍历被侦听对象中的所有嵌套的 property，当用于大型数据结构时，开销很大。因此请只在必要时才使用它，并且要留意性能
    * 可选的flush：`'pre' | 'post' | 'sync'`，默认值是'pre'，指定回调函数刷新时机。默认侦测器回调在组件实例更新之前被调用，这意味着在侦听器回调中访问的dom式更新之前的dom。 如果想侦听器能够访问更新之后的dom，可以将可选的属性`flush`设置为`post`
    * 可选的onTrack: 是一个函数` (event: DebuggerEvent) => void`， dubug watch
    * 可选的onTrigger: 是一个函数 `(event: DebuggerEvent) => void`，dubug watch
* 返回值：返回一个StopHandle，调用它可以停止侦听器，一般情况下不需要手动停止，异步建立监听器需要手动停止。

```typescript
// watch()方法的 typescript 描述
// watching single source
function watch<T>(
  source: WatchSource<T>,
  callback: WatchCallback<T>,
  options?: WatchOptions
): StopHandle

// watching multiple sources
function watch<T>(
  sources: WatchSource<T>[],
  callback: WatchCallback<T[]>,
  options?: WatchOptions
): StopHandle

type WatchCallback<T> = (
  value: T,
  oldValue: T,
  onCleanup: (cleanupFn: () => void) => void
) => void

type WatchSource<T> =
  | Ref<T> // ref
  | (() => T) // getter
  | T extends object
  ? T
  : never // reactive object

interface WatchOptions extends WatchEffectOptions {
  immediate?: boolean // default: false
  deep?: boolean // default: false
  flush?: 'pre' | 'post' | 'sync' // default: 'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
}
```

watch() 用例

```javascript
const x = ref(0)
const y = ref(0)

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})
//
watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  /* ... */
})


// ==========
// 侦听一个响应式对象
// 用getter函数返回响应式对象
// 只有getter函数的返回值改变才会触发watch
// 如果要指定深层响应，可以指定option对象中的deep属性
const state = reactive({ count: 0 })
watch(
  () => state,
  (newValue, oldValue) => {
    // newValue === oldValue
  },
  { deep: true }
)

// 直接把响应式对象作为侦听源，默认是深层响应的
const state = reactive({ count: 0 })
watch(state, () => {
  /* triggers on deep mutation to state */
})

// 响应式对象的属性监听，需要用getter函数作为侦听源
// 提供一个 getter 函数
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)
```

[回到顶部](#vue_composition_api)


#### 侦听器停止
侦听器必须用同步语句创建，否则不能自动停止，如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏

```html
<script setup>
import { watchEffect } from 'vue'

// 它会自动停止
watchEffect(() => {})

// ...这个则不会！
setTimeout(() => {
  watchEffect(() => {})
}, 100)
</script>
```

[回到顶部](#vue_composition_api)

### watcheffect()
watcheffect() 立刻调用参数指定的函数，对参数指定的函数内的响应式依赖进行跟踪，如果相应的依赖被改变，这个函数就会重新运行。对于watcheffect():
* 第一个参数effect：是一个函数，函数的第一个参数是onCleanup
* 第二个参数是和watch()一样的 WatchEffectOptions对象

```typescript
// watcheffect()方法的 typescript 描述
function watchEffect(
  effect: (onCleanup: OnCleanup) => void,
  options?: WatchEffectOptions
): StopHandle

type OnCleanup = (cleanupFn: () => void) => void

interface WatchEffectOptions {
  flush?: 'pre' | 'post' | 'sync' // default: 'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
}

type StopHandle = () => void
```

watcheffect() 用例

```javascript
const count = ref(0)

watchEffect(() => console.log(count.value))
// -> logs 0

count.value++
// -> logs 1
```

[回到顶部](#vue_composition_api)

### watch()和watchEffect()比较
watch 和 watchEffect 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：
* watch 只追踪明确侦听的源。它不会追踪任何在回调中访问到的东西。另外，仅在响应源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机
* watchEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式 property。这更方便，而且代码往往更简洁，但其响应性依赖关系不那么明确。

[回到顶部](#vue_composition_api)


## 生命周期钩子函数
生命周期选项内的生命周期钩子使用时间和用途，参考实例生命周期的基础部分，这里不再列举

生命周期生命周期钩子函数包括：
* onBeforeMount()
* onMounted()
* onBeforeUpdate()
* onUpdated()
* onBeforeUnmount()
* onUnmounted()

对于被内置组件`<keep-alive>`缓存的组件实例的生命周期选项：
* onActivated()
* onDeactivated()


```typescript
function onBeforeMount(callback: () => void): void
function onMounted(callback: () => void): void

function onBeforeUpdate(callback: () => void): void
function onUpdated(callback: () => void): void

function onBeforeUnmount(callback: () => void): void
function onUnmounted(callback: () => void): void

function onActivated(callback: () => void): void
function onDeactivated(callback: () => void): void
```

[回到顶部](#vue_composition_api)


## provide() & inject()

[回到顶部](#vue_composition_api)

### provide()
provide 用于为可以注入（injected）的后代组件提供值，对于provide():
* 第一个参数：provide属性（key）
* 第二个参数：provide属性（key）对应的值
* provide 和inject 通常一起使用，对于 provide 的每一个属性（key），后代组件会用其 key 为注入名查找期望注入的值，属性的值就是要供给的数据
* provide选项不会使得注入（inject）响应式，但是provide中的值在composition API中，可以传递ref等，可以保持注入的响应式

```typescript
function provide<T>(key: InjectionKey<T> | string, value: T): void
```

用例：

```html
<script setup>
import { ref, provide } from 'vue'
import { fooSymbol } from './injectionSymbols'

// provide static value
provide('foo', 'bar')

// provide reactive value
const count = ref(0)
provide('count', count)

// provide with Symbol keys
provide(fooSymbol, count)
</script>
```

[回到顶部](#vue_composition_api)


### inject()
inject()函数用于从父组件的提供（provide）中声明属性注入到当前组件。对于inject()：
* 第一个参数key：用于接收provide提供的属性key，如果存在多个相同的，选用更靠近组件实例的那个，如果没有找到，则是undefined，或者选用默认值
* 第二个参数可选的defaultValue：用于处理默认值，可以是一个值，或者工厂函数返回的值
* 第三个参数可选的treatDefaultAsFactory：如果是false，则第二个参数defauValue是一个函数，而不是工厂函数


```typescript
// inject方法的 typescript 描述
// without default value
function inject<T>(key: InjectionKey<T> | string): T | undefined)

// with default value
function inject<T>(key: InjectionKey<T> | string, defaultValue: T): T

// with factory
function inject<T>(
  key: InjectionKey<T> | string,
  defaultValue: () => T,
  treatDefaultAsFactory: true
): T
```

用例：

```html
<script setup>
import { inject } from 'vue'
import { fooSymbol } from './injectionSymbols'

// inject static value with default
const foo = inject('foo')

// inject reactive value
const count = inject('count')

// inject with Symbol keys
const foo2 = inject(fooSymbol)

// inject with default value
const bar = inject('foo', 'default value')

// inject with default value factory
const baz = inject('foo', () => new Map())

// inject with function default value, by passing the 3rd argument
const fn = inject('function', () => {}, false)
</script>
```

[回到顶部](#vue_composition_api)




## setup()
setup() 钩子函数（hook）是composition API在组件内的入口。对于setup()
* 使用场景：
    * 不在构建环境中使用composition API
    * 在option API组件内加入（Integrate）composition API代码
* 第一个参数props：组件定义的props，是响应式的
* 第二个参数context：一个setup context对象，这个对象包含了setup方法内需要用到的其他值，这些值都不是响应式的
* 返回值：返回一个对象，方法内定义的state作为对象的属性返回。这样，在tempalte上或者在setup()外用this都可以访问，其中的通过`ref()`创建的ref变量会自动浅层解包（automatically shallow unwrapped），这意味着，在setup() 外（在tempalte或者用this访问）不需要使用`.value`访问
* setup()方法内不能访问组件实例，this指向null

用例：

```html
<!-- 不在构建环境中 -->
<!-- 或者在option API中混入composition API数据 -->
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    // expose to template and other options API hooks
    return {
      count
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>

<!-- props是setup()的第一个参数 -->
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title)
  }
}
```

[回到顶部](#vue_composition_api)

### setup()不能直接解构prop
如果通过解构的方式访问prop，会让prop丢失响应式（reactivity），解决办法：
* 建议通过`props.xxx`的方式访问
* 如果实在需要解构，使用reactivity utilities API中的 ` toRefs()`和`toRef()`

用例

```javascript
import { toRefs } from 'vue'

export default {
  setup(props) {
    // turn `props` into an object of refs, then destructure
    const { title } = toRefs(props)
    // `title` is a ref that tracks `props.title`
    console.log(title.value)

    // OR, turn a single property on `props` into a ref
    const title = toRef(props, 'title')
  }
}
```

[回到顶部](#vue_composition_api)

### setup()接收context
setup()第二个参数接收context，这些值都不是响应式的，所以可以安全地被解构

```javascript
export default {
  setup(props, context) {
    // Attributes (Non-reactive object, equivalent to $attrs)
    console.log(context.attrs)

    // Slots (Non-reactive object, equivalent to $slots)
    console.log(context.slots)

    // Emit events (Function, equivalent to $emit)
    console.log(context.emit)

    // Expose public properties (Function)
    console.log(context.expose)
  }
}

// === 不是响应式的，支持解构
export default {
  setup(props, { attrs, slots, emit, expose }) {
    ...
  }
}
```

[回到顶部](#vue_composition_api)

## SFC中的setup脚本
`<script setup>` 是单文件组件（SFC）中composition API的编译时（compile-time）语法糖（ syntactic sugar）。对比普通的`<script>`提供了以下帮助：
* setup() 函数中手动暴露状态和方法可能非常繁琐，单文件组件（SFC）中，使用 `<script setup>` 可以简化这个步骤，此外，还提供了其他简化
* 更方便使用typescript
* 更好的IDE类型推断
* 更好的运行表现，模板在同一个作用域编译到render函数，没有中间代理
* 最高级别绑定（Top-level bindings）暴露到模板中， `<script setup>`里面定义的变量，函数，import等都可以在模板中直接使用

`<script setup>` 的代码会编译为setup()函数的内容

```html
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```

[回到顶部](#vue_composition_api)

### SFC中setup脚本的编译宏
* defineProps()
* difineExpose()

[回到顶部](#vue_composition_api)

#### defineProps()
defineProps()是`<script setup>`的compiler macros，不需要导入，和props选项一样接收同样的值。defineProps()用于声明组件的props，以此来外部传入的HTML属性（也叫自定义属性），是作为props被接收，还是作为透传html属性（fallthrough attribute）。对于defineProps()：
* 函数参数接收和props一样的值
    * 值可以是一个字符串数组，数组内存放若干prop字符串。
    * 对props更多的控制，值可以是一个对象
* 如果一个prop没有从外部接收到对应的HTML属性（这个prop指定类型为Boolean除外），相应的一个prop值是`undefined`
* Boolean类型的prop的转换：如果一个prop外部对应的HTML属性没有赋值，相应的一个prop值是true；如果没有接收到对应的HTML属性，这个prop的值是false


defineProps()函数参数是一个对象时，属性key指示prop的名称，prop（对象的属性key）的值有三种不同的类型：
* null
* 构造函数/构造函数数组：构造函数即`Number | String | Boolean | Symbol |  Function | Object | Array | Date | 自定义构造函数` 这些能被new运算符调用的类型，指定多个类型，将这些值放到数组上
* 是一个对象，有四个可选的属性：
    * type：构造函数/构造函数数组：构造函数即`Number | String | Boolean | Symbol |  Function | Object | Array | Date | 自定义构造函数` 这些能被new运算符调用的类型，指定多个类型，将这些值放到数组上
    * required：是一个boolean值，指示prop是否必须。非生产环境下，如果值是true，prop没有接收到值，会发出警告
    * default：指示prop的默认值。prop的值是undefind（包括未从外部传入对应HTML属性），default就会被调用。特殊的，对象（包括Array，Function等默认值指定需要使用工厂函数（factory function）返回，这个工厂函数使用 raw props object作为参数
    * validator：自定义的验证函数，prop的值作为函数参数，返回一个boolean值，返回false，非生产环境下会发出警告

用例：

```javascript
// 数组语法
// in <script setup>
const props = defineProps(['foo'])
console.log(props.foo)

// 对象语法提供更多控制
// in <script setup>
const props = defineProps({
  title: String,
  likes: Number
})

// 对象语法更多控制
defineProps({
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true
  },
  // Number 类型的默认值
  propD: {
    type: Number,
    default: 100
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 一个返回默认对象/数组值
    // 的工厂函数
    default() {
      return { message: 'hello' }
    }
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
})
```
[回到顶部](#vue_composition_api)


#### defineEmits()
defineEmits()是`<script setup>`的compiler macros，不需要导入，和emits选项一样接收同样的值。defineEmits()用于声明组件内触发的(emit)的自定义事件（custom event）。对于emits的声明：
* 如果没有声明抛出（emit）的事件，组件上的事件就会作为（naive）事件应用于组件内的根元素上，如果组件内不止一个根元素，控制台会发出警告，反之，声明了抛出的事件，将对应的事件监听器（evebt listener）作为组件事件监听（component event listeners），而不是原生的DOM事件监听器，从而，事件监听器不会添加到组件内的根元素上，也会从`this.$attrs`对象中移除
* 如果组件内抛出（emit）的自定义事件不在emits声明内，控制台会发出警告
* emits声明只会影响在外部定义（组件上）定义的自定义事件，不会影响组件内原生DOM事件（naive DOM event）
* 如果一个原生事件的名字 (例如 click) 被定义在 emits 选项中，则监听器只会监听组件触发的 click 事件而不会再响应原生的 click 事件
* 声明emits是可选的，但是定义emits选项有利于描述组件如何工作，也能将监听器从透传属性（fallthrough attribute）排除（exclude）

emits选项的值：
* 接收一个存放若干个自定义事件的字符串数组，字符串指定要抛出的自定义事件的名称
* 为了提供更多的控制，emits还可以是一个对象
    * 属性（key）是指定要抛出的自定义事件的名称
    * 属性的值可以是： null | 一个用于验证（Validator）的函数，对于这个函数：
        * 函数参数：任意个数函数参数，验证函数会接收到传递给组件的`$emit`调用的额外参数。例如`this.$emit('foo', 1)`，抛出了foo自定义事件，对应的验证函数就会接收到这个额外参数1
        * 返回值：boolean值，指示这个自定义事件参数是否是有效的（valid）

用例：

```html
<script setup>
const emit = defineEmits(['inFocus', 'submit'])
</script>

<script setup>
const emit = defineEmits({
  submit(payload) {
    // 通过返回值为 `true` 还是为 `false` 来判断
    // 验证是否通过
  }
})
</script>

<!-- ========= -->
<script setup>
const emit = defineEmits({
  // 没有校验
  click: null,

  // 校验 submit 事件
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

function submitForm(email, password) {
  emit('submit', { email, password })
}
</script>
```

[回到顶部](#vue_composition_api)

#### defineExpose()
使用了 `<script setup>`的组件默认是关闭的（closed by default），通过模板ref或者`$parent`是访问不到`<script setup>`中绑定的内容，显式暴露`<script setup>`中的属性，可以通过 defineExpose()，defineExpose()是`<script setup>`的compiler macros，不需要导入

```html
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```

[回到顶部](#vue_composition_api)

