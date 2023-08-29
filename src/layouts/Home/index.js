
import "./styles.scss"

const HOME = () => {
    return (
        <div className="src_login">
            <div className="new_feed">
                <div className="new_caption">
                    <h4>Offeroc</h4>
                    <p>
                        If you want to monetize your website using our offerwall or if you want to advertise your website or product, all you have to do is to register a FREE account.
                    </p>
                </div>
            </div>

            <div className="right_content">
                <div className="form_title">
                    <h4>Sign Up</h4>
                    <small>Create your Offeroc Account. It’s free and always will be.</small>
                </div>
                <div className="form_register">
                    <div className="row form-group mb-3">
                        <label>
                            Username
                        <span className="text-danger"> *</span>
                        </label>
                        <div>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="row form-group mb-3">
                        <label>
                            Email
                        <span className="text-danger"> *</span>
                        </label>
                        <div>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="row form-group mb-3">
                        <label>
                            Password
                        <span className="text-danger"> *</span>
                        </label>
                        <div className="d-flex">
                            <input className="form-control"></input>
                            <span className="input_append_icon"><i class="fa fa-eye" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div className="row form-group mb-3">
                        <label>
                            Gender
                        <span className="text-danger"> *</span>
                        </label>
                        <div>
                            <select className="form-control">
                            <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="row form-group mb-3">
                        <label>
                            Country
                        <span className="text-danger"> *</span>
                        </label>
                        <div>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="mb-3 term">
                        <input id="term" type="checkbox"></input>
                        <label >
                        By clicking Sign Up, you agree to our Terms of Service and that you have read our Privacy Policy.
                        </label>
                    </div>

                    <div className="form-group mb-3">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>
                    </div>
                    <div className="text-inverse mb-5">
                        <p>Already a member? Click here to login.</p>
                    </div>
                    <hr></hr>
                    <p className="text-center mt-5">All rights reserved © 2023 Offeroc</p>
                </div>
            </div>
        </div>
    );
}

export default HOME