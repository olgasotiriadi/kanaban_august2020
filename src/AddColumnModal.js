import React, {useState} from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter, Button, Label, Input, Col, Row} from 'reactstrap';


function AddColumnModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState(' ')
    const addButtonHandler = () => {
        props.addNewColumn(newTitle)
        setIsModalOpen(false)
        setNewTitle(' ')
    }

    return (

        <>
            <Button onClick={() => setIsModalOpen(true)}>Add New Column</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new column</ModalHeader>
                <ModalBody>
                    <Label>New Title</Label>
                    <Input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></Input>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={addButtonHandler}>Submit</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default AddColumnModal;
