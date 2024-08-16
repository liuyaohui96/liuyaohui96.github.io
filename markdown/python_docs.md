
# python_docs
1. [python_intro](#python_intro)
    1. [python简介](#python简介)
    2. [编码](#编码)
    3. [逻辑行，物理行和空行](#逻辑行物理行和空行)
    4. [注释](#注释)
    5. [hello_world](#hello_world)
2. [python代码建议](#python代码建议)
3. [变量](#变量)
4. [运算符，表达式和语句](#运算符表达式和语句)
5. [内置数据类型](#内置数据类型)
    1. [number](#number)
        1. [int类型方法](#int类型方法)
        2. [float类型方法](#float类型方法)
        3. [conplex类型方法](#conplex类型方法)
    2. [string文本序列](#string文本序列)
        1. [字符串连接](#字符串连接)
        2. [字符串通过index访问及其切片](#字符串通过index访问及其切片)
        3. [len()返回字符串长度](#len返回字符串长度)
        4. [字符串方法](#字符串方法)
    3. [基本序列类型](#基本序列类型)
        1. [range](#range)
        2. [list](#list)
            1. [list元素访问设置及其切片](#list元素访问设置及其切片)
            2. [list遍历](#list遍历)
            3. [使用in运算符判断子列表存在](#使用in运算符判断子列表存在)
            4. [列表合并](#列表合并)
            5. [list内置方法](#list内置方法)
        3. [tuple](#tuple)
    4. [集合类型](#集合类型)
        1. [set](#set)
            1. [set内置方法](#set内置方法)
        2. [frozenset](#frozenset)
    5. [映射类型](#映射类型)
        1. [dict](#dict)
            1. [dict中键的访问设置](#dict中键的访问设置)
            2. [dict遍历](#dict遍历)
            3. [dict方法](#dict方法)
6. [函数](#函数)
    1. [函数创建](#函数创建)
    2. [函数参数](#函数参数)
7. [类](#类)
    1. [类实例成员的访问和设置](#类实例成员的访问和设置)
    2. [类继承](#类继承)
    3. [辅助类](#辅助类)
8. [模块](#模块)
        1. [导入整个模块](#导入整个模块)
        2. [导入模块中特定的标识符](#导入模块中特定的标识符)
        3. [导入模块中的所有函数](#导入模块中的所有函数)
9. [简单输入输出](#简单输入输出)
    1. [input()](#input)
    2. [print()&prinf()](#printprinf)
        1. [printf 风格的字符串格式化](#printf-风格的字符串格式化)
10. [文件](#文件)
    1. [open函数读写文件](#open函数读写文件)
11. [异常](#异常)
    1. [try-except异常处理](#try-except异常处理)
12. [python标准库](#python标准库)
    1. [type](#type)
    2. [内置函数](#内置函数)
    3. [数字和数字模块](#数字和数字模块)
        1. [Random](#random)
13. [代码测试](#代码测试)


## python_intro
* python简介
* 编码
* 逻辑行，物理行和空行
* 注释
* hello_world
* python代码建议

[回到顶部](#python_docs)

### python简介
python 是解释型语言，不需要编译和链接

[回到顶部](#python_docs)

### 编码
没有编码声明时，默认编码为 UTF-8

[回到顶部](#python_docs)


### 逻辑行，物理行和空行
Python 程序可以拆分为多个 逻辑行

物理行是一序列字符，由行尾序列终止。NEWLINE 形符表示结束逻辑行。逻辑行也可以由一个或多个物理行拼接组成：
* 显式拼接：因为不在字符串或注释内的反斜杠结尾时（以反斜杠结尾的行，不能加注释；反斜杠也不能拼接注释），物理行将与下一行拼接成一个逻辑行，并删除反斜杠及其后的换行符
* 隐式拼接：圆括号、方括号、花括号内的表达式可以分成多个物理行，不必使用反斜杠


空行：只包含空格符、制表符、换页符、注释的逻辑行会被忽略（即不生成 NEWLINE 形符）

```python
# 显式拼接物理行为一个逻辑行
if 1900 < year < 2100 and 1 <= month <= 12 \
   and 1 <= day <= 31 and 0 <= hour < 24 \
   and 0 <= minute < 60 and 0 <= second < 60:   # Looks like a valid date
        return 1

# 隐式拼接物理行为逻辑行
month_names = ['Januari', 'Februari', 'Maart',      # These are the
               'April',   'Mei',      'Juni',       # Dutch names
               'Juli',    'Augustus', 'September',  # for the months
               'Oktober', 'November', 'December']   # of the year
```

### 注释
在Python中，注释用井号（`# `）标识
```python
# 注释
```

[回到顶部](#python_docs)
### hello_world
```python
print("hello python world")
```

[回到顶部](#python_docs)

## python代码建议
* beautiful（漂亮）
* explict（明确，易于理解），easy to explain the implementation（易于解释实现）
* simple（简单）> complexy（复杂）> complicated （难懂）
* flat（扁平） > nested（嵌套）
* sparse（稀疏）> dense（稠密）
* readability counts（可读性计数）
* special case（特例）不能破坏规则
* error should never silenty（错误不能静默）
* perferably only one obvious way（最好一个显然的解决办法）
* 语句太长，可以放到临时变量
* 函数命名使用小写字母和下划线，函数定义之后写文档字符串` """ 文档字符串""" `（用于生成有关程序中函数的文档）简要地阐述其功能
* 类采用驼峰命名法，类名中的每个单词的首字母都大写，而不使用下划线，类定义后面包含一个文档字符串，简要地描述类的功能。类中，可使用一个空行来分隔方法；不同的类之间两个空行
* 每个模块也都应包含一个文档字符串，对其中的类可用于做什么进行描述。先导入标准库中的模块，在一个空行，导入自定义模块。
* PEP 8建议每级缩进都使用四个空格。这既可提高可读性，又留下了足够的多级缩进空间。混合使用制表符和空格会让Python解释器感到迷惑，可将你输入的制表符转换为指定数量的空格

[回到顶部](#python_docs)



## 变量
1. 变量：与其他编程语言一样，变量常被描述为可用于存储值的盒子。一种好得多的定义是，变量是可以赋给
值的标识符，也可以说变量指向特定的值
2. python变量命名规则：
    * 小写字母，$开头等
    * 使用`_`分隔单词
    * 常量通常全大写
    * 类名首字母大写（采用CamelCase命名方法）
    * 全局常量使用 UPPER_CASE_WITH_UNDERSCORES 格式
    * 避免与内置函数或标准库的常用类型同名，因为这样易导致误解
3. python关键字
> 访问未定义的标识符，报错NameError:  `name xxx is not defined`

[回到顶部](#python_docs)


## 运算符，表达式和语句
1. 运算符，表达式和类c语言，如javascript这些相差不大，主要区别是
    * 检查多个条件 `and or`作为逻辑判断运算符，而不是`&& ||`
2. 条件语句：if 语句是条件控制流，根据条件表达式（condition expressoin）的true或false值决定执行哪个程序块（或语句块）。格式`if if_expression:`（注意冒号），`if-else`条件语句和`if-elif-else`。`if-elif `结构后面必须有else 代码块。在有些情况下，else 代码块很有用；而在其他一些情况下，使用一条elif 语句来处理特定的情形更清晰。else 是一条包罗万象的语句，只要不满足任何if 或elif 中的条件测试，其中的代码就会执行。这可能引入无效甚至恶意的数据。如果知道最终要测试的条件，应考虑使用一个elif 代码块来代替else 代码块。if语句中的条件表达式：
    * 相等性：`== !=`，检查是否相等时区分大小写
    * 比较：`> >= < <=`
    * 检查多个条件 `and or`
    * 检查特定值是否包含在列表中 使用关键字in `item_value/item_varable in list`
    * 检查特定值是否不包含在列表中 使用关键字 not in `item_value/item_varable  not in list`
3. 循环语句：
    * while语句,while 循环，直到不满足条件表达式，才结束循环。复杂的while循环中可以使用flag作为结束的标识符，使用flag（改变他的值true为false）来结束while循环，更具有扩展性
    * for语句：使用while循环处理列表和字典：for 循环是一种遍历列表的有效方式，但不应在for 循环中修改列表，否则将导致Python难以跟踪其中的元素。要在遍历列表的同时对其进行修改，可使用while 循环
4. pass语句：pass语句不执行任何操作。语法上需要一个语句，但程序不实际执行任何动作时，可以使用该语句，通常用作占位符，在代码不清晰如何写的情况下，让语法不报错
5. 其他语句大致和类c语言，如javascript这些相差不大


> PEP 8提供的唯一建议是，在诸如== 、>= 和<= 等比较运算符两边各添加一个空格。空格不会影响Python对代码的解读，而只是让代码阅读起来更容易



```python
# === if statement
score = 70

if score < 60:
    print('bad')
elif score < 80:
    print('not good')  # => not good
else:
    print('good')
# === end if statement

# === while statement
current_value = 1
while current_value <= 5:
    print(current_value)
    current_value += 1
# === end while statement
```

[回到顶部](#python_docs)



## 内置数据类型


[回到顶部](#python_docs)

### number
1. number类型，存在三种不同的number类型: 
    * 整数, 此外，布尔值属于整数的子类型，true为1，false为0
    * 浮点数
    * 复数
    * 除了 int 和 float，还支持其他数字类型，例如 Decimal 或 Fraction
2. 创建number的方式：
    * number字面量：整数、浮点数、虚数字面量。没有复数字面值（复数由实数加虚数构成）
        * 不带修饰的整数字面值（包括十六进制、八进制和二进制数）会生成整数
        * 包含小数点或幂运算符的数字字面值会生成浮点数
        * 在数字字面值末尾加上 'j' 或 'J' 会生成虚数（实部为零的复数）
        * 整数或浮点数，与虚数相加为复数
    * 内置类型：int() | float() | complex() 构造特定类型的number
3. number运算中的运算符：大致和类c语言，如javascript这些相差不大，区别有
    *  `//` （floor division）,向下取整除法
4. number运算过程注意
    * 除法运算返回float浮点数（即便这两个数都是整数且能整除)
    * 混合类型运算数的运算会把整数转换为浮点数
    * 书写很大的数时，可使用下划线将其中的数字分组，使其更清晰易读，如`14_000_000_000`

```python
11 / 4 # => 2.75，除法返回浮点数
11 // 4 # => 2，向下取整
(-11) // 4 # => -3，向下取整

17 % 3 # => 2，取余
```

[回到顶部](#python_docs)

#### int类型方法
```python
# 如果构造方法没有参数，返回0
class int:
    @overload
    def __new__(cls: type[Self], __x: str | bytes 
      | SupportsInt | SupportsIndex | SupportsTrunc = ...) -> Self: ...
    @overload
    # 方法参数__x：指定要转换的值
    # 可选方法参数base：指定base，默认是10
    # base为0表示将string转换为整数字面量
    # 返回值：如果__x是number，调用__x.int__()返回
    # 对于浮点数截断0后的部分
    # 如果__x不是number
    # 那就是一个用 str | bytes | bytearray
    # 表示的整数字面量，将其根据base转换
    def __new__(cls: type[Self], __x: str 
      | bytes | bytearray, base: SupportsIndex) -> Self: ...
```

[回到顶部](#python_docs)

#### float类型方法
```python
class float:
    # 方法参数x：指定要转换的值
    # 返回值：将x转换为浮点数
    def __new__(cls: type[Self], x: SupportsFloat |
                SupportsIndex | str | bytes | bytearray = ...) -> Self: ...
```

[回到顶部](#python_docs)

#### conplex类型方法

[回到顶部](#python_docs)


### string文本序列
1. 字符串是由Unicode 码位构成的不可变序列
2. 创建字符串方式：
    * 单引号包围
    * 双引号包围
    * `'''三重单引号'''`, `"""三重双引号"""` 包围的字符串，用于多行字符串，行尾会自动加上回车换行，如果不需要回车换行，在行尾添加 \
    * str内置类型创建字符串`str(Sequence[str])`序列
3. 转义字符：对于非打印字符可以使用`\`进行转义，例如制表符`\t`和换行符`\n`
4. 原始字符串: 引号前添加 r，可以把输出原始字符串，如不转义`\`
5. 格式字符串：前缀为 'f' 或 'F' 的字符串称为 格式字符串，其他字符串字面值只是常量，格式字符串字面值则是可在运行时求值的表达式，可包含替换字段，即以 {} 标注的表达式


```python
'spam eggs' # single quotes
"doesn't"  # ...or use double quotes instead

# === 跨行字符串
print("""\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
""")
# Usage: thingy [OPTIONS]
#      -h                        Display this usage message
#      -H hostname               Hostname to connect to


# ==== 原始字符串
'C:\some\name' # here \n means newline!
# => C:\some

r'C:\some\name' # note the r before the quote
# => C:\some\name


# === 格式字符串
name = "Fred"
f"He said his name is {name!r}."
# => "He said his name is 'Fred'."
```

[回到顶部](#python_docs)


#### 字符串连接
1. 字符串字面量连接：以空白符分隔的多个相邻字符串或字节串字面值，可用不同引号标注，自动连接在一起。因此，"hello" 'world' 等价于 "helloworld"
2. 运算符连接字符串：有变量字符串参与字符串连接，字符串可以用 `+` 运算符合并（粘到一起）。还可以使用 `*`运算符重复字符串


字符串连接用例：
```python
# 字符串字面量连接
# 拆分长字符串时，这个功能特别实用
text = ('Put several strings within parentheses '
        'to have them joined together.')

# 运算符连接字符串
# 用 * 重复可以重复字符串
3 * 'un' + 'ium' # => 'unununium'
# 也可以连接变量字符串
prefix = 'py'
prefix + 'thon'  # =》 python
```


[回到顶部](#python_docs)



#### 字符串通过index访问及其切片
1. 字符串支持索引（index，下标访问），第一个字符的索引是 0，还支持负数，用负数索引时，从右边开始计数。索引越界会报错 `IndexError: string index out of range`
2. 注意，字符串不能修改，是immutable的。因此，为字符串中某个索引位置赋值会报错`TypeError: 'str' object does not support item assignment`。要生成不同的字符串，应新建一个字符串
3. 字符串切片：索引可以提取单个字符，切片 则提取子字符串。切片索引的默认值很有用；省略开始索引时，默认值为 0，省略结束索引时，默认为到字符串的结尾。截取的区间包含切片开始，但不包含切片结束，`str[:i] + str[i:]` 总是等于str。虽然索引越界会报错，但是切片会自动处理越界索引，所以不会报错

| P   | y   | t   | h   | o   | n   | 字符串长度 |
| --- | --- | --- | --- | --- | --- | ---------- |
| 0   | 1   | 2   | 3   | 4   | 5   | 6          |
| -6  | -5  | -4  | -3  | -2  | -1  | 6          |


```python
# === 通过index访问字符串
word = 'Python'
word[0] # => 'P'
word[-1] # => 'n'

# 修改字符串
word[0] = 'J' # => TypeError

# 不支持修改，新建新字符串
'J' + word[1:] # => 'Jython'
# === end 通过index访问字符串


# === 字符串切片
word = 'Python'
word[0:2]  # characters from position 0 (included) to 2 (excluded)
# => 'Py'

word[:2]   # character from the beginning to position 2 (excluded)
# => 'Py'

word[4:]   # characters from position 4 (included) to the end
# =》 'on'

# 切片自动处理越界
word[4:42] # => 'on'
word[42:] # => ''
# === end 字符串切片
```

[回到顶部](#python_docs)



#### len()返回字符串长度
内置函数len()返回字符串长度，`str.__len__()` 返回字符串长度，其实是返回len(str)的值，所以直接使用len()

```python
s = 'supercalifragilisticexpialidocious'
len(s) # => 34
```

[回到顶部](#python_docs)


#### 字符串方法
```python
class str(Sequence[str]):
    # === 构造方法
    @overload
    def __new__(cls: type[Self], object: object = ...) -> Self: ...
    def __new__(cls: type[Self], object: bytes,
                encoding: str = ..., errors: str = ...) -> Self: ...
    # === end 构造方法

    # === 字符串类型判断
    # 判断字符串所有字符都是字母或数字
    def isalnum(self) -> bool: ...
    # 判断字符串所有字符都是字母
    def isalpha(self) -> bool: ...
    # 判断字符串所有字符都是数字
    def isdigit(self) -> bool: ...
    def isnumeric(self) -> bool: ...
    # 判断字符串所有字符都是十进制字符
    def isdecimal(self) -> bool: ...

    # 判断字符串所有字符都是标识符
    def isidentifier(self) -> bool: ...
    # 判断字符串所有字符都是可打印字符
    # 字符串为空也返回true
    def isprintable(self) -> bool: ...
    # 判断字符串所有字符都是ascii字符
    def isascii(self) -> bool: ...
    # 判断空白字符串至少有一个
    def isspace(self) -> bool: ...
    # === end 字符串类型判断

    # === 字符串大小写方法
    # 首字母转换为大写
    def capitalize(self) -> str: ...
    # 转换大写
    def upper(self) -> str: ...
    # 转换小写
    def lower(self) -> str: ...
    # 首字母大写
    def title(self) -> str: ...
    # 大小写转换
    def swapcase(self) -> str: ...
    # 消除大小写
    def casefold(self) -> str: ...

    # 判断方法
    def islower(self) -> bool: ...
    def istitle(self) -> bool: ...
    def isupper(self) -> bool: ...
    # === end 字符串大小写方法

    # === 字符串查找方法
    # 第一个方法参数__sub: 要查找的str
    # 第二个方法参数__start: 开始位置
    # 第三个方法参数__end：结束位置，不包括
    # 返回值：返回字符串中查找到__sub的位置
    def find(self, __sub: str, __start: SupportsIndex | None = ...,
             __end: SupportsIndex | None = ...) -> int: ...

    def index(self, __sub: str, __start: SupportsIndex | None = ...,
              __end: SupportsIndex | None = ...) -> int: ...

    def rfind(self, __sub: str, __start: SupportsIndex | None = ...,
              __end: SupportsIndex | None = ...) -> int: ...

    def rindex(self, __sub: str, __start: SupportsIndex | None = ...,
               __end: SupportsIndex | None = ...) -> int: ...

    # 第一个参数__prefix：指定prefix
    # 第二个方法参数__start: 开始位置
    # 第三个个方法参数__end：结束位置，不包括
    # 返回值：判断字符串是否以prefix结尾
    def startswith(self, __prefix: str | tuple[str, ...],
                   __start: SupportsIndex | None = ...,
                   __end: SupportsIndex | None = ...) -> bool: ...

    def endswith(self, __prefix: str | tuple[str, ...],
                 __start: SupportsIndex | None = ...,
                 __end: SupportsIndex | None = ...) -> bool: ...

    # 第一个参数x：指定字符串
    # 第二个参数__start：指定开始位置
    # 第三个参数__end：指定结束位置，不包括
    # 返回值：返回子字符串出现的次数
    def count(self, x: str, __start: SupportsIndex | None = ...,
              __end: SupportsIndex | None = ...) -> int: ...
    # === end 字符串查找方法

    # === 字符串移除方法
    # 第一个参数__chars：指定移除字符，chars 参数并非指定单个前缀或后缀；
    # 而是会移除参数值的所有组合
    # 返回值：返回移除__chars的前导和末尾字符的字符串
    def strip(self, __chars: str | None = ...) -> str: ...
    def lstrip(self, __chars: str | None = ...) -> str: ...
    def rstrip(self, __chars: str | None = ...) -> str: ...

    # 第一个参数__prefix：指定移除字符，而不是字符集合
    def removeprefix(self, __prefix: str) -> str: ...
    def removesuffix(self, __suffix: str) -> str: ...
    # === end 字符串移除方法

    # === 字符串填充方法
    # 第一个参数__width:指定填充后字符串长度
    # 如果 width 小于等于 len(str) 则返回原字符串的副本
    # 第二个参数__fillchar：指定填充的字符，默认是空格
    # 返回值：左右填充，使得字符串长度达到__width
    def center(self, __width: SupportsIndex, __fillchar: str = ...) -> str: ...
    # 字符串靠左对齐，填充空位
    def ljust(self, __width: SupportsIndex, __fillchar: str = ...) -> str: ...
    # 字符串靠右对齐，填充空位
    def rjust(self, __width: SupportsIndex, __fillchar: str = ...) -> str: ...
    # 在左边填充 ASCII '0' 数码使其长度变为 width长度的字符串
    def zfill(self, __width: SupportsIndex) -> str: ...
    # === end 字符串填充方法

    # === 字符串拆分方法
    # 第一个参数__sep：指定分隔符
    # 返回值：字符串分隔为三组，分别是
    # 分割前，分隔符，分隔后
    def partition(self, __sep: str) -> tuple[str, str, str]: ...
    def rpartition(self, __sep: str) -> tuple[str, str, str]: ...

    # 第一个参数__sep：指定分隔符
    # sep未指定或为None，连续的空格会被视为单个分隔符
    # 如果字符串包含前缀或后缀空格的话，其结果将不包含开头或末尾的空字符串
    # 第二个参数__maxsplit：最大分隔次数
    # maxsplit 未指定或为 -1，则不限制拆分次数（进行所有可能的拆分）
    # 对于连续出现的分割符，不会被组合在一起而是被视为分隔空字符串
    # '1,,2'.split(',') => ['1', '', '2']
    # 返回值：根据sep参数拆分字符串，
    # 进行maxsplit次拆分组成一个列表list返回，
    # list最多有maxsplit+1 个元素
    def split(self, sep: str | None = ...,
              maxsplit: SupportsIndex = ...) -> list[str]: ...

    def rsplit(self, sep: str | None = ...,
               maxsplit: SupportsIndex = ...) -> list[str]: ...
    # === end 字符串拆分方法

    # === 字符串替换
    # 第一个参数__old：指定要替换的字符串
    # 第二个参数__new：指定替换的字符串
    # 第三个参数__count：替换次数，不指定则全部替换
    # 返回值：查找所有old字符串，使用new字符串代替

    def replace(self, __old: str, __new: str,
                __count: SupportsIndex = ...) -> str: ...
    # 制表符会由一个或多个空格替换，默认是8个空格
    def expandtabs(self, tabsize: SupportsIndex = ...) -> str: ...
    # === end 字符串替换

    # === 其他
    def encode(self, encoding: str = ..., errors: str = ...) -> bytes: ...
    # 执行字符串格式化操作，每个替换域可以包含一个位置参数的数字索引
    def format(self, *args: object, **kwargs: object) -> str: ...
    def format_map(self, map: _FormatMapMapping) -> str: ...
    # 由iterable中的字符串拼接而成的字符串
    def join(self, __iterable: Iterable[str]) -> str: ...
    def splitlines(self, keepends: bool = ...) -> list[str]: ...

    def translate(self, __table: Mapping[int, int | str |
                  None] | Sequence[int | str | None]) -> str: ...

    # 返回字符串长度
    def __len__(self) -> int: ...
    def __add__(self, __s: str) -> str: ...
    # Incompatible with Sequence.__contains__
    def __contains__(self, __o: str) -> bool: ...  # type: ignore[override]
    def __eq__(self, __x: object) -> bool: ...
    def __ge__(self, __x: str) -> bool: ...
    def __getitem__(self, __i: SupportsIndex | slice) -> str: ...
    def __gt__(self, __x: str) -> bool: ...
    def __hash__(self) -> int: ...
    def __iter__(self) -> Iterator[str]: ...
    def __le__(self, __x: str) -> bool: ...
    def __lt__(self, __x: str) -> bool: ...
    def __mod__(self, __x: Any) -> str: ...
    def __mul__(self, __n: SupportsIndex) -> str: ...
    def __ne__(self, __x: object) -> bool: ...
    def __rmul__(self, __n: SupportsIndex) -> str: ...
    def __getnewargs__(self) -> tuple[str]: ...
```


字符串方法用例：

```python
'   spacious   '.strip()
# => 'spacious'
'www.example.com'.strip('cmowz.')
# => 'example'

# 移除单个指定子串
'TestHook'.removeprefix('Test')
#  => 'Hook'

'MiscTests'.removesuffix('Tests')
# => 'Misc'


'1,2,,3,'.split(',')
# => ['1', '2', '', '3', '']

# 制表符会由一个或多个空格替换，默认是8个空格
'01\t012'.expandtabs()
# => '01      012'

# 执行字符串格式化操作，每个替换域可以包含一个位置参数的数字索引
"The sum of 1 + 2 is {0}".format(1+2)
# => 'The sum of 1 + 2 is 3'
```

[回到顶部](#python_docs)




### 基本序列类型
* range
* list
* tuple

[回到顶部](#python_docs)

#### range
```python
# range 类型表示不可变的数字序列，通常用于在 for 循环中循环指定的次数
class range(Sequence[int]):
    @property
    def start(self) -> int: ...
    @property
    def stop(self) -> int: ...
    @property
    def step(self) -> int: ...
    # 只有一个参数__stop：指定stop的位置
    # 从0开始到stop（不包括stop）
    def __init__(self, __stop: SupportsIndex) -> None: ...
    # 第一个参数__start：指定start位置
    # 第二个参数__stop：指定stop位置（不包括stop）
    # 第三个可选参数：指定步长
    def __init__(self, __start: SupportsIndex, __stop: SupportsIndex,
                 __step: SupportsIndex = ...) -> None: ...

    def count(self, __value: int) -> int: ...
    def index(self, __value: int) -> int: ...  # type: ignore[override]
    def __len__(self) -> int: ...
    def __contains__(self, __o: object) -> bool: ...
    def __iter__(self) -> Iterator[int]: ...
    @overload
    def __getitem__(self, __i: SupportsIndex) -> int: ...
    @overload
    def __getitem__(self, __s: slice) -> range: ...
    def __reversed__(self) -> Iterator[int]: ...
```

range用例：

```python
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
list(range(10))

# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list(range(1, 11))

# [0, 3, 6, 9]
list(range(0, 10, 3))

# [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
list(range(10, -1, -1))
```


[回到顶部](#python_docs)

#### list
1. 列表 由一系列按特定顺序排列的元素组成，列表通常包含多个元素，一般给列表指定一个表示复数的名称（如letters 、digits 或names ）
2. 创建list的方式:
    * 列表字面量创建list：使用`[]`字面量创建list
    * list内置类型创建list：`list() 或 list(iterable)`内置类型构造一个列表，其中的项与 iterable 中的项具有相同的的值与顺序
    * list推导式子创建list：使用列表推导式: `[x for x in iterable]` 创建list。`[x in for x in range()]`的方式可以推导列表，这可以推广到所有的列表应用，不仅是创建列表，还可以嵌套使用
3. 返回列表长度
    *  `len(list)`
    * list的内置方法`list.__len__()`返回`len(self)`，所以直接使用len(list)方法即可

```python
# === 创建list
# 列表字面量创建list
number_list = [1, 2, 3]

# 列表推导式
squares = [x**2 for x in range(1, 11)]
# === end 创建list

```

[回到顶部](#python_docs)
 

##### list元素访问设置及其切片
1. list元素访问设置：使用`[]`配合下标（index）访问设置list，索引从0而不是1开始，index为负值，则索引顺序是相对于序列 s 的末尾: 索引号会被替换为 len(s) + i。 但要注意 -0 仍然为 0，所以都使用索引-1 访问最后一个list元素，仅当列表为空时，这种访问最后一个元素的方式才会导致错误
2. list切片：list配合`list_name[]` 和index可以访问设置元素。进一步的，配合`list_name[starIndex:endIndex]` 截取开始位置（starIndex指定）到结束位置（endIndex指定）的列表切片，注意：
    * 不包括结束位置的元素。`list_name[:endIndex]`没有指定第一个索引，Python将自动从列表开头开始
    * 要让切片终止于列表末尾，也可使用类似的语法，`list_name[starIndex:]`
    * 同时省略起始索引和终止索引`list_name[:]`复制列表（ 浅拷贝）
        * list.copy() 方法创建列表的浅拷贝，相当于`list[:]`
```python
# === list元素访问设置
bikes = ['trek', 'redline', 'giant']
first_bike = bikes[0] # get first item from list
last_bike = bikes[-1] # get last item from list
# === end list元素访问设置


# === list切片
finishers = ['sam', 'bob', 'ada', 'bea']
first_two = finishers[:2]

# copy
bikes = ['trek', 'redline', 'giant']
copy_of_bikes = bikes[:]
# === end list切片
```


[回到顶部](#python_docs)

##### list遍历
使用`for item in list:`（注意有冒号）遍历列表

```python
bikes = ['trek', 'redline', 'giant']
for bike in bikes:
    print(bike)

# === 
numbers = list(range(1, 21))
for number in numbers:
    print(number)
```

[回到顶部](#python_docs)


##### 使用in运算符判断子列表存在
与其他序列一样，子序列（子列表）可以配合in运算符判断子列表是否存在

```python
"gg" in "eggs" # => true
"a" not in "eggs" # => true
```

[回到顶部](#python_docs)

##### 列表合并
列表合并方法
1. 运算符合并：使用`+` 运算符不仅可以合并字符串，也可以合并列表（list），这一点和很多编程语言不一样，值得注意，使用`*`运算符可以实现n次自身拼接
2. list内置方法扩展：`list.extend(__iterable: Iterable[_T])` 扩展列表，不反回值


```python
s = [1, 2]
s.extend([3, 4])  # s => [1, 2, 3, 4]

# 相当于
s += [3, 4]
```

[回到顶部](#python_docs)


##### list内置方法
```python
class list(MutableSequence[_T], Generic[_T]):
    def __init__(self) -> None: ...
    def __init__(self, __iterable: Iterable[_T]) -> None: ...

    # 列表元素增加
    # 第一个参数_object：指定对象
    # 用于将指定的对象添加到列表末尾，返回空
    def append(self, __object: _T) -> None: ...
    # 第一个参数__index：指定插入位置
    # 第二个参数__object：指定插入对象
    # 在指定的index位置插入指定的对象元素
    def insert(self, __index: SupportsIndex, __object: _T) -> None: ...

    # 列表元素删除，清除
    # 第一个参数__index：指定弹出位置
    # 弹出指定位置的元素，和其他编程语言不一样，可以指定弹出元素的位置
    # 返回值：返回弹出的元素
    def pop(self, __index: SupportsIndex = ...) -> _T: ...
    # 第一个参数__value：指定删除的值
    # 根据传入的参数值，移除列表第一次出现的该值
    def remove(self, __value: _T) -> None: ...

    # 排序方法
    # 对列表永久排序按与字母顺序相反的顺序排列列表元素，
    # 只需向sort() 方法传递参数reverse=True
    # 即list.sort(reverse=true)
    def sort(
        self, *, key: Callable[[_T], SupportsRichComparison], reverse: bool = ...) -> None: ...

    # 列表扩展
    def extend(self, __iterable: Iterable[_T]) -> None: ...

    # 列表复制
    def copy(self) -> list[_T]: ...

    # 其他列表方法
    # 第一个参数__value：是要查找的值
    # 第二个可选参数参数__start：指定查找开始的位置
    # 第三个可选参数__stop：指定查找结束的位置，不包括该位置
    # 如果指定第三个参数，则从二个参数开始位置到结束位置前，不包括第三个参数指定的位置
    # 返回值：从列表指定的__start到__stop的位置（不包括__stop位置）
    # 返回_value的位置index
    def index(self, __value: _T, __start: SupportsIndex = ...,
              __stop: SupportsIndex = ...) -> int: ...

    # 第一个参数_value：指定元素值
    # 返回值：返回_value元素值在在列表中出现的次数
    def count(self, __value: _T) -> int: ...

    # list获取长度
    def __len__(self) -> int: ...
    def __iter__(self) -> Iterator[_T]: ...
    __hash__: ClassVar[None]  # type: ignore[assignment]

    def __getitem__(self, __i: SupportsIndex) -> _T: ...
    def __getitem__(self, __s: slice) -> list[_T]: ...

    def __setitem__(self, __i: SupportsIndex, __o: _T) -> None: ...
    def __setitem__(self, __s: slice, __o: Iterable[_T]) -> None: ...

    def __delitem__(self, __i: SupportsIndex | slice) -> None: ...
    def __add__(self, __x: list[_T]) -> list[_T]: ...
    def __iadd__(self: Self, __x: Iterable[_T]) -> Self: ...
    def __mul__(self, __n: SupportsIndex) -> list[_T]: ...
    def __rmul__(self, __n: SupportsIndex) -> list[_T]: ...
    def __imul__(self: Self, __n: SupportsIndex) -> Self: ...
    def __contains__(self, __o: object) -> bool: ...
    def __reversed__(self) -> Iterator[_T]: ...
    def __gt__(self, __x: list[_T]) -> bool: ...
    def __ge__(self, __x: list[_T]) -> bool: ...
    def __lt__(self, __x: list[_T]) -> bool: ...
    def __le__(self, __x: list[_T]) -> bool: ...
    def __class_getitem__(cls, __item: Any) -> GenericAlias: ...
```

1. list清除方法补充：
    * MutableSequence.clear()清除列表
    * del关键字删除list元素`del list_name[idx]`
2. list排序方法补充：
    * MutableSequence.reverse()可以用于反转列表
    * sorted(list_name) | sorted(list_name, reverse = True)
    * 


列表内置方法用例：

```python
# del语句删除元素
s = [1, 4, 9, 16, 25, 36, 49]
del s[1]  # s => [1, 9, 16, 25, 36, 49]
del s[2:4]  # s => [1, 9, 36, 49]
```


[回到顶部](#python_docs)



#### tuple
列表适合用于存储在程序运行期间可能变化的数据集，可以被修改的,有时候你需要创建一系列不可修改的元素,元组（the items in a tuple can't be modified，不可变的列表）可以满足这种需求：
1. 创建tuple：使用圆括号而非中括号来标识。严格地说，元组是由逗号标识的，圆括号只是让元组看起来更整洁、更清晰，如果你要定义只包含一个元素的元组，必须在这个元素后面加上逗号`(item1,)`，创建只包含一个元素的元组通常没有意义，但自动生成的元组有可能只有一个元素
2. 虽然不能修改元组的元素，但可以给存储元组的变量赋值
3. 遍历元组`for in:`

```python
dimensions = (1920, 1080)
```

[回到顶部](#python_docs)

### 集合类型
* set

[回到顶部](#python_docs)

#### set
1. set对象是由具有唯一性的hashable对象所组成的无序多项集
2. 创建set的方式：
    * 对象字面量：`{'jack', 'sjoerd'}`
    * 内置类型`set([iterable])` 创建一个set类型
    * 推导式：如 `{c for c in 'abracadabra' if c not in 'abc'}`
3. 获取set对象长度方式：len(s)返回set属性个数

[回到顶部](#python_docs)



##### set内置方法
```python
class set(MutableSet[_T], Generic[_T]):
    def __init__(self, __iterable: Iterable[_T] = ...) -> None: ...

    # === 集合关系
    # 第一个参数__s：一个集合
    # set对象与__s没有共有的元素则返回True
    # 相当于in运算符
    def isdisjoint(self, __s: Iterable[Any]) -> bool: ...

    # 第一个参数__s：一个集合
    # set对象的每个元素都在__s的子集之中，返回true
    def issubset(self, __s: Iterable[Any]) -> bool: ...
    # <=：set对象的每个元素都在__s的子集之中，返回true
    def __le__(self, __s: AbstractSet[object]) -> bool: ...
    # <：相当于set <= __s and set != __s
    # 判断set对象是否是__s的真子集
    def __lt__(self, __s: AbstractSet[object]) -> bool: ...

    # 判断set对象是否是__s的父集
    def issuperset(self, __s: Iterable[Any]) -> bool: ...
    # >=：判断set对象是否是__s的父集
    def __ge__(self, __s: AbstractSet[object]) -> bool: ...
    # >: set >= __s and set != __s
    # 判断set对象是否是__s的真父集
    def __gt__(self, __s: AbstractSet[object]) -> bool: ...

    # 返回set对象联合各个s的新集合
    # 其中包含来自原集合以及若干s指定的所有集合中的元素
    def union(self, *s: Iterable[_S]) -> set[_T | _S]: ...
    # |：返回set对象联合各个s的新集合
    def __or__(self, __s: AbstractSet[_S]) -> set[_T | _S]: ...

    # 返回set对象和各个s的交集
    # 其中包含来自原集合以及若干s指定的所有集合中的共有的元素
    def intersection(self, *s: Iterable[Any]) -> set[_T]: ...
    # &：返回set对象和各个s的交集
    def __and__(self, __s: AbstractSet[object]) -> set[_T]: ...

    # 返回set对象中，若干s集合都不存在的元素组成的集合
    # 其中包含来自原集合以及若干s指定的所有集合中的共有的元素
    def difference(self, *s: Iterable[Any]) -> set[_T]: ...
    # -：返回set对象中，若干s集合都不存在的元素组成的集合
    def __sub__(self, __s: AbstractSet[_T | None]) -> set[_T]: ...

    # 返回set对象中，与__s集合中属于二者，但不能共同拥有的部分
    def symmetric_difference(self, __s: Iterable[_T]) -> set[_T]: ...
    # ^：返回set对象中，与__s集合中属于二者，但不能共同拥有的部分
    def __xor__(self, __s: AbstractSet[_S]) -> set[_T | _S]: ...
    # === end 集合关系

    # === 根据集合关系的更新方法
    # set对象添加来自若干s集合中的所有元素
    # 相当于set |= s | ...
    def update(self, *s: Iterable[_T]) -> None: ...
    # 更新集合，只保留其中在若干s集合中也存在的元素
    # 相当于set &= s & ...
    def intersection_update(self, *s: Iterable[Any]) -> None: ...
    # 更新集合，移除其中在若干s集合中也存在的元素
    # 相当于set -= s |...
    def difference_update(self, *s: Iterable[Any]) -> None: ...
    # 更新集合，只保留存在于集合的一方而非共同存在的元素
    # 相当于set ^= _s
    def symmetric_difference_update(self, __s: Iterable[_T]) -> None: ...
    # === end 根据集合关系的更新方法

    # ===集合增删元素的方法
    # set对象中增加__element
    def add(self, __element: _T) -> None: ...
    # set对象中移除__element
    # 如果__element不存在于集合中则会引发 KeyError
    def remove(self, __element: _T) -> None: ...
    # set对象中移除__element
    def discard(self, __element: _T) -> None: ...
    # === end 集合增删元素的方法

    # === 其他
    # 返回原集合的浅拷贝
    def copy(self) -> set[_T]: ...
    # 返回集合长度
    def __len__(self) -> int: ...
    def __contains__(self, __o: object) -> bool: ...
    def __iter__(self) -> Iterator[_T]: ...
    def __iand__(self: Self, __s: AbstractSet[object]) -> Self: ...
    def __ior__(
        self: Self, __s: AbstractSet[_T]) -> Self: ...  # type: ignore[override,misc]

    def __isub__(self: Self, __s: AbstractSet[object]) -> Self: ...
    def __ixor__(
        self: Self, __s: AbstractSet[_T]) -> Self: ...  # type: ignore[override,misc]
    __hash__: ClassVar[None]  # type: ignore[assignment]
    def __class_getitem__(cls, __item: Any) -> GenericAlias: ...
```


1. 删除元素还可以使用以下方法
    * MutableSet.pop()：从集合中移除并返回任意一个元素。 如果集合为空则会引发 KeyError
    * MutableSet.clear()：从集合中移除所有元素


set内置方法用例：

```python
s = set({'liu', 'yaohui'})
'liu' in s # => True
'yaohui' not in s  # => False
```



[回到顶部](#python_docs)




#### frozenset
1. frozenset与set不一样的是：
    * set类型是可变的。其内容可以使用add()和remove() 这样的方法来改变。 由于是可变类型，它没有哈希值，且不能被用作字典的键或其他集合的元素。
    * frozenset 类型是不可变并且为hashable，其内容在被创建后不能再改变；因此它可以被用作字典的键或其他集合的元素。除了不能使用set的修改set的方法，访问frozensetset的操作和方法都是一样的，具体不再阐述

[回到顶部](#python_docs)

### 映射类型
* dict

目前仅有一种标准映射类型 字典（dict）

[回到顶部](#python_docs)

#### dict
1. 字典（dict）是一个键值映射类型
2. 创建dict的方式：
    * 字典字面量：放在花括号（`{}` ）中的键值对
    * 类型构造器：如果没有给出位置参数，将创建一个空字典。否则的话，位置参数必须为一个 iterable 对象（该可迭代对象中的每一项本身必须为一个刚好包含两个元素的可迭代对象。 每一项中的第一个对象将成为新字典的一个键，第二个对象将成为其对应的值）。如果给出了关键字参数，则关键字参数及其值会被加入到基于位置参数创建的字典。 如果要加入的键已存在，来自关键字参数的值将替代来自位置参数的值
        * dict(**kwargs)
        * dict(mapping, **kwargs)
        * dict(iterable, **kwargs)
    * 推导式：例如`{x: x ** 2 for x in range(10)}`
2. 获取dict键的数量的方式：
    * len(dict_name)
    * `dict_name.__len__` 内部也使用len(dict_name)实现，所以直接使用len(dict_name)
3. in运算符判断子dict是否存在



```python
# === 创建dict的方式
# 良好的定义字典的代码风格
# 左花括号，回车
# 缩进 末尾逗号，最后一个键值对后面也加上逗号方便以后添加键值
# 最后缩进，右花括号
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python',
    }
# === end 创建dict的方式


# === in运算符判断子dict是否存在
d = {
    'name': 'liuyahui'
}

a = 'name' in d # => True
b = 'name' not in d # => False
# === end in运算符判断子dict是否存在
```

[回到顶部](#python_docs)


##### dict中键的访问设置
1. 字典（dict）通过`dict_name[key_name]`访问设置键值。如果映射中不存在 key 则会引发KeyError，如果字典的子类定义了方法 `__missing__()` 并且 key 不存在，该方法会被调用
2. dict中键的访问设置方法
    * `set.get(key[, default])`
    * `MutableMapping.setdefault(key[, default])`：如果字典存在键key，返回它的值。如果不存在，插入值为default的键key ，并返回default。default默认为None
    * `MutableMapping.update([other])`: 使用来自other的键/值对更新字典，覆盖原有的键
        * d |= other：用other的键和值更新字典d ，other可以是mapping或iterable的键值对。当 d 和 other 有相同键时， other的值优先
        * dict_name | other：合并d和other 中的键和值来创建一个新的字典，两者必须都是字典。当 d 和 other 有相同键时，other的值优先
3. 字典（dict）是动态结构，可随时添加删除键值对
    * dict增加键：可依次指定字典名、用方括号括起的键和相关联的值，即`dict_name[new_key] = value`
    * dict删除键
        * 使用del运算符将相应的键值对彻底删除 `del dict_name[key_name]`
        * `dict.pop(key[, default])`：如果key存在于字典中则将其移除并返回其值，否则返回 default。 如果default未给出且key不存在于字典中，则会引发 KeyError
        * `MutableMapping.popitem()`：字典中移除并返回一个 (键, 值) 对。 键值对会按 LIFO 的顺序被返回。
        * ·`MutableMapping.clear()`

```python
# === dict中键的访问设置
person = {
    'first_name': 'liu',
    'last_name': 'yaohui'
}

# 访问字典key
person['first_name']  # => 'liu'
person['last_name']  # => 'yaohui'

# 设置字典key
person['first_name'] = 'yaohui'
person['last_name'] = 'liu'

person['first_name']  # => 'yaohui'
person['last_name']  # => 'liu'
# === end dict中键的访问设置


# === 如果映射中不存在 key 则会引发KeyError，
# 如果字典的子类定义了方法 `__missing__()` 
# 并且 key 不存在，该方法会被调用
class Counter(dict):
    def __missing__(self, key):
        return 0

c = Counter()
c['red'] # => 0



# === dict增加删除键
person = {
    'first_name': 'liu',
    'last_name': 'yaohui'
}

# 增加key
person['years'] = 25

person['years']  # => 25
del person['years'] # => 删除指定key
# === dict增加删除键
```

[回到顶部](#python_docs)


##### dict遍历
字典中元素的排列顺序与定义时相同。如果将字典打印出来或遍历其元素，将发现元素的排列顺序与添加顺序相同。dict遍历方式：
1. dict变量使用`for in`，通常变量需要配合dict的方法：
    * dict.items()：返回由字典项 (键值对) 组成的一个新视图
    * dict.keys()：返回由字典键组成的一个新视图
    * dict.values(): 返回由字典值组成的一个新视图
2. 使用sorted函数按特定顺序遍历
3. 使用set函数遍历非重复值，为剔除重复项，可使用集合（set）。集合 中的每个元素都必须是独一无二的


```python
for key_name, value_name in dictionary.items():
    # ... 遍历字典中的所有键，值

for key_name in dictionary.keys():
    # ...
## 相当于
for key_name in dictionary:
    # ...
    # 显式地使用方法keys() 可让代码更容易理解，
    # 可以选择这样做，但是也可以省略它

for value_name in dictionary.values():
    # 遍历字典中的值

# === 使用sorted函数按特定顺序遍历
for key_name in sorted(dictionary.keys()):
    # ... 按特定顺序遍历字典中的所有键
# === end 使用sorted函数按特定顺序遍历

# 使用set函数遍历非重复值，为剔除重复项，可使用集合（set）。
# 集合 中的每个元素都必须是独一无二的
for value_name in set(dictionary.values()):
    # ... 字典剔除重复值
```

[回到顶部](#python_docs)


##### dict方法
```python
class dict(MutableMapping[_KT, _VT], Generic[_KT, _VT]):
    def __init__(self: dict[_KT, _VT]) -> None: ...
    def __init__(self: dict[str, _VT], **kwargs: _VT) -> None: ...

    def __init__(
        self, __map: SupportsKeysAndGetItem[_KT, _VT], **kwargs: _VT) -> None: ...

    def __init__(
        self, __iterable: Iterable[tuple[_KT, _VT]], **kwargs: _VT) -> None: ...
    def __init__(self: dict[str, str],
                 __iterable: Iterable[list[str]]) -> None: ...

    def __new__(cls: type[Self], *args: Any, **kwargs: Any) -> Self: ...

    # === dict访问设置方法
    # 第一个参数__key：指定键
    # 第二个可选参数__default：指定的键不存在时要返回的值
    # default未给出则默认为None，所以这方法绝不会引发KeyError
    # 返回值：返回dict对象中__key指定key的值
    def get(self, __key: _KT, __default: _VT | _T) -> _VT | _T: ...
    # === end dict访问设置方法

    # === dict增加删除方法
    # 第一参数__key：指定key
    # 第二个可选参数__default：如果key不存在，
    # __default指定key，如果default未给出且key不存在于字典中，
    # 则会引发 KeyError
    # 返回值：删除指定的__key，并返回
    def pop(self, __key: _KT, __default: _VT | _T) -> _VT | _T: ...
    # === end dict增加删除方法
    def copy(self) -> dict[_KT, _VT]: ...
    def keys(self) -> dict_keys[_KT, _VT]: ...
    def values(self) -> dict_values[_KT, _VT]: ...
    def items(self) -> dict_items[_KT, _VT]: ...

    @classmethod
    def fromkeys(
        cls, __iterable: Iterable[_T], __value: None = ...) -> dict[_T, Any | None]: ...

    @classmethod
    def fromkeys(cls, __iterable: Iterable[_T],
                 __value: _S) -> dict[_T, _S]: ...

    # 返回dict对象长度

    def __len__(self) -> int: ...
    def __getitem__(self, __k: _KT) -> _VT: ...
    def __setitem__(self, __k: _KT, __v: _VT) -> None: ...
    def __delitem__(self, __v: _KT) -> None: ...

    # 返回以字典的键为元素的迭代器
    # iter(d.keys())的快捷方式
    def __iter__(self) -> Iterator[_KT]: ...
    # 返回一个逆序获取字典键的迭代器
    # reversed(d.keys()) 的快捷方式
    def __reversed__(self) -> Iterator[_KT]: ...
    __hash__: ClassVar[None]  # type: ignore[assignment]

    def __class_getitem__(cls, __item: Any) -> GenericAlias: ...

    def __or__(self, __value: Mapping[_T1, _T2]) -> dict[_KT |
                                                         _T1, _VT | _T2]: ...

    def __ror__(self, __value: Mapping[_T1, _T2]) -> dict[_KT |
                                                          _T1, _VT | _T2]: ...

    def __ior__(
        self: Self, __value: SupportsKeysAndGetItem[_KT, _VT]) -> Self: ...

    def __ior__(
        self: Self, __value: Iterable[tuple[_KT, _VT]]) -> Self: ...
```



[回到顶部](#python_docs)

## 函数
在函数中，可使用return 语句将值返回到函数调用表达式。函数可返回任何类型的值，包括列表和字典等较复杂的数据结构

[回到顶部](#python_docs)

### 函数创建
函数创建方式
1. 函数定义创建函数。使用关键字def定义函数。对于文档字符串：
    * 第一行应为对象用途的简短摘要，这一行应以大写字母开头，以句点结尾
    * 文档字符串为多行时，第二行应为空白行，在视觉上将摘要与其余描述分开
2. Lambda表达式创建函数：Lambda 表达式用于创建简单的匿名函数，语法上，匿名函数只能是单个表达式，语义上是常规函数定义的语法糖

```python
def function_name(paras...):
    """文档字符串用三引号括起"""
    """用于生成有关程序中函数的文档。"""
    # 缩进内容都属于函数内部程序块


def make_incrementor(n):
    return lambda x: x + n


f = make_incrementor(42)
f(0)  # => 42
f(1)  # => 43
```

[回到顶部](#python_docs)

### 函数参数
1. 函数实参和形参
    * 形参（parameter）定义函数时候的函数参数
    * 实参（argument）调用函数时传递给函数的函数参数
    * 位置实参：实参传递时候，根据形参的顺序，传递实参给形参
    * 关键字实参：实参式`argument_name =  value` 这种形式，叫做关键字实参，关键字实参的顺序无关紧要，根据实参名传递给对应的形参
2. 形参默认值：对于实参个数少于形参的情况，用默认形参`para=defualt_value`解决
3. 形参元组和形参字典：形参元组和形参按字典，类似于javascript中的rest parameter，用于解决实参多于形参的情况，像javascript，可以通过扩展运算符`...`实现实参的解包，python中通过`*`运算符解包list，同样地列表可以通过`**`解包。即，传递任何数量的实参，有时候，预先不知道函数需要接受多少个实参
    * 可以使用`*`创建形参空元组，并将收到的实参值都封装到这个元组中。
    * 任意数量的关键字实参，使用`**`创建一个接受关键字实参的空字典
4. /和*限定形参：函数定义中未使用 / 和 * 时，参数可以按位置或关键字传递给函数。默认情况下，参数可以按位置或显式关键字传递给 Python 函数。为了让代码易读、高效，最好限制参数的传递方式。其中：
    * `/` 仅位置参数：`/` 用于在逻辑上分割仅限位置形参与其它形参，位置形参应放在 `/`（正斜杠）前，`/` 后可以是 位置或关键字 或 仅限关键字 形参
    * `*` 仅限关键字参数: `*` 后的参数都是仅限关键字 形参
5. 选择形参定义的方式，通常：
    * 仅限位置形参，通常形参名没有实际意义
    * 如果形参名，有实际意义，且显式名称可以让函数定义更易理解时，才使用关键字形参
    * 对于API，使用仅限位置形参，可以防止未来修改形参名时造成破坏性的 API 变动


```python
def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
    print("-- This parrot wouldn't", action, end=' ')
    print("if you put", voltage, "volts through it.")
    print("-- Lovely plumage, the", type)
    print("-- It's", state, "!")


parrot(1000)                                          # 1 positional argument
parrot(voltage=1000)                                  # 1 keyword argument
parrot(voltage=1000000, action='VOOOOOM')             # 2 keyword arguments
parrot(action='VOOOOOM', voltage=1000000)             # 2 keyword arguments
parrot('a million', 'bereft of life', 'jump')         # 3 positional arguments
parrot('a thousand', state='pushing up the daisies')  # 1 positional, 1 keyword

# 以下调用都是错误的
parrot()                     # required argument missing
parrot(voltage=5.0, 'dead')  # non-keyword argument after a keyword argument
parrot(110, voltage=220)     # duplicate value for the same argument
parrot(actor='John Cleese')  # unknown keyword argument


# === 形参默认值
def function_name(para1 = default_value):
    # 缩进内容都属于函数内部程序块
# === end 形参默认值

# === 形参元组和形参字典
def function_name(*para1):
    # 函数块

def build_profile(first, last, **user_info):
    """创建一个字典，其中包含我们知道的有关用户的一切。"""
    user_info['first_name'] = first
    user_info['last_name'] = last
    return user_info
    user_profile = build_profile('albert', 'einstein',
    location='princeton',
    field='physics')
    print(user_profile)

# 解包实参
args = [3, 6]
# call with arguments unpacked from a list
list(range(*args))
[3, 4, 5]

# ===
def parrot(voltage, state='a stiff', action='voom'):
    print("-- This parrot wouldn't", action, end=' ')
    print("if you put", voltage, "volts through it.", end=' ')
    print("E's", state, "!")


d = {"voltage": "four million", "state": "bleedin' demised", "action": "VOOM"}
parrot(**d)
#  This parrot wouldn't VOOM if you put four million volts through it. 
#  E's bleedin' demised !
# === end 形参元组和形参字典



# === /和*限定形参
def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):
      -----------    ----------     ----------
        |             |                  |
        |        Positional or keyword   |
        |                                - Keyword only
         -- Positional only

# === 
def standard_arg(arg):
    print(arg)

def pos_only_arg(arg, /):
    print(arg)

def kwd_only_arg(*, arg):
    print(arg)

def combined_example(pos_only, /, standard, *, kwd_only):
    print(pos_only, standard, kwd_only)
# === end /和*限定形参
```


[回到顶部](#python_docs)



## 类
1. 类定义一大类对象都有的通用行为。基于类创建对象 时，每个对象都自动具备这种通用行为，然后可根据需要赋予每个对象独特的个性
2. 定义类的规则：
    * 使用关键字class 定义类
    * 首字母大写
    * `__init__()` 方法用于初始化构造，实例化类时，python自动运行的方法，方法__init__() 定义成可以包含多个形参，形参self 必不可少，而且必须位于其他形参的前面，self是一个指向实例本身的引用，让实例能够访问类中的属性和方法
    * 对于其他方法，如果要引用实例本身，使用到实例的属性和方法，第一个形参必须是self，通过self调用相应实例属性和方法
    * 可通过实例访问的变量称为属性
    * 方法的名称中，开头和末尾各有两个下划线，是默认方法，应该避免这样命名
3. 创建类实例（类对象），注意，不像一些语言，不用`new`关键字创建类实例
```python
class Dog:
    """一次模拟小狗的简单尝试。"""
    def __init__(self, name, age):
        """初始化属性name和age。"""
        self.name = name
        self.age = age

    def sit(self):
        """模拟小狗收到命令时蹲下。"""
        print(f"{self.name} is now sitting.")

    def roll_over(self):
        """模拟小狗收到命令时打滚。"""
        print(f"{self.name} rolled over!")

# 创建实例自动调用__init__方法
# 自动将实参顺序传递给__init__方法
dog = Dog('wangcai', 16);
```
[回到顶部](#python_docs)


### 类实例成员的访问和设置
类成员（member），相当于javascript中属性和方法的统称。对类实例成员的访问和设置都是用`.`运算符，即类实例成员访问表达式 `instance_name.attr_name` 和 `instance_name.method_name()`访问和设置对象实例的属性和方法。三种方式修改类实例成员（member）的值：
1. 直接通过实例属性进行修改: 实例修改`instance_name.attr_name = new_value`
2. 通过方法进行修改：`instance_name.update_method(new_value)`，过方法修改实例属性，可以进行一些扩展，例如对修改值的判断是否合理
3. 通过递增方法修改`instance_name.increament_method(increament_value)`

[回到顶部](#python_docs)

### 类继承
1. 类继承：一个类继承另一个类时，子类继承了父类的所有属性和方法，同时还可以定义自己的属性和方法。原有的类称为父类（也叫super class 超类），而新类称为子类（subclass）。不像其他语言，通过extends关键字继承，而是在圆括号内指定父类。而且，支持多重继承
2. super() 是一个特殊函数，用于调用父类的方法，继承父类通常需要在`__init__()`方法中调用super函数初始化父类的`__init__()`方法
3. 重写父类的方法：对于父类的方法，只要它不符合子类模拟的实物的行为，都可以进行重写。可在子类中定义一个与要重写的父类方法同名的方法，实现子类方法覆盖父类的同名方法

```python
# 圆括号内指定父类名称可以继承类
class ClassName(SuperClassName):

# 多重继承
class ClassName(SuperClassName1, SuperClassName2):

# super函数
class ClassName(SuperClassName):
    def __init__(self...)
        """初始化父类的属性。"""
        super.__init__(args...)
```

[回到顶部](#python_docs)


### 辅助类
将实例属性放到一个新类中：给类添加的细节越来越多：属性和方法清单以及文件都越来越长。在这种情况下，可能需要将类的一部分提取出来，作为一个独立的类。可以将大型类拆分成多个协同工作的小类。 即将一个类实例作为一个类的属性

```python
class AssistClass():
    # snip 即省略

class ClassName():
    def __init(self...):
        # snip
        self.assist_attribute_name = AssistClass()

instance_name = AssistClass(args...)
# 调用实例属性中的方法
instance_name.assist_attribute_name.method_in_assist_class_name()
```

[回到顶部](#python_docs)


## 模块
随着不断给类添加功能，文件可能变得很长。遵循Python的总体理念，应让文件尽可能整洁，可以将类存储在模块中，然后在主程序中导入所需的模块

实现某些功能的函数和类可以放进模块（module）中，有需要的时候可以导入，模块是扩展名为.py的文件

[回到顶部](#python_docs)

#### 导入整个模块
使用关键字`import`导入模块，使用`as` 关键字给模块指定别名
```python
# 现在有一个名为 module_name.py 的模块文件

# 导入整个模块
import module_name
# 调用模块中的函数
module_name.function_name(arg1,...)
# 使用模块中的
module_name.ClassName()

# 给模块重命名
import module_name as mn
# 调用模块中的函数
mn.function_name(arg1,...)
```

[回到顶部](#python_docs)

#### 导入模块中特定的标识符
使用`from import`语句指定导入的函数和类，使用`as` 关键字可以给函数和类指定别名

```python
# 现在有一个名为 module_name.py 的模块文件

# 导入模块中特定的函数
from module_name import function_name
# 调用函数
function_name(arg1,...)
# 导入特定类
from module_name import ClassName

# 通过用逗号分隔函数名，可根据需要从模块中导入任意数量的函数
from module_name import function_0, function_1, function_2

# 从一个模块中导入多个类
from module_name import ClassName1, ClassName2

# 使用as 给函数指定别名
from module_name import function_name as fn_name
# 使用as 给类指定别民
from module_name import ClassName as Cn
# 多个类别名
from module_name import ClassName1 as Cn1, Class_name2 as Cn2
```

[回到顶部](#python_docs)

#### 导入模块中的所有函数
使用星号`* `运算符可让Python导入模块中的所有函数。由于导入了每个函数，可通过名称来调用每个函数，而无须使用句点表示法

最好不要采用这种导入方法。这是因为如果模块中有函数和类的名称与当前项目中使用的名称相同，可能导致意想不到的结果：Python可能遇到多个名称相同的函数或变量，进而覆盖函数。
```python
from module_name import *
# 直接调用来自module_name 的函数
module_name_function_name(arg1...)
```

[回到顶部](#python_docs)


##  简单输入输出
* print()
* input()

[回到顶部](#python_docs)


### input()
```python
# 可选的接收一个__prompt参数：指定提示
# 返回值：standard out显示可选的prompt，
# 然后读取standard input，如果用户键入EOF
# ctrl + z in window，
# 返回用户输入的的str
def input(__prompt: object = ...) -> str: ...
```


input()用例：

```python
party_size = input("How many people are in your dinner party tonight? ")
party_size = int(party_size)
if party_size > 8:
    print("I'm sorry, you'll have to wait for a table.")
else:
    print("Your table is ready.")
```

[回到顶部](#python_docs)

### print()&prinf()
```python
# print(value, ..., sep=' ', end='\n', 
#   file=sys.stdout, flush=False)
def print(
    # values：指定输出的values
    *values: object,
    # 值之间的分隔符 默认是space
    sep: str | None = ...,
    # 最后一个值添加的字符串，默认是\n
    end: str | None = ...,
    # file-like object
    # 默认是当前sys.stdout
    file: SupportsWrite[str] | None = ...,
    # 是否强制刷新，默认是false
    flush: bool,
) -> None: ...
```


字符串中插入变量的值，在前引号前加上字母f，再将要插入的变量放在`{}`内，f是format（设置格式）的简写，可以把花括号内的变量替换为字符串


print()&prinf()用例：

```python
print("liuyaohui") # => liuyaohui

first_name = "liu"
last_name = "yaohui"
print(f"fullname is {first_name}{last_name}")
# => fullname is liuyaohui
```

[回到顶部](#python_docs)

#### printf 风格的字符串格式化

[回到顶部](#python_docs)

## 文件
1. 文件路径：
    * 显示文件路径时，Windows系统使用反斜杠`\`而不是斜杠`/`，但在代码中依然可以使用斜杠`/`，反斜杠`\`会对字符串中的字符进行转义，因此文件代码中使用反斜杠`\`，需要对路径中的反斜杠进行`\\`转义
    * 相对文件路径相对于当前运行的程序所在目录进行文件查找    
    * 绝对文件路径。相对路径行不通时，可使用绝对路径。绝对路径通常比相对路径长，通常将其赋给一个变量
2. 关键字with：使用函数读取写入文件前，可以使用关键字with，指示在不再需要访问文件后将其关闭，即由程序选择在合适的时候自动将其关闭

> open() 返回的文件对象只在with 代码块内可用，所以在with语句块外使用读取的文件数据，可以在with 代码块内将文件的各行存储在一个外部的list变量中，这样就能在with语句块外使用文件数据

[回到顶部](#python_docs)


### open函数读写文件
```python

def open(
    # 打开的文件路径
    file: _OpenFile,
    # 打开文件的模式
    # 如果省略了，以默认的只读模式打开文件
    # 读取模式 （'r' ）
    # 写入模式 （'w' ）: 文件已经存在，在返回文件对象前清空该文件的内容
    # 附加模式 （'a' ）: 给文件添加内容，而不是覆盖原有的内容
    # 不会在返回文件对象前清空文件的内容，而是将写入文件的行添加到文件末尾
    # 读写模式 （'r+' ）
    # 写入的文件不存在，函数open()将自动创建文件
    mode: OpenBinaryMode,
    buffering: Literal[0],
    encoding: None = ...,
    errors: None = ...,
    newline: None = ...,
    closefd: bool = ...,
    opener: _Opener | None = ...,
) -> FileIO: ...
```

1. open函数读取文件：`as`关键字把文件对象传送给关键字后的标识符
    * 在open()语句块内，可以使用文件对象的`read()`方法读取整个文件内容
    * 在open()语句块内，可以使用文件对象的`readlines()`方法从文件中读取每一行
    * 在open()语句块内，可以使用`for in`遍历文件对象，解析出一行迭代
2. open函数写入文件：`as`关键字把文件对象传送给关键字后的标识符，open函数要写入需要提供另一个实参
    * 在open函数语句内，使用文件对象的`write()`方法可以写入文件内容。write()方法不会在写入的文本末尾添加换行符，要让每个字符串都单独占一行，需要在方法调用write() 中包含换行符`\n`

open函数读写文件用例：

```python
# === open函数读取文件
with open('file_name.txt') as file_object:
    contents = file_object.read()
print(contents)

# 逐行读取
# restrip() 函数删除字符串末尾的空白
with open('file_name.txt') as file_object:
    for line in file_object:
        print(line.rstrip())

# 保存到list中，with语句块外面也可以使用
# `readlines()`方法从文件中读取每一行
with open('file_name.txt') as file_object:
    lines = file_object.readlines()
for line in lines:
    print(line.rstrip())

# === end open函数读取文件


# === open函数写入文件

# === end open函数写入文件

```

[回到顶部](#python_docs)



## 异常
1. 异常的特殊对象来管理程序执行期间发生的错误。每当发生让Python不知所措的错误时，它都会创建一个异常对象。如果编写了处理该异常的代码，程序将继续运行；如果未对异常进行处理，程序将停止并显示traceback，其中包含有关异常的报告
2. 异常分类
    * ZeroDivisionError 异常：不能用数除以0
    * FileNotFoundError 异常
[回到顶部](#python_docs)


### try-except异常处理
try-except异常处理:
1. python中异常使用try-except代码块处理（不是其他语言的try-catch)，如果try 代码块中的代码运行起来没有问题，跳过except代码块；如果try代码块中的代码导致了错误，将查找与之匹配的except代码块并运行其中的代码
2. else代码块，依赖try代码块成功执行的代码都应放到else 代码块中
3. pass语句，程序在发生异常时保持静默

```python
try:
    print(5/0)
except ZeroDivisionError:
    print("You can't divide by zero!")

# ===
try:
    # snip
except:
    # snip
else:
    # snip


# === pass 静默失败
try:
    print(5/0)
except ZeroDivisionError:
    pass
```


[回到顶部](#python_docs)



## python标准库
Python标准库 是一组模块，我们安装的Python都包含它，使用标准库中的任何函数和类，只需在程序开头包含一条简单的import 语句即可

### type
```python
class type:
    # 返回对象的类型
    def __init__(self, __o: object) -> None: ...

    def __init__(self, __name: str,
                 __bases: tuple[type, ...],
                 __dict: dict[str, Any], **kwds: Any) -> None: ...
```

[回到顶部](#python_docs)

### 内置函数
```python
# 返回对象的id
# 每个对象的id都是唯一的
# CPython使用对象的内存地址作为id
id()

# 判断对象是否是类或者子类的实例
# isinstance(x, (A, B, ...))相当于
# isinstance(x, A) or isinstance(x, B) or ... etc.
isinstance(1, int) # => true
isinstance(1, float) # => false


# 判断类是否是子类
# issubclass(x, (A, B, ...))
# 相当于
# issubclass(x, A) or issubclass(x, B) or ... etc.
issubclass(Tiger, Animal) # => 老虎是动物的子类


## === 数学相关
min()
max()
sum(__iterable: Iterable[_T])

## === end 数学
```

[回到顶部](#python_docs)

### 数字和数字模块

#### Random
```python
class Random:
    def __init__(self, seed: object = ...) -> None: ...
    # 返回[0.0, 到1.0]范围的一个随机数
    def random(self) -> float: ...

    # a<b，返回a到b之间的随机数
    # a>b，返回b到a之间的随机数
    def uniform(self, a, b):
        # Get a random number in the range [a, b) or [a, b]
        # depending on rounding.
        return a + (b - a) * self.random()
    # 初始化随机数生成器
    def seed(self, __n: object = ...) -> None: ...
    # 获取random对象内部状态
    def getstate(self) -> _State: ...
    # 设置random对象内部状态
    def setstate(self, __state: _State) -> None: ...


_inst = Random()
seed = _inst.seed
random = _inst.random
uniform = _inst.uniform
```

[回到顶部](#python_docs)

## 代码测试
参与工作量较大的项目时，你应该对自己所编写函数和类的重要行为进行测试，这样你就能够更加确定自己所做的工作不会破坏项目的其他部分，从而自由地改进既有代码

Python标准库中的模块unittest 提供了代码测试工具

* 单元测试 用于核实函数的某个方面没有问题
* 测试用例 是一组单元测试，它们一道核实函数在各种情形下的行为都符合要求。良好的测试用例考虑到了函数可能收到的各种输入，包含针对所有这些情形的测试
* 全覆盖 的测试用例包含一整套单元测试，涵盖了各种可能的函数使用方式。对于大型项目，要进行全覆盖测试可能很难

[回到顶部](#python_docs)

