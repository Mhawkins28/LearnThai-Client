import styled from "styled-components"
import { Link } from 'react-router-dom'


export const Nav = styled.nav`
  background-color: transparent;
  height: 70px;
  margin-top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 550px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 3;
  width: 100%;
  padding: 0 24px;
  max-width: 92%;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 550px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    color: #AD898D;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  

@media screen and (max-width: 550px) {
  display: none
}
`
export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(Link)`
  color: #919191;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  text-transform: uppercase;
  font-weight: bold;

&:hover {
  color: #AD898D;
  font-weight: 650px;
}
`