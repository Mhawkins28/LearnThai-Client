import { PageContainer,
  HeaderWrap,
  Header,
  CatContainer,
  CatCard
  } from '../../components/CategoryElements'


const LetterCards = () => {
  return (
    <PageContainer>
      <HeaderWrap>
        <Header>Here We Go</Header>
      </HeaderWrap>
      <CatContainer>
        <CatCard to="/flashcards/letters/consonants">Consonants</CatCard> 
        <CatCard to="/flashcards/letters/vowels">Vowels</CatCard> 
        <CatCard to="/flashcards/letters/other">Other (?)</CatCard> 
      </CatContainer>
    </PageContainer>
  )
}

export default LetterCards