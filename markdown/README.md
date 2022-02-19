

# blog设计思路
1. [草图布局设计](#草图布局设计)
2. [markdown_view_page布局设计](#markdown_view_page布局设计)
3. [测量工具](#测量工具)
4. [布局样式库](#布局样式库)
5. [markdown转译文本库](#markdown转译文本库)
6. [search卡组筛选](#search卡组筛选)
7. [阅读跳转markdown预览](#阅读跳转markdown预览)


## 草图布局设计
* header
    * logo
    * website_name

* search
    * input
    * search_button_icon
    * home_text

* main
    * 3 card in a row

* footer
    * github_img gitee_img google
    * program_img: children_program_link front_program_link ske_program_link
    * copyright liuyaohui 2022. All Rights Reserverd


![iamge](./images/index_layout.png)

[回到顶部](#blog设计思路)

## markdown_view_page布局设计
* header
* main
* footer

![image](./images/markdown_content.png)

[回到顶部](#blog设计思路)

## 测量工具
pxcook

[回到顶部](#blog设计思路)

## 布局样式库
* bootstrap_reboot.min.css
* bootstrap_grid.min.css

[回到顶部](#blog设计思路)

## markdown转译文本库
* marked.min.js
* highlight.min.js

[回到顶部](#blog设计思路)

## search卡组筛选
input search监听input事件，改变卡组样式

[回到顶部](#blog设计思路)

## 阅读跳转markdown预览
存储相关值进localstorage，跳转到转译页面，根据localstorage的文件转译，提供相应的详细文件链接

[回到顶部](#blog设计思路)
