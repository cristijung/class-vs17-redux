import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice';
import countReducer from './counterSlice';
import todoReducer from './todoSlice';
import { catApi } from "./catApi";
import { catApiDois } from "./catApiDois";
import { postApi } from "./postApi";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        counter: countReducer,
        todo: todoReducer,
        [catApi.reducerPath]: catApi.reducer,
        [catApiDois.reducerPath]: catApiDois.reducer,
        [postApi.reducerPath]: postApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            catApi.middleware,
            catApiDois.middleware,
            postApi.middleware
        ), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;