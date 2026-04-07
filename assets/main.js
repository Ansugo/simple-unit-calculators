window.SUC = window.SUC || {};

document.addEventListener('DOMContentLoaded', () => {

  // TÜM KATEGORİLER YÜKLENDİKTEN SONRA
  SUC.CONVERSIONS = Object.assign({},
    SUC.ANGLE        || {},
    SUC.ENERGY       || {},
    SUC.ACCELERATION || {},
    SUC.LENGTH       || {},
    SUC.AREA         || {},
    SUC.TEMPERATURE  || {},
    SUC.PRESSURE     || {},
    SUC.MASS         || {},
    SUC.TIME         || {},
    SUC.ELECTRIC     || {},
    SUC.VOLUME       || {},
    SUC.FREQUENCY    || {},
    SUC.POWER        || {},
    SUC.MAGNETIC     || {},
    SUC.PHOTOMETRY   || {},
    SUC.RADIATION    || {},
    SUC.FLOW         || {},
    SUC.ANGULAR      || {}
  );

  document.querySelectorAll('.suc-calculator').forEach(el => {

    const type = el.dataset.type;
    const cfg = SUC.CONVERSIONS[type];

    if (!cfg) {
      console.error('Calculator not found:', type);
      return;
    }

    el.innerHTML = `
      <input type="number" class="suc-input">
	  <label>${cfg.from}</label>
      <button type="button">Calculate</button>
      <input type="text" class="suc-output" readonly>
	  <label>${cfg.to}</label>
    `;

    const input  = el.querySelector('.suc-input');
    const output = el.querySelector('.suc-output');

    el.querySelector('button').addEventListener('click', () => {
      const v = parseFloat(input.value);
      output.value = isNaN(v) ? '' : cfg.convert(v);
    });

  });

});
