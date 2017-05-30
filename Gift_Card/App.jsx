import React from 'react';
import styles from './app.scss';


const headerInstance = (

	<a href="#">Gift Cards</a>

);


export default class App extends React.Component {
	
	render() {

		return (
			
			<div>

				{headerInstance}

				<div>{this.props.children}</div>

			</div>

		)

	}

}

