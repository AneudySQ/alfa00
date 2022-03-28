import React from 'react';
import Toprestaurantes from '../Toprestaurantes';
import VideoPortada from '../VideoPortada';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <>
            <VideoPortada />
            <Toprestaurantes />
            


            <div>
                <div class="modal fade" id="login_2" tabindex="-1" role="dialog" aria-labelledby="myLogin" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content modal-popup">
                            <Link to="/" class="close-link"><i class="icon_close_alt2"></i></Link>
                            <form action="#" class="popup-form" id="myLogin" />
                            <div class="login_icon"><i class="icon_lock_alt"></i></div>
                            <input type="text" class="form-control form-white" placeholder="Username" />
                            <input type="text" class="form-control form-white" placeholder="Password" />
                            <div class="text-left">
                                <Link to="/">Forgot Password?</Link>
                            </div>
                            <button type="submit" class="btn btn-submit">Submit</button>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="myRegister" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content modal-popup">
                            <Link to="/" class="close-link"><i class="icon_close_alt2"></i></Link>
                            <form action="#" class="popup-form" id="myRegister" />
                            <div class="login_icon"><i class="icon_lock_alt"></i></div>
                            <input type="text" class="form-control form-white" placeholder="Name" />
                            <input type="text" class="form-control form-white" placeholder="Last Name" />
                            <input type="email" class="form-control form-white" placeholder="Email" />
                            <input type="text" class="form-control form-white" placeholder="Password" id="password1" />
                            <input type="text" class="form-control form-white" placeholder="Confirm password" id="password2" />
                            <div id="pass-info" class="clearfix"></div>
                            <div class="checkbox-holder text-left">
                                <div class="checkbox">
                                    <input type="checkbox" value="accept_2" id="check_2" name="check_2" />
                                    <label for="check_2"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-submit">Register</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
export default Home;