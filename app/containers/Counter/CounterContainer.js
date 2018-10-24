import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyChart from '../../components/MyCharts/Chart3D';
import UploadCsv from '../../components/UploadCsv/UploadCsv';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import AmostraBO from '../../utils/BO/AmostraBO';
import Alert from 'react-s-alert';
import styles from './Modal.css';

type Props = {};

export default class CounterPage extends Component<Props> {

  props: Props;

  state = { 
    show: false,
    loading: false
  }

  showModal = () => {
    this.setState({ show: true });
    console.log(this.state)
  }

  hideModal = () => {
    this.setState({ show: false });
    console.log(this.state)
  }

  insereAmostras = (file) => {
    this.setState({ loading: true });
    if(this.state.loading == true){
      let width = window.matchMedia("(max-width: 500px)");
      let height = window.matchMedia("(max-height: 500px)");
      if (width.matches || height.matches) { 
        document.getElementById("dropzoneText").innerText = "Carregando...";
      }
      else{
        document.getElementById("dropzoneText").style.color = "transparent";
        document.getElementById("loader").style.display = "block";
      }
    }
    if (file && file[0]) {
      AmostraBO.readCSV(file).then(
        result => {
          Alert.success(result + ' amostras inseridas.', {
            position: 'top',
            effect: 'stackslide',
            timeout: 5000
          });
          this.hideModal();
        },
        err => {
          if (err.type == 'INVALID CSV') {
            Alert.error("Dados no CSV em formato invalido", {
              position: 'top',
              effect: 'stackslide',
              timeout: 10000
            });
          } else {
            Alert.error('Amostras repetidas, log salvo em ' + err, {
              position: 'top',
              effect: 'stackslide',
              timeout: 10000
            });
          }
        }
      );
    } else {
      if(document.getElementById("dropzoneText").innerText = "Carregando..."){
        document.getElementById("dropzoneText").innerText = "Arraste um arquivo csv ou clique aqui.";
      }
      document.getElementById("loader").style.display = "none";
      document.getElementById("dropzoneText").style.color = "black";
      Alert.warning('Formato de arquivo invalido', {
        position: 'top',
        effect: 'stackslide',
        timeout: 5000
      });
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className={styles.botaoAmostras}>
        <button type='button' className={styles.showmodal + ' ' + styles.grande} onClick={this.showModal}>Adicionar Amostras</button>
        <button type='button' className={styles.showmodal + ' ' + styles.pequeno} onClick={this.showModal}>+</button>
        <div>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <div id="loader" className={styles.loader}></div>
            <UploadCsv acceptedFunction={this.insereAmostras}/>
          </Modal>
        </div>
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {

  return (
      <div className={(show ? styles.displayblock : styles.displaynone)}>
      <section className={styles.modalmain}>
          {children}
        <button className={styles.closeModalButton} onClick={handleClose}>
          Fechar
        </button>
      </section>
    </div>
  );
};
