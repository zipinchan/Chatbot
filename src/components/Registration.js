import React,{Component} from 'react';
import {Link} from 'react-router-dom';

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
        <div className="container py-md-5">
            <div className="text-center px-lg-5">
                <h3 className="heading text-center mb-3 mb-sm-5">Registration</h3>
                <div className="title-desc text-center px-lg-5">
                    <p className="px-lg-5 sub-wthree"> Register for hands-on smartphone training for seniors now!  </p>
                </div>
            </div>
            <div className="contact-w3pvt-form mt-5">
                <form action="#" className="w3layouts-contact-fm" method="post">
                    <div className="row">
                        <div className="col-lg-6">
                            <div class="form-group">
                                <label>First Name</label>
                                <input className="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input className="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="email" name="Email" placeholder="" required="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Write Message</label>
                                <textarea className="form-control" name="Message" placeholder="" required=""></textarea>
                            </div>
                        </div>
                        <div className="form-group mx-auto mt-3">
                            <button type="submit" className="btn submit">Submit</button>
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