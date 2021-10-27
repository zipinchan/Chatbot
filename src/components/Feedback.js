import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {writeUserData} from '../firebase';


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
		<li className="breadcrumb-item active" aria-current="page">Feedback</li>
	</ol>
</div>
    <section className="content-info py-5">
        <div className="container py-md-5">
            <div className="text-center px-lg-5">
                <h3 className="heading text-center mb-3 mb-sm-5">Provide Us Your Feedback</h3>
                <div className="title-desc text-center px-lg-5">
                    <p className="px-lg-5 sub-wthree"> Feel free to provide us your feedback. Your feedback is important to help us improve our website and improve your satisfaction level. </p>
                </div>
            </div>
            <div className="contact-w3pvt-form mt-5">
                <form id="feedbackForm" className="w3layouts-contact-fm" onSubmit={handleSubmit} >
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>First Name</label>

                                <input className="form-control" id="fname" type="text" name="Name" placeholder="" required onChange={event => this.setState({ fname: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input className="form-control" id="lname" type="text" name="Name" placeholder="" required onChange={event => this.setState({ lname: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" id="email" type="email" name="Email" placeholder="" required onChange={event => this.setState({ email: event.target.value})}/>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Write Message</label>
                                <textarea className="form-control" id="feedback" name="Message" placeholder="" required onChange={event => this.setState({ feedback: event.target.value})}></textarea>
                            </div>
                        </div>

                        <div className="form-group mx-auto mt-3">
                            <button type="submit"  className="btn submit">Submit</button>
                        </div>
                         
                        {/*onClick={() => {writeUserData(this.state.fname, this.state.lname, this.state.email, this.state.feedback) ; alert("Thank you, your feedback has been sent.")}}*/}
                        

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

// import React,{Component} from 'react';
// import {Link} from 'react-router-dom';
// import {db, writeUserData} from '../firebase';


// class Feedback extends Component{
//     render(){
//         return(
// 			<div>

// <section class="inner-page-banner" id="home">
// </section>
// <div class="breadcrumb-agile">
// 	<ol class="breadcrumb mb-0">
// 		<li class="breadcrumb-item">
// 		<Link to='/'>Home</Link>
// 		</li>
// 		<li class="breadcrumb-item active" aria-current="page">Feedback</li>
// 	</ol>
// </div>
//     <section class="content-info py-5">
//         <div class="container py-md-5">
//             <div class="text-center px-lg-5">
//                 <h3 class="heading text-center mb-3 mb-sm-5">Provide Us Your Feedback</h3>
//                 <div class="title-desc text-center px-lg-5">
//                     <p class="px-lg-5 sub-wthree"> Feel free to provide us your feedback. Your feedback is important to help us improve our website and improve your satisfaction. </p>
//                 </div>
//             </div>
//             <div class="contact-w3pvt-form mt-5">
//                 <form id="feedbackForm" class="w3layouts-contact-fm" >
//                     <div class="row">

//                         <div class="col-lg-6">
//                             <div class="form-group">
//                                 <label>First Name</label>
//                                 <input class="form-control" id="fname" type="text" name="Name" placeholder="" required="" />
//                             </div>
//                             <div class="form-group">
//                                 <label>Last Name</label>
//                                 <input class="form-control" id="lname" type="text" name="Name" placeholder="" required="" />
//                             </div>
//                             <div class="form-group">
//                                 <label>Email</label>
//                                 <input class="form-control" id="email" type="email" name="Email" placeholder="" required="" />
//                             </div>
//                         </div>
                        
//                         <div class="col-lg-6">
//                             <div class="form-group">
//                                 <label>Write Message</label>
//                                 <textarea class="form-control" id="feedback" name="Message" placeholder="" required=""></textarea>
//                             </div>
//                         </div>

//                         <div class="form-group mx-auto mt-3">
//                             <button onClick={writeUserData('fname', 'lname', 'email', 'feedback')} class="btn submit">Submit</button> 
//                            {/*<button onClick="writeUserData(fname, lname, email, feedback);" class="btn submit">Submit</button>*/}
//                         </div>
                         
                        
                        

//                     </div>

//                 </form>

//                 <script type="text/javascript" src="../firebase.js">


//                 </script>

//             </div>

            

//         </div>


//     </section>

   
// 	</div>
//         )
//     }
// }
// export default Feedback