import React from 'react';
import {Col} from 'reactstrap';
import Task from "./Task";

export default Column;

function Column(props) {
    const {tasks, changeTaskStatus, column, deleteTask} = props;
    return (
        <div>
            <Col>
                <h3>{column.title}</h3>
                {tasks
                    .filter(el => el.status === column.status)
                    .sort((a, b) => b.priority - a.priority)
                    .map(el => <Task
                        key={el.id}
                    task={el}
                    changeTaskStatus={changeTaskStatus}
                    deleteTask={deleteTask}
                />)}
            </Col>
        </div>
    );

}
