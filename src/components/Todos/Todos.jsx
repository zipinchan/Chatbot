import React, { useEffect} from 'react';
import './Todos.css';

const Todos = (props) => {
    const {setState} =props
    useEffect(()=> {  //use the function
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json()) //converting to json
        .then(data => {
            const FirstFiveTodos = data.slice(0,6) // array
            setState(state => ({ ...state, todos: FirstFiveTodos })) //...state => add the old state into the new state instead of replacing it
        }); //output to console
    },[]);

    const renderTodos = () => {
       return props.todos.map(todo => {
           return ( <li className = "todos-widget-list-item" key={todo.id}>
                {todo.title}
            </li> )
        })
    }

    return <div className="todos-widget"> 
        <ul className="todo-widget-list">
            {renderTodos()}
        </ul>
     </div>
};

export default Todos;