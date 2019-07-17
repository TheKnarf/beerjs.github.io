import { dom } from 'isomorphic-jsx';

const page = ({ children }) => '<!DOCTYPE html>' +
	<html>
		<head>
			<title>BeerJS</title>
			<meta charset="utf-8" />
		</head>
		<body>{children}</body>
	</html>;

export default page;
