window.SUC = window.SUC || {};
SUC.MAGNETIC = {
  t2mt:  { from:'Tesla', to:'Millitesla', convert:v=>v*1000 },
  t2gauss:{ from:'Tesla', to:'Gauss',     convert:v=>v*10000 },

  wb2mwb:{ from:'Weber', to:'Milliweber', convert:v=>v*1000 },
  wb2mx: { from:'Weber', to:'Maxwell',    convert:v=>v*1e8 }
};
