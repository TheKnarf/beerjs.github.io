import { dom } from 'isomorphic-jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cover.css';

const page = ({ children }) => '<!DOCTYPE html>' +
	<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="description" content="" />

			<title>BeerJS</title>

			<link rel="stylesheet" href="main.css" />
		</head>
		<body class="text-center">{children}</body>
	</html>;

export default page;
