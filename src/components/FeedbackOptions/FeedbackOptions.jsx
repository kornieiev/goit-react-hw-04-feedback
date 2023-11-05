import React from 'react';
import PropTypes from 'prop-types';

import { BtnList, Btn } from './FeedbackOptions.styled';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      <div>
        <BtnList>
          {options.map(key => {
            return (
              <li key={key}>
                <Btn value={key} onClick={() => onLeaveFeedback(key)}>
                  {key.charAt(0).toUpperCase()}
                  {key.slice(1)}
                </Btn>
              </li>
            );
          })}
        </BtnList>
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
