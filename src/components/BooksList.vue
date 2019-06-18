<template>
  <ul class="list">
    <li v-for="p in books" :key="p.id">
      {{ p.title }} - {{ p.price | currency }} * {{ p.inventory }}
      <br>
      <button
        :disabled="!p.inventory"
        @click="addToCart(p)">
        Add to cart
      </button>
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

import { Book } from '@/types'

import { dispatchAddToCart } from '@/store/dispatches'

export default Vue.extend({
  computed: {
      books(): Book[] {
          return this.$store.getters.allBooks
      },
  },
  created() {
    this.$store.dispatch('getAllBooks')
  },
  mounted() {
    setTimeout(() => {
      console.log(this.books)
    }, 500);
  },
  methods: {
    addToCart(p: Book) {
      dispatchAddToCart(p)
    },
  },
})
</script>
