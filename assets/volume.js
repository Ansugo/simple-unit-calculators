window.SUC = window.SUC || {};
SUC.VOLUME = {
  m32l:    { from:'Cubic meter', to:'Liter',      convert:v=>v*1000 },
  m32ml:   { from:'Cubic meter', to:'Milliliter', convert:v=>v*1e6 },
  m32cm3:  { from:'Cubic meter', to:'cm³',        convert:v=>v*1e6 },
  l2ml:    { from:'Liter', to:'Milliliter',       convert:v=>v*1000 },
  l2gal:   { from:'Liter', to:'Gallon (US)',      convert:v=>v*0.264172 },
  l2pt:    { from:'Liter', to:'Pint (US)',        convert:v=>v*2.11338 }
};
