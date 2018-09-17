import React, { Component } from 'react';
import ListaAmostrasRender from '../../components/ListaAmostrasComponent/ListaAmostrasRender';

type Props = {};

export default class ListaAmostrasContainer extends Component<Props> {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <ListaAmostrasRender listItems = {["1","2","3"]}/>
    );
  }
}
