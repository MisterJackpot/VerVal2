import React, { Component } from 'react';
import List from './List';
import styles from './ReactFilteredList.css';
import AmostraBO from '../../utils/BO/AmostraBO';

export default class FilteredList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      items: []
    };

    AmostraBO.getAmostras().then(result =>{
      var amostras = [];
      var array = result;
      array.forEach(element => {
        amostras.push(element.id);
        this.state.initialItems.push(element.id);
      });
      this.setState({initialItems:amostras});
    });
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
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder="Pesquisar Amostra"
            onChange={this.filterList.bind(this)}
          />
          <div>
            <List items={this.state.items} setAmostraSelecionada={this.props.setAmostraSelecionada} />
          </div>
        </div>
      </div>
    );
  }
}
