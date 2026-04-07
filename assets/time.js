window.SUC = window.SUC || {};
SUC.TIME = {
  s2ms:   { from:'Second', to:'Millisecond', convert:v=>v*1000 },
  s2min:  { from:'Second', to:'Minute',      convert:v=>v/60 },
  s2hour: { from:'Second', to:'Hour',        convert:v=>v/3600 },
  s2day:  { from:'Second', to:'Day',         convert:v=>v/86400 },
  min2hour:{ from:'Minute', to:'Hour',       convert:v=>v/60 }
};
