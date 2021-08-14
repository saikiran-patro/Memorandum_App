import React from 'react';
var f=()=>{

    
    document.querySelector(".description").classList.toggle('make');
    document.querySelector(".header").classList.toggle('make');
    document.querySelector("#rootimg").classList.toggle('make');
    document.querySelector(".Notescontainer").classList.toggle('make');
    document.querySelector(".footer").classList.toggle('make');
    document.querySelector(".Createnote").classList.toggle('active');
  }
const AddButton=()=>{
   
    return(
        <button onClick={f} id="AddButton"><i class="fas fa-plus fa-3x "></i></button>
    )
}
export default AddButton;