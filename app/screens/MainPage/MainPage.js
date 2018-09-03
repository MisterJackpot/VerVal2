// @flow
import React, { Component } from 'react';
import CounterContainer from '../../containers/Counter/CounterContainer';

type Props = {};

export default class MainPage extends Component<Props> {
  props: Props;

  render() {
    return <CounterContainer />;
  }
}
