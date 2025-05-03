<script setup>
//local imports
import CardSkeleton from '@/components/CardSkeleton.vue'
import Skeleton from '@/components/Skeleton.vue'
</script>

<template>
  <CardSkeleton v-for="n in 10" :key="n">
    <div class="w-11/12 space-y-2">
      <div class="flex items-center justify-between">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-6 w-16 " />
      </div>

      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-2/3" />
      <Skeleton className="h-3 w-24" />
    </div>
  </CardSkeleton>
</template>
