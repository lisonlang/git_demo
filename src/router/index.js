import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Messages from '../views/Messages.vue'
import News from '../views/News.vue'
import detail from "../views/detail.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/Home"
  },
  // {
  //   path: '/Home',
  //   redirect: { name: 'Messages' }
  // },
  {

    path: '/Home',
    name: 'Home',
    component: Home,

    children: [
      {
        path: '',
        redirect: { name: 'Messages' }
      },
      {
        path: 'Messages',
        name: 'Messages',
        meta: { isAuth: true, title: '消息' },
        component: Messages,
        children: [{
          path: 'detail',
          name: 'detail',
          component: detail,
        }]
      }, {
        path: 'News',
        name: 'News',
        component: News,
        meta: { isAuth: true, title: '新闻' },
      }

    ]

  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // 先判断是否要鉴权
  if (to.meta.isAuth) {
    if (localStorage.getItem("school") === "bbk") {
      next();
    } else {
      alert("未登录无法访问")
   next({name:'About'})
    }
  } else {
    next();
  }

})
router.afterEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'git-demo'
  }
})
export default router
