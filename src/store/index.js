import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./modules/countStore";
import commentReducer from './modules/commentList';
// import reducer  from "./modules/countStore";

// 創建store，組合模塊
const store = configureStore({
    reducer: {
        counter: countReducer,
        comment: commentReducer,
    },
})


export default store;