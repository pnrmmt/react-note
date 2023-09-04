import React, { useState } from 'react'
import plusIcon from "../../assets/black-plus-icon-8.jpg";
import "./Sidebar.css"

function Sidebar(props) {

  const colors=["#91057a", "#00aa9c","#d34a00","#ed5072","#81ea00"]

  const [listOpen, setListOpen]=useState(false)
  return (
    <div className='sidebar'>
      <img src={plusIcon} alt='Add' onClick={()=>setListOpen(!listOpen)}/>
      <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>
        {
          colors.map((item,index)=><li key={index} className='sidebar_list_item' style={{backgroundColor:item}} onClick={()=>props.addNote(item)} />)
        }
      
      </ul>
      
    </div>
  )
}

export default Sidebar
