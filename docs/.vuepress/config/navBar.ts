import information_layer from '../nav/1informationLayer'
import hardware_layer from '../nav/2hardwareLayer'
import programming_layer from '../nav/3programmingLayer'
import operating_layer from '../nav/4operatingLayer'
import applications_layer from '../nav/5applicationsLayer'
import communications_layer from '../nav/6communicationsLayer' 

const nav = [
    { text: '首页', link: '/' },
    { text: '导航站', link: '/navigation/' },
    // information_layer,
    // hardware_layer,
    programming_layer,
    // operating_layer,
    // applications_layer,
    // communications_layer,
    {
      text: '编程题', 
      link: '/menu/acm/',
      items: [
        { text: 'UVA', link: '/acm/uva/'},
      ], 
    },
    {
      text: '读书笔记',
      link: '/reading-notes/',
      items: [
        { text: '《Go Web编程》', link: '/menu/go-web/' },
        { text: '《算法精粹 经典计算机科学问题的Python实现》', link: '/menu/classic-problems-in-python/' },
      ],
    },
    {
      text: '更多',
      link: '/more/',
      items: [
        { text: '学习', link: '/pages/a92a13/' },
        { text: '博客搭建', link: '/pages/12b909/' },
        // { text: '面试', link: '/pages/aea6571b7a8bae86/' },
        // { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
        // { text: '实用技巧', link: '/pages/baaa02/' },
        // { text: '友情链接', link: '/friends/' },
      ],
    },
    // { text: '关于', link: '/about/' },
    // { text: '收藏', link: '/pages/beb6c0bd8a66cea6/' },
    {
      text: '索引',
      link: '/archives/',
      items: [
        { 
            text: '本站',
            items: [
              { text: '分类', link: '/categories/' },
              { text: '标签', link: '/tags/' },
              { text: '归档', link: '/archives/' },
            ]
        },
        {
            text: '我的',
            items: [
                { text: '收藏', link: '/pages/beb6c0bd8a66cea6/' },
                { text: '关于', link: '/about/website/introduce/' },
            ]
        },
      ],
    },
];

export default nav