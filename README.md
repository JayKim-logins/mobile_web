# TIL

- public폴더 내부는 url로 접근가능하다
- <Head> 태그 안에 html 메타 태그들을 넣을수 있다
- _document.js 파일에서도 html 메타태그들을 설정할 수 있다
- global.css에 스타일링을 모두 해도되고, 페이지별로 코드분할도 가능하다 
- css페이지별 분할한다면 `FILE_NAME.module.css` 포맷을 지켜야함
- getStaticProps vs. getServerSideProps  
    https://beside-lab.tistory.com/entry/Nextjs-getStaticProps-vs-getServerSideProps-%EC%B0%A8%EC%9D%B4%EC%99%80-%ED%99%9C%EC%9A%A9
    https://velog.io/@jay/Next.js-API-fetching
- json()
    - fetch로 http 요청/응답을 사용할 경우 json()메소드를 통해 Response스트림을 완료될때까지 읽고, body의 텍스트를 Promise형태로 반환한다
    - Axios의 경우 res.json()이 자동으로 된다

## Errors
- Error: getStaticPaths was added without a getStaticProps in /article/[id]. Without getStaticProps, getStaticPaths does nothing
- ReferenceError: window is not defined