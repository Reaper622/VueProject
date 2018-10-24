import Vue from 'vue'


const component = {
    templete: `
		<div>
			<span v-show="active">see me if active</span>
			<span>{{propOne}}</span>  //prop与data相似都是绑定在this上，可以直接使用
		</div>
	`,
    props: {
        active: Boolean,
        propOne: String
    }
}


new Vue({
    el:'#root',
    tempelate:`
			<new-component :active="true" prop-one="123"></new-component>  //需要用v-bind解析传入的值
			<new-component :active="false" prop-one="456"></new-component> //在prop中为驼峰式的命名在使用时使用小写并且用-连接的方式(非强制，只是规范)
		`,
    components: {
        NewComponent: component
    }
})


const componentVue = Vue.extend(component)

new componentVue({
    el:'#root',
    propsData: {
        propOne: 'xxx'
    }
})