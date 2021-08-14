
import './App.css';
import logo from './notes.png'
import Header from './components/Header'
import Description from './components/Description'
import Createitem from './components/Createitem';
import AddButton from './components/AddButton'
import Noteitem from './components/Noteitem'
import Footer from './components/Footer'
import React,{useState} from 'react'
function App() {
  const [mynotes,savemynotes]=useState([])
  const savemyNote=(note)=>{
     savemynotes(prevNote=>{
       return [...prevNote,note]
     })

  }
  const deleteNote=(id)=>{
      savemynotes(prevNote=>{
        return prevNote.filter((note,index)=>{
          return index!==id;
         })
      })
  }
  return (

    <div className="App">
     <Header/>
     <Description />
      <div id="rootimg">
      <img id="noteimg" src={logo} alt=""/>
      </div>
     <Createitem onAdd={savemyNote} />
     <div className="Notescontainer">
     {
      
       mynotes ? (mynotes.map((note,index)=>{ return (<Noteitem key={index} id={index} onDelete={deleteNote} title={note.title} content={note.content}/>)})):(<h4>no notes found</h4>)
       
     }
     
     
     </div>
     <AddButton />
     <Footer />
    </div>

  );
}

export default App;
