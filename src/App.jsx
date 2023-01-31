import { useState } from 'react'
import './App.css'

function App() {
  const [fruits, setfruits] = useState([
    {id:1,nom: "pamplimouse"},
    {id:2,nom: "pamplimouse"},
    {id:3,nom: "pamplimouse"},
    {id:4,nom: "pamplimouse"},
    {id:5,nom: "pamplimouse"}
  ])

  return (
    <div className="App">
      <p>le fruit Sont :</p>
      <ul >
        {fruits.map((fruit)=>(
          <li key={fruit.id}>{fruit.nom} <button className='dlt'>x</button></li>

        ))}
        

      </ul>
      
      
      
    </div>
  )
}

export default App
