import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import I18n from '../I18n';


class Registration extends Component{
    render(){
        return(
			<div>
<section className="inner-page-banner" id="home">
</section>
<div className="breadcrumb-agile">
	<ol className="breadcrumb mb-0">
		<li className="breadcrumb-item">
		<Link to='/'>Home</Link>
		</li>
		<li className="breadcrumb-item active" aria-current="page">Registration</li>
	</ol>
</div>
    <section className="content-info py-5">

    <div id="Awesome" class="anim750">
	
    <div class="reveal circle_wrapper">
          <div class="circle">Sorry! </div>
      </div>
                          
      <div class="sticky anim750">
          <div class="front circle_wrapper anim750">
              <div class="circle anim750"></div>
        </div>
      </div>
      
    <h4>Close!</h4>
                          
    <div class="sticky anim750">
          <div class="back circle_wrapper anim750">
              <div class="circle anim750"></div>
          </div>
      </div>
                          
  </div>
        <div className="container py-md-5">
            <div className="text-center px-lg-5">
                <h3 className="heading text-center mb-3 mb-sm-5">{I18n.t('home.registration')}</h3>
                <div className="title-desc text-center px-lg-5">
                    <p className="px-lg-5 sub-wthree"> {I18n.t('registration.title')}  </p>
                </div>
            </div>
            <div className="contact-w3pvt-form mt-5">
                <form action="#" className="w3layouts-contact-fm" method="post">
                    <div className="row">
                        <div className="col-lg-6">
                            <div class="form-group">
                                <label>{I18n.t('feedback.form_1')}</label>
                                <input className="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div className="form-group">
                                <label>{I18n.t('feedback.form_2')}</label>
                                <input className="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div className="form-group">
                                <label>{I18n.t('feedback.form_3')}</label>
                                <input className="form-control" type="email" name="Email" placeholder="" required="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>{I18n.t('feedback.form_4')}</label>
                                <textarea className="form-control" name="Message" placeholder="" required=""></textarea>
                            </div>
                        </div>
                        <div className="form-group mx-auto mt-3">
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </section>

  
	</div>
        )
    }
}
export default Registration