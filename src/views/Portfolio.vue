<template>
  <v-layout fill-height pa-5 column>
    <span class="display-1 font-weight-bold mb-5">Portfolio</span>
    <div class="title mt-3">Skills</div>
    <div class="ml-4">
      <div class="subtitle purple--text mt-2">Strong</div>
      <div>
        <v-chip color="purple lighten-2 mr-2 mb-1" v-for="val in strong" v-bind:key="val" class="white--text">{{val}}</v-chip>
      </div>
      <div class="subtitle green--text mt-2">Available</div>
      <div>
        <v-chip color="green lighten-1 mr-2 mb-1" v-for="val in available" v-bind:key="val" class="white--text">{{val}}</v-chip>
      </div>
      <div class="subtitle yellow--text text--darken-2 mt-2">Knowledge</div>
      <div>
        <v-chip color="yellow darken-2 mr-2 mb-1" v-for="val in knowledge" v-bind:key="val" class="white--text">{{val}}</v-chip>
      </div>
    </div>
    <div class="title mt-3">Major Courses</div>
    <v-layout column ml-4>
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
      <span class="body-1">- 오토마타이론</span>
      <span class="body-1">- 운영체제</span>
      <span class="body-1">- 데이터베이스</span>
      <span class="subtitle-1 mt-2 font-weight-bold">2018-1</span>
      <a href="https://github.com/chang02/data_structure"><span class="body-1">- 자료구조</span></a>
      <a href="https://github.com/chang02/alg"><span class="body-1">- 알고리즘</span></a>
      <span class="body-1">- 데이터마이닝 개론</span>
      <span class="body-1">- 창의적통합설계2</span>
      <span class="subtitle-1 mt-2 font-weight-bold">2018-2</span>
      <span class="body-1">- 전기전자회로</span>
      <a href="https://github.com/chang02/pl"><span class="body-1">- 프로그래밍언어</span></a>
      <span class="subtitle-1 mt-2 font-weight-bold">2019-1</span>
      <a href="https://github.com/chang02/graphics"><span class="body-1">- 컴퓨터그래픽스</span></a>
      <span class="body-1">- 소프트웨어응용</span>
      <span class="body-1">- 컴퓨터시스템특강</span>
    </v-layout>
    <div class="title mt-3">Projects</div>
    <v-layout column ml-4>
      <div v-html="markdown1"></div>
      <v-divider class="my-4" />
      <div v-html="markdown2"></div>
      <v-divider class="my-4" />
      <div v-html="markdown3"></div>
      <v-divider class="my-4" />
      <div v-html="markdown4"></div>
      <v-divider class="my-4" />
      <div v-html="markdown5"></div>
    </v-layout>
  </v-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import content1 from '@/posts/post1';
import content2 from '@/posts/post2';
import content3 from '@/posts/post3';
import content4 from '@/posts/post4';
import content5 from '@/posts/post5';

@Component<Portfolio>({})
export default class Portfolio extends Vue {
  private strong: string[] = ['Python', 'Java', 'Django', 'HTML', 'CSS', 'SCSS',
    'Javascript', 'jQuery', 'ES2015', 'Vue.js', 'Vuetify', 'Restful'];
  private available: string[] = ['C', 'Node.js', 'Express', 'Electron.js', 'Mysql',
    'MongoDB', 'Firebase', 'AWS EC2', 'AWS S3'];
  private knowledge: string[] = ['React.js', 'Docker', 'AWS Cloudfront'];
  private markdown1: string = content1;
  private markdown2: string = content2;
  private markdown3: string = content3;
  private markdown4: string = content4;
  private markdown5: string = content5;
}
</script>
<style>
img {
  width: 700px;
}
</style>
