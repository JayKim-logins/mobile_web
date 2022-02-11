import React from 'react'
import Image from 'next/image'

const ServiceSection = () => {
  return (
    <section id="service01" direction="row" >
        {/* <img src="/images/service-intro-01.gif" alt="실시간 견적조회" /> */}
        <Image src="/images/service-intro-01.gif" alt="실시간 견적조회" width="400" height="246" /> 
        <div >
            <em>전세계 수입물류 해상/항공운임 확인</em>
            <h3>실시간 견적조회</h3>
            <p>
                간단한 화물/지역 정보를 입력하면 즉각적인 견적을 제공합니다.<br />
                디지털을 통해 불필요한 비용 제거, 쉽다만의 특가 운임을 확인하세요.<br />
                <strong>(※ 주요 항구/공항이 아닌 경우 24시간 내 견적 안내)</strong>
            </p>
            <div >
                <div >실시간 견적조회</div>
                <span style={{width: "1.5rem", height: "1.5rem"}} >
                    <canvas width="24" height="24" style={{width: "1.5rem"}}></canvas>
                    <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="black"></path>
                    </svg>
                </span>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection
