import axios from "axios";


const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params ={
    key:'AIzaSyD0iveGjsYwyMNLs4MkdbRjoj_z7h9AHU4',
    cx:'814e52f567ddf45f9'
}

export const fetchDataFromApi = async (payload) => {
    
    const {data} = await axios.get(BASE_URL,{
        params:{...params, ...payload}
    })

    return data;
};
