import "../styles/TodoItem.css"
import { TOGGLE_TODO, REMOVE_TODO ,UPDATE_TODO} from "../constants/constant"
import { useDispatch } from "react-redux"
import { deleteTodoItem ,updateTodoItem} from "../apis/todos";
import { CloseCircleOutlined ,EditOutlined   } from '@ant-design/icons'
import {Input} from 'antd'
import { useState } from "react";
import Modal from "antd/lib/modal/Modal";

function TodoItem(props){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const[content,setContent] = useState("");
    function updateTodo(){
        updateTodoItem({id:props.id, content:props.content, done:!props.done}).then((response=>{
            dispatch({type:TOGGLE_TODO,payload: response.data})
        }))

    };
    function removeTodo(){
        deleteTodoItem(props.id).then((response=>{
            dispatch({type:REMOVE_TODO,payload: response.data})
        }))

    }
    const showModal = () => {
        setIsModalVisible(true);
      };
      
    //  TODO: rename todo  
    const handleOk = () => {
        setIsModalVisible(false);
        updateTodoItem({id:props.id, content:content, done:props.done}).then((response=>{
            dispatch({type:UPDATE_TODO,payload: response.data})
        }))
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
      };


    function handleContentValue(event){
        setContent(event.target.value);
    }

    return(
        
        <div className = "box">
           <span className={ props.done ? "Done-todo-item":""} onClick={updateTodo}>{props.content}</span>
           <CloseCircleOutlined size={"small"} type="primary" className="Delete-button" onClick={removeTodo}>x</CloseCircleOutlined>
           <EditOutlined size={"small"} type="primary"  className="Update-button" onClick={showModal}></EditOutlined>
           <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input  style={{ width: 450 }} placeholder="Please type words" value={content} type="text" onChange={handleContentValue} className="Input-field"></Input>
            </Modal>

        </div>
        
    )
}

export default TodoItem;