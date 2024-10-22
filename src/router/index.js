/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router'
import BusInfo from '../views/BusInfoPage.vue'
import BusSearchResults from '../views/BusSearchResultsPage.vue'
import NaverMapView from '../views/MapTestPage/NaverMapView.vue'
import { NaverMap } from 'vue3-naver-maps'
import NaverLocationSearchView from '@/views/MapTestPage/NaverLocationSearchView.vue'
import OdisayAPITestView from '@/views/MapTestPage/OdisayAPITestView.vue'
import GeologicalAPITest from '@/views/MapTestPage/GeologicalAPITest.vue'
import odi from '@/views/MapTestPage/odi.vue'
import RouteSearchResultView from '@/views/MapTestPage/RouteSearchResultView.vue'
import KakaoAPIView from '@/views/MapTestPage/kakaoAPIView.vue'
import plus from '@/views/MapTestPage/plus.vue'
import Mobiletest from '@/views/MapTestPage/mobiletest.vue'

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
    path: '/odisay',
    name: 'odisayAPITestView',
    component: OdisayAPITestView
  },
  {
    path: '/geo',
    name: 'GeologicalAPITest',
    component: GeologicalAPITest
  },
  {
    path: '/odi',
    name: 'odi',
    component: odi
  },
  {
    path: '/route',
    name: 'RouteSearchResultView',
    component: RouteSearchResultView
  },
  {
    path: '/kakao',
    name: 'KakaoAPIView',
    component: KakaoAPIView
  },
  {
    path: '/plus',
    name: 'plus',
    component: plus
  },
  {
    path: '/mobile',
    name: 'mobiletest',
    component: Mobiletest
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
