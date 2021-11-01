import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import i18n from '../../I18n';

class Navbar extends Component{

	changeLanguage(lang) {
		i18n.locale = lang;
	}

    render(){
        return(
            <header>
	<div className="container">
		<div className="header d-lg-flex justify-content-between align-items-center">
			<div className="header-agile">
				<h1>
					<Link to='/' className="navbar-brand logo">
					<i className="fa fa-comments-o" aria-hidden="true"> </i> NerdyBot </Link>
				</h1>
			</div>
			<div className="nav_w3ls">
				<nav>
					<label htmlFor="drop" className="toggle mt-lg-0 mt-1"><span className="fa fa-bars" aria-hidden="true"></span></label>
					<input type="checkbox" id="drop" />
						<ul className="menu">
							<li className="mr-lg-3 mr-2 active"><Link to='/'>{i18n.t('home.home')}</Link></li>
							<li className="mr-lg-3 mr-2"><Link to='/about'>{i18n.t('home.about')}</Link></li>
							<li className="mr-lg-3 mr-2"><Link to='/register'>{i18n.t('home.registration')}</Link></li>
							<li className="mr-lg-3 mr-2"><Link to='/feedback'>{i18n.t('home.feedback')}</Link></li>
							<li className="mr-lg-3 mr-2">
								<Link to='/'>
									<button className="btn submit"
										onClick={() => this.changeLanguage('en')}
									>Eng
									</button>
								</Link>
							</li>
							<li className="mr-lg-3 mr-2">
								<Link to='/'>
									<button className="btn submit"
										onClick={() => this.changeLanguage('cn')}
									>Chi
									</button>
								</Link>
							</li>
						</ul>
				</nav>
			</div>

		</div>
	</div>
</header>
        )
    }
}
export default Navbar