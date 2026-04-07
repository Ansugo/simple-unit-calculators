window.SUC = window.SUC || {};
SUC.POWER = {
  w2kw:   { from:'Watt', to:'Kilowatt',   convert:v=>v/1000 },
  w2mw:   { from:'Watt', to:'Megawatt',   convert:v=>v/1e6 },
  hp2w:   { from:'Horsepower', to:'Watt', convert:v=>v*745.699872 },

  wh2j:   { from:'Watt-hour', to:'Joule', convert:v=>v*3600 },
  kwh2j:  { from:'Kilowatt-hour', to:'Joule', convert:v=>v*3.6e6 }
};
