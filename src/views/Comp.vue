<template>
  <el-row :gutter="10">
    <el-col
        :key="book.id" v-for="book in books"
      :lg="8"
      :md="8"
      :sm="8"
      :xl="8"
      :xs="8"
      class="bg-purple-light"
    >{{ book.title }} - {{ book.price | currency }} x {{ book.inventory }}</el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { State, Getter } from 'vuex-class'
import { Book } from '@/types'

@Component
export default class Comp extends Vue {
  @Getter('allBooks') public books!: Book[]
  public mounted() {
    console.log(this.books)
  }
}
</script>

<style lang="scss">
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>