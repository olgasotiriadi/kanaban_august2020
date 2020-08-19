import React, {useState} from 'react';
//import Board from "./Board";
//import FormCreateTask from "./FormCreateTask";
import {v4 as uuidv4} from 'uuid';
import {Container, Row} from 'reactstrap';
import Column from './Column';
import AddTaskModal from './AddTaskModal';
import AddColumnModal from './AddColumnModal';



function App() {

    const taskList = [
        {
            id: uuidv4(),
            title: 'First task',
            priority: 2,
            status: 'PROGRESS'
        },
        {
            id: uuidv4(),
            title: 'Second task',
            priority: 0,
            status: 'TODO'
        },
        {
            id: uuidv4(),
            title: 'Third task',
            priority: 1,
            status: 'REVIEW'
        },
        {
            id: uuidv4(),
            title: 'Fourth task',
            priority: 0,
            status: 'DONE'
        },
        {
            id: uuidv4(),
            title: 'FIFTH task',
            priority: 0,
            status: 'DO AGAIN'
        }
    ]

    const columnList = [
        {
            id: uuidv4(),
            title: 'To do',
            status: 'TODO'
        },
        {
            id: uuidv4(),
            title: 'In progress...',
            status: 'PROGRESS'
        },
        {
            id: uuidv4(),
            title: 'Need review',
            status: 'REVIEW'
        },
        {
            id: uuidv4(),
            title: 'Done!!!',
            status: 'DONE'
        }
    ]

    const addNewTask = (newTitle, newPriority, newStatus) => {
        const newTask = {
            id: uuidv4(),
            title: newTitle,
            priority: Number(newPriority),
            status: newStatus
        };
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
    }

    const addNewColumn = (newTitle) => {
        const newColumn = {
            id: uuidv4(),
            title: newTitle,
            status: 'DO AGAIN'
        };
        const newColumns = [...columns, newColumn];
        setColumns(newColumns);
    }

    const statuses = ['TODO', 'PROGRESS', 'REVIEW', 'DONE'];
    const taskPriority = [0, 1, 2];

    const [tasks, setTasks] = useState(taskList);
    const [columns, setColumns] = useState(columnList);

    const changeTaskStatus = (taskId, direction) => {
        const newTask = tasks.map(el => {
            if(el.id === taskId) {
                if (direction === 'right') {el.status = statuses[statuses.indexOf(el.status) + 1]}
                if (direction === 'left') {el.status = statuses[statuses.indexOf(el.status) - 1]}
                if (direction === 'up') {el.priority = taskPriority[taskPriority.indexOf(el.priority + 1)]}
                if (direction === 'down') {el.priority = taskPriority[taskPriority.indexOf(el.priority - 1)]}
            }
            return el;
        })
        setTasks(newTask)
    }

    const deleteTask = (taskId) =>
    {
        const newTask = tasks.filter(el => el.id !== taskId)
        setTasks(newTask)
    }


    return (
        <div>
            <Container>
                <AddTaskModal addNewTask={addNewTask}/>
                <AddColumnModal addNewColumn={addNewColumn}/>
                <Row>
                    {columns.map(el => <Column
                        key={el.id}
                        column={el}
                        tasks={tasks}
                        changeTaskStatus={changeTaskStatus}
                        deleteTask={deleteTask}
                         />)}
                    {/*<Column title={'TODO'} tasks={tasks} changeTaskStatus={changeTaskStatus} />*/}
                    {/*<Column title={'PROGRESS'} tasks={tasks} changeTaskStatus={changeTaskStatus} />*/}
                    {/*<Column title={'REVIEW'} tasks={tasks} changeTaskStatus={changeTaskStatus} />*/}
                    {/*<Column title={'DONE'} tasks={tasks} changeTaskStatus={changeTaskStatus} />*/}
                </Row>

            </Container>

        </div>
    );
}


export default App;
