
import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import User from "./component/user/User";
import User_local from "./component/User-local/User_local";

function App() {
  const [items, setItem]= useState([])
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("./products.JSON")
    .then(response => response.json()
    .then(data => {
      setItem(data);
    })
  )
  },[])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
  },[])
  return (
    <>
      <div className="data-container">
    {
      users.map((user)=>(
       <User key={user.id} user={user}></User>
      ))
    }
  </div>)
  <div className="data-local">
    {
      items.map((item)=>(
       <User_local key={item.id} item={item}></User_local>
      ))
    }
  </div>
  </>
  );
}

export default App;
