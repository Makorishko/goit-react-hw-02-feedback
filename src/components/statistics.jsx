export const Statistics = ({good, neutral, bad, total, percentage }) => {
  if ((total)) {
    return (
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive faadback:{percentage}%</li>
      </ul>
    );
  } else {
    return '"There is no feedback"';
  }
};
