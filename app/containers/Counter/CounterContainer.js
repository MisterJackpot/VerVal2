import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyChart from '../../components/MyCharts/MyChart';
import UploadCsv from '../../components/UploadCsv/UploadCsv';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import Amostra from '../../utils/DB/DAO/Amostra';
const csv = window.require('fast-csv');
const fs = window.require('fs');

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
          Amostra.insert(result).then(
            () => {},
            err => {
              alert(err.type + ' ' + err.data);
            }
          );
        });

      stream.pipe(csvStream);
    }else{
      alert("Formato de arquivo invalido");
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
