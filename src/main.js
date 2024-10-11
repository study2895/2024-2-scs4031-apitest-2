import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/styles/global.css'
import { createNaverMap } from 'vue3-naver-maps'

// Vue 앱 생성
const app = createApp(App)

// 네이버 지도 설정
app.use(createNaverMap, {
  clientId: 'z8tyyw77g6',
  category: 'ncp',
  subModules: []
})

// Vue 라우터 및 Vuex 스토어 사용
app.use(router)
app.use(store)

// 앱 마운트
app.mount('#app')
