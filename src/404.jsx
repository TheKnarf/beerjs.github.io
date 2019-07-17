---
route: 404.html
---

import { dom } from 'isomorphic-jsx';
import Layout from './components/layout';

const page = () => <Layout>
	<h1>404</h1>
	<p>Can't seem to find the page your looking for</p>
</Layout>;

export default page;
