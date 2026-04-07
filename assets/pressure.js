window.SUC = window.SUC || {};
SUC.PRESSURE = {
  pa2kpa:   { from:'Pascal', to:'Kilopascal', convert:v=>v/1000 },
  pa2mpa:   { from:'Pascal', to:'Megapascal', convert:v=>v/1e6 },
  pa2bar:   { from:'Pascal', to:'Bar',        convert:v=>v/100000 },
  pa2atm:   { from:'Pascal', to:'Atmosphere', convert:v=>v/101325 },
  pa2psi:   { from:'Pascal', to:'PSI',        convert:v=>v*0.000145038 },
  pa2mmhg:  { from:'Pascal', to:'mmHg',       convert:v=>v*0.00750062 }
};
