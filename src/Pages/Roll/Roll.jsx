import React from 'react'
import Layout from '../../Component/Layout'
import { Link } from 'react-router-dom'
const Roll = () => {
  return (
    <>
    <Layout/>
    <div className="main-content app-content">
     <div className="container-fluid">
        {/* PAGE-HEADER */}
      <div className="page-header">
        <h1 className="page-title my-auto">Roles</h1>
        <div>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="">Roles</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                <Link to="/">Dashboard </Link>
            </li>
          </ol>
        </div>
      </div>
      {/* PAGE-HEADER END */}

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xxl-12">
          <div className="card overflow-hidden">
            <div className="card-body">
            <div className="row">
                    <div className="col-xl-12">
                            <div className="card-header d-flex justify-content-between ps-0 pe-0">
                                <div className="card-title">
                                 Roles list
                                </div>
                                
                                <div className="prism-toggle">
                                    {/* <button className="btn btn-md btn-primary   me-2">Export
                                    <i className="fa-solid fa-file-export d-inline-block align-middle ms-2"></i>
                                    </button> */}
                                    <Link to='/Rollpermission' className="btn btn-md btn-primary" >Add<i className="fa-solid           fa-address-book ms-2 d-inline-block align-middle"></i>
                                    </Link>
                                   
                                </div>
                            </div>
                            <div className="card-body p-0">
                                 <form action="">
                                 <div className="row mb-0 mt-3">
                                   <div className="col-lg-3">
                                     <div className="mb-3 ">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">Search</label>
                                      <input type="email" className="form-control" id="exampleFormControlInput1"  placeholder='Search here'/>
                                     </div>
                                   </div>
                                   <div className="col-lg-3">
                                    <div className="mb-3">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                                      <select className="form-select "  aria-label="Default select example">
                                        <option selected>Status</option>
                                        <option value="1">Approved</option>
                                        <option value="2">Pending</option>
                                      </select>
                                    </div>
                                   </div>
                                 
                                   <div className="col-lg-2">
                                     <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Start date:</label>
                                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                      </div>
                                   </div>
                                   <div className="col-lg-2">
                                     <div className="mb-3">
                                      <label htmlFor="exampleInputEmail1" className="form-label">End date:</label>
                                      <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                   </div>
                                   <div className="col-lg-2">
                                    <div className='d-flex justify-content-end align-items-end mb-3 pt-1'>
                                      <button className="btn btn-md btn-primary align-self-end   mt-4 ">Clear
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
                                                <th scope="col"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Enabled</th>
                                                <th scope="col">Created</th>
                                                <th scope="col">Update</th>
                                                <th scope="col">Registrered</th>
                                                <th scope="col">Created by</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             <tr>
                                                <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                                                <td>Testing testing</td>
                                                <td>testing</td>
                                                <td>testing</td>
                                                <td>testing</td>
                                                <td>Testings</td>
                                                <td>testing</td>
                                                <td>
                                                 <Link to='/Roleedit' className="text-info fs-14 lh-1"><i className="ri-edit-line me-2"></i></Link>
                                                 <Link to="" className="text-danger fs-14 lh-1"><i className="ri-delete-bin-5-line"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                                                <td>Testing testing</td>
                                                <td>testing</td>
                                                <td>testing</td>
                                                <td>testing</td>
                                                <td>Testings</td>
                                                <td>testing</td>
                                                <td>
                                                <Link to='/Roleedit' className="text-info fs-14 lh-1"><i className="ri-edit-line me-2"></i></Link>
                                                 <Link to="" className="text-danger fs-14 lh-1"><i className="ri-delete-bin-5-line"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                                                <td>Testing testing</td>
                                                <td>testing</td>
                                                <td>testing</td>
                                                <td>testing</td>
                                                <td>Testings</td>
                                                <td>testing</td>
                                                <td>
                                                <Link to='/Roleedit' className="text-info fs-14 lh-1"><i className="ri-edit-line me-2"></i></Link>
                                                 <Link to="" className="text-danger fs-14 lh-1"><i className="ri-delete-bin-5-line"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                                                <td>Testing testing</td>
                                                <td>testing</td>
                                                <td>testing</td>
                                                <td>testing</td>
                                                <td>Testings</td>
                                                <td>testing</td>
                                                <td>
                                                <Link to='/Roleedit' className="text-info fs-14 lh-1"><i className="ri-edit-line me-2"></i></Link>
                                                 <Link to="" className="text-danger fs-14 lh-1"><i className="ri-delete-bin-5-line"></i></Link>
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
      
     </div>
    </div>
      
    </>
  )
}

export default Roll
