import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/signin&loggin/Login'
import Signinone from '@/components/signin&loggin/Signinstepone'
import Signintwo from '@/components/signin&loggin/Signinsteptwo'
import Signinthree from '@/components/signin&loggin/Signinstepthree'
import home from '@/components/homepage/home'
import main from '@/components/main'
import user from '@/components/user/userupload'
import comment from '@/components/comment/comment_show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[
        {
          path:'',
          name:'home',
          component:home
        },
        {
          path:'/login',
          name:'login',
          component:Login
        },
        {
          path:'/signinone',
          name:'Signinone',
          component:Signinone
        },
        {
          path:'/signintwo',
          name:'Signintwo',
          component:Signintwo
        },
        {
          path:'/signinthree',
          name:'Signinthree',
          component:Signinthree
        },
        {
          path:'/user',
          name:'user',
          component:user
        },
      ]
    },
    {
      path:'/test',
      name:'test',
      component:comment
    }
  ]
})
