import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import 'echarts';
import ReactEcharts from 'echarts-for-react';
import kmeans  from '../../utils/kmeans';
import styles from './MyChart.css';
import {data} from '../../utils/Data';
import {dataTest} from '../../utils/DataTest';



export default class Chart2D extends PureComponent<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: 'Amostra',
          type: 'scatter',
          data: dataTest,
          encode: {
            x: 'x',
            y: 'z',
          },
        }
      ],
      symbolSize: 2.5
    };
  }

  componentDidMount() {
    this.update();
  }

  update() {
    var seriesU = dataTest;
    this.setState({
      series: seriesU
    });
  }

  getOption = () => ({
    xAxis: {
        type: 'value'
    },
    grid: {},
    yAxis: {
        type: 'value'
    },
    axisType: 'category',
    tooltip: {
      trigger: 'item'
     },
    dataset: {
        dimensions: [
            'x',
            'y',
            'z'
        ],
        source: this.props.list
      },
    series: this.state.series
  })

  render() {
    return (
      <div className={styles.opa2D}>
        <div className={styles.backButton} data-tid="backButton">
        </div>
        <div className={styles.parent}>
          <ReactEcharts option={this.getOption()} style={{ height: '100%' }}/>
        </div>
      </div>
    );
  }
}
