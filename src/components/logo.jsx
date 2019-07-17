import { dom } from 'isomorphic-jsx';
import svg from '../assets/beerjs.svg';

const Logo = ({ ...props }) =>
	<img src={svg} alt="BeerJS Logo" {...props} />;

export default Logo;
