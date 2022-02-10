import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Article = ({article}) => {
    const router = useRouter() // 여기서 페이지 상단의 query params가져온다
    const {id} = router.query
    return (
    <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go Back</Link>
    </>
    )
}

// 페이지 들어올 때마다 호출됨
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// /posts로 한번에 모든 데이터들을 가져와서 하나씩 상세 페이지에서 보여주는 방식
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    // 여기서 페이지로 props주입
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false // 해당 url이 없는경우 리턴값
    }
}

export default Article
