import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {writeUserData} from '../firebase';
import I18n from '../I18n';



class Feedback extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            feedback: ''
        };
      }

    render(){

        const handleSubmit = (e) => {
            e.preventDefault();
            writeUserData(this.state.fname, this.state.lname, this.state.email, this.state.feedback) ; alert("Thank you, your feedback has been sent.")
        }
        return(
			<div>

<section className="inner-page-banner" id="home">
</section>
<div className="breadcrumb-agile">
	<ol className="breadcrumb mb-0">
		<li className="breadcrumb-item">
		<Link to='/'>Home</Link>
		</li>
		<li className="breadcrumb-item active" aria-current="page">{I18n.t('feedback.title_2')}</li>
	</ol>
</div>
    <section className="content-info py-5">
        <div className="container py-md-5">
            <div className="text-center px-lg-5">
                <h3 className="heading text-center mb-3 mb-sm-5">{I18n.t('feedback.title')}</h3>
                <div className="title-desc text-center px-lg-5">
                    <p className="px-lg-5 sub-wthree"> {I18n.t('feedback.caption_1')} </p>
                </div>
            </div>
            <div className="contact-w3pvt-form mt-5">
                <form id="feedbackForm" className="w3layouts-contact-fm" onSubmit={handleSubmit} >
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>{I18n.t('feedback.form_1')}</label>

                                <input className="form-control" id="fname" type="text" name="Name" maxlength="20" placeholder="" required onChange={event => this.setState({ fname: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>{I18n.t('feedback.form_2')}</label>
                                <input className="form-control" id="lname" type="text" name="Name" maxlength="20" placeholder="" required onChange={event => this.setState({ lname: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>{I18n.t('feedback.form_3')}</label>
                                <input className="form-control" id="email" type="email" name="Email" maxlength="25" placeholder="" required onChange={event => this.setState({ email: event.target.value})}/>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>{I18n.t('feedback.form_4')}</label>
                                <textarea className="form-control" id="feedback" name="Message" maxlength="255" placeholder="" required onChange={event => this.setState({ feedback: event.target.value})}></textarea>
                            </div>
                        </div>

                        <div className="form-group mx-auto mt-3">
                            <button type="submit"  className="btn submit">{I18n.t('feedback.submit')}</button>
                        </div>
                                                 

                    </div>

                </form>

                <script type="text/javascript" src="../firebase.js"> 
 
                </script>

            </div>

            

        </div>


    </section>

   
	</div>
        )
    }
}
export default Feedback
