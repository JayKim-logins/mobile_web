import React from 'react'
import serviceStyle from '../styles/Service2.module.css'
import Image from 'next/image'

const ServiceSection2 = () => {
  return (
    <section id="service02" direction="row" className={serviceStyle.wrap} >
        <Image src="/images/service2-left.png" alt="실시간 견적조회" width="130" height="80" className={serviceStyle.leftImg} /> 
        <h3>
            복잡하고 번거로운 수입물류<br />
            이제 웹/모바일에서 쉽고 간편하게<br />
            TradeVerse만의 서비스를 소개합니다 :)
        </h3>
        <Image src="/images/service2-right.gif" alt="실시간 견적조회" width="241" height="241" className={serviceStyle.rightImg}/> 
    </section>
  )
}

export default ServiceSection2
