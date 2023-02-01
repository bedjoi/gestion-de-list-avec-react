import { useState } from 'react'
import './App.css'

function App() {
  const [fruits, setFruits] = useState([
    {id:1,nom: "Banane"},
    {id:2,nom: "Orange"},
    {id:3,nom: "Mangue"},
    {id:4,nom: "Cirton"},
    {id:5,nom: "Pome"}
  ]);
  const [newFruit, setNewFruit]= useState("");

  const handleDelete = (id)=>{
    console.log(id);
      const frutCopy= [...fruits]

      const fruitUpdate = frutCopy.filter((fruit)=> fruit.id !== id)

      setFruits(fruitUpdate)

  }
  const hadleSubmit = (e)=>{
      e.preventDefault();
      const fruitCopy=[...fruits];

      const id = new Date().getTime()
      const nom = newFruit

      fruitCopy.push({id, nom});

      setFruits(fruitCopy)


      setNewFruit("")
    }
    const handleChange =(e) => {
      setNewFruit(e.target.value)
      console.log(newFruit);
  }
  return (
    <div className="App">
      <p>les fruits Sont :</p>
      <ul >
        {fruits.map((fruit)=>(
          <li key={fruit.id}>{fruit.nom}<button className='dlt' onClick={()=>handleDelete(fruit.id)}>x</button></li>
        ))}
      </ul>
      <form action="submit" onSubmit={hadleSubmit} >
        <input 
        type="text" 
        placeholder='ajouter un fuit'
        value={newFruit}
        onChange={handleChange}
        /><button >Add</button>
      </form>
    </div>
  )
}

export default App
