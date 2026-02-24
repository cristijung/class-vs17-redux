import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice';
import countReducer from './counterSlice';


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        counter: countReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;