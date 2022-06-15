import s from "./App.module.css";

const FeedbackOptions  = ( {clickGood, clickNeutral, clickBad} ) => {
    return <ul className={s.buttonList}>
                <li className={s.item}>
                    <button type="button" className={s.button} onClick={clickGood}>
                        Good
                    </button>
                </li>
                <li className={s.item}>
                    <button type="button" className={s.button} onClick={clickNeutral}>Neutral</button>
                </li>
                <li className={s.item}>
                    <button type="button" className={s.button} onClick={clickBad}>Bad</button>
                </li>
            </ul>
}

export default FeedbackOptions 