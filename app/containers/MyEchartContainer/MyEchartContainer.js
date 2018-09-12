import React from 'react';
import Chart3D from '../../components/MyCharts/Chart3D'
import Chart2D from '../../components/MyCharts/Chart2D'

type Props = {};

export default class MyChartContainer extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
          typeChart: false
        };
      }
    
      onClick = () => {
        this.setState({typeChart: !this.state.typeChart})
        console.log(this.state)
      };
    
    render(){
    const { typeChart } = this.state;
        if(typeChart) {
          return <Chart2D/>
        }
        else {
            return <Chart3D/>
        }       
        return (
            <div style={{width:'100%', height:'100%'}}>
            <button onClick={this.onClick}>
                eaea
            </button>
            </div>
        )}
}