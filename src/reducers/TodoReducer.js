import {UPDATE_TODO_LIST,UPDATE_SIZE} from "../constants/constant";

const initState = {size: 0, todoList: []};
const TodoReducer = (state = initState, action) => {

    switch(action.type) {
        case UPDATE_SIZE:
            return {...state, size: state.size + 1};
        case UPDATE_TODO_LIST:
            return {...state, todoList: [...state.todoList, action.payload]}
        default:
            return state;
    }
}

export default TodoReducer;