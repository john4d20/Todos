import {useSelector} from "react-redux"

function UnDoneGroup(){

    const undoneList = useSelector((state) => state.todoList.filter(item => !item.done));

    return (
        <div>{
            undoneList.filter(item => !item.done).map((item, index) => {
               return <p key={item+index}> {item.content} </p>
            })
      }</div>      
    );
}

export default UnDoneGroup;

