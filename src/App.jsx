import './App.css'

function App() {
const todos=[
    {id:"1", title:"dev", description:"dev the app"},
    {id:"2", title:"test", description:"test the app"},
    {id:"3", title:"deploy", description:"deploy the app"},
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
              </tr>
              </thead>
              <tbody>
              {todos.map((todo)=>
                  (
                      <tr>
                          <td>{todo.id}</td>
                          <td>{todo.title}</td>
                          <td>{todo.description}</td>
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
