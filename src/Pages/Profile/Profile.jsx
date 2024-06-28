import React from 'react'
import Layout from '../../Component/Layout'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <>
     <Layout/>

     <div className="main-content app-content">
    <div className="container-fluid">
      {/* PAGE-HEADER */}
      <div className="page-header">
        <h1 className="page-title my-auto">Profile</h1>
        <div>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="javascript:void(0)">Profile</a>
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
             <div className="card-title">
                Profile Details
              </div>
              <div className='d-flex gap-3'>
                <div>
                   <img src="https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?t=st=1717570613~exp=1717574213~hmac=74c03b7076cfb929d6077dcba39b9905bbe06d6285adbdc4de845c60b299224b&w=900" alt="" width="100px" height="100px" className="rounded mt-3" />
                  
                </div>
                <div className=''>
                   <div className='d-flex gap-3 mt-3'>
                    <button className='btn btn-primary'>Upload new photo</button>
                    <button className='btn btn-primary'>Reset</button>
                   </div>
                  
                </div>
              </div>
              <hr className='mb-3'/>
                <form action="">
                 <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                   <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="First name" aria-describedby="emailHelp"/>
                   </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                   <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Last name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Last name" aria-describedby="emailHelp"/>
                    </div> 
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                   <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"/>
                    </div> 
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-3">
                     <label htmlFor="exampleInputEmail1" className="form-label">Mobile Number</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Mobile Number" aria-describedby="emailHelp"/>
                    </div> 
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-3">
                     <label htmlFor="exampleInputEmail1" className="form-label">Addhar Card Number</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Addhar Card Number" aria-describedby="emailHelp"/>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-3">
                     <label htmlFor="exampleInputEmail1" className="form-label">Pan Card Number</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Pan Card Number" aria-describedby="emailHelp"/>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                   <div className="mb-3 d-flex justify-content-center">
                      <button className='btn btn-primary'>Submit</button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12"></div>
                  <div className="col-lg-6 col-md-6 col-sm-12"></div>
                 </div>
               </form>
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

export default Profile
