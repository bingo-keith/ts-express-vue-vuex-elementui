<template>
  <div class="page">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Books</h2>
    <books-list></books-list>
    <hr>
    <book-cart></book-cart>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import BooksList from './BooksList.vue'
import BookCart from './BookCart.vue';

import { dispatchAddToCart } from '@/store1/dispatches'

export default Vue.extend({
  components: {
    BooksList,
    BookCart
  }
})
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}

.list {
  li {
    padding: 5px 0;
  }
}
</style>

