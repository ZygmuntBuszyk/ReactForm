import React, { Component } from 'react';
import UserDetails from './FormUserDetails';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    LastName: '',
    email: ''
  };

  nextStep = () => {
    // Destructaring
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  onInputChange = (input, e) => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step, firstName, lastName, email } = this.state;
    const values = { step, firstName, lastName, email };

    if (step === 1) {
      return;
      <FormUserDetails
        nextStep={this.nextStep}
        onInputChange={this.onInputChange}
        values={values}
      />;
    } else if (step === 2) {
      <h1> step 2</h1>;
    } else if (step === 3) {
      <h1> step 3</h1>;
    }

    return <div />;
  }
}

export default UserForm;
