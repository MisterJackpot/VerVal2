// @flow
import React, { Component } from 'react';
import CounterContainer from '../../containers/Counter/CounterContainer';
import Chart3D from '../../components/MyCharts/Chart3D';
import Chart2Dp1p2 from '../../components/MyCharts/Chart2Dp1p2';
import MyChartContainer from '../../containers/MyEchartContainer/MyEchartContainer'
import ListContainer from '../../containers/ListaAmostras/ListaAmostrasContainer'
import styles from './MainPage.css'
type Props = {};

export default class MainPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
            <div className={styles.leftContainer}>
                <MyChartContainer/>
            </div>
            <div className={styles.rightContainer}>
                <ListContainer/>
            </div>
      </div>

  )}
}
