import Amostras from "../DB/DAO/AmostraDAO";

	const Euclidean = {
        getDistance: (point1,point2) => {
            const { euclidean, squaredEuclidean } = require('ml-distance-euclidean');
            return euclidean(point1,point2);
                    
            //console.log(test.agnes(elements, 'single'));
        },
         getDistanceUsingID: async(id1,id2) =>{
            let amostra1 = (await Amostras.getBytId(id1));
            let amostra2 = (await Amostras.getBytId(id2));
            //amostra2 = Amostras.getById(id2);
            //const { euclidean, squaredEuclidean } = require('ml-distance-euclidean');
            //return euclidean(amostra1,amostra2);
                    
            //console.log(test.agnes(elements, 'single'));
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
        }
	}
export default Euclidean;