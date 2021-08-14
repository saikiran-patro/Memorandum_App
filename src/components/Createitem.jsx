import React,{useState} from 'react';



const Createitem=(props)=>{
  const [note,setNote]=useState({
    title:"",
    content:""
  })
  const noteChecker=(event)=>{
    const {name,value}=event.target
    if (name!=="" && value!==""){
    setNote(
      prevNote=>{
        return{
          ...prevNote,[name]:value
        }
      }

      
    )
    }
   

  }
  const saveNote=()=>{
    if (note.title!=="" && note.content!==""){
      props.onAdd(note)
    }
    

     
    document.querySelector(".description").classList.toggle('make');
    document.querySelector(".header").classList.toggle('make');
    document.querySelector("#rootimg").classList.toggle('make');
    document.querySelector(".Notescontainer").classList.toggle('make');
    document.querySelector(".footer").classList.toggle('make');
    document.querySelector(".Createnote").classList.toggle('active');
  }
    return(
        <div className="Createnote">
        <form>
          <input id="ititle" name="title"onChange={noteChecker} type="text" placeholder="Your Title"></input><br/>
          <textarea id="iarea" name="content" onChange={noteChecker} placeholder="content"  ></textarea><br/><br/>
          <button type="button" onClick={saveNote} className="btn btn-success">Add Note</button>
        </form>
        </div>
    )
}
export default Createitem;