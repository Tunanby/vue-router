import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'src/components/HelloWorld'
const Hello = () => import('components/Hello')
const Hi1 = () => import('components/hi1')
const Hi2 = () => import('components/hi2')
// 单页面多路由
const Twohi = () => import('components/one/hi')
const Twohi1 = () => import('components/one/hi1')
const Twohi2 = () => import('components/one/hi2')

const Hook = () => import('components/hook')

Vue.use(Router)

export default new Router({
  // routes: [                               //配置路由，这里是个数组
  //   {                                         //每一个链接都是一个对象
  //     path: '/',                           //链接路径
  //     name: 'HelloWorld',         //路由名称，
  //     component: HelloWorld  //对应的组件模板
  //   }
  // ]
  routes: [
    {
      path: '/hook',
      name: 'Hook',
      component: Hook,
      // beforeEnter: (to, from, next) => {
      //   next({path: '/'})
      // }
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/hello',
      name: 'Hello',
      alias: '/zby',
      // redirect: 'twohi',
      component: Hello,
      children: [
        { path: 'hi1', name: 'hi1', component: Hi1 }, 
        { path: 'hi2', component: Hi2 }
      ]
    }, 
    {
      path: '/twohi',
      // name: "Twohi",
      components: {
        default: Twohi,
        left: Twohi1,
        right: Twohi2
      }
    }
  ]
})
