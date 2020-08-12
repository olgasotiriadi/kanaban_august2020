import React, {useState} from 'react';
import Board from "./Board";
import FormCreateTask from "./FormCreateTask";

import { v4 as uuidv4 } from 'uuid';


const initialTasks = [
    {
        id: uuidv4(),
        title: 'First task',
        priority: 2,
        status: 'todo'
    },
    {
        id: uuidv4(),
        title: 'Second task',
        priority: 3,
        status: 'review'
    },
    {
        id: uuidv4(),
        title: 'Third task',
        priority: 1,
        status: 'progress'
    }
]

const statuses = ['todo', 'progress', 'review', 'done'];

function App() {

    console.log(initialTasks);

    const [tasks, setTasks] = useState(initialTasks);

  return (
    <div>
      <FormCreateTask />
        {
           statuses.map(el =>
               <Board
                   status={el}
                   key={el}
                   tasks={tasks}
               />)
        }
    </div>
  );
}

export default App;
