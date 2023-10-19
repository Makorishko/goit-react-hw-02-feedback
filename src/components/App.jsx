import { Button } from './buttons/buttons';
import { Statistics } from './statistics/statistics';
import { Component } from 'react';
import { Section } from './section';
import { Notification } from './notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    return ((this.state.good / total) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title={'Please leave your feedback'}>
          <Button
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title={'Statistic'}>
          {this.countTotalFeedback() ? (
            <Statistics
              percentage={this.countPositiveFeedbackPercentage()}
              total={this.countTotalFeedback()}
              good={good}
              neutral={neutral}
              bad={bad}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}
