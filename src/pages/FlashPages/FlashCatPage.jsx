import React from 'react'
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
        </Header>
      </HeaderWrap>
      <CatContainer>
        <CatCard></CatCard> {/* nts: styled as a Link */}
      </CatContainer>
    </PageContainer>
  )
}

export default FlashCatPage