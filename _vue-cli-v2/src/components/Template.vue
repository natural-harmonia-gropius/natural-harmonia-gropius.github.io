<template>
  <div
    ref="div"
    class="template"
  >
    {{ message | capitalize }}
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  PropSync,
  Model,
  Watch,
  Inject,
  Provide,
  ProvideReactive,
  InjectReactive,
  Emit,
  Ref,
} from 'vue-property-decorator';
import { Route, RawLocation } from 'vue-router';

Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate']);

@Component({
  filters: {
    capitalize(value: string) {
      if (!value) return '';
      return (
        value
          .toString()
          .charAt(0)
          .toUpperCase() + value.slice(1)
      );
    },
  },
})
export default class Template extends Vue {
  @Prop({ default: 'message' }) private readonly message!: string;

  @PropSync('name') private syncedName!: string;

  @Model('change') readonly checked!: boolean;

  @Watch('data') onChildChanged(val: string, oldVal: string) {
    this.data = `from: ${oldVal} - to: ${val}`;
    console.log(this.data);
  }

  // @Inject() readonly foo1!: string;

  // @Provide() foo2 = 'foo';

  // @ProvideReactive() foo3 = 'value';

  // @InjectReactive() foo4!: string;

  @Emit() ex() {
    this.data = 'emit';
  }

  @Ref('div') readonly div!: HTMLDivElement;

  data = '';

  get computed() {
    return `data: ${this.data}`.toUpperCase();
  }

  set computed(value: string) {
    this.data = value.trim();
  }

  method(): string {
    this.data = 'method';
    return this.data;
  }

  mounted() {
    console.log('mounted', this);
  }

  beforeRouteEnter(
    to: Route,
    from: Route,
    next: (to?: RawLocation | false | ((vm: Vue) => void)) => void,
  ) {
    console.log('beforeRouteEnter', this);
    next();
  }
}
</script>

<style lang="scss" scoped>
.template {
  font: bold #6cf;
  border: none;
  margin: 0;
}
</style>
