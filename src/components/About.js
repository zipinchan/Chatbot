import React, {Component} from 'react';
import I18n from '../I18n';
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
			<Link to='/'>{I18n.t('home.home')}</Link>
		</li>
		<li className="breadcrumb-item active" aria-current="page">{I18n.t('about.title')}</li>
	</ol>
</div>
{/* <!-- //page details -->
	<!--about-mid --> */}
    <section className="banner-bottom py-5" id="exp">
        <div className="container py-md-5">
	<h3 className="heading text-center mb-3 mb-sm-5">{I18n.t('about.title')}</h3>
            <div className="row mid-grids mt-lg-5 mt-3">
                <div className="col-md-5 content-w3pvt-img">
                    <img src= { require ("./icons/ab1.png")} alt="here" className="img-fluid" />
                </div>
                <div className="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                    <h5 className="mt-1">{I18n.t('about.h5')}</h5>
                    <h4>{I18n.t('about.h4')}
                        <br/>{I18n.t('about.h4_1')}</h4>
                    <p className="mt-2 text-left"> {I18n.t('about.p')} </p>

                </div>


            </div>
            <div className="row mid-grids mt-lg-5 mt-3 py-3">

                <div className="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                    <h5 className="mt-1">{I18n.t('about.h5_2')}</h5>
                    <h4>{I18n.t('about.h4_2')}
                        <br />{I18n.t('about.h4_2_1')}</h4>
                    <p className="mt-2 text-left">{I18n.t('about.p_2')}</p>

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