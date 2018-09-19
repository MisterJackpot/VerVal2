import React, { Component } from 'react';
import List from './List';
import styles from './ReactFilteredList.css';

export default class FilteredList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [
        'Apples',
        'Broccoli',
        'Chicken',
        'Bacon',
        'Eggs',
        'Salmon',
        'Granola',
        'Bananas',
        'Beer',
        'Wine',
        'Yogurt'
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
