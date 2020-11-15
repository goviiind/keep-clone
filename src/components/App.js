import React, { useState } from 'react';
import Note from './note';
import Form from './form';
import Footer from './footer';
import Header from './header'
import './style.css'

const App = () => {

    const [notes , setNotes] = useState([])
    
    const addNote = (newNote) => {
       setNotes(prevValue => {
            return [
                ...prevValue ,
                newNote
            ]
        })
    }

    const deleteNote = (id) =>{
        setNotes(prevValue => {
            return prevValue.filter((note , index) => {
                return index !== id
            })
        })
    }

    return(
        <div >
            <Header/>
            <Form 
                onAdd={addNote}
            />
            { notes.map((note, index) =>{
                return (
                    <Note 
                        key={index}
                        id={index}
                        title = {note.title}
                        content = {note.content}
                        onDelete={deleteNote}
                    />
                )
            })}
            <Footer/>
        </div>
    )
}

export default App;