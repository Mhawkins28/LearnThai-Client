import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from "./NavElements"

function TopNav() {
  return (
    <Nav>
      <NavbarContainer >
        <MobileIcon >
          <FaBars />
        </MobileIcon>   
        <NavMenu>
          <NavItem>
            <NavLinks to="/dashboard">Home</NavLinks>
          </NavItem>
        </NavMenu>       
        <NavMenu>
          <NavItem>
          <NavLinks to="/flashcards">Flashcards</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/resources">Resources</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/welcome">Welcome</NavLinks>
          </NavItem>
        </NavMenu>     
      </NavbarContainer>
    </Nav>
  )
}

export default TopNav