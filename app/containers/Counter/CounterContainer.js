import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyChart from '../../components/MyCharts/MyChart';
import UploadCsv from '../../components/UploadCsv/UploadCsv';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import AmostraBO from '../../utils/BO/Amostra';
const csv = window.require('fast-csv');
const fs = window.require('fs');
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

type Props = {};

export default class CounterPage extends Component<Props> {
  props: Props;

  teste(file) {
    if (file && file[0]) {
      var stream = fs.createReadStream(file[0].path);
      let result = [];
      var csvStream = csv()
        .on('data', function(data) {
          data.forEach((element, index) => {
            if (!result[index]) {
              result[index] = [];
            }
            if (data[0] != '' && index >= 1) {
              result[index].push(parseFloat(element.replace(',', '.')));
            } else result[index].push(element);
          });
        })
        .on('end', function() {
          result.splice(0, 1);
          console.log(result[3]);
          result.forEach(element => {
            element.splice(2, 1);
            var d = new Date();
            element.push(d);
          });
          console.log(result[0]);
          AmostraBO.insert(result).then(
            () => {},
            err => {
              Alert.error("Amostras repitidas, log salvo em erro.txt", {
                position: 'top',
                effect: 'slide',
                timeout: 'none'
              });
            }
          );
        });

      stream.pipe(csvStream);
    } else {
      alert('Formato de arquivo invalido');
    }
  }

  render() {
    return (
      <div>
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <UploadCsv acceptedFunction={this.teste} />
        <Alert stack={true} />
      </div>
    );
  }
}
