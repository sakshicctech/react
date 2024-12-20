import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"Hello World"}],
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state,action) => {
            console.log("action",action);
            console.log("state",state);
            const todo={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo : (state,action) => {
            console.log("action",action);
            console.log("state",state);
            state.todos = state.todos.filter(todo=>todo.id!==action
            .payload)
            

        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer