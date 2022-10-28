
import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import { Section } from './Section/Section';
import Statistics from './Statistics/Statistics';


export const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
const [neutral, setNeutral] = useState(0)
  
  const onFeedbackStateChange = e => {
    switch (e.target.name) {
      case 'good': setGood(prevGood=> prevGood+1)
        break;
      case 'bad': setBad(prevBad=> prevBad+1)
        break;
      case 'neutral': setNeutral(prevNeutral=> prevNeutral+1)
         break;
      default:
        break;
    }
    };

  const countTotalFeedback = () => {
    return good + bad + neutral;
    // Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {

    const percent = (good / countTotalFeedback()) * 100;
      // (this.state.good / this.countTotalFeedback()) * 100;
    return Number.isNaN(percent) ? 0 : Math.round(percent);
  };

  
       return (
      <>
        <Section title="Please leave your feedback">
          <Feedback
            options={['good', 'bad', 'neutral']}
            onLeaveFeedback={onFeedbackStateChange}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            message="There is no feedback"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }


