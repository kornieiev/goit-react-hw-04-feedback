import React from 'react';
import { useState } from 'react';

import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

import { MainWrap } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const CountHandleClick = key => {
    switch (key) {
      case 'good':
        setGood(prevCount => prevCount + 1);
        break;
      case 'neutral':
        setNeutral(prevCount => prevCount + 1);
        break;
      case 'bad':
        setBad(prevCount => prevCount + 1);
        break;
      default:
        return null;
    }
  };
  const countTotalFeedback = () => {
    let total = Object.values(options).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    let allVotes = countTotalFeedback();
    if (allVotes === 0) {
      return 0;
    } else {
      let result = +((good / allVotes) * 100).toFixed(0);
      return result;
    }
  };

  return (
    <>
      <MainWrap>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(options)}
            onLeaveFeedback={CountHandleClick}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </MainWrap>
    </>
  );
}
