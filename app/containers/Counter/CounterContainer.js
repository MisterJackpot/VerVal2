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

  state = { show: false }
  
  showModal = () => {
    this.setState({ show: true });
    console.log(this.state)
  }
  
  hideModal = () => {
    this.setState({ show: false });
    console.log(this.state)
  }

  insereAmostras(file) {
    
    if (file && file[0]) {
      AmostraBO.readCSV(file).then(
        result => {
          Alert.success(result + " amostras inseridas.", {
            position: 'top', 
            effect: 'stackslide', 
            timeout: 5000
          })
        },
        err => {
          Alert.error("Amostras repetidas, log salvo em " + err, {
            position: 'top',
            effect: 'stackslide',
            timeout: 10000
          });
        }
      );
    
} else {
  Alert.warning('Formato de arquivo invalido',{
    position: 'top',
    effect: 'stackslide',
    timeout: 5000
  });
}
}
  
  render() {
    return (
      <div>
        <button type='button' className={styles.showmodal} onClick={this.showModal}>+</button>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <UploadCsv acceptedFunction={this.insereAmostras}/>
        </Modal>
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  
  return (
      <div className={(show ? styles.displayblock : styles.displaynone)}>
      <section className={styles.modalmain}>
          {children}
        <button
          style={{
            borderRadius:'0.3rem',
            position:'absolute',
            left:'4.3rem',
            bottom:'-1.3rem'
          }}
          onClick={handleClose}
        >
          Fechar
        </button>
      </section>
    </div>
  );
};
