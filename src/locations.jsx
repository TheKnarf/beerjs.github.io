---
route: locations/index.html
---

import { dom } from 'isomorphic-jsx';
import Layout from './components/layout';


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
	
const page = () => <Layout>
	<h1>Locations</h1>
	<p>You can find BeerJS in the current locations</p>
	<PreDump data={locations} />

	{
		locations.map(data => <Location {...data} />)
	}
</Layout>

export default page;
