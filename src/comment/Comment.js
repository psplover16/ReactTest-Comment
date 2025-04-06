import styles from './Comment.module.css'
import { useState, useRef, useEffect } from 'react';
import CustomBtn from '../CustomBtn/CustomBtn';
import axios from 'axios';
// npm install dayjs
import dayjs from 'dayjs';
import useBtnType from './customUse/btnType'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setCount } from '../store/modules/countStore'

function Comment({ params, children }) {
    // useState 的 set必須用全新的值，不能改就值
    const { allCommentData, setAllCommentData, btnType } = useBtnType();

    const [publisher, setPublisher] = useState('');
    const [publishComment, setPublishComment] = useState('')
    const publisherRef = useRef(null);

    async function sendCommentToDb(comment) {
        const { data } = await axios.post('http://localhost:3000/datas', comment);
        console.log(data);
    }

    const sendComment = async () => {
        const newDate = dayjs(new Date()).format('YYYY-MM-DD');

        // YY	01	Two-digit year
        // YYYY	2001	Four-digit year
        // M	1-12	Month, beginning at 1
        // MM	01-12	Month, 2-digits
        // MMM	Jan-Dec	The abbreviated month name
        // MMMM	January-December	The full month name
        // D	1-31	Day of month
        // DD	01-31	Day of month, 2-digits
        // H	0-23	Hours
        // HH	00-23	Hours, 2-digits
        // h	1-12	Hours, 12-hour clock
        // hh	01-12	Hours, 12-hour clock, 2-digits
        // m	0-59	Minutes
        // mm	00-59	Minutes, 2-digits
        // s	0-59	Seconds
        // ss	00-59	Seconds, 2-digits
        // S	0-9	Hundreds of milliseconds, 1-digit
        // SS	00-99	Tens of milliseconds, 2-digits
        // SSS	000-999	Milliseconds, 3-digits
        // Z	-05:00	Offset from UTC
        // ZZ	-0500	Compact offset from UTC, 2-digits
        // A	AM PM	Post or ante meridiem, upper-case
        // a	am pm	Post or ante meridiem, lower-case
        // Do	1st... 31st	Day of Month with ordinal
        // X	1410715640.579	Unix timestamp
        // x	1410715640579	Unix ms timestamp
        const sendData = [
            {
                comment: publishComment,
                publishName: publisher,
                like: 0,
                date: newDate
            }
            , ...allCommentData
        ];
        const toDbData = {
            comment: publishComment,
            publishName: publisher,
            like: 0,
            date: newDate
        }
        setAllCommentData(
            sendData
        )
        await sendCommentToDb(toDbData)
        setPublisher('')
        setPublishComment('')
        publisherRef.current.focus();
    }

    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getOldComment() {
            const { data } = await axios.get('http://localhost:3000/datas');
            console.log(data);
            setAllCommentData(data);
        }
        getOldComment();
    }, [setAllCommentData]);

    return (
        <div>
            <h2 className={styles['text-red']}>{params}</h2>
            <div>
                {children}
            </div>
            {/* 評論 */}

            <div>
                <div>發布者: <input value={publisher} onChange={(e) => setPublisher(e.target.value)} ref={publisherRef} /></div>
                <div>發布評論: <input value={publishComment} onChange={(e) => setPublishComment(e.target.value)} /></div>
                <div>
                    <CustomBtn clickHandler={sendComment} params="發布評論" />
                </div>
            </div>
            <hr />
            <div>
                redux
                <div>
                    設置模塊，store與 index.js
                </div>
            </div>
            <div>
                <button type="button" onClick={() => dispatch(decrement())}>-</button>
                {count}
                <button type="button" onClick={() => dispatch(increment())}>+</button>
                <button type="button" onClick={() => dispatch(setCount(0))}>設置成0</button>
            </div>
            <hr />
            <div className={`${styles.flex} ${styles["gap-1"]}`}>
                {
                    btnType.map((val, key) => <div key={key}>
                        <CustomBtn params={val.params} clickHandler={() => val.func(key)} isChangeColor={val.isChoose}></CustomBtn>
                    </div>)
                }
            </div>

            <table>
                <thead>
                    <tr>
                        <td>評論內容</td>
                        <td>發布者</td>
                        <td>按讚數</td>
                        <td>發布日期</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        allCommentData.map((val, key) => (
                            <tr key={key}>
                                <td>{val.comment}</td>
                                <td>{val.publishName}</td>
                                <td>{val.like}</td>
                                <td>{val.date}</td>
                            </tr>
                        ))
                    }</tbody>

            </table>


        </div>
    );
}

export default Comment;
