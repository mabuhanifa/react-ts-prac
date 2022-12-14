import './App.css'
import Button from './components/Button'
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
  const handleClick = () => {
    alert("Clicked")
  }
  return (
    <div>
      <Heading>
        Heading
      </Heading>
      <Greet message={"hi there"} name="Shourov" />
      <TypedProps message={"hi there"} name="Shourov" person={person} />
      <PersonList personList={personList} person={person} />
      <StringLiterals status="failed" />
      <Button handleClick={handleClick}> Click</Button>
    </div>
  )
}

export default App
