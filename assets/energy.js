window.SUC = window.SUC || {};
SUC.ENERGY = {
  j2cal:  { from:'Joule', to:'Calorie',     convert:v=>v/4.184 },
  cal2j:  { from:'Calorie', to:'Joule',     convert:v=>v*4.184 },
  j2kcal: { from:'Joule', to:'Kilocalorie', convert:v=>v/4184 },
  j2wh:   { from:'Joule', to:'Watt-hour',   convert:v=>v/3600 }
};
