import React from 'react';
import Chart3D from '../../components/MyCharts/Chart3D';
import Chart2D from '../../components/MyCharts/Chart2D';
import NavigateButtonComponent from '../../components/NavigateButtonComponent/NavigateButtonComponent';
import ChangeGraphComponent from '../../components/ChangeGraphComponent/ChangeGraphComponent';
import { Redirect } from 'react-router';
import PCA from '../../utils/BO/PCABO.js'

type Props = {};

export default class MyChartContainer extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      typeChart: true,
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
      this.setState({ typeChart: !this.state.typeChart });

    });
  }

  onClick = () => {
    this.setState({ typeChart: !this.state.typeChart });
  };

  onChangeCheckbox = (e) => {
    console.log(e.value);
    if(e.value == '0'){
      this.setState({typeChart: false});
    }
    else{
      this.setState({typeChart: true});
    }
  }


  render() {
    const typeChart = this.state.typeChart;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div align="center" style={{paddingTop:'2.8rem'}}>
          <ChangeGraphComponent change={this.onChangeCheckbox}></ChangeGraphComponent>
        </div>
        {typeChart ? <Chart2D list={this.state.items} horizontal="P1" vertical="P2"/> : <Chart3D list={this.state.items} />}
      </div>
    );
  }
}
