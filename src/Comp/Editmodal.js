import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import noteContext from '../AssetContex/noteContext';

function Editmodal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [list,setlist]=useState({etitle:"",edescription:"",etag:"default"})
    const updatelist =(event)=>{
        event.preventDefault()
        (list.title, list.description, list.tag);
    }
    const HandlerOnChange=(event)=>{
        setlist({...list,[event.target.name]:event.target.value})
    }

  return (
    <>
     <i onClick={handleShow} className="fa-sharp fa-solid fa-pen-to-square"></i>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>List Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="etitle"
    name="etitle">
      <Form.Label>TITLE</Form.Label>
      <Form.Control  name='etitle' type="text" placeholder="Enter item" onChange={HandlerOnChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="edescription">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text"  name='edescription' placeholder="Description"  onChange={HandlerOnChange}/>
      <Form.Control className='my-3' type="text"  name='etag' placeholder="TAG"  onChange={HandlerOnChange}/>
    </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updatelist}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Editmodal