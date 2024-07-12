import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const createOrder = (newOrder) => {
  return axios.post(API_URL + 'orders', newOrder)
}

const getOrder = (orderID) => {
  return axios.get(API_URL + `orders/${orderID}`)
}

const sendEmailToJET = (orderDetail) => {
  return axios.post(API_URL + 'orders/mail/toJet', orderDetail)
}

const sendEmailToCustomer = (orderDetail) => {
  return axios.post(API_URL + 'orders/mail/toCustomer', orderDetail)
}

const OrderService = {
  createOrder,
  getOrder,
  sendEmailToJET,
  sendEmailToCustomer
}

export default OrderService
