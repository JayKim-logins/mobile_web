import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const article = ({article}) => {
    const router = useRouter() // 여기서 페이지 상단의 query params가져온다
    const {id} = router.query
    console.log(article);
    return (
    <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go Back</Link>
    </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    console.log(res);

    const article = await res.json()

    // 여기서 페이지로 props주입
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false // 해당 url이 없는경우 리턴값
    }
}

export default article
