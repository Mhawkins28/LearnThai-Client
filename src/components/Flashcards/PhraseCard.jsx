import { useState } from "react";
import { 
  CardContainer, 
  InfoContainer,
  AudioContainer
  } from "../Flashcards/FlashcardElements.jsx";

const PhraseCard = ({ data, isFlipped, flipCard }) => {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    flipCard()
  };  

  function togglePlay() {
    setPlaying(!playing);
  }

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
          <p className="wordMeaning"> {data.meaning}</p>
        </InfoContainer>


        <AudioContainer>
          <a href={data.audioFile} onClick={togglePlay} target="_blank" rel="noreferrer">
        {playing ? 'Pause Audio' : 'Play Audio'}
          </a>
        {playing && <audio src={data.audioFile} autoPlay />}
      </AudioContainer>
        </section>
      </div>
    </CardContainer>
  );
};

export default PhraseCard;