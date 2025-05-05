import { createApp } from 'vue'
import { registerSW } from 'virtual:pwa-register'

import App from '@/App.vue'
import router from '@/router'
import progressBar from '@/includes/progressBar'
import '@/assets/main.css'
import 'nprogress/nprogress.css'

progressBar(router)
registerSW({
  immediate: true,
})
const app = createApp(App)

app.use(router)

app.mount('#app')
