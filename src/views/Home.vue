<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div>{{name | capitalize}}</div>
    <div>{{allName}}</div>
    <label for="inp"><input type="text" id="inp" :value="name"></label>
    <button @click="handleClick">点我</button>
    <div :key="item.price" v-for="item in books">{{item.name}} - {{item.price}}</div>
    <div :key="i" v-for="(i, val) in age">{{val}}</div>
    <p>{{state.userName}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import { Action, Getter, Mutation, State, namespace } from 'vuex-class';

const login = namespace('login');

// filters
const capitalize = (value: string) => {
  if (!value) {
    return false;
  }
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

@Component({
  components: {
    HelloWorld,
  },
  filters: { capitalize },
})
export default class Home extends Vue {
  @State('login') private state: any;
  @Mutation('getState') private getState!: any;
  // @Action public GET_ASYNC_STATUS;

  private name: string;
  private books: any[];
  private age: number[];
  constructor() {
    super();
    this.name = 'bingo keith';
    this.books = [
      {
        name: 'java',
        price: 11,
      },
      {
        name: 'javascript',
        price: 22,
      },
    ];
    this.age = [4, 5, 6];
  }
  public mounted(): void {
    console.log('mounted');
    console.log(this.state);
    console.dir(this.$store);
    console.log(this.getState());
    // TODO 完成获取vuex state，还有mutation，getters和actions未完成
  }
  public handleClick(e: { target: object }): void {
    console.log(e.target);
  }
  @Watch('name', {immediate: true, deep: true})
  public onChildChanged(val: string, oldVal: string) {
    console.log('new name is ' + val);
  }
  // computed:计算属性改为前面加get关键字
  get allName() {
    return 'computed ' + this.name;
  }
}
</script>
