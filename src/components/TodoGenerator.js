import { useState } from "react";
import "../styles/TodoGernerator.css"
import {useDispatch} from "react-redux";
import {  CREATE_TODO } from "../constants/constant";
import {addTodoItem} from "../apis/todos"
import {Button, Input} from 'antd'

function TodoGenerator(){
    const dispatch = useDispatch();
    const[content,setContent] = useState("");

    function add(){
        if(content.trim() !== ""){
        addTodoItem({content : content ,done : false}).then((Response) =>{
            dispatch({type: CREATE_TODO, payload: Response.data})
        }
        )}
        setContent("");    
    }

    function handleContentValue(event){
        setContent(event.target.value);
    }

    return(
        <>
            <Input  style={{ width: 500 }} placeholder="Please type words" value={content} type="text" onChange={handleContentValue} className="Input-field"></Input>
            <Button type="primary" onClick={add} >add</Button>
        </>
    )
}

export default TodoGenerator;