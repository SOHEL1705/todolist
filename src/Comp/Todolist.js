import React ,{useContext}from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import noteContext from '../AssetContex/noteContext';
const Todolist = () => {
    const context = useContext(noteContext)
    const {listadd } = context;

    const [list,setlist]=useState({title:"",description:"",tag:""})
    const HandleSubmit=(event)=>{
        event.preventDefault()
        listadd(list.title, list.description, list.tag);
        setlist({title:"",description:"",tag:""})
    }
    const HandlerOnChange=(event)=>{
        setlist({...list,[event.target.name]:event.target.value})
    }
  return (
    <div className='Forms'>
      <Form>
    <Form.Group className="mb-3" controlId="title"
    name="title">
      <Form.Label>TITLE</Form.Label>
      <Form.Control  name='title' value={list.title} type="text" placeholder="Enter email" onChange={HandlerOnChange} minLength={5} required/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text"  name='description' placeholder="Description" value={list.description}  onChange={HandlerOnChange} minLength={5} required/>
      <Form.Control className='my-3' value={list.tag} type="text"  name='tag' placeholder="TAG"  onChange={HandlerOnChange} />
    </Form.Group>
    
    <Button disabled={list.title.length<5 || list.description.length<5} variant="primary" type="submit" onClick={HandleSubmit}>
      Submit
    </Button>
  </Form>
    </div>
  )
}

export default Todolist
