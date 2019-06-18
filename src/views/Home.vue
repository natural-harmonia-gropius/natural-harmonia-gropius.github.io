<template>
  <div class="home">
    <Template message="hello,world!" />
    <img
      src=""
      alt=""
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Template from '@/components/Template.vue';

@Component({
  components: {
    Template,
  },
})
export default class Home extends Vue {}
</script>
