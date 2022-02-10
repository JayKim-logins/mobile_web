import React, { Component, useEffect } from 'react';
import '../AUIGrid/AUIGrid'
import '../AUIGrid/AUIGridLicense'
import InputField from '../components/InputField';
import gridStyle from '../styles/Grid.module.css'
import axios from 'axios'
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())


const Grid = () => {
  let mainGrid
  
  // const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts?_limit=6', fetcher)
  

  const createAUIGrid = () => {
    // 칼럼 레이아웃 정의
    let columnLayout = [ {
      dataField : "bl_eta",
      headerText : "bl_eta",
    }, {
      dataField: "im_napse_sangho",
      headerText: "im_napse_sangho",
      dataType:"numeric",
      formatString : "#,##0",
      style : "my-column-style"
    }, {
      dataField: "bl_st_txt",
      headerText: "bl_st_txt",
      dataType:"numeric",
      formatString : "#,##0",
      style : "my-column-style"
    }];

    // 그리드 속성 설정
    let gridPros = {
      groupingMessage : "여기에 칼럼을 드래그하면 그룹핑이 됩니다."
    };

    mainGrid = window.AUIGrid.create("#grid_wrap", columnLayout, gridPros);
  }

  const getGridData = () => {
    
    const url = 'api/imp/selectImpList.do'
  
    axios.post(url, 
      {
        "search_dt": "20220115",
        "search_dt1": "20220121",
        "search_gb": "",
        "search_txt": "",
        "search_all": "N",
        "search_me": "N",
        headers: {
          'Content-Type': 'application/json', 
        }
      },
      { withCredentials: true }
    ).then(response => {
      console.log(response.data.data);
      window.AUIGrid.setGridData(mainGrid, response.data.data);
    })
    
    
  }


  useEffect(() => {
  createAUIGrid();
  getGridData();

  // list = await fetch("https://trade.tlogin.net:19000/imp/selectImpList.do", requestOptions)
  // const res = await list.text()
  // console.log(res)
     
    return () => {
      window.AUIGrid.destroy(mainGrid);
      console.log('leaving');
    }
  },[]);

  return (
    <div className={gridStyle.grid}>
      <span className={gridStyle.heading}>App</span>
      <InputField />
      
      <div id="grid_wrap" style={{height: "70%", width: "90%"}}></div>
    </div>
  )
}



// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }

export default Grid
