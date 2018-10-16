import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import 'echarts';
import ReactEcharts from 'echarts-for-react';
import kmeans  from '../../utils/kmeans';
import styles from './MyChart.css';



export default class Chart3D extends PureComponent<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      symbolSize: 7
    }
  }

  componentDidMount() {
    this.update();
  }

  update() {
  }


  getOption = () => ({
    grid3D: {},
    xAxis3D: [{
      type: 'value', gridIndex: 0, name: 'P1'
    }],
    yAxis3D: {
      type: 'value', gridIndex: 0, name: 'P2'
    },
    zAxis3D: {
      type: 'value', gridIndex: 0, name: 'P3'
    },
    tooltip: {
      trigger: 'item',
      enterable: true
    },
    dataset: {
        source: this.props.list
    },
    series: [
      {
        name: '3D',
        type: 'scatter3D',
        symbolSize: this.state.symbolSize,
        dimensions: [
          'P1',
          'P2',
          'P3',
        ],
        encode: {
                x: 'P1',
                y: 'P2',
                z: 'P3',
        },
      }
    ]
  })
  render() {
    return (
      <div className={styles.opa3D}>
        <div className={styles.backButton} data-tid="backButton">
        </div>
        <div className={styles.parent}>
          <ReactEcharts option={this.getOption()} lazyUpdate={true}
                         style={{ height: '100%' }} />
        </div>
      </div>
    );
  }
}
