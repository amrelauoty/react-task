import axios from "axios"
const baseURL = "http://localhost:3004/products"
let productsCRUD = {
    getAll:()=>{
        return axios.get(baseURL)
    },
    add: (newProduct)=>{
        return axios.post(baseURL,newProduct)
    },
    getById:(specificProduct)=>{
        return axios.get(`${baseURL}/${specificProduct}`);
    },
    delete:(item)=>{
        return axios.delete(`${baseURL}/${item}`);
    },
    update:(item,product)=>{
        return axios.put(`${baseURL}/${item}`,product);
    }
}
export default productsCRUD