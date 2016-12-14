import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Wrapper from './wrapper.component.js';
import Bulbasaur from './bulbasaur.component.js';
import ShowImage from './show-image.component.js';

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Wrapper}>
					<Route path="bulbasaur" component={Bulbasaur}>
						<Route path=":image" component={ShowImage} />
					</Route>
				</Route>
			</Router>

		)
	}
}

ReactDOM.render(<App/>, document.getElementById("app"));
