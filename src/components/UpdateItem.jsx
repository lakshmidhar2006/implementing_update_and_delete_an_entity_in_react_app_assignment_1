import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const UpdateItem = ({ item }) => {
    // 1. Create a state for the form
    // 2. Create a function to handle the form submission
    // 3. Create a function to handle the form input changes
    const [name,SetName] = useState("")
    const [status,setStatus] = useState("")
const {id}=useParams()
console.log(id)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const {data}=await axios.put(`http://localhost:8000/doors/${id}`,{name,status})
        console.log(data)
    }



    // your code here
    return (
        <>
        <form onSubmit={handleSubmit}>
            <p>name<input value={name} onChange={(e)=>SetName(e.target.value)} type="text"></input></p>
            <p>status<select onChange={(e)=>setStatus(e.target.value)} value={status}>
                <option value="open">open</option>
                 <option value="close" >closed</option>   
                    </select></p>
            <button type="submit">submit</button>        
        </form>
        
        
        
        </>
    )
};

export default UpdateItem;

