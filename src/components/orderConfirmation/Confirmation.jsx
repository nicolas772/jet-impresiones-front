import { useEffect } from 'react'
import PositiveConfirmation from './PositiveConfirmation'
import NegativeConfirmation from './NegativeConfirmation'

export default function Confirmation () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const checkPay = true
  return (
    <>
      {
        checkPay
          ? (
            <PositiveConfirmation />
            )
          : (
            <NegativeConfirmation />
            )
      }
    </>
  )
}
