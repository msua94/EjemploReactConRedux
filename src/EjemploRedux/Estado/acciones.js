export const acciones = {
    ActualizarValorUno:"ActualizarValorUno",    
    ActualizarValorDos:"ActualizarValorDos",
    SumarValores:"SumarValores"
}

export const ActualizaValorUno = valorUno => ({
    type: acciones.ActualizarValorUno,
    valorUno
})

export const ActualizaValorDos = valorDos => ({
    type: acciones.ActualizarValorDos,
    valorDos
})

export const SumaValores = (valorUno,valorDos) => ({
    type: acciones.SumarValores,
    resultado: (parseInt(valorUno) + parseInt(valorDos))
})