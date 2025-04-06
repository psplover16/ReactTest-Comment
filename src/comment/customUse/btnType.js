import { useState } from 'react';
export default function useCustomBtnType() {
    const [allCommentData, setAllCommentData] = useState([]);

    function setNewBtn(btnType, key) {
        const newBtmArr = [...btnType].map((val, tmpKey) => {
            return {
                ...val,
                isChoose: (key === tmpKey ? true : false),
            }
        })
        setBtnType(newBtmArr)
    }
    const [btnType, setBtnType] = useState([
        {
            params: '按照按讚數排列-升序',
            isChoose: false,
            func: (key) => {
                setNewBtn(btnType, key)
                // useState 創建是 非同步，所以會抓取到創建時的資料
                // setAllCommentData(
                //     [...allCommentData].sort((a, b) => a.like - b.like)
                // )
                setAllCommentData(
                    (prevData) => ([...prevData].sort((a, b) => a.like - b.like))
                )
            }
        },
        {
            params: '按照按讚數排列-降序',
            isChoose: false,
            func: (key) => {
                setNewBtn(btnType, key)
                setAllCommentData(
                    (prevData) => ([...prevData].sort((a, b) => -a.like + b.like))
                )
            }
        },
        {
            params: '按照發布日期排列-升序',
            isChoose: false,
            func: (key) => {
                // 注意點  new Date(a.date) - new Date(b.date))  與 -new Date(a.date) + new Date(b.date)) 完全不同
                setNewBtn(btnType, key)
                setAllCommentData(
                    (prevData) => ([...prevData].sort((a, b) => new Date(a.date) - new Date(b.date)))
                )
            }
        },
        {
            params: '按照發布日期排列-降序',
            isChoose: false,
            func: (key) => {
                setNewBtn(btnType, key)
                setAllCommentData(
                    (prevData) => ([...prevData].sort((a, b) => new Date(b.date) - new Date(a.date)))
                )
            }
        },
    ]);

    return {
        allCommentData, setAllCommentData, btnType
    }
}