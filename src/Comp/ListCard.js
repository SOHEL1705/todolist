import React, { useContext } from 'react'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import noteContext from '../AssetContex/noteContext';
import Editmodal from './Editmodal';
const ListCard = (props) => {
const context = useContext(noteContext);  
const {Listdel,updatelist}= context;
const {notes}=props;
  return (<>
       <Card   border="dark" style={{marginTop:"20px", backgroundColor:'#ededed', width: '18rem'}}>
        <Card.Header  style={{backgroundColor:'gray',color:"white" }} ><div className='d-flex aline-item-center'>
      {/* DELETE */}
        <i onClick={()=>{Listdel(notes._id)}} className="fa-solid fa-trash mx-3"></i>
      {/* EDIT   */}
      <Editmodal/>
        {/* <i onClick={()=>{updatelist(notes)}} className="fa-sharp fa-solid fa-pen-to-square"></i> */}
        </div></Card.Header>
        
        <Card.Body>
          <Card.Title>{notes.title}</Card.Title>
          <Card.Text>{notes.description}
          </Card.Text>
          <Card.Text> 
      <Badge bg="secondary">{notes.tag}</Badge>
          </Card.Text>
          
        </Card.Body>
      </Card>
      </>   
  )
}

export default ListCard 
