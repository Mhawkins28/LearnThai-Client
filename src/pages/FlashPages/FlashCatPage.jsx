import { Link } from 'react-router-dom'
import { PageContainer,
        HeaderWrap,
        Header,
        CatContainer,
        CatCard
        } from '../../components/CategoryElements'

const FlashCatPage = () => {
  return (
    <PageContainer>
      <HeaderWrap>
        <Header>What Do You want to study?
        </Header>
      </HeaderWrap>
      <CatContainer>
        <CatCard to="/flashcards/letters">letters</CatCard> 
        <CatCard to="/flashcards/numbers">numbers</CatCard> 
        <CatCard to="/flashcards/phrases">phrases</CatCard> 
      </CatContainer>
    </PageContainer>
  )
}

export default FlashCatPage