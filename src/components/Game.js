import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const [player, setPlayer] = useState(1);  
  const [submissionsList, setsubmissionsList] = useState([]);
  const [submitted, setSubmitted] = useState(false);


  const onPlayerSubmissionCallback = (playerSubmission) => {
    // make a copy of submissionsList
    const newSubmissions = [...submissionsList];

    // create sentence structure
    const sentence = "The " + playerSubmission.adjective1 + " " + playerSubmission.noun1 + " " + playerSubmission.adverb + " " + playerSubmission.verb + " the " + playerSubmission.adjective2 + " " + playerSubmission.noun2 + ".";

    newSubmissions.push(sentence); 
    // update state of submissionsList to new list
    setsubmissionsList(newSubmissions);  
    // increment player
    setPlayer(player + 1);
  }

  const onFinalPoemCallback = (bool) => {
    setSubmitted(bool);
  }

  // on reset
  // setPlayer(1)
    
  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <section className={submitted ? 'hide' : 'show'}>
        {
          submissionsList.length > 0 ? 
          <RecentSubmission recentSubmission={submissionsList[submissionsList.length - 1]}/> :
            null
        }
        
        <PlayerSubmissionForm player={player} onSubmit={onPlayerSubmissionCallback} fields={FIELDS} />
      </section>

      <FinalPoem submissions={submissionsList} submitted={submitted} onFinalPoemCallback={onFinalPoemCallback}/>

    </div>
  );
}

const FIELDS = [
  "The",
  {
    key: 'adjective1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adverb',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adjective2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
