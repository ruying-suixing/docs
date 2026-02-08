 import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点基础路径，必须和 GitHub Pages 的子路径一致
  base: '/docs/', 
  // 站点标题和描述
  title: '我的文档站点',
  description: '使用 VitePress 搭建的文档站点',
  
  // 主题配置（复刻参考站点的基础样式/导航结构）
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/docs/guide' },
      { text: 'API 参考', link: '/docs/api' }
    ],
    // 侧边栏配置
    sidebar: {
      '/docs/': [
        {
          text: '快速开始',
          items: [
            { text: '介绍', link: '/docs/guide/intro' },
            { text: '安装', link: '/docs/guide/install' }
          ]
        },
        {
          text: 'API',
          items: [
            { text: '基础 API', link: '/docs/api/basic' }
          ]
        }
      ]
    },
    // 其他主题配置（可参考 VitePress 文档扩展）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ruying-suixing' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present ruying-suixing'
    }
  },
  
  // 构建配置
  build: {
    // 输出目录（默认是 docs/.vitepress/dist）
    outDir: '../dist'
  }
})