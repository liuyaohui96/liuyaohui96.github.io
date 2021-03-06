# 成语填空游戏
1. [项目描述](#项目描述)
2. [对象分析](#对象分析)
3. [模块分析](#模块分析)


## 项目描述
program description：点击开始按钮开始游戏，开始给出词汇演示表列出成语前两个字，补全两个字，如果对了补充完整，执行完五次，游戏结束，其中过程中出错，游戏结束。游戏结束界面有选择是否贡献一个成语。建立一个成语词汇前缀列表，存储成语前面两字，建立一个成语词汇后缀列表，存储成语后面两字。建立一个成语列表，考察5个成语，建立一个根据成语词汇表1长度生成的不重复的随机数列表，长度为5，成语列表显示的是成语词汇前缀表，项为随机数列表中的项，当用户填补了后两个词语，成语列表补全，否则失败。 增加游戏开始按钮，结束提示成绩，最后询问是否为本程序添加词汇，点击√，则提示输入新词汇丰富词汇，x则结束游戏

## 对象分析
* 造型
    * 开始造型
    * 空白造型
    * 结束造型
* 游戏空对象
    * 对象属性：大小，位置，造型等
        * 词汇前缀表：存储成语前面两字
        * 词汇后缀表：存储成语后面两字
        * 成语词汇表：存储成语
        * 随机数表：建立一个根据成语表长度生成的不重复的随机数列表（因为游戏补全五次，所以产生五个随机数）
        * 成语游戏界面表列表：根据随机数表取成语前缀表
        * 方法1：初始游戏，初始游戏，自定义事件触发，初始界面的构造，用自定义事件控制，方便游戏多次多对象初始化
        * 方法2：开始游戏，由开始游戏自定义事件触发，显示成语词汇前缀表，项为随机数列表中的项，当用户填补了后两个词语，成语列表补全，否则结束游戏。当完成5项成语，结束游戏
        * 方法3：结束游戏，自定义事件，方便界面控制，显示成绩
        * 方法4：成语词汇贡献事件触发，界面设置，判断成语是否已经存在，存在可再输入并提供x按钮（触发成语贡献重复×出现事件）返回，如果不存在，则提示已经加入词汇表，等待，然后返回初始界面
*  开始按钮
    *  方法1：初始游戏，自定义事件触发
    *  方法2：开始按钮点击，按钮消失，显示成语列表，开始游戏
    *  开始按钮改变造型：根据测定的鼠标x，y坐标范围改变
        *  x：-85 到 130（举例）
        *  y：-106 到-23（举例）
*  √ 按钮
    *  方法1：初始游戏，自定义事件触发
    *  方法2：游戏结束事件，隐藏
    *  方法3：√点击，隐藏，触发成语词汇贡献事件
    
*  x 按钮
    *  方法1：初始游戏，自定义事件触发，位置，隐藏等
    *  方法2：结束游戏时，显示
    *  方法3：× 按钮点击，触发游戏初始化事件
    *  方法4：触发成语词汇贡献事件时，隐藏
    *  方法5：成语贡献重复×出现，设置位置

[回到顶部](#成语填空游戏)

## 模块分析
* 外观
* 运动
* 控制
* 侦测
* 事件
* 变量

[回到顶部](#成语填空游戏)