import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app' // 当输入默认路径时重定向到app页面
  },
  {
    path: '/app',
    component: Todo,
    name: 'app', // 给当前的路由设置一个姓名，可以用来跳转，与路径和组件名无强制联系
    meta: {
      title: 'this is app', // 与html的meta同样的效果
      description: 'author Reaper Lee'
    },
    children: [
      {
        path: 'test',
        component: Login
      }
    ]
  },
  {
    path: '/login',
    compoent: Login
  }
]
