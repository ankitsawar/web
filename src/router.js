import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './App';

const Routing = () => (
	<Router>
		<div className="h100">
			<Route exact path="/" component={App}/>
			<Route exact path="/:about" component={'about'}/>
		</div>
	</Router>
)

export default Routing