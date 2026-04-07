window.SUC = window.SUC || {};
SUC.ELECTRIC = {
  v2mv:  { from:'Volt', to:'Millivolt', convert:v=>v*1000 },
  v2kv:  { from:'Volt', to:'Kilovolt',  convert:v=>v/1000 },

  a2ma:  { from:'Ampere', to:'Milliampere', convert:v=>v*1000 },

  w2kw:  { from:'Watt', to:'Kilowatt', convert:v=>v/1000 },

  wh2kwh:{ from:'Watt-hour', to:'Kilowatt-hour', convert:v=>v/1000 },

  ohm2kohm:{ from:'Ohm', to:'Kiloohm', convert:v=>v/1000 }
};
