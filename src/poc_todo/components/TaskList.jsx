import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTodo} from "../actions"
// import todos from "../reducers"
import { deleteTodo } from '../actions';


const Tasklist = (props) => {
    
    // const handleDelete = ({id}) =>
    // {
    //     setTodos(todos.filter((todo) => todo.id !== id))
    // }
        
    return (
       
                <ul className = "ullist">
                    {
                        props.todos.map( (todo,index) =>
                    
                            (
                                <li key = {index} className = "liitems">
                                {todo.message}
                                 <button  
                                onClick = {
                                () => props.dispatch(deleteTodo(todo.id))
                            }
                            >Delete</button> 
                                </li>
                            ))}
                    
                </ul>
 
    
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
});

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addTodo: (obj) => dispatch(addTodo(obj)),
//     };
//   };

export default connect(mapStateToProps)(Tasklist)
