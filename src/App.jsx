import './App.css'

function App() {
const todos=[
    {id:"1", title:"dev", description:"dev the app", completed:false},
    {id:"2", title:"test", description:"test the app", completed:false},
    {id:"3", title:"deploy", description:"deploy the app", completed:false},
];
  return (
    <>
      <div className="container">

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
              {todos.map((todo)=>
                  (
                      <tr>
                          <td>{todo.id}</td>
                          <td>{todo.title}</td>
                          <td>{todo.description}</td>
                          {todo.completed
                              ? <td>Done</td>
                              :<td className="bg-primary">TO DO</td>
                          }

                      </tr>
                  )

              )}
              </tbody>
          </table>

      </div>

    </>
  )
}

export default App
