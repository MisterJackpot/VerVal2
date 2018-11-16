import AmostraDAO from "../DB/DAO/AmostraDAO";

	const Filter = {
        FilterDate: async(dataMenor,dataMaior) => {
            let arr = await AmostraDAO.getAllCompData();
            arr = utils.RDPToArray(arr);
            let listaFiltrada = []
            for(let i = 0; i < arr.length; i++)
                if(new Date(arr[i][0]) >= dataMenor && new Date(arr[i][0]) <= dataMaior)
                    listaFiltrada.push(arr[i].slice(1))
            return listaFiltrada
        }
    }
    const utils = {
        RDPToArray: (arrayNumber) => {
            arrayNumber = arrayNumber .map(a => {
                let result = []
                Object.keys(a).forEach(key => {
                    result.push(a[key])
                })
                return result
            })
            return arrayNumber;
        }
    }
export default Filter;