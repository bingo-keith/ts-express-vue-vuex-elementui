<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!books.length">
      <i>Please add some books to cart.</i>
    </p>
    <ul>
      <li v-for="p in books" :key="p.id">
        {{ p.title }} - {{ p.price | currency }} x {{ p.inventory }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p>
      <el-button type="primary" :disabled="!books.length" @click="checkout(books)">
        Checkout
      </el-button>
    </p>
    <p v-show="checkoutStatus">
      <el-tag :type="checkoutStatus === 'successful' ? 'success' : 'danger'">
        Checkout {{ checkoutStatus }}.
      </el-tag>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Button, Tag } from 'element-ui'

import { CartBook, CheckoutStatus } from '../store1'

Vue.use(Button)
Vue.use(Tag)

import { Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

@Component
export default class BookCart extends Vue {
  @Getter('cartBooks') public books!: CartBook[]
  @Getter('checkoutStatus') public checkoutStatus!: CheckoutStatus
  @Action('checkout') public actionCheckout!: any
  get total(): number {
    return this.books.reduce((res, cur) => {
      res += cur.price * cur.inventory;
      return res;
    }, 0);
  }
  public checkout(books: CartBook[]) {
    console.log(this.checkoutStatus);
    
    this.actionCheckout(books)
  }
}
</script>
