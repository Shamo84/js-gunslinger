var random = 1;
var random2 = 1;
var random3 = 1;

document.getElementById('gioca').addEventListener('click',
function() {
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

  setTimeout(function(){
    document.getElementById('difficolta').innerHTML = 'Livello Facile';
    document.getElementById('difficolta').classList.remove('transparent')
  }, 1500);
  setTimeout(function(){
    document.getElementById('difficolta').classList.add('transparent')
    document.getElementById('body').classList.add('crosshair')
  }, 4000);

  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
  document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random)
      document.getElementById('bersaglio' + random).classList.add('rotate')
      document.getElementById('bersaglio' + random).classList.remove('transparent')
    }, 5000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent')
    }, 5000 + 1000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate')
    }, 5000 + 1800 + (i * 2000));
    setTimeout(function(){
      random2 = Math.floor(Math.random() * 9 + 1);
      if (random == random2) {
        random2++;
        if (random2 == 10) {
          random2 = 8;
        }
      }
  document.getElementById('bersaglio' + random2).classList.remove('bersaglio-colpito-' + random2)
      document.getElementById('bersaglio' + random2).classList.add('rotate')
      document.getElementById('bersaglio' + random2).classList.remove('transparent')
    }, 5000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.add('transparent')
    }, 5000 + 1000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.remove('rotate')
    }, 5000 + 1800 + (i * 2000));
  }

  setTimeout(function(){
    document.getElementById('body').classList.remove('crosshair')
    document.getElementById('difficolta').innerHTML = 'Livello Intermedio';
    document.getElementById('difficolta').classList.remove('transparent')
  }, 25000 );
  setTimeout(function(){
    document.getElementById('difficolta').classList.add('transparent')
    document.getElementById('body').classList.add('crosshair')
  }, 27500 );

  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
  document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random)
      document.getElementById('bersaglio' + random).classList.add('rotate')
      document.getElementById('bersaglio' + random).classList.remove('transparent')
    }, 28500 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent')
    }, 28500 + 1000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate')
    }, 28500 + 1800 + (i * 2000));

    setTimeout(function(){
      random2 = Math.floor(Math.random() * 9 + 1);
      if (random == random2) {
        random2++;
        if (random2 == 10) {
          random2 = 8;
        }
      }
  document.getElementById('bersaglio' + random2).classList.remove('bersaglio-colpito-' + random2)
      document.getElementById('bersaglio' + random2).classList.add('rotate')
      document.getElementById('bersaglio' + random2).classList.remove('transparent')
    }, 28500 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.add('transparent')
    }, 28500 + 1000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.remove('rotate')
    }, 28500 + 1800 + (i * 2000));

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
  document.getElementById('bersaglio' + random3).classList.remove('bersaglio-colpito-' + random3)
      document.getElementById('bersaglio' + random3).classList.add('rotate')
      document.getElementById('bersaglio' + random3).classList.remove('transparent')
    }, 28500 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.add('transparent')
    }, 28500 + 1000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.remove('rotate')
    }, 28500 + 1800 + (i * 2000));
  }

  setTimeout(function(){
    document.getElementById('body').classList.remove('crosshair')
    document.getElementById('difficolta').innerHTML = 'Livello Difficile';
    document.getElementById('difficolta').classList.remove('transparent')
  }, 55000);
  setTimeout(function(){
    document.getElementById('difficolta').classList.add('transparent')
    document.getElementById('body').classList.add('crosshair')
  }, 57500);

  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
  document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random)
      document.getElementById('bersaglio' + random).classList.add('rotate')
      document.getElementById('bersaglio' + random).classList.remove('transparent')
    }, 58500 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent')
    }, 58500 + 1000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate')
    }, 58500 + 1800 + (i * 2000));

    setTimeout(function(){
      random2 = Math.floor(Math.random() * 9 + 1);
      if (random == random2) {
        random2++;
        if (random2 == 10) {
          random2 = 8;
        }
      }
  document.getElementById('bersaglio' + random2).classList.remove('bersaglio-colpito-' + random2)
      document.getElementById('bersaglio' + random2).classList.add('rotate')
      document.getElementById('bersaglio' + random2).classList.remove('transparent')
    }, 58500 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.add('transparent')
    }, 58500 + 1000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.remove('rotate')
    }, 58500 + 1800 + (i * 2000));

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
  document.getElementById('bersaglio' + random3).classList.remove('bersaglio-colpito-' + random3)
      document.getElementById('bersaglio' + random3).classList.add('rotate')
      document.getElementById('bersaglio' + random3).classList.remove('transparent')
    }, 58500 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.add('transparent')
    }, 58500 + 1000 + (i * 2000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.remove('rotate')
    }, 58500 + 1800 + (i * 2000));
  }

});
document.getElementById('bersaglio1').addEventListener('click',
function() {
  document.getElementById('bersaglio1').classList.add('bersaglio-colpito-1');
  document.getElementById('overlay').classList.remove('bang');
  setTimeout(function(){
    document.getElementById('overlay').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('overlay').classList.remove('bang');
  }, 300);
});

document.getElementById('bersaglio2').addEventListener('click',
function() {
  document.getElementById('bersaglio2').classList.add('bersaglio-colpito-2');
  document.getElementById('overlay').classList.remove('bang');
  setTimeout(function(){
    document.getElementById('overlay').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('overlay').classList.remove('bang');
  }, 300);

});
document.getElementById('bersaglio3').addEventListener('click',
function() {
  document.getElementById('bersaglio3').classList.add('bersaglio-colpito-3');
  document.getElementById('overlay').classList.remove('bang');
  setTimeout(function(){
    document.getElementById('overlay').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('overlay').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio4').addEventListener('click',
function() {
  document.getElementById('bersaglio4').classList.add('bersaglio-colpito-4');
  document.getElementById('overlay').classList.remove('bang');
  setTimeout(function(){
    document.getElementById('overlay').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('overlay').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio5').addEventListener('click',
function() {
  document.getElementById('bersaglio5').classList.add('bersaglio-colpito-5');
  document.getElementById('overlay').classList.remove('bang');
  setTimeout(function(){
    document.getElementById('overlay').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('overlay').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio6').addEventListener('click',
function() {
  document.getElementById('bersaglio6').classList.add('bersaglio-colpito-6');
  document.getElementById('overlay').classList.remove('bang');
  setTimeout(function(){
    document.getElementById('overlay').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('overlay').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio7').addEventListener('click',
function() {
  document.getElementById('bersaglio7').classList.add('bersaglio-colpito-7');
  document.getElementById('overlay').classList.remove('bang');
  setTimeout(function(){
    document.getElementById('overlay').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('overlay').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio8').addEventListener('click',
function() {
  document.getElementById('bersaglio8').classList.add('bersaglio-colpito-8');
  document.getElementById('overlay').classList.remove('bang');
  setTimeout(function(){
    document.getElementById('overlay').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('overlay').classList.remove('bang');
  }, 300);

});

document.getElementById('bersaglio9').addEventListener('click',
function() {
  document.getElementById('bersaglio9').classList.add('bersaglio-colpito-9');
  document.getElementById('overlay').classList.remove('bang');
  setTimeout(function(){
    document.getElementById('overlay').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('overlay').classList.remove('bang');
  }, 300);

});
