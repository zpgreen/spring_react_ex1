import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import {BrowserRouter as Rounter, Route} from "react-router-dom";

import MainComponent from './MainComponent'
import DashboardComponent from './Dashboard'
import ListComponent from './List'

class TopMenuComponent extends Component{
	render(){
		return(
			<Rounter>
				<Navbar
					bg="dark"
					variant="dark"
					className="mb-4">
					<Navbar.Brand href="/">
						Home
					</Navbar.Brand>
					<Navbar.Brand href="/main">
						Main
					</Navbar.Brand>
					<Navbar.Brand href="/dashboard">
						DashBoard
					</Navbar.Brand>
					<Navbar.Brand href="/List">
					List!!
					</Navbar.Brand>

				</Navbar>
				<Route path = "/main" component={MainComponent}></Route>
				<Route path = "/dashboard" component={DashboardComponent}></Route>
				<Route path = "/List" component={ListComponent}></Route>
			</Rounter>
		)
	}
}
export default TopMenuComponent;