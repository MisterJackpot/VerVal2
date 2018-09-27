import Amostra from "./DB/DAO/AmostraDAO";

	const PCA = {
		getValues : async () => {

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
		console.log(pca.getCumulativeVariance());
		return pca.predict(pca.getExplainedVariance()); 
			// val2:pca.predict(arrayOfArraysOfNumbers)
		// }
	}
	,
		getPCA: async() => {
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
			//  dataset is a two-dimensional array where rows represent the samples and columns the features
			return  new PCA(arrayOfArraysOfNumbers);
	},
		getAllDatas : async () => {
			let promise = Amostra.getAllComp();
			const amostras = await promise;
			return this.RDPtoArray(amostras);
	},
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
	}
export default PCA;