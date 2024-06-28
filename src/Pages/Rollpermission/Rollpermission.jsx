import React from 'react'
import Layout from '../../Component/Layout'
import { Link } from 'react-router-dom'
import TagsInput from 'react-tagsinput'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const top100Films = [
  
    { title: 'Indore', },
    { title: 'Ujjain', },
    { title: 'Ryan', },
    { title: 'Once', },
    { title: 'American', },
    { title: 'Interstellar', },
  ];

const Rollpermission = () => {
 
  return (
    <>
      <Layout/>   

      <div className="main-content app-content">
       <div className="container-fluid">
        {/* PAGE-HEADER */}
        <div className="page-header">
            <h1 className="page-title my-auto">Roles Permission</h1>
            <div>
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                <a href="javascript:void(0)">Roles Permission</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/Roll">Roles </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/">Dashboard </Link>
                </li>
                <li>
                  
              
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
                                    <i className="fa-solid fa-dice me-2 align-middle d-inline-block fs-16"></i>
                                   Roles</button>
                        </li>
                        <li className="nav-item rounded" role="presentation">
                            <button className="nav-link" id="gallery-tab" data-bs-toggle="tab"
                                data-bs-target="#gallery-tab-pane" type="button" role="tab"
                                aria-controls="gallery-tab-pane" aria-selected="false">
                                    <i className="fa-solid fa-drum-steelpan me-2 align-middle d-inline-block fs-16"></i>
                                   Permission</button>
                        </li>
                    </ul>
                </div> 
                </div>
            </div>
                <div className="py-0">
                 <div className="tab-content" id="myTabContent">
                 <div className="tab-pane show active fade p-0 border-0 bg-white p-4 rounded-3" id="activity-tab-pane"role="tabpanel" aria-labelledby="activity-tab" tabindex="0">
                    <form action="">
                      <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <label htmlFor="input-placeholder" className="form-label">Name</label>
                      <input type="text" className="form-control" id="input-placeholder" placeholder="Name"/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <label htmlFor="input-placeholder" className="form-label">Status</label>
                      <input type="text" className="form-control" id="input-placeholder" placeholder="Name"/>
                    </div>
                      </div>
                    </form>
                  </div>

                  <div className="tab-pane show  fade p-0 border-0 bg-white p-4 rounded-3" id="gallery-tab-pane" role="tabpanel" aria-labelledby="gallery-tab" tabindex="0">
                    <form >
                     <div className="row p-0"  style={{width : '100%', height : '400px', overflow: 'auto', scrollbarWidth : 'thin'}}>
                     <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Home page
                        </label>
                      </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-12 mb-3">
                       <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={top100Films}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.title}
                            </li>
                        )}
                        style={{ width: "auto" }}
                        renderInput={(params) => (
                            <TextField {...params} label="" placeholder="Select"  />
                        )}
                        />                              
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            About page
                        </label>
                      </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-12 mb-3">
                       <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={top100Films}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.title}
                            </li>
                        )}
                        style={{ width: "auto" }}
                        renderInput={(params) => (
                            <TextField {...params} label="" placeholder="Select"  />
                        )}
                        />                              
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                           Profile page
                        </label>
                      </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-12 mb-3">
                       <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={top100Films}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.title}
                            </li>
                        )}
                        style={{ width: "auto" }}
                        renderInput={(params) => (
                            <TextField {...params} label="" placeholder="Select"  />
                        )}
                        />                              
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            View page
                        </label>
                      </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-12 mb-3">
                       <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={top100Films}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.title}
                            </li>
                        )}
                        style={{ width: "auto" }}
                        renderInput={(params) => (
                            <TextField {...params} label="" placeholder="Select"  />
                        )}
                        />                              
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Blog page
                        </label>
                      </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-12 mb-3">
                       <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={top100Films}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.title}
                            </li>
                        )}
                        style={{ width: "auto" }}
                        renderInput={(params) => (
                            <TextField {...params} label="" placeholder="Select"  />
                        )}
                        />                              
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Home page
                        </label>
                      </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-12 mb-3">
                       <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={top100Films}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.title}
                            </li>
                        )}
                        style={{ width: "auto" }}
                        renderInput={(params) => (
                            <TextField {...params} label="" placeholder="Select"  />
                        )}
                        />                              
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Home page
                        </label>
                      </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-12 mb-3">
                       <Autocomplete 
                        multiple
                        id="checkboxes-tags-demo"
                        options={top100Films}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.title}
                            </li>
                        )}
                        style={{ width: "auto" }}
                        renderInput={(params) => (
                            <TextField {...params} label="" placeholder="Select"  />
                        )}
                        />                              
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Home page
                        </label>
                      </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-12 mb-3">
                       <Autocomplete 
                        multiple
                        id="checkboxes-tags-demo"
                        options={top100Films}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.title}
                            </li>
                        )}
                        style={{ width: "auto" }}
                        renderInput={(params) => (
                            <TextField {...params} label="" placeholder="Select"  />
                        )}
                        />                              
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

export default Rollpermission
