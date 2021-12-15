import {useSelector} from "react-redux"
import TodoItem from "./TodoItem";

function UnDoneGroup(){

    const todoList = useSelector((state) => state.todoList);
    // console.log('Undone todoList',todoList.filter(item => item.done !== true))
    // return (
    //     <div>
    //         {todoList.filter(item => item.done === false).map((item, index)=><TodoItem key={item.ID} content={item.content} id={item.ID} done={item.done}/>)}
    //     </div>
    // )
    return (
        <div>{
            todoList.filter(item => !item.done).map((item, index) => {
               return <p key={item+index}> {item.content} </p>
            })
      }</div>      
    );
}

export default UnDoneGroup;

