import { ref, computed } from 'vue'

export const useLeaderBoard = () => {
  const players = ref([])
  const legends = ref([])
  const loading = ref(true)
  const error = ref(null)
  const search = ref('')

  const fetchLeaderboard = async () => {
    try {
      players.value = []
      legends.value = []
      search.value = ''
      error.value = null
      loading.value = true
      const response = await fetch(`${import.meta.env.VITE_API_URL}/leaderboard`)
      const data = await response.json()
      if (data.error) {
        throw new Error(data)
      }
      players.value = data.players
      legends.value = data.legend.tiers
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  const filteredPlayers = computed(() => {
    if (!search.value) {
      return players.value
    }
    return players.value.filter((player) =>
      player.username.toLowerCase().includes(search.value.toLowerCase()),
    )
  })

  fetchLeaderboard()

  return {
    players,
    legends,
    loading,
    error,
    search,
    filteredPlayers,
    fetchLeaderboard,
  }
}
