import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import LightBox from './components/LightBox.jsx';
import Parallax from './components/Parallax.jsx';
import Footer from './components/Footer.jsx';

export default class Root extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="grid">
				<Header/>
				<LightBox/>
				<Parallax/>
				<Footer/>
			</div>
		);
	}
}

const app = document.getElementById('root');
ReactDOM.render(<Root/>, app);