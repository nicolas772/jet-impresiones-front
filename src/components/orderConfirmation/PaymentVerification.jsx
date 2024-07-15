/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import KhipuService from '../../services/khipu.service'

const getPaymentId = (orderId) => {
  const payments = JSON.parse(localStorage.getItem('payments')) || {}
  return payments[orderId]
}

export default function PaymentVerification () {
  const { orderID } = useParams()
  const [paymentId, setPaymentId] = useState(null)
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
        setPaymentId(storedPaymentId)

        // Llama a la API de Khipu para verificar el estado del pago inicialmente
        fetchPaymentStatus(storedPaymentId)

        // Configura el intervalo para verificar el estado del pago cada 10 segundos
        const intervalId = setInterval(() => {
          fetchPaymentStatus(storedPaymentId)
        }, 10000)

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
    <div>
      {error
        ? (
          <p>{error}</p>
          )
        : (
          <div>
            <p>Estado del pago con ID: {paymentId}</p>
          </div>
          )}
    </div>
  )
}
