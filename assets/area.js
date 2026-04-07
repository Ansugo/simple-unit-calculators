window.SUC = window.SUC || {};
SUC.AREA = {
  m22cm2:{ from:'m²', to:'cm²', convert:v=>v*10000 },
  m22mm2:{ from:'m²', to:'mm²', convert:v=>v*1000000 },
  m22km2:{ from:'m²', to:'km²', convert:v=>v/1e6 },
  m22hectare:{ from:'m²', to:'Hectare', convert:v=>v/10000 }
};
