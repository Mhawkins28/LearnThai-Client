import React from 'react'
import { 
  PageContainer,
  CardContainer,
  CardFront,
  CardBack,
  ButtonContainer,
  Button,

} from "../../components/FlashcardElements"

const LetterCard = () => {
  return (
  <PageContainer>
    <CardContainer>
      <CardFront> Front </CardFront>
      <CardBack> Back </CardBack>
    </CardContainer>
    <ButtonContainer>
      <Button />
      <Button />
    </ButtonContainer>
  </PageContainer>
  )
}

export default LetterCard