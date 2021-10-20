import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container mt-5">
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Our Address</h5>
                            <p>Housing D-Block, Hol-263, Darmstadt, Germany.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3 link">
                            <h5>Follow Us</h5>
                            <div>
                                <i className="fab fa-facebook-square mx-3"></i>
                                <i className="fab fa-facebook-messenger mx-3"></i>
                                <i className="fab fa-whatsapp mx-3"></i>
                                <i className="fab fa-instagram mx-3"></i>
                                <i className="fab fa-twitter mx-3"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2021 Copyright: Md Mazharul Islam</div>

            </footer>
        </div>
    );
};

export default Footer;