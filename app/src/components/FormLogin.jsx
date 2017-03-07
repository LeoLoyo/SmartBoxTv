import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default class FormLogin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
					username : "sbtv_test",
					password : "sbtv_2015"
				}
		this.handleInput = this.handleInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)	
	}
	handleInput(event){
		const state = Object.assign({},this.state)
		state[event.target.name] = event.target.value 
		this.setState(state)
	}
	handleSubmit(event){
		const CODES = 
			[
				{
					code:200,
					message:"Inicio de sesión	correcto"},	
				{
					code:403,
					message:"No autorizado"},
				{
					code:404,
					message:"Problemas al	realizar el	inicio	de	sesión"},	
				{
					code:501,
					message:"Problemas internos del servidor"},		
				{
					code:502,
					message:"Colapso del	servidor"},	
				{
					code:503,
					message:"Bad Request"}	
			];
		
		axios.post('http://test-web.nunchee.com/nunchee/api/1.0/users/login_frontend', this.state)
		// axios.post('http://localhost:6789/load/?url=http://test-web.nunchee.com/nunchee/api/1.0/users/login_frontend', this.state)
		.then((response)=> {
			console.log(response);
		})
		.catch((error)=> {
			alert('Error')
			console.log(error);
		});
		
		/*
		 * Este siguiente codigo era para iterar una respuesta del servidor
		 */

		// let code = CODES[Math.floor(Math.random() * CODES.length)]
		
		// CODES.map((cod)=>{
		// 	if(code.code === cod.code)
		// 		alert(cod.message)

		// })

	}

	render(){
		return(
			<div className="formLogin">
				<div className="form-group">
					<input type="text"  value={this.state.username} placeholder="Username" name="username" className="form-control" onChange={this.handleInput }/>
				</div>

				<div className="form-group">
					<input type="password" value={this.state.password} placeholder="Password" name="password" className="form-control" onChange={this.handleInput }/>
				</div>

				<Button onClick={this.handleSubmit} bsStyle="primary">Enviar</Button>
			</div>
		)
	}
}