<script setup>
import CardSkeleton from './CardSkeleton.vue'
import Skeleton from './Skeleton.vue'
</script>

<template>
  <CardSkeleton>
    <div class="mb-6 flex flex-row justify-between gap-4">
      <Skeleton className="h-6 w-[20%]" />
      <Skeleton className="h-6 w-[40%]" />
      <Skeleton className="h-6 w-[40%]" />
    </div>
    <div class="mb-6 flex flex-row justify-between gap-4">
      <Skeleton className="h-6 w-[20%]" />
      <Skeleton className="h-6 w-[40%]" />
      <Skeleton className="h-6 w-[40%]" />
    </div>
    <div class="mb-6 flex flex-row justify-between gap-4">
      <Skeleton className="h-6 w-[20%]" />
      <Skeleton className="h-6 w-[40%]" />
      <Skeleton className="h-6 w-[40%]" />
    </div>
    <div class="mb-6 flex flex-row justify-between gap-4">
      <Skeleton className="h-6 w-[20%]" />
      <Skeleton className="h-6 w-[40%]" />
      <Skeleton className="h-6 w-[40%]" />
    </div>
    <div class="mb-6 flex flex-row justify-between gap-4">
      <Skeleton className="h-6 w-[20%]" />
      <Skeleton className="h-6 w-[40%]" />
      <Skeleton className="h-6 w-[40%]" />
    </div>
  </CardSkeleton>
  <div class="lg:flex-row<template> <div> </div> </template> mb-4 flex flex-col gap-4">
    <Skeleton className=" h-8 w-full lg:w-3/4" />
    <Skeleton className=" h-8 w-full lg:w-1/4" />
  </div>
  <CardSkeleton v-for="n in 10" :key="n">
    <div class="flex flex-row gap-4">
      <div class="flex w-1/12 items-center justify-center">
        <Skeleton className="h-6 w-6" />
      </div>

      <div class="w-11/12 space-y-2">
        <div class="flex items-center justify-between">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-6 w-16 " />
        </div>

        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  </CardSkeleton>
</template>
