import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends  Component{
    render(){
        return(
			
            <div>
                
{/* <!-- //header -->
// <!-- banner --> */}
<div class="banner_w3lspvt" id="home">
	<div class="csslider infinity" id="slider1">
		<input type="radio" class="slides" id="slides_1"/>
		{/*checked="checked" */}
		<input type="radio" class="slides" id="slides_2"/>

		<ul className="banner_slide_bg">
			<li>
				<div className="slider-info bg1">
					<div className="bs-slider-overlay">
						<div className="banner-text">
							<div className="container">
							<h2 className="movetxt agile-title text-capitalize"> Use NerdyBot at Anywhere, Anytime. </h2>
								<p> This chatbot provides real-time assistance on chatbot utilization as long as the device is connected to the Internet.  </p>
								<p> Click on the blue bot at the bottom left on your screen to start chatting with NerdyBot! </p>
								{/* 
								<h2 class="movetxt agile-title text-capitalize">Hands-on Smartphone Training for Seniors</h2>
								<p>Our goal is <br/> - introduce the smartphone and usage of Internet on smartphone to senior <br/> - improve and build senior's ability on the utilization of smartphone and Internet</p>
								
								<Link to='/register' class="btn"> Register </Link>
								*/}
							</div>
						</div>
					</div>
				</div>
			</li>



			<li>
				<div className="slider-info bg2">
					<div className="bs-slider-overlay1">
						<div className="banner-text">
							<div className="container">
							<h2 className="movetxt agile-title text-capitalize">Hands-on Smartphone Training for Seniors</h2>
								<p>Our goal is <br/> - introduce the smartphone and usage of Internet on smartphone to senior <br/> - improve and build senior's ability on the utilization of smartphone and Internet</p>
								
								<Link to='/register' className="btn"> Register </Link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div className="navigation"> 
			<div>
			<label for="slides_1"></label>
			  <label for="slides_2"></label>

			</div>
		</div>
	</div>
</div>
 {/* <!-- //banner -->

// <!-- footer --> */}
    
    </div>
        )
    }
}
export default Home