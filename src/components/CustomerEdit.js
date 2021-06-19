import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import FirebaseService from '../services/FirebaseService';

class CustomerEdit extends Component {

  emptyCustomer = {
    key: '',
    Name: '',
    Email: '',
    Mobile: '',
    // RgistrationDate: "",
    ECOMP: '',
    ENOVDYA: '',
    ESALEY: '',
    ESCLOR: '',
    MSCOMP: '',
    MSNOVDYA: '',
    MSSALEY: '',
    MSSCLOR: '',
    abacus1: '',
    abacus2: '',
    abacus3: '',
    abacus4: '',
    abacus5: '',
    abacus6: '',
    abacus7: '',
    abacus8: '',
    abacus9: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyCustomer
    };
  }

  componentDidMount = () => {
    let key = this.props.match.params.key
    if (key !== 'new') {
      FirebaseService.get(key).on("value", this.onDataChange);
    }
  }

  componentWillUnmount = () => {
    FirebaseService.getAll().off("value", this.onDataChange);
  }

  onDataChange = (item) => {
    let data = item.val();
    let customer = {
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
    };

    this.setState({
      item: customer,
    });
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {item} = this.state;
    let key = this.props.match.params.key
    if (key !== 'new') {
      FirebaseService.update(key, item);
    } else {
      FirebaseService.addCustomer(item);
    }

    this.props.history.push('/MainUser');
  };

  render = () => {
    const {item} = this.state;
    const title = <h2>{item.key ? 'Edit Customer' : 'Add Customer'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="text" name="Name" id="Name" value={item.Name || ''}
                   onChange={this.handleChange} autoComplete="firstname"/>
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="Email" id="Email" value={item.Email || ''}
                   onChange={this.handleChange} autoComplete="Email"/>
          </FormGroup>          
          <FormGroup>
            <Label for="Mobile">Mobile</Label>
            <Input type="text" name="Mobile" id="Mobile" value={item.Mobile || ''}
                   onChange={this.handleChange} autoComplete="Mobile"/>
          </FormGroup>
        
          <FormGroup>
            <Label for="ECOMP">ECOMP</Label>
            <Input type="text" name="ECOMP" id="ECOMP" value={item.ECOMP || ''}
                   onChange={this.handleChange} autoComplete="ECOMP"/>
          </FormGroup>
          <FormGroup>
            <Label for="ENOVDYA">ENOVDYA</Label>
            <Input type="text" name="ENOVDYA" id="ENOVDYA" value={item.ENOVDYA || ''}
                   onChange={this.handleChange} autoComplete="ENOVDYA"/>
          </FormGroup>          
          <FormGroup>
            <Label for="ESALEY">ESALEY</Label>
            <Input type="text" name="ESALEY" id="ESALEY" value={item.ESALEY || ''}
                   onChange={this.handleChange} autoComplete="ESALEY"/>
          </FormGroup>
          <FormGroup>
            <Label for="ESCLOR">ESCLOR</Label>
            <Input type="text" name="ESCLOR" id="ESCLOR" value={item.ESCLOR || ''}
                   onChange={this.handleChange} autoComplete="ESCLOR"/>
          </FormGroup>
          <FormGroup>
            <Label for="MSCOMP">MSCOMP</Label>
            <Input type="text" name="MSCOMP" id="MSCOMP" value={item.MSCOMP || ''}
                   onChange={this.handleChange} autoComplete="MSCOMP"/>
          </FormGroup>
          <FormGroup>
            <Label for="MSNOVDYA">MSNOVDYA</Label>
            <Input type="text" name="MSNOVDYA" id="MSNOVDYA" value={item.MSNOVDYA || ''}
                   onChange={this.handleChange} autoComplete="MSNOVDYA"/>
          </FormGroup>
          <FormGroup>
            <Label for="MSSALEY">MSSALEY</Label>
            <Input type="text" name="MSSALEY" id="MSSALEY" value={item.MSSALEY || ''}
                   onChange={this.handleChange} autoComplete="MSSALEY"/>
          </FormGroup>
          <FormGroup>
            <Label for="MSSCLOR">MSSCLOR</Label>
            <Input type="text" name="MSSCLOR" id="MSSCLOR" value={item.MSSCLOR || ''}
                   onChange={this.handleChange} autoComplete="MSSCLOR"/>
          </FormGroup>
          <FormGroup>
            <Label for="abacus1">abacus1</Label>
            <Input type="text" name="abacus1" id="abacus1" value={item.abacus1 || ''}
                   onChange={this.handleChange} autoComplete="abacus1"/>
          </FormGroup>
          <FormGroup>
            <Label for="abacus2">abacus2</Label>
            <Input type="text" name="abacus2" id="abacus2" value={item.abacus2 || ''}
                   onChange={this.handleChange} autoComplete="abacus2"/>
          </FormGroup>
          <FormGroup>
            <Label for="abacus3">abacus3</Label>
            <Input type="text" name="abacus3" id="abacus3" value={item.abacus3 || ''}
                   onChange={this.handleChange} autoComplete="abacus3"/>
          </FormGroup>
          <FormGroup>
            <Label for="abacus4">abacus4</Label>
            <Input type="text" name="abacus4" id="abacus4" value={item.abacus4 || ''}
                   onChange={this.handleChange} autoComplete="abacus4"/>
          </FormGroup>
          <FormGroup>
            <Label for="abacus5">abacus5</Label>
            <Input type="text" name="abacus5" id="abacus5" value={item.abacus5 || ''}
                   onChange={this.handleChange} autoComplete="abacus5"/>
          </FormGroup>
          <FormGroup>
            <Label for="abacus6">abacus6</Label>
            <Input type="text" name="abacus6" id="abacus6" value={item.abacus6 || ''}
                   onChange={this.handleChange} autoComplete="abacus6"/>
          </FormGroup>
          <FormGroup>
            <Label for="abacus7">abacus7</Label>
            <Input type="text" name="abacus7" id="abacus7" value={item.abacus7 || ''}
                   onChange={this.handleChange} autoComplete="abacus7"/>
          </FormGroup>
          <FormGroup>
            <Label for="abacus8">abacus8</Label>
            <Input type="text" name="abacus8" id="abacus8" value={item.abacus8 || ''}
                   onChange={this.handleChange} autoComplete="abacus8"/>
          </FormGroup>
          <FormGroup>
            <Label for="abacus9">abacus9</Label>
            <Input type="text" name="abacus9" id="abacus9" value={item.abacus9 || ''}
                   onChange={this.handleChange} autoComplete="abacus9"/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit"  >Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/customers">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(CustomerEdit);


