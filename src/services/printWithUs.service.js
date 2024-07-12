import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL + 'printWithUs'

const sendEmail = (contactInfo) => {
  return axios.post(API_URL, contactInfo)
}

const PrintWithUsService = {
  sendEmail
}

export default PrintWithUsService
