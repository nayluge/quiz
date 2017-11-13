import React from 'react';
import PropTypes from 'prop-types';

function InputText(props) {

  function _handleKeyPress(e) {
    if (e.key === 'Enter') {
      {props.onAnswerSelected}
    }
    console.log(e.key);
  }

  return (
      <input
        type="text"
        className=""
        name="email"
        id={props.answerType}
        onKeyPress={props._handleKeyPress}
      />
  );

}

InputText.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default InputText;
