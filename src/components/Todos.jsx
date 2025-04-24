import {useState} from "react";
import AddTodo from "./AddTodo.jsx";

function Todos(){


    const [todos, setTodos]=useState([
        {id:"1", title:"dev", description:"dev the app", completed:false},
        {id:"2", title:"test", description:"test the app", completed:false},
        {id:"3", title:"deploy", description:"deploy the app", completed:false},
    ]);


    const addTodoHandler = (todo) => {
        todo.id=todos.length+1;
        console.log(todo);
        setTodos([...todos,todo]);
        console.log(todos);
    }
    return (
        <>
            <h2 className="mb-2">ToDo List</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>status</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) =>
                    (
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            {todo.completed
                                ? <td>Done</td>
                                : <td className="bg-primary">TO DO</td>
                            }

                        </tr>
                    )
                )}
                </tbody>
            </table>
            <AddTodo handleAddTodo={addTodoHandler}/>
        </>
    )
}
export default Todos;