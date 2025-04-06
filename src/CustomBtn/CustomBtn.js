import styles from './CustomBtn.module.css'
import classNames from 'classnames/bind';

export default function CustomBtn({ params, clickHandler, isChangeColor }) {
    // return <button
    //     onClick={clickHandler}
    //     className={`
    //     ${styles['bg-yellow']}
    //     ${isChangeColor && `${styles['text-green']} ${styles.text50px}`}
    //     `}
    // >
    //     {params}
    // </button>;


    return <button
        onClick={clickHandler}
        className={classNames(styles['bg-yellow'], { active: isChangeColor, [styles.textGreen]: isChangeColor, [styles.text50px]: isChangeColor, })}
    >
        {params}
    </button>;
}
// ${isChangeColor ? `${styles['text-green']} ${styles.text50px}` : ''}
// 當使用 && ，若前者為true，返回後者。 若前者為false，返回前者

// npm install classnames
