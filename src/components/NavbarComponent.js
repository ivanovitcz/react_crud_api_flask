import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Container
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  return {
    title: state.titleNavbar.title,
  }
}

const NavbarComponent = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/"><FontAwesomeIcon icon={faCoffee} /> { props.title }</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default connect(mapStateToProps, null)(NavbarComponent);
