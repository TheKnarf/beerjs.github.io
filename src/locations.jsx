---
route: locations/index.html
---

import { dom } from 'isomorphic-jsx';
import Layout from './components/layout';

const page = () => <Layout>
	<h1>Locations</h1>
	<p>You can find BeerJS in the current locations</p>
</Layout>

export default page;
