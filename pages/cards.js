import React from 'react'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import Meta from '../components/Meta'
const cards = ({ articles }) => {

  return (
    <div>
      
      
      <Head> 
        <title>cards</title>
      </Head>
      <Meta title='Cards' />
      <h1>Next.js</h1>
      <ArticleList articles={articles}/>
    </div>
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

export default cards





