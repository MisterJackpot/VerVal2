import React, { Component } from 'react';
import ListData from '../../components/ListaData/ListData';
import CounterContainer from '../Counter/CounterContainer.js';

type Props = {};

export default class ListaAmostrasContainer extends Component<Props> {

  render() {
    return (
      <div>
        <ListData dataInicio ={this.props.dataInicio} dataFinal = {this.props.dataFinal} ></ListData>
      </div>
    );
  }
}
