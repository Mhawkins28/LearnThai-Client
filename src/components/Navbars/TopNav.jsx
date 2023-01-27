import { FaBars, FaRedhat } from 'react-icons/fa'
import NavElements from "./NavElements"

function TopNav() {
  return (
    <Nav>TopNav
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