const path = require('path');

module.exports = {
  title: 'fool UI',
  description: '一个拟态风格的 UI 组件库',
  base: '/Fool-docs/',
  themeConfig: {
    // displayAllHeaders: true, // 默认值：false
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/spec/' },
      { text: 'GitHub', link: 'https://github.com/Fool-Team/Fool-UI' },
    ],
    sidebar: {
      '/guide/': [
        '',
        'guide',
      ],
      '/spec/': [
        'button-zh-CN',
        'icon-zh-CN',
        'layout-zh-CN',
        'carousel-zh-CN',
        'card-zh-CN',
      ],
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@docs': path.resolve(__dirname, '/docs/'),
      }
    }
  }
}