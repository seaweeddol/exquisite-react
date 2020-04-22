import React, {useState} from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const [display, setDisplay] = useState(false);

  let finalPoem = props.submissions.map(sentence => {
    return (<p>{sentence}</p>) 
  });

  const onReveal = () => {
    setDisplay(true);
  }

  return (
    <div className="FinalPoem">
      {/* if display is true, show final poem */}
      { display ? 
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {finalPoem}
        </section> : 
        null
      }

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onReveal}/>
      </div>
    </div>
  );
}

export default FinalPoem;
