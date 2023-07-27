import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "alex's blog",
  description: "something should be remember",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Life', link: '/blog/know_nothing' },
      { text: 'Code', link: '/blog/know_nothing' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/blog/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/blog/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/noonewang' }
    ],

    search: {
      provider: 'local'
    }
  },
  markdown: {
    lineNumbers: true
  },
  head: [
      [
        'link',
        {rel: 'icon', href: '/golang.png'}
      ],
      [
        'link',
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'}
      ],
      [
        'link',
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
      ],
      [
        'link',
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'},
      ],
  ]
})
