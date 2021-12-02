function cbDeportivo() {
  return 'El auto es deportivo';
}

function cbOtroTipo(tipo) {
  return `El auto es : ${tipo}`;
}

function tipoAuto(tipo, cbDeportivo, cbOtroTipo) {
  if (tipo == 'deportivo') {
    return cbDeportivo();
  } else {
    return cbOtroTipo(tipo);
  }
}

var resultado = tipoAuto('familiar', cbDeportivo, cbOtroTipo);

console.log(resultado);
