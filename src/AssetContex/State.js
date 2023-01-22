import React, { useState } from "react";
import noteContext from "./noteContext";

const State =(props)=>{
  const Notesinitila = []
  const[notes,setNotes]=useState(Notesinitila)
      const getlist =async ()=>{
        
        const response = await fetch(`/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNjUxYmZjNGE4Mzk0NDY4MWU2ODIxIn0sImlhdCI6MTY3Mzk0MTQ1OH0.jevGJY_13rMpZnx2J1mEjoK9PFGXYf4aKFsFThLEfQU"
          },
        });
        const json = await response.json() 
        setNotes(json)
      }
      

      //add
      const listadd =async (title,description,tag)=>{

        const response = await fetch(`/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNjUxYmZjNGE4Mzk0NDY4MWU2ODIxIn0sImlhdCI6MTY3Mzk0MTQ1OH0.jevGJY_13rMpZnx2J1mEjoK9PFGXYf4aKFsFThLEfQU"
          },
          body: JSON.stringify({title, description, tag})
        });
        

        const list=await response.json();
        setNotes(notes.concat(list))
      }
      
      //delete
const Listdel = async  (id)=>{
  const response = await fetch(`/api/notes/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNjUxYmZjNGE4Mzk0NDY4MWU2ODIxIn0sImlhdCI6MTY3Mzk0MTQ1OH0.jevGJY_13rMpZnx2J1mEjoK9PFGXYf4aKFsFThLEfQU"
    },
  });
  const json=response.json()
  console.log(json)
const newlist = notes.filter((list)=>{ return list._id!==id})
  setNotes(newlist)
}
      // Edit
const ListEdit =async(id,title,description,tag)=>{
  //api
  const response = await fetch(`/api/notes/update/63c6f5962cb165e7ddd6e925${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNjUxYmZjNGE4Mzk0NDY4MWU2ODIxIn0sImlhdCI6MTY3Mzk0MTQ1OH0.jevGJY_13rMpZnx2J1mEjoK9PFGXYf4aKFsFThLEfQU"
    },
    body: JSON.stringify({title, description, tag})
  });
  const json=response.json()
  console.log(json)
 

  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if(element._id === id)
    element.title = title;
    element.tag = tag;
    element.description=description;
    
  }
  
}
    return(
        <noteContext.Provider value={{listadd,ListEdit,Listdel,notes,getlist}}>
{props.children}
        </noteContext.Provider>
    )
}
export default State