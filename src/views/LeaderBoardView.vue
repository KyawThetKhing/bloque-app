<script setup>
//local imports
import LeaderBoardSkeleton from '@/components/LeaderBoardSkeleton.vue'
import LegendTable from '@/components/LegendTable.vue'
import LeaderBoard from '@/components/LeaderBoard.vue'
import { useLeaderBoard } from '@/composables/useLeaderBoard'

const { legends, loading, error, search, filteredPlayers, fetchLeaderboard } = useLeaderBoard()
</script>

<template>
  <div class="mx-auto max-w-3xl p-4">
    <h1 class="mb-6 text-center text-3xl font-bold">🏆 Leaderboard</h1>

    <!-- Error Section -->
    <template v-if="error">
      <div class="mb-4 rounded-xl border-2 border-red-500 bg-white p-8 shadow-md">
        <p class="text-red-500">Error in fetching leaderboard: Please try again later</p>
      </div>
    </template>

    <!-- Loading Section-->
    <template v-else-if="loading">
      <LeaderBoardSkeleton />
    </template>

    <!-- UI Section-->
    <template v-else>
      <LegendTable :legends="legends" />

      <div class="mb-4 flex flex-col gap-4 lg:flex-row">
        <input
          type="text"
          v-model="search"
          placeholder="Search by player name"
          class="flex-1 rounded-xl border border-gray-200 px-4 py-2"
        />
        <button class="rounded-xl bg-blue-500 px-4 py-2 text-white" @click="fetchLeaderboard">
          Refresh
        </button>
      </div>
      <LeaderBoard :filteredPlayers="filteredPlayers" />
    </template>
  </div>
</template>
