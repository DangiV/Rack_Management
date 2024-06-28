import React from 'react'
import Layout from '../../Component/Layout'
import { Link } from 'react-router-dom'



function Manager() {
  return (
    <>
    <Layout/>
    <div className="main-content app-content">
    <div className="container-fluid">
      {/* PAGE-HEADER */}
      <div className="page-header">
        <h1 className="page-title my-auto">Manager</h1>
        <div>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                <Link to="/">Dashboard </Link>
            </li>
          </ol>
        </div>
      </div>
      {/* PAGE-HEADER END */}
      {/* ROW-1 */}
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xxl-12">
          <div className="card overflow-hidden">
            <div className="card-body">
            <div className="row">
                    <div className="col-xl-12">
                            <div className="card-header d-flex justify-content-between ps-0 pe-0">
                                <div className="card-title">
                                 Manager list
                                </div>
                                <div className="prism-toggle">
                                    <button className="btn btn-md btn-primary   me-2">Export
                                    <i className="fa-solid fa-file-export d-inline-block align-middle ms-2"></i>
                                    </button>
                                    <button className="btn btn-md btn-primary  " data-bs-toggle="modal" data-bs-target="#exampleModal">Add<i className="fa-solid fa-address-book ms-2 d-inline-block align-middle"></i>
                                    </button>
                                    <div className="modal fade modal-lg " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content p-3">
                                        <div className="modal-header">
                                            <h4 className="modal-title" id="exampleModalLabel">Add Manager</h4>
                                            <button type="button" className="btn-close text-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                           <form>
                                           <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='First name' aria-describedby="emailHelp"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Last name' aria-describedby="emailHelp"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Address' aria-describedby="emailHelp"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Pan card no.</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Pan card no.' aria-describedby="emailHelp"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Aadhar card no.</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Aadhar card no.' aria-describedby="emailHelp"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Mobile number</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Mobile number' aria-describedby="emailHelp"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email id</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email id' aria-describedby="emailHelp"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Employee code</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Employee code' aria-describedby="emailHelp"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Category' aria-describedby="emailHelp"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">All product</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>All product</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Approval limit</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Approval limit' aria-describedby="emailHelp"/>
                                            </div>
                                            </div>
                                            <div className="modal-footer d-flex justify-content-center">
                                            <button type="button" className="btn btn-md btn-primary">Submit</button>
                                            </div>
                                           </div>
                                           </form>
                                        </div>
                                        
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                 <form action="">
                                 <div className="row mb-0 mt-3">
                                   <div className="col-lg-4 col-xl-2 col-md-4 col-sm-6">
                                     <div className="mb-3 ">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">Search</label>
                                      <input type="email" className="form-control" id="exampleFormControlInput1"  placeholder='Search here'/>
                                     </div>
                                   </div>
                                   <div className="col-lg-4 col-xl-2 col-md-4 col-sm-6">
                                    <div className="mb-3">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">Select office</label>
                                      <select className="form-select "  aria-label="Default select example">
                                        <option selected>Select office</option>
                                        <option value="1">Indore</option>
                                        <option value="2">Ujjain</option>
                                        <option value="3">Agar</option>
                                      </select>
                                    </div>
                                   </div>
                                   <div className="col-lg-4 col-xl-2 col-md-4 col-sm-6">
                                    <div className="mb-3">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">Action</label>
                                      <select className="form-select "  aria-label="Default select example">
                                        <option selected>Select office</option>
                                        <option value="1">Approve</option>
                                        <option value="2">Pending</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                   </div>
                                   <div className="col-lg-4 col-xl-2 col-md-4 col-sm-6">
                                     <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Start date:</label>
                                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                      </div>
                                   </div>
                                   <div className="col-lg-4 col-xl-2 col-md-4 col-sm-6">
                                     <div className="mb-3">
                                      <label htmlFor="exampleInputEmail1" className="form-label">End date:</label>
                                      <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                   </div>
                                   <div className="col-lg-4 col-xl-2 col-md-4 col-sm-6">
                                    <div className='d-flex justify-content-xl-end justify-content-xxl-end justify-content-lg-start  align-items-end mb-3 pt-1'>
                                      <button className="btn btn-md btn-primary align-self-end mt-4 ">Clear
                                      <i className="fa-solid fa-broom d-inline-block align-middl ms-2 "></i>
                                      </button>
                                     </div>
                                   </div>
                                </div>
                                 </form>
                                <div className="table-responsive mt-3" style={{ scrollbarWidth: 'thin'}}>
                                    
                                    <table className="table text-nowrap border table-striped table-hover rounded">
                                        <thead className=''>
                                            <tr>
                                                <th scope="col">Employee code</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Pan card</th>
                                                <th scope="col">Adhar card</th>
                                                <th scope="col">Mobile number</th>
                                                <th scope="col">Approval limit</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             <tr>
                                                <td>42569</td>
                                                <td>Testing</td>
                                                <td>Indore mp</td>
                                                <td>bjemd456</td>
                                                <td>789456123123</td>
                                                <td>8269778837</td>
                                                <td>Limit</td>
                                                <td>
                                                 <a href="javascript:void(0);" className="text-info fs-14 lh-1" data-bs-toggle="modal" data-bs-target="#exampleModald"><i className="ri-edit-line me-2"></i></a>
                                                  <div className="modal fade modal-lg " id="exampleModald" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                  <div className="modal-dialog modal-dialog-centered">
                                                      <div className="modal-content p-3">
                                                      <div className="modal-header">
                                                          <h4 className="modal-title" id="exampleModalLabel">Edite Manager</h4>
                                                          <button type="button" className="btn-close text-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                                                      </div>
                                                      <div className="modal-body">
                                                        <form>
                                                        <div className="row">
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='First name' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Last name' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Address' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Pan card no.</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Pan card no.' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Aadhar card no.</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Aadhar card no.' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Mobile number</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Mobile number' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Email id</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email id' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Employee code</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Employee code' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Category' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">All product</label>
                                                              <select className="form-select" aria-label="Default select example">
                                                                  <option selected>All product</option>
                                                                  <option value="1">One</option>
                                                                  <option value="2">Two</option>
                                                                  <option value="3">Three</option>
                                                              </select>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Approval limit</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Approval limit' aria-describedby="emailHelp"/>
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
                                                  <a href="javascript:void(0);" className="text-danger fs-14 lh-1" ><i className="ri-delete-bin-5-line"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>42569</td>
                                                <td>Testing</td>
                                                <td>Indore mp</td>
                                                <td>bjemd456</td>
                                                <td>789456123123</td>
                                                <td>8269778837</td>
   
                                                <td>Limit</td>
                                                <td>
                                                 <a href="javascript:void(0);" className="text-info fs-14 lh-1" data-bs-toggle="modal" data-bs-target="#exampleModald"><i className="ri-edit-line me-2"></i></a>
                                                  <div className="modal fade modal-lg " id="exampleModald" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                  <div className="modal-dialog modal-dialog-centered">
                                                      <div className="modal-content p-3">
                                                      <div className="modal-header">
                                                          <h4 className="modal-title" id="exampleModalLabel">Edite Manager</h4>
                                                          <button type="button" className="btn-close text-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                                                      </div>
                                                      <div className="modal-body">
                                                        <form>
                                                        <div className="row">
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='First name' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Last name' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Address' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Pan card no.</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Pan card no.' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Aadhar card no.</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Aadhar card no.' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Mobile number</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Mobile number' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Email id</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email id' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Employee code</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Employee code' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Category' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">All product</label>
                                                              <select className="form-select" aria-label="Default select example">
                                                                  <option selected>All product</option>
                                                                  <option value="1">One</option>
                                                                  <option value="2">Two</option>
                                                                  <option value="3">Three</option>
                                                              </select>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Approval limit</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Approval limit' aria-describedby="emailHelp"/>
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
                                                  <a href="javascript:void(0);" className="text-danger fs-14 lh-1" ><i className="ri-delete-bin-5-line"></i></a>
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td>42569</td>
                                                <td>Testing</td>
                                                <td>Indore mp</td>
                                                <td>bjemd456</td>
                                                <td>789456123123</td>
                                                <td>8269778837</td>
                                                <td>Limit</td>
                                                <td>
                                                 <a href="javascript:void(0);" className="text-info fs-14 lh-1" data-bs-toggle="modal" data-bs-target="#exampleModald"><i className="ri-edit-line me-2"></i></a>
                                                  <div className="modal fade modal-lg " id="exampleModald" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                  <div className="modal-dialog modal-dialog-centered">
                                                      <div className="modal-content p-3">
                                                      <div className="modal-header">
                                                          <h4 className="modal-title" id="exampleModalLabel">Edite Manager</h4>
                                                          <button type="button" className="btn-close text-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                                                      </div>
                                                      <div className="modal-body">
                                                        <form>
                                                        <div className="row">
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='First name' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Last name' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Address' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Pan card no.</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Pan card no.' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Aadhar card no.</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Aadhar card no.' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Mobile number</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Mobile number' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Email id</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email id' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Employee code</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Employee code' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Category' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">All product</label>
                                                              <select className="form-select" aria-label="Default select example">
                                                                  <option selected>All product</option>
                                                                  <option value="1">One</option>
                                                                  <option value="2">Two</option>
                                                                  <option value="3">Three</option>
                                                              </select>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Approval limit</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Approval limit' aria-describedby="emailHelp"/>
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
                                                  <a href="javascript:void(0);" className="text-danger fs-14 lh-1" ><i className="ri-delete-bin-5-line"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>42569</td>
                                                <td>Testing</td>
                                                <td>Indore mp</td>
                                                <td>bjemd456</td>
                                                <td>789456123123</td>
                                                <td>8269778837</td>

                                                <td>Limit</td>
                                                <td>
                                                 <a href="javascript:void(0);" className="text-info fs-14 lh-1" data-bs-toggle="modal" data-bs-target="#exampleModald"><i className="ri-edit-line me-2"></i></a>
                                                  <div className="modal fade modal-lg " id="exampleModald" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                  <div className="modal-dialog modal-dialog-centered">
                                                      <div className="modal-content p-3">
                                                      <div className="modal-header">
                                                          <h4 className="modal-title" id="exampleModalLabel">Edite Manager</h4>
                                                          <button type="button" className="btn-close text-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                                                      </div>
                                                      <div className="modal-body">
                                                        <form>
                                                        <div className="row">
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='First name' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Last name' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Address' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Pan card no.</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Pan card no.' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Aadhar card no.</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Aadhar card no.' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Mobile number</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Mobile number' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Email id</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email id' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Employee code</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Employee code' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Category' aria-describedby="emailHelp"/>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">All product</label>
                                                              <select className="form-select" aria-label="Default select example">
                                                                  <option selected>All product</option>
                                                                  <option value="1">One</option>
                                                                  <option value="2">Two</option>
                                                                  <option value="3">Three</option>
                                                              </select>
                                                          </div>
                                                          </div>
                                                          <div className="col-lg-6 col-md-6 col-sm-6">
                                                          <div className="mb-3">
                                                              <label htmlFor="exampleInputEmail1" className="form-label">Approval limit</label>
                                                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Approval limit' aria-describedby="emailHelp"/>
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
                                                  <a href="javascript:void(0);" className="text-danger fs-14 lh-1" ><i className="ri-delete-bin-5-line"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                        
                                    </table>
                                    <nav aria-label="Page navigation example" className='mt-3'>
                                    <ul className="pagination">
                                        <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                        </li>
                                    </ul>
                                    </nav>
                                </div>
                            </div>
                    </div>
                </div>
                </div>              
            </div>
          </div>
        </div>
        {/* ROW-1 END */}
      </div>
      
    </div>
 
    </>
  )
}

export default Manager