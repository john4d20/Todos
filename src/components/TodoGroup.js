import TodoItem from "./TodoItem";
import {useSelector} from "react-redux"


function TodoGroup(props){

    const todoList = useSelector((state) => state.todoList);

    return (
        <div>
            <span>
            {todoList.map((item, index)=><TodoItem key={item.ID} content={item.content} id={item.ID}/>)}
            </span>
        </div>
    )
}

export default TodoGroup;