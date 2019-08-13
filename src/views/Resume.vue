<template>
  <v-layout fill-height pa-5 column>
    <span class="display-1 font-weight-bold mb-5">Resume</span>
    <div class="title my-3">프로필</div>
    <div class="ml-4 mb-5">
      <div><span class="body-1">이름</span>:<span class="body-2">이창영 (Lee Chang Young)</span></div>
      <div><span class="body-1">생년월일</span>:<span class="body-2">1995. 02. 15</span></div>
      <div><span class="body-1">병역</span>:<span class="body-2">공군 병장 만기전역(2014.12.22 ~ 2016.12.21)</span></div>
      <div><span class="body-1">이메일</span>:<span class="body-2">chang0022@snu.ac.kr</span></div>
      <div><span class="body-1">연락처</span>:<span class="body-2">010-7564-0062</span></div>
    </div>
    <div class="title my-3">학력, 경력</div>
    <div class="ml-4">
      <div><span class="time">2019.02 ~ </span><span class="content">(주)Omnis Labs</span><span class="etc">(Front End Web Developer)</span></div>
      <div><span class="time">2018.01 ~ 2018.10</span><span class="content">코드윙즈</span><span class="etc">(Full Stack Web Developer)</span></div>
      <div><span class="time">2017.08</span><span class="content">(주)씨엠에스 에듀</span><span class="etc">(인턴)</span></div>
      <div><span class="time">2013.03 ~ 2020.02</span><span class="content">서울대학교 컴퓨터공학부</span><span class="etc">(졸업 예정)</span></div>
    </div>
    <!-- <v-timeline dense class="mt-5">
      <v-timeline-item color="purple" small class="pb-2">
        <v-layout align-center>
          <div class="time">2020.02</div>
          <div class="content">서울대학교 컴퓨터공학부 졸업 (예정)</div>
        </v-layout>
      </v-timeline-item>
      <v-timeline-item color="purple" small class="pb-2">
        <v-layout align-center>
          <div class="time">2019.02 ~ </div>
          <div class="content">(주)Omnis Labs (Front End Web Developer)</div>
        </v-layout>
      </v-timeline-item>
      <v-timeline-item color="purple" small class="pb-2">
        <v-layout align-center>
          <div class="time">2018.01 ~ 2018.10</div>
          <div class="content">(주)코드윙즈 (Full Stack Web Developer)</div>
        </v-layout>
      </v-timeline-item>
      <v-timeline-item color="purple" small class="pb-2">
        <v-layout align-center>
          <div class="time">2017.08</div>
          <div class="content">(주)씨엠에스 에듀 (인턴)</div>
        </v-layout>
      </v-timeline-item>
      <v-timeline-item color="purple" small>
        <v-layout align-center>
          <div class="time">2013.03</div>
          <div class="content">서울대학교 컴퓨터공학부 입학</div>
        </v-layout>
      </v-timeline-item>
    </v-timeline> -->
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
.body-1 {
  display: inline-block;
  width: 80px;
}
.body-2 {
  display: inline-block;
  margin-left: 15px;
}
.time {
  display: inline-block;
  width: 170px;
}
.content {
  display: inline-block;
  width: 200px;
}
.etc {
  display: inline-block;
}
</style>
