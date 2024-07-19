import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const createOrder = (newOrder) => {
  return axios.post(API_URL + 'orders', newOrder)
}

const getOrder = (orderID) => {
  return axios.get(API_URL + `orders/${orderID}`)
}

const updateOrder = (orderID, toUpdate) => {
  return axios.put(API_URL + `orders/${orderID}`, toUpdate)
}

const sendEmail = (orderDetail) => {
  return axios.post(API_URL + 'orders/mail', orderDetail)
}

const OrderService = {
  createOrder,
  getOrder,
  sendEmail,
  updateOrder
}

export default OrderService
