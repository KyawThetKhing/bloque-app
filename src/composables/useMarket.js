import { ref } from 'vue'

export const useMarket = () => {
  const marketItems = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchMarketItems = async () => {
    try {
      error.value = null
      loading.value = true
      const response = await fetch(`${import.meta.env.VITE_API_URL}/market`)
      const data = await response.json()
      if (data.error) {
        throw new Error(data)
      }
      marketItems.value = data.items
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  fetchMarketItems()

  return {
    marketItems,
    loading,
    error,
    fetchMarketItems,
  }
}
