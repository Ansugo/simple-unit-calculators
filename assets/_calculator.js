const CONVERSIONS = {

  /* =====================
     ANGLE (base: Degree)
  ===================== */
  deg2rad: { from: 'Degree', to: 'Radian', factor: Math.PI / 180 },
  deg2grad: { from: 'Degree', to: 'Gradian', factor: 200 / 180 },
  deg2turn: { from: 'Degree', to: 'Turn', factor: 1 / 360 },
  deg2arcmin: { from: 'Degree', to: 'Arcminute', factor: 60 },
  deg2arcsec: { from: 'Degree', to: 'Arcsecond', factor: 3600 },

  /* =====================
     AREA (base: Square meter)
  ===================== */
  m22dm2: { from: 'm²', to: 'dm²', factor: 100 },
  m22cm2: { from: 'm²', to: 'cm²', factor: 10000 },
  m22mm2: { from: 'm²', to: 'mm²', factor: 1000000 },
  m22km2: { from: 'm²', to: 'km²', factor: 1e-6 },
  m22are: { from: 'm²', to: 'Are', factor: 0.01 },
  m22decare: { from: 'm²', to: 'Decare', factor: 0.001 },
  m22hectare: { from: 'm²', to: 'Hectare', factor: 0.0001 },
  m22acre: { from: 'm²', to: 'Acre', factor: 0.000247105 },

  /* =====================
     LENGTH (base: Meter)
  ===================== */
  m2mm: { from: 'Meter', to: 'Millimeter', factor: 1000 },
  m2cm: { from: 'Meter', to: 'Centimeter', factor: 100 },
  m2km: { from: 'Meter', to: 'Kilometer', factor: 0.001 },
  m2inch: { from: 'Meter', to: 'Inch', factor: 39.3701 },
  m2feet: { from: 'Meter', to: 'Feet', factor: 3.28084 },
  m2yard: { from: 'Meter', to: 'Yard', factor: 1.09361 },
  m2mile: { from: 'Meter', to: 'Mile', factor: 0.000621371 },
  m2nauticalmile: { from: 'Meter', to: 'Nautical mile', factor: 0.000539957 },

  /* =====================
     SPEED (base: m/s)
  ===================== */
  mps2kmph: { from: 'm/s', to: 'km/h', factor: 3.6 },
  mps2mph: { from: 'm/s', to: 'mile/h', factor: 2.23694 },
  mps2knot: { from: 'm/s', to: 'knot', factor: 1.94384 },
  mps2fps: { from: 'm/s', to: 'ft/s', factor: 3.28084 },

  /* =====================
     ACCELERATION (base: m/s²)
  ===================== */
  mps22cmps2: { from: 'm/s²', to: 'cm/s²', factor: 100 },
  mps22mmps2: { from: 'm/s²', to: 'mm/s²', factor: 1000 },
  mps22gal: { from: 'm/s²', to: 'Gal', factor: 100 },
  mps22mgal: { from: 'm/s²', to: 'mGal', factor: 100000 },
  mps22g: { from: 'm/s²', to: 'G', factor: 1 / 9.80665 },
  mps22ftps2: { from: 'm/s²', to: 'ft/s²', factor: 3.28084 },
  mps22inps2: { from: 'm/s²', to: 'in/s²', factor: 39.3701 },

  /* =====================
     ENERGY (base: Joule)
  ===================== */
  j2cal: { from: 'Joule', to: 'Calorie', factor: 1 / 4.184 },
  j2kcal: { from: 'Joule', to: 'Kilocalorie', factor: 1 / 4184 },
  j2wh: { from: 'Joule', to: 'Watt-hour', factor: 1 / 3600 },
  j2ev: { from: 'Joule', to: 'Electronvolt', factor: 6.241509e18 }

};


/* =====================
   AUTO REVERSE
===================== */
Object.keys(CONVERSIONS).forEach(key => {
  if (!key.includes('2')) return;

  const [a, b] = key.split('2');
  const reverse = `${b}2${a}`;

  if (CONVERSIONS[reverse]) return;

  const cfg = CONVERSIONS[key];
  CONVERSIONS[reverse] = {
    from: cfg.to,
    to: cfg.from,
    factor: 1 / cfg.factor
  };
});


/* =====================
   RENDER (DEĞİŞMEDİ)
===================== */
document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.suc-calculator').forEach(el => {

    const type = el.dataset.type;
    const cfg = CONVERSIONS[type];
    if (!cfg) return;

    el.innerHTML = `
      <label>${cfg.from}</label>
      <input type="number" class="suc-input">
      <button type="button">Calculate</button>
      <label>${cfg.to}</label>
      <input type="text" class="suc-output" readonly>
    `;

    const input = el.querySelector('.suc-input');
    const output = el.querySelector('.suc-output');
    const btn = el.querySelector('button');

    btn.addEventListener('click', () => {
      const v = parseFloat(input.value);
      if (isNaN(v)) {
        output.value = '';
        return;
      }
      output.value = (v * cfg.factor).toFixed(6);
    });

  });

});
