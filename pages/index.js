import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import {server} from '../config'

export default function Home({ articles }) {
  
  return (
    <div>
      {/* 메타태그 추가 */}
      <Head> 
        <title>web dev </title>
      </Head>
      <h1>Next.js</h1>
      <ArticleList articles={articles}/>
    </div>
  )
}


// export const getStaticProps = async () => {
//   const res = await fetch(`{}/api/articles`)
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}