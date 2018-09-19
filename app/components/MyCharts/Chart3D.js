import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import 'echarts';
import ReactEcharts from 'echarts-for-react';
import kmeans  from '../../utils/kmeans';
import styles from './MyChart.css';
import {data} from '../../utils/Data';
import {data3D} from '../../utils/DataTest';



export default class Chart3D extends PureComponent<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      symbolSize: 5
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
            type: 'scatter3D',
            symbolSize: this.state.symbolSize,
            encode: {
                x: 'x',
                y: 'y',
                z: 'z',
            }
        }
    ]
  })
  render() {
    return (
      <div className={styles.opa}>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.parent}>
          <ReactEcharts option={this.getOption()} style={{ height: '100%' }} />
        </div>
      </div>
    );
  }
}
