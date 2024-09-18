// 得到一个在当前时间之前 7 天内的随机日期，并返回这个日期的年、月、日信息
function getRandomDateInLastSevenDays() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const maxDayDiff = 6;
  const randomDayDiff = Math.floor(Math.random() * (maxDayDiff + 1));
  const randomDate = new Date(currentDate.getTime() - randomDayDiff * 24 * 60 * 60 * 1000);
  return {
    year: year,
    month: month,
    day: randomDate.getDate()
  };
}


// 每个card_list内有若干list
// 每个list作为一行，每一行（row）有三个card
const card_list = [
  // row
  [
    {
      "card_header": "建站方案",
      "card_title": "1.0 版本",
      "card_paragraph": "关于建站方案1.0的初步方案",
      "card_link_button": "阅读建站方案",
      "card_file_path": "./README.md",
      "card_address": "../index.html"
    },
    {
      "card_header": "python 文档",
      "card_title": "python编程",
      "card_paragraph": "简介，基本语法，内置数据类型，函数，类，模块，迭代器和生成器，异常等",
      "card_link_button": "阅读 python 文档",
      "card_file_path": "./python_docs.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/docs/tree/master/python"
    },
    {
      "card_header": "scratch 文档",
      "card_title": "scratch 编程",
      "card_paragraph": "界面，舞台，角色，脚本，案例等",
      "card_link_button": "阅读 scratch 文档",
      "card_file_path": "./scratch_docs.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/docs/tree/master/图形化编程-scratch"
    }
  ],
  // end row

  //second row start
  [
    {
      "card_header": "编程笔记汇总",
      "card_title": "编程笔记整理相关",
      "card_paragraph": "文档进度，文档结构，项目规范，编程学习路线，编程学习顺序等",
      "card_link_button": "阅读编程笔记汇总",
      "card_file_path": "./program_docs.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/docs"
    },
    {
      "card_header": "知识分享网站的构建",
      "card_title": "2.0 版本",
      "card_paragraph": "Vue + Koa + mongoose 前后端分离知识分享网站项目",
      "card_link_button": "阅读知识分享网站设计文档",
      "card_file_path": "./share_knowledge_everywhere.md",
      "card_address": "https://gitee.com/liuyaohui96/share_knowledge_everywhere"
    },
    {
      "card_header": "英语学习系统",
      "card_title": "1.1版本",
      "card_paragraph": "卡片式英语情景对话，英语单词学习等",
      "card_link_button": "阅读英语学习系统设计文档",
      "card_file_path": "./penglish_learning_system.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/english_learning_system"
    }
  ],
  // end second row


   // third row start
   [
    {
      "card_header": "html文档",
      "card_title": "html基础",
      "card_paragraph": "html 各标签的介绍",
      "card_link_button": "阅读 html 文档",
      "card_file_path": "./html_docs.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/docs/tree/master/02%E5%89%8D%E7%AB%AF-html"
    },
    {
      "card_header": "css 文档",
      "card_title": "css基础",
      "card_paragraph": "css选择器，布局属性，盒子属性，背景属性，文本属性，特定元素的属性等等",
      "card_link_button": "阅读 css 文档",
      "card_file_path": "./css_docs.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/docs/tree/master/02前端-css"
    },
    {
      "card_header": "javascript 文档",
      "card_title": "javascript 基础",
      "card_paragraph": "变量，基本数据类型，对象，数组，函数，类，模块，迭代器和生成器等",
      "card_link_button": "阅读 javascript 文档",
      "card_file_path": "./javascript_docs.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/docs/tree/master/02前端-javascript"
    },
  ],
  // end third row



  // fourth row start
  [
    {
      "card_header": "成语接龙游戏",
      "card_title": "游戏实现概述",
      "card_paragraph": "scratch成语接龙游戏实现的对象分析，模块分析等",
      "card_link_button": "阅读成语接龙游戏的实现",
      "card_file_path": "./chengyu_game.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/docs/tree/master/05题解-编程"
    },
    {
      "card_header": "星球大战游戏",
      "card_title": "星球大战游戏",
      "card_paragraph": "cscratch 星球大战游戏的对象分析，模块分析等",
      "card_link_button": "阅读星球大战游戏实现",
      "card_file_path": "./xingqiu_game.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/docs/tree/master/05题解-编程"
    },
    {
      "card_header": "儿童编程",
      "card_title": "儿童编程",
      "card_paragraph": "Scratch，wedo2.0，ev3，python等相关",
      "card_link_button": "阅读儿童编程",
      "card_file_path": "./children_program.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/docs/tree/master/05题解-青少年编程竞赛"
    },
  ],
  // end fourth row



  // fifth row start
  [
    {
      "card_header": "typescript 文档",
      "card_title": "typescript 基础",
      "card_paragraph": "基本类型，any，unknow，type关键字，接口，函数，类等的类型约束等",
      "card_link_button": "阅读 typescript 文档",
      "card_file_path": "./typescript_docs.md",
      "card_address": "https://gitee.com/liuyaohui96_admin/docs/tree/master/02前端-javascript"
    },
  ]
  // end fifth row


]


const main = document.querySelector('main')
// 根据card_list创建html结构
card_list.forEach(cards => {
  // 创建行容器
  const row = document.createElement('div');
  row.className = "row justify-content-center";

  // 迭代cards
  cards.forEach(card => {
    // card_header = card['card_header'];
    // card_title = card['card_title']; 
    // card_paragraph = card['card_paragraph'];
    // card_link_button = card['card_link_button'];
    // card_file_path = card['card_file_path'];
    // card_address = card['card_address'];


    // 创建最外层的列元素
    const colElement = document.createElement('div');
    colElement.classList.add('col-lg-3');

    // 创建卡片元素
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // 创建卡片头部
    const cardHeader = document.createElement('h5');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = card['card_header'];

    // 创建卡片主体
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.textContent = card['card_title'];

    const cardParagraph = document.createElement('p');
    cardParagraph.textContent = card['card_paragraph'];;

    const cardLink = document.createElement('a');
    cardLink.href = './markdown/markdown.html';
    cardLink.target = '_blank';
    cardLink.classList.add('btn');
    cardLink.textContent = card['card_link_button'];

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardParagraph);
    cardBody.appendChild(cardLink);
    // end cardBody

    // 创建卡片底部
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    const year = getRandomDateInLastSevenDays().year;
    const month = getRandomDateInLastSevenDays().month;
    const day = getRandomDateInLastSevenDays().day;
    cardFooter.textContent = `Author: liuyaohui Time:${year}/${month}/${day}`;
    // 将各个部分组合起来
    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardBody);
    cardDiv.appendChild(cardFooter);

    colElement.appendChild(cardDiv);

    // 把card加入row中
    row.appendChild(colElement)

    // 当点击link的时候 设置localStorage的file_path,address
    // 这样跳转到markdown.html，就可以获取对应的数据
    cardLink.addEventListener("click", () => {
      localStorage.setItem("file_path", card["card_file_path"])
      localStorage.setItem("address", card["card_address"])
    })
  })

  // 把row加入card中
  main.appendChild(row)
  console.log(main)
  console.log(row)

})



// handler input for search
const search_input = document.querySelector('input');
const cards = document.querySelectorAll('main>.row>div');

search_input.addEventListener('input', function (e) {
  cards.forEach(card => {
    card_header = card.querySelector('.card-header').innerHTML;
    if (e.target.value == '') {
      card.setAttribute('class', 'col-lg-3');
    } else if (!card_header.includes(e.target.value)) {
      card.setAttribute('class', 'col-lg-3 d-none');
    } else {
      card.setAttribute('class', 'col-lg-3 card-search');
    }
  });
});
// end 处理搜索input






// // handle link click in main
// const link_list = [
//   {
//     'file_path': './README.md',
//     'address': '../index.html',
//   },
//   {
//     'file_path': './python_docs.md',
//     'address': 'https://gitee.com/liuyaohui96_admin/docs/tree/master/python',
//   },
//   {
//     'file_path': './children_program.md',
//     'address': 'https://gitee.com/liuyaohui96_admin/docs/tree/master/儿童编程',
//   },

//   // ===
//   {
//     'file_path': './javascript_docs.md',
//     'address': 'https://gitee.com/liuyaohui96/program_summary',
//   },
//   {
//     'file_path': './html_docs.md',
//     'address': 'https://gitee.com/liuyaohui96/program_summary',
//   },
//   {
//     'file_path': './css_docs.md',
//     'address': 'https://gitee.com/liuyaohui96/program_summary',
//   },
//   // ===
//   {
//     'file_path': './ske_program.md',
//     'address': 'https://gitee.com/liuyaohui96/share_knowledge_everywhere',
//   },
//   {
//     'file_path': './chengyu_game.md',
//     'address': 'https://gitee.com/liuyaohui96/children_program/blob/master/scratch/%E6%A1%88%E4%BE%8B/3%E6%98%9F%E6%A1%88%E5%88%97-1%E6%88%90%E8%AF%AD%E5%A1%AB%E7%A9%BA%E6%B8%B8%E6%88%8F.md',
//   },
//   {
//     'file_path': './xingqiu_game.md',
//     'address': 'https://gitee.com/liuyaohui96/children_program/blob/master/scratch/%E6%A1%88%E4%BE%8B/3%E6%98%9F%E6%A1%88%E5%88%97-%E6%98%9F%E7%90%83%E5%A4%A7%E6%88%98.md',
//   },
//   // ===
//   {
//     'file_path': './regular_expression_docs.md',
//     'address': 'https://gitee.com/liuyaohui96_admin/docs',
//   },
//   {
//     'file_path': './编程学习路线.md',
//     'address': 'https://gitee.com/liuyaohui96_admin/docs/blob/master/编程学习路线.md',
//   },
//   {
//     'file_path': './typescript_docs.md',
//     'address': 'https://gitee.com/liuyaohui96_admin/docs',
//   },
//   //===
//   {
//     'file_path': './vue_docs.md',
//     'address': 'https://gitee.com/liuyaohui96_admin/docs',
//   },
//   {
//     'file_path': './vue_options_api.md',
//     'address': 'https://gitee.com/liuyaohui96_admin/docs',
//   },
//   {
//     'file_path': './vue_composition_api.md',
//     'address': 'https://gitee.com/liuyaohui96_admin/docs',
//   },

// ]
// const links = document.querySelectorAll('main a');

// links.forEach((link, index) => {
//   link.addEventListener('click', function (e) {
//     let obj = link_list[index];
//     localStorage.setItem('file_path', obj.file_path);
//     localStorage.setItem('address', obj.address);
//   })
// })