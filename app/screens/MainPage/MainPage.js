// @flow
import React, { Component } from 'react';
import CounterContainer from '../../containers/Counter/CounterContainer';
import Chart3D from '../../components/MyCharts/Chart3D';
import Chart2D from '../../components/MyCharts/Chart2D';
import MyChartContainer from '../../containers/MyEchartContainer/MyEchartContainer'
import ListContainer from '../../containers/ListaAmostras/ListaAmostrasContainer'
import styles from './MainPage.css'
import ListCorrelationContainer from '../../containers/ListCorrelationContainer/ListCorrelationContainer'
type Props = {};

export default class MainPage extends Component<Props> {
  props: Props;

  constructor(props) {
      super(props);
      this.state = {
        renderCorrelation: false
    }
  }

  setRenderCorrelaction = () => {
      this.setState(prevState => ({
          renderCorrelation: !prevState.renderCorrelation}))
  }

  render() {    
    return (
      <div className={styles.container}>
            <div className={styles.leftContainer}>
                <MyChartContainer/>
            </div>
            <div className={styles.rightContainer}>{this.state.renderCorrelation ? (
                <ListCorrelationContainer/>
            ) : (<ListContainer/>)}

            </div>
      </div>
  )}
}
