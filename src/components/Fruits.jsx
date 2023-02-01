
export default function Fruits({fruit, onClick }) {
  return (
    <div>
        <li >{fruit.nom}<button className='dlt' onClick = {onClick}>x</button></li>
    </div>
  )
}
