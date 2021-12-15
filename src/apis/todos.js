import api from "./api"

export const getTodos = () =>{
    return api.get("/todos")
}

export const addTodoItem = (item) =>{
    return api.post("/todos",item);
}


// PUT combine 

export const deleteTodoItem = (id) =>{
    return api.delete("/todos/"+id);
}

export const updateTodoItem = (item) =>{
    // console.log('item',item)
    // console.log('item.id',item.id)
    return api.put("/todos/"+item.id,item);
}

// export const updateTodoItemByNewTodo = (item) =>{
//     console.log('item',item)
//     console.log('item.id',item.id)
//     return api.put("/todos/"+item.id,item);
// }




