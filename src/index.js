import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";

// base styles need to be imported before all components
import '@gisatcz/ptr-core/lib/styles/reset.css';
import '@gisatcz/ptr-core/lib/styles/base.scss';
import './styles/index.scss';
import Intro from "./components/Intro";
import Page from "./components/Page";

ReactDOM.render(
	<div className="ptr-light s14scienceAmazonas" id="s14scienceAmazonas">
		<Intro/>
		<Page/>
	</div>, document.getElementById('ptr')
);

serviceWorker.unregister();