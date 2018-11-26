// @flow
import React, { Component } from 'react';
import CounterContainer from '../../containers/Counter/CounterContainer';
import Chart3D from '../../components/MyCharts/Chart3D';
// import Chart2D from '../../components/MyCharts/';
import DatePicker from "react-datepicker";
import Chart2Dp1p2 from '../../components/MyCharts/Chart2Dp1p2';
import MyChartContainer from '../../containers/MyEchartContainer/MyEchartContainer'
import ListContainer from '../../containers/ListaAmostras/ListaAmostrasContainer'
import ListDataContainer from '../../containers/ListDataContainer/ListDataContainer'
import styles from './MainPage.css'
import ListCorrelationContainer from '../../containers/ListCorrelationContainer/ListCorrelationContainer'
import moment from 'moment'
import Filter from "../../utils/BO/FilterBO"
type Props = {};
import "react-datepicker/dist/react-datepicker.css";

export default class MainPage extends Component<Props> {
  props: Props;

  constructor(props) {
      super(props);
      this.state = {
        render:false,
        renderByCorrelation: false,
        renderByData: false,
        amostraSelecionada: '',
        startDateInicio: moment(),
        startDateFinal: moment()

    }
  }

  setAmostraSelecionada = (amostra) => {
    this.setState( () => ({amostraSelecionada: amostra}) )
    this.filtrarCorrelacao();
  }

  setRender = () => {
      this.setState(prevState => ({
        render: !prevState.render}))
        if(this.state.renderByCorrelation)
        console.log("Estou usando a correlação!")
        else if(this.state.renderByData)
        console.log("Estou usando a data!");
  }

  selecionaDataInicio = (dateInicio) => {
    this.setState({
      startDateInicio: dateInicio
    });
  }

  selecionaDataFinal = (dateFinal) => {
    this.setState({
      startDateFinal: dateFinal
    });
  }
  unsetRender = () =>{
    this.setState({
      render: false
    });
    if(this.state.renderByCorrelation)
    this.setState(prevState => ({ renderByCorrelation: false}));
    else 
    this.setState(prevState => ({ renderByData: false}));
    
  }
  filtrarAmostras = async () => {
    this.setState(prevState => ({ renderByData: !prevState.renderByData}));
    this.setRender();
  }
  filtrarCorrelacao = async () => { 
    this.setState(prevState => ({ renderByCorrelation: !prevState.renderByCorrelation}));  
    this.setRender();
  }

  render() {
    let containerRender;
    if(this.state.render)
      if(this.state.renderByData)
       containerRender = <ListDataContainer dataInicio={this.state.startDateInicio} dataFinal = {this.state.startDateFinal}/>
      else
      containerRender = <ListCorrelationContainer amostra={this.state.amostraSelecionada} />
    return (
      <div className={styles.container}>
            <div className={styles.leftContainer}>            
              <MyChartContainer/>
              <div className={styles.datePickerDiv}>            
                <DatePicker className={styles.datePicker} dateFormat="DD/MM/YYYY"  selected={this.state.startDateInicio}  onChange={this.selecionaDataInicio} />
                <DatePicker className={styles.datePicker} dateFormat="DD/MM/YYYY"  selected={this.state.startDateFinal}  onChange={this.selecionaDataFinal} />
                <button className={styles.button} onClick={!this.state.renderByData ? this.filtrarAmostras:null}>Filtrar</button>
              </div>
            </div>
            <div className={styles.rightContainer}>
            {this.state.render ? (
              <div>
                <button className={styles.button} onClick={this.unsetRender}>
                    Voltar
                </button>
                {containerRender}
              </div>
            ) : (<ListContainer setAmostraSelecionada={this.setAmostraSelecionada}/>)}
            </div>

      </div>
  )}
}
