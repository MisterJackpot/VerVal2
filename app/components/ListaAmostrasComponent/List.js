import React, { Component } from 'react';
import styles from './ReactFilteredList.css';

export default class List extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <ul className={styles.ul}>
          {this.props.items.map(item => (
            <li className={styles.li} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
