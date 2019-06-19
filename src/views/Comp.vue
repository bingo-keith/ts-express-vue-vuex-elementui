<template>
<div>
  <mt-header fixed title="固定在顶部"></mt-header>
  <h2></h2>
  <hr>
  <h2>Button</h2>
  <mt-button type="default" @click.native="handleClick">default</mt-button><br/>
  <mt-button type="primary" :disabled="isDisabled">primary</mt-button><br/>
  <mt-button type="danger">danger</mt-button><br/>
  <mt-button plain>plain</mt-button><br/>
  <mt-button size="small">small</mt-button><br/>
  <mt-button icon="back" size="normal">normal</mt-button><br/>
  <mt-button icon="more" size="large">large</mt-button><br/>
  <mt-button>
  <img src="~@/assets/logo.png" height="20" width="20" slot="icon">
  带自定义图标
  </mt-button><br/>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { State, Getter, Action } from 'vuex-class'
import { Book } from '@/types'
import { Toast } from 'mint-ui'

@Component
export default class Comp extends Vue {
  @Getter('allBooks') public books!: Book[]
  @Action('getAllBooks') public getAllBooks!: any
  private isDisabled: boolean
  constructor() {
    super();
    this.isDisabled = false
  }
  public mounted(): void {
    this.getAllBooks()
    setTimeout(() => {
      console.log(this.books)
    }, 500);
  }
  public handleClick(e): void {
    this.isDisabled = true
    Toast({
      message: '操作成功',
    });
    console.log(e.target.innerText)
  }
}
</script>

<style lang="scss">
</style>