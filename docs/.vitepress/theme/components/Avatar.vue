<script setup lang="ts">
import {VPTeamMembers} from 'vitepress/theme'
import email from '../../../public/mail.svg?raw'

const members = [
  {
    links: [
      {
        icon: {svg: email},
        link: 'mailto:alexyuan0818@gmail.com'
      }
    ]
  }
]
</script>

<template>
  <VPTeamMembers size="small" :members="members"/>
</template>