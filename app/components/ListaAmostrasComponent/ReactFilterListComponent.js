import React, { Component } from 'react';
import List from './List';
import styles from './ReactFilteredList.css';
import AmostraBO from '../../utils/BO/AmostraBO';

export default class FilteredList extends Component<Props> {
  constructor(props) {



    super(props);
    this.state = {
      initialItems: [
        'Amostra 1',
        'Amostra 2',
        'Amostra 3',
        'Amostra 4',
        'Amostra 5',
        'Amostra 6',
        'Amostra 7',
        'Amostra 8',
        'Amostra 9',
        'Amostra 10',
        'Amostra 11',
        'Amostra 11232',
        'Amostra 2123',
        'Amostra 3213',
        'Amostra 4123',
        'Amostra 5123',
        'Amostra 6213',
        'Amostra 723',
        'Amostra 8213',
        'Amostra 9213',
        'Amostra 11230',
        'Amostra 12321'
      ],
      items: []
    };
  }

  componentWillMount() {
    this.setState({ items: this.state.initialItems });
  }

  filterList(event) {
    let updatedList = this.state.initialItems;
    updatedList = updatedList.filter(
      item => item.toLowerCase().search(event.target.value.toLowerCase()) !== -1
    );
    this.setState({ items: updatedList });
  }

  render() {
    return (
      <div className={styles['mount-point']}>
        <div className={styles.body}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search"
            onChange={this.filterList.bind(this)}
          />
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
}
