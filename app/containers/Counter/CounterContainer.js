import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyChart from '../../components/MyCharts/MyChart';
import UploadCsv from '../../components/UploadCsv/UploadCsv';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import AmostraBO from '../../utils/BO/Amostra';
import Alert from 'react-s-alert';

type Props = {};

export default class CounterPage extends Component<Props> {
  props: Props;

  teste(file) {
    if (file && file[0]) {
          AmostraBO.readCSV(file).then(
            () => {},
            err => {
              Alert.error("Amostras repetidas, log salvo em " + err, {
                position: 'top',
                effect: 'slide',
                timeout: 10000
              });
            }
          );
        
    } else {
      Alert.warning('Formato de arquivo invalido',{
        position: 'top',
        effect: 'slide',
        timeout: 5000
      });
    }
  }

  render() {
    return (
      <div>
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <UploadCsv acceptedFunction={this.teste} />
      </div>
    );
  }
}
