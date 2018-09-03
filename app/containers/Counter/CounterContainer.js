import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyChart from '../../components/MyCharts/MyChart';
import UploadCSV from '../../components/UploadCsv/UploadCsv';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';


type Props = {};

export default class CounterPage extends Component<Props> {
    props: Props;
  
    render() {
      return (
        <div>
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <UploadCSV acceptedFunction={(file)=>console.log(file)} />
        </div>
      )}
  }
