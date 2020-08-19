import React from 'react';
import {Col, Card, CardBody, Button, Alert} from 'reactstrap';


function Task(props) {
    const alertColors = ['success', 'warning', 'danger'];
    const {task, changeTaskStatus, deleteTask} = props
    return (
        <div>

            <Col>
                <Card>

                    <CardBody>
                        {task.title}
                        <Button size = 'sm' onClick={() => deleteTask(task.id)}>Delete</Button>
                        <Alert color={alertColors[task.priority]}>
                            {task.priority}
                            {task.priority !== 2 && <Button size="sm" onClick={() => changeTaskStatus(task.id, "up")}>↑</Button>}
                            {' '}
                            {task.priority !== 0 && <Button size="sm" onClick={() => changeTaskStatus(task.id, "down")}>↓</Button>}
                        </Alert>
                    </CardBody>
                    <CardBody>
                        {task.status !== "TODO" && <Button onClick={() => changeTaskStatus(task.id, "left")}>←</Button>}
                        {' '}
                        {task.status !== "DONE" && <Button onClick={() => changeTaskStatus(task.id, "right")}>→</Button>}

                    </CardBody>
                </Card>
            </Col>
        </div>
    );
}

export default Task;
