import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Students from '../views/Students.vue'
import Courses from '../views/Courses.vue'
import Profile from '../views/Profile.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/students', component: Students },
  { path: '/courses', component: Courses },
  { path: '/profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
