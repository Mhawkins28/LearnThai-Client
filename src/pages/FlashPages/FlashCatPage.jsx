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
        <Header> 
          <h1>What Do You want to study?</h1>
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