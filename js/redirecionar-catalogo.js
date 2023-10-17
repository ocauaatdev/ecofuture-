document.querySelector('#slide1').addEventListener("click",redirecionarCamisas);
document.querySelector('#slide2').addEventListener("click",redirecionarCosmeticos);
document.querySelector('#slide3').addEventListener("click",redirecionarHigiene);
document.querySelector('#slide4').addEventListener("click",redirecionarEcobags);

function redirecionarCamisas(params) {
    window.location.href = '../pages/camisas.html'
}
function redirecionarCosmeticos(params) {
    window.location.href = '../pages/cosmeticos.html'
}
function redirecionarHigiene(params) {
    window.location.href = '../pages/higiene.html'
}
function redirecionarEcobags(params) {
    window.location.href = '../pages/bags.html'
}