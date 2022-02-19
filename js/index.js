
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

// handle link click in main
const link_obj = {
    '0': {
        'file_path': './README.md',
        'address': '../index.html',
    },
    '1': {
        'file_path': './children_program.md',
        'address': 'https://gitee.com/liuyaohui96/children_program',
    },
    '2': {
        'file_path': './program_summary.md',
        'address': 'https://gitee.com/liuyaohui96/program_summary',
    },
    '3': {
        'file_path': './ske_program.md',
        'address': 'https://gitee.com/liuyaohui96/share_knowledge_everywhere',
    },
    '4': {
        'file_path': './chengyu_game.md',
        'address': 'https://gitee.com/liuyaohui96/children_program/blob/master/scratch/%E6%A1%88%E4%BE%8B/3%E6%98%9F%E6%A1%88%E5%88%97-1%E6%88%90%E8%AF%AD%E5%A1%AB%E7%A9%BA%E6%B8%B8%E6%88%8F.md',
    },
    '5': {
        'file_path': './xingqiu_game.md',
        'address': 'https://gitee.com/liuyaohui96/children_program/blob/master/scratch/%E6%A1%88%E4%BE%8B/3%E6%98%9F%E6%A1%88%E5%88%97-%E6%98%9F%E7%90%83%E5%A4%A7%E6%88%98.md',
    },
}
const links = document.querySelectorAll('main a');

links.forEach(link => {
    link.addEventListener('click', function(e){
        let obj = link_obj[e.target.getAttribute('number')];
        localStorage.setItem('file_path', obj.file_path);
        localStorage.setItem('address', obj.address);
    })
})