import React, { useEffect, useState } from 'react';
import InputField from '../components/InputField';
import gridStyle from '../styles/Grid.module.css';
import axios from 'axios';
import Meta from '../components/Meta';
import '../public/AUIGrid/AUIGridLicense';


const Grid = () => {

  const [mainGrid, setMainGrid] = useState('');
    
  useEffect(() => {
    
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
      setMainGrid(window.AUIGrid.create("#grid_wrap", columnLayout, gridPros));
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
        window.AUIGrid.setGridData(mainGrid, response.data.data);
      }).catch((e) => console.error(e))
      
    }
  
    createAUIGrid();
    getGridData();
    window.addEventListener('resize', () => {
      window.AUIGrid.resize(mainGrid);
  })
     
    return () => {
      window.AUIGrid.destroy(mainGrid);
    }

  },[mainGrid]);

  return (
    
      <div className={gridStyle.grid}>
        <Meta />
        <span className={gridStyle.heading}>App</span>
        <InputField />
        <div id="grid_wrap" style={{height: "70%", width: "90%"}}></div>
      </div>

  )
}

export default Grid


