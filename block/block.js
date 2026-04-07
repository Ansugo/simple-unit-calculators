(function (blocks, element, components) {

  const el = element.createElement;
  const SelectControl = components.SelectControl;

  blocks.registerBlockType('suc/calculator', {

    edit: function (props) {

      return el(
        'div',
        {},

        el(SelectControl, {
          label: 'Conversion Type',
          value: props.attributes.type,
          options: [
            /* ANGLE */
            { label: 'Degree → Radian', value: 'deg2rad' },
            { label: 'Radian → Degree', value: 'rad2deg' },

            /* AREA */
            { label: 'Decare → Hectare', value: 'decare2hectare' },

            /* ENERGY – JOULE */
            { label: 'Joule → Calorie', value: 'joule2calorie' },
            { label: 'Calorie → Joule', value: 'calorie2joule' },

            { label: 'Joule → Kilocalorie', value: 'joule2kcal' },
            { label: 'Kilocalorie → Joule', value: 'kcal2joule' },

            { label: 'Joule → Watt-hour', value: 'joule2wh' },
            { label: 'Watt-hour → Joule', value: 'wh2joule' },

            { label: 'Joule → Kilowatt-hour', value: 'joule2kwh' },
            { label: 'Kilowatt-hour → Joule', value: 'kwh2joule' },

            { label: 'Joule → BTU', value: 'joule2btu' },
            { label: 'BTU → Joule', value: 'btu2joule' },

            { label: 'Joule → Electronvolt', value: 'joule2ev' },
            { label: 'Electronvolt → Joule', value: 'ev2joule' },

            /* ENERGY – CALORIE */
            { label: 'Calorie → Kilocalorie', value: 'calorie2kcal' },
            { label: 'Kilocalorie → Calorie', value: 'kcal2calorie' },

            { label: 'Calorie → Watt-hour', value: 'calorie2wh' },
            { label: 'Watt-hour → Calorie', value: 'wh2calorie' },

            { label: 'Calorie → Kilowatt-hour', value: 'calorie2kwh' },
            { label: 'Kilowatt-hour → Calorie', value: 'kwh2calorie' },

            { label: 'Calorie → BTU', value: 'calorie2btu' },
            { label: 'BTU → Calorie', value: 'btu2calorie' },

            { label: 'Calorie → Electronvolt', value: 'calorie2ev' },
            { label: 'Electronvolt → Calorie', value: 'ev2calorie' }
          ],
          onChange: function (v) {
            props.setAttributes({ type: v });
          }
        })
      );
    },

    save: function (props) {
      return el('div', {
        className: 'suc-calculator',
        'data-type': props.attributes.type
      });
    }

  });

})(
  window.wp.blocks,
  window.wp.element,
  window.wp.components
);
