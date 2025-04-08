import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const commentStore = createSlice({
    name: 'commentList',
    initialState: {
        list: [],
    },
    reducers: {
        setList(state, action) {
            state.list = action.payload;
        }
    }
});

const { setList } = commentStore.actions;

function fetchList(url) {
    return async (dispatch) => {
        const { data } = await axios.get(url);
        console.log(data)
        dispatch(setList(data));
    }
}

export { setList, fetchList };

const commentReducer = commentStore.reducer;
export default commentReducer;