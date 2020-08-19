import React, {useState} from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter, Button, Label, Input, Col, Row} from 'reactstrap';


function AddTaskModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState(' ')
    const [newPriority, setNewPriority] = useState(0)
    const [newStatus, setNewStatus] = useState('TODO')
    const addButtonHandler = () => {
        props.addNewTask(newTitle, newPriority, newStatus)
        setIsModalOpen(false)
        setNewTitle(' ')
    }

    return (

        <>
            <Button onClick={() => setIsModalOpen(true)}>Add New Task</Button>
            {' '}


            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new task</ModalHeader>
                <ModalBody>
                    <Label>New Title</Label>
                    <Input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></Input>

                    <Row>
                        <Col>
                            <label>Priority</label>

                            <Input type="select" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                                <option value='0'>Low</option>
                                <option value='1'>Med</option>
                                <option value='2'>High</option>
                            </Input>
                        </Col>

                    <Col>
                    <label>Status</label>

                    <Input type="select" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                        <option value={'TODO'}>To do</option>
                        <option value={'PROGRESS'}>In progress...</option>
                        <option value={'REVIEW'}>Need review</option>
                        <option value={'DONE'}>Done!!!</option>
                    </Input>
                    </Col>
                    </Row>

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

export default AddTaskModal;
