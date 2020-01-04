var random = 1;
var random2 = 1;
var random3 = 1;

document.getElementById('gioca').addEventListener('click',
function() {
  document.getElementById('gioca').classList.add('hidden');
  document.getElementById('sipariodx').classList.add('sipario-dx');
  document.getElementById('sipariosx').classList.add('sipario-sx');
  document.getElementById('bersaglio1').classList.add('animazione-sx');
  document.getElementById('bersaglio2').classList.add('animazione-centro');
  document.getElementById('bersaglio3').classList.add('animazione-dx');
  document.getElementById('bersaglio4').classList.add('animazione-sx');
  document.getElementById('bersaglio5').classList.add('animazione-centro');
  document.getElementById('bersaglio6').classList.add('animazione-dx');
  document.getElementById('bersaglio7').classList.add('animazione-sx');
  document.getElementById('bersaglio8').classList.add('animazione-centro');
  document.getElementById('bersaglio9').classList.add('animazione-dx');
  document.getElementById('overlay').classList.add('hidden');

  setTimeout(function(){
    document.getElementById('difficolta').innerHTML = 'Facile';
    document.getElementById('difficolta').classList.remove('transparent');
  }, 1500);
  setTimeout(function(){
    document.getElementById('difficolta').classList.add('transparent');
    document.getElementById('body').classList.add('crosshair');
    document.getElementById('overlay').classList.remove('hidden');
  }, 4000);

  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
      document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random);
      document.getElementById('bersaglio' + random).classList.add('rotate');
      document.getElementById('bersaglio' + random).classList.remove('transparent');
      document.getElementById('bersaglio' + random).classList.remove('hidden');
    }, 5000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent');
      document.getElementById('bersaglio' + random).classList.add('hidden');
    }, 5000 + 2000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate');
    }, 5000 + 2800 + (i * 3000));
    setTimeout(function(){
      random2 = Math.floor(Math.random() * 9 + 1);
      if (random == random2) {
        random2++;
        if (random2 == 10) {
          random2 = 8;
        }
      }
      document.getElementById('bersaglio' + random2).classList.remove('bersaglio-colpito-' + random2);
      document.getElementById('bersaglio' + random2).classList.add('rotate');
      document.getElementById('bersaglio' + random2).classList.remove('transparent');
      document.getElementById('bersaglio' + random2).classList.remove('hidden');
    }, 5000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.add('transparent');
      document.getElementById('bersaglio' + random2).classList.add('hidden');
    }, 5000 + 2000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.remove('rotate');
    }, 5000 + 2800 + (i * 3000));
  }

  setTimeout(function(){
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('body').classList.remove('crosshair');
    document.getElementById('difficolta').innerHTML = 'Intermedio';
    document.getElementById('difficolta').classList.remove('transparent');
  }, 36000 );
  setTimeout(function(){
    document.getElementById('difficolta').classList.add('transparent');
    document.getElementById('body').classList.add('crosshair');
    document.getElementById('overlay').classList.remove('hidden');
  }, 38500 );

  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
      document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random);
      document.getElementById('bersaglio' + random).classList.add('rotate');
      document.getElementById('bersaglio' + random).classList.remove('transparent');
      document.getElementById('bersaglio' + random).classList.remove('hidden');
    }, 39500 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent');
      document.getElementById('bersaglio' + random).classList.add('hidden');
    }, 39500 + 2000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate');
    }, 39500 + 2800 + (i * 3000));

    setTimeout(function(){
      random2 = Math.floor(Math.random() * 9 + 1);
      if (random == random2) {
        random2++;
        if (random2 == 10) {
          random2 = 8;
        }
      }
      document.getElementById('bersaglio' + random2).classList.remove('bersaglio-colpito-' + random2);
      document.getElementById('bersaglio' + random2).classList.add('rotate');
      document.getElementById('bersaglio' + random2).classList.remove('transparent');
      document.getElementById('bersaglio' + random2).classList.remove('hidden');
    }, 39500 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.add('transparent');
      document.getElementById('bersaglio' + random2).classList.add('hidden');
    }, 39500 + 2000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.remove('rotate');
    }, 39500 + 2800 + (i * 3000));

    setTimeout(function(){
      random3 = Math.floor(Math.random() * 9 + 1);
      if (random == random3) {
        random3++;
        if (random3 == 10) {
          random3 = 8;
        }
      }
      if (random2 == random3) {
        random3++;
        if (random3 == 10 || random == random3) {
          random3 = 7;
          if (random3 == random) {
            random3 = 1;
          }
        }
      }
      document.getElementById('bersaglio' + random3).classList.remove('bersaglio-colpito-' + random3);
      document.getElementById('bersaglio' + random3).classList.add('rotate');
      document.getElementById('bersaglio' + random3).classList.remove('transparent');
      document.getElementById('bersaglio' + random3).classList.remove('hidden');
    }, 39500 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.add('transparent');
      document.getElementById('bersaglio' + random3).classList.add('hidden');
    }, 39500 + 2000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.remove('rotate');
    }, 39500 + 2800 + (i * 3000));
  }

  setTimeout(function(){
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('body').classList.remove('crosshair');
    document.getElementById('difficolta').innerHTML = 'Difficile';
    document.getElementById('difficolta').classList.remove('transparent');
  }, 70500);
  setTimeout(function(){
    document.getElementById('difficolta').classList.add('transparent');
    document.getElementById('body').classList.add('crosshair');
    document.getElementById('overlay').classList.remove('hidden');

  }, 73000);

  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
      document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random);
      document.getElementById('bersaglio' + random).classList.add('rotate');
      document.getElementById('bersaglio' + random).classList.remove('transparent');
      document.getElementById('bersaglio' + random).classList.remove('hidden');

    }, 74000 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent');
      document.getElementById('bersaglio' + random).classList.add('hidden');

    }, 74000 + 1500 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate');
    }, 74000 + 2300 + (i * 2500));

    setTimeout(function(){
      random2 = Math.floor(Math.random() * 9 + 1);
      if (random == random2) {
        random2++;
        if (random2 == 10) {
          random2 = 8;
        }
      }
      document.getElementById('bersaglio' + random2).classList.remove('bersaglio-colpito-' + random2);
      document.getElementById('bersaglio' + random2).classList.add('rotate');
      document.getElementById('bersaglio' + random2).classList.remove('transparent');
      document.getElementById('bersaglio' + random2).classList.remove('hidden');

    }, 74000 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.add('transparent');
      document.getElementById('bersaglio' + random2).classList.add('hidden');

    }, 74000 + 1500 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.remove('rotate');
    }, 74000 + 2300 + (i * 2500));

    setTimeout(function(){
      random3 = Math.floor(Math.random() * 9 + 1);
      if (random == random3) {
        random3++;
        if (random3 == 10) {
          random3 = 8;
        }
      }
      if (random2 == random3) {
        random3++;
        if (random3 == 10 || random == random3) {
          random3 = 7;
          if (random3 == random) {
            random3 = 1;
          }
        }
      }
      document.getElementById('bersaglio' + random3).classList.remove('bersaglio-colpito-' + random3);
      document.getElementById('bersaglio' + random3).classList.add('rotate');
      document.getElementById('bersaglio' + random3).classList.remove('transparent');
      document.getElementById('bersaglio' + random3).classList.remove('hidden');

    }, 74000 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.add('transparent');
      document.getElementById('bersaglio' + random3).classList.add('hidden');

    }, 74000 + 1500 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.remove('rotate');
    }, 74000 + 2300 + (i * 2500));
  }

});
document.getElementById('bersaglio1').addEventListener('click',
function() {
  document.getElementById('bersaglio1').classList.add('bersaglio-colpito-1');
  document.getElementById('mirino').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione-mirino');
  setTimeout(function(){
    document.getElementById('mirino-esplosivo').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-esplosivo').classList.add('sparizione-mirino');
    document.getElementById('mirino-esplosivo').classList.remove('bang');
  }, 300);
});

document.getElementById('bersaglio2').addEventListener('click',
function() {
  document.getElementById('bersaglio2').classList.add('bersaglio-colpito-2');
  document.getElementById('mirino').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione-mirino');
  setTimeout(function(){
    document.getElementById('mirino-esplosivo').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-esplosivo').classList.add('sparizione-mirino');
    document.getElementById('mirino-esplosivo').classList.remove('bang');
  }, 300);

});
document.getElementById('bersaglio3').addEventListener('click',
function() {
  document.getElementById('bersaglio3').classList.add('bersaglio-colpito-3');
  document.getElementById('mirino').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione-mirino');
  setTimeout(function(){
    document.getElementById('mirino-esplosivo').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-esplosivo').classList.add('sparizione-mirino');
    document.getElementById('mirino-esplosivo').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio4').addEventListener('click',
function() {
  document.getElementById('bersaglio4').classList.add('bersaglio-colpito-4');
  document.getElementById('mirino').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione-mirino');
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione-mirino');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio5').addEventListener('click',
function() {
  document.getElementById('bersaglio5').classList.add('bersaglio-colpito-5');
  document.getElementById('mirino').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione-mirino');
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione-mirino');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio6').addEventListener('click',
function() {
  document.getElementById('bersaglio6').classList.add('bersaglio-colpito-6');
  document.getElementById('mirino').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione-mirino');
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione-mirino');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio7').addEventListener('click',
function() {
  document.getElementById('bersaglio7').classList.add('bersaglio-colpito-7');
  document.getElementById('mirino').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione-mirino');
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione-mirino');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio8').addEventListener('click',
function() {
  document.getElementById('bersaglio8').classList.add('bersaglio-colpito-8');
  document.getElementById('mirino').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione-mirino');
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione-mirino');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio9').addEventListener('click',
function() {
  document.getElementById('bersaglio9').classList.add('bersaglio-colpito-9');
  document.getElementById('mirino').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione-mirino');
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione-mirino');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);

});

document.getElementById('overlay').addEventListener('click',
function() {
  document.getElementById('mirino').classList.remove('bang', 'sparizione-mirino');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione-mirino');
  setTimeout(function(){
    document.getElementById('mirino').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino').classList.add('sparizione-mirino');
    document.getElementById('mirino').classList.remove('bang');
  }, 300);

});
