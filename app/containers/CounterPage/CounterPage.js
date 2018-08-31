import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyChart from '../../components/MyCharts/MyChart';

type Props = {};

export default class CounterPage extends Component<Props> {
    props: Props;
  
    render() {
      return <MyChart />;
    }
  }
