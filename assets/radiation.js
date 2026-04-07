window.SUC = window.SUC || {};
SUC.RADIATION = {
  bq2kbq: { from:'Becquerel', to:'Kilobecquerel', convert:v=>v/1000 },
  bq2mbq: { from:'Becquerel', to:'Megabecquerel', convert:v=>v/1e6 },

  gy2rad: { from:'Gray', to:'Rad', convert:v=>v*100 },
  sv2rem: { from:'Sievert', to:'Rem', convert:v=>v*100 }
};
