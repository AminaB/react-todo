import {useEffect, useState} from "react";
import AddTodo from "./AddTodo.jsx";
import SelectStatus from "./SelectStatus.jsx";

function Todos(){


    const [todos, setTodos]=useState([
        {id:"1", title:"dev", description:"dev the app", status:"TODO"},
        {id:"2", title:"test", description:"test the app", status:"TODO"},
        {id:"3", title:"deploy", description:"deploy the app", status:"TODO"},
    ]);
    useEffect(() => {
        console.log("Todos mis à jour :", todos);
    }, [todos]);

    const addTodoHandler = (todo) => {
        todo.id=todos.length+1;
        console.log(todo);
        setTodos([...todos,todo]);
    }
    let handleSelect=(todo, newStatus)=>{
        setTodos(todos.map(t=>
        {return t.id===todo.id
            ? {...t, status: newStatus}
            : t
        }));
        console.log(todos);
    };
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
                                : <td className="bg-primary"><SelectStatus todo={todo} handleSelect={handleSelect}/></td>
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