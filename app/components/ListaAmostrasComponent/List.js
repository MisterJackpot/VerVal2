import React, { Component } from 'react';
import styles from './ReactFilteredList.css';

export default class List extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.list}>
        <ul className={styles.ul}>
          {this.props.items.map(item => (
            <li className={styles.li} key={item}>
              Amostra {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
