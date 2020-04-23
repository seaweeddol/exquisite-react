import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  let increment = 0;
  let finalPoem = props.submissions.map(sentence => {
    increment += 1
    return (<p key={increment}>{sentence}</p>) 
  });

  const onReveal = () => {
    props.onFinalPoemCallback(true);
  }

  return (
    <div className="FinalPoem">
      {/* if display is true, show final poem */}
      { props.submitted ? 
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {finalPoem}
        </section> : 
        null
      }

      { props.submitted ? 
        null : 
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onReveal}/>
        </div>
      }
    </div>
  );
}

FinalPoem.propTypes = {
  submissions: PropTypes.arrayOf(PropTypes.string),
  submitted: PropTypes.bool.isRequired,
  onFinalPoemCallback: PropTypes.func,
}

export default FinalPoem;
