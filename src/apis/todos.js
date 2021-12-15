import api from "./api"

export const getTodos = () =>{
    return api.get("/todos")
}

export const addTodoItem = (item) =>{
    return api.post("/todos",item);
}

export const deleteTodoItem = (id) =>{
    console.log(typeof(id));
    console.log('id',id);
    return api.delete("/todos/"+id);
}

export const updateTodoItem = (id) =>{
    return api.put("/todos/"+id);
    // return api.put("/todos/"+ id);
    // return api.put('/todos/${id}');
}




