<script setup>
defineProps({
  filteredPlayers: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div v-if="filteredPlayers.length">
    <div
      v-for="player in filteredPlayers"
      :key="player.username"
      class="mb-4 flex flex-row gap-4 rounded-xl bg-white p-4 shadow-md transition duration-300 hover:shadow-xl"
      :class="player.isInfected ? 'border-2 border-red-500' : 'border border-gray-200'"
    >
      <div class="flex w-1/12 items-center justify-center space-x-2">
        <span class="text-3xl font-bold">
          <span v-if="player.rank === 1" class="w-[30px] text-5xl">🥇</span>
          <span v-else-if="player.rank === 2" class="w-[30px] text-5xl">🥈</span>
          <span v-else-if="player.rank === 3" class="w-[30px] text-5xl">🥉</span>
          <span v-else class="w-[30px] text-3xl">{{ player.rank }}</span>
        </span>
      </div>
      <div class="w-11/12">
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-md font-bold">{{ player.username }}</span>
          </div>
          <div class="text-3xl">{{ player.fishEmojis }}</div>
        </div>

        <div class="text-lg font-bold text-blue-700">
          Level {{ player.level }} • XP: {{ player.xp }} • Gold: {{ player.gold }}
        </div>
        <div class="mt-1 text-sm italic text-blue-400">"{{ player.emojiDescription }}"</div>

        <div v-if="player.isInfected" class="mt-2 text-sm font-bold text-red-600">⚠️ Infected!</div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="mb-4 rounded-xl border-gray-300 bg-white p-8 shadow-md">
      <p class="text-xl text-gray-500">No players found!!</p>
    </div>
  </div>
</template>
