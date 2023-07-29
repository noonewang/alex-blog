// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
// @ts-ignore
import Layout from './components/Layout.vue'
import './style.css'

export default {
  extends: Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
