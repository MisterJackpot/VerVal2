import React, { Component } from 'react';
import List from './List';
import styles from './ListCorrelation.css';
import AmostraBO from '../../utils/BO/AmostraBO';

export default class FilteredList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: ["OPA x UHUM", "MEUS x JESUS", "MEUS x JESUS",
                    "OPA x UHUM", "MEUS x JESUS", "MEUS x JESUS",
                    "OPA x UHUM", "MEUS x JESUS", "MEUS x JESUS",
                    "OPA x UHUM", "MEUS x JESUS", "MEUS x JESUS"],
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
          <div align='center'>
          <h1>{this.props.amostra}</h1>
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder="Pesquisar Amostra"
            onChange={this.filterList.bind(this)}
          />
          <div>
            <List items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}
