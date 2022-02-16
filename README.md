# 참고사항

- public폴더 내부는 url로 접근가능하다
- <Head> 태그 안에 html 메타 태그들을 넣을수 있다
- _document.js 파일에서도 html 메타태그들을 설정할 수 있다
- global.css에 스타일링을 모두 해도되고, 페이지별로 코드분할도 가능하다 
- css페이지별 분할한다면 `FILE_NAME.module.css` 포맷을 지켜야함
- getStaticProps vs. getServerSideProps  
    https://beside-lab.tistory.com/entry/Nextjs-getStaticProps-vs-getServerSideProps-%EC%B0%A8%EC%9D%B4%EC%99%80-%ED%99%9C%EC%9A%A9
    https://velog.io/@jay/Next.js-API-fetching
    https://velog.io/@beginal/Next.js-9.3%EB%B2%84%EC%A0%84-%EC%9D%B4%ED%9B%84%EC%9D%98-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4
- json()
    - fetch로 http 요청/응답을 사용할 경우 json()메소드를 통해 Response스트림을 완료될때까지 읽고, body의 텍스트를 Promise형태로 반환한다
    - Axios의 경우 res.json()이 자동으로 된다

## 에러처리 내역
- Error: getStaticPaths was added without a getStaticProps in /article/[id]. Without getStaticProps, getStaticPaths does nothing
    getStaticPaths는 getStaticProps와 함께 있어야 한다
    - getServerSideProps: 상세페이지 방문시마다 api호출
    - getStaticPaths, getStaticProps: 첫api호출로 모든 데이터를 가져온뒤 상세페이지 분리
- ReferenceError: window is not defined
    서버사이드 렌더링시 브라우저는 인식할수 없기때문에 componentDidMount/useEffect 사이클내에서 작업한다
- Error: React Hook "useEffect" is called in function "grid" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use".
    함수형 컴포넌트명은 대문자로 시작해야 한다

- \> Build error occurred: ReferenceError: window is not defined  
    https://velog.io/@taese0ng/Next.js-window%EA%B0%9D%EC%B2%B4%EA%B0%80-%EC%97%86%EB%8B%A4%EA%B3%A0%ED%95%A0%EB%95%8C
    
- Warning: Do not use <img>. Use Image from 'next/image' instead.
- External synchronous scripts are forbidden.
- TypeError: Cannot read properties of undefined (reading 'then')
    불필요한 import 파일 제거후 사라짐(내경우엔 NoSSRWrapper컴포넌트)
- 외부 자바스크립트 파일 로드
    https://velog.io/@conan/js-script
    https://ichi.pro/ko/reacteseo-oebu-javascript-pail-eul-chugahaneun-4-gaji-bangbeob-143209340483176
