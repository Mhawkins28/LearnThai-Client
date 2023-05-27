import styled from "styled-components";


export const CardContainer = styled.div `
  
.card {
  margin: 10px auto;
  background: var(--grad-one);
  height: 350px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  border-radius: var(--border-radius);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1),
    0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  /* animated interactivity */
  transition: 250ms;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateY(var(--rotate-y, 0))
    translateY(var(--translate-y, 0));
}

.side {
  background: var(--grad-two);
  transform: rotateY(-180deg);
}

.card .front,
.card .back {
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
}

.card .front {
  transform: rotateY(0deg);
}

.card.side .front {
  opacity: 0;
  display: none;
}

.card .back {
  transform: rotateY(180deg);
}
`


export const CardFront = styled.div`
  

`
export const CardBack = styled.div`
  

`
export const ButtonContainer =styled.section`
  

`
export const PageContainer =styled.section`
  

`
export const Button =styled.section`
  

`
