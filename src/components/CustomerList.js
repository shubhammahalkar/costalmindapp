import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import FirebaseService from '../services/FirebaseService';

class CustomerList extends Component {

  constructor(props) {
    super(props);
    this.state = {MainUser: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount = () => {
    FirebaseService.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount = () => {
    FirebaseService.getAll().off("value", this.onDataChange);
  }

  onDataChange = (items) => {
    console.log(items);
    let MainUser = [];
    items.forEach(item => {
      let data = item.val();
      MainUser.push({
        key: item.key,
        Name: data.Name,
      Email: data.Email,
      Mobile: data.Mobile,
   
    ECOMP: data.ECOMP,
    ENOVDYA: data.ENOVDYA,
    ESALEY: data.ESALEY,
    ESCLOR: data.ESCLOR,
    MSCOMP: data.MSCOMP,
    MSNOVDYA: data.MSNOVDYA,
    MSSALEY: data.MSSALEY,
    MSSCLOR: data.MSSCLOR,
    abacus1: data.abacus1,
    abacus2: data.abacus2,
    abacus3: data.abacus3,
    abacus4: data.abacus4,
    abacus5: data.abacus5,
    abacus6: data.abacus6,
    abacus7: data.abacus7,
    abacus8: data.abacus8,
    abacus9: data.abacus9
      });
    });

    this.setState({
      MainUser: MainUser,
      isLoading: false
    });
  }

  async remove(key) {
    FirebaseService.delete(key)
    .then(() => {
      let updatedCustomers = [...this.state.MainUser].filter(i => i.key !== key);
      this.setState({MainUser: updatedCustomers});
    });
  }

  render() {
    const {MainUser, isLoading} = this.state;

    if (isLoading) {
      return <p className="loding">Loading...</p>;
    }

    const customerList = MainUser.map(customer => {
      return <tr key={customer.key}>
        <td style={{whiteSpace: 'nowrap'}}>{customer.Name}</td>
        <td>{customer.Email}</td>
        <td>{customer.Mobile}</td>          
        <td>{customer.ECOMP}</td>
        <td>{customer.ENOVDYA}</td>
        <td>{customer.ESALEY}</td>
        <td>{customer.ESCLOR}</td>
        <td>{customer.MSCOMP}</td>
        <td>{customer.MSNOVDYA}</td>
        <td>{customer.MSSALEY}</td>
        <td>{customer.MSSCLOR}</td>
        <td>{customer.abacus1}</td>
        <td>{customer.abacus2}</td>
        <td>{customer.abacus3}</td>
        <td>{customer.abacus4}</td>
        <td>{customer.abacus5}</td>
        <td>{customer.abacus6}</td>
        <td>{customer.abacus7}</td>
        <td>{customer.abacus8}</td>
        <td>{customer.abacus9}</td>
      
      <td>
          <ButtonGroup>
            <Button className="edit" size="sm" color="primary" tag={Link} to={"/customers/" + customer.key}>Edit</Button>
            <Button size="sm" className="delete" color="danger" onClick={() => this.remove(customer.key)}>Delete</Button>
          </ButtonGroup>
      </td>
    </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/customers/new">Add Customer</Button>
          </div>
          <h3>Customer List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>English comp</th>
                <th>English NOVDYA</th>
                <th>English SALEY</th>
                <th>English SCLOR</th>
                <th>M comp</th>
                <th>M NOVDYA</th>
                <th>M SALEY</th>
                <th>M SCLOR</th>
                <th>Abacus 1</th>
                <th>Abacus 2</th>
                <th>Abacus 3</th>
                <th>Abacus 4</th>
                <th>Abacus 5</th>
                <th>Abacus 6</th>
                <th>Abacus 7</th>
                <th>Abacus 8</th>
                <th>Abacus 9</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {customerList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default CustomerList;





