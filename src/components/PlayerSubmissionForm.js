import React, { useState } from 'react';
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

  return (
  <div className="PlayerSubmissionForm">
    <h3>Player Submission Form for Player #{ props.player }</h3>

    <form className="PlayerSubmissionForm__form" onSubmit={onSubmitLine}>

      <div className="PlayerSubmissionForm__poem-inputs">

        <p>The</p>
        <input
          name="adjective1"
          className={(sentence.adjective1 === "") ? "PlayerSubmissionFormt__input--invalid" : ""} 
          placeholder="adjective"
          type="adjective" 
          value={sentence.adjective1} 
          onChange={onInputChange}
        />
        <input
          name="noun1"
          className={(sentence.noun1 === "") ? "PlayerSubmissionFormt__input--invalid" : ""} 
          placeholder="noun"
          type="noun" 
          value={sentence.noun1} 
          onChange={onInputChange}
        />
        <input
          name="adverb"
          className={(sentence.adverb === "") ? "PlayerSubmissionFormt__input--invalid" : ""} 
          placeholder="adverb"
          type="adverb" 
          value={sentence.adverb} 
          onChange={onInputChange}
        />
        <input
          name="verb"
          className={(sentence.verb === "") ? "PlayerSubmissionFormt__input--invalid" : ""} 
          placeholder="verb"
          type="verb" 
          value={sentence.verb} 
          onChange={onInputChange}
        />
        <p>the</p>
        <input
          name="adjective2"
          className={(sentence.adjective2 === "") ? "PlayerSubmissionFormt__input--invalid" : ""} 
          placeholder="another adjective"
          type="adjective" 
          value={sentence.adjective2} 
          onChange={onInputChange}
        />
        <input
          name="noun2"
          className={(sentence.noun2 === "") ? "PlayerSubmissionFormt__input--invalid" : ""} 
          placeholder="another noun"
          type="noun" 
          value={sentence.noun2} 
          onChange={onInputChange}
        />
        <p>.</p>

      </div>

      <div className="PlayerSubmissionForm__submit">
        <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
      </div>
    </form>
  </div>
  );
}


export default PlayerSubmissionForm;
