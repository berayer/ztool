import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/** 挂载app视图 */
async function setupApp() {
  const app = createApp(App)
  app.mount('#app')
}

setupApp()
