'use strict';

let filmsNanars = [
    { titre: "The Room", annee: 2003 },
    { titre: "Troll 2", annee: 1990 },
    { titre: "Birdemic: Shock and Terror", annee: 2010 },
    { titre: "Plan 9 from Outer Space", annee: 1959 },
    { titre: "Manos: The Hands of Fate", annee: 1966 }
  ];
  filmsNanars.push({titre:'dzdzd'})
  filmsNanars.shift({titre:'qsdsqd'})
  console.table(filmsNanars);
  
  
  filmsNanars.sort();
  console.log(filmsNanars);



let filtrefilms = filmsNanars.filter(function(film) {
  return film.annee === 1966;
});

console.table(filtrefilms)

