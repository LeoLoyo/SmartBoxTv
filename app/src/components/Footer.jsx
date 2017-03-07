import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<footer className="Footer">
				<strong>Nunchee</strong>Interactive
			</footer>
		);
	}
}