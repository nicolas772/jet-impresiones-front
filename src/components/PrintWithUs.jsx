import { useState, useEffect } from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import PrintWithUsService from '../services/printWithUs.service'
import Loader from './Loader'

export default function PrintWithUs () {
  const [inForm, setInForm] = useState(true)
  const [errorForm, setErrorForm] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    if (form.checkValidity()) {
      setLoading(true)
      const formData = new FormData(form)
      const senderEmail = formData.get('email')
      const subject = formData.get('subject')
      const message = formData.get('message')
      try {
        await PrintWithUsService.sendEmail({ senderEmail, subject, message })
        setLoading(false)
        setErrorForm(false)
        setInForm(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setErrorForm(true)
        setInForm(false)
      }

      window.scrollTo(0, 0)
    } else {
      form.reportValidity()
    }
  }

  return (
    <>
      {
      inForm
        ? (
          <section className='fade-in bg-white dark:bg-gray-900'>
            <div className='py-8 lg:py-10 px-4 mx-auto max-w-screen-md'>
              <h2 className='mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>¿Quieres imprimir con nosotros?</h2>
              <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg'>
                Podemos ayudarte a materializar tus proyectos con nuestras impresoras 3D de alta precisión. Completa el formulario y nos pondremos en contacto pronto. ¡Esperamos trabajar contigo!
              </p>
              <form onSubmit={handleSubmit} className='space-y-8'>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Tu correo electrónico</label>
                  <input type='email' id='email' name='email' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' placeholder='ejemplo@mail.com' required />
                </div>
                <div>
                  <label htmlFor='subject' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Asunto</label>
                  <input type='text' id='subject' name='subject' className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' placeholder='Escribe el asunto de tu consulta' required />
                </div>
                <div className='sm:col-span-2'>
                  <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Mensaje</label>
                  <textarea id='message' name='message' rows='6' className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='Compartenos tu idea...' />
                </div>
                {
                  loading
                    ? (
                      <Loader />
                      )
                    : (
                      <button type='submit' className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>Enviar mensaje</button>
                      )
                }

              </form>
            </div>
          </section>
          )
        : (
          <section className='bg-white pt-4 pb-72 px-6 antialiased'>
            <div className='mx-auto max-w-screen-md'>
              {
              errorForm
                ? (

                  <div className='fade-in flex flex-col items-center gap-3 pb-8 border-b'> {/* encabezado */}
                    <XCircleIcon className='h-10 w-10 text-red-600' />
                    <div className='flex flex-col items-center text-center gap-2'>
                      <h1 className='text-2xl font-bold text-gray-900'>
                        Ha ocurrido un error!
                      </h1>
                      <p className='text-md leading-6 text-gray-600'>
                        Hubo un problema con el envío del formulario y tu solicitud no ha sido ingresada.
                      </p>
                      <p className='text-md leading-6 text-gray-600'>
                        Puedes <a href='/print-with-us' title='' className='inline-flex items-center gap-2 font-medium text-primary-700 underline hover:no-underline dark:text-primary-500'>volver a intentarlo</a>.
                      </p>
                    </div>
                  </div>

                  )
                : (

                  <div className='fade-in flex flex-col items-center gap-3 pb-8 border-b'> {/* encabezado */}
                    <CheckCircleIcon className='h-10 w-10 text-green-700' />
                    <div className='flex flex-col items-center text-center gap-2'>
                      <h1 className='text-2xl font-bold text-gray-900'>
                        Hemos recibido tu correo!
                      </h1>
                      <p className='text-md leading-6 text-gray-600'>
                        Pronto nos pondremos en contacto contigo y poder hacer realidad tus ideas.
                      </p>
                      <p className='text-md leading-6 text-gray-600'>
                        Puedes <a href='/' title='' className='inline-flex items-center gap-2 font-medium text-primary-700 underline hover:no-underline dark:text-primary-500'>mirar nuestros productos.</a>
                      </p>
                    </div>
                  </div>
                  )
            }
            </div>
          </section>
          )
    }
    </>
  )
}
