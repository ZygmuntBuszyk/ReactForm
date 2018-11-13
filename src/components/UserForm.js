import React, { Component } from 'react';
import UserDetails from './FormUserDetails';
import { UserPersonalDetails } from './FormPersonalDetails';
import { Confirm } from './Confirm';
import { Succes } from './Succes';
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: ''
  };

  nextStep = () => {
    // Destructaring
    console.log('netx step initiated');
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
  //  nie moze byc (input, e ) => z jakiegos powodu
  onInputChange = input => e => {
    // console.log(input, e);
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step, firstName, lastName, email } = this.state;
    const values = { step, firstName, lastName, email };

    if (step === 1) {
      return (
        <UserDetails
          nextStep={this.nextStep}
          onInputChange={this.onInputChange}
          values={values}
        />
      );
    } else if (step === 2) {
      return (
        <UserPersonalDetails
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          onInputChange={this.onInputChange}
          values={values}
        />
      );
    } else if (step === 3) {
      return (
        <Confirm
          previousStep={this.previousStep}
          nextStep={this.nextStep}
          values={values}
        />
      );
    } else if (step === 4) {
      return <Succes />;
    }
  }
}

export default UserForm;
