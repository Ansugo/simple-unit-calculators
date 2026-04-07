window.SUC = window.SUC || {};
SUC.TEMPERATURE = {
  c2f:{ from:'Celsius', to:'Fahrenheit', convert:v=>(v*9/5)+32 },
  f2c:{ from:'Fahrenheit', to:'Celsius', convert:v=>(v-32)*5/9 },
  c2k:{ from:'Celsius', to:'Kelvin',     convert:v=>v+273.15 },
  k2c:{ from:'Kelvin', to:'Celsius',     convert:v=>v-273.15 }
};
