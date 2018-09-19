import React from 'react';
import Chart3D from '../../components/MyCharts/Chart3D'
import Chart2D from '../../components/MyCharts/Chart2D'
import {data3D} from '../../utils/DataTest';

type Props = {};

export default class MyChartContainer extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
          typeChart: true
        };
      }
    
      onClick = () => {
        this.setState({typeChart: !this.state.typeChart})
        console.log(this.state)
      };
    
    render(){
        const typeChart = this.state.typeChart;
        return (
        <div style={{width:'100%', height:'100%'}}>
        <div align='center'>
         <button onClick={this.onClick} style={{width:'100px', height:'25px'}}>
            Troca Gráfico
        </button>
        </div>
         {typeChart ? (
        <Chart2D list={data3D}/>
        ) : (
        <Chart3D list={data3D}  />
        )} 
        </div>
        )}
}