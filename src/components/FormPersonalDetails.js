import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class UserPersonalDetails extends Component {
  // continue is a method like render
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, onInputChange } = this.props;
    return (
      <MuiThemeProvider>
        {/* fake dom element */}
        <React.Fragment>
          <AppBar title="UserPersonalDetails" />
          <TextField
            hintText="Write your name here"
            floatingLabelText="First Name"
            onChange={onInputChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Write your last name here"
            floatingLabelText="Last Name"
            onChange={onInputChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <RaisedButton
            label="back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="next"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 20
  }
};
export default UserPersonalDetails;
