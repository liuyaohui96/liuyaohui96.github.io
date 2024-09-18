
# 英语学习系统
1. [本项目描述](#本项目描述)
2. [项目结构](#项目结构)
3. [ai辅助构建json文件](#ai辅助构建json文件)
    1. [sentence](#sentence)
    2. [words](#words)
    3. [thew\_words](#thew_words)



## 本项目描述

本项目是本人用于学习英语的一个项目，主要是为了学习英语单词
1. 首页
    * 点击第几天的英语单词卡片，进入第几天的英语单词学习中
        * 蓝色卡片是ai辅助创造的单词
        * 红色卡片是3000英语单词一书里面的单词

2. memorize_word页面（蓝色卡片对应的英语学习界面，词汇来源于ai）
    * 首先显示当天的英语单词通过ai辅助创造出来的情景对话
    * 然后就是单词练习
        * 没有输入完整的单词，将不会显示正确单词出来
        * 觉得输入已经正确了，或者希望得到提示，就按下enter键，将会给你显示正确的答案
        * 同理，继续想强化记忆，就输入错误的答案，按下enter键，因为enter键将会清空输入，而你输入的时候，提示同样会消失
        * 如果输入正确，那么就会也会显示单词出来，这时候你按enter键就会进入到下一个输入框
        * 如果是最后一个元素练习完了，就清空所有输入，跳回到第一个单词去强化练习
3. twew_memorize_word页面（红色卡片对应的英语单词学习界面，词汇来源于3000英语学习一书）
    * 不同于上一个页面，这个页面有多个情景对话
    * 功能是上一个页面一样的

4. 本人使用，是一个面向任务形成的英语练习系统，下一步的任务方向：
    * 样式美化
    * 项目重构
    * 增加功能

[回到顶部](#英语学习系统)<div style="text-align:center"><br><br>⭐⭐⭐⭐⭐⭐⭐<br><br><br></div>

## 项目结构
1. data 文件夹是存放数据的文件夹
    * txt备份：里面存放原始单词数据，是单词的备份，也是ai辅助构造json文件的数据来源，也是方便其他系统处理这些数据（如excel）
        * word.txt
        * three_thousand_word.txt
    * `1.json, 2.json, ... n.json`里面存放了每一天的单词数据
       ```json
       // 注意，json本身是不支持的注释的，这里注释是为了让你明白数据结构
       // 分为sentence和words两大结构
       {
            "sentence":"",
            "words":[
            {"product":"产品"},
            {"inventory":"库存"},
            {"logistics":"物流"},
            {"customer":"客户"},
            {"order":"订单"},
            {"payment":"付款"},
            {"return":"退货"},
            {"quality":"质量"},
            {"brand":"品牌"},
            {"market":"市场"},
            {"promotion":"促销"},
            {"warehouse":"仓库"},
            {"shipping":"运输"},
            {"supply chain":"供应链"},
            {"platform":"平台"}
            ]
        }
        ```
    * `thew1.json, thew2.json, ... thewn.json`里面存放3000英语单词一书每天的单词

    ```json
    // 这是一个列表
    // 每个数组元素都是一个字典，字典里面有sentence和words
    [
        {
            "sentence":"This is about food items.",
            "words":[
            {"menu":"菜单"},
            // ...
            ]
        },
    ]
    ```
        
 
2. static文件夹是存放静态文件的文件夹：这里存放了css文件，js文件，图片文件等
    * css文件是页面的样式处理
    * js文件是页面的逻辑处理
    * 图片文件是页面的图片处理
3. 页面文件
    * index.html是首页
    * memorize_word是词汇来源于ai的英语学习界面
    * twew_memorize_word是词汇来源于3000英语学习一书的英语学习界面


[回到顶部](#英语学习系统)<div style="text-align:center"><br><br>⭐⭐⭐⭐⭐⭐⭐<br><br><br></div>


## ai辅助构建json文件

<div style="text-align:center"><br><br>⭐⭐⭐⭐⭐⭐⭐<br><br><br></div>

### sentence
sentence一般手动从ai复制到对应的sentence中

---------------------------------------------- sentence 情景对话----------------------

product  产品
inventory 库存
logistics 物流
customer 客户
order 订单
payment 付款
return 退货
quality 质量
brand 品牌
market 市场
promotion 促销
warehouse 仓库
shipping 运输
supply chain 供应链
platform 平台

根据列出的单词，设计一个电商情景英语对话，每句对话后面增加翻译，最后每句后面增加\n。然后下一句不用换行，如下格式
A: Hi （你好）\nB:Hi（你好）\n


-----  非电商情景的对话

根据列出的单词，设计一个情景英语对话，每句对话后面增加翻译，最后每句后面增加\n。然后下一句不用换行，如下格式
A: Hi （你好）\nB:Hi（你好）\n

-------------------------------------------------------------


[回到顶部](#英语学习系统)<div style="text-align:center"><br><br>⭐⭐⭐⭐⭐⭐⭐<br><br><br></div>

### words
------------------------------- words -----------------------------

product: 产品
inventory: 库存
logistics: 物流
customer: 客户
order: 订单
payment: 付款
return: 退货
quality: 质量
brand: 品牌
market: 市场
promotion: 促销
warehouse: 仓库
   

将上面的单词，放到下面json对象的words数组中，作为数组元素，输出补充完整后的json对象

{
  "sentence": "This is a business-related sentence.",
  "words": [
    {英语单词作为键: 中文单词作为值},
    ...
  ]
}

----------------------------------------------------------------------

[回到顶部](#英语学习系统)<div style="text-align:center"><br><br>⭐⭐⭐⭐⭐⭐⭐<br><br><br></div>



### thew_words

product: 产品
inventory: 库存
logistics: 物流
customer: 客户
order: 订单
payment: 付款
return: 退货
quality: 质量
brand: 品牌
market: 市场
promotion: 促销
warehouse: 仓库
   

将列出的单词，放到下面json对象的words数组中，作为数组元素，输出补充完整后的json对象

[
    {
        "sentence":"...",
        "words":[
            {英语单词作为键: 中文单词作为值}
        ]
    },
   
]


[回到顶部](#英语学习系统)
