import router from '@/router'
import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

createApp(App).use(router).mount('#app')
