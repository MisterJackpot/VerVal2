import PCA from "./PCABO.js";

	const AGNES = {
        clusterize: async() => {
            let cluster = require('ml-hclust');
            var elements = (await  PCA.getPCA());
            return cluster.agnes(elements,'single');         
            //console.log(test.agnes(elements, 'single'));
        }
	}
export default AGNES;