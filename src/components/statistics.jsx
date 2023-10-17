import { List } from './statistics-styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  if (total) {
    return (
      <>
        <h1>Statistics</h1>
        <List>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive feedback:{percentage}%</li>
        </List>
      </>
    );
  } else {
    return '"There is no feedback"';
  }
};
 