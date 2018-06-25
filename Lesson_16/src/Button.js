import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.nyClick = this.myClick.bind(this);
	}

	myClick() {
		document.getElementsByClassName('wrapper')[0].style.backgroundColor = '#F9F5A6FF';
	}

	render(){
		return(
			<button onClick={this.myClick} className="clicker"> Изменить дизайн </button>
			)
	}
}

export default Button;