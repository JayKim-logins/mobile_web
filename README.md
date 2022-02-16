## Structure

```
┌── components/             // 재사용 가능한 컴포넌트 모음
│    ├── common/            // 공통적으로 사용되는 컴포넌트들(ex button, modal)             
│    └── layout/            // 각 페이지들의 전체 레이아웃이자 레이아웃 내부 컴포넌트들의 모임
│                           
├── pages/                  // 페이지 담당 컴포넌트(폴더구조로 url 결정)
│    ├── article/[id]       // 상세페이지 조회시 나오는 화면 ex) abc.com/article/1 
│    ├── _app.js            // 레이아웃 설정
│    ├── _document.js       // meta태그 정의 및 전체 페이지의 설정
│    └── cards.js/          // abc.com/cards 로 접근가능        
│
├── styles/                 // css 관련 파일 모음
│    ├── globals.css        // 전역에 적용되는 CSS           
│    └── Cards.modules.css  // 컴포넌트별 CSS 설정시 해당 포맷에 맞춰 파일명 작성
│
├── public/                 // url로 접근가능한 폴더, 그리드 라이브러리 js파일을 리액트에 첨부하기위해 이 폴더로 이동 
│    ├── images/
│    └── AUIGrid/
│
├── api/                    // 서버와의 통신 로직 
├── config/                 // 개발모드, 배포모드별 설정
│
└── server.js               // local환경에서 운영중인 서버와의 cors에러 해결을 위한 프록시 서버
```

# 참고
- html 메타 태그들은 next/head의 <Head>태그를 이용해 _document.js 파일에 추가한다
- 컴포넌트별 css 분할한다면 `FILE_NAME.module.css` 포맷을 지켜야한다
- Next.js에서의 data fetch
    1. getStaticProps
        - 빌드시에 단 한번 호출되고 바로 static file로 빌드된다
        - pre-render
        - SSG(Static Site Generation)
    
    2. getStaticPaths
        - getStaticProps와 함께 쓰인다
        - getStaticProps로 모든 모든 데이터를 가져온뒤 상세페이지 분리
    
    3. getServerSideProps
        - page가 요청받을 때마다 fetch
        - pre-render
        - SSR(Server Side Rendering)
    
    4. axios (component mount 이후)
        - useEffect(() => { //axios }
    
- json()
    - fetch로 http 통신 시 json()메소드를 통해 Response스트림을 완료될때까지 읽고, body의 텍스트를 Promise형태로 반환한다
    - Axios의 경우 res.json()이 자동으로 되어있다
- [외부 자바스크립트 파일 로드](https://ichi.pro/ko/reacteseo-oebu-javascript-pail-eul-chugahaneun-4-gaji-bangbeob-143209340483176)

## 에러 

- Error: getStaticPaths was added without a getStaticProps in /article/[id]. Without getStaticProps, getStaticPaths does nothing  
⇒ getStaticPaths는 getStaticProps와 함께 있어야 한다
- ReferenceError: window is not defined  
⇒ 서버사이드 렌더링시 브라우저는 window객체를 인식할수 없기때문에 componentDidMount/useEffect 사이클에서 작업한다
- Error: React Hook "useEffect" is called in function "grid" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use".   
⇒함수형 컴포넌트명은 대문자로 시작해야 한다
- Warning: Do not use . Use Image from 'next/image' instead.  
⇒ html의 <img />태그 대신 next/image의 <Image />를 이용하기를 권장한다
- External synchronous scripts are forbidden.  
⇒ 외부 스크립트 추가 시 `async="async”` 설정
- TypeError: Cannot read properties of undefined (reading 'then')  
⇒ 불필요한 import 파일 제거후 사라짐(내경우엔 NoSSRWrapper컴포넌트)
