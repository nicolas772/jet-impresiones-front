import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const getAllProducts = () => {
  return axios.get(API_URL + 'items')
}

const ProductService = {
  getAllProducts
}

export default ProductService
