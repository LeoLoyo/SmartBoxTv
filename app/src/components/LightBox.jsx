import React from 'react';
import ReactDOM from 'react-dom';
import FormLogin from './FormLogin.jsx';
import { Modal } from 'react-bootstrap';

const Images =[
{
	dir:'./src/img/kunga1.png',
	id:1,
	geometry:'rectangle',
	description:"KUNGA Actitud Animal"

},
{
	dir:'./src/img/foto-middle.png',
	id:2,
	geometry:'circle',
	description:"middle"

},
{
	dir:'./src/img/directtv.png',
	id:4,
	geometry:'rectangle',
	description:"DirecTV TV Interactive"

}];

export default class LightBox extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="LightBox">
				<div className="row">
					<h4 className="col-md-8 col-md-offset-1">Nuestras Apps</h4>
				</div>
				<section className="Apps">
				{
					Images.map((img)=>{
						return <Apps source={img} key={img.id}/>
					})
				}
				</section>
			</div>
		);
	}
}

class Apps extends React.Component{
	constructor(props){
	    super(props);
		this.state = {
			source:this.props.source,
			showModal:false
		}
		this.handleApps= this.handleApps.bind(this)
	}
	handleApps(){
		const state = Object.assign({},this.state)
		state['showModal'] = true 
		this.setState(state)
	}

	hideModal(){
		const state = Object.assign({},this.state)
		state['showModal'] = false 
		this.setState(state)

	}
	render(){
		let styleImg = {
			display:'inline-block',
			height: 110,
			width:this.props.source.geometry === 'circle'?110:200,
			borderRadius:this.props.source.geometry === 'circle'?'100%':'10px',
			backgroundImage:'url('+this.props.source.dir+')',
			backgroundSize:'cover',
			backgroundPosition:'center center',
			backgroundRepeat:'no-repeat',
			margin:'0 2em'
		}
		return(
			<div style={styleImg} onClick={this.handleApps}>
				<Modal show={this.state.showModal} onHide={this.hideModal.bind(this)}>
					<img className="imgModal" src={this.props.source.dir}/>
					<FormLogin/>
				</Modal>
			</div>	
			
		);
	}
}
// <a href={this.props.source.dir} data-lightbox={this.props.source.dir} data-title={this.props.source.description}>
	// <img style={styleImg} src={this.props.source.dir} onClick={this.handleApps}/>
// </a>
