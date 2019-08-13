import marked from 'marked';
const content: string = marked(`
## 4. (주)Omnis Labs - Deep Block 서비스 개발 ([DeepBlock](https://deepblock.site))
**기간** : 2019.02 ~ 

**프로젝트 설명**  
일반인들이 딥 러닝을 이용할 수 있도록 한 마우스 기반 AI application 플랫폼.  
학습을 위한 데이터들을 저장할 수 있는 클라우드를 제공하며 그 데이터를 가지고 학습 및 예측을 돌릴 수 있는 툴을 제공.  
Image Classification, Style Transfer, Image Segmentation, Object Detection, Faical Expression Recognition 등의 application들을 돌릴 수 있다.

**프로젝트 기술 스택** : Node.js PostgreSQL, Vue.js, Vuex, ES2015, Typescript, socketio

**맡은 부분 및 업무 내용**  
Front End Development.  
홈페이지 리뉴얼.  
vue cli 2 -> 3 마이그레이션.  
braintree, paypal을 이용한 클라우드 결제 및 앱 결제 기능 추가 (front-end 부분만).  
application들을 돌릴 수 있는 deep block app 추가 - 클라우드와의 데이터 연동. 학습 및 예측. socketio를 통한 학습 진행 상황 및 결과 실시간 렌더링.  
사진에 polygon 또는 rectangle을 annotate할 수 있는 tool 제작.  
typescript 적용.

**의의**  
이 전까지의 프로젝트 경험에 비해 깔끔한 구조 및 코드 작성을 위해 노력함.
`);
export default content;
