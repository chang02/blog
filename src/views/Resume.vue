<template>
  <v-layout fill-height pa-5 column>
    <span class="display-1 font-weight-bold mb-5">Resume</span>
    <v-timeline dense>
      <v-timeline-item color="purple" small>
        <v-layout>
          <div class="time">2020.02</div>
          <div class="content">서울대학교 졸업 (예정)</div>
        </v-layout>
      </v-timeline-item>
      <v-timeline-item color="purple" small>
        <v-layout>
          <div class="time">2019.02 ~ </div>
          <div class="content">(주)Omnis Labs (Front End Web Developer)</div>
        </v-layout>
      </v-timeline-item>
      <v-timeline-item color="purple" small>
        <v-layout>
          <div class="time">2018.01 ~ 2018.10</div>
          <div class="content">(주)코드윙즈 (Full Stack Web Developer)</div>
        </v-layout>
      </v-timeline-item>
      <v-timeline-item color="purple" small>
        <v-layout>
          <div class="time">2017.08</div>
          <div class="content">(주)씨엠에스 에듀 (인턴)</div>
        </v-layout>
      </v-timeline-item>
      <v-timeline-item color="purple" small>
        <v-layout>
          <div class="time">2013.03</div>
          <div class="content">서울대학교 입학</div>
        </v-layout>
      </v-timeline-item>
    </v-timeline>
  </v-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component<Resume>({})
export default class Resume extends Vue {
  private card1: boolean = false;
  private card2: boolean = false;
  private card3: boolean = false;
  private card4: boolean = false;
}
</script>
<style lang="scss" scoped>
.time {
  // display: inline-block;
  width: 160px;
}
.content {
  // display: inline-block;
}
</style>
