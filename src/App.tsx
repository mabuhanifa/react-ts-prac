import './App.css'
import Greet from './components/Greet'
import PersonList from './components/PersonList'
import TypedProps from './components/TypedProps'

function App() {
  const person = {
    name: "Shourov",
    age: 26
  }
  const personList = [
    {
      first: "Abdul",
      last: "Mia"
    },
    {
      first: "Abul",
      last: "Kashem"
    },
    {
      first: "Rahim",
      last: "Khan"
    }
  ]

  return (
    <div>
      <Greet message={"hi there"} name="Shourov" />
      <TypedProps message={"hi there"} name="Shourov" person={person} />
      <PersonList {...personList} />
    </div>
  )
}

export default App
