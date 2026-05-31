// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h, watch, nextTick } from 'vue'
import './style/index.css'
import 'virtual:group-icons.css'
import Linkcard from './components/Linkcard.vue'
import { NProgress } from 'nprogress-v2/dist/index.js'
import 'nprogress-v2/dist/index.css'
import { useRoute, inBrowser } from 'vitepress'
import DataPanel from './components/DataPanel.vue'
import HomeUnderline from './components/HomeUnderline.vue'
import Confetti from './components/Confetti.vue'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,

  // 1. 插槽：所有 doc 末尾，只插 <div class="giscus"></div>
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h('div', {
        class: 'giscus',
        style: 'margin-top:40px;padding-top:20px;border-top:1px solid var(--vp-c-divider)'
      })
    })
  },

  enhanceApp({ app, router }) {
    app.component('DataPanel', DataPanel)
    app.component('Linkcard', Linkcard)
    app.component('HomeUnderline', HomeUnderline)
    app.component('confetti', Confetti)

    // 彩虹背景
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true }
      )
    }

    if (inBrowser) {
      // 进度条（修复弃用）
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => NProgress.start()
      router.onAfterRouteChange = () => {
        NProgress.done()
        // 2. 路由切完、DOM 就绪 → 清空容器、让 giscus 重新挂载
        nextTick(() => refreshGiscus())
      }
    }
  }
} satisfies Theme

// ✅ 只清空容器、不移除任何 script！
function refreshGiscus() {
  if (!inBrowser) return
  const container = document.querySelector('.giscus')
  if (!container) return
  // 清空旧评论iframe，不删 script
  container.innerHTML = ''
  // giscus 会自动找 .giscus 并挂载（脚本已在页面、无需重加载）
}

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return
    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `:root { animation: rainbow 12s linear infinite; }`
    document.body.appendChild(homePageStyle)
  } else {
    homePageStyle?.remove()
    homePageStyle = undefined
  }
}