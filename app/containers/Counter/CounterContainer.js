import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyChart from '../../components/MyCharts/MyChart';
import UploadCsv from '../../components/UploadCsv/UploadCsv';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import AmostraBO from '../../utils/BO/AmostraBO';
import Alert from 'react-s-alert';

type Props = {};

export default class CounterPage extends Component<Props> {
  props: Props;

  insereAmostras(file) {
    
    if (file && file[0]) {
      AmostraBO.readCSV(file).then(
        result => {
          Alert.success(result + " amostras inseridas.", {
            position: 'top', 
            effect: 'stackslide', 
            timeout: 5000
          })
        },
        err => {
          Alert.error("Amostras repetidas, log salvo em " + err, {
            position: 'top',
            effect: 'stackslide',
            timeout: 10000
          });
        }
      );
    
} else {
  Alert.warning('Formato de arquivo invalido',{
    position: 'top',
    effect: 'stackslide',
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
        <UploadCsv acceptedFunction={this.insereAmostras} />
      </div>
    );
  }
}
