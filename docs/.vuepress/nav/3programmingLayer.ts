const programming_layer = {
    text: '程序设计层',
    link: '/programming-layer/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '编程语言',
        items: [
          { text: 'Python', link: '/menu/python/' },
        ]
      },
      { 
        text: '数据结构与算法', 
        link: '/menu/algorithms/',
        items: [
        ]
      },
      { text: '设计模式', link: '/menu/design-patterns/' },
    ],
};

export default programming_layer