import React from "react";
import styles from "./PCAButton.css";
import Amostra from "../../utils/DB/DAO/AmostraDAO";
import Senha from "../../utils/DB/DAO/SenhaDAO";
type Props = {};
	
export default class PCAButton extends React.Component{
    props: Props;
	constructor(props){
		super(props);
		this.handleClick = this.test.bind(this);
	}
    test = async () => {
		
		let promise = Amostra.getAll();
		const amostras = await promise
		//console.log(senha[0]);
	//	console.log(amostras[0][2]);
	

	Object.keys(amostras[0]).forEach(propriedade => {
		arrayComNumeros.push(amostras[0][propriedade])
	})
	listaDelistas = []
	for(var i = 0 ; i < amostras.length; i++){
		let arrayComNumeros = []
		Object.keys(amostras[i]).forEach(propriedade => {
			arrayComNumeros.push(amostras[i][propriedade])
		})
		listaDelistas.push(arrayComNumeros)
	}	//Ele consegue capturar todos os atributos de todas as amostras disponíveis 
	const PCA = require('ml-pca');
	//const data = JSON.parse(JSON.stringify(amostras));
	
		// // dataset is a two-dimensional array where rows represent the samples and columns the features
		const pca = new PCA(listaDelistas);
//		console.log(dataset);
		//console.log(pca.getExplainedVariance());
	}
	
    render() {
        return(
            <div>
                <button className={styles.button} onClick={this.handleClick} align="center"></button>
            </div>
        )
    }

}