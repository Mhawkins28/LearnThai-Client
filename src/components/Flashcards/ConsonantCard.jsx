import { useState } from "react";
import { 
  CardContainer, 
  InfoContainer,
  AudioContainer
  } from "../Flashcards/FlashcardElements.jsx";

const Card = ({ data }) => {
  const [side, setSide] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setSide(!side);
  };

  function togglePlay() {
    setPlaying(!playing);
  }
  return (
    <CardContainer side={side} onClick={handleClick}>
      <div className={`data ${side ? "side" : ""}`}>
        <section className="front">
        <InfoContainer>
          <p className="letter">{data.letter}</p>
          <p className="thaiWord">{data.thaiWord}</p>
        </InfoContainer>
        </section>
        <section className="back">
        <InfoContainer>
          <p className="rtgs">{data.rtgs}</p>
          <p className="wordMeaning">{data.acrophonicRtgs} -- {data.meaning}</p>
        </InfoContainer>

          <InfoContainer>
            <p className="letterClass">class -- {data.class}</p>
            <p className="sound">{data.initial} / {data.final}</p> {/*Maybe add as a table*/}
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

export default Card;




//TODO: 1) make sure Page/component structure and orginizaiton is efficient. also fixing CSS Elements.

//TODO: 2) fix css on flashcards

//TODO: 3) audio files go to to the audio library website and does not play sound. need to fix that (will prob just add the files locally). also need to fix the issue that when clicked it also flips the card.

//TODO: 4) add other flashcards 

//TODO: 5) work on Dashboard css elements

//TODO: 6) add other components to Dashboard -- todo, tracker, calander, resource pages, middle element?,



