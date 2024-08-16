
# typescript_docs
1. [字面量类型](#字面量类型)
2. [数据类型](#数据类型)
    1. [基本数据类型](#基本数据类型)
    2. [null&undefined](#nullundefined)
        1. [后缀!非空断言操作符](#后缀非空断言操作符)
    3. [对象数据类型](#对象数据类型)
        1. [对象](#对象)
            1. [可选属性](#可选属性)
        2. [数组](#数组)
3. [typescript特有数据类型](#typescript特有数据类型)
    1. [枚举](#枚举)
        1. [数字枚举](#数字枚举)
        2. [字符串枚举](#字符串枚举)
        3. [异构枚举](#异构枚举)
        4. [常量枚举表达式](#常量枚举表达式)
        5. [运行时的枚举](#运行时的枚举)
        6. [常量枚举](#常量枚举)
        7. [unknown](#unknown)
        8. [any](#any)
            1. [noImplicitAny](#noimplicitany)
        9. [void](#void)
        10. [never](#never)
4. [联合类型](#联合类型)
5. [类型别名](#类型别名)
        1. [类型别名与联合类型](#类型别名与联合类型)
6. [函数](#函数)
    1. [函数参数传递一致](#函数参数传递一致)
    2. [函数默认形参和可选参数](#函数默认形参和可选参数)
    3. [剩余形参](#剩余形参)
    4. [this指向](#this指向)
    5. [函数重载](#函数重载)
7. [类](#类)
    1. [类继承](#类继承)
    2. [readonly属性](#readonly属性)
    3. [类的公有私有受保护属性](#类的公有私有受保护属性)
        1. [参数属性](#参数属性)
    4. [类的getter和setter](#类的getter和setter)
    5. [类的静态属性](#类的静态属性)
    6. [抽象类](#抽象类)
8. [接口](#接口)
    1. [接口规范对象属性](#接口规范对象属性)
        1. [接口规范对象可选属性](#接口规范对象可选属性)
        2. [接口规范只读属性](#接口规范只读属性)
        3. [接口规范对象的额外属性](#接口规范对象的额外属性)
        4. [接口规范为对象的可索引属性](#接口规范为对象的可索引属性)
    2. [接口规范函数](#接口规范函数)
    3. [接口规范类](#接口规范类)
    4. [接口继承](#接口继承)
        1. [接口继承类](#接口继承类)
9. [泛型](#泛型)
    1. [泛型变量](#泛型变量)
    2. [泛型类](#泛型类)
    3. [泛型约束](#泛型约束)
    4. [通过接口约束泛型](#通过接口约束泛型)
    5. [通过泛型约束泛型](#通过泛型约束泛型)
10. [类型断言](#类型断言)

## 字面量类型
TypeScript 中有三种可用的字面量类型集合，分别是：字符串、数字和布尔值，可以具体指定字面量值

```typescript
let x: "hello" = "hello";
// OK
x = "hello";
// error
x = "howdy";

// ===
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
```

[回到顶部](#typescript_docs)


## 数据类型
* 基本数据类型
* 对象数据类型

[回到顶部](#typescript_docs)

### 基本数据类型

```typescript
let num: number = 10
let str: string = 'liuyao'
let isDone: boolean = true
```

[回到顶部](#typescript_docs)

### null&undefined
可以设置`strictNullChecks`编译器选项，如果值是on，则在使用值之前需要检测这个值的undefined

```typescript
// Not much else we can assign to these variables!
let u: undefined = undefined
let n: null = null
```
[回到顶部](#typescript_docs)


#### 后缀!非空断言操作符
断言值非空，避免检测null，undefined

```typescript
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

[回到顶部](#typescript_docs)

### 对象数据类型

[回到顶部](#typescript_docs)

#### 对象

```typescript
let o: object = { name: 'liu' }

// === 
let p: { name: string } = {
    name: 'h'
}
```

[回到顶部](#typescript_docs)


##### 可选属性
属性名前增加?

```typescript
function printName(obj: { first: string; last?: string }) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

[回到顶部](#typescript_docs)


#### 数组
```typescript
let arr: number[] = [1, 2, 3]

// 数组泛型
let arr2: Array<number> = [1, 2]
```

[回到顶部](#typescript_docs)

## typescript特有数据类型
* 枚举
* unknown
* any
* void
* never


[回到顶部](#typescript_docs)

### 枚举
枚举类型，像其他语言一样，为一组值建立名称引用。如果不为名称指定值，从0开始依次默认赋值。可以手动指定值。

```typescript
enum Color { Red, Green, Blue }
let c: Color = Color.Green // => 1

enum Color2 { Red = 1, Green, Blue }
let c2: Color2 = Color2.Green // => 2

enum Color3 { Red = 1, Green = 2, Blue = 4 }
let c3: Color3 = Color3.Green // => 2
```

枚举类型可以根据枚举的值得到名字

```typescript
enum Color4 { Red = 1, Green, Blue }
let colorName: string = Color4[2] // => 'Green'
```

[回到顶部](#typescript_docs)

#### 数字枚举
```typescript
// up默认初始为0
// 其余的成员会从1开始自动增长s
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

// == Up使用初始化为1。
// 其余的成员会从1开始自动增长
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
```

[回到顶部](#typescript_docs)

#### 字符串枚举
在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化

```typescript
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

[回到顶部](#typescript_docs)

#### 异构枚举
可以混合字符串和数字成员，但是似乎你并不会这么做，也不建议这样做

```typescript
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```

[回到顶部](#typescript_docs)

#### 常量枚举表达式
枚举成员使用常量枚举表达式初始化


```typescript
enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}
```

[回到顶部](#typescript_docs)

#### 运行时的枚举

```typescript
enum E {
    X, Y, Z
}

function f(obj: { X: number }) {
    return obj.X
}

// 没问题，因为 'E'包含一个数值型属性'X'。
f(E)
```

[回到顶部](#typescript_docs)


#### 常量枚举
const枚举，常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除

[回到顶部](#typescript_docs)


#### unknown
变量类型不确定，使用unkonwn。unknown类型在检测之前不可以进行一些该类型的操作

```typescript
// 类型不确定
let notSure: unknown = 4
notSure = "maybe a string instead"
// OK, definitely a boolean
notSure = false

// === 类型不检测之前不能进行一些该类型的操作
let notSure: unknown = 4
// Operator '+' cannot be applied to types 'unknown' and '3'
let num = notSure + 3

// === 进行检测
let notSure: unknown = 4
if (typeof notSure === 'number') {
    let num: number = notSure + 3
}
```

[回到顶部](#typescript_docs)

#### any
类似javascript，不进行类型检测，可以赋值给任意类型变量

```typescript
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false // okay, definitely a boolean
```

[回到顶部](#typescript_docs)

##### noImplicitAny
不指定类型，默认为any，避免这个告诉编译器`noImplicitAny`

[回到顶部](#typescript_docs)

#### void
当一个函数没有返回值时，你通常会见到其返回值类型是void。声明一个void类型的变量没有什么大用，因为你只能为它赋予null（只在`--strictNullChecks`未指定时）和undefined

```typescript
function warnUser(): void {
    console.log("This is my warning message")
}

let unusable: void = undefined
unusable = null
```

[回到顶部](#typescript_docs)


#### never
never类型表示的是那些永不存在的值的类型，可以赋值给任何类型，除了never本身，没有子类型可以赋值给never类型。

例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型


```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

[回到顶部](#typescript_docs)

## 联合类型
将两个或以上类型联合起来。使用联合类型注意的是，如果要使用类型内置的原型方法，如果不是共有的方法，需要使用if语句判断他们的类型控制分流

```typescript
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

// === if分流
function printId(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
```

[回到顶部](#typescript_docs)

## 类型别名
类型别名通常与接口和接口解决，接口是更有可扩展性的一个，更多的可能是使用接口规范对象类型。通常都是用接口先，除非必要使用type别名

```typescript
type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

[回到顶部](#typescript_docs)

#### 类型别名与联合类型
类型别名同样可以作用在联合类型


字面量类型可以通过联合联系、类型守卫、类型别名来结合实际字符串值。通过这些特性，可以获取一种字符串并使其有类似枚举（enum）的行为（一个字面量是一个集体类型中更为具体的一种子类型。

```typescript
type ID = number | string

// === 
type num = 1 | 3 | 5
type str = 'hi' | 'hello'
type bool = true | false

let n: num = 3
let n2: num = 2 // error

let s: str = 'hi'
let s2: str = 'h' // error

let b: bool = true
let b2: bool = 1 // errors

// === 其他如接口，函数，类中定义也同样可以定义
// 举例接口
interface Person {
    name: 'liu' | 'yaohui',
    age: 24 | 25,
    gender: 'liuyaohui'
}

let n: Person = {
    name: 'liu',
    age: 25,
    gender: 'liuyaohui'
}
```

[回到顶部](#typescript_docs)

## 函数
函数需要指定形参参数列表和返回值的类型。参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确

函数可以推断类型，仅在等式的一侧带有类型即可进行类型推断

```typescript
function add(x: number, y: number): number {
    return x + y
}

let myAdd = function (x: number, y: number): number {
    return x + y
}

// === 类型推断
let myAdd: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number { return x + y }

// ===== myAdd has the full function type
let myAdd = function (x: number, y: number): number { return x + y }

// The parameters `x` and `y` have the type number
let myAdd: (baseValue: number, increment: number) => number =
    function (x, y) { return x + y }
```

[回到顶部](#typescript_docs)

### 函数参数传递一致
TypeScript里的每个函数参数都是必须的，传递给一个函数的参数个数必须与函数期望的参数个数一致。

```typescript
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName
}
// error, too few parameters
let result1 = buildName("Bob")
// error, too many parameters
let result2 = buildName("Bob", "Adams", "Sr.")
let result3 = buildName("Bob", "Adams")
```

[回到顶部](#typescript_docs)


### 函数默认形参和可选参数
TypeScript在参数名旁使用?实现可选参数的功能，可选参数必须跟在必须参数后面。也可以为参数提供一个默认值，没有传递这个参数或传递的值是undefined时，使用这个默认值。

所有必须参数后面的带默认初始化的参数都是可选的。可选参数与末尾的默认参数共享参数类型，函数类型中，默认参数的默认值不会显示，而只会显示它是一个可选参数


与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面

```typescript
// == 可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName
    else
        return firstName
}

// works correctly now
let result1 = buildName("Bob")
// error, too many parameters
let result2 = buildName("Bob", "Adams", "Sr.")
// ah, just right
let result3 = buildName("Bob", "Adams")

// === 默认参数
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName
}

// works correctly now, returns "Bob Smith"
let result1 = buildName("Bob")
// still works, also returns "Bob Smith"
let result2 = buildName("Bob", undefined)
// error, too many parameters
let result3 = buildName("Bob", "Adams", "Sr.")
// ah, just right
let result4 = buildName("Bob", "Adams")      
```

[回到顶部](#typescript_docs)



### 剩余形参


```typescript
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ")
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie")   
```

[回到顶部](#typescript_docs)


### this指向
如果给编译器设置了--noImplicitThis标记，没有指定this，会报错。

比较不好的是，this来自对象字面量里的函数表达式。 修改的方法是，提供一个显式的this参数。 this参数是个假的参数，它出现在参数列表的最前面

```typescript
function f(this: void) {
    // make sure `this` is unusable in this standalone function
}

// ====== 
interface Card {
    suit: string
    card: number
}
interface Deck {
    suits: string[]
    cards: number[]
    createCardPicker(this: Deck): () => Card
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
        }
    }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

alert("card: " + pickedCard.card + " of " + pickedCard.suit)
```

[回到顶部](#typescript_docs)

### 函数重载
方法是为同一个函数提供多个函数类型定义来进行函数重载。 编译器会根据这个列表去处理函数的调用



```typescript
function sayHello(name: string): string
function sayHello(first_name: string, last_name: string): string
function sayHello(first_name: string, last_name?: string) {
    if (last_name === undefined) {
        return `hello ${first_name}`
    } else {
        return `hello ${first_name} ${last_name}`
    }
}
// "hello liuyaohui"
let a: string = sayHello('liuyaohui')
// "hello liu yaohui"
let b: string = sayHello('liu', 'yaohui')
```

[回到顶部](#typescript_docs)

## 类



```typescript
class Greeter {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        return "Hello, " + this.greeting
    }
}

let greeter = new Greeter("world")
```

[回到顶部](#typescript_docs)

### 类继承
与javascript一样，子类包含了构造方法，必须调用super()

```typescript
class Animal {
    name: string
    constructor(theName: string) { this.name = theName }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name) }
    move(distanceInMeters = 5) {
        console.log("Slithering...")
        super.move(distanceInMeters)
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name) }
    move(distanceInMeters = 45) {
        console.log("Galloping...")
        super.move(distanceInMeters)
    }
}

let sam = new Snake("Sammy the Python")
let tom: Animal = new Horse("Tommy the Palomino")

sam.move()
tom.move(34)
```

[回到顶部](#typescript_docs)

### readonly属性
使用readonly关键字将属性设置为只读的

```typescript
class Octopus {
    readonly name: string
    readonly numberOfLegs: number = 8
    constructor(theName: string) {
        this.name = theName
    }
}
let dad = new Octopus("Man with the 8 strong legs")
dad.name = "Man with the 3-piece suit" // 错误! name 是只读的.
```


[回到顶部](#typescript_docs)
### 类的公有私有受保护属性
TypeScript里，成员（属性和方法）都默认为public，TypeScript里，成员都默认为public

当成员被标记成private时，它就不能在声明它的类的外部访问

protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承

```typescript
// public 可以省略，默认成员都是public
class Animal {
    public name: string
    public constructor(theName: string) { this.name = theName }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

// private成员不被类外访问
class Animal {
    private name: string
    constructor(theName: string) { this.name = theName }
}

new Animal("Cat").name // 错误: 'name' 是私有的.

// === protected
class Person {
    protected name: string
    constructor(name: string) { this.name = name }
}

class Employee extends Person {
    private department: string

    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`
    }
}

let howard = new Employee("Howard", "Sales")
console.log(howard.getElevatorPitch())
console.log(howard.name) // 错误
```

[回到顶部](#typescript_docs)


#### 参数属性
参数属性通过给构造函数参数添加一个访问限定符来声明。使用private限定一个参数属性会声明并初始化一个私有成员；对于public和protected来说也是一样

```typescript
class Animal {
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}
```

[回到顶部](#typescript_docs)

### 类的getter和setter
与javascript的getter，setter类似，但是只带有get不带有set的存取器自动被推断为readonly

[回到顶部](#typescript_docs)

### 类的静态属性
类的静态成员，这些属性存在于类本身上面而不是类的实例上，一般用来定义所有类实例都要用到的属性

[回到顶部](#typescript_docs)

### 抽象类
抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。不同于接口，抽象类可以包含成员的实现细节（抽象类中除抽象函数之外，其他函数可以包含具体实现）

abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法

```typescript
abstract class Animal {
    abstract makeSound(): void
    move(): void {
        console.log("roaming the earth...")
    }
}
```

抽象类中的抽象方法不包含具体实现并且必须在派生类中实现，抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含abstract关键字并且可以包含访问修饰符

```typescript
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name)
    }

    abstract printMeeting(): void // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.')
    }

    generateReports(): void {
        console.log('Generating accounting reports...')
    }
}

let department: Department // 允许创建一个对抽象类型的引用
department = new Department() // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()
department.generateReports() // 错误: 方法在声明的抽象类中不存在
```

[回到顶部](#typescript_docs)


## 接口
接口在面向对象编程中定义了协议，不包括具体实现，具体实现由实现了接口的结构完成

接口可以为对象，类，函数等解构定义协议。注意类和函数在javascript中都是对象，很多时候可以像类一样处理类和函数


### 接口规范对象属性
```typescript
interface Person {
    name: string,
    age: number
}

let obj: Person = {
    name: 'liuyaohui',
    age: 12
}
```

[回到顶部](#typescript_docs)


#### 接口规范对象可选属性
接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在/。带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号

```typescript
interface Person {
    name: string,
    age: number,
    gender?: string
}

let obj: Person = {
    name: 'liuyaohui',
    age: 12
}
```

[回到顶部](#typescript_docs)

#### 接口规范只读属性
一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用readonly来指定只读属性

readonly和const的区别：不变性的应用对象不一样，做为变量使用的话用const，若做为属性则使用readonly

```typescript
interface Point {
    readonly x: number
    readonly y: number
}
let p1: Point = { x: 10, y: 20 }
// Cannot assign to 'x' 
// because it is a read-only property
p1.x = 5 // error!
```

[回到顶部](#typescript_docs)


#### 接口规范对象的额外属性
有时候传入对象和接口描述的属性不匹配，因为无法确定对象是否具有某些做为特殊用途使用的额外属性。

解决办法是，可以给字符串添加一个字符串索引签名

```typescript
// SquareConfig可以有任意数量的属性
// 并且只要它们不是color和width
// 那么就无所谓它们的类型是什么
interface SquareConfig {
    color?: string
    width?: number
    [propName: string]: any
}
```

下面的如果对象有额外属性，可以强制转换为接口类型，不推荐但可以这样做

```typescript
interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): void {
    // ...
}

let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig)
```

还有一种跳过这些检查的方式，将这个对象赋值给一个另一个变量，只有这个对象和接口描述具有至少相同一个属性，

```typescript
interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): void {
    // ...
}

let squareOptions = { colour: "red", width: 100 }
let mySquare = createSquare(squareOptions)
```

[回到顶部](#typescript_docs)

#### 接口规范为对象的可索引属性
Typescript 支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。当使用number来索引时，JavaScript 会将它转换成string然后再去索引对象。 也就是说用100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致

```typescript
interface StringArray {
    // 通过数字取引用
    // 属性是字符串
    [index: number]: string
}

let myArray: StringArray
myArray = ["Bob", "Fred"]

let myStr: string = myArray[0]

// === 数字索引的返回值必须是字符串索引返回值类型的子类型
interface NumberDictionary {
    [index: string]: number
    length: number // 可以，length是number类型
    // error
    // property 'name' of type 'string' is not assignable 
    // to 'string' index type 'number'
    // 错误，`name`的类型与索引类型返回值的类型不匹配
    name: string
}

// ===
interface StringArray {
    [index: string]: string
    length: string
    // Property 'name' of type 'number' 
    // is not assignable to 'string' index type 'string'
    name: number
}


// === 联合类型修改
interface NumberOrStringDictionary {
   [index: string]: number | string
   length: number    // ok, length is a number
   name: string      // ok, name is a string
}
```

[回到顶部](#typescript_docs)

### 接口规范函数
接口可以用来规范规范函数。对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。类型还会自动推断类型，实现了接口之后，可以不指定类型


```typescript
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
    let result = source.search(subString)
    return result > -1
}

// 函数的参数名不需要与接口里定义的名字相匹配
let mySearch: SearchFunc
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub)
    return result > -1
}

// 省略类型，参数名要求可以不一样
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (src, sub) {
    let result = src.search(sub)
    return result > -1
}
```

[回到顶部](#typescript_docs)

### 接口规范类
类通过implement关键字实现接口。一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor 存在于类的静态部分，所以不在检查的范围内。

```typescript
interface ClockInterface {
    currentTime: Date
    setTime(d: Date): void
}

class Clock implements ClockInterface {
    currentTime: Date = new Date()
    setTime(d: Date) {
        this.currentTime = d
    }
    constructor(h: number, m: number) { }
}
```

[回到顶部](#typescript_docs)

### 接口继承
接口继承，能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里

```typescript
interface Shape {
    color: string
}

interface Square extends Shape {
    sideLength: number
}

let square: Square = {
    color: 'blue',
    sideLength: 12
}
```

[回到顶部](#typescript_docs)

#### 接口继承类
接口继承了一个类类型时，它会继承类的成员但不包括其实现， 接口同样会继承到类的 private 和 protected 成员



```typescript
// SelectableControl包含了Control的所有成员
// 包括私有成员state
// 因为state是私有成员
// 所以只能够是Control的子类们
// 才能实现SelectableControl接口
class Control {
    private state: any
}

interface SelectableControl extends Control {
    select(): void
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

class ImageControl implements SelectableControl {
    // Error: Class 'ImageControl' incorrectly 
        // implements interface 'SelectableControl'.
    //  Types have separate declarations 
        // of a private property 'state'.
    private state: any
    select() { }
}
```

[回到顶部](#typescript_docs)


## 泛型
泛型可用于支持未来可扩展的数据类型，如用户定义的数据

定义了泛型后，两种使用方法：
* 一种是传入泛型类型参数
* 一种是更普遍的，类型推导。更简洁，如果不能推导，则明确传入泛型参数

要使用泛型，在标识符后面加入`<T>`，后面根据这个T泛型进行操作，不一定是命名为T，还可以是其他，保持一致即可

```typescript
function identity<T>(arg: T): T {
    return arg
}

let myIdentity: { <T>(arg: T): T } = identity
// 下面这种表达也可以
let myIdentity: <T>(arg: T) => T = identity

// 或者使用泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T
}

function identity<T>(arg: T): T {
    return arg
}

let myIdentity: GenericIdentityFn = identity


// ===== 传入泛型类型参数
function identity<T>(arg: T): T {
    return arg
}
let output = identity<string>("myString")  // type of output will be 'string'

// 类型推导
let output = identity("myString")  // type of output will be 'string'
```

[回到顶部](#typescript_docs)

### 泛型变量

```typescript
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length)  // Error: T doesn't have .length
    return arg
}

// 
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length)  // Array has a .length, so no more error
    return arg
}

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length)  // Array has a .length, so no more error
    return arg
}


```

[回到顶部](#typescript_docs)


### 泛型类

```typescript
class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) { return x + y }
```

[回到顶部](#typescript_docs)

### 泛型约束
* 通过接口约束泛型
* 通过泛型约束泛型

[回到顶部](#typescript_docs)

### 通过接口约束泛型
定义一个接口来描述约束条件

```typescript
interface Lengthwise {
    length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    // Now we know it has a .length property, so no more error
    console.log(arg.length)
    return arg
}

loggingIdentity(3)  // Error, number doesn't have a .length property

loggingIdentity({ length: 10, value: 3 })
```

[回到顶部](#typescript_docs)

### 通过泛型约束泛型
可以声明一个类型参数，且它被另一个类型参数所约束

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }

getProperty(x, "a") // okay
// error: Argument of type 'm' isn't 
// assignable to 'a' | 'b' | 'c' | 'd'
getProperty(x, "m") 

```

[回到顶部](#typescript_docs)

## 类型断言
类型断言类似于强制类型转换，有两种形式：
* “尖括号”语法
* as语法。TypeScript里使用JSX时，只有as语法断言是被允许的

```typescript
let someValue: any = "this is a string"

let strLength: number = (someValue as string).length
```

[回到顶部](#typescript_docs)
