import { useState } from 'react'
import './App.css'
import { Persons } from './components/Persons'

function App() {

  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Leandro Peralta',
      role: 'Frontend Developer',
      img: "https://bootdey.com/img/Content/avatar/avatar3.png"
    },
    {
      id: 2,
      name: 'Oscar Lopez',
      role: 'Backend Developer',
      img: "https://bootdey.com/img/Content/avatar/avatar4.png"
    },

    {
      id: 3,
      name: 'Catalina Oliveiros',
      role: 'UI/UX Designer',
      img: "https://bootdey.com/img/Content/avatar/avatar2.png"
    }
  ])

  return (
    <div className='App'>
      <div className='container'>
        <Persons persons={persons} setPersons={setPersons} />
      </div>
    </ div>
  )
}

export default App
