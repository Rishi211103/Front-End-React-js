import React, { useEffect, useState } from "react";
import "./Todo.css"
import axios from "axios";



export default function Todolist() {

    const [inputtodo, setinputtodo] = useState("");
    const [apidata, setapidata] = useState([])

    const handleinput = (e) => {
        setinputtodo(e.target.value);
    }
    useEffect(() => {
        handleapiget()
    }, [])

    const handleapiget = async () => {
        let todolist = await axios.get("http://localhost:3000/todoList")
        // console.log(todolist);
        setapidata(todolist.data)
    };
    const handleadd = async () => {
        let body = {
            task: inputtodo
        }
        let senddata = await axios.post("http://localhost:3000/todoList", body)
        setinputtodo("")
        handleapiget()
    }
    const handledelete = async (id) => {
        let deletedata = await axios.delete("http://localhost:3000/todoList/" + id,)
        handleapiget()

    }
    const handleedit = async (data) => {
        let promptdata=prompt("edit ur data",data.task);
        let body={
            id:data.id,
            task:promptdata
        }
        let editdata=await axios.put("http://localhost:3000/todoList/" +data.id, body)
        handleapiget()
       

    }



    return (
        <div>
            <h1 className="head-btn">Todo List</h1>
            <input  className="input-btn" value={inputtodo} onChange={handleinput} placeholder="enter ur todo"></input>
            <button className="btn-button" onClick={handleadd} >Submit</button>



            <ol>
                {apidata.map((da) => (
                    <li>
                        {da.task}<br></br>
                        <button onClick={() => handleedit(da)} className="edit-btn">Edit</button>
                        <button onClick={() => handledelete(da.id)} className="delete-btn">Delete</button>

                    </li>
                ))}


                {/* <li> {inputtodo}</li> */}
            </ol>

        </div>
    )

}