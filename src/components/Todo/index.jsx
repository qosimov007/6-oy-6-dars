import { useEffect, useState } from 'react';
import header from '../header';
import form from '../form';
import TodoItem from '../TodoItem';
import { getdata } from '../../components/utils/function'
import './index.css'

function App() {
    const [todos, settodos] = useState([]);
    useEffect(() => {
        settodos(getdata());
    });


    function handleDelete (id){

        let todosDel = getdata();
        todosDel = todos.filter(Todo => {
            return todo.id != id;
        })
        settodos (todosDel);
        localStorage.setItem('todos', JSON.stringify(todosDel));
    }
    return (
    

            <div className="todo-wrapper">
                <header />
                <div className="form-todo-wrapper">
                <form changeState = {settodos}></form>
                {
                    todos.map( (todo, index)  => {
                        return (
                         <TodoItem  deleteTodo ={handleDelete} index = {index +1} key={index} data={todo} ></TodoItem>
                        )
                    })
                }
   
                </div>

            </div>




    )
}

export default Todo;
