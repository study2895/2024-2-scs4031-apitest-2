/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router'
import BusInfo from '../views/BusInfoPage.vue'
import BusSearchResults from '../views/BusSearchResultsPage.vue'
import NaverMapView from '../views/NaverMapView.vue'
import { NaverMap } from 'vue3-naver-maps'
import NaverLocationSearchView from '@/views/NaverLocationSearchView.vue'

const routes = [
  {
    path: '/',
    name: 'BusInfoPage',
    component: BusInfo
  },
  {
    path: '/search',
    name: 'BusSearchResults',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/BusSearchResultsPage.vue'
      )
  },
  {
    path: '/map',
    name: 'NaverMapView',
    component: NaverMapView
  },
  {
    path: '/location',
    name: 'NaverLocationSearchView',
    component: NaverLocationSearchView
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/auth/signin' // 잘못된 경로는 로그인 페이지로 리다이렉트
  }

  //{ path: '*', component: NotFoundPage } // 404 페이지 처리 (활성화 필요시)
]

const router = createRouter({
  history: createWebHashHistory('/busmiri/'), // Hash 모드를 사용
  routes
})

export default router
