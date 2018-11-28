import React, { Component } from 'react';
import List from './List';
import styles from './ListCorrelation.css';
import FilterBO from '../../utils/BO/FilterBO';

export default class FilteredDataList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [[]],
      items: [[]],
      dateInitial : null,
      dateFinal : null
    };

    FilterBO.FilterDate(this.props.dataInicio, this.props.dataFinal).then(result =>{
        var amostras = [[]];
        var array = result;
        array.forEach(element => {
          amostras.push(element);
          this.state.initialItems.push(element);
        });
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
          </div>
          <div>
            <List items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}
