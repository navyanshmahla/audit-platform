import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import Logo from "../../assets/marsh.png";
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate()
  const handleLogout = async(e) => {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src={Logo}
              height='30'
              alt=''
              loading='lazy'
              align = 'left'
            />
          </MDBNavbarBrand>
          <MDBBtn onClick={handleLogout}>Logout</MDBBtn>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}


