import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedbacks, positiveFeedback }) => {
  return (
    <ul className={css.feedback}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total:{totalFeedbacks}</li>
      <li>Positive: {`${positiveFeedback}%`}</li>
      <li></li>
    </ul>
  );
};
export default Feedback;
