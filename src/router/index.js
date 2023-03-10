import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: "首页"
    },
  },
  {
    path: '/detail/',
    name: 'Detail',
    component: () => import('../views/detail/Detail.vue'),
    meta: {
      title: "详情"
    },
    alias:['/detail/baseZhishi','/detail/learnComputer','/detail/teachShare','/detail/qiyuan']
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 防止重复点击一个路径是浏览器报路径重复的错
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

router.beforeEach((to, from, next)=>{
  console.log("router",to)
  // TODO 每个页面的浏览器标签名称显示
  to.meta.title && (document.title = "清枫Breze—" + to.meta.title);
  next();
}

)

export default router
