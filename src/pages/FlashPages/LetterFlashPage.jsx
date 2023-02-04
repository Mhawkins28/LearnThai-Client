import { useEffect, useState } from "react";
import { getAllAlphabet } from "../../utils/alphabets.js";


function FlashcardPage() {

  const [alphabet, setAlphabet] = useState([]);

  useEffect(() => {
    fetchAlphas();
  }, []);

  async function fetchAlphas() {
    const allAlphas = await getAllAlphabet();
    setAlphabet(allAlphas);
  }

  return (
    <div>FlashcardPage</div>
  )
}

export default FlashcardPage