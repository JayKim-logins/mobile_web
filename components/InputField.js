import React from 'react'
import inputFieldStyle from '../styles/InputField.module.css'

const InputField = () => {
  return (
    <form className={inputFieldStyle.input}>
    <input 
        className={inputFieldStyle.input__box} 
        type="input" 
        placeholder="검색어를 입력해주세요"
        
        >

    </input>
    <button className={inputFieldStyle.input__submit} type="submit">검색</button>
  
</form>
  )
}

export default InputField
