import React from 'react';
import ReactDOM from 'react-dom';

export default class Parallax extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="Parallax">
				<div className="parallax-window" data-parallax="scroll" data-image-src="./src/img/parallax.jpg"></div>
			</div>
		);
	}
}

