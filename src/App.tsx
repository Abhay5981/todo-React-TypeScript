import Addtodo from "./components/Addtodo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"


const App = () => {
  return (
   <main>
    <h1>ToDo React + TypeScript</h1>
    <Navbar/>
    <Addtodo/>
    <Todos/>

   </main>
  )
}

export default App
