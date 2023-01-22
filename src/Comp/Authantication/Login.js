import React, { useState } from 'react'
import "./Log.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

// localhost:5000/api/auth/login
const Login = () => {
    let navigate= useNavigate()
    const [info,setinfo]=useState({email:"",password:""})

    const HandlerOnChange=(event)=>{
        setinfo({...info,[event.target.name]:event.target.value})
    }

    const Submithandler = async (event)=>{
        event.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }, body: JSON.stringify({email:info.email,password:info.password })
          });
          const json= await response.json()
          if (json.success){
                localStorage.setItem("token",json.authtoken)
                navigate('/')
          }else(
            alert("invalid email or passowrd")
          )
        
    }

  return (
    <div className='login'>
      <h2>Login </h2>
        <Form onSubmit={Submithandler}>
      <Form.Group className="mb-3"  controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={info.email} onChange={HandlerOnChange} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3"  controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={info.password} name="password"  onChange={HandlerOnChange}  placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" onSubmit={Submithandler}>
        Submit
      </Button>
    </Form>
      </div>
  )
}

export default Login
