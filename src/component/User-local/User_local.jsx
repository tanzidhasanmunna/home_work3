import './User_local.css';


export default function User_local({item}) {
    const {name, model,brand} =item
  return (
    <div className='data-card-l'>
    <h1>{name}</h1>
    <h2>{model}</h2>
    <h3>{brand}</h3>
  </div>
  )
}
