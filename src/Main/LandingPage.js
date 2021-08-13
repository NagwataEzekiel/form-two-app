import React, { useState } from 'react';
import {FlatList, ScrollView, } from 'react-native'
import {Link} from 'react-router-dom'
import Toolbar from '../Toolbar/Toolbar';
import Backdrop from '../Backdrop/Backdrop';
import SideDrawer from '../SideDrawer/SideDrawer';


import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


import './LandingPage.css';

function LandingPage(props) {
	const [ SideDrawerOpen, setSideDrawerOpen ] = useState(false);

	function drawerToggleClickHandler() {
		setSideDrawerOpen((prevState) => {
			return { SideDrawerOpen: !prevState.SideDrawerOpen };
		});
	}

	function backdropClickHandler() {
		setSideDrawerOpen(false);
	}

	let backdrop;

	if (SideDrawerOpen) {
		backdrop = <Backdrop click={backdropClickHandler} />;
	}
	return (
		<div>
			<Toolbar  main="Posts" login="Login" signup="Signup" drawerClickHandler={drawerToggleClickHandler} />

			<SideDrawer post="Upload a Story" posts="Post" user="Lookbook" show={SideDrawerOpen} />
			{backdrop}
      
			<main className="main">
     
				<div className="wrapper">
       
					<div className="text-container">
          <ScrollView>
						<div className="about">
							<h1>Welcome to Form White</h1>
							<p>
							 Our Forum is dedicated to enhancing the forum experience by offering plenty of opportunities for users to engage with each
							  other in an interesting and safe online environment. Site created by Nagwata Ezekiel
							</p>

							<button className="button"><Link to="/Guidelines" style={{color:"white"}} >Get Started</Link></button>
							<div className="icons">
							    <a href="https://www.facebook.com/nagwata.ezekiel"><AiFillFacebook color="white" size="2em" /></a>
								<a href=""><AiFillInstagram color="#fc5185" size="2em" /></a>
								<a href="https://www.linkedin.com/in/nagwata-ezekiel-a493201b3/"><AiFillLinkedin color="#387f6b" size="2em" /></a>
							</div>
							<div className="image-div" />
						</div>
            </ScrollView>
					</div>
        
				</div>
      
			</main>
     
		</div>
	);
}

export default LandingPage;
