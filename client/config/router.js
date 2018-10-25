import Router from 'vue-router'  //引入vue-router模块
import routes from './routes' //引入我们写的路由信息


//每次引入路由文件时会返回一个路由对象
export default () => {
    return new Router({
        routes,
        mode:'history',
        base: '/base/',  //作为基路径
        linkActuveCLass:'active-link',
        linkExactActiveClass: 'exact-active-link',
        scrollBehavior (to, from, savedPosition){ //to -> 跳转的路由 from -> 当前的路由即跳转的起始点 savedPosition -> 保存当前滚动条滚动的位置 
            if(savedPosition) {  //如果是有滚动距离的，返回到之前的页面位置
                return savedPosition
            } else { //否则，返回顶部
                return {x:0 , y:0}
            }
        },
        // fallback:false,
        // parseQuery (query) { 
            
        // },
        // stringifyQuery (obj) {
            
        // }
    })
}