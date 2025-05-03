<script setup>
defineProps({
  className: {
    type: String,
    default: 'h-4 w-32',
  },
})
</script>

<template>
  <div :class="className" class="animate-pulse rounded bg-slate-200"></div>
</template>
