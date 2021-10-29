import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <div>
                {/* <!-- banner --> */}
<section className="inner-page-banner" id="home">
</section>
{/* <!-- //banner -->
<!-- page details --> */}
<div className="breadcrumb-agile">
	<ol className="breadcrumb mb-0">
		<li className="breadcrumb-item">
			<Link to='/'>Home</Link>
		</li>
		<li className="breadcrumb-item active" aria-current="page">About Us</li>
	</ol>
</div>
{/* <!-- //page details -->
	<!--about-mid --> */}
    <section className="banner-bottom py-5" id="exp">
        <div className="container py-md-5">
	<h3 className="heading text-center mb-3 mb-sm-5">About Us</h3>
            <div className="row mid-grids mt-lg-5 mt-3">
                <div className="col-md-5 content-w3pvt-img">
                    <img src="./icons/ab1.png" alt="here" className="img-fluid" />
                </div>
                <div className="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                    <h5 className="mt-1">User-friendly</h5>
                    <h4>Easy to Learn, Use, Understand
                        <br/>Increases Satisfaction</h4>
                    <p className="mt-2 text-left"> NerdyBot is user-friendly for easy navigation to increase productivity and efficiency. NerdyBot uses the most suitable visual representation to help you to relax while interacting with Nerdybot. </p>

                </div>


            </div>
            <div className="row mid-grids mt-lg-5 mt-3 py-3">

                <div className="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                    <h5 className="mt-1">Real-time Assistance</h5>
                    <h4>Save Time
                        <br />Save Energy</h4>
                    <p className="mt-2 text-left">Engage and interact with the NerdyBot at anywhere, anytime as long as you're connected to the internet. Does not know how to use mobile applications? Just ask NerdyBot and it will answer you!</p>

                </div>
                <div className="col-md-5 content-w3pvt-img mt-lg-0 mt-3">
                    <img src= { require ("./icons/ab2.jpg")} alt="here" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //about-mid --> */}


 

            </div>
	
        )
    }
}
export default About