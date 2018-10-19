import Amostra from "../DB/DAO/AmostraDAO";

	const PCA = {
		getPCA : async () => {

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
			// val2:pca.predict(arrayOfArraysOfNumbers)
		// }
	}
	,
		getXYZ: async() => {
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
				aux[i] = aux[i].slice(0,3);
				
			//  dataset is a two-dimensional array where rows represent the samples and columns the features
			return  aux;
		}
	}
export default PCA;