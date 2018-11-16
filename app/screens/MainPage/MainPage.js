// @flow
import React, { Component } from 'react';
import CounterContainer from '../../containers/Counter/CounterContainer';
import Chart3D from '../../components/MyCharts/Chart3D';
import Chart2D from '../../components/MyCharts/Chart2D';
import DatePicker from "react-datepicker";
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
        renderCorrelation: false,
        amostraSelecionada: '',
        startDateInicio: moment(),
        startDateFinal: moment()

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

  selecionaDataInicio = (dateInicio) => {
    this.setState({
      startDateInicio: dateInicio
    });
    console.log("Data inicio "+dateInicio)
  }

  selecionaDataFinal = (dateFinal) => {
    this.setState({
      startDateFinal: dateFinal
    });
    console.log("Data final "+dateFinal);
  }

  filtrarAmostras = () => {
    this.setRenderCorrelaction();
    // let dateFinal =  new Date();
    // dateFinal.setYear(this.state.startDateFinal.year());
    // dateFinal.setMonth(this.state.startDateFinal.month());
    // dateFinal.setDate(this.state.startDateFinal.date());
    // let dateInitial = new Date();
    // dateInitial.setYear(this.state.startDateInicio.year());
    // dateInitial.setMonth(this.state.startDateInicio.month());
    // dateInitial.setDate(this.state.startDateInicio.date());
    // let resul = ( Filter.FilterDate(dateInitial, dateFinal).then(result => {console.log(result);}) );
    // console.log( resul);
  }
  render() {    
    return (
      <div className={styles.container}>
            <div className={styles.leftContainer}>            
              <DatePicker dateFormat="DD/MM/YYYY"  selected={this.state.startDateInicio}  onChange={this.selecionaDataInicio} />
              <DatePicker dateFormat="DD/MM/YYYY"  selected={this.state.startDateFinal}  onChange={this.selecionaDataFinal} />
              <button onClick={this.filtrarAmostras}>Filtrar</button>
              <MyChartContainer/>                 
            </div>
            <div className={styles.rightContainer}>{this.state.renderCorrelation ? 
            (
              <div>
                <button className={styles.button} onClick={this.setRenderCorrelaction}>
                    Voltar
                </button>
                <ListDataContainer dataInicio={this.state.startDateInicio} dataFinal = {this.state.startDateFinal}/>
              </div>
            ) : 
            (
              <ListContainer setAmostraSelecionada={this.setAmostraSelecionada} />
            )}
            </div>
      </div>
  )}
}
