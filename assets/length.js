window.SUC = window.SUC || {};
SUC.LENGTH = {
  m2cm:{ from:'Meter', to:'Centimeter', convert:v=>v*100 },
  m2mm:{ from:'Meter', to:'Millimeter', convert:v=>v*1000 },
  m2km:{ from:'Meter', to:'Kilometer',  convert:v=>v/1000 },
  m2mile:{ from:'Meter', to:'Mile',      convert:v=>v*0.000621371 },
  m2inch:{ from:'Meter', to:'Inch',      convert:v=>v*39.3701 }
};
