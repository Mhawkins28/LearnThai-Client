import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;

`

export const Header = styled.h1`
  display: flex;
  text-transform: "uppercase";
`

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Btn = styled.button`

`
//--------------------------------------------- decide on how to orginize these elements

export const NotesContainer = styled.section`
  display: flex;
  flex-direction: column;
`
export const NotesTitle = styled.h1`
  font-size: 2rem;
  display: flex;
  align-items: center;
  color: #AD898D;
`
export const NotesContnet = styled.div`
  display: flex;
  justify-content: center;
`



/* NTS: 

Should I make a PageElements component for basic page layout/styling?
  pagecontainer
  headerwrap (do I need this?)
  header
  BtnWrap
  Btn 

And a seperate component for the category page layout/styling?
  CatContainer
  CatCard
  CatCardTitle
  ...etc


*/ 