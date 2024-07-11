import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const createOrder = (newOrder) => {
  return axios.post(API_URL + 'orders', newOrder)
}

const OrderService = {
  createOrder
}

export default OrderService
