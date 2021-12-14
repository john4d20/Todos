import {UPDATE_TODO_LIST,UPDATE_SIZE, TOGGLE_TODO, REMOVE_TODO} from "../constants/constant";

const initState = {size: 0, todoList: []};
const TodoReducer = (state = initState, action) => {

    switch(action.type) {
        case UPDATE_SIZE:
            return {...state, size: state.size + 1};
        case UPDATE_TODO_LIST:
            return {...state, todoList: [...state.todoList, action.payload]}
        case TOGGLE_TODO:
            return {...state, todoList: state.todoList.map(function(object){
                if(object.ID === action.payload){
                    object.done = !object.done;
                }
                return object;
            })};
        case REMOVE_TODO:
                return {...state, todoList: state.todoList.filter(content => content.ID !== action.payload)}
        default:
            return state;
    }
}

export default TodoReducer;