import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Succes extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Succes" />
          <h1>Succes</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Succes;
