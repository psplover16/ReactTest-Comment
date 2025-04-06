import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./modules/countStore";
// import reducer  from "./modules/countStore";

// 創建store，組合模塊
const store = configureStore({
    reducer: {
        counter: countReducer,
    },
})


export default store;