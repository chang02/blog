import marked from 'marked';
const content: string = marked(`
## 1. (주)씨엠에스에듀 - Web IDE 제작  
**기간** : 2017.08 1개월

**프로젝트 설명**  
웹 상에서 코딩하고 실행해볼 수 있는 단일 페이지 웹 환경 만들기.  
작성한 코드들을 저장 및 관리할 수 있는 filetree 제공.
다양한 프로그래밍 언어에 대해 컴파일 및 실행하고 결과를 확인할 수 있음.

**프로젝트 기술 스택** : Node.js, Express, Mongodb, Docker, React.js

**맡은 부분 및 업무 내용**  
Back End Development  
작성한 코드를 서버 내 공간에 유저별로 저장, 수정, 삭제 등을 할 수 있는 기능(storage에 직접 저장)  
유저의 filetree에 대한 정보를 MongoDB에 관리.  
저장한 코드를 Docker안에서 컴파일 및 실행할 수 있는 기능(compilebox라는 오픈소스 사용)

**의의**  
웹 개발을 처음 해보는 입장에서 한달 동안 공부하며 진행했던 프로젝트였기 때문에 완성도가 높지 못했고 구현 방식도 완벽하지 않았다.  
그러나 웹 개발의 큰 틀을 이해할 수 있었고, 협업이 어떻게 이루어지는지도 배울 수 있었음.
`);
export default content;
