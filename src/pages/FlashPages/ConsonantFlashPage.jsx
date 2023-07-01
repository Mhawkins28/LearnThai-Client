import { useState, useEffect, useRef } from "react";
import { getAllAlpha } from "../../utils/letters.js";
import Card from "../../components/Flashcards/ConsonantCard.jsx";
import {
  PageContainer,
  ButtonContainer,
  Button,
} from "../../components/Flashcards/FlashcardElements.jsx";

const ConsonantFlashPage = () => {
  const [letterData, setLetterData] = useState({});
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const getNextCard = () => {
    const keys = Object.keys(letterData);
    if (keys.length > 0) {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % keys.length);
      setIsCardFlipped(false);
      
    }
  };

  const getPreviousCard = () => {
    const keys = Object.keys(letterData);
    if (keys.length > 0) {
      setCurrentCardIndex((prevIndex) => (prevIndex - 1 + keys.length) % keys.length);
      setIsCardFlipped(false);
    }
  };

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  useEffect(() => {
    const getLetters = async () => {
      const allLetters = await getAllAlpha();
      setLetterData(allLetters);
    };

    getLetters();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        getNextCard();
      } else if (event.key === "ArrowLeft") {
        getPreviousCard();
      } else if (event.key === " ") {
        //event.preventDefault();
        flipCard();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentCardIndex, isCardFlipped]);


  return (
    <PageContainer>
      {Object.keys(letterData).length > 0 && (
        <Card data={letterData[currentCardIndex]} isFlipped={isCardFlipped} flipCard={flipCard} />
      )}
      <ButtonContainer>
        <Button onClick={getPreviousCard}>Back</Button>
        <Button onClick={getNextCard}>Next Card</Button>
      </ButtonContainer>
    </PageContainer>
  );
};

export default ConsonantFlashPage;
