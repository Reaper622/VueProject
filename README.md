# Vue

## Vue实例属性

| 名称         | 内容                                                         |
| ------------ | ------------------------------------------------------------ |
| $data        | 传入的data内容，修改可引起页面内容变化                       |
| $props       | 父组件传入子组件                                             |
| $el          | 绑定的html的节点                                             |
| $options     | 新建Vue实例对象时穿进去的内容，修改optins的内容不会引起页面变化，有render方法，在页面重新渲染时会调用 |
| $root        | 整个Vue对象的根节点，app.$root === app                       |
| $children    | 组件内部的元素                                               |
| $slots       | 插槽                                                         |
| $scopedSlots | 区域化插槽                                                   |
| $refs        | 模板的引用                                                   |
| $isServer    | 服务端渲染时可以用来判断                                     |
| $watch       | 监听内容,与写在实例中效果相同，但通过$watch写的监听要返回的unWatch方法结束监听 |
| $on          | 监听事件是否被触发，可以获取emit传递的参数                   |
| $emit        | 触发事件，监听哪个对象就要通过哪个事件触发，可以传值         |
| $once        | 与on相似，但只被触发一次                                     |
| $forceUpdate | 强制组件重新渲染                                             |
| $set         | 给新值赋值并且页面会渲染                                     |
| $delete      | 删除值                                                       |
| $nextTick    | 异步操作                                                     |



## Vue 生命周期



| 生命周期      | 介绍                                                         | 可调用次数 |
| :------------ | ------------------------------------------------------------ | ---------- |
| beforeCreate  | 还未绑定Dom,不能进行dom操作**(不要放入ajax请求)**            |            |
| created       | 还未绑定Dom,不能进行dom操作                                  |            |
| beforeMount   | el只为html中写的节点，还未绑定，说明还未渲染（未调用render方法） |            |
| mounted       | el绑定为渲染后的节点，说明之前进行了渲染（已调用render方法），实例已经创建完成 |            |
| beforeUpdate  |                                                              |            |
| updated       |                                                              |            |
| activated     |                                                              |            |
| deactivated   |                                                              |            |
| beforeDestory |                                                              |            |
| destoryed     |                                                              |            |

![生命周期图示](https://cn.vuejs.org/images/lifecycle.png)

## Computed 的特性

- computed内置缓存，在页面重新渲染时如果computed的值没有发生变化便不会再重新渲染，提高性能
- computed可以做设置操作，但不建议用computed做设置操作，有一定概率导致重复计算



## Wacth 的特性

- watch可以用来监听数据的变化
- 第一次渲染watch并不会渲染出内容，如果要初次渲染加上handler方法
- handler 只监听监听对象引用的变化，属性的变化并不会调用handler方法
- immediate属性可以用来确认是否以当前的初始值执行handler的函数
- 将deep属性设置为true就可以监听对象属性的变化
- 建议不要再watch内修改监听的值和属性

## Vue指令

| 指令名  | 指令作用                                                     |
| ------- | ------------------------------------------------------------ |
| v-text  | 标签里面要显示的文本内容，内容较多时不建议使用               |
| v-html  | 将html代码片段展示为html标签                                 |
| v-show  | 根据内容的Boolean值来显示或不显示内容，原理是设置display:none; |
| v-if    | 与v-show不同的是如果判断为false将不会放在文档流里，如果频繁切换会动态增删节点，会造成性能问题 搭配指令有 v-else v-else-if |
| v-for   | 循环,用法为 v-for="item in arr",item为数组内的值或对象，arr为储存值的数组,如果要拿到顺序则写为v-for="(item, index) in arr" 遍历对象可用 v-for="(val, key,index) in obj"的方式,val为值，key为对应的键,index为对应的索引值即顺序，使用v-for时需要:key=""来绑定一个唯一识别 |
| v-on    | 监听事件，可以监听到$emit触发的事件                          |
| v-model | 双向绑定数据，可进行实时更改，一般用于input，一般输入之后会变为**字符串** |
|         | **如果想让值为数字，在v-model后加.number修饰符**             |
|         | **如果想去掉首位的空格，在v-model后加.trim修饰符**           |
|         | 如果不想实时更改，而是失焦后更改，在v-model后加.lazy修饰符   |
| v-pre   | 不解析内部内容，即内部内容保留源格式                         |
| v-cloak | 一般直接在页面引入vue.js代码时使用，在vue代码完成之前让内容隐藏，vue加载完成后再展示 |
| v-once  | 数据绑定内容只执行一次，一般为静态内容使用，节省性能开销，不会做虚拟DOM对比 |

## 组件

### 定义组件

首先写一个组件内容

```javascript
const component = {
    templete: '<div>This is compoent</div>'
}
```

然后我们用Vue实例的方法引入组件

```javascript
import Vue from 'vue'
Vue.component('ComponentName',component); //定义了一个名为name的组件
//组件名用大写开头并用驼峰命名 （类的思想)
```

使用时：

第一种情况-直接在tempelate内使用：

```javascript
new Vue({
    el:'#root',
    tempelate:'<component-name></component-name>' //使用时使用小写，并且单词之间用-连接
})
```

第二种情况-重新命名使用:

```javascript
new Vue({
    el:'#root',
    tempelate:'<new-name-component></new-name-component>',
    //使用时使用小写，并且单词之间用-连接
    components: {
        newNameComponent: component
    }
})
```



#### 在组件内部绑定数据-data

```javascript
const component = {
    templete: '<div>{{text}}</div>',
    data(){  //必须要使用函数返回值的方式
        return{
            text:'hello'
        }
    }
}
```

> 使用一个return新对象的方法可以防止多个组件动态绑定至一个相同的值，例如v-model的场景就会出现相关的问题



#### 组件内部传递数据-props

```javascript
const component = {
    templete: `
		<div>
			<span v-show="active">see me if active</span>
			<span>{{propOne}}</span>  //prop与data相似都是绑定在this上，可以直接使用
		</div>
	`
    data(){  //必须要使用函数返回值的方式
        return{
            text:'hello'
        }
    },
    props: {
        active: Boolean,//向组件传递一个布尔值，key为active
        propOne: String  //驼峰式命名
        
    }
}
```

使用时

```javascript
new Vue({
    el:'#root',
    tempelate:`
			<new-component :active="true" prop-one="123"></new-component>  //需要用v-bind解析传入的值
			<new-component :active="false" prop-one="456"></new-component> //在prop中为驼峰式的命名在使用时使用小写并且用-连接的方式(非强制，只是规范)
		`,
    //使用时使用小写，并且单词之间用-连接
    components: {
        NewComponent: component
    }
})
```

props数据的一些设置

```javascript
const component = {
    props: {
        active: {
            type: Boolean, //设置为布尔值
            required: true, //这个属性为必需属性
            default: true, //设置默认值为true,如果有了default就不需要required
            validator (value) {   //可用来检测输入的值是否符合要求，可用来自定义检测
            	return typeof value === 'Boolean' 
        	}
        },
        propOne: {
            type: Object,
            default() {   //如果默认值为一个对象，则应该用函数返回一个对象的形式
                return {
                    
                }
            }
        }
    },
    .....
}
```





### 组件的extend

#### extend实例内的值 

当我们新建一个Vue实例时，它内部都是一些默认的属性，如果我们想使用我们已经定义过的组件的一些属性内容我们可以用下列代码:

```javascript
... 已创建组件component

const ComponentVue = Vue.extend(component);  //前提是component没有required为true的props

new ComponentVue({
    el: '#root'，
})
```

但如果我们需要用到props呢？

我们可以用下面的方式：

```javascript
... 已创建组件component

const ComponentVue = Vue.extend(component); 

new ComponentVue({
    el: '#root'，
    propsData: {   //用propsdata来向原组件的props传值才能使用
    	propOne: 'xxx',
	}
})
```

#### extend的mounted

会先执行原组件的mounted，再执行extend实例的mountend



### 组件内如何实现v-model双向绑定

```javascript
const component = {
    props: ['value'],
    template: `
		<div>
			<input type="text" @input="handleInput" v-model="value" >
		</div>
	`,
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value); //向父组件触发input事件
        }
    }
}

//在Vue实例中

new Vue({
    components: {
        CompOne: component
    },
    el: '#root',
    data () {
        return {
            value: '123'
        }
    }
    template: `
		<div>
			<comp-one :value="value" @input="value = arguments[0]"></comp-one>   //arguments数组即为通过$emit后面传递的参数
		</div>
	`
})
```





我们还可以通过下面的功能实现

```javascript
const component = {
    model: {   
        prop: 'value1', //为要传的值
        event: 'change' //为触发的事件
    },
    props: ['value1'],
    template: `
		<div>
			<input type="text" @input="handleInput" v-model="value1">
		</div>
	`,
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value); //向父组件触发input事件
        }
    }
}

//在Vue实例中

new Vue({
    components: {
        CompOne: component
    },
    el: '#root',
    data () {
        return {
            value: '123'
        }
    }
    template: `
		<div>
			<comp-one v-model="value"></comp-one>   //arguments数组即为通过$emit后面传递的参数
		</div>
	`
})
```



### 组件高级属性

####  插槽 slot

当我们在Vue实例调用的组件内部直接写入html元素时，它是不会显示的，因为我们没有告诉组件要放在哪里显示，这时就需要 **插槽** 了

```javascript
//组件内
const component = {
    template: `
		<div>
			<slot></slot> //为内容添加插槽位置，没有声明插槽位置的元素都会放在这个里面
		</div>
	`
}

//实例中
new Vue({
    components: {
        CompOne: component
    },
    el: '#root',
    template: `
		<div>
			<comp-one>
				<span>我会被放在slot中</soan>
			</comp-one>  
		</div>
	`
})
```

具名插槽

```javascript
//组件内
const component = {
    template: `
		<div>
			<div class="header">
				<slot name="header"></slot> 	
			</div>	
			<div class="body">
				<slot name="body"></slot>
			</div>
		</div>
	`
}

//实例中
new Vue({
    components: {
        CompOne: component
    },
    el: '#root',
    template: `
		<div>
			<comp-one>
				<span slot="header">我会被放在slot name为header的插槽中</soan>
				<span slot="body">我会被放在slot name为body的插槽中</soan>
			</comp-one>  
		</div>
	`
})
```

作用域插槽 让插槽内绑定的数据为组件的数据

使用方法为:

```javascript
//组件内
template: `
		<div>
			<slot value="456" anothervalue="content"></slot>
		</div>
	`

//实例中
template:`
	<div>
			<comp-one><span slot-scope="props">{{props.value}}  {{props.anothervalue}}</span></comp-one>   //slot-scope 的对象即为组件内slot传递值的对象
	</div>
`
```



或者可以使用组件内部data的值,它并不影响本地data的使用: 

```javascript
//组件内
template: `
		<div>
			<slot :value="value" anothervalue="content"></slot>  //注意要使用v-bind形式
		</div>
	`,
data() {
    return{
        value="this is data value"
    }    
}

//实例中
template:`
	<div>
			<comp-one><span slot-scope="props">{{props.value}}  {{props.anothervalue}}</span></comp-one>   //slot-scope 的对象即为组件内slot传递值的对象
	</div>
`
```

#### 跨级数据交流 

如何越级拿到vue组件实例呢？

使用 **provide**属性!

```javascript
//子组件
const ChildComponent = {
    template: '<div>child component</div>',
    inject: ['grandfather']  //获取实例向外提供的对象
}

//组件
const component = {
    name: 'comp',
    component: {
        ChildComponent //声明子组件
    },
    template: `
		<div>
			<child-component />  //如果为空组件可以这样书写
		</div>
	`,
    
}

//实例
new Vue({
    components: {
        CompOne: component
    },
    provide (){
        return{
          grandfather: this  //将自己这个实例作为对象向外提供,仅为节点下的节点（子节点 & 子节点的子节点 $ ......)
        } //使用函数返回值的方式的原因与data相同
    },
    ...
})
```

但一般provide只提供一次值，不会实现model模式，若要实现需要给provide的值提供获得方法,方法如下：

```javascript
provide (){
        return{
          const data = {}  //先设置一个空对象
    
    Object.defineProperty(data,'value',{
        get: () => this.value, //没次使用值时其实是用了这个get方法
        enumerable: true //可读属性
    })
        } 
    }
```

这种方法虽然是实现了跨级model，但属于一种hack方法，官方不建议使用。



## Render方法

render方法是我们渲染的一个方法，它内部会返回一个createElement方法，这个方法是Vue给我们提供的创建节点的方法，使用render方法我们就可以不使用template

```javascript
//组件
const component = {
    name: 'comp',
    props: ['props1'],
    render (createElement) {
        return createElement('div', {
            //data数据 data: this.data形式
        },[   //注意要传递数组
            this.$slots.default  //无名为default，具名slot将default改为名字即可
            this.props1 //传递prop值
        ]) 
    }
}

//实例
new Vue({
    components: {
        CompOne: component
    },
    render( createElement ) {  //不一定为createElement，可以用其他字母表示，但下面的方法名要保持一致
        return createElement(
            'comp-one',{
                ref: 'comp'     
            },[            //注意节点内在创建节点要传递一个数组
            createElement(
                'span',{
                    ref: 'span',
                    slot: 'header'  //可以指定要渲染的slot插槽位置
                },this.value)
        ])  //Vue提供的创建节点的函数
    }
})
```

### Render方法下的事件监听，on 和 nativeOn

on形式的监听，需要实例和组建中都使用on

```javascript
//组件
const component = {
    name: 'comp',
    props: ['props1'],
    render (createElement) {
        return createElement('div', {
            on: {
                click: () => {this.$emit('click')} //监听click事件，向父级触发click事件
            }
        },[   //注意要传递数组
            this.$slots.default  //无名为default，具名slot将default改为名字即可
            this.props1 //传递prop值
        ]) 
    }
}

//实例
new Vue({
    components: {
        CompOne: component
    },
    render( createElement ) {  //不一定为createElement，可以用其他字母表示，但下面的方法名要保持一致
        return createElement(
            'comp-one',{
                ref: 'comp',
                on: {
                    click: this.handleClick //点击组件会受到组件传递的click事件，并触发handleClick方法 
                }
            },[            //注意节点内在创建节点要传递一个数组
            createElement(
                'span',{
                    ref: 'span'
                },this.value)
        ])  //Vue提供的创建节点的函数
    },
    methods: {
        handleClick() {
            //do something....
        }
})
```

nativeOn 有个很大的便捷，那就是我们只需要在实例中声明而组件中可以不用声明

```javascript
//组件
const component = {
    name: 'comp',
    props: ['props1'],
    render (createElement) {
        return createElement('div', {
        },[   //注意要传递数组
            this.$slots.default  //无名为default，具名slot将default改为名字即可
            this.props1 //传递prop值
        ]) 
    }
}

//实例
new Vue({
    components: {
        CompOne: component
    },
    render( createElement ) {  //不一定为createElement，可以用其他字母表示，但下面的方法名要保持一致
        return createElement(
            'comp-one',{
                ref: 'comp',
                nativeOn: {
                    click: this.handleClick //nativeOn会自动绑定到组件根节点的dom上面
                }
            },[            //注意节点内在创建节点要传递一个数组
            createElement(
                'span',{
                    ref: 'span'
                },this.value)
        ])  //Vue提供的创建节点的函数
    },
    methods: {
        handleClick() {
            //do something....
        }
})
```

> template其实是render方法的一种编译方式



# V-router

router，顾名思义即为路由，vue框架可以让我们在前端实现路由功能，这个功能对WebApp这种应用来说是必不可少的。

> 使用路由之前需要先安装模块，npm install vue-router

一般我们将路由分为两个文件，router.js 和 routes.js,一个用来存放路由信息，另一个用来写路由逻辑功能

```javascript
//routes.js
import Todo from '../views/todo/todo.vue'  //引入要展示的页面
import Login from '../views/login/login.vue'

export default [
    {
        path: '/', //网页的路径
        component: Todo //指定输入上方路径后显示什么页面
    },
    {
        path: '/login',
        compoent: Login
    }
]
```

```javascript
//router.js
import Router from 'vue-router'  //引入vue-router模块
import routes from './routes' //引入我们写的路由信息


//每次引入路由文件时会返回一个路由对象
export default () => {
    return new Router({
        routes
    })
}
```

为了实现跳转，我们还需要用router-view来实现对路由跳转过后的展示

```html
// app.vue
<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <router-view></router-view>  //这部分来进行跳转,页面内容展示在这部分
    <!-- <todo></todo> -->
    <Footer></Footer>
  </div>
</template>
```

我们也可以用路由来实现首页重定向，在routes.js写入这部分内容

```javascript
//routes.js
import Todo from '../views/todo/todo.vue'  //引入要展示的页面
import Login from '../views/login/login.vue'

export default [
    {
      path: '/',  
      redirect: '/app' //当输入默认路径时重定向到app页面
    },
    {
        path: '/app', //网页的路径
        component: Todo //指定输入上方路径后显示什么页面
    },
    {
        path: '/login',
        compoent: Login
    }
]
```

此时我们会注意到网页上的url是  *http://localhost:8080/#/app*，他默认会传一个hash，我们可以更改这个东西需要更改router.js的内容

```javascript
import Router from 'vue-router'  //引入vue-router模块
import routes from './routes' //引入我们写的路由信息


//每次引入路由文件时会返回一个路由对象
export default () => {
    return new Router({
        routes,
        mode:'history'  //mode改为 'hash'即为hash方式
    })
}
```

此时在此运行我就可以发现那个#消失了

我们还可以通过base属性设计**基路径** 

```javascript
import Router from 'vue-router'  //引入vue-router模块
import routes from './routes' //引入我们写的路由信息


//每次引入路由文件时会返回一个路由对象
export default () => {
    return new Router({
        routes,
        mode:'history',
        base: '/base/'  //设置基路径为base,通过vue-router的跳转都会加入基路径
    })
}
```

此时我们再访问localhost:8080发现他的路径跳转为了

*localhost:8080/base/app*

但基路径并不是强制的，我们把base去掉访问依然可以访问到app

还有两个属性使我们要配合router-link使用的

```html
//app.vue
<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <router-view></router-view>
    <!-- <todo></todo> -->
    <Footer></Footer>
  </div>
</template>
```

我们在app.vue中加入两个router-link(与a标签类似，原理是通过a标签实现的),to的内容即为他们要跳转的路由,然后我们可以全局设置链接的样式

```javascript
export default () => {
    return new Router({
        routes,
        mode:'history',
        linkActuveCLass:'active-link', //只要有一部分被激活会加上
        linkExactActiveClass: 'exact-active-link' //当前路径完全匹配才加上
    
    })
}
```

可能会有点难理解，那我们这样想，你当前有一个/app的页面，展示的是app.vue，然后app下面有个子页面是childApp.vue，路径是/app/childApp，当我们在*localhost:8080/app/childApp*的路径下时，此时routerlink to 为childApp的链接的样式为'active-link' 和'exact-active-link',而app的routerlink的样式为'active-link' 而不会有'exact-active-link'



### 路径的映射

我们把路径输入url时，按下回车，会想服务器发送一个请求，如果此时我们没有在服务器中，添加路由映射时，浏览器会返回我们一个错误信息

> Cannot GET /xxx            //xxx即为url的内容

```javascript
//webpack.config.client.js
const devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    historyApiFallback: {
        index: 'index.html'      //加上这个我们输入url后刷新页面还是会显示出内容
    },
    hot: true
  }

```



### 页面的跳转时的滚动保留

我们有时在跳转页面时，不想回到上一级时已经返回到了顶部而不是跳转之前的位置，我们可以在Router里设置一个scrollBehavior

```javascript
export default () => {
    return new Router({
        routes,
        mode:'history',
        scrollBehavior (to, from, savedPosition){ //to -> 跳转的路由 from -> 当前的路由即跳转的起始点 savedPosition -> 保存当前滚动条滚动的位置 
            if(savedPosition) {  //如果是有滚动距离的，返回到之前的页面位置
                return savedPosition
            } else { //否则，返回顶部
                return {x:0 , y:0}
            }
        }
    
    })
}
```

### 配置路由的参数

这部分主要讲路由方面的参数

#### name

```javascript
import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app' //当输入默认路径时重定向到app页面
  },
  {
    path: '/app',
    component: Todo,
    name: 'app'  //给当前的路由设置一个姓名，可以用来跳转，与路径和组件名无强制联系
  },
  {
    path: '/login',
    compoent: Login
  }
]

```

然后在routerlink上可以进行通过name跳转

```html
<router-link :to="{name:'app'}"> </router-link>  //传入对象，让Vue来解析它
```

之后就可以进行跳转了，不必每次都要写路径

#### meta

用来存放一些元信息

```javascript
import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app' //当输入默认路径时重定向到app页面
  },
  {
    path: '/app',
    component: Todo,
    meta: {
          title:'this is app',  //与html的meta同样的效果
          description: 'author Reaper Lee'
      }
  },
  {
    path: '/login',
    compoent: Login
  }
]
```

#### children

用来写当前路径下的子组件

```javascript
import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/app',
    component: Todo,
   children: [ //注意是数组
       {
           path: 'child', //路径信息，与父级相同
           component: Child 
       }
   ]
  }
]
```

但注意这个只会在 父组件即(Todo)下的routerview展示，不会和Todo抢占同一个routerview

### 路由的Transition

transition顾名思义就是路由的过度，即为一次过渡动画，我们使用时要配合routerview使用

```html
//app.vue
<template>
  <div id="app">
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
      <transition name="fade"> //使用fade的动画作为过渡
          <router-view></router-view>
      </transition>
  </div>
</template>

<style>
    //定义这个fade动画
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
```



### 路由传参

我们可以通过路由传递一些参数，这个会在我们比如查看一个物品的详情页等场景使用会比较多。具体方法如下

```javascript
// routes.js
export default [
  {
    path: '/app/:id', //这里我们就声明了一个路由上的参数
    component: Todo,
    
  }
]
```

此时我们直接访问/app 是不会有内容的

但当我们访问/app/xxxx (xxxx为要传递的参数),此时我们就可以正常的显示页面，我们获取这个参数可以在父组件中使用this.$route来获取参数

```
this.$router.params.id 就可以拿到路径中的参数了，id是我们在上面的path中给的参数名为id，要与参数名保持一致
```

还有一种更强大的方法，那就是把路径中的参数作为组件的**props**传递给组件

```javascript
// routes.js
export default [
  {
    path: '/app/:id', //这里我们就声明了一个路由上的参数
    props:true, //这里我们设置为true即可让参数作为props传递给组件
    component: Todo
  }
]
```

然后在组件中我们需要把参数的props声明

```javascript
//todo.vue
export default {
    props: ['id']  //声明一个名为 id 的props数据
}
```

然后我们就可以在组件中拿到这个参数了！而且通过props传递的参数我们可以更好的使用，所以如果真的需要通过路径传参数我们尽可能使用props。



