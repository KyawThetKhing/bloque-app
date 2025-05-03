<script setup>
//local imports
import MarketSkeleton from '@/components/MarketSkeleton.vue'
import { useMarket } from '@/composables/useMarket'

const { marketItems, loading, error } = useMarket()
</script>

<template>
  <div class="mx-auto max-w-3xl p-4">
    <h1 class="mb-6 text-center text-3xl font-bold">🎁 Market Items</h1>

    <!-- Error Section -->
    <template v-if="error">
      <div class="mb-4 rounded-xl border-2 border-red-500 bg-white p-8 shadow-md">
        <p class="text-red-500">Error in fetching market items: Please try again later</p>
      </div>
    </template>

    <!-- Loading Section-->
    <template v-else-if="loading">
      <MarketSkeleton />
    </template>

    <!-- UI Section-->
    <template v-else>
      <div
        v-for="item in marketItems"
        :key="item.id"
        class="mb-4 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-md transition duration-300 hover:shadow-xl"
      >
        <div class="flex flex-row justify-between gap-4">
          <p class="text-lg font-bold">{{ item.name }}</p>
          <p class="text-lg text-amber-500">{{ item.cost }}</p>
        </div>
        <p class="text-md text-blue-500">{{ item.description }}</p>
      </div>
    </template>
  </div>
</template>
