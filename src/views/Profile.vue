<template>
  <v-layout fill-height pa-5 column>
    <span class="display-1 font-weight-bold mb-5">Profile</span>
    <div><span class="body-1">이름</span><span class="body-2">: 이창영 (Lee Chang Young)</span></div>
    <div><span class="body-1">생년월일</span><span class="body-2">: 1995. 02. 15</span></div>
    <div><span class="body-1">병역</span><span class="body-2">: 공군 병장 만기전역(2014.12.22 ~ 2016.12.21)</span></div>
    <div><span class="body-1">이메일</span><span class="body-2">: chang0022@snu.ac.kr</span></div>
    <div><span class="body-1">연락처</span><span class="body-2">: 010-7564-0062</span></div>
  </v-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import marked from 'marked';

@Component<Profile>({})
export default class Profile extends Vue {
}
</script>
<style scoped>
.body-1 {
  display: inline-block;
  width: 100px;
}
.body-2 {
  display: inline-block;
}
</style>
