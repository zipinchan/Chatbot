import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import I18n from '../../I18n';

class Footer extends Component{
    render(){
        return(
            <footer className="footer-content">
        <div className="layer footer">
            <div className="container-fluid">
                <div className="row footer-top-inner-w3ls">
                    <div className="col-lg-4 col-md-6 footer-top ">
                        <h2>
                            <Link to='/'>NerdyBot </Link>
                        </h2>
                        <p className="my-3"> {I18n.t('home.title_2')} </p>
                        <p>
                        {I18n.t('footer.caption')}
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                        <div className="footer-w3pvt">
                            <h3 className="mb-3 w3pvt_title"> {I18n.t('footer.contact')}</h3>
                            <hr/>
                            <div className="last-w3ls-contact">
                                <p>
                                    <a href="mailto:example@email.com">seniortech808@gmail.com</a>
                                </p>
                            </div>
                            
                        </div>
                    </div>

                </div>

                <div className="w3ls-footer text-center mt-4">
                    <ul className="list-unstyled w3ls-icons">
                        <li>
                        <a href="https://sites.google.com/view/hands-on-smartphone-training-f/pilot-modules?authuser=0">
							<i className="fa fa-google" aria-hidden="true"></i>
						</a>
                        </li>
                    </ul>
                </div>
                <div className="move-top text-right"><a href="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
            </div>
            {/* <!-- //footer bottom --> */}
        </div>
    </footer>
        )
    }
}
export default Footer