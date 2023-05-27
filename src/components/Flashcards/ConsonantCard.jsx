import { useState, useEffect } from "react";
import { getAllAlpha } from "../../utils/letters.js";
import { CardContainer } from "../Flashcards/FlashcardElements.jsx"


const Card = () => {

  const [letterData, setLetterData] = useState({
    category: "",
    class: "",
    letter: "",
    rtgs: "",
    thaiWord: "",
    acrophonicRtgs: "",
    meaning: "",
    initial: "",
    final: "",
    audioFile: ""
  });
  
  
  const GetLetters = async () => {
    const allLetters = await getAllAlpha();
    setLetterData(allLetters);
  };
  
  useEffect(() => {
    GetLetters();
  }, []);
  

  const [side, setSide] = useState();

  function handleClick() {
    console.log("clicked!");
    setSide(!side);
    console.log(side);
  }

//TODO: 1) currently no data on cards. Need to move the map over to the Page? look at https://codesandbox.io/s/flashcards-in-react-forked-1ntg7x?file=/src/Card.tsx:257-261. 2) fix a little css to test more. 3) make sure Page/component structure and orginizaiton is efficient

  return (
    <CardContainer>
    <div className={`card ${side ? "side" : ""}`} onClick={handleClick}>
      {Object.values(letterData).map((data, idx)=> (
      <div key={idx} >
      <div className="front">{data.letter}</div>
      <div className="back">
        {data.rtgs}
        </div>
      </div>
      ))}
    </div>
    </CardContainer>
  );
};

export default Card;