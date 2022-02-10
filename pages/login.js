import React, { useEffect } from 'react'
import axios from 'axios';

const login = () => {
  
  const getSession = () => {
        
    // const url = 'https://trade.tlogin.net/exclude/doLogin.do'
    const url = 'login/exclude/doLogin.do'
  
    axios.post(url, 
      {
        "compCd": "1005",
        "userId": "damin",
        "userPw": "damin",
        "isKeepLogin": false,
        headers: {
          'Content-Type': 'application/json', 
        }
      },
      { withCredentials: true }
    ).then(response => {
      console.log(response.data);
    })
    
  }

  useEffect(() => {
    getSession()

  })
    
  return (
    <div>
      
    </div>
  )
}


// export const getStaticProps = async () => {

//   var myHeaders = new Headers();
//   myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDIxNDQ0ODB9.gTIbjGXk1VVuPOwhoYD1Vae4pQ9gLAmds2eVkVIqNDgFnbG174vxvI_pPIgt49FbzsSRn89gpTZIQZF9tfx5OA");
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Cookie", "SESSION=ZjVhZmE2N2MtOWIzOS00NmY0LTg5ODMtYWU3NGIxZGEwN2M4");

//   var raw = JSON.stringify({
//     "compCd": "1005",
//     "userId": "damin",
//     "userPw": "damin",
//     "isKeepLogin": false
//   });

//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//   };

//   const session = await (await fetch("https://trade.tlogin.net/exclude/doLogin.do", requestOptions)).json()

//   return {
//     props: {
//         session
//     }
//   }
// }

export default login