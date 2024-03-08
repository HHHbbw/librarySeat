import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ReservationPage from '@/components/ReservationPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: ReservationPage
    }
    // ...其他路由
  ]
})
