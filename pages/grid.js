import React, { Component, useEffect } from 'react';
import '../AUIGrid/AUIGrid'
import '../AUIGrid/AUIGridLicense'
import InputField from '../components/InputField';
import axios from 'axios'

let mainGrid ;
let list;
const grid = () => {


  useEffect(async() => {

  const createAUIGrid = () => {
    // 칼럼 레이아웃 정의
    let columnLayout = [ {
      dataField : "name",
      headerText : "종목명",
      width: 160
    }, {
      dataField: "volume",
      headerText: "거래량",
      dataType:"numeric",
      formatString : "#,##0",
      width : 140,
      style : "my-column-style"
    }, {
      dataField: "total",
      headerText: "시가 총액",
      dataType:"numeric",
      formatString : "#,##0",
      width : 140,
      style : "my-column-style"
    }];

    // 그리드 속성 설정
    let gridPros = {
      groupingMessage : "여기에 칼럼을 드래그하면 그룹핑이 됩니다."
    };

    mainGrid = AUIGrid.create("#grid_wrap", columnLayout, gridPros);
  }


  var data = JSON.stringify({
    "search_dt": "20220115",
    "search_dt1": "20220121",
    "search_gb": "",
    "search_txt": "",
    "search_all": "N",
    "search_me": "N"
  });
  
  var config = {
    method: 'post',
    url: 'https://trade.tlogin.net:19000/imp/selectImpList.do',
    headers: { 
      'Content-Type': 'application/json', 
      'Cookie': 'SESSION=ZjVhZmE2N2MtOWIzOS00NmY0LTg5ODMtYWU3NGIxZGEwN2M4'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  

  

  // list = await fetch("https://trade.tlogin.net:19000/imp/selectImpList.do", requestOptions)
  // const res = await list.text()
  // console.log(res)
  // window.AUIGrid.setGridData(mainGrid, res);
  },[]);

  return (
    <div className="App">
      <span className="heading">App</span>
      <InputField />
      
      <div id="grid_wrap" style={{height: "70%", width: "90%"}}></div>

    </div>
  )
}


export default grid
