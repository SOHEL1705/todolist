import React from 'react'
import noteContext from "../AssetContex/noteContext";
import { useContext,useEffect} from "react";
import ListCard from './ListCard';
import Todolist from './Todolist';

const Lists = () => {
  const context = useContext(noteContext)
  const {notes,getlist} = context;
  useEffect(()=>{
    getlist() // eslint-disable-next-line 
  },[])

  const updatelist = (notes)=>{

  }
  return (
    <>
    <Todolist/>
    
    <div className='row py-4' >
      <div className="container">
      <h1>LIST</h1>
      {notes.length === 0 && "List is Empty"}
      </div>
       {notes.map((notes)=>{return <ListCard key={notes._id} updatelist={updatelist} notes={notes}/>})}
    </div>
    </>
  )
}

export default Lists
