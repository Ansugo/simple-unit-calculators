window.SUC = window.SUC || {};
SUC.ANGULAR = {

  /* Angular velocity */
  rps2rpm: { from:'rad/s', to:'RPM', convert:v=>v*60/(2*Math.PI) },
  rpm2rps: { from:'RPM', to:'rad/s', convert:v=>v*(2*Math.PI)/60 },

  /* Angular acceleration */
  rps22rpmps: { from:'rad/s²', to:'RPM/s', convert:v=>v*60/(2*Math.PI) }
};
