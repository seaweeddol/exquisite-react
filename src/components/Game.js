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

  const submissions = [];
  const [player, setPlayer] = useState(1);  
  const [submissionsList, setsubmissionsList] = useState(submissions);


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

      <RecentSubmission recentSubmission={submissionsList[submissionsList.length - 1]}/>

      <PlayerSubmissionForm player={player} onSubmit={onPlayerSubmissionCallback} />

      <FinalPoem submissions={submissionsList}/>

    </div>
  );
}


const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
