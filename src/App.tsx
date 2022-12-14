import './App.css'
import Greet from './components/Greet'
import TypedProps from './components/TypedProps'

function App() {


  return (
    <div>
      <Greet message={"hi there"} name="Shourov" />
      <TypedProps message={"hi there"} name="Shourov" />
    </div>
  )
}

export default App
