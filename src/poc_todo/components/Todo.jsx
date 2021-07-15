import React, {useState} from 'react'
import InputTask from './InputTask';
import TaskList from './TaskList'

function Todo() {

    // const [ctask, setCtask] = useState([]);
    // const [todos, setTodos] = useState([]);
    return (
        <div>
           <InputTask> 
           </InputTask>
           <TaskList></TaskList>
        </div>
    )
}

export default Todo
