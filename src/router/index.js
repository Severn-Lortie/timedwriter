import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  auth
} from '../main';

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/timeup',
    component: () => import('../views/SaveScreen')
  },
  {
    path: '/admin',
    component: () => import('../views/Admin'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: () => import('../views/Login'),
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = (auth.currentUser !== null);

    if (requiresAuth && !currentUser) {
      next('/login');
    } else if (requiresAuth && currentUser) {
      next();
    } else {
      next();
    }

});


export default router