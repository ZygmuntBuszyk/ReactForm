import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  // continue is a method like render
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, onInputChange } = this.props;
    return (
      <MuiThemeProvider>
        {/* fake dom element */}
        <React.Fragment>
          <AppBar title="UserDetails" />
          <TextField
            hintText="Write your email here"
            floatingLabelText="Your Email"
            onChange={onInputChange('email')}
            defaultValue={values.email}
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
export default FormUserDetails;
