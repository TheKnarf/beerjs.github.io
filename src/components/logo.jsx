import { dom } from 'isomorphic-jsx';
import svg from '../assets/beerjs.svg';

export default ({ relativeLocation = '.', ...props }) =>
	<img
		src={[relativeLocation, svg].join('/')}
		alt="BeerJS Logo"
		{...props}
		/>;
