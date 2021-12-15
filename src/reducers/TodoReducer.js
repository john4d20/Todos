import {CREATE_TODO, TOGGLE_TODO, REMOVE_TODO, INIT_TODO,UPDATE_TODO} from "../constants/constant";

const initState = { todoList: []};
const TodoReducer = (state = initState, action) => {

    switch(action.type) {
        case CREATE_TODO:
            return {todoList: [...state.todoList, action.payload]}
        case TOGGLE_TODO:
            return {todoList: state.todoList.map(function(object){
                if(object.id === action.payload){
                    object.done = !object.done;
                }
                return object;
            })};
        case REMOVE_TODO:
            return { todoList: state.todoList.filter(content => content.id !== action.payload)}
        case INIT_TODO:
            return {todoList: action.payload}
        case UPDATE_TODO:
            console.log('>>>>>>>>>>>>>>>>>>state.todoList',state.todoList)
            return {todoList: state.todoList.map(function(object){
                console.log('>>>>>>>>>>>>>>>>>>object',object)
                console.log('>>>>>>>>>>>>>>>>action.payload.id',action.payload.id)
                if(object.id === action.payload.id){
                    object.content = action.payload.content;
                }
                return object;
            })};
        default:
            return state;
    }
}

export default TodoReducer;