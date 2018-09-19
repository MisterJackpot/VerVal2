// @flow
import React, { Component } from 'react';
import CounterContainer from '../../containers/Counter/CounterContainer';
import Chart3D from '../../components/MyCharts/Chart3D';
import Chart2D from '../../components/MyCharts/Chart2D';
import MyChartContainer from '../../containers/MyEchartContainer/MyEchartContainer'

type Props = {};

export default class MainPage extends Component<Props> {
  props: Props;

  render() {
    return <MyChartContainer/>;
  }
}
