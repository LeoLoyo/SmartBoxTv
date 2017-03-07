import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{
	constructor(props){
		super(props);
	}
	render(){

		return(
			<div className="Header">
				<section><img src='./src/img/icon.png'/></section>	
				<strong>Nunchee</strong><span>Interactive</span>
				<br/>
				<br/>
				<div className="row"><p className="col-md-6 col-md-offset-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure enim sint ducimus, minus fugiat quas cum et. Natus provident temporibus, tempore, tenetur quidem odio debitis voluptate assumenda possimus nemo! Dolorem!</p></div>
			</div>
		);
	}
}