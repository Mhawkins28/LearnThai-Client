import { useState, useEffect } from "react";
import { CardContainer } from "../Flashcards/FlashcardElements.jsx"


const Card = ({data, idx}) => {

  const [side, setSide] = useState();

  function handleClick() {
    console.log("clicked!");
    setSide(!side);
    console.log(side);
  }

//TODO: 1) currently no data on back. Prob a CSS issue. Look at https://codesandbox.io/s/flashcards-in-react-forked-1ntg7x?file=/src/Card.tsx:257-261. 

//TODO: 2) make sure Page/component structure and orginizaiton is efficient. also fixing CSS Elements.

  return (
    <CardContainer>
    <div className={`data ${side ? "side" : ""}`} onClick={handleClick}>
      <div key={idx} >
      <div className="front">{data.letter}</div>
      <div className="back">
        {data.rtgs}
    </div>
      </div>
    </div>
    </CardContainer>
  );
};

export default Card;