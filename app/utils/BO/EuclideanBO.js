import Amostras from "../DB/DAO/AmostraDAO";

	const Euclidean = {
        getDistance: (point1,point2) => {
            const { euclidean, squaredEuclidean } = require('ml-distance-euclidean');
            return euclidean(point1,point2);
        },
         getDistanceUsingID: async(id1,id2) =>{
            let amostra1 = (await Amostras.getBytId(id1));
			let amostra2 = (await Amostras.getBytId(id2));
			let amostra1Arr = amostra1.map(a => {
				let result = []
				Object.keys(a).forEach(key => {
					result.push(a[key])
				})
				return result
			})

			let amostra2Arr = amostra2.map(a => {
				let result = []
				Object.keys(a).forEach(key => {
					result.push(a[key])
				})
				return result
			})
            const { euclidean, squaredEuclidean } = require('ml-distance-euclidean');
            console.log(euclidean(amostra1Arr[0],amostra2Arr[0]));
		},
		getAllCorrelation: async(amostraEscolhida) =>{
            const { euclidean, squaredEuclidean } = require('ml-distance-euclidean');
			let allAmostrasBut = await Amostras.getAllButComp(amostraEscolhida);
			let amostra = await Amostras.getBytId(amostraEscolhida);
			allAmostrasBut = allAmostrasBut.map(a => {
				let result = []
				Object.keys(a).forEach(key => {
					result.push(a[key])
				})
				return result
			})
			amostra = amostra.map(a => {
				let result = []
				Object.keys(a).forEach(key => {
					result.push(a[key])
				})
				return result
			})
			let allDistance = Array();
			for(let i = 0; i < allAmostrasBut.length;i++)
				allDistance[i] = euclidean(amostra[0],allAmostrasBut[i]);
			console.log(allDistance);
		}
	}
export default Euclidean;