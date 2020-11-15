import React, { useState } from 'react'
import AddIcon from "@material-ui/icons/Add";
import './style.css'


const Form = (props) =>{
    const [note , setNote] = useState({
        title : '',
        content : ''
    })

    const [isExpanded , setIsExpanded] = useState(false)


    const handleChange = (e) =>{
        const {name , value} = e.target
        setNote(prevValue =>{
            return {
                ...prevValue ,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAdd(note)
    }

    const expand = () =>{
        setIsExpanded(true)
    }
    
    return(
        <div>
            <form>
            {isExpanded && 
                <input 
                    onChange={handleChange} 
                    name="title" 
                    type="text" 
                    placeholder="Title" 
                />}
                <textarea 
                    onChange={handleChange} 
                    onClick={expand} 
                    name="content" 
                    rows= {isExpanded ?"3" : "1"} 
                    placeholder="Write your note..." 
                    value={note.content}>       
                </textarea>
                {isExpanded &&
                <button 
                    type="submit" 
                    onClick={handleSubmit}><AddIcon /></button>}
            </form>
      </div>
    )
}

export default Form;