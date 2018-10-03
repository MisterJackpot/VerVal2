import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import 'echarts';
import ReactEcharts from 'echarts-for-react';
import kmeans  from '../../utils/kmeans';
import styles from './MyChart.css';



export default class Chart2D extends PureComponent<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: 'Amostra',
          type: 'scatter',
          data: this.props.list,
          encode: {
            x: 'x',
            y: 'y',
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
    var seriesU = this.state.series;
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
      trigger: 'item',
      enterable: true
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
