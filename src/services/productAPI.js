import axiosClient from "./axiosCline";

const productAPI = {
    getAll:() =>{
        const url =`/dataNobel/TEST`;
        return axiosClient.get(url)
    },

    get:(id) =>{
        const url =`/dataNobel/TEST/${id}`;
        return axiosClient.get(url)
    },
}

export default productAPI;