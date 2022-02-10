import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import {server} from '../config'
import homeStyle from '../styles/Home.module.css'

export default function Home({ articles }) {
  
  return (
    <main className={homeStyle.wrap}>
      {/* 메타태그 추가 */}
      <Head> 
        <title>mobile web</title>
      </Head>
      <div className={homeStyle.background}>
      </div>
      <div className={homeStyle.arrow}>
        
          <span style={{width:"30px"}} className={homeStyle.arrow__span}><canvas width="12" height="8" style={{width:"30px"}} className=""></canvas><svg className="" style={{position:"absolute",top:"0px",left:"0px",width:"100%",height:"auto"}} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ffffff"></path></svg></span>
        
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}