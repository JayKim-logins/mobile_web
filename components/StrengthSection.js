import React from 'react'
import strengthSectionStyle from '../styles/StrengthSection.module.css'

const StrengthSection = ({id}) => {
  return (
    <section id={id} className={strengthSectionStyle.strength__section}>
        <ul >
          <li >
            <div >
              <em>Speed</em>
              <strong>95%</strong>
              <p>트레이드버스를 이용하는 95%의 고객들은 일반 시중 포워더 대비 빠른 속도로 물류비 견적을 확인하셨습니다.</p>
            </div>
          </li>
          <li>
            <div >
              <em>Convenience</em>
              <strong>89%</strong>
              <p>트레이드버스를 이용하는 89%의 고객들은 수입 진행 건마다 발생하는 서류, 명세서를 웹에서 간단히 관리하고, 운송 단계별 자동현황 안내로 편리하게 사용하고 있다는 의견을 주셨습니다.</p>
            </div>
          </li>
          <li >
            <div >
              <em>Cost Down</em>
              <strong>50%</strong>
              <p>트레이드버스 특화 서비스를 이용하는 대다수의 고객들은 기존 포워더 대비 최대 50% 가량의 수입 물류비 절감을 경험하고 있습니다.</p>
            </div>
          </li>
        </ul>
      </section>
  )
}

export default StrengthSection
