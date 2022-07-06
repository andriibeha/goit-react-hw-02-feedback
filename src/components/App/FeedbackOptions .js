import s from "./App.module.css";

const FeedbackOptions  = ( {onClick} ) => {
    return <ul className={s.buttonList}>
                <li className={s.item}>
                    <button type="button" name="good" className={s.button} onClick={onClick}>
                        Good
                    </button>
                </li>
                <li className={s.item}>
                    <button type="button" name="neutral" className={s.button} onClick={onClick}>Neutral</button>
                </li>
                <li className={s.item}>
                    <button type="button" name="bad" className={s.button} onClick={onClick}>Bad</button>
                </li>
            </ul>
}

export default FeedbackOptions 