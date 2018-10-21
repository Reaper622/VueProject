import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: `
    <div
    :class="[{active: isActive}]"
    :style="styles">
      <p>{{getJoinedArr(arr)}}</p>
    </div>
  `,
  data: {
    isActive: true,
    text: 'aaa',
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    },
    styles2: {
      color: 'black'
    },
    arr: [1, 2, 3]
  },
  computed: {
  },
  methods: {
    handleClick () {
      window.alert('123')
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  },
  beforeCreate () {
    console.log(this, 'beforeCreate')
  },
  created () {
    console.log(this, 'created')
  },
  beforeMount () {
    console.log(this, 'beforeMount')
  },
  mounted () {
    console.log(this, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  }
})

app.$mount('#root')
