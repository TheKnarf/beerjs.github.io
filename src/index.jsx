---
route: index.html
---

import { dom } from 'isomorphic-jsx';
import Logo from './logo';

const page = () => '<!DOCTYPE html>' +
	<html>
		<head>
			<title>BeerJS</title>

			<meta charset="utf-8" />
		</head>
		<body>
			<h1> BeerJS </h1>
			<Logo style={{ width: '200px' }} />
		</body>
	</html>;

export default page;
