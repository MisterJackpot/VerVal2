import React from 'react';
import Chart3D from '../../components/MyCharts/Chart3D';
import Chart2D from '../../components/MyCharts/Chart2D';
import NavigateButtonComponent from '../../components/NavigateButtonComponent/NavigateButtonComponent';
import { data3D } from '../../utils/DataTest';
import { Redirect } from 'react-router';

type Props = {};

export default class MyChartContainer extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      typeChart: true,
      csv: false
    };
  }

  onClick = () => {
    this.setState({ typeChart: !this.state.typeChart });
    console.log(this.state);
  };

  // onClick2 = () => {
  //   this.setState({ csv: !this.state.csv });
  //   console.log(this.state);
  // };

  render() {
    const typeChart = this.state.typeChart;
    // const csv = this.state.csv;
    // if(csv) {
    //   return <Redirect push={true} to='COUNTER'/>
    // }
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div align="center">
          <NavigateButtonComponent click={this.onClick} text="Trocar Gráfico" />
          {/* <NavigateButtonComponent click={this.onClick2} text="CSV"/> */}
        </div>
        {typeChart ? <Chart2D list={data3D} /> : <Chart3D list={data3D} />}
      </div>
    );
  }
}
