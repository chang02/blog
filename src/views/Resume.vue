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
            <span class="title">직책</span>
            <span class="body-1 pl-3">개발자 (Front End Web Developer)</span>
            <span class="title mt-5">업무 : Deep Block 웹 페이지 개발 (<a href="https://deepblock.site">https://deepblock.site</a>)</span>
            <v-layout column pl-3>
              <span class="subtitle-1 font-weight-bold">사용한 기술스택</span>
              <span class="body-1">Vue.js, Vuex, ES6, typescript, socketio</span>
              <span class="subtitle-1 font-weight-bold mt-2">설명</span>
              <span class="body-1">
                Deep Block은 일반인들이 딥 러닝을 이용할 수 있도록 한 마우스 기반 AI application 플랫폼이다.<br>
                학습을 위한 데이터들을 저장할 수 있는 클라우드를 제공하며 그 데이터를 가지고 학습 및 예측 돌릴 수 있는 툴을 제공한다.<br>
                Image Classification, Style Transfer, Image Segmentation, Object Detection, Facial Expression Recognition 등의 AI application을 이용할 수 있다.
              </span>
              <span class="subtitle-1 font-weight-bold mt-2">한 일</span>
              <span class="body-1">
                1. 홈페이지 리뉴얼<br>
                2. vue cli 2 -> 3 마이그레이션<br>
                3. braintree, paypal을 이용한 결제 기능 추가 (front-end 부분만)<br>
                4. application들을 돌릴 수 있는 deep block app 추가 - 클라우드와의 데이터 연동. 학습 및 예측. socketio를 통한 학습 진행 상황 및 결과 실시간 렌더링.<br>
                5. typescript 적용.
              </span>
            </v-layout>
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
            <span class="title mt-5">업무1 : 코드윙즈 서비스 유지, 보수 및 기능 추가 (<a href="https://www.codewings.org">https://codewings.org</a>)</span>
            <v-layout column pl-3>
              <span class="subtitle-1 font-weight-bold">사용한 기술스택</span>
              <span class="body-1">Python django, django template, mysql, websocket, webRTC, javascript, scss, jquery</span>
              <span class="subtitle-1 font-weight-bold mt-2">설명</span>
              <span class="body-1">
                코드윙즈 서비스는 학생들을 위한 화상 코딩 과외 플랫폼이다.<br>
                선생님과 학생간의 화상대화, 코드 실시간 공유, 개인 화면 공유, 코드 실행 및 결과 확인 기능을 제공한다.
              </span>
              <span class="subtitle-1 font-weight-bold mt-2">한 일</span>
              <span class="body-1">
                1. 홈페이지 리뉴얼 - 홈페이지 전체를 새로운 UI, 디자인으로 변경하는 작업.<br>
                2. 홈 스쿨 기능 추가 - 학생들이 집에서 혼자 학습하고 문제를 풀어볼 수 있는 기능 추가.<br>
                3. 일정 관리 기능 추가 - 선생님과 학생이 정한 일정을 등록할 수 있는 기능 추가.<br>
                4. 알림톡 기능 추가 - 수업 시작 전에 학생과 선생님에게 알림톡을 보내는 기능 추가. 카카오톡 알림톡 서비스를 제공하는 bizppurio의 모듈을 이용<br>
                5. 관리자 페이지 생성 - 기존에는 django의 admin 페이지를 이용하고 있었으나, 관리자에게 좀 더 편한 툴을 제공하기 위함<br>
              </span>
            </v-layout>
            <span class="title mt-5">업무2 : 코드메이트 서비스 개발 (서비스 종료)</span>
            <v-layout column pl-3>
              <span class="subtitle-1 font-weight-bold">사용한 기술스택</span>
              <span class="body-1">Python django, django rest framework, mysql, firebase, websocket, webRTC, Vue.js, Vuex, ES6, scss</span>
              <span class="subtitle-1 font-weight-bold mt-2">설명</span>
              <span class="body-1">
                코드메이트 서비스는 개발자 또는 프로그래밍을 배우는 사람들을 대상으로 한 질문 응답 서비스이다.<br>
                코드윙즈와 마찬가지로 화상 공유를 통한 질문 응답, 또는 채팅을 통한 질문 응답이 가능하다.
              </span>
              <span class="subtitle-1 font-weight-bold mt-2">한 일</span>
              <span class="body-1">
                질문 올리기, 질문 응답 신청, 채팅, 화상 강의실, 리뷰, payment 등의 기능들을 위한 DB 설계 및 개발 전체 진행
              </span>
            </v-layout>
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
                사실 웹 개발을 처음 경험하여 한달 이라는 인턴 기간 동안 공부하며 진행했던 프로젝트였기 때문에 완성도가 높지 못했고 Docker 등의 기술에 대해 완전히 이해하지 못한 채 알아서 도커를 생성하고 컴파일 실행을 해주는 오픈소스를 찾아 사용했기 때문에 부족한 점이 많았다. 그러나 이 프로젝트를 진행하면서 웹 개발은 어떠한 방식으로 이루어지는지, 개발 협업은 어떻게 이루어지는지, 데이터베이스와 연동 및 데이터 CRUD는 어떻게 하는지 등등 많은 것들을 배울 수 있었다.
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
