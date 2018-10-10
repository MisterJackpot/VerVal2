import React from 'react';
import Chart3D from '../../components/MyCharts/Chart3D';
import Chart2D from '../../components/MyCharts/Chart2D';
import NavigateButtonComponent from '../../components/NavigateButtonComponent/NavigateButtonComponent';
import ChangeGraphComponent from '../../components/ChangeGraphComponent/ChangeGraphComponent';
import { Redirect } from 'react-router';
import PCA from '../../utils/BO/PCABO.js';

type Props = {};

export default class MyChartContainer extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      is3D: false,
      horizontal: '',
      vertical: '',
      csv: false,
      items: []
    };

    PCA.getPCA().then(result => {
      var amostras = [];
      var array = result;
      array.forEach(element => {
        amostras.push(element);
      });
      this.setState({ items: amostras });
      this.setState({ is3D: !this.state.is3D });
    });
  }

  onChangeCheckbox = e => {
    if (e.value == '0') {
      this.setState({ is3D: true });
    } else if (e.value == '1') {
      this.setState({ is3D: false, horizontal: 'P1', vertical: 'P2' });
    } else if (e.value == '2') {
      this.setState({ is3D: false, horizontal: 'P2', vertical: 'P3' });
    } else if (e.value == '3') {
      this.setState({ is3D: false, horizontal: 'P1', vertical: 'P3' });
    }
  };

  teste() {
    if (this.state.is3D) {
    return (<Chart3D list={this.state.items} />);
    } else {
      return (
        <Chart2D
          list={this.state.items}
          horizontal='P2'
          vertical='P3'
        />
      );
    }
  }

  render() {
    const is3D = this.state.is3D;
    const horizontal = this.state.horizontal;
    const vertical = this.state.vertical;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div align="center" style={{ paddingTop: '2.8rem' }}>
          <ChangeGraphComponent change={this.onChangeCheckbox} />
        </div>
        {this.teste()}
      </div>
    );
  }
}
