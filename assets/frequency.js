window.SUC = window.SUC || {};
SUC.FREQUENCY = {
  hz2khz: { from:'Hertz', to:'Kilohertz', convert:v=>v/1000 },
  hz2mhz: { from:'Hertz', to:'Megahertz', convert:v=>v/1e6 },
  hz2ghz: { from:'Hertz', to:'Gigahertz', convert:v=>v/1e9 },
  rpm2hz: { from:'RPM', to:'Hertz',       convert:v=>v/60 }
};
