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
    xAxis3D: {
      type: 'value'
    },
    yAxis3D: {
      type: 'value'
    },
    zAxis3D: {
      type: 'value'
    },
    dataset: {
        dimensions: [
            'x',
            'y',
            'z',
        ],
        source: this.props.list
    },

    series: [
      {
        name: '3D',
        type: 'scatter3D',
        symbolSize: this.state.symbolSize,
        encode: {
                x: 'x',
                y: 'y',
                z: 'z',
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
          <ReactEcharts option={this.getOption()} style={{ height: '100%' }} />
        </div>
      </div>
    );
  }
}
