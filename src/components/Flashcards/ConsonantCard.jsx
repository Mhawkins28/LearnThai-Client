import { useState, useEffect } from "react";
import { getAllAlpha } from "../../utils/letters.js";

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
  

  return (
    <div>
      {Object.values(letterData).map((data, idx)=> (
      <div key={idx} >
      <h2>{data.letter}</h2>
      <h2>{data.rtgs}</h2>
      </div>
      ))}
    </div>
  );
};

export default Card;