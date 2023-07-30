import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "alex's blog",
    description: "something should be remember",
    themeConfig: {
        logo: '/images/avatar.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Life', link: '/posts/know_nothing'},
            {text: 'Code', link: '/posts/know_nothing'}
        ],

        // sidebar: [
        //   {
        //     text: 'Examples',
        //     items: [
        //       { text: 'Markdown Examples', link: '/posts/markdown-examples' },
        //       { text: 'Runtime API Examples', link: '/posts/api-examples' }
        //     ]
        //   }
        // ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/noonewang/alex-blog'}
        ],

        search: {
            provider: 'local'
        },
        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2019-present <a href="https://github.com/noonewang">Alex Wang</a>'
        },
    },
    markdown: {
        lineNumbers: true
    },
    cleanUrls: true,
    lastUpdated: true,
    // 切换主题按钮
    // appearance: false,
    head: [
        [
            'link',
            {rel: 'icon', href: '/images/avatar.svg'}
        ],
        [
            'style',
            {},
            `@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');`
        ],
    ]
})
