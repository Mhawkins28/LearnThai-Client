import styled from "styled-components";


export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
`;

export const CardContainer = styled.div`
  .data {
    background: #557c75;
    height: 250px;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000000;
    /* font-weight: 500; */
    border-radius: 0.25rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1),
      0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 250ms;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(${(props) => (props.side ? "-180deg" : "0deg")});
    transition: transform 250ms;
  }

  .data .front,
  .data .back {
    position: absolute;
    padding: 1rem;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
  }

  .front {
    transform: rotateY(0deg);
    opacity: ${(props) => (props.side ? 0 : 1)};
  }

  .back {
    transform: rotateY(180deg);
    opacity: ${(props) => (props.side ? 1 : 0)};
  }

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .letter {
    font-size: 4rem;
    margin: 0
  }
  .thaiWord {
    font-size: 1.75rem;
    margin: 1.6rem;
    letter-spacing: 0.15rem;
  }

  .rtgs, .letterClass, .wordMeaning, .sound {
    margin: 5px
  }

  .wordMeaning {
    margin-bottom: 1.75rem;
  }
`
export const AudioContainer = styled.div`
  border: solid 1px black
  
`

export const ButtonContainer = styled.section`
  margin-top: 32px;
  display: flex;
  align-items: center;
`;

export const Button = styled.section`
  border-radius: .15rem;
  background: transparent;
  border: 1.81px solid white;
  white-space: nowrap;
  padding: 14px 48px;
  margin: 5px;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.1s ease-in-out;
  }
`;


