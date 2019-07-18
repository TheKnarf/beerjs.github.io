---
route: blog/index.html
---

import { dom } from 'isomorphic-jsx';
import Layout from './components/layout';
import Header from './components/header';

export default () => <Layout>
	<body>
		<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
			<Header relativeLocation='..' active={1} />
			<h1>Blog</h1>
		</div>
	</body>
</Layout>;
