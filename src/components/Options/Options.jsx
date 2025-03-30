import css from "./Options.module.css";


const Options = ({updateFeedback, onReset, totalFeedbacks}) => {
    return (
        <div className={css.options}>
            <button type="button"
            className={css.button}
            onClick={() => updateFeedback("good")}
            >Good</button>
            <button type="button"
            className={css.button}
            onClick={() => updateFeedback("neutral")}
            >Neutral</button>
            <button
            type="button"
            className={css.button}
            onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedbacks > 0 && <button
            type="button"
            className={css.button}
            onClick={onReset}>Reset</button>
            }
        </div>
    );
};
export default Options;