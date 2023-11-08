
import './App.css'
import ButtonToSwitch from './components/ButtonToSwitch'
import ContainerBox from './components/ContainerBox'

function App() {

  

  return (
    <div className="columns-container">
    <ContainerBox side={true}/>
    <ButtonToSwitch side={true}/>
    <ButtonToSwitch side={false}/>
    <ContainerBox side={false}/>
    </div>
  )
}

export default App
