 
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents}) => {
  addComponents({
    '.accordion-item': {
			'display': 'flex',
			'flex-direction': 'column',
		},
		'.accordion-toggle': {
			'display': 'flex',
			'flex-grow': '1',
			'align-items': 'center',
			'text-align': 'start',
			'justify-content': 'space-between',
		},
		'.accordion-content': {
			'transition': 'height 300ms ease',
			'overflow': 'hidden',
			'.accordion.active &': {
				'display': 'block',
				'transition': 'height 300ms ease'
			}
		}
  });   
});