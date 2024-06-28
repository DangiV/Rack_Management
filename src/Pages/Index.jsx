import React from 'react'
import Layout from '../Component/Layout'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <>
    <Layout />
    <>
  {/* Start::app-content */}
  <div className="main-content app-content">
    <div className="container-fluid">
      {/* PAGE-HEADER */}
      <div className="page-header">
        <h1 className="page-title my-auto">Dashboard 01</h1>
        <div>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </div>
      </div>
      {/* PAGE-HEADER END */}
      {/* ROW-1 */}
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
          <div className="card overflow-hidden">
            <div className="card-body">
              <div className="d-flex">
                <div className="mt-2">
                  <h6 className="fw-normal">Total Users</h6>
                  <h2 className="mb-0 text-dark fw-semibold">44,278</h2>
                </div>
                <div className="ms-auto">
                  <div className="chart-wrapper mt-1">
                    <canvas id="saleschart" className="chart-dropshadow" />
                  </div>
                </div>
              </div>
              <span className="text-muted fs-12">
                <span className="text-secondary">
                  <i className="fe fe-arrow-up-circle text-secondary" /> 5%
                </span>
                Last week
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
          <div className="card overflow-hidden">
            <div className="card-body">
              <div className="d-flex">
                <div className="mt-2">
                  <h6 className="fw-normal">Total Profit</h6>
                  <h2 className="mb-0 text-dark fw-semibold">67,987</h2>
                </div>
                <div className="ms-auto">
                  <div className="chart-wrapper mt-1">
                    <canvas id="leadschart" className="chart-dropshadow" />
                  </div>
                </div>
              </div>
              <span className="text-muted fs-12">
                <span className="text-pink">
                  <i className="fe fe-arrow-down-circle text-pink" /> 0.75%
                </span>
                Last 6 days
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
          <div className="card overflow-hidden">
            <div className="card-body">
              <div className="d-flex">
                <div className="mt-2">
                  <h6 className="fw-normal">Total Expenses</h6>
                  <h2 className="mb-0 text-dark fw-semibold">$76,965</h2>
                </div>
                <div className="ms-auto">
                  <div className="chart-wrapper mt-1">
                    <canvas id="profitchart" className="chart-dropshadow" />
                  </div>
                </div>
              </div>
              <span className="text-muted fs-12">
                <span className="text-green">
                  <i className="fe fe-arrow-up-circle text-green" /> 0.9%
                </span>
                Last 9 days
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
          <div className="card overflow-hidden">
            <div className="card-body">
              <div className="d-flex">
                <div className="mt-2">
                  <h6 className="fw-normal">Total Cost</h6>
                  <h2 className="mb-0 text-dark fw-semibold">$59,765</h2>
                </div>
                <div className="ms-auto">
                  <div className="chart-wrapper mt-1">
                    <canvas id="costchart" className="chart-dropshadow" />
                  </div>
                </div>
              </div>
              <span className="text-muted fs-12">
                <span className="text-warning">
                  <i className="fe fe-arrow-up-circle text-warning" /> 0.6%
                </span>
                Last year
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ROW-1 END */}
    </div>
  </div>
  {/* End::app-content */}
  <div
    className="modal fade"
    id="searchModal"
    tabIndex={-1}
    aria-labelledby="searchModal"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <div className="input-group">
            <Link to=""
              className="input-group-text"
              id="Search-Grid"
            >
              <i className="fe fe-search header-link-icon fs-18" />
            </Link>
            <input
              type="search"
              className="form-control border-0 px-2"
              placeholder="Search"
              aria-label="Username"
            />
            <Link to=""
              className="input-group-text"
              id="voice-search"
            >
              <i className="fe fe-mic header-link-icon" />
            </Link>
            <Link to=""
              className="btn btn-light btn-icon"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fe fe-more-vertical" />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="font-weight-semibold text-muted mb-2">
              Are You Looking For...
            </p>
            <span className="search-tags">
              <i className="fe fe-user me-2" />
              People
              <Link to="" className="tag-addon">
                <i className="fe fe-x" />
              </Link>
            </span>
            <span className="search-tags">
              <i className="fe fe-file-text me-2" />
              Pages
              <Link to="" className="tag-addon">
                <i className="fe fe-x" />
              </Link>
            </span>
            <span className="search-tags">
              <i className="fe fe-align-left me-2" />
              Articles
              <Link to="" className="tag-addon">
                <i className="fe fe-x" />
              </Link>
            </span>
            <span className="search-tags">
              <i className="fe fe-server me-2" />
              Tags
              <Link to="" className="tag-addon">
                <i className="fe fe-x" />
              </Link>
            </span>
          </div>
          <div className="my-4">
            <p className="font-weight-semibold text-muted mb-2">
              Recent Search :
            </p>
            <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
              <Link to="">
                <span>Notifications</span>
              </Link>
              <Link to=""
                className="ms-auto lh-1"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fe fe-x text-muted" />
              </Link>
            </div>
            <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
              <a href="alerts.html">
                <span>Alerts</span>
              </a>
              <Link to=""
                className="ms-auto lh-1"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fe fe-x text-muted" />
              </Link>
            </div>
            <div className="p-2 border br-5 d-flex align-items-center text-muted mb-0 alert">
              <a href="mail.html">
                <span>Mail</span>
              </a>
              <Link to=""
                className="ms-auto lh-1"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fe fe-x text-muted" />
              </Link>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="btn-group ms-auto">
            <button className="btn btn-sm btn-primary-light">Search</button>
            <button className="btn btn-sm btn-primary">Clear Recents</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Start Switcher */}
  <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    id="sidebar-right"
    aria-labelledby="offcanvasRightLabel2"
  >
    <div className="offcanvas-header border-bottom bg-primary text-fixed-white">
      <h6
        className="offcanvas-title d-inline-flex text-fixed-white"
        id="offcanvasRightLabel2"
      >
        <span className=" me-2 d-inline-flex">
          <i className="fe fe-bell my-auto" />{" "}
          <span className=" pulse w-9 h-9 bg-success rounded-circle" />
        </span>
        Notifications
      </h6>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body p-0">
      <nav className="nav nav-tabs nav-justified" role="tablist">
        <button
          className="nav-link active"
          id="sidebar-side1"
          data-bs-toggle="tab"
          data-bs-target="#sidebar-slidepane-1"
          type="button"
          role="tab"
          aria-controls="sidebar-slidepane-1"
          aria-selected="true"
        >
          <i className="d-inline-flex fe fe-settings me-1" /> Feeds
        </button>
        <button
          className="nav-link"
          id="sidebar-side2"
          data-bs-toggle="tab"
          data-bs-target="#sidebar-slidepane-2"
          type="button"
          role="tab"
          aria-controls="sidebar-slidepane-2"
          aria-selected="false"
        >
          <i className="d-inline-flex fe fe-message-circle me-1" />
          Chat
        </button>
        <button
          className="nav-link"
          id="sidebar-side3"
          data-bs-toggle="tab"
          data-bs-target="#sidebar-slidepane-3"
          type="button"
          role="tab"
          aria-controls="sidebar-slidepane-3"
          aria-selected="false"
        >
          <i className="d-inline-flex fe fe-anchor me-1" />
          Timeline
        </button>
      </nav>
      <div className="tab-content">
        <div
          className="tab-pane fade show active border-0 p-0"
          id="sidebar-slidepane-1"
          role="tabpanel"
          aria-labelledby="sidebar-side1"
          tabIndex={0}
        >
          <div className="p-3 fw-semibold">Feeds</div>
          <div className="py-3 px-4 pt-0">
            <div className="row mb-3">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-primary-transparent">
                  <i className="fe fe-user text-primary" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">New user registered</h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings me-1" />
                    </Link>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-x" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-secondary-transparent">
                  <i className="fe fe-shopping-cart text-secondary" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">New order delivered</h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings me-1" />
                    </Link>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-x" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-danger-transparent">
                  <i className="fe fe-bell text-danger" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">
                    You have pending tasks
                  </h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings me-1" />
                    </Link>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-x" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-warning-transparent">
                  <i className="fe fe-gitlab text-warning" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">New version arrived</h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings me-1" />
                    </Link>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-x" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-pink-transparent">
                  <i className="fe fe-database text-pink" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">Server #1 overloaded</h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings me-1" />
                    </Link>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-x" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-info-transparent">
                  <i className="fe fe-check-circle text-info" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">New project launched</h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings me-1" />
                    </Link>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-x" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 fw-semibold">Settings</div>
          <div className="py-3 px-4 pt-0">
            <div className="row mb-3">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-primary-transparent">
                  <i className="fe fe-settings text-primary" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">General Settings</h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-secondary-transparent">
                  <i className="fe fe-map-pin text-secondary" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">Map Settings</h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-danger-transparent">
                  <i className="fe fe-headphones text-danger" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">Support Settings</h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-warning-transparent">
                  <i className="fe fe-credit-card text-warning" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">Payment Settings</h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2 mb-sm-0 mb-3">
                <span className="feeds avatar avatar-sm avatar-rounded bg-pink-transparent">
                  <i className="fe fe-bell text-pink" />
                </span>
              </div>
              <div className="col-sm-10 ps-sm-0 my-auto">
                <div className="d-flex align-items-end justify-content-between ms-2">
                  <h6 className="mb-0 fw-normal fs-14">
                    Notification Settings
                  </h6>
                  <div>
                    <Link to=""
                      aria-label="anchor"
                      className="text-primary"
                    >
                      <i className="fe fe-settings" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade border-0 p-0"
          id="sidebar-slidepane-2"
          role="tabpanel"
          aria-labelledby="sidebar-side2"
          tabIndex={0}
        >
          <div className="p-3 fw-semibold">Today</div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/2.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Addie Minstra</div>
                <p className="mb-0 fs-12 text-muted">
                  {" "}
                  Hey! there I' am available....{" "}
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md online avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/11.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Rose Bush</div>
                <p className="mb-0 fs-12 text-muted">
                  {" "}
                  Okay...I will be waiting for you{" "}
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/10.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Claude Strophobia</div>
                <p className="mb-0 fs-12 text-muted">
                  {" "}
                  Hi we can explain our new project......
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/13.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Eileen Dover</div>
                <p className="mb-0 fs-12 text-muted">
                  {" "}
                  New product Launching...
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md online avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/12.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Willie Findit</div>
                <p className="mb-0 fs-12 text-muted">
                  {" "}
                  Okay...I will be waiting for you{" "}
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/15.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Manny Jah</div>
                <p className="mb-0 fs-12 text-muted">
                  {" "}
                  Hi we can explain our new project......
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-0 px-3">
            <div className="me-2">
              <span
                className="avatar avatar-md avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/4.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Cherry Blossom</div>
                <p className="mb-0 fs-12 text-muted">
                  {" "}
                  Hey! there I' am available....
                </p>
              </a>
            </div>
          </div>
          <div className="p-3 fw-semibold">Yesterday</div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md online avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/7.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Simon Sais</div>
                <p className="mb-0 fs-12 text-muted">
                  Schedule Realease......{" "}
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/9.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Laura Biding</div>
                <p className="mb-0 fs-12 text-muted">
                  Hi we can explain our new project......{" "}
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md online avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/2.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Addie Minstra</div>
                <p className="mb-0 fs-12 text-muted">
                  Contact me for details....
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/9.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Ivan Notheridiya</div>
                <p className="mb-0 fs-12 text-muted">
                  Hi we can explain our new project......
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/14.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Dulcie Veeta</div>
                <p className="mb-0 fs-12 text-muted">
                  {" "}
                  Okay...I will be waiting for you
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/11.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Florinda Carasco</div>
                <p className="mb-0 fs-12 text-muted">
                  New product Launching...
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 px-3 pt-0">
            <div className="me-2">
              <span
                className="avatar avatar-md online avatar-rounded cover-image"
                data-bs-image-src="../assets/images/faces/11.jpg"
              />
            </div>
            <div className="">
              <a href="chat.html">
                <div className="fw-semibold text-dark">Cherry Blossom</div>
                <p className="mb-0 fs-12 text-muted">cherryblossom@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade border-0 p-3"
          id="sidebar-slidepane-3"
          role="tabpanel"
          aria-labelledby="sidebar-side3"
          tabIndex={0}
        >
          <ul className="task-list timeline-task">
            <li className="d-sm-flex">
              <div>
                <i className="task-icon1" />
                <h6 className="fw-semibold fs-14">
                  Task Finished
                  <span className="text-muted fs-11 mx-2 fw-normal">
                    09 July 2021
                  </span>
                </h6>
                <p className="text-muted fs-12 mb-0">
                  Adam Berry finished task on
                  <Link to=""
                    className="fw-semibold text-primary"
                  >
                    {" "}
                    Project Management
                  </Link>
                </p>
              </div>
              <div className="ms-auto d-md-flex task-icon-link">
                <Link to=""
                  aria-label="anchor"
                  className="text-muted me-2"
                >
                  <i className="fe fe-edit" />
                </Link>
                <Link to=""
                  aria-label="anchor"
                  className="text-muted"
                >
                  <i className="fe fe-trash-2 fs-12" />
                </Link>
              </div>
            </li>
            <li className="d-sm-flex">
              <div>
                <i className="task-icon1" />
                <h6 className="fw-semibold fs-14">
                  New Comment
                  <span className="text-muted fs-11 mx-2 fw-normal">
                    05 July 2021
                  </span>
                </h6>
                <p className="text-muted fs-12 mb-0">
                  Victoria commented on Project{" "}
                  <Link to=""
                    className="fw-semibold text-primary"
                  >
                    {" "}
                    AngularJS Template
                  </Link>
                </p>
              </div>
              <div className="ms-auto d-md-flex task-icon-link">
                <Link to=""
                  aria-label="anchor"
                  className="text-muted me-2"
                >
                  <i className="fe fe-edit" />
                </Link>
                <Link to=""
                  aria-label="anchor"
                  className="text-muted"
                >
                  <i className="fe fe-trash-2 fs-12" />
                </Link>
              </div>
            </li>
            <li className="d-sm-flex">
              <div>
                <i className="task-icon1" />
                <h6 className="fw-semibold fs-14">
                  New Comment
                  <span className="text-muted fs-11 mx-2 fw-normal">
                    25 June 2021
                  </span>
                </h6>
                <p className="text-muted fs-12 mb-0">
                  Victoria commented on Project{" "}
                  <Link to=""
                    className="fw-semibold text-primary"
                  >
                    {" "}
                    AngularJS Template
                  </Link>
                </p>
              </div>
              <div className="ms-auto d-md-flex task-icon-link">
                <Link to=""
                  aria-label="anchor"
                  className="text-muted me-2"
                >
                  <i className="fe fe-edit" />
                </Link>
                <Link to=""
                  aria-label="anchor"
                  className="text-muted"
                >
                  <i className="fe fe-trash-2 fs-12" />
                </Link>
              </div>
            </li>
            <li className="d-sm-flex">
              <div>
                <i className="task-icon1" />
                <h6 className="fw-semibold fs-14">
                  Task Overdue
                  <span className="text-muted fs-11 mx-2 fw-normal">
                    14 June 2021
                  </span>
                </h6>
                <p className="text-muted mb-0 fs-12">
                  Petey Cruiser finished task{" "}
                  <Link to=""
                    className="fw-semibold text-primary"
                  >
                    {" "}
                    Integrated management
                  </Link>
                </p>
              </div>
              <div className="ms-auto d-md-flex task-icon-link">
                <Link to=""
                  aria-label="anchor"
                  className="text-muted me-2"
                >
                  <i className="fe fe-edit" />
                </Link>
                <Link to=""
                  aria-label="anchor"
                  className="text-muted"
                >
                  <i className="fe fe-trash-2 fs-12" />
                </Link>
              </div>
            </li>
            <li className="d-sm-flex">
              <div>
                <i className="task-icon1" />
                <h6 className="fw-semibold fs-14">
                  Task Overdue
                  <span className="text-muted fs-11 mx-2 fw-normal">
                    29 June 2021
                  </span>
                </h6>
                <p className="text-muted mb-0 fs-12">
                  Petey Cruiser finished task{" "}
                  <Link to=""
                    className="fw-semibold text-primary"
                  >
                    {" "}
                    Integrated management
                  </Link>
                </p>
              </div>
              <div className="ms-auto d-md-flex task-icon-link">
                <Link to=""
                  aria-label="anchor"
                  className="text-muted me-2"
                >
                  <i className="fe fe-edit" />
                </Link>
                <Link to=""
                  aria-label="anchor"
                  className="text-muted"
                >
                  <i className="fe fe-trash-2 fs-12" />
                </Link>
              </div>
            </li>
            <li className="d-sm-flex">
              <div>
                <i className="task-icon1" />
                <h6 className="fw-semibold fs-14">
                  Task Finished
                  <span className="text-muted fs-11 mx-2 fw-normal">
                    09 July 2021
                  </span>
                </h6>
                <p className="text-muted fs-12 mb-0">
                  Adam Berry finished task on
                  <Link to=""
                    className="fw-semibold text-primary"
                  >
                    {" "}
                    Project Management
                  </Link>
                </p>
              </div>
              <div className="ms-auto d-md-flex task-icon-link">
                <Link to=""
                  aria-label="anchor"
                  className="text-muted me-2"
                >
                  <i className="fe fe-edit" />
                </Link>
                <Link to=""
                  aria-label="anchor"
                  className="text-muted"
                >
                  <i className="fe fe-trash-2 fs-12" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* End Switcher */}
</>

    </>
  )
}
