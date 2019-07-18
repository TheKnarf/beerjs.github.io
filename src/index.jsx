---
route: index.html
---

import { dom } from 'isomorphic-jsx';
import Layout from './components/layout';
import coverImage from './assets/cover.jpeg';
import Header from './components/header';
import Footer from './components/footer';

export default () => <Layout relativeLocation='.'>
	<body class="text-center" style={{
		'background-image': `url(${coverImage})`,
		'background-repeat': 'no-repeat',
		'background-size': 'cover'
	}}>
		<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
			<Header relativeLocation='.' />

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
