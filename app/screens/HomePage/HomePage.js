// @flow
import React, { Component } from 'react';
import HomeContainer from '../../containers/Home/HomeContainer';
import ListaAmostrasContainer from '../../containers/ListaAmostras/ListaAmostrasContainer';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <ListaAmostrasContainer />;
  }
}
