/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import KhipuService from '../../services/khipu.service'
import Loader from '../Loader'

const getPaymentId = (orderId) => {
  const payments = JSON.parse(localStorage.getItem('payments')) || {}
  return payments[orderId]
}

export default function PaymentVerification () {
  const { orderID } = useParams()
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const fetchPaymentStatus = async (storedPaymentId) => {
    try {
      const response = await KhipuService.getPaymentById(storedPaymentId)
      if (response.data.status === 'done') {
        navigate(`/order-confirmation/${orderID}`)
        window.location.reload()
      }
    } catch (error) {
      navigate('/order-confirmation/error')
      window.location.reload()
    }
  }
  useEffect(() => {
    if (orderID) {
      const storedPaymentId = getPaymentId(orderID)
      if (storedPaymentId) {
        fetchPaymentStatus(storedPaymentId)

        // Llamada a API cada 10 segundos, cambiar en un futuro a Web service
        const intervalId = setInterval(() => {
          fetchPaymentStatus(storedPaymentId)
        }, 5000)

        // Limpia el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId)
      } else {
        console.error('No payment_id found for the given order_id in localStorage')
        setError('No se encontró el ID de pago para el ID de orden proporcionado.')
      }
    } else {
      console.error('No order_id found in query parameters')
      setError('No se encontró el ID de orden en los parámetros de consulta.')
    }
  }, [orderID])

  return (
    <div className='flex justify-center pt-10'>
      {error
        ? (
          <p>{error}</p>
          )
        : (
          <div className='flex flex-col items-center text-center'>
            <p>Espera un momento mientras procesamos tu pago.</p>
            <p className='font-bold'> No cierres esta ventana.</p>
            <div className='pt-2'>
              <Loader />
            </div>
          </div>
          )}
    </div>
  )
}
