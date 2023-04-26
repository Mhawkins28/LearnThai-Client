import {useState, useEffect} from 'react'
import {getAllAlpha} from "../../utils/alphabets.js"

const Card = () => {

const [CardData, setCardData] = useState('')

const GetLetters = async () => {
  const allLetters = await getAllAlpha()
}

useEffect(() => {
  GetLetters()

}, [])

  return (
    <div>Card</div>
  )
}

export default Card

//do I need to orginize these as LetterCard etc