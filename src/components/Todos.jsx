import {useState} from "react";

function Todos(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    const [todos, setTodos]=useState([
        {id:"1", title:"dev", description:"dev the app", completed:false},
        {id:"2", title:"test", description:"test the app", completed:false},
        {id:"3", title:"deploy", description:"deploy the app", completed:false},
    ]);

    const createTodo = (e)=>{
        e.preventDefault();
        if(!title.trim() || !description.trim()) return;
        const todo={id:todos.length+1, title:title, description:description, completed:false};
        setTodos([...todos,todo]);
        setTitle("");
        setDescription("");

    }

    return (
        <>
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
            <div className="container mt-5">
                <div className="card p-4 shadow-sm">
                    <h3 className="mb-3">To-Do List</h3>
                    <form onSubmit={createTodo} className="d-flex gap-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Todo Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Todo Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Todos;