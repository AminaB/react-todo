import {useState} from "react";

function AddTodo({handleAddTodo}){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const createTodo = (e)=>{
        e.preventDefault();
        if(!title.trim() || !description.trim()) return;
        const todo={ title:title, description:description, completed:false};
        handleAddTodo(todo);
        setTitle("");
        setDescription("");

    }
    return(
        <div className="container mt-5">
            <div className="card p-4 shadow-sm">
                <h3 className="mb-3">Add Todo</h3>
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
        </div>    )
}
export default AddTodo;