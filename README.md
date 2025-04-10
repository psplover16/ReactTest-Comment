npx json-server db.json
npx json-server db.json --port 3123

npx create-react-app 專案名稱
npm start



useState
useRef
createContext / Provider / useContext
useEffect 與 清除器，要放在組件內 或是 自定義hook函數內，且要放在表頭。引用時不能用 邏輯判斷
自定義hook 共用邏輯+return


redux
redux devtools
npm i @reduxjs/toolkit react-redux
store > index.js == module/ > channelStore.js === counterStore.js



redux
// 1.安裝
npm i @reduxjs/toolkit react-redux
// 2. 設定 reducer
import { createSlice } from '@reduxjs/toolkit';
const conteStore = createSlice({
    name: 'count',
    initialState: {
        count: 0,
        listData: [],
    },
    reducers: {
        increaseMent(state) {
            state.count++;
        },
        setCount: (state, actions) => {
            state.count = actions.payload;
        }
    }
});

export const { increaseMent, setCount } = conteStore.actions;
const countReducer = conteStore.reducer;

// 處理異步請求的部分
const fetchList = () => {
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3000/datas');
        dispatch(setListData(data));
    }
}

export default countReducer;

// 3.把2.步驟的reducer模塊，透過react-reduct組合使用
import { configureStore } from '@reduxjs/toolkit';
import countReducer from from "./modules/countStore";

const store = configureStore({
    reducer: {
        counter: countReducer,
    },
});

export default store;

// 4. index.js 把模塊導入
import { Provider } from 'react-redux';
import store from './store';

root.render(
    <Provider store={ store } >
    <App />
</Provider>
);

// 5. store使用
import { useDispatch, useSelector } from 'react-redux';
import { increaseMent, setCount } from '../store/modules/countStore'

function Comment() {
    // useSelector(state=>state.count)，指定indexJs的counter模塊，然後取得內部的count值
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();
    useEffect(() => {
        async function getOldComment() {
            const { data } = await axios.get('http://localhost:3000/datas');
            // dispatch(setListData(data));
        }
        dispatch(fetchList());
        getOldComment();
    }, []);
return (
    <div>
        {count}
        <button type="button" onClick={() => dispatch(increment())}>+</button>
        <button type="button" onClick={() => dispatch(setCount(0))}>設置成0</button>
    </div>
);
};




<!--  -->
npm i react-router-dom
