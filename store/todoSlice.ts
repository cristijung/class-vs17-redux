import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    text: string;
}

interface TodoState {
    list: Todo[];
}

const initialState : TodoState = {
    list: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // aqui vamos usar o action.payload p receber o texto da tarefa
        addTodo: (state, action: PayloadAction<string>) => {
            state.list.push({
                id: Date.now(),
                text: action.payload,
            });
        },

        removeTodo: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;


// PayloadAction<T> --> é um tipo do TS q define o formato do q está sendo enviado