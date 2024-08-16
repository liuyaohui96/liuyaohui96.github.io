
# regular_expression_docs
1. [匹配单个字符](#匹配单个字符)
2. [定位描述](#定位描述)
3. [若干字符](#若干字符)
4. [或](#或)
5. [捕获和分组](#捕获和分组)
6. [先行断言 & 后行断言](#先行断言--后行断言)
7. [转义](#转义)

## 匹配单个字符
```js
/a/  // 单个字符，a-z A-z 数字或这其他转义字符

/[aeiou]/ // 匹配aeiou中的一个

/[^aeiou]/ // 匹配非aeiou中的一个，^取反

/[a-z]/ // 范围匹配其中一个

/[a-zA-Z]/

/[^a-zA-Z]/

/./     // 匹配单个字符除了\r \n, 相当于[^\n\r]

/\s/   // 匹配所有空白字符，包括

/\S/   // 匹配所有非空格字符

/\w/   // 匹配字母，数字，下划线，相当于[a-zA-Z0-9]

/\w/  // 相当于 [^a-zA-Z0-9_]

/\d/  // 匹配数字，相当于[0-9]

/\D/  // 匹配非数，相当于[^0-9]

```

[回到顶部](#regular_expression_docs)

## 定位描述
```js
/^abc/   // 匹配abc开始

/abc$/   // 匹配abc结束

/a\b/ // 匹配在边缘（boundary）的a

/a\B/ // 匹配不再边缘（boudary）的a
```

[回到顶部](#regular_expression_docs)

## 若干字符
```js
/a?/   // 匹配一个a或者没有a, 相当于/a{0,1}/

/a*/   // 匹配0到多个a 相当于/a{0,}

/a+/   // 匹配1到多个a 相当于/a{1,}/

/a{3}/ // 匹配3个a

/a{3,}/ // 匹配至少三个a
```

`* + {}` 属于贪婪匹配，尽可能的蔓延匹配
```js
/a.*a/  // a和
// === 例子
字符串: <p>hello</p>

/<.+>/     // 结果为 <p>hello</p>
/<.+>?/   // 结果为<p>
/<[^<>]+>/g  // 结果为  <p> </p>
```

懒匹配 `*?` : 尽可能少的匹配前面的字符
```js
a*? // Matches as few characters as possible.

// === 例子
字符串：r re regex
/r\w*?/g  // 返回 r r r

```

[回到顶部](#regular_expression_docs)


## 或
```js
/cats|dogs/  //匹配cats或dogs
```


[回到顶部](#regular_expression_docs)

## 捕获和分组
```js
()  // 捕获分组

(?:) // 不捕获分组

// === 例子
liuyaohui is a goodboy

/(liu)|(?:goodboy)/g 
// match1: liu
// match2: goodboy
// group1: liu
```

捕获后的分组
```js
([liu])([yao]])\2\1
```

[回到顶部](#regular_expression_docs)


## 先行断言 & 后行断言
```js
/a(?=b)/ // 匹配后面紧跟b的a，但不匹配b

// 正向否定查找
a(?!b) // 匹配后面不紧跟b的a，但不匹配b

// 中间多一个<
(?<=a)b // 匹配前面有a的b，但不匹配a

// 反向否定查找
(?<!a)b  // 匹配前面没有a的b，但不匹配a
```

[回到顶部](#regular_expression_docs)

## 转义
* 匹配 `^ $ * + ? { | [ . () \` 这些字符需要使用 `\` 作为前缀
* \r  => 匹配回车
* \n => 匹配换行
* \t => tab

[回到顶部](#regular_expression_docs)



