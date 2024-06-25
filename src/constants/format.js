export function toFormat (price) {
  return price.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP' // Cambia a USD u otra moneda según necesites
  })
}
