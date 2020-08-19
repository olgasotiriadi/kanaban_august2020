import React from 'react';
import Task from "./Task";


function Board(props) {
    return (
        <div>
            Board {props.status}
            {
                props.tasks
                    .filter(el => el.status === props.status) //отфильтрует по условию.
                    // "el => el.status === props.status" это callback метода filter
                    .map(el =>  //map работает после выполнения filter
                    // chaining - цепочка - после выполнения одного фильтра запускается второй
                    <div key={el.id}>
                        {el.title}
                        {el.priority}
                        <Task task={el} />
                    </div>)
            }
            <hr/>
        </div>
    );
}

export default Board;
