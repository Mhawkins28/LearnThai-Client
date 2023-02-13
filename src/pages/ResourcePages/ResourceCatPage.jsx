import { 
  PageContainer,
  HeaderWrap,
  Header,
  CatContainer,
  CatCard
} from '../../components/CategoryElements'


function ResourceCatPage() {
  return (
    <PageContainer>
      <HeaderWrap>
        <Header>What Do You want to study?
        </Header>
      </HeaderWrap>
      <CatContainer>
        <CatCard to="/resources/videos">Videos</CatCard> 
        <CatCard to="/resources/materials">Materials</CatCard> 
        <CatCard to="/fresources/notes">Notes??</CatCard> 
      </CatContainer>
    </PageContainer>
  )
}

export default ResourceCatPage