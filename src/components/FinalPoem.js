import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  // const completedPoem = props.submissions.map(submission => submission.);
  const sentences = [];
  
  props.submissions.forEach((submission) => {    
    const sentence = "The " + submission.adjective1 + " " + submission.noun1 + " " + submission.adverb + " " + submission.verb + " the " + submission.adjective2 + " " + submission.noun2 + ".";
    sentences.push(sentence)
  });

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

        {/* As players who have submitted one or more lines, I want to see all of the submissions of poetry lines in the section named "Final Poem".
        As a player, I want to see each submission in the final poem section on a different line or paragraph, so that it looks more like a structured poem. */}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
