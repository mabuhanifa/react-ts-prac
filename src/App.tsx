import './App.css'
import Button from './components/Button'
import Greet from './components/Greet'
import Heading from './components/Heading'
import PersonList from './components/PersonList'
import StringLiterals from './components/StringLiterals'
import Styles from './components/Styles'
import TypedProps from './components/TypedProps'
import UseReducer from './HooksComponents/UseReducer'
import UseState from './HooksComponents/UseState'
import UseStateFuture from './HooksComponents/UseStateFuture'

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
    <div style={{ "margin": "50px" }}>
      <Heading>
        Heading
      </Heading>
      <Greet message={"hi there"} name="Shourov" />
      <TypedProps message={"hi there"} name="Shourov" person={person} />
      <PersonList personList={personList} person={person} />
      <StringLiterals status="failed" />
      <Button handleClick={handleClick}> Click</Button>
      {/* <Input handleClick={(e) => console.log(e)} value="" /> */}
      <Styles styles={{ "margin": "100px" }} />
      <UseState />
      <UseStateFuture />
      <UseReducer />
    </div>
  )
}

export default App
