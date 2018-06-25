import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './Button';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Clock />
				<Button />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
