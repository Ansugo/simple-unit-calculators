window.SUC = window.SUC || {};
SUC.ANGLE = {
  deg2rad: { from:'Degree', to:'Radian', convert:v=>v*Math.PI/180 },
  rad2deg: { from:'Radian', to:'Degree', convert:v=>v*180/Math.PI },
  deg2grad:{ from:'Degree', to:'Gradian',convert:v=>v*200/180 },
  deg2turn:{ from:'Degree', to:'Turn',   convert:v=>v/360 }
};
