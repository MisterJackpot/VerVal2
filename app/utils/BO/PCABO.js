import Amostra from "../DB/DAO/AmostraDAO";

	const PCA = {
		getPCAVariance : async () => {

		let promise = Amostra.getAllComp();
		const amostras = await promise;
		const PCA = require('ml-pca');
		let arrayOfArraysOfNumbers = amostras.map(a => {
			let result = []
			Object.keys(a).forEach(key => {
				result.push(a[key])
			})
			return result
		})
			const pca = new PCA(arrayOfArraysOfNumbers);
			return pca.getExplainedVariance().slice(0,3); 
		},
		getPCAData: async() => {
			let promise = Amostra.getAllComp();
			const amostras = await promise;
			const PCA = require('ml-pca');
			let arrayOfArraysOfNumbers = amostras.map(a => {
				let result = []
				Object.keys(a).forEach(key => {
					result.push(a[key])
				})
				return result
			})
			let aux = new PCA(arrayOfArraysOfNumbers).predict(arrayOfArraysOfNumbers);
			for(let i = 0; i < aux.length;i++)
				aux[i] = aux[i]
			return  aux;
	},
		getAllDatas : async () => {
			let promise = Amostra.getAllComp();
			const amostras = await promise;
			return this.RDPtoArray(amostras);
	},
	 	RDPtoArray(arrayOfObjects){ 
			let arrayOfArraysOfNumbers = arrayOfObjects.map(a => {
				let result = []
				Object.keys(a).forEach(key => {
					result.push(a[key])
				})
				return result
			})
			return arrayOfArraysOfNumbers;
		}
}
export default PCA;