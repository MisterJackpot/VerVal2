import AmostraDAO from "../DB/DAO/AmostraDAO";

	const Filter = {
        FilterDate: async(dataMenor,dataMaior) => {
            let arrId = await AmostraDAO.getIdsData();
            let arr = await AmostraDAO.getAllCompData();
            console.log(new Date(dataMenor))
            arr = utils.RDPToArray(arr);
            arrId = utils.RDPToArray(arrId);
            let listaFiltrada = []
            for(let i = 0; i < arrId.length;i++)
                arrId[i][1] ="\t"+ new Date(arrId[i][1]).getDate()+"/"+(new Date(arrId[i][1]).getMonth() + 1 )+"/"+new Date(arrId[i][1]).getFullYear();
            for(let i = 0; i < arr.length; i++)
                if(new Date(arr[i][0]) > new Date(dataMenor) && new Date(arr[i][0]) <= new Date(dataMaior))
                    listaFiltrada.push([arr[i].slice(1), arrId[i]]);
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