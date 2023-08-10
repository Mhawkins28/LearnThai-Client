import { useState, useEffect, useRef } from "react";
import { getAllPhrases } from "../../utils/phrases.js";
import PhraseCard from "../../components/Flashcards/PhraseCard.jsx";
import {
  PageContainer,
  ButtonContainer,
  Button,
} from "../../components/Flashcards/FlashcardElements.jsx";

const PhraseFlashPage = () => {
  const [phraseData, setPhraseData] = useState({});
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const getNextCard = () => {
    const keys = Object.keys(phraseData);
    if (keys.length > 0) {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % keys.length);
      setIsCardFlipped(false);
    }
  };

  const getPreviousCard = () => {
    const keys = Object.keys(phraseData);
    if (keys.length > 0) {
      setCurrentCardIndex(
        (prevIndex) => (prevIndex - 1 + keys.length) % keys.length
      );
      setIsCardFlipped(false);
    }
  };

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  useEffect(() => {
    const getPhrases = async () => {
      const allPhrases = await getAllPhrases();
      setPhraseData(allPhrases);
    };

    getPhrases();
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
      {Object.keys(phraseData).length > 0 && (
        <PhraseCard
          data={phraseData[currentCardIndex]}
          isFlipped={isCardFlipped}
          flipCard={flipCard}
        />
      )}
      <ButtonContainer>
        <Button onClick={getPreviousCard}>Back</Button>
        <Button onClick={getNextCard}>Next Card</Button>
      </ButtonContainer>
    </PageContainer>
  );
};

export default PhraseFlashPage;
