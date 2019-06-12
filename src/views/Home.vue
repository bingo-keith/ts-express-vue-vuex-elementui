<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div>{{name | capitalize}}</div>
    <div>{{allName}}</div>
    <label for="inp"><input type="text" id="inp" :value="name"></label>
    <button @click="handleClick">点我</button>
    <div :key="item.price" v-for="item in books">{{item.name}} - {{item.price}}</div>
    <div :key="i" v-for="(i, val) in age">{{val}}</div>
    <p>{{store.userName}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

const store = namespace('store')

// filters
const capitalize = (value: string) => {
  if (!value) {
    return false
  }
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

@Component({
  components: {
    HelloWorld
  },
  filters: { capitalize }
})
export default class Home extends Vue {
  @State('store') private store: any
  @Action private SET_ASYNC_STATE: any
  // @Getter('store') private getName: string;

  private name: string
  private books: any[]
  private age: number[]
  constructor() {
    super()
    this.name = 'bingo keith'
    this.books = [
      {
        name: 'java',
        price: 11
      },
      {
        name: 'javascript',
        price: 22
      }
    ]
    this.age = [4, 5, 6]
  }
  public mounted(): void {
    // console.log(this.getName);
    // store.dispatch('SET_ASYNC_STATE', { userName: 'test' });
    // this.SET_ASYNC_STATE({ userName: 'test' });
    setTimeout(() => {
      console.log(this.store.userName, ' | test one')
    }, 1000)
  }
  public handleClick(e: { target: object }): void {
    // this.SET_ASYNC_STATE({ userName: 'test' });
    // console.log(this.SET_ASYNC_STATE);
    // console.log(e.target);
  }
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
