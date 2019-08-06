<template>
  <v-layout>
  </v-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component<Home>({})
export default class Home extends Vue {
  public created() {
    this.$router.push('/profile');
  }
}
</script>
<style scoped>
</style>
