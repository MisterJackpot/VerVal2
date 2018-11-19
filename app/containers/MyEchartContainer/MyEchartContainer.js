import React from 'react';
import Chart3D from '../../components/MyCharts/Chart3D';
import Chart2Dp1p2 from '../../components/MyCharts/Chart2Dp1p2';
import Chart2Dp1p3 from '../../components/MyCharts/Chart2Dp1p3';
import Chart2Dp2p3 from '../../components/MyCharts/Chart2Dp2p3';
import ChangeGraphComponent from '../../components/ChangeGraphComponent/ChangeGraphComponent';
import PCA from '../../utils/BO/PCABO.js';

type Props = {};

export default class MyChartContainer extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      typeChart: 0,
      horizontal: '',
      vertical: '',
      csv: false,
      items: []
    };

    PCA.getPCAData().then(result => {
      var amostras = [];
      var array = result;
      array.forEach(element => {
        amostras.push(element);
      });
      this.setState({ items: amostras });
      this.setState({ typeChart: 1 });
    });
  }

  componentWillMount(){
    this.forceUpdate()
  }

  onChangeCheckbox = e => {
    if (e.value === '0') {
      this.setState({ typeChart: 1 });
    }
    if (e.value === '1') {
      this.setState({ typeChart: 2});
    }
    if (e.value === '2') {
      this.setState({ typeChart: 3});
    }
    if (e.value === '3') {
      this.setState({ typeChart: 4});
    }
  };

  myChart() {
    if (this.state.typeChart === 1) {
    return (<Chart3D amostra={this.props.amostra} list={this.state.items} />);
    }
    if (this.state.typeChart === 2) {
      return (
        <Chart2Dp1p2
          amostra={this.props.amostra}
          list={this.state.items}
           horizontal='P1'
          vertical='P2'
        />
      );
    }
    if (this.state.typeChart === 3) {
      return (
        <Chart2Dp2p3
          amostra={this.props.amostra}
          list={this.state.items}
          horizontal='P2'
          vertical='P3'
        />
      );
    }
     if (this.state.typeChart === 4) {
      return (
        <Chart2Dp1p3
          amostra={this.props.amostra}    
          list={this.state.items}
          horizontal='P1'
          vertical='P3'
        />
      );
    }
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div align="center" style={{ paddingTop: '2.8rem' }}>
          <ChangeGraphComponent change={this.onChangeCheckbox} />
        </div>
        {this.myChart()}
      </div>
    );
  }
} 
