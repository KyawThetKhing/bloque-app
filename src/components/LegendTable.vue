<script setup>
defineProps({
  legends: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <table class="mb-6 w-full table-auto border-collapse border border-slate-500">
    <thead>
      <tr class="text-left">
        <th class="border border-slate-200 px-4 py-2">Range</th>
        <th class="border border-slate-200 px-4 py-2">Representation</th>
        <th class="border border-slate-200 px-4 py-2">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(legend, index) in legends" :key="index" class="text-left">
        <td class="border border-slate-200 px-4 py-2">{{ legend.range }}</td>
        <td class="border border-slate-200 px-4 py-2">{{ legend.representation }}</td>
        <td class="border border-slate-200 px-4 py-2">{{ legend.example }}</td>
      </tr>
    </tbody>
  </table>
</template>
