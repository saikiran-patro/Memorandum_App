import React from 'react';

const Noteitem = (props) => {
    const handleClick=function(){
        props.onDelete(props.id);
    }

    return(
        <div className="Noteitem">
           <div className="notetitle">
            <h4>{props.title}</h4>   </div>
            <p>{props.content}</p>
            <div id="deletenote"><button type="button" onClick={handleClick} class="btn btn-outline-danger btn-sm"><i class="fas fa-trash "></i></button></div>
        </div>
    )
}
export default Noteitem;