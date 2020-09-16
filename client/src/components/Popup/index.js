import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


// we are going to have to prop drill form the button function 

function Popup(prop) {
    return (
        <>
            <Modal show={prop.show} onHide={prop.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you saved {prop.saveBook} to your reading list!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={prop.handleClose}>
                        Okay 
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup;