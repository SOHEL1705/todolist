import React ,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import "./Log.css"
const SignUp = () => {
    let navigate= useNavigate()
    const [info,setinfo]=useState({email:"",password:"",name:"",cpassword:""})

    const HandlerOnChange=(event)=>{
        setinfo({...info,[event.target.name]:event.target.value})
    }

    const Submithandler = async (event)=>{
        event.preventDefault()
        const {name,email,password}=info;
        const response = await fetch("http://localhost:5000/api/auth/Createuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }, body: JSON.stringify({name,email,password})
          });
          const json= await response.json()
                localStorage.setItem("token",json.authtoken)
                navigate('/')
          
    }

  return (
    <>
    <div className='login'>
        <h2>Signup</h2>
        <Form onSubmit={Submithandler}>
     <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" onChange={HandlerOnChange} placeholder="Enter Name" />
      </Form.Group>
    {/* EMAIL */}
      <Form.Group className="mb-3"  controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={info.email} onChange={HandlerOnChange} placeholder="Enter email" />
      </Form.Group>
{/* PASSWORD */}
      <Form.Group className="mb-3"  controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={info.password} name="password"  onChange={HandlerOnChange}  placeholder="Password" minLength={5} required/>
      </Form.Group>
{/* CONFIRM  */}
      <Form.Group className="mb-3"  controlId="cPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" value={info.cpassword} name="cpassword"  onChange={HandlerOnChange}  placeholder="Confirm Password" minLength={5} required/>
      </Form.Group>

      <Button variant="primary" type="submit" onSubmit={Submithandler}>
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default SignUp
