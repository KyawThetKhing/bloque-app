<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <main class="w-full">
    <Navbar />
    <RouterView />
  </main>
</template>
