import { useState } from 'react'
import { useParams } from "react-router-dom"

import { PageContainer,
  HeaderWrap,
  Header,
  CatContainer,
  CatCard
  } from '../../components/CategoryElements'

  let params = useParams
  
  const PhrasesPage = () => {


  const [phraseData, setPhraseData] = useState({
  });
  
return (
<PageContainer>
<HeaderWrap>
  <Header> What Do You want to study?</Header>
</HeaderWrap>
<CatContainer>
  <CatCard to="/flashcards/phrases/${categoty}">{params.category}</CatCard> 
  <CatCard to="/flashcards/phrases/common-questions">common-questions</CatCard> 
  <CatCard to="/flashcards/phrases/">phrases</CatCard> 
</CatContainer>
</PageContainer>
)
}

export default PhrasesPage