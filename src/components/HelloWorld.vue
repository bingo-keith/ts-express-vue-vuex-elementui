<template>
  <div class="hello">
    <p>{{allName | capitalize}}</p>
    <h1>{{ msg }}</h1>
    <p>{{text}}</p>
    <button @click="sayHello">点击我</button>
    <hr>
    <div :key="index" v-for="(item, index) in books">{{index}} - {{item.name}} : {{item.price}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { capitalize } from '@/filters/index'

@Component({
  filters: { capitalize },
})
export default class HelloWorld extends Vue {
  // props
  @Prop({ default: 'default message' }) private msg !: string

  // state
  private text: string
  private name: string
  private books: object[]
  private list: number[]
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
    this.list = [1, 2, 3, 4]
  }
  // lifecycle
  public mounted(): void {
    console.log('mounted');
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
