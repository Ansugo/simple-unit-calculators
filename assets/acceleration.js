window.SUC = window.SUC || {};
SUC.ACCELERATION = {
  mps22cmps2:{ from:'m/s²', to:'cm/s²', convert:v=>v*100 },
  mps22mmps2:{ from:'m/s²', to:'mm/s²', convert:v=>v*1000 },
  mps22gal:  { from:'m/s²', to:'Gal',   convert:v=>v*100 },
  mps22mgal: { from:'m/s²', to:'mGal',  convert:v=>v*100000 },
  mps22g:    { from:'m/s²', to:'G',     convert:v=>v/9.80665 },
  mps22ftps2:{ from:'m/s²', to:'ft/s²', convert:v=>v*3.28084 },
  mps22inps2:{ from:'m/s²', to:'in/s²', convert:v=>v*39.3701 }
};
