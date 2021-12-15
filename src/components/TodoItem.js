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
    const[todo,setTodo] = useState("");
    function updateTodo(){
        updateTodoItem({id:props.id, content:props.content, done:!props.done}).then((Response=>{
            // console.log(Response)
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaa')
            dispatch({type:TOGGLE_TODO,payload: Response.data.id})
        }))

    };
    function removeTodoList(){
        // console.log('props.id',props.id)
        deleteTodoItem(props.id).then((Response=>{
            dispatch({type:REMOVE_TODO,payload: Response.data.id})
        }))

    }
    const showModal = () => {
        setIsModalVisible(true);
      };
      
    const handleOk = () => {
        setIsModalVisible(false);
        updateTodoItem({id:props.id, content:todo, done:props.done}).then((Response=>{
            console.log('>>>>>>>>>>>>>>>>>>>>Response',Response.data)
            dispatch({type:UPDATE_TODO,payload: Response.data})
        }))
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
      };


    function handleContentValue(event){
        setTodo(event.target.value);
    }

    return(
        
        <div className = "box">
           <span className={ props.done ? "Done-todo-item":""} onClick={updateTodo}>{props.content}</span>
           <CloseCircleOutlined size={"small"} type="primary" className="Delete-button" onClick={removeTodoList}>x</CloseCircleOutlined>
           <EditOutlined size={"small"} type="primary"  className="Update-button" onClick={showModal}></EditOutlined>
           <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input  style={{ width: 450 }} placeholder="Please type words" value={todo} type="text" onChange={handleContentValue} className="Input-field"></Input>
            </Modal>

        </div>
        
    )
}

export default TodoItem;