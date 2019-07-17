---
route: index.html
---

import { dom } from 'isomorphic-jsx';
import Logo from './components/logo';
import Layout from './components/layout';

const page = () => <Layout>
	<h1> BeerJS </h1>
	<Logo style={{ width: '200px' }} />
	<a href="blog/">Blog</a>
	<a href="locations/">Locations</a>
</Layout>

export default page;
