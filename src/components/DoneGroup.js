import {useSelector} from "react-redux"

function DoneGroup(){

    const doneList = useSelector((state) =>  state.todoList.filter(item => item.done));
    return (
        <div>{
            doneList.filter(item => item.done).map((item, index) => {
               return <p key={item+index}> {item.content} </p>
            })
      }</div>      
    );
}

export default DoneGroup;

