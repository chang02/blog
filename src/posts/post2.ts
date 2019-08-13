import marked from 'marked';
const content: string = marked(`
## 2. (주)코드윙즈 - 코드윙즈 서비스 유지.보수 및 기능 추가 ([코드윙즈](https://www.codewings.org))  
**기간** : 2018.01 ~ 2018.10

**프로젝트 설명**  
선생님과 학생이 화상으로 코딩과외를 할 수 있는 플랫폼.  
실시간 코드 공유 및 화상 전화 가능.  
화면공유 기능.

**프로젝트 기술 스택** : django, mysql, websocket, webRTC, javascript, scss, jquery

**맡은 부분 및 업무 내용**  
Full Stack Development  
홈페이지 리뉴얼 - 홈페이지 전체를 새로운 UI, 디자인으로 변경하는 작업. (Front-End)  
홈 스쿨 기능 추가 - 학생들이 집에서 혼자 학습하고 문제를 풀어볼 수 있는 기능 및 코드 자동채점 기능 추가. (Front-End, websocket)  
일정 관리 기능 추가 - 선생님과 학생이 정한 일정을 등록할 수 있는 기능 추가. (Front-End, Back-End)  
알림톡 기능 추가 - 수업 시작 전에 학생과 선생님에게 알림톡을 보내는 기능 추가. 카카오톡 알림톡 서비스를 제공하는 bizppurio의 모듈을 이용. (Back-End)  
관리자 페이지 생성 - 기존에는 django의 admin 페이지를 이용하고 있었으나, 관리자에게 좀 더 편한 툴을 제공하기 위함. (Front-End, Back-End)

**의의**  
큰 규모는 아니지만 처음 경험하는 실 서비스 중인 프로젝트 개발.  
html, css, javascript, jQeury 능숙하게 사용.  
Django Model을 통한 Database 관리.  
필요한 데이터를 Database로부터 읽고 쓰고 가공하여 Front-End와 통신.  
`);
export default content;
