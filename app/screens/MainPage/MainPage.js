// @flow
import React, { Component } from 'react';
import CounterContainer from '../../containers/Counter/CounterContainer';
import Chart3D from '../../components/MyCharts/Chart3D';
import Chart2Dp1p2 from '../../components/MyCharts/Chart2Dp1p2';
import MyChartContainer from '../../containers/MyEchartContainer/MyEchartContainer'
import ListContainer from '../../containers/ListaAmostras/ListaAmostrasContainer'
import styles from './MainPage.css'
import ListCorrelationContainer from '../../containers/ListCorrelationContainer/ListCorrelationContainer'
import PDFButtonComponent from '../../components/PDFButtonComponent/PDFButtonComponent';

type Props = {};

export default class MainPage extends Component<Props> {
  props: Props;

  constructor(props) {
      super(props);
      this.state = {
        renderCorrelation: false,
        amostraSelecionada: ''
    }
  }

  setAmostraSelecionada = (amostra) => {
    this.setState( () => ({amostraSelecionada: amostra}) )
    this.setRenderCorrelaction()
  }

  setRenderCorrelaction = () => {
      this.setState(prevState => ({
          renderCorrelation: !prevState.renderCorrelation}))
  }

  render() {    
    return (
      <div className={styles.container}>
            <div className={styles.leftContainer}>
                <MyChartContainer/>
            </div>
            <div className={styles.rightContainer}>{this.state.renderCorrelation ? (
              <div>
                <ListCorrelationContainer amostra={this.state.amostraSelecionada}/>
                <button className={styles.button} onClick={this.setRenderCorrelaction}>
                    Voltar
                </button>
                <PDFButtonComponent></PDFButtonComponent>
              </div>
            ) : (<ListContainer setAmostraSelecionada={this.setAmostraSelecionada} />)}
            </div>
      </div>
  )}
}
