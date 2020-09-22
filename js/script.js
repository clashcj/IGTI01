var R;
var G;
var B;

window.addEventListener('load', start);

function start() {
  document.querySelectorAll('.inputs').forEach(function (input) {
    input.setAttribute('disabled', true);
  });

  document.querySelectorAll('.slider').forEach(function (slider) {
    slider.addEventListener('change', AtualizarValores);
  });

  AtualizarValores();

  function AtualizarValores() {
    R = document.getElementById('sliderVermelho').value;
    G = document.getElementById('sliderVerde').value;
    B = document.getElementById('sliderAzul').value;

    document.getElementById('inputVermelho').value = R;
    document.getElementById('inputVerde').value = G;
    document.getElementById('inputAzul').value = B;

    var valorHex = '#' + valorParaHex(R) + valorParaHex(G) + valorParaHex(B);

    document.getElementById('retangulo').style.backgroundColor = valorHex;
  }

  function valorParaHex(valor) {
    var hex = parseInt(valor).toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
}
