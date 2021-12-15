import "../styles/TodoItem.css"
import { TOGGLE_TODO, REMOVE_TODO } from "../constants/constant"
import { useDispatch } from "react-redux"
import { deleteTodoItem ,updateTodoItem} from "../apis/todos";


function TodoItem(props){
    const dispatch = useDispatch();
    function updateTodo(){
        updateTodoItem(props.id).then((Response=>{
            dispatch({type:TOGGLE_TODO,payload: Response.data.ID})
        }))

    };
    function removeTodoList(){
        console.log('props.id',props.id)
        deleteTodoItem(props.id).then((Response=>{
            dispatch({type:REMOVE_TODO,payload: Response.data.ID})
        }))

    }
    return(
        
        <div className={ props.done ? "Done-todo-item":"Todo-item"} onClick={updateTodo}>
           {props.content}
           <button className="Delete-button" onClick={removeTodoList}>x</button>
        </div>
        
    )
}

export default TodoItem;