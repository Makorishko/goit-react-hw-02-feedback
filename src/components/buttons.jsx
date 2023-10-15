export const Button = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={evt => onLeaveFeedback('good')}>Good</button>
      <button onClick={evt => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={evt => onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
};
