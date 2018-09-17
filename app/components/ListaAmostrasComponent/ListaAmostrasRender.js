import React, { Component } from 'react';

type Props = {};

export default class ListaAmostrasRender extends Component<Props>{

  render() {
    return (
      <div>
        {this.props.listItems}
      </div>
    );
  }
}
