import PositiveConfirmation from './PositiveConfirmation'
import NegativeConfirmation from './NegativeConfirmation'

export default function Confirmation () {
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
