import { useState } from "react";
import "../styles/TodoGernerator.css"
import {useDispatch} from "react-redux";
import {  CREATE_TODO } from "../constants/constant";
import {addTodoItem} from "../apis/todos"
import {Button, Input} from 'antd'

function TodoGenerator(props){
    const dispatch = useDispatch();
    const[todo,setTodo] = useState("");

    function add(){
        if(todo.trim() !== ""){
        addTodoItem({content : todo,done : false}).then((Response) =>{
            dispatch({type: CREATE_TODO, payload: Response.data})
        }
            
        )}

        setTodo("");    
        
        
    }

    function handleContentValue(event){
        setTodo(event.target.value);
    }

    return(
        <>
            <Input  style={{ width: 500 }} placeholder="Please type words" value={todo} type="text" onChange={handleContentValue} className="Input-field"></Input>
            <Button type="primary" onClick={add} >add</Button>
        </>
    )
}

export default TodoGenerator;