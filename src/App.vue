<template>
  <div id="app">
    <h1>测试文字</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import { Button } from 'vant'

@Component({
  components: {
    [Button.name]: Button,
  },
})
export default class App extends Vue {
  mounted() {
    this.$axios({
      url: '/musicRankings',
      method: 'get'
    }).then((data: any) => {
      console.log(data)
    })
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/common.scss';
h1 {
  font-size: 30px;
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
