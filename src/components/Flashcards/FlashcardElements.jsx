import styled from "styled-components";

export const CardContainer = styled.div`
  .data {
    margin: 10px auto;
    background: #557c75;
    height: 250px;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
    font-size: 24px;
    font-weight: 400;
    border-radius: 0.25rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1),
      0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1);
    position: relative;
    cursor: pointer;
    transition: 250ms;
    transform-style: preserve-3d;
    transform: perspective(1000px)
      rotateY(${(props) => (props.side ? "-180deg" : "0deg")})
      translateY(var(--translate-y, 0));
  }

  .data .front,
  .data .back {
    position: absolute;
    padding: 1rem;
    backface-visibility: hidden;
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

export const CardFront = styled.div``;
export const CardBack = styled.div``;
export const ButtonContainer = styled.section``;
export const PageContainer = styled.section``;
export const Button = styled.section``;
