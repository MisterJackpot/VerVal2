import React, { Component } from 'react';
import FilteredList from '../../components/ListaAmostrasComponent/ReactFilterListComponent';

type Props = {};

export default class ListaAmostrasContainer extends Component<Props> {

  render() {
    return (
      <FilteredList/>
    );
  }
}
