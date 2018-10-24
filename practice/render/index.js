import Vue from 'vue'
import { create } from 'domain';


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
    render (createElement) {
        return createElement('div', {
            //data数据 data: this.data形式
        },this.$slots.default)  //无名为default，具名slot将default改为名字即可
    },
    
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
    // template:`
    //     <comp-one ref="comp">
    //         <span ref="span">{{value}}</span>
    //     </comp-one>
    // `,
    render( createElement ) {
        return createElement(
            'comp-one',{
                ref: 'comp'
            },[
            createElement(
                'span',{
                    ref: 'span'
                },this.value)
        ])  //Vue提供的创建节点的函数
    }
})