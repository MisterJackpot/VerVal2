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

		var values = await this.getAllDatas();
		const PCA = require('ml-pca');
		// pca é instanciado carregando todas as instancias
		const pca = new PCA(values);
		//console.log("<PREDICT>");
		//console.log(pca.predict(values));
		//console.log("</PREDICT>");
		//console.log("<Variances>");
		//console.log(pca.getExplainedVariance(values).slice(0,3));
		//console.log("</Variances>");
		return { 
		    // predict: dimensoes (pc1,pc2,pc3) para cada instancia
			predict: pca.predict(values),
			// explained_variance: valores de cada dimensao (pc1,pc2,pc3)
			// A soma do explained_variance é igual a porcentagem total de quão "similar" o modelo atual é do dataset original
			// Quanto maior for a soma (maximo igual a 1) do explained_variance, mais garantido é a resiliência do modelo gerado
			explained_variance: pca.getExplainedVariance(values).slice(0,2)
		};
	}
	getAllDatas = async () => {

		let promise = Amostra.getAllComp();
		const amostras = await promise;
		return this.RDPtoArray(amostras);

	}
	RDPtoArray(arrayOfObjects){ // Pass a RowDataPacket{Standard AMOSTRADAO return datatype} and transform to a ARRAY YAY
		let arrayOfArraysOfNumbers = arrayOfObjects.map(a => {
			let result = []
			Object.keys(a).forEach(key => {
				result.push(a[key])
			})
			return result
		})
		return arrayOfArraysOfNumbers;
	}
    render() {
        return(
            <div>
                <button className={styles.button} onClick={this.handleClick} align="center"></button>
            </div>
        )
    }

}