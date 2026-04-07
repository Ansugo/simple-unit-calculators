window.SUC = window.SUC || {};
SUC.PHOTOMETRY = {
  lm2cd:   { from:'Lumen', to:'Candela', convert:v=>v/(4*Math.PI) },
  cd2lm:   { from:'Candela', to:'Lumen', convert:v=>v*(4*Math.PI) },

  lx2klx:  { from:'Lux', to:'Kilolux',   convert:v=>v/1000 },
  lx2fc:   { from:'Lux', to:'Foot-candle', convert:v=>v*0.092903 }
};
