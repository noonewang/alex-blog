<script setup lang="ts">
import {useData} from 'vitepress'

const {title} = useData()
</script>

<template>
  <div class="comments">
    <component
        :is="'script'"
        :key="title"
        src="https://giscus.app/client.js"
        data-repo="noonewang/alex-blog"
        data-repo-id="R_kgDOJ-eT6w"
        data-category="Announcements"
        data-category-id="DIC_kwDOJ-eT684CYNEZ"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async
    />
  </div>
</template>