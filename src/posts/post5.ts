import marked from 'marked';
const content: string = marked(`
## 5. (전공 수업)소프트웨어 응용 - 밥 메이트 매칭 서비스 개발
**기간** : 2019.03 ~ 2019.06

**프로젝트 설명**  
산학 협력 수업으로 소프트웨어 개발 방법론을 배운 뒤 그 방식에 따라 간단한 팀 프로젝트를 진행.  
교내에서 밥 메이트를 구하고 싶은 사람들을 위한 매칭 서비스.

**프로젝트 기술 스택** : Django, Django Rest Framework, sqlLite, Vue.js, Vuex, ES2015

**맡은 부분 및 업무 내용**  
개발 리더 역할을 맡아서 함.  
*Back End* [source](https://github.com/chang02/honbob_back)  
Django Rest Auth를 이용한 회원가입, 로그인 구현.  
매칭 검색을 할 때 필터 기능 구현.  
*Front End* [source](https://github.com/chang02/honbob-front)  
front-end에서 UI를 제외한 전반적인 부분을 맡아서 개발.

**의의**  
소프트웨어 개발 방법론인 Agile 방식으로 마치 현업에서 처럼 팀원들과 협업하며 프로젝트를 진행해 볼 수 있었다.  

**메인 페이지**  
![메인페이지](img/honbob/1.png)  
**마이페이지**  
본인 정보를 조회하고 수정할 수 있다.  
![마이페이지](img/honbob/2.png)  
**매칭 등록 페이지**  
함께 식사할 메이트를 찾는 글을 올리는 페이지  
다양한 조건 필터를 작성할 수 있고 교내 식당들을 검색할 수 있다.  
![매칭등록페이지](img/honbob/3.png)  
**참가신청한 모습**  
다른 유저가 검색하여 참가 신청한 모습이다.   
![참가신청한모습](img/honbob/4.png)  
**본인과 관련된 매칭 조회**  
참가자를 확인하고 수락 및 거절할 수 있다.  
내가 올린 매칭 및 참가한 매칭을 관리할 수 있다.  
![본인매칭조회](img/honbob/5.png)  
`);
export default content;