<script setup>
import { ref } from 'vue'

const navItems = ref([
  { name: 'Leader Board', link: '/' },
  { name: 'Market', link: '/market' },
])
</script>

<template>
  <nav class="flex w-full flex-row gap-4 bg-gray-900 p-4 text-white">
    <div v-for="(item, index) in navItems" :key="index" class="flex items-center rounded-sm p-4">
      <RouterLink
        :to="item.link"
        class="font-bold text-white hover:text-blue-500 hover:underline hover:underline-offset-4"
        activeClass="text-blue-500 underline underline-offset-4"
        exactActiveClass="text-blue-500 underline underline-offset-4"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</template>
