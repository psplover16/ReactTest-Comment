import { createSlice } from "@reduxjs/toolkit";

const countStore = createSlice({
    name: "counter",
    // 初始狀態
    initialState: {
        count: 0
    },
    // 修改數據的同步方法
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement: (state) => {
            state.count--
        },
        incrementByAmount: (state, action) => state.count + action.payload,
        setCount(state, action) {
            state.count = action.payload;
        }
    }
})

// 解構出actions對象的函數
const { increment, decrement, incrementByAmount, setCount } = countStore.actions;
// 獲取reducer函數
const reducer = countStore.reducer;

// 導出創建action對象的函數和reducer函數
export { increment, decrement, incrementByAmount, setCount, reducer as countReducer };

export default reducer;