---
route: about/index.html
---

import { dom } from 'isomorphic-jsx';
import Layout from './components/layout';
import Header from './components/header';

export default () => <Layout relativeLocation='..'>
	<body>
		<div class="cover-container w-100 h-100 p-3 mx-auto">
			<Header relativeLocation='..' active={3} />
			<br /> <br /> {/* todo: remove br hack */}
			<h1>About page</h1>
		</div>
	</body>
</Layout>;
