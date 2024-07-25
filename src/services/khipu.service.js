import axios from 'axios'

const API_KHIPU_URL = import.meta.env.VITE_API_URL_KHIPU
// const API_KEY = import.meta.env.VITE_API_KEY_KHIPU
const API_KEY_PROD = import.meta.env.VITE_API_KEY_KHIPU_PROD

const headers = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY_PROD
}

const createPayment = (monto, moneda, motivo, idTransaccion, urlRetorno, urlError) => {
  const montoAux = monto
  return axios.post(
    API_KHIPU_URL,
    {
      amount: montoAux, // cambiar a monto en productivo
      currency: moneda,
      subject: motivo,
      transaction_id: idTransaccion,
      return_url: urlRetorno,
      cancel_url: urlError
    },
    { headers }
  )
}

const getPaymentById = (id) => {
  return axios.get(
    `${API_KHIPU_URL}/${id}`,
    { headers }
  )
}

const KhipuService = {
  createPayment,
  getPaymentById
}

export default KhipuService
