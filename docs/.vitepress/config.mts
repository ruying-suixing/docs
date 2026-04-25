// .vitepress/config.js
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon32.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.ico' }],
    [
      'script',
      {
        async: "true",
        src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
      }
    ],
    [
      'script',
      {
        defer: "true",
        src: 'https://cloud.umami.is/script.js',
        'data-website-id': 'a4147137-b65f-405e-9062-d777fe7253ca'
      }
    ]
  ],
  title: '如形の文档',
  description: '为 OIer 们提供宝贵的建站经验和更加广阔的平台。',
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  sitemap: {
    hostname: 'https://docs.rusin.dpdns.org'
  },
  themeConfig: {
    logo: 'https://cdn.luogu.com.cn/upload/usericon/1620655.png',
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '指南', 
        items: [
          { text: '介绍',link: '/guide/quickly-start' },
          { text: '学习',link: '/learn/intro'}
        ]
      },
      { 
        text: '更多',
        link: 'https://ruying-suixing.github.io/'
      }
    ],
    sidebar: [
        {
          text: '咕链',
          items: [
            {text: '加入我们', link: '/gugo/join'}
          ]
        },
        {
          text: '学习',
          items: [
            {text: '美化博客', link: '/learn/intro'}
          ]
        },
        {
          text: '其它',
          items: [
            {text: '示例文档', link: '/hello-docs'}
          ]
        }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ruying-suixing' }
    ],
    footer: {
      message: '文档持续更新中……',
      copyright: 'Copyright © 2026 <a href="https://github.com/ruying-suixing">ruying-suixing</a>'
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [1,3],
      label: "页面导航"
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    docFooter: {
			prev: '上一页',
			next: '下一页',
		}
  },

  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./.vitepress/theme/style/vars.css";`
        }
      }
    },
    plugins: [
      groupIconVitePlugin()
    ],
  },
  markdown: {
    math: true,
    image: {
      lazyLoading: true
    },
    codeTransformers: [
      {
        postprocess(code) {
          return code
            .replaceAll('[!!code', '[!code')
            .replaceAll('@@include', '@include')
        }
      }
    ],
    config(md) {
      const defaultFence = md.renderer.rules.fence;
      md.use(groupIconMdPlugin as any);
      if (!md.renderer.rules.fence) {
        md.renderer.rules.fence = defaultFence;
      }
    }
  },
})