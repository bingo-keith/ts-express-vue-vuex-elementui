<template>
  <div class="hello">
    <p>{{allName | capitalize}}</p>
    <p>下面是接口返回的数据</p>
    <p v-for="item in list" :key="item.id * 10">
      姓名{{item.name}} - 年龄：{{item.age}} - 爱好：{{item.hobby}} - 性别：{{item.gender | getGender}}
    </p>
    <h1>{{ msg }}</h1>
    <p>{{text}}</p>
    <button @click="sayHello">点击我</button>
    <hr>
    <div :key="index" v-for="(item, index) in books">{{index}} - {{item.name}} : {{item.price}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { capitalize, getGender } from '@/filters/index'
import axios from 'axios'

@Component({
  filters: { capitalize, getGender },
})
export default class HelloWorld extends Vue {
  // props
  @Prop({ default: 'default message' }) private msg !: string

  // state
  private text: string
  private name: string
  private books: object[]
  private list: any[]
  constructor() {
    super()
    this.text = '还没有点击我'
    this.name = 'bingo keith'
    this.books = [
      {
        name: 'java',
        price: 11,
      },
      {
        name: 'javascript',
        price: 22,
      },
    ]
    this.list = []
  }
  // lifecycle
  public mounted(): void {
    console.log('mounted');
    axios({
      method: 'get',
      url: '/api/users/getList',
    }).then(({ data: { code, msg, data } }) => {
      this.list = data
    })
  }

  // methods
  public sayHello(e: object): void {
    console.log(e)
    this.text = '点击我了'
  }
  
  // watch
  @Watch('name', {immediate: true, deep: true})
  public onChildChanged(val: string, oldVal: string) {
    // console.log('new name is ' + val);
  }
  // computed:计算属性改为前面加get关键字
  get allName() {
    return 'computed ' + this.name
  }
}
</script>

<style lang="scss" scoped>
.hello {
  border: 1px solid #ccc;
  h1, h2 {
    font-weight: normal;
    color: blue;
  }
}

</style>
