import { useState, useEffect, useRef } from "react";
import { getAllNumbers } from "../../utils/numbers.js";
import NumberCard from "../../components/Flashcards/NumberCard.jsx";
import {
  PageContainer,
  ButtonContainer,
  Button,
} from "../../components/Flashcards/FlashcardElements.jsx";


const NumberFlashPage = () => {

  const [data, setNumberData] = useState({});
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const getNextCard = () => {
    const keys = Object.keys(data);
    if (keys.length > 0) {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % keys.length);
      setIsCardFlipped(false);
      
    }
  };

  const getPreviousCard = () => {
    const keys = Object.keys(data);
    if (keys.length > 0) {
      setCurrentCardIndex((prevIndex) => (prevIndex - 1 + keys.length) % keys.length);
      setIsCardFlipped(false);
    }
  };

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  useEffect(() => {
    const getNumbers = async () => {
      const allNumbers = await getAllNumbers();
      setNumberData(allNumbers);
    };

    getNumbers();
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
      {Object.keys(data).length > 0 && (
        <NumberCard data={data[currentCardIndex]} isFlipped={isCardFlipped} flipCard={flipCard} />
      )}
      <ButtonContainer>
        <Button onClick={getPreviousCard}>Back</Button>
        <Button onClick={getNextCard}>Next Card</Button>
      </ButtonContainer>
    </PageContainer>
  )
}

export default NumberFlashPage