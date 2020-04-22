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
  const [sentence, setSentence] = useState('');

  // on reset
  // setPlayer(1)

  const onPlayerSubmissionCallback = (sentence) => {
    setSentence("The " + sentence.adjective1 + " " + sentence.noun1 + " " + sentence.adverb + " " + sentence.verb + " the " + sentence.adjective2 + " " + sentence.noun2);
    // increment player
    setPlayer(player + 1);
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission recentSubmission={sentence}/>

      <PlayerSubmissionForm player={player} onSubmit={onPlayerSubmissionCallback} />

      <FinalPoem recentSubmission={sentence}/>

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
