import Head from 'next/head'
import StrengthSection from '../components/StrengthSection'
import homeStyle from '../styles/Home.module.css'
import LandingScreenSection from '../components/LandingScreenSection'
import ServiceSection from '../components/ServiceSection'
import ServiceSection2 from '../components/ServiceSection2'
import { useEffect } from 'react'
import Meta from '../components/Meta'

export default function Home({ articles }) {
  
  function scrollToTargetAdjusted(selector){
    var element = document.querySelector(selector);
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
    });
  }
  


  return (

    <main className={homeStyle.wrap}>
      {/* 메타태그 추가 */}
      <Meta />
      <Head> 
        <title>mobile web</title>
      </Head>

      <LandingScreenSection scrollToTargetAdjusted={scrollToTargetAdjusted} />
      <ServiceSection />
      <ServiceSection2 />
      <StrengthSection id="a"/>
      <ServiceSection />
      <ServiceSection2 />
      <StrengthSection id="b"/>
      <ServiceSection />
      <ServiceSection2 />
      <StrengthSection id="c"/>
      
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