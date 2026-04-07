window.SUC = window.SUC || {};
SUC.MASS = {
  kg2g:   { from:'Kilogram', to:'Gram',       convert:v=>v*1000 },
  kg2mg:  { from:'Kilogram', to:'Milligram',  convert:v=>v*1e6 },
  kg2ton: { from:'Kilogram', to:'Tonne',      convert:v=>v/1000 },
  kg2lb:  { from:'Kilogram', to:'Pound',      convert:v=>v*2.20462 },
  kg2oz:  { from:'Kilogram', to:'Ounce',      convert:v=>v*35.274 }
};
