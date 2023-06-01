import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Outlet,useNavigate } from 'react-router-dom';
export default function Appbar() {
  const [showBasic, setShowBasic] = useState(false);
  const [car,setCar]=useState('');
  const nav=useNavigate();
  const handleClick=(e)=>
  {
    e.preventDefault();
    nav("/result",{state:{car:car}})

  }

  return (
    <>
    <MDBNavbar expand='lg' dark overflow-hidden bgColor='black' static>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>CarBros.</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/AllCars'>AllCars</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/Login'>Login</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='' aria-label='Search' onChange={(e) => setCar(e.target.value)} />
            <MDBBtn color='primary' onClick={handleClick}>Search a Car</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
      <Outlet />
      </>
  );
}