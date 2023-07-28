import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.main`
display: flex;
flex-direction: column;
`

export const HeaderWrap = styled.header`
display: flex;
justify-content: center;
margin-top: 2em;
`

export const Header = styled.h1`
display: flex;
text-transform: "uppercase";
`

export const CatContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const CatCard = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  height: 5em;
  width: 5em;
  margin: 2em;
`
  



