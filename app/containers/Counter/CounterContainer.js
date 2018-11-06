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

const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const ipcRenderer = require('electron').ipcRenderer;
const {dialog} = require('electron').remote;

type Props = {};

export default class CounterPage extends Component<Props> {

  props: Props;

  state = { show: false }

  gerarPDF = () => {
    let path = dialog.showSaveDialog({filters: [{
      name: 'Adobe PDF',
      extensions: ['pdf']
    }]});
    if(path){
      ipcRenderer.send('print-pdf',path)
      Alert.success('PDF salvo em ' + path, {
        position: 'top',
        effect: 'stackslide',
        timeout: 4000
      })
    }else {
      Alert.error('Não foi possível salvar o PDF.' , {
        position: 'top',
        effect: 'stackslide',
        timeout: 4000
      })
    }
  
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
    console.log(this)
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
          } else {ipc.on
            Alert.error('Amostras repetidas, log salvo em ' + err, {
              position: 'top',
              effect: 'stackslide',
              timeout: 10000
            });
          }
        }
      );
    } else {
      Alert.warning('Formato de arquivo invalido', {
        position: 'top',
        effect: 'stackslide',
        timeout: 5000
      });
    }
  }

  render() {
    return (
      <div className={styles.botaoAmostras}>
        <button type='button' className={styles.showmodal + ' ' + styles.grande} onClick={this.showModal}>Adicionar Amostras</button>
        <button type='button' className={styles.showmodal + ' ' + styles.pequeno} onClick={this.showModal}>+</button>
        <button type='button' onClick={this.gerarPDF}>Gerar PDF</button>
        <div>
          <Modal show={this.state.show} handleClose={this.hideModal}>
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
