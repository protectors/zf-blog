import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'


const head:VdoingThemeConfig['head'] = [
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '个人博客',} ],
    ['meta', { name: 'baidu-site-verification', content: 'code-kcm6hJ1aIJ' }], // 百度统计的站长验证
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],  // 解决chrome网站统计不准确问题
    ['meta', { name: 'google-site-verification', content: '3qdyWyOJbTVxb80J6PzGhxq4Hj-S8doiAlYfLvv37ko'}],
  ];

export default head
