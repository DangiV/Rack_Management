import React from 'react'

function Singup() {
  return (
    <>
      <div className="autentication-bg">

<div className="container-lg">
    <div className="row justify-content-center authentication authentication-basic align-items-center h-100">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
            <div className="my-4 d-flex justify-content-center">
                <a href="index.html">
                    <img src="../assets/images/brand-logos/desktop-white.png" alt="logo"/>
                </a>
            </div>
            <div className="card custom-card">
                <div className="card-body p-5">
                    <p className="h5 fw-semibold mb-2 text-center">Sign Up</p>
                    <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome &amp; Join us by creating a free account !</p>
                    <div className="row gy-3">
                        <div className="col-xl-12">
                            <label htmlFor="signup-firstname" className="form-label text-default">First Name</label>
                            <input type="text" className="form-control form-control-lg" id="signup-firstname" placeholder="first name"/>
                        </div>
                        <div className="col-xl-12">
                            <label htmlFor="signup-lastname" className="form-label text-default">Last Name</label>
                            <input type="text" className="form-control form-control-lg" id="signup-lastname" placeholder="last name"/>
                        </div>
                        <div className="col-xl-12">
                            <label htmlFor="signup-password" className="form-label text-default">Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control form-control-lg" id="signup-password" placeholder="password"/>
                                <button aria-label="button" className="btn btn-light" onclick="createpassword('signup-password',this)" type="button" id="button-addon2"><i className="ri-eye-off-line align-middle"></i></button>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-2">
                            <label htmlFor="signup-confirmpassword" className="form-label text-default">Confirm Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control form-control-lg" id="signup-confirmpassword" placeholder="confirm password"/>
                                <button aria-label="button" className="btn btn-light" onclick="createpassword('signup-confirmpassword',this)" type="button" id="button-addon21"><i className="ri-eye-off-line align-middle"></i></button>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                    By creating a account you agree to our <a href="terms_conditions.html" className="text-success"><u>Terms &amp; Conditions</u></a> and <a className="text-success"><u>Privacy Policy</u></a>
                                </label>
                            </div>
                        </div>
                        <div className="col-xl-12 d-grid mt-2">
                            <button type="button" className="btn btn-lg btn-primary">Create Account</button>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-muted mt-3">Already have an account? <a href="sign-in.html" className="text-primary">Sign In</a></p>
                    </div>
                    <div className="text-center my-3 authentication-barrier">
                        <span>OR</span>
                    </div>
                    <div className="btn-list text-center">
                        <button type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                            <i className="ri-facebook-fill"></i>
                        </button>
                        <button type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                            <i className="ri-google-fill"></i>
                        </button>
                        <button type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                            <i className="ri-twitter-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default Singup
