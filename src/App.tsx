import './App.css'
import Greet from './components/Greet'
import TypedProps from './components/TypedProps'

function App() {
  const person = {
    name: "Shourov",
    age: 26
  }

  return (
    <div>
      <Greet message={"hi there"} name="Shourov" />
      <TypedProps message={"hi there"} name="Shourov" person={person} />
    </div>
  )
}

export default App
