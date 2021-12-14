import "../styles/TodoItem.css"
import { TOGGLE_TODO, REMOVE_TODO } from "../constants/constant"
import { useDispatch } from "react-redux"


function TodoItem(props){
    const dispatch = useDispatch();
    function doneTodo(){
        dispatch({type:TOGGLE_TODO, payload: props.id})
    };
    function removeTodoList(){
        dispatch({type: REMOVE_TODO ,payload: props.id})
    }
    return(
        
        <div className={ props.done ? "Done-todo-item":"Todo-item"} onClick={doneTodo}>
           {props.content}
           <button className="Delete-button" onClick={removeTodoList}>x</button>
        </div>
        
    )
}

export default TodoItem;