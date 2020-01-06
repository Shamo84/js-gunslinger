var random;
var random2;
var random3;
var randomcute;
var score = 0;
var topscore = 0;
var colpisparati = 0;
var colpiasegno = 0;
var babykiller = 0;
var targetssofar = 0;
var i = 0;

document.getElementById('gioca').addEventListener('click',
function() {

  document.getElementById('mirino-insanguinato').classList.add('big');
  document.getElementById('mirino-insanguinato').classList.add('bang');
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
    document.getElementById('titolo').classList.add('sparizione');
    document.getElementById('gioca').classList.add('sparizione');
    document.getElementById('istruzioni').classList.add('sparizione');
  }, 1000);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.remove('big', 'sparizione');
    document.getElementById('titolo').classList.add('hidden');
    document.getElementById('gioca').classList.add('hidden');
    document.getElementById('istruzioni').classList.add('hidden');
    document.getElementById('score').classList.remove('hidden');
    document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
    document.getElementById('counter').classList.remove('hidden');
  }, 1800);
  document.getElementById('sipariotop').classList.add('sipario-top');
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
  document.getElementById('bersaglio10').classList.add('animazione-sx-cat');
  document.getElementById('bersaglio11').classList.add('animazione-dx-bird');
  document.getElementById('bersaglio12').classList.add('animazione-sx-cat');
  document.getElementById('bersaglio13').classList.add('animazione-dx-bird');
  document.getElementById('bersaglio14').classList.add('animazione-sx-cat');
  document.getElementById('bersaglio15').classList.add('animazione-dx-bird');
  document.getElementById('overlay').classList.add('hidden');

// LIVELLO FACILE
  setTimeout(function(){
    document.getElementById('difficolta').innerHTML = 'Facile';
    document.getElementById('difficolta').classList.remove('transparent');
  }, 1500);
  setTimeout(function(){
    document.getElementById('difficolta').classList.add('transparent');
    document.getElementById('body').classList.add('crosshair');
    document.getElementById('overlay').classList.remove('hidden');
  }, 3500);

  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
      targetssofar += 2;
      document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
      document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random);
      document.getElementById('bersaglio' + random).classList.add('rotate');
      document.getElementById('bersaglio' + random).classList.remove('transparent');
      document.getElementById('bersaglio' + random).classList.remove('hidden');
      randomcute = Math.floor(Math.random() * 6 + 10);
      document.getElementById('bersaglio' + randomcute).classList.remove('bersaglio-colpito-' + randomcute);
      document.getElementById('bersaglio' + randomcute).classList.add('rotate');
      document.getElementById('bersaglio' + randomcute).classList.remove('transparent');
      document.getElementById('bersaglio' + randomcute).classList.remove('hidden');
    }, 4500 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent');
      document.getElementById('bersaglio' + random).classList.add('hidden');
      document.getElementById('bersaglio' + randomcute).classList.add('transparent');
      document.getElementById('bersaglio' + randomcute).classList.add('hidden');
    }, 4500 + 2000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate');
      document.getElementById('bersaglio' + randomcute).classList.remove('rotate');
    }, 4500 + 2800 + (i * 3000));
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
    }, 4500 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.add('transparent');
      document.getElementById('bersaglio' + random2).classList.add('hidden');
    }, 4500 + 2000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.remove('rotate');
    }, 4500 + 2800 + (i * 3000));
  }

// LIVELLO INTERMEDIO
  setTimeout(function(){
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('body').classList.remove('crosshair');
    document.getElementById('difficolta').innerHTML = 'Intermedio';
    document.getElementById('difficolta').classList.remove('transparent');
  }, 35500 );
  setTimeout(function(){
    document.getElementById('difficolta').classList.add('transparent');
    document.getElementById('body').classList.add('crosshair');
    document.getElementById('overlay').classList.remove('hidden');
  }, 37500 );

  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
      targetssofar += 3;
      document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
      document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random);
      document.getElementById('bersaglio' + random).classList.add('rotate');
      document.getElementById('bersaglio' + random).classList.remove('transparent');
      document.getElementById('bersaglio' + random).classList.remove('hidden');
      randomcute = Math.floor(Math.random() * 6 + 10);
      document.getElementById('bersaglio' + randomcute).classList.remove('bersaglio-colpito-' + randomcute);
      document.getElementById('bersaglio' + randomcute).classList.add('rotate');
      document.getElementById('bersaglio' + randomcute).classList.remove('transparent');
      document.getElementById('bersaglio' + randomcute).classList.remove('hidden');
    }, 38500 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent');
      document.getElementById('bersaglio' + random).classList.add('hidden');
      document.getElementById('bersaglio' + randomcute).classList.add('transparent');
      document.getElementById('bersaglio' + randomcute).classList.add('hidden');
    }, 38500 + 2000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate');
      document.getElementById('bersaglio' + randomcute).classList.remove('rotate');
    }, 38500 + 2800 + (i * 3000));

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
    }, 38500 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.add('transparent');
      document.getElementById('bersaglio' + random2).classList.add('hidden');
    }, 38500 + 2000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.remove('rotate');
    }, 38500 + 2800 + (i * 3000));

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
    }, 38500 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.add('transparent');
      document.getElementById('bersaglio' + random3).classList.add('hidden');
    }, 38500 + 2000 + (i * 3000));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.remove('rotate');
    }, 38500 + 2800 + (i * 3000));
  }

// LIVELLO DIFFICILE
  setTimeout(function(){
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('body').classList.remove('crosshair');
    document.getElementById('difficolta').innerHTML = 'Difficile';
    document.getElementById('difficolta').classList.remove('transparent');
  }, 69500);
  setTimeout(function(){
    document.getElementById('difficolta').classList.add('transparent');
    document.getElementById('body').classList.add('crosshair');
    document.getElementById('overlay').classList.remove('hidden');
  }, 71500);

  for (var i = 0; i <=9; i++) {
    setTimeout(function(){
      random = Math.floor(Math.random() * 9 + 1);
      targetssofar += 3;
      document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
      document.getElementById('bersaglio' + random).classList.remove('bersaglio-colpito-' + random);
      document.getElementById('bersaglio' + random).classList.add('rotate');
      document.getElementById('bersaglio' + random).classList.remove('transparent');
      document.getElementById('bersaglio' + random).classList.remove('hidden');
      randomcute = Math.floor(Math.random() * 6 + 10);
      document.getElementById('bersaglio' + randomcute).classList.remove('bersaglio-colpito-' + randomcute);
      document.getElementById('bersaglio' + randomcute).classList.add('rotate');
      document.getElementById('bersaglio' + randomcute).classList.remove('transparent');
      document.getElementById('bersaglio' + randomcute).classList.remove('hidden');
    }, 72500 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.add('transparent');
      document.getElementById('bersaglio' + random).classList.add('hidden');
      document.getElementById('bersaglio' + randomcute).classList.add('transparent');
      document.getElementById('bersaglio' + randomcute).classList.add('hidden');

    }, 72500 + 1500 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random).classList.remove('rotate');
      document.getElementById('bersaglio' + randomcute).classList.remove('rotate');
    }, 72500 + 2300 + (i * 2500));

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

    }, 72500 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.add('transparent');
      document.getElementById('bersaglio' + random2).classList.add('hidden');

    }, 72500 + 1500 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random2).classList.remove('rotate');
    }, 72500 + 2300 + (i * 2500));

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

    }, 72500 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.add('transparent');
      document.getElementById('bersaglio' + random3).classList.add('hidden');

    }, 72500 + 1500 + (i * 2500));
    setTimeout(function(){
      document.getElementById('bersaglio' + random3).classList.remove('rotate');
    }, 72500 + 2300 + (i * 2500));
  }

// FINE PARTITA
  setTimeout(function(){
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('body').classList.remove('crosshair');
    document.getElementById('difficolta').innerHTML = 'Game Over';
    document.getElementById('difficolta').classList.remove('transparent');
  }, 99000);
  setTimeout(function(){
    document.getElementById('sipariotop').classList.add('sipario-top-chiusura');
    document.getElementById('sipariodx').classList.add('sipario-dx-chiusura');
    document.getElementById('sipariosx').classList.add('sipario-sx-chiusura');
  }, 101000);
  setTimeout(function(){
    if (score > topscore) {
      topscore = score;
      document.getElementById('resoconto-testo').innerHTML = "Bravo, hai superato il tuo punteggio massimo!";
      document.getElementById('ok2').classList.add('display-none');
      document.getElementById('topscore').innerHTML = "Top Score: " + topscore;
      document.getElementById('topscore').classList.add("score-update");
      setTimeout(function(){
        console.log(i);
        document.getElementById('resoconto-testo').classList.add("sparizione");
      }, 2000);
      setTimeout(function(){
        console.log(i);
        document.getElementById('ok2').classList.remove('display-none');
        document.getElementById('resoconto-testo').innerHTML = "Hai totalizzato " + score + " punti, sparando " + colpisparati + " colpi, di cui " + colpiasegno + " sono andati a segno e hai ucciso " + babykiller + " animali pucciosi!";
        document.getElementById('resoconto-testo').classList.remove("sparizione");
      }, 3000);
    } else {
        document.getElementById('resoconto-testo').innerHTML = "Hai totalizzato " + score + " punti, sparando " + colpisparati + " colpi, di cui " + colpiasegno + " sono andati a segno e hai ucciso " + babykiller + " animali pucciosi!";
        document.getElementById('resoconto-testo').classList.remove("sparizione");
      }
    document.getElementById('resoconto').classList.remove('sparizione', 'hidden');
    document.getElementById('difficolta').classList.add('transparent');
    document.getElementById('overlay').classList.remove('hidden');
  }, 104000);
});


document.getElementById('bersaglio1').addEventListener('click',
function() {
  score += 100;
  colpisparati++;
  colpiasegno++;
  document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio1').classList.add('bersaglio-colpito-1');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-esplosivo').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-esplosivo').classList.add('sparizione');
    document.getElementById('mirino-esplosivo').classList.remove('bang');
  }, 300);

});
document.getElementById('bersaglio2').addEventListener('click',
function() {
  score += 100;
  colpisparati++;
  colpiasegno++;
  document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio2').classList.add('bersaglio-colpito-2');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-esplosivo').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-esplosivo').classList.add('sparizione');
    document.getElementById('mirino-esplosivo').classList.remove('bang');
  }, 300);

});
document.getElementById('bersaglio3').addEventListener('click',
function() {
  score += 100;
  colpisparati++;
  colpiasegno++;
  document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio3').classList.add('bersaglio-colpito-3');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-esplosivo').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-esplosivo').classList.add('sparizione');
    document.getElementById('mirino-esplosivo').classList.remove('bang');
  }, 300);
});

document.getElementById('bersaglio4').addEventListener('click',
function() {
  score += 100;
  colpisparati++;
  colpiasegno++;
  document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('bersaglio4').classList.add('bersaglio-colpito-4');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);
  setTimeout(function(){
    document.getElementById('score').innerHTML = 'Score: ' + score;
  }, 1000);
});

document.getElementById('bersaglio5').addEventListener('click',
function() {
  score += 100;
  colpisparati++;
  colpiasegno++;
  document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio5').classList.add('bersaglio-colpito-5');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);

});
document.getElementById('bersaglio6').addEventListener('click',
function() {
  score += 100;
  colpisparati++;
  colpiasegno++;
  document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio6').classList.add('bersaglio-colpito-6');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);

});
document.getElementById('bersaglio7').addEventListener('click',
function() {
  score += 100;
  colpisparati++;
  colpiasegno++;
  document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio7').classList.add('bersaglio-colpito-7');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);

});
document.getElementById('bersaglio8').addEventListener('click',
function() {
  score += 100;
  colpisparati++;
  colpiasegno++;
  document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio8').classList.add('bersaglio-colpito-8');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);

});
document.getElementById('bersaglio9').addEventListener('click',
function() {
  score += 100;
  colpisparati++;
  colpiasegno++;
  document.getElementById('counter').innerHTML = "Bersagli Colpiti: " + colpiasegno + " / " + targetssofar ;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio9').classList.add('bersaglio-colpito-9');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-insanguinato').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-insanguinato').classList.add('sparizione');
    document.getElementById('mirino-insanguinato').classList.remove('bang');
  }, 300);
});

document.getElementById('bersaglio10').addEventListener('click',
function() {
  score -= 100;
  babykiller++;
  colpisparati++;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio10').classList.add('bersaglio-colpito-10');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-sad').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-sad').classList.add('sparizione');
    document.getElementById('mirino-sad').classList.remove('bang');
  }, 300);
});
document.getElementById('bersaglio11').addEventListener('click',
function() {
  score -= 100;
  babykiller++;
  colpisparati++;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio11').classList.add('bersaglio-colpito-11');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-sad').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-sad').classList.add('sparizione');
    document.getElementById('mirino-sad').classList.remove('bang');
  }, 300);
});
document.getElementById('bersaglio12').addEventListener('click',
function() {
  score -= 100;
  babykiller++;
  colpisparati++;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio12').classList.add('bersaglio-colpito-12');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-sad').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-sad').classList.add('sparizione');
    document.getElementById('mirino-sad').classList.remove('bang');
  }, 300);
});
document.getElementById('bersaglio13').addEventListener('click',
function() {
  score -= 100;
  babykiller++;
  colpisparati++;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio13').classList.add('bersaglio-colpito-13');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-sad').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-sad').classList.add('sparizione');
    document.getElementById('mirino-sad').classList.remove('bang');
  }, 300);
});
document.getElementById('bersaglio14').addEventListener('click',
function() {
  score -= 100;
  babykiller++;
  colpisparati++;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio14').classList.add('bersaglio-colpito-14');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-sad').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-sad').classList.add('sparizione');
    document.getElementById('mirino-sad').classList.remove('bang');
  }, 300);
});
document.getElementById('bersaglio15').addEventListener('click',
function() {
  score -= 100;
  babykiller++;
  colpisparati++;
  document.getElementById('score').classList.remove('score-update');
  document.getElementById('score').innerHTML = 'Score: ' + score;
  document.getElementById('bersaglio15').classList.add('bersaglio-colpito-15');
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('score').classList.add('score-update');
    document.getElementById('mirino-sad').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino-sad').classList.add('sparizione');
    document.getElementById('mirino-sad').classList.remove('bang');
  }, 300);
});

document.getElementById('overlay').addEventListener('click',
function() {
  colpisparati++;
  document.getElementById('mirino').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-insanguinato').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-esplosivo').classList.remove('bang', 'sparizione');
  document.getElementById('mirino-sad').classList.remove('bang', 'sparizione');
  setTimeout(function(){
    document.getElementById('mirino').classList.add('bang');
  }, 100);
  setTimeout(function(){
    document.getElementById('mirino').classList.add('sparizione');
    document.getElementById('mirino').classList.remove('bang');
  }, 300);

});
document.getElementById('istruzioni').addEventListener('click',
function() {
  document.getElementById('gioca').classList.add('hidden');
  document.getElementById('istruzioni').classList.add('hidden');
  document.getElementById('istruzioni-testo').classList.remove('sparizione', 'hidden');
});

document.getElementById('ok').addEventListener('click',
function() {
  document.getElementById('istruzioni-testo').classList.add('sparizione');
  document.getElementById('gioca').classList.remove('hidden');
  document.getElementById('istruzioni').classList.remove('hidden');
  setTimeout(function(){
  document.getElementById('gioca').classList.remove('hidden');
  document.getElementById('istruzioni').classList.remove('hidden');
  document.getElementById('istruzioni-testo').classList.add('hidden');
  }, 800);
});

document.getElementById('ok2').addEventListener('click',
function() {
  score = 0;
  colpisparati = 0;
  colpiasegno = 0;
  babykiller = 0;
  colpiasegno = 0;
  targetssofar = 0;
  i = 0;
  document.getElementById('resoconto').classList.add('sparizione');
  document.getElementById('bersaglio1').classList.remove('animazione-sx');
  document.getElementById('bersaglio2').classList.remove('animazione-centro');
  document.getElementById('bersaglio3').classList.remove('animazione-dx');
  document.getElementById('bersaglio4').classList.remove('animazione-sx');
  document.getElementById('bersaglio5').classList.remove('animazione-centro');
  document.getElementById('bersaglio6').classList.remove('animazione-dx');
  document.getElementById('bersaglio7').classList.remove('animazione-sx');
  document.getElementById('bersaglio8').classList.remove('animazione-centro');
  document.getElementById('bersaglio9').classList.remove('animazione-dx');
  document.getElementById('bersaglio10').classList.remove('animazione-sx-cat');
  document.getElementById('bersaglio11').classList.remove('animazione-dx-bird');
  document.getElementById('bersaglio12').classList.remove('animazione-sx-cat');
  document.getElementById('bersaglio13').classList.remove('animazione-dx-bird');
  document.getElementById('bersaglio14').classList.remove('animazione-sx-cat');
  document.getElementById('bersaglio15').classList.remove('animazione-dx-bird');
  setTimeout(function(){
    document.getElementById('score').classList.add('hidden');
    document.getElementById('counter').classList.add('hidden');
    document.getElementById('gioca').className = "gioca";
    document.getElementById('istruzioni').className = "istruzioni";
    document.getElementById('resoconto').classList.add('hidden');
    document.getElementById('titolo').className = "titolo";
    document.getElementById('sipariotop').className = "";
    document.getElementById('sipariodx').className = "";
    document.getElementById('sipariosx').className = "";
    document.getElementById('score').className = "score hidden";
    document.getElementById('score').innerHTML = "Score: ";
    document.getElementById('topscore').className = "topscore";
    document.getElementById('mirino').className = "mirino";
    document.getElementById('mirino-insanguinato').className = "mirino-insanguinato";
    document.getElementById('mirino-esplosivo').className = "mirino-esplosivo";
    document.getElementById('mirino-sad').className = "mirino-sad";
  }, 500);
});
