import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header(props) {
    const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
        <div style={{width : '100%' , height : '70px' , backgroundColor : '#000'}}>
            <Link to='/'>Home</Link>
            <Link to='/Product'>Product</Link>
            <Link to='/Login'>Login</Link>
        </div>

    </div>
  );

}

export default Header;