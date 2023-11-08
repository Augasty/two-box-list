
import './App.css'
import ButtonToSwitch from './components/ButtonToSwitch'
import ContainerBox from './components/ContainerBox'
import Check from './components/check'

function App() {

  

  return (
    <div className="columns-container">
    <ContainerBox side={true}/>
    <ButtonToSwitch side={true}/>
    <ButtonToSwitch side={false}/>
    <Check/>
    <ContainerBox side={false}/>
    </div>
  )
}

export default App
