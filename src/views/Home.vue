<template>
  <div class="home">
    <HelloWorld msg="Welcome to TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { capitalize } from '@/filters/index'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private test: string = 'hello'
}
</script>
