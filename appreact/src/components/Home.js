import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Card,Button} from 'react-bootstrap';
export class Home extends Component {
    render() {
        state=[
            allData:[],
            err:"";
        ]
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

import React, { Component } from "react"; import { Modal, Button, Form } from "react-bootstrap"; class UpdateModal extends Component { render() { return ( <div> <Modal show={this.props.show} onHide={this.props.closeModal}> <Modal.Header closeButton> <Modal.Title>Update FORM</Modal.Title> </Modal.Header> <Modal.Body> <Form onSubmit={this.props.updateData}> <Form.Group className="mb-3" controlId="formBasicEmail"> <Form.Label>name</Form.Label> <Form.Control type="text" placeholder="Enter name" name="name" defaultValue={this.props.modalObj.name} /> </Form.Group> <Form.Group className="mb-3" controlId="formBasicPassword"> <Form.Label>url</Form.Label> <Form.Control type="text" placeholder="Enter url" name="url" defaultValue={this.props.modalObj.url} /> </Form.Group> <button className="btn btn-primary">Save Changes</button> </Form> </Modal.Body> </Modal> </div> ); } } export default UpdateModal;

export default Home
