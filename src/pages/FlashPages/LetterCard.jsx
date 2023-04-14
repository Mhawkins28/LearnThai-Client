import React from 'react'
import Card from "../../components/Flashcards/Card.jsx"
import { 
  PageContainer,
  CardFront,
  CardBack,
  ButtonContainer,
  Button,

} from "../../components/Flashcards/FlashcardElements"

const LetterCard = () => {
  return (
  <PageContainer>
    <Card>
      <CardFront> Front </CardFront>
      <CardBack> Back </CardBack>
    </Card>
    <ButtonContainer>
      <Button />
      <Button />
    </ButtonContainer>
  </PageContainer>
  )
}

export default LetterCard