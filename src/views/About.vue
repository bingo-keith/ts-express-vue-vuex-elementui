<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ShoppingBookCart/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ShoppingBookCart from '@/components/ShoppingBookCart.vue'

@Component({
  components: {
    ShoppingBookCart
  }
})

export default class About extends Vue {}

</script>
