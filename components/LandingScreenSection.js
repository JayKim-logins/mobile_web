import React, { useEffect } from 'react'
import landingScreenSectionStyle from '../styles/LandingScreenSection.module.css'

const LandingScreenSection = ({scrollToTargetAdjusted}) => {
  
  useEffect(() => {
    document.getElementById("arrowButton").addEventListener('click', () => scrollToTargetAdjusted('#service01'))
  })
  return (

      <section className={landingScreenSectionStyle.wrap}>
        <div className={landingScreenSectionStyle.background}></div>
        <div id="arrowButton" className={landingScreenSectionStyle.arrow}>
            <span style={{width:"30px"}} className={landingScreenSectionStyle.arrow__span}>
                <canvas width="12" height="8" style={{width:"30px"}} className=""></canvas>
                <svg className="" style={{position:"absolute",top:"0px",left:"0px",width:"100%",height:"auto"}} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ffffff"></path>
                </svg>
            </span>
        </div>
      </section>

  )
}

export default LandingScreenSection
