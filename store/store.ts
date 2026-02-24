import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice';
import countReducer from './counterSlice';
import todoReducer from './todoSlice';


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        counter: countReducer,
        todo: todoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;