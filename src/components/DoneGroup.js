import {useSelector} from "react-redux"
import TodoItem from "./TodoItem";

function DoneGroup(){

    const todoList = useSelector((state) => state.todoList);
    // return (
    //     <div>
    //         {todoList.filter(item => item.done === true).map((item, index)=>
    //         <TodoItem key={item.ID} content={item.content} id={item.ID} done={item.done}/>)}
    //     </div>
    // )
    return (
        <div>{
            todoList.filter(item => item.done).map((item, index) => {
               return <p key={item+index}> {item.content} </p>
            })
      }</div>      
    );
}

export default DoneGroup;

