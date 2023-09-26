alert(`Orgánica.
============================================
Simulador Presupuesto de obra por Metro Cuadrado
============================================
A continuación ingresará los parámetros de la obra que le gustaría que realicemos.
                      
PROMOS 2023
- Si tu obra tiene una superficie mayor a 100mt2 entonces tenés 5% de descuento
- Si tu obra tiene una superficie mayor a 200mt2 entonces tenés 8% de descuento
============================================`)

                let seguirTrabajando = true

                const precioMetroEnDolares = 3000
                
                while (seguirTrabajando) {

                    const cantidadMetrosCuadrados = parseInt(prompt('Ingresar metros cuadrados de la obra a realizar:'))
                    let descuentoMetrosCuadrados = 0

                    const cantidadCuotas = parseInt(prompt('Ingresar cantidad de cuotas a pagar:\nOpc A: Entre 1 a 3 cuotas: 0% interes.\nOpc B: Entre 3 a 6 cuotas: 15% interes\nOpc C: Entre 7 a 12 cuotas cuotas: 30% interes'))


                    if (cantidadMetrosCuadrados >= 100) {
                        descuentoMetrosCuadrados = 5

                        if (cantidadMetrosCuadrados >= 200) {
                            descuentoMetrosCuadrados = 8
                        }
                    }

                    let interesPorCuotas = 0
                    if (cantidadCuotas >= 1 && cantidadCuotas <= 3) {
                        interesPorCuotas = 0
                    } else {
                        if (cantidadCuotas >= 4 && cantidadCuotas <= 6) {
                            interesPorCuotas = 15
                        } else {
                            if (cantidadCuotas >= 7 && cantidadCuotas <= 12) {
                                interesPorCuotas = 30
                            }
                        }
                    }

                    // Calculamos el precio
                    const precioTotalMetraje = precioMetroEnDolares * cantidadMetrosCuadrados
                    const descuentoAlMetraje = descuentoMetrosCuadrados > 0 ?
                        (descuentoMetrosCuadrados * precioTotalMetraje) / 100 :
                        0
                    const precioTotal = precioTotalMetraje - descuentoAlMetraje // Precio contado

                    // Calculamos valor cuotas
                    const precioTotalConInteres = interesPorCuotas > 0 ?
                        precioTotal + ((interesPorCuotas * precioTotal) / 100) : // Precio contado
                        precioTotal
                    const valorCadaCuota = precioTotalConInteres / cantidadCuotas

                    // Mostramos resultados
                    alert(`Orgánica.
============================================
Simulador Presupuesto - RESULTADOS
============================================

TOTAL Mts2         = ${cantidadMetrosCuadrados} Mts2
PRECIO CONTADO     = ${precioTotal} USD
VALOR Mts2         = ${precioMetroEnDolares} USD / Mts2

PRECIO FINANCIADO  = ${precioTotalConInteres} USD
CANTIDAD CUOTAS    = ${cantidadCuotas} Cuotas
PRECIO POR CUOTA   = ${valorCadaCuota} USD

============================================

Presione ENTER para continuar`)


                    const teclaApretada = prompt('Simulacion finalizada.\nPresione X para salir.')

                    seguirTrabajando = teclaApretada !== 'X'
}
            