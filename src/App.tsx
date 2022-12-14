import './App.css'
import Greet from './components/Greet'
import Heading from './components/Heading'
import PersonList from './components/PersonList'
import StringLiterals from './components/StringLiterals'
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
      <Heading>
        Heading
      </Heading>
      <Greet message={"hi there"} name="Shourov" />
      <TypedProps message={"hi there"} name="Shourov" person={person} />
      <PersonList personList={personList} person={person} />
      <StringLiterals status="failed" />
    </div>
  )
}

export default App
