import { useState, useEffect } from "react";
import { getAllAlpha } from "../../utils/letters.js";


import Card from "../../components/Flashcards/ConsonantCard.jsx"
import { 
  PageContainer,
  ButtonContainer,
  Button,

} from "../../components/Flashcards/FlashcardElements.jsx"
const ConsonantFlashPage = () => {

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
    <PageContainer>
      {Object.values(letterData).map((data, idx)=> (
      <Card key={idx} data={data} />
      ))}
    <ButtonContainer>
      <Button />
      <Button />
    </ButtonContainer>
  </PageContainer>
  )
}

export default ConsonantFlashPage