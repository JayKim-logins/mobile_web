import React from 'react'
import cookieCutter from 'cookie-cutter'

const login = ({ session }) => {
    // cookieCutter.set('SESSION', session)
    console.log('로그인 세션', session)
  return (
    <div>
      {session.resultCd}
    </div>
  )
}


export const getStaticProps = async () => {
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDIxNDQ0ODB9.gTIbjGXk1VVuPOwhoYD1Vae4pQ9gLAmds2eVkVIqNDgFnbG174vxvI_pPIgt49FbzsSRn89gpTZIQZF9tfx5OA");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "SESSION=ZjVhZmE2N2MtOWIzOS00NmY0LTg5ODMtYWU3NGIxZGEwN2M4");

var raw = JSON.stringify({
  "compCd": "1005",
  "userId": "damin",
  "userPw": "damin",
  "isKeepLogin": false
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const session = await (await fetch("https://trade.tlogin.net/exclude/doLogin.do", requestOptions)).json()
console.log(session)
  

//   const session = await res.json();
  console.log(session)
  return {
    props: {
        session
    }
  }
}

export default login