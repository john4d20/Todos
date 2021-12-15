import {useSelector} from "react-redux"
import TodoItem from "./TodoItem";

function UnDoneGroup(){

    const todoList = useSelector((state) => state.todoList);

    return (
        <div>{
            todoList.filter(item => !item.done).map((item, index) => {
               return <p key={item+index}> {item.content} </p>
            })
      }</div>      
    );
}

export default UnDoneGroup;

