import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer class="footer-content">
        <div class="layer footer">
            <div class="container-fluid">
                <div class="row footer-top-inner-w3ls">
                    <div class="col-lg-4 col-md-6 footer-top ">
                        <h2>
                            <a href="index.html">NerdyBot</a>
                        </h2>
                        <p class="my-3"> Hands-on Smartphone Training for Seniors </p>
                        <p>
                        The training session is divided into three phases: Introductory, Exploring New Information/Knowledge and Review. Each session will take about 10 minutes introduction, 10 minutes on new information / knowledge and 10 minutes for questions and review. Upon completion of training, there is daily homework for independent practice.
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-lg-0 mt-5">
                        <div class="footer-w3pvt">
                            <h3 class="mb-3 w3pvt_title">Contact Us</h3>
                            <hr/>
                            <div class="last-w3ls-contact">
                                <p>
                                    <a href="mailto:example@email.com">seniortech808@gmail.com</a>
                                </p>
                            </div>
                            
                        </div>
                    </div>

                </div>

                <div class="w3ls-footer text-center mt-4">
                    <ul class="list-unstyled w3ls-icons">
                        <li>
                        <a href="https://sites.google.com/view/hands-on-smartphone-training-f/pilot-modules?authuser=0">
							<i class="fa fa-google" aria-hidden="true"></i>
						</a>
                        </li>
                    </ul>
                </div>
                <div class="move-top text-right"><a href="#home" class="move-top"> <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
            </div>
            {/* <!-- //footer bottom --> */}
        </div>
    </footer>
        )
    }
}
export default Footer