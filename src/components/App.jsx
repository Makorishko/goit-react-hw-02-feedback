import { Title } from './title';
import { Button } from './buttons';
import { Statistics } from './statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    options: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  leaveFeedback = option => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        [option]: prevState.options[option] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.options;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    return ((this.state.options.good / total) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state.options;

    return (
      <div>
        <Title />
        <Button onLeaveFeedback={this.leaveFeedback} />

        <Statistics
          percentage={this.countPositiveFeedbackPercentage()}
          total={this.countTotalFeedback()}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>
    );
  }
}
