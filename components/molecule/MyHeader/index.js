import React, { useState } from 'react';
import HeaderStc from './Header.stc'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';

import {BiCart} from 'react-icons/bi'

const MyHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeaderStc>
      <div className='w-100 text-center preheader'>
        <p>Maroc, Casanblanca</p>
      </div>
      <Container>
        <Navbar expand="md">
          <NavbarBrand href="/">JEBSTORE</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/"></NavLink>
              </NavItem>
            
            </Nav>
            <NavbarText>
              <a href="" className='cart'>
                <BiCart/>
              </a>
            </NavbarText>
          </Collapse>
        </Navbar>
      </Container>
    </HeaderStc>
  );
}

export default MyHeader;