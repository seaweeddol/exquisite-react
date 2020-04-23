import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  
  const [sentence, setSentence] = useState({
    adjective1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: '',
  });

  const onInputChange = (event) => {
    const newSentence = {
      ...sentence,
    }
  
    newSentence[event.target.name] = event.target.value;
    setSentence(newSentence);
  }

  const onSubmitLine = (event) => {
    // prevents form from submitting by default
    event.preventDefault();

    // prevent user from submitting empty fields
    if (sentence.adjective1 !== '') {
      //send that data back up to App
      props.onSubmit(sentence);
      
      setSentence({
        adjective1: '',
        noun1: '',
        adverb: '',
        verb: '',
        adjective2: '',
        noun2: '',
      })
    }
  }

  let increment = 0;
  const renderInputs = props.fields.map((field) => {
    increment += 1
    if (field.key) {
      increment += 1
      return (<input
        key={increment} 
        name={field.key}
        className={(sentence[field.key] === "") ? "PlayerSubmissionFormt__input--invalid" : ""} 
        placeholder={field.placeholder}
        type={field.placeholder}
        value={sentence[field.key]} 
        onChange={onInputChange}
      />);
    } else {
        return (<p key={increment}>{field}</p>);
    }
  });


  return (
  <div className="PlayerSubmissionForm">
    <h3>Player Submission Form for Player #{ props.player }</h3>

    <form className="PlayerSubmissionForm__form" onSubmit={onSubmitLine}>

      <div className="PlayerSubmissionForm__poem-inputs">
        {renderInputs}
      </div>

      <div className="PlayerSubmissionForm__submit">
        <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
      </div>
    </form>
  </div>
  );
}

PlayerSubmissionForm.propTypes = {
  player: PropTypes.number.isRequired,
  onPlayerSubmissionCallback: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ])
  ),
}


export default PlayerSubmissionForm;
