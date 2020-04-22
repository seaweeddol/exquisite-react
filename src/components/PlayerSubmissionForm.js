import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  
  // User Stories
  // Game component has the data of my submission, so that the Game component keeps track of all of the submissions
  // As a player going after the first player, I want to have a cleared, reset form with no text in the input elements
  // As the third player, I want to see that the header for the submission form is "Player Submission Form for Player #3"

  // Don't be shy about making all of the pieces of props or state that you've determined you need!

  const [sentence, setSentence] = useState({
    adjective1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: '',
  });

  const onInputChange = (event) => {
    console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    // Duplicate user into new object
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

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <p>The</p>
          <input
            name="adjective1"
            placeholder="adjective"
            type="adjective" 
            value={sentence.adjective1} 
            onChange={onInputChange}
          />
          <input
            name="noun1"
            placeholder="noun"
            type="noun" 
            value={sentence.noun} 
            onChange={onInputChange}
          />
          <input
            name="adverb"
            placeholder="adverb"
            type="adverb" 
            value={sentence.adverb} 
            onChange={onInputChange}
          />
          <input
            name="verb"
            placeholder="verb"
            type="verb" 
            value={sentence.verb} 
            onChange={onInputChange}
          />
          <p>the</p>
          <input
            name="adjective2"
            placeholder="another adjective"
            type="adjective" 
            value={sentence.adjective2} 
            onChange={onInputChange}
          />
          <input
            name="noun2"
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
