import { CheckCircleIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import { toFormat } from '../../constants/format'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
const datosTransferencia = {
  titular: 'JET Impresiones 3D SPA',
  banco: 'Banco Estado',
  tipoCuenta: 'Cuenta Vista',
  numeroCuenta: 19842753,
  rut: '19.842.753-5',
  correo: 'narayaurrutia@gmail.com',
  mensaje: 'Orden n° 123948',
  monto: 19840
}
const discount = 400
const SHIP_PRICE = 4500

const item = {
  id: 1,
  title: 'Porta completo animales',
  description: 'Porta completo impreso en 3D, en distinto tamaños y colores, ideal para regalo del dia del niño, dia del padre, etc.',
  shortDescription: 'Excelente porta completo en variedad de colores',
  price: 2000,
  discountPercentage: 10,
  rating: 4,
  totalOpinions: 117,
  stock: 94,
  category: 'porta-completos',
  thumbnail: {
    src: '../../products/foto1.png',
    alt: 'Two each of gray, white, and black shirts laying flat.'
  },
  images: [
    {
      src: '../../products/foto2.png',
      alt: 'Model wearing plain black basic tee.'
    },
    {
      src: '../../products/foto3.png',
      alt: 'Model wearing plain gray basic tee.'
    }
  ],
  colors: ['Rojo', 'Blanco'],
  observations: [
    'Medida: 21,7 x 13,8 cm.',
    'Sujeto a disponibilidad.',
    'Despacho entre 3 a 5 días.',
    'El modelo 3D no se vende.'
  ]
}

export default function TransferConfirmation () {
  const copiarAlPortapapeles = () => {
    const datos = `
      Titular: ${datosTransferencia.titular}
      Banco: ${datosTransferencia.banco}
      Tipo de Cuenta: ${datosTransferencia.tipoCuenta}
      N° Cuenta: ${datosTransferencia.numeroCuenta}
      RUT: ${datosTransferencia.rut}
      Correo: ${datosTransferencia.correo}
      Mensaje: ${datosTransferencia.mensaje}
      Monto: ${datosTransferencia.monto}
    `
    navigator.clipboard.writeText(datos)
      .then(() => {
        toast.info('Datos copiados al portapapeles.', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          theme: 'light',
          transition: Bounce
        })
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error al copiar en portapapeles', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          theme: 'light',
          transition: Bounce
        })
      })
  }
  return (
    <section className='bg-white py-2 px-6 antialiased'>
      <div className='mx-auto max-w-screen-md'>
        <div className='flex flex-col items-center gap-3 pb-8 border-b'> {/* encabezado */}
          <CheckCircleIcon className='h-10 w-10 text-green-700' />
          <div className='flex flex-col items-center text-center gap-2'>
            <h1 className='text-2xl font-bold text-gray-900'>
              Hemos recibido tu pedido!
            </h1>
            <p className='text-md leading-6 text-gray-600'>
              La orden #{order} ha sido ingresada con éxito.
            </p>
            <div className='text-sm leading-6 text-gray-600'>
              Para finalizar la compra y preparar tu pedido, debes realizar la transferencia con los siguientes datos:
              <p className='font-semibold'>(plazo máximo de 48 horas)</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row py-8 border-b'>
          <div className='flex-1 '>
            <div
              onClick={copiarAlPortapapeles}
              className='flex items-center gap-1 cursor-pointer'
            >
              <ClipboardDocumentCheckIcon className='w-6' />
              <h1 className='text-sm font-bold text-gray-500 uppercase font-roboto'>
                Datos de transferencia
              </h1>
            </div>
            <div className='pt-6 pr-3 text-sm text-gray-900 flex flex-row gap-1'>
              <div className='flex-initial w-32'>
                <p>Titular:</p>
                <p>Banco:</p>
                <p>Tipo de Cuenta:</p>
                <p>N° Cuenta:</p>
                <p>RUT:</p>
                <p>Correo:</p>
                <p>Mensaje:</p>
                <p>Monto:</p>
              </div>
              <div className='flex-auto'>
                <p>{datosTransferencia.titular}</p>
                <p>{datosTransferencia.banco}</p>
                <p>{datosTransferencia.tipoCuenta}</p>
                <p>{datosTransferencia.numeroCuenta}</p>
                <p>{datosTransferencia.rut}</p>
                <p>{datosTransferencia.correo}</p>
                <p>{datosTransferencia.mensaje}</p>
                <p>{toFormat(datosTransferencia.monto)}</p>
              </div>
            </div>
          </div>
          <div className='flex-1 pt-10 sm:pt-0'>
            <h1 className='text-sm font-bold text-gray-500 uppercase font-roboto'>
              Datos de envío
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

        </div>
        <div className='py-8'>
          <h1 className='text-sm font-bold text-gray-500 uppercase font-roboto'>
            Detalle de Orden
          </h1>

          <div className='pt-6 space-y-4'>
            <div className='space-y-3'>
              <dl className='flex items-center justify-between gap-4'>
                <dt className='flex items-center text-sm font-normal text-gray-800 dark:text-gray-400'>
                  <img className='h-16 w-16 rounded-lg border' src={item.thumbnail.src} alt={item.thumbnail.alt} />
                  <div className='px-4'>
                    <h4>Producto 1</h4>
                    <div className='flex gap-2 text-xs text-gray-500'>
                      <span>Cantidad: 3</span>
                      <span>Color: Rojo</span>
                    </div>
                  </div>
                </dt>
                <dd className='text-sm font-medium text-gray-900 dark:text-white'>{toFormat(10000)}</dd>
              </dl>
            </div>
            <div className='space-y-2 border-t pt-4'>
              <dl className='flex items-center justify-between gap-4'>
                <dt className='text-sm font-normal text-gray-800 dark:text-gray-400'>Descuento Productos</dt>
                <dd className='text-sm font-medium text-green-600'>-{discount === 0 ? '' : toFormat(discount)}</dd>
              </dl>
              <dl className='flex items-center justify-between gap-4'>
                <dt className='text-sm font-normal text-gray-800 dark:text-gray-400'>Descuento Transferencia</dt>
                <dd className='text-sm font-medium text-green-600'>-{toFormat(230)}</dd>
              </dl>
            </div>
            <div className='space-y-2 border-t pt-4'>
              <dl className='flex items-center justify-between gap-4'>
                <dt className='text-sm font-normal text-gray-800 dark:text-gray-400'>Envío <span className='text-gray-500'>(precio fijo)</span></dt>
                <dd className='text-sm font-medium text-gray-900 dark:text-white'>{toFormat(SHIP_PRICE)}</dd>
              </dl>
            </div>

            <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
              <dt className='text-sm font-bold text-gray-900 dark:text-white'>Precio Total</dt>
              <dd className='text-base font-bold text-gray-900 dark:text-white'>{toFormat(8000)}</dd>
            </dl>

          </div>
        </div>

      </div>
      <ToastContainer />
    </section>
  )
}
