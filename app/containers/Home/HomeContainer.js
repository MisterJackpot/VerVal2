// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Home.css';
import ImageWrapperComponent from '../../components/ImageWrapperComponent/ImageWrapperComponent';
import LoginInputComponent from '../../components/LoginInputComponent/LoginInputComponent';
import UploadCsv from '../../components/UploadCsv/UploadCsv';
import NavigateButtonComponent from '../../components/NavigateButtonComponent/NavigateButtonComponent';
<<<<<<< HEAD
import Senha from '../../utils/DB/DAO/Senha';
=======
import InputComponent from '../../components/LoginInputComponent/InputComponent';
>>>>>>> 18a9df7e465b96e6d34c9cea630f94b9a39ebbe7

type Props = {}; 

export default class HomeContainer extends Component<Props> {

  constructor(props) {
    super(props);
    
    this.validarSenha = this.validarSenha.bind(this);
    this.state = {
      password: '',
    };
  }

  validarSenha = () => {
    let teste = 'aa';
    Senha.getSenha(function(result){
      console.log(this);
      if(this.state.password == result) console.log("true");
    });
  }

  onChange = event => {
    //const { name, value } = event.target;
    const target = event.target;
    const name = target.name;
    const value = target.value;
    //console.log(event);
    this.setState({ [name]: value });
  };

  render() {
    const { password } = this.state;
    return (
        <div className={styles.container} align="center" data-tid="container">
              <ImageWrapperComponent path={'./Assets/target.png'}/>
              <InputComponent/> 
              <NavigateButtonComponent text="Entrar" navigate={routes.COUNTER} />
        </div>
    );
  } 

  props: Props;
}
