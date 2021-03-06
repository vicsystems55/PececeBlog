import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Post from '../views/Post.vue'

import Posts from '../views/Posts.vue'

import Postx from '../views/Posts.vue'

import Profile from '../views/Profile.vue'

import Login from '../views/Login.vue'

import Register from '../views/Register.vue'

const routes = [
  
  {
    path: '/',
    name: 'Postx',
    component: Postx
  },
  
  {
    path: '/h',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  },

  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
