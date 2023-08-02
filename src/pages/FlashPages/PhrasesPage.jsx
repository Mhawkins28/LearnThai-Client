import { useParams } from "react-router-dom"

import { PageContainer,
  HeaderWrap,
  Header,
  CatContainer,
  CatCard
  } from '../../components/CategoryElements'

const [phraseData, setPhraseData] = useState({});
let params = useParams

const PhrasesPage = () => {
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