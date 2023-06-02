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
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const getNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % letterData.length);
  };

  const getPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + letterData.length) % letterData.length);
  };
  
  const GetLetters = async () => {
    const allLetters = await getAllAlpha();
    setLetterData(allLetters);
  };
  
  useEffect(() => {
    GetLetters();
  }, []);



  return (
    <PageContainer>
      {letterData.length > 0 && <Card data={letterData[currentCardIndex]} />}
      <ButtonContainer>
        <Button onClick={getNextCard}>Next Card</Button>
        <Button onClick={getPreviousCard}>Back</Button>
      </ButtonContainer>
    </PageContainer>
  )
}

export default ConsonantFlashPage