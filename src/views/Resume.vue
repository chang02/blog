<template>
  <v-layout fill-height pa-5 column>
    <span class="display-1 font-weight-bold mb-5">Resume</span>
    <v-timeline dense>
      <v-timeline-item small fill-dot color="purple">
        <v-card @click="card1=!card1">
          <v-card-title>
            <v-icon large class="mr-3" v-if="!card1">mdi-chevron-down</v-icon>
            <v-icon large class="mr-3" v-else>mdi-chevron-up</v-icon>
            <span class="headline">(주)Omnis Labs - 2019.02 ~</span>
          </v-card-title>
          <v-layout column v-if="card1" pa-5>
            <span class="subtitle-1">직책 : 개발자 (Front End Web Developer)</span>
          </v-layout>
        </v-card>
      </v-timeline-item>
      <v-timeline-item small fill-dot color="purple">
        <v-card @click="card2=!card2">
          <v-card-title>
            <v-icon large class="mr-3" v-if="!card2">mdi-chevron-down</v-icon>
            <v-icon large class="mr-3" v-else>mdi-chevron-up</v-icon>
            <span class="headline">(주)코드윙즈 - 2018.01 ~ 2018.10</span>
          </v-card-title>
          <v-layout column v-if="card2" pa-5>
            <span class="title">직책</span>
            <span class="body-1 pl-3">개발자 (Full Stack Web Developer)</span>
            <span class="title mt-5">업무1 : 코드윙즈 서비스 유지, 보수 및 기능 추가</span>
          </v-layout>
        </v-card>
      </v-timeline-item>
      <v-timeline-item small fill-dot color="purple">
        <v-card @click="card3=!card3">
          <v-card-title>
            <v-icon large class="mr-3" v-if="!card3">mdi-chevron-down</v-icon>
            <v-icon large class="mr-3" v-else>mdi-chevron-up</v-icon>
            <span class="headline">(주)씨엠에스에듀 - 2017.08</span>
          </v-card-title>
          <v-layout column v-if="card3" pa-5>
            <span class="title">직책</span>
            <span class="body-1 pl-3">인턴 (Back End Web Developer)</span>
            <span class="title mt-5">업무 : 웹에서 코딩하고 실행할 수 있는 환경(IDE) 만들기</span>
            <v-layout column pl-3>
              <span class="subtitle-1 font-weight-bold">사용한 기술스택</span>
              <span class="body-1">Node.js, Express, Mongodb, Docker</span>
              <span class="subtitle-1 mt-2 font-weight-bold">설명</span>
              <span class="body-1">
                웹 상에서 다양한 프로그래밍 언어를 작성하고 실행하여 결과를 확인할 수 있는 환경을 제작하는 프로젝트이고 백엔드를 맡아서 진행하였다.<br>
                각 유저마다 여러 개의 폴더, 파일을 생성할 수 있는 기능이 있었고 그 Filetree를 mongodb에 저장하며 파일은 단순히 서버에 저장하는 방식으로 구현하였다. 파일을 컴파일, 실행하면 도커 컨테이너를 생성하여 그 안에서 실행하는 구조였다.<br>
                사실 웹 개발을 처음 경험하여 한달 이라는 인턴 기간 동안 공부하며 진행했던 프로젝트였기 때문에 완성도가 높지 못했고 Docker 등의 기술에 대해 완전히 이해하지 못한 채 알아서 도커를 생성하고 컴파일 실행을 해주는 오픈소스를 찾아 사용했기 때문에 부족한 점이 많았다. 그러나 이 프로젝트를 진행하면서 웹 개발은 어떠한 방식으로 이루어지는지, 개발 협업은 어떻게 이루어지는지, 데이터베이스와 연동 및 데이터 CRUD는 어떻게 하는지 등등 많은 것들을 배울 수 있었고 개발자로서의 의미있는 첫걸음이었다.
              </span>
            </v-layout>
          </v-layout>
        </v-card>
      </v-timeline-item>
      <v-timeline-item small fill-dot color="purple">
        <v-card @click="card4=!card4">
          <v-card-title>
            <v-icon large class="mr-3" v-if="!card4">mdi-chevron-down</v-icon>
            <v-icon large class="mr-3" v-else>mdi-chevron-up</v-icon>
            <span class="headline">서울대학교 - 2013.03 ~ 2020.02 졸업 예정</span>
          </v-card-title>
          <v-layout column v-if="card4" pa-5>
            <span class="title">Major</span>
            <span class="body-1 pl-3">공과대학 컴퓨터공학부(Computer Science Engineering)</span>
            <span class="title mt-4">Course</span>
            <v-layout column pl-3>
              <span class="subtitle-1 font-weight-bold">2013-2</span>
              <span class="body-1">- 프로그래밍 연습</span>
              <span class="subtitle-1 mt-2 font-weight-bold">2014-1</span>
              <span class="body-1">- 컴퓨터 프로그래밍</span>
              <span class="body-1">- 논리설계, 실험</span>
              <span class="subtitle-1 mt-2 font-weight-bold">2014-2</span>
              <span class="body-1">- 프로그래밍의 원리</span>
              <span class="subtitle-1 mt-2 font-weight-bold">2017-1</span>
              <span class="body-1">- 이산수학</span>
              <span class="body-1">- 컴퓨터 구조</span>
              <span class="subtitle-1 mt-2 font-weight-bold">2017-2</span>
              <span class="body-1">- 오토모타이론</span>
              <span class="body-1">- 운영체제</span>
              <span class="body-1">- 데이터베이스</span>
              <span class="subtitle-1 mt-2 font-weight-bold">2018-1</span>
              <span class="body-1">- 자료구조</span>
              <span class="body-1">- 알고리즘</span>
              <span class="body-1">- 데이터마이닝 개론</span>
              <span class="body-1">- 창의적통합설계2</span>
              <span class="subtitle-1 mt-2 font-weight-bold">2018-2</span>
              <span class="body-1">- 전기전자회로</span>
              <span class="body-1">- 프로그래밍언어</span>
              <span class="subtitle-1 mt-2 font-weight-bold">2019-1</span>
              <span class="body-1">- 컴퓨터그래픽스</span>
              <span class="body-1">- 소프트웨어응용</span>
              <span class="body-1">- 컴퓨터시스템특강</span>
            </v-layout>
          </v-layout>
        </v-card>
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
<style scoped>
</style>
