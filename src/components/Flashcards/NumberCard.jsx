import { useState } from "react";
import { 
  CardContainer, 
  InfoContainer,
  } from "../Flashcards/FlashcardElements.jsx";



const NumberCard = ({ data, isFlipped, flipCard }) => {

  const handleClick = () => {
    flipCard()
  };  

  return (
    <CardContainer isFlipped={isFlipped} onClick={handleClick} >
      <div className={`data ${isFlipped ? "isFlipped" : ""}`}>
        <section className="front">
        <InfoContainer>
          <p className="thaiWord">{data.thai}</p>
        </InfoContainer>
        </section>

        <section className="back">
        <InfoContainer>
          <p className="rtgs">{data.rtgs}</p>
          <p className="wordMeaning">{data.digit}</p>
        </InfoContainer> 

        {/* <AudioContainer>
          <a href={data.audioFile} onClick={togglePlay} target="_blank" rel="noreferrer">
        {playing ? 'Pause Audio' : 'Play Audio'}
          </a>
        {playing && <audio src={data.audioFile} autoPlay />}
      </AudioContainer> */}
        </section>
      </div>
    </CardContainer>
  );
};

export default NumberCard;