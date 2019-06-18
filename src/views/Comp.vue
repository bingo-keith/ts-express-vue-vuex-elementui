<template>
<div>
  test component
</div>
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
</style>