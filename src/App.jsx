import { useEffect, useState } from "react";
import UpdateItem from "./components/UpdateItem";
import axios from "axios";
import { Routes,Route, useNavigate } from "react-router-dom";
// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://localhost:8000/doors`;

function App() {
  // Get the existing item from the server
   const [item, setItem] = useState([])
  // pass the item to UpdateItem as a prop
  const navigate=useNavigate();
useEffect(()=>{
const ab = async()=>{
  try{
 const {data}=await axios.get(API_URI)
 setItem(data)
 
 console.log(data)
  }
  catch(e){
    console.log(e)
  }
}
ab();
},[item])
  return (
    <>
    <div>
    {
      item.map(item=>(
        <div key={item.id}>
          <h5>{item.name}</h5>
          <h5>{item.status}</h5>
          <button onClick={()=>navigate(`/edit/${item.id}`)} >update</button>
        </div>
      ))
    }
   </div>
    <Routes>

      <Route path='/edit/:id' element={<UpdateItem/>}/>
    </Routes>
   
    </>
  )
}

export default App;
