var random = 1;

document.getElementById('gioca').addEventListener('click',
function() {
  // document.getElementById('sipariodx').classList.add('sipario-dx');
  // document.getElementById('sipariosx').classList.add('sipario-sx');
  document.getElementById('bersaglio1').classList.add('animazione-sx');
  document.getElementById('bersaglio2').classList.add('animazione-centro');
  document.getElementById('bersaglio3').classList.add('animazione-dx');
  document.getElementById('bersaglio4').classList.add('animazione-sx');
  document.getElementById('bersaglio5').classList.add('animazione-centro');
  document.getElementById('bersaglio6').classList.add('animazione-dx');
  document.getElementById('bersaglio7').classList.add('animazione-sx');
  document.getElementById('bersaglio8').classList.add('animazione-centro');
  document.getElementById('bersaglio9').classList.add('animazione-dx');
  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
      document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random)
      document.getElementById('bersaglio' + random).classList.add('rotate')
      document.getElementById('bersaglio' + random).classList.remove('transparent')
    }, (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent')
    }, 1500 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate')
    }, 2300 + (i * 2500));
  }
  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
  document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random)
      document.getElementById('bersaglio' + random).classList.add('rotate')
      document.getElementById('bersaglio' + random).classList.remove('transparent')
    }, 25000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent')
    }, 25000 + 1000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate')
    }, 25000 + 1800 + (i * 2000));
  }
  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
      document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random)
      document.getElementById('bersaglio' + random).classList.add('rotate')
      document.getElementById('bersaglio' + random).classList.remove('transparent')
    }, 45000 + (i * 1700));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent')
    }, 45000 + 700 + (i * 1700));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate')
    }, 45000 + 1500 + (i * 1700));
  }
});
document.getElementById('bersaglio1').addEventListener('click',
function() {
  console.log(random);
  document.getElementById('bersaglio1').classList.add('bersaglio-colpito-1');

});
document.getElementById('bersaglio2').addEventListener('click',
function() {
  console.log(random);
  document.getElementById('bersaglio2').classList.add('bersaglio-colpito-2');

});
document.getElementById('bersaglio3').addEventListener('click',
function() {
  console.log(random);
  document.getElementById('bersaglio3').classList.add('bersaglio-colpito-3');

});
document.getElementById('bersaglio4').addEventListener('click',
function() {
  console.log(random);
  document.getElementById('bersaglio4').classList.add('bersaglio-colpito-4');

});
document.getElementById('bersaglio5').addEventListener('click',
function() {
  console.log(random);
  document.getElementById('bersaglio5').classList.add('bersaglio-colpito-5');

});
document.getElementById('bersaglio6').addEventListener('click',
function() {
  console.log(random);
  document.getElementById('bersaglio6').classList.add('bersaglio-colpito-6');

});
document.getElementById('bersaglio7').addEventListener('click',
function() {
  console.log(random);
  document.getElementById('bersaglio7').classList.add('bersaglio-colpito-7');

});
document.getElementById('bersaglio8').addEventListener('click',
function() {
  console.log(random);
  document.getElementById('bersaglio8').classList.add('bersaglio-colpito-8');

});
document.getElementById('bersaglio9').addEventListener('click',
function() {
  console.log(random);
  document.getElementById('bersaglio9').classList.add('bersaglio-colpito-9');

});
