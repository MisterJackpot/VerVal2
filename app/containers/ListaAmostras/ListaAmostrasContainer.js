import React, { Component } from 'react';
import FilteredList from '../../components/ListaAmostrasComponent/ReactFilterListComponent';
import CounterContainer from '../Counter/CounterContainer.js';

type Props = {};

export default class ListaAmostrasContainer extends Component<Props> {

  render() {
    return (
      <div>
        <CounterContainer/>
        <FilteredList/>
      </div>
    );
  }
}
