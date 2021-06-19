import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid className="customer">
          <Button color="link" className="button"><Link className="link" to="/customers"><h2>Manage Customer List</h2></Link></Button>
        </Container>
      </div>
    );
  }
}

export default Home;