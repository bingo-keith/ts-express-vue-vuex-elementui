<template>
  <div id="app">
    <h1>测试文字</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '~@/assets/styles/common.scss';
h1 {
  font-size: 20px;
  color: $color-main;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
