import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Home } from "./Home";
class Fav extends Component {
    render() {

        return (
            <div>
                <Modal.Dialog show={this.props.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Save Changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>

        )
} 

export default UpdateModal;
export default Home;
