import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    // const {values:  step, firstName, lastName, email} = this.props
    const { step, firstName, lastName, email } = this.props.values;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="email" secondaryText={email} />
          </List>
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

export default Confirm;
