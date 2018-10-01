import React, { Component } from 'react';
import FilteredList from '../../components/ListaAmostrasComponent/ReactFilterListComponent';
import CounterContainer from '../Counter/CounterContainer.js';

type Props = {};

export default class ListaAmostrasContainer extends Component<Props> {

  render() {
    return (
      <div>
        <div>
          <CounterContainer/>
        </div>
        <div>
          <FilteredList/>
        </div>
      </div>
    );
  }
}
