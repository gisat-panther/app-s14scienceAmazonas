import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";

// base styles need to be imported before all components
import '@gisatcz/ptr-core/lib/styles/reset.css';
import '@gisatcz/ptr-core/lib/styles/base.scss';
import './styles/index.scss';

ReactDOM.render(
	<div>s14scienceAmazonas</div>, document.getElementById('ptr')
);

serviceWorker.unregister();