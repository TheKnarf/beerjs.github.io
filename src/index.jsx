---
route: index.html
---

import { dom } from 'isomorphic-jsx';
import Logo from './components/logo';
import Layout from './components/layout';
import coverImage from './assets/cover.jpeg';

const Header = () => <header class="masthead mb-auto">
	<div class="inner">
		<h3 class="masthead-brand">
			<Logo style={{ height: '2em' }} />
			<span>BeerJs</span>
		</h3>
		<nav class="nav nav-masthead justify-content-center">
			<a class="nav-link active" href="#">Home</a>
			<a class="nav-link" href="blog/">Blog</a>
			<a class="nav-link" href="locations/">Locations</a>
			<a class="nav-link" href="about/">About</a>
		</nav>
	</div>
</header>;

const Footer = () => <footer class="mastfoot mt-auto">
	<div class="inner">
		<p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>. Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a> on Unsplash.</p>
	</div>
</footer>;

const page = () => <Layout>
	<body class="text-center" style={{
		'background-image': `url(${coverImage})`,
		'background-repeat': 'no-repeat',
		'background-size': 'cover'
	}}>
		<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
			<Header />

			<main role="main" class="inner cover">
				<h1 class="cover-heading">Cover title</h1>
				<p class="lead">Here goes some text about beerjs</p>
				<p class="lead">
					<a href="#" class="btn btn-lg btn-secondary">Learn more</a>
				</p>
			</main>

			<Footer />
		</div>
	</body>
</Layout>;

export default page;
