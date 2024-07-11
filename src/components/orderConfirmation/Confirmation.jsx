import { useEffect } from 'react'
import PositiveConfirmation from './PositiveConfirmation'
import NegativeConfirmation from './NegativeConfirmation'
import { useParams } from 'react-router-dom'

export default function Confirmation () {
  const { orderID } = useParams()
  const checkPay = orderID !== 'error'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='fade-in'>
      {
        checkPay
          ? (
            <PositiveConfirmation orderID={orderID} />
            )
          : (
            <NegativeConfirmation />
            )
      }
    </div>
  )
}
