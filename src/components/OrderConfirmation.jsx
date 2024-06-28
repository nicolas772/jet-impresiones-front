import { CheckCircleIcon } from '@heroicons/react/24/outline'

const order = 2348793
const datosEnvio = {
  nombre: 'Nicolas',
  apellido: 'Araya Urrutia',
  calle: 'Antonio Smith',
  numero: 4033,
  depto: 'Población san joaquin',
  comuna: 'Pedro Aguirre Cerda',
  region: 'Región Metropolitana',
  pais: 'Chile',
  notas: 'dejar en conserjeria por favor'
}
const datosTarjeta = {
  tipo: 'Crédito',
  red: 'Visa',
  cardNumber: '**** 4660'
}

export default function OrderConfirmation () {
  return (
    <section className='bg-white py-4 px-6 antialiased'>
      <div className='mx-auto max-w-screen-md'>
        <div className='flex flex-col items-center gap-3 pb-8 border-b'> {/* encabezado */}
          <CheckCircleIcon className='h-10 w-10 text-green-700' />
          <div className='flex flex-col items-center text-center gap-1'>
            <h1 className='text-2xl font-bold text-gray-900'>
              Hemos recibido tu pedido!
            </h1>
            <p className='text-md leading-6 text-gray-600'>
              Tu orden #{order} está siendo procesada para el envío
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row py-8 border-b'>
          <div className='flex-1'>
            <h1 className='text-sm font-bold text-gray-500 uppercase font-roboto'>
              Dirección de envío
            </h1>
            <div className='pt-6 pr-3 text-sm text-gray-900 flex flex-col gap-3'>
              <p>{datosEnvio.nombre + ' ' + datosEnvio.apellido}</p>
              <p>{datosEnvio.calle +
              ' #' + datosEnvio.numero +
              (datosEnvio.depto && (', ' + datosEnvio.depto)) +
              ', ' + datosEnvio.comuna +
              ', ' + datosEnvio.region +
              ', ' + datosEnvio.pais + '.'}
              </p>
              {datosEnvio.notas && (
                <p><span className='font-semibold'>Nota: </span>{datosEnvio.notas}</p>
              )}
            </div>
          </div>
          <div className='flex-1 pt-10 sm:pt-0'>
            <h1 className='text-sm font-bold text-gray-500 uppercase font-roboto'>
              Información de pago
            </h1>
            <div className='pt-6 pr-3 text-sm text-gray-900 flex flex-col gap-1'>
              <p>{datosTarjeta.tipo}</p>
              <p>{datosTarjeta.red}</p>
              <p>{datosTarjeta.cardNumber}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
