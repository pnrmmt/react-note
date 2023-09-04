import React from 'react'
import "./Note.css"
import deleteIcon from "../../assets/delete-32.png"
function Note(props) {
 
  return (
    <div className='note' style={{backgroundColor:props.note.color}}>
        <textarea className='note_text' defaultValue={props.note.text}/>
        <div className='note_footer'>
        <p>{props.note.time}</p>
        <img src={deleteIcon} alt='delete' onClick={()=>props.deleteNote(props.note.id)}/>

        </div>
        
      
    </div>
  )
}

export default Note
