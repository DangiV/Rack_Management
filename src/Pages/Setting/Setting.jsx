import React from 'react';
import Layout from '../../Component/Layout';
import { Link } from 'react-router-dom';

const Setting = () => {
  return (
    <>
      <Layout />

      <div className="main-content app-content">
       <div className="container-fluid">
        {/* PAGE-HEADER */}
        <div className="page-header">
            <h1 className="page-title my-auto">Settings</h1>
            <div>
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                <a href="javascript:void(0)">Settings</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/">Dashboard </Link>
                </li>
            </ol>
            </div>
        </div>   
         {/* PAGE-HEADER END */}
        <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xxl-12 pb-5">
          <div className="card overflow-hidden">
             <div className="card-body p-0">
                <div className='col-lg-4 col-md-4 col-sm-6  col-12'>
                    <ul className="nav nav-pills nav-justified gx-3 tab-style-6 d-sm-flex d-block " id="myTab" role="tablist">
                        <li className="nav-item rounded" role="presentation">
                            <button className="nav-link active" id="activity-tab" data-bs-toggle="tab"
                            data-bs-target="#activity-tab-pane" type="button" role="tab"
                            aria-controls="activity-tab-pane" aria-selected="true">
                            <i className="fa-solid fa-user me-2 align-middle d-inline-block fs-16"></i>
                             My Account</button>
                        </li>
                        <li className="nav-item rounded" role="presentation">
                            <button className="nav-link" id="gallery-tab" data-bs-toggle="tab"
                            data-bs-target="#gallery-tab-pane" type="button" role="tab"
                            aria-controls="gallery-tab-pane" aria-selected="false">
                            <i className="fa-solid fa-building-columns me-2 align-middle d-inline-block fs-16"></i>
                             Bank Account</button>
                        </li>
                    </ul>
                </div> 
                </div>
            </div>
                <div className="py-0">
                 <div className="tab-content" id="myTabContent">
                 <div className="tab-pane show active fade p-0 border-0 bg-white p-4 rounded-3" id="activity-tab-pane"role="tabpanel" aria-labelledby="activity-tab" tabindex="0">
                   <button className="btn btn-md btn-primary  me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Reset Password <i className="fa-solid fa-lock ms-2 d-inline-block align-middle"></i>
                    </button>
                    <div className="modal fade modal-lg " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content p-3">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Reset Password</h4>
                            <button type="button" className="btn-close text-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='First name' aria-describedby="emailHelp"/>
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Confirm Password</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Last name' aria-describedby="emailHelp"/>
                            </div>
                            </div>
                            
                            
                        </div>
                        </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-md btn-primary">Submit</button>
                        </div>
                        </div>
                    </div>
                    </div>
                  </div>

                  <div className="tab-pane show  fade p-0 border-0 bg-white p-4 rounded-3" id="gallery-tab-pane" role="tabpanel" aria-labelledby="gallery-tab" tabindex="0">
                    <form >
                    <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="mb-3">
                       <label htmlFor="exampleInputEmail1" className="form-label">Account Number</label>
                       <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Account Number" aria-describedby="emailHelp"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">IFSC Code</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="IFSC Code" aria-describedby="emailHelp"/>
                        </div>
                    </div>
                     <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="mb-3">
                       <label htmlFor="exampleInputEmail1" className="form-label">Account Holder</label>
                       <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Account Holder" aria-describedby="emailHelp"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Bank Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Bank Name" aria-describedby="emailHelp"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Bank Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Address" aria-describedby="emailHelp"/>
                        </div>
                    </div>
                    
                   </div>
                   <div className="col-12 d-flex justify-content-center mt-4">
                      <button className='btn btn-md btn-primary'>Submit</button>
                   </div>
                     </form>
                   
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

export default Setting
