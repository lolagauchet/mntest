import React, { Component } from 'react';
import { Container } from 'native-base';
import AppRoutes from './src/app/app.routes';

export default class App extends Component {

  render() {
    return (
      <Container>
        <AppRoutes />
      </Container>
    );
  }
}

