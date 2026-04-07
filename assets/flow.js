window.SUC = window.SUC || {};
SUC.FLOW = {
  m3s2ls:   { from:'m³/s', to:'L/s',  convert:v=>v*1000 },
  m3s2lmin: { from:'m³/s', to:'L/min',convert:v=>v*60000 },

  ls2lmin:  { from:'L/s', to:'L/min', convert:v=>v*60 },
  ls2m3h:   { from:'L/s', to:'m³/h',  convert:v=>v*3.6 }
};
