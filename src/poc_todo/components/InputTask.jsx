import React from 'react'
import Todo from './Todo'
import {v4 as uuidv4} from "uuid";
import { connect } from 'react-redux';
import {addTodo} from "../actions"
import { useDispatch } from 'react-redux'



const InputTask = (props) => {
    

    return (
        <div>
            <form 
                onSubmit  = {(e) => {
                    e.preventDefault();
            
                    let input = e.target.userInput.value;
                    props.dispatch(addTodo(input));
                    e.target.userInput.value = "";
                }}>
                <input type = "text"
                    name = "userInput"
                    required
                ></input>
                <button>AddTask</button>
            </form>
        </div>
    )
}

export default connect()(InputTask)
