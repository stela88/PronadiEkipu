import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import('../views/profil.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/Drustvene_igre',
    name: 'Drustvene_igre',
    component: () => import('../views/Drustvene_igre.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/Vanjske_aktivnosti',
    name: 'Vanjske_aktivnosti',
    component: () => import('../views/Vanjske_aktivnosti.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/Cuganja',
    name: 'Cuganja',
    component: () => import('../views/Cuganja.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/Sportovi',
    name: 'Sportovi',
    component: () => import('../views/Sportovi.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/Online',
    name: 'Online',
    component: () => import('../views/Online.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/Naslovna',
    name: 'Naslovna',
    component: () => import('../views/Naslovna.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/PostForm',
    name: 'PostForm',
    component: () => import('../views/PostForm.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/',
    name: 'Pocetna',
    component: () => import('../views/Pocetna.vue')

  },
  {
    path: '/Sort',
    name: 'Sort',
    component: () => import('../views/Sort.vue')
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("Stara ruta", from.name, " -> ", to.name, "korisnik", store.currentUser)

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    next('Pocetna');
  }
  else {
    next();
  }

});



export default router;
