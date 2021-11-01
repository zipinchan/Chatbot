import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import I18n from '../I18n';

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
							<h2 className="movetxt agile-title text-capitalize"> {I18n.t('home.title')} </h2>
								<p> {I18n.t('home.caption_1')}  </p>
								<p> {I18n.t('home.caption_2')} </p>
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
							<h2 className="movetxt agile-title text-capitalize">{I18n.t('home.title_2')}</h2>
								<p>{I18n.t('home.title_2_caption_1')} <br/> {I18n.t('home.goal_1')}</p> <br/> {I18n.t('home.goal_2')}
								
								<Link to='/register' className="btn"> {I18n.t('home.register')} </Link>
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