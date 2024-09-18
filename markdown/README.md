

# 个人网站项目设计
1. [项目进度](#项目进度)
2. [项目结构](#项目结构)
3. [草图布局设计](#草图布局设计)
4. [markdown\_view\_page布局设计](#markdown_view_page布局设计)
5. [测量工具](#测量工具)
6. [布局样式库](#布局样式库)
7. [markdown转译文本库](#markdown转译文本库)
8. [search卡组筛选](#search卡组筛选)
9. [阅读跳转markdown预览](#阅读跳转markdown预览)



## 项目进度
1. 2.1版本
    * 根据数据动态渲染文档卡片
    * 项目结构的重构
    * 样式调整，页面结构优化
2. 设计草图 ✅
3. UI布局设计 ✅
4. html + css + javascrip完成前端 ✅
5. 数据后端因为内容不多，暂且选择json文件存储 ✅
6. 完成markdown文本转html的功能 ✅
7. 添加搜索功能 ✅
8. 后续添加修改markdown文档 ✅
9. 完成markdown文档预览 ❌
10. 数据动态渲染 ❌


[回到顶部](#个人网站项目设计)



## 项目结构
1. markdown
    * 存放markdown 页面文件，方便就地转换markdown，markdown直接调用相应的静态资源
    * 存放markdown文件
    * 存放markdwon对应的静态资源
    * 存放待整理的markdown文件
2. static：网页静态资源
    * js
        * index.js
        * markdown.js
        * hightlight.min.js
        * marked.min.js
    * css
        * bootstarp相关样式
        * header.css
        * footer.css
        * style.css
        * hightlight.css
        * resume.css
    * imgs
3. index首页页面
4. resume页面：简历页面




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


![markdown_image](./readme_imgs/index_layout.png)

[回到顶部](#个人网站项目设计)

## markdown_view_page布局设计
* header
* main
* footer

![markdown_image](./readme_imgs/markdown_content.png)

[回到顶部](#个人网站项目设计)

## 测量工具
pxcook

[回到顶部](#个人网站项目设计)

## 布局样式库
* bootstrap_reboot.min.css
* bootstrap_grid.min.css

[回到顶部](#个人网站项目设计)

## markdown转译文本库
* marked.min.js
* highlight.min.js

[回到顶部](#个人网站项目设计)

## search卡组筛选
input search监听input事件，改变卡组样式

[回到顶部](#个人网站项目设计)

## 阅读跳转markdown预览
存储相关值进localstorage，跳转到转译页面，根据localstorage的文件转译，提供相应的详细文件链接

[回到顶部](#个人网站项目设计)
