import React, { Component } from 'react';
import List from './List';
import styles from './ListCorrelation.css';
import EuclideanBO from '../../utils/BO/EuclideanBO';

export default class FilteredList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [[]],
      items: [[]]
    };

    EuclideanBO.getAllCorrelationByPercentual(this.props.amostra, 80).then(result =>{
      var amostras = [[]];
      var array = result;
      console.log(result)
      array.forEach(element => {
        amostras.push(element);
        this.state.initialItems.push(element);
      });
      this.state.initialItems.shift();
      this.state.initialItems.shift();
      this.setState({initialItems:amostras});
    });
  }

  componentWillMount() {
    this.setState({ items: this.state.initialItems });
  }

  render() {
    return (
      <div className={styles['mount-point']}>
        <div className={styles.body}>
          <div align='center'>
          <h1>{this.props.amostra}</h1>
          </div>
          <div>
            <List items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}
