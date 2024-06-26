import React, { useState } from 'react'
import '../stepper.css'
// import { TiTick } from 'react-icons/ti'
import { CheckmarkCircle01Icon } from 'hugeicons-react'

export default function Stepper () {
  const steps = ['Carrito', 'Envío', 'Pago']
  const [currentStep, setCurrentStep] = useState(1)
  const [complete, setComplete] = useState(false)
  return (
    <>
      <div className='flex'>
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && 'active'} ${
              (i + 1 < currentStep || complete) && 'complete'
            } `}
          >
            <div className='step'>
              {i + 1 < currentStep || complete ? <CheckmarkCircle01Icon size={24} /> : i + 1}
            </div>
            <p className='text-gray-500'>{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className='btn'
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1)
          }}
        >
          {currentStep === steps.length ? 'Finish' : 'Next'}
        </button>
      )}
    </>
  )
}
