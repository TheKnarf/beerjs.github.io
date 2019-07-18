import { dom } from 'isomorphic-jsx';
import Logo from './logo';

const Nav = ({ children }) =>
	<nav class="nav nav-masthead justify-content-center">
	{ children }
	</nav>;

const NavLink = ({ active = false, href, children }) =>
	active ? <a class="nav-link active" href={href}>{ children }</a>
			 : <a class="nav-link" href={href}>{ children }</a>;

export default ({ relativeLocation = '.', active=0 }) => <header class="masthead mb-auto">
	<div class="inner">
		<h3 class="masthead-brand">
			<Logo style={{ height: '2em' }} relativeLocation={relativeLocation} />
			<span>BeerJs</span>
		</h3>
		<Nav>
			<NavLink active={active == 0} href={[relativeLocation, "index.html"].join('/')}>Home</NavLink>
			<NavLink active={active == 1} href={[relativeLocation, "blog/"].join('/')}>Blog</NavLink>
			<NavLink active={active == 2} href={[relativeLocation, "locations/"].join('/')}>Locations</NavLink>
			<NavLink active={active == 3} href={[relativeLocation, "about/"].join('/')}>About</NavLink>
		</Nav>
	</div>
</header>;
