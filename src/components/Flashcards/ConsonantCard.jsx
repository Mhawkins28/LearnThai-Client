import { useState, useEffect } from "react";
import { getAllAlpha } from "../../utils/alphabets.js";
import ConsonantCard from "./ConsonantCard.jsx";

const Card = () => {
  const [alphaData, setAlphaData] = useState({
    category: "",
    letter: "",
    pronounciation: "",
    class: "",
    thai: "",
    rtgs: "",
    meaning: "",
    initial: "",
    final: "",
  });

  const GetLetters = async () => {
    const allLetters = await getAllAlpha();
    setAlphaData(allLetters);
  };

  useEffect(() => {
    GetLetters();
  }, []);

  return (
    <div>
      <p>Alphabet cards here</p>
      {/* {alphaData.map((letter) => (
        <LetterCard key={letter._id} letter={letter} />
      ))} */}
    </div>
  );
};

export default Card;