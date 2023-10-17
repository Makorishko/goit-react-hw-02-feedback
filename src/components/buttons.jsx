import { Buttons } from './buttons-styled';

export const Button = ({ onLeaveFeedback }) => {
  return (
    <div>
      <Buttons onClick={evt => onLeaveFeedback('good')}>Good</Buttons>
      <Buttons onClick={evt => onLeaveFeedback('neutral')}>Neutral</Buttons>
      <Buttons onClick={evt => onLeaveFeedback('bad')}>Bad</Buttons>
    </div>
  );
};
