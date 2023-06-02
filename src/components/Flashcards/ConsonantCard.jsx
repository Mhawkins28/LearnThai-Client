import { useState } from "react";
import { CardContainer } from "../Flashcards/FlashcardElements.jsx";

const Card = ({ data }) => {
  const [side, setSide] = useState(false);

  const handleClick = () => {
    setSide(!side);
  };

  return (
    <CardContainer side={side} onClick={handleClick}>
      <div className={`data ${side ? "side" : ""}`}>
        <div className="front">
          <p>{data.letter}</p>
          <p>{data.thaiWord}</p>
        </div>
        <div className="back">
          <p>{data.rtgs}</p>
          <p>
            {data.acrophonicRtgs} - {data.meaning}
          </p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;



//TODO: 1) currently no data on back. Prob a CSS issue. Look at https://codesandbox.io/s/flashcards-in-react-forked-1ntg7x?file=/src/Card.tsx:257-261. 

//TODO: 2) make sure Page/component structure and orginizaiton is efficient. also fixing CSS Elements.

//TODO: 3) fix css on flashcards

//TODO: 4) audio files go to to the audio library website and does not play sound. need to fix that (will prob just add the files locally). also need to fix the issue that when clicked it also flips the card.



