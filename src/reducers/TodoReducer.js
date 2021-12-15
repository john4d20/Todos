import {CREATE_TODO, TOGGLE_TODO, REMOVE_TODO, INIT_TODO} from "../constants/constant";

const initState = { todoList: []};
const TodoReducer = (state = initState, action) => {

    switch(action.type) {
        case CREATE_TODO:
            return {todoList: [...state.todoList, action.payload]}
        case TOGGLE_TODO:
            return {todoList: state.todoList.map(function(object){
                if(object.ID === action.payload){
                    object.done = !object.done;
                }
                return object;
            })};
        case REMOVE_TODO:
            return { todoList: state.todoList.filter(content => content.ID !== action.payload)}
        case INIT_TODO:
            return {todoList: action.payload}
        default:
            return state;
    }
}

export default TodoReducer;