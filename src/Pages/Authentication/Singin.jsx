import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../../Services/Redux/Feature/UserSlice';

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = async (values) => {
        try {
            const actionResult = await dispatch(adminLogin(values));
            if (actionResult.error) {
                toast.error(actionResult.payload.message);
            } else {
                toast.success("login Successfully")
                navigate('/dashboard')
                sessionStorage.setItem('userData', JSON.stringify(actionResult.payload.data));
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="autentication-bg">
            <div className="container-lg">
                <div className="row justify-content-center authentication authentication-basic align-items-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                        <div className="my-4 d-flex justify-content-center"></div>
                        <div className="card custom-card">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div className="card-body p-5">
                                        <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                                        <p className="mb-4 text-muted op-7 fw-normal text-center">
                                            Welcome back!
                                        </p>
                                        <div className="row gy-3">
                                            <div className="col-xl-12">
                                                <label htmlFor="email" className="form-label text-default">
                                                    Email
                                                </label>
                                                <Field type="text"
                                                    id="email"
                                                    name="email"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your email"
                                                    autoComplete="email"
                                                />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </div>
                                            <div className="col-xl-12 mb-2">
                                                <label htmlFor="password" className="form-label text-default d-block">
                                                    Password
                                                    <Link to="/Singin" className="float-end text-danger"> Forgot password? </Link>
                                                </label>
                                                <Field type="password"
                                                    id="password"
                                                    name="password"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your password"
                                                    autoComplete="password"
                                                />
                                                <ErrorMessage name="password" component="div" className="text-danger" />
                                            </div>
                                            <div className="col-xl-12 d-grid mt-2">
                                                <button type="submit" className="btn btn-lg btn-primary">
                                                    Sign In
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-muted mt-3">
                                                Don't have an account?{' '}
                                                <Link to="/signup" className="text-primary">Sign Up </Link>
                                            </p>
                                        </div>
                                        <div className="text-center my-3 authentication-barrier">
                                            <span>OR</span>
                                        </div>
                                        <div className="btn-list text-center">
                                            <button type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                                <i className="ri-facebook-fill" />
                                            </button>
                                            <button type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                                <i className="ri-google-fill" />
                                            </button>
                                            <button type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                                <i className="ri-twitter-fill" />
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
