---
route: locations/index.html
---

import { dom } from 'isomorphic-jsx';
import Layout from './components/layout';
import Header from './components/header';

const locationsJsonFiles = require.context('./locations', true, /index\.json$/);
const locations = locationsJsonFiles.keys().map(locationsJsonFiles);

const Location = ({ name, country, language, address, description, github, sponsors }) =>
	<div>
		<h1>{ name }</h1>
		<div>
			<span> Country </span>
			<span>{ country }</span>
		</div>
	</div>;

const PreDump = ({ data }) => <pre>
{
	JSON.stringify(locations, null, 2)
}
</pre>;
	
export default () => <Layout>
	<body>
		<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
			<Header relativeLocation='..' active={2} />
			<h1>Locations</h1>
			<p>You can find BeerJS in the current locations</p>
			<PreDump data={locations} />

			{
				locations.map(data => <Location {...data} />)
			}
		</div>
	</body>
</Layout>;
