import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // State to track open submenu
  const sidebarRef = useRef(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('id');
    const userRole = localStorage.getItem('role');

    // Check if the token, userName, userId, and userRole exist
    if (token && userName && userId && userRole) {
      setUser({ name: userName, id: userId, role: userRole }); // Set the full user object
    } else {
      window.location.href = '/'; // Redirect to login if not logged in
    }
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Close submenu if the user clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenSubmenu(null); // Close all submenus
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Adjust the mobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle submenu
  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index); // Toggle submenu based on index
  };



  
  return (
    <div>
      {/* tap on top start */}
      <div className="tap-top">
        <span className="lnr lnr-chevron-up"></span>
      </div>
      {/* tap on top end */}

      {/* page-wrapper Start */}
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        {/* Page Header Start */}
        <div className="page-header">
          <div className="header-wrapper m-0">
            <div className="header-logo-wrapper p-0">
              <div className="logo-wrapper">
                <Link to='/admin'>
                  <img className="img-fluid main-logo" src="assets/images/logo/1.png" alt="logo" />
                  <img className="img-fluid white-logo" src="assets/images/logo/1-white.png" alt="logo" />
                </Link>
              </div>
              <div className="toggle-sidebar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleSidebar}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-align-center status_toggle middle sidebar-toggle"
                >
                  <line x1="18" y1="10" x2="6" y2="10"></line>
                  <line x1="21" y1="6" x2="3" y2="6"></line>
                  <line x1="21" y1="14" x2="3" y2="14"></line>
                  <line x1="18" y1="18" x2="6" y2="18"></line>
                </svg>
              </div>
            </div>

            <form className="form-inline search-full" action="javascript:void(0)" method="get">
              <div className="form-group w-100">
                <div className="Typeahead Typeahead--twitterUsers">
                  <div className="u-posRelative">
                    <input
                      className="demo-input Typeahead-input form-control-plaintext w-100"
                      type="text"
                      placeholder="Search Fastkart .."
                      name="q"
                    />
                    <i className="close-search" data-feather="x"></i>
                    <div className="spinner-border Typeahead-spinner" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                  <div className="Typeahead-menu"></div>
                </div>
              </div>
            </form>

            <div className="nav-right col-6 pull-right right-header p-0">
              <ul className="nav-menus">
                <li>
                  <span className="header-search">
                    <i className="ri-search-line"></i>
                  </span>
                </li>
                <li className="onhover-dropdown">
                  <div className="notification-box">
                    <i className="ri-notification-line"></i>
                    <span className="badge rounded-pill badge-theme">4</span>
                  </div>
                  <ul className="notification-dropdown onhover-show-div">
                    <li>
                      <i className="ri-notification-line"></i>
                      <h6 className="f-18 mb-0">Notifications</h6>
                    </li>
                    {/* Notification list items */}
                    <li>
                      <p>
                        <i className="fa fa-circle me-2 font-primary"></i>Delivery processing <span className="pull-right">10 min.</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-circle me-2 font-success"></i>Order Complete<span className="pull-right">1 hr</span>
                      </p>
                    </li>
                    {/* Add more notifications here */}
                  </ul>
                </li>
                <li>
                  <div className="mode">
                    <i className="ri-moon-line"></i>
                  </div>
                </li>
                <li className="profile-nav onhover-dropdown pe-0 me-0">
                  <div className="media profile-media">
                    <img className="user-profile rounded-circle" src="assets/images/users/4.jpg" alt="user" />
                    {user ? (
                <div className="user-name-hide media-body">
                    <span>{user.name}</span> {/* Display user name */}
                    <p className="mb-0 font-roboto">
                        {user.role}<i className="middle ri-arrow-down-s-line"></i>
                    </p>
                </div>
            ) : (
                <p>Loading...</p> // Display a loading message while fetching user info
            )}
                  </div>
                  <ul className="profile-dropdown onhover-show-div" style={{display:'flex',flexDirection:'column'}}>
                    <li>
                      <a href="all-users.html">
                        <i data-feather="users"></i>
                        <span>Users</span>
                      </a>
                    </li>
                    <li>
                      <a href="order-list.html">
                        <i data-feather="archive"></i>
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="profile-setting.html">
                        <i data-feather="settings"></i>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li>
                      <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="">
                        <i data-feather="log-out"></i>
                        <span>Log out</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Page Header Ends */}

        {/* Page Body Start */}
        <div className="page-body-wrapper">
          <div
            className={`sidebar-wrapper ${isSidebarOpen ? "close_icon" : ""}`}
            ref={sidebarRef}
          >
            <div>
            <div className="logo-wrapper logo-wrapper-center">
          <Link to='/admin' title="">
            <img
              className="img-fluid for-white"
              src="assets/images/logo/full-white.png"
              alt="logo"
            />
          </Link>
          <div className="back-btn" onClick={toggleSidebar}>
            <i className="fa fa-angle-left"></i>
          </div>
          <div class="toggle-sidebar">
            <i
              class="ri-apps-line status_toggle middle sidebar-toggle"
              onClick={toggleSidebar}
            ></i>
          </div>
        </div>
        <div className="logo-icon-wrapper">
        <Link to='/admin' title="">
            <img
              className="img-fluid main-logo main-white"
              src="assets/images/logo/logo.png"
              alt="logo"
            />
            <img
              className="img-fluid main-logo main-dark"
              src="assets/images/logo/logo-white.png"
              alt="logo"
            />
            </Link>
        </div>

              <nav className="sidebar-main">


              <SimpleBar id="simple-bar">
              <ul className="sidebar-links">
                <li className="sidebar-list">
                  <Link
                    className="sidebar-link sidebar-title link-nav"
                     to='/admin'
                  >
                    <i className="ri-home-line"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(1);
                    }}
                    aria-expanded={openSubmenu === 1 ? "true" : "false"}
                  >
                    <i className="ri-store-3-line"></i>
                    <div className="dropcontant">
                      <span>Product</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 1 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 1 && (
                    <ul className="sidebar-submenu">
                      <li>
                        {/* <a href="products.html">Products</a> */}
                        <Link to="/productdisplay">Products</Link>
                      </li>
                      <li>
                      <Link to="/addproduct">Add New Products</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(2);
                    }}
                    aria-expanded={openSubmenu === 2 ? "true" : "false"}
                  >
                    <i className="ri-list-check-2"></i>
                    <div className="dropcontant">
                      <span>Category</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 2 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 2 && (
                    <ul className="sidebar-submenu">
                      <li>
                      <Link to="/category">Category List</Link>
                      </li>
                      <li>
                      <Link to="/adc">Add New Category</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(3);
                    }}
                    aria-expanded={openSubmenu === 3 ? "true" : "false"}
                  >
                    <i className="ri-list-settings-line"></i>
                    <div className="dropcontant">
                      <span>Attributes</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 3 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 3 && (
                    <ul className="sidebar-submenu">
                      <li>
                        {/* <a href="attributes.html">Attributes</a> */}
                        <Link to="/attribute">Attributes</Link>
                      </li>
                      <li>
                        {/* <a href="add-new-attributes.html">Add Attributes</a> */}
                        <Link to="/addnewattribute">Add Attributes</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(4);
                    }}
                    aria-expanded={openSubmenu === 4 ? "true" : "false"}
                  >
                    <i className="ri-user-3-line"></i>
                    <div className="dropcontant">
                      <span>Users</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 4 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 4 && (
                    <ul className="sidebar-submenu">
                      <li>
                        {/* <a href="all-users.html">All users</a> */}
                        <Link to="/users">All Users</Link>
                      </li>
                      <li>
                        {/* <a href="add-new-user.html">Add new user</a> */}
                        <Link to="/addnewuser">Add New User</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {user?.role === "Superadmin" && (
                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(5);
                    }}
                    aria-expanded={openSubmenu === 5 ? "true" : "false"}
                  >
                    <i className="ri-user-3-line"></i>
                    <div className="dropcontant">
                      <span>Admin</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 5 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 5 && (
                    <ul className="sidebar-submenu">
                      <li>
                        {/* <a href="all-users.html">Admin list</a> */}
                        <Link to="/viewadmin">Admin list</Link>
                      </li>
                      <li>
                        {/* <a href="add-new-user.html">Add Admin</a> */}
                        <Link to="/addadmin">Add Admin</Link>
                      </li>
                    </ul>
                  )}
                </li>
                )}

{/* Admin & Superadmin: Show Distributor */}
{(user?.role === "Superadmin" || user?.role === "admin") && (

                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(6);
                    }}
                    aria-expanded={openSubmenu === 6 ? "true" : "false"}
                  >
                    <i className="ri-user-3-line"></i>
                    <div className="dropcontant">
                      <span>Distributor</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 6 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 6 && (
                    <ul className="sidebar-submenu">
                      <li>
                        {/* <a href="all-users.html">All Distributors</a> */}
                        <Link to="/distributor">All Distributors</Link>
                      </li>
                      <li>
                        {/* <a href="add-new-user.html">Add Distributor</a> */}
                        <Link to="/adddistributor">Add Distributor</Link>
                      </li>
                    </ul>
                  )}
                </li>
)}
              
               {/* Superadmin, Admin & Distributor: Show Retailer */}
      {(user?.role === "Superadmin" || user?.role === "admin" || user?.role === "distributor") && (

                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(7);
                    }}
                    aria-expanded={openSubmenu === 7 ? "true" : "false"}
                  >
                    <i className="ri-user-3-line"></i>
                    <div className="dropcontant">
                      <span>Retailers</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 7 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 7 && (
                    <ul className="sidebar-submenu">
                      <li>
                        {/* <a href="all-users.html">All Retailers</a> */}
                        <Link to="/retailer">All Retailers</Link>
                      </li>
                      <li>
                        {/* <a href="add-new-user.html">Add Retailers</a> */}
                        <Link to="/addretailer">Add Retailer</Link>
                      </li>
                    </ul>
                  )}
                </li>
      )}

                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(8);
                    }}
                    aria-expanded={openSubmenu === 8 ? "true" : "false"}
                  >
                    <i className="ri-user-3-line"></i>
                    <div className="dropcontant">
                      <span>Customer</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 8 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 8 && (
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="all-users.html">All Customer</a>
                      </li>
                      <li>
                        <a href="add-new-user.html">Add Customer</a>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(9);
                    }}
                    aria-expanded={openSubmenu === 9 ? "true" : "false"}
                  >
                    <i className="ri-user-3-line"></i>
                    <div className="dropcontant">
                      <span>Roles</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 9 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 9 && (
                    <ul className="sidebar-submenu">
                      <li>
                        {/* <a href="role.html">All roles</a> */}
                        <Link to="/roles">All Roles</Link>
                      </li>
                      <li>
                        {/* <a href="create-role.html">Create Role</a> */}
                        <Link to="/addnewrole">Add New Role</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-list">
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="media.html"
                  >
                    <i className="ri-price-tag-3-line"></i>
                    <span>Media</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(10);
                    }}
                    aria-expanded={openSubmenu === 10 ? "true" : "false"}
                  >
                    <i className="ri-archive-line"></i>
                    <div className="dropcontant">
                      <span>Orders</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 10 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 10 && (
                    <ul className="sidebar-submenu">
                      <li>
                        {/* <a href="order-list.html">Order List</a> */}
                        <Link to="/orderlist">Order List</Link>
                      </li>
                      <li>
                        {/* <a href="order-detail.html">Order Detail</a> */}
                        <Link to="/orderdetail">Order Detail</Link>
                      </li>
                      <li>
                        {/* <a href="order-tracking.html">Order Tracking</a> */}
                        <Link to="/ordertrack">Order Tracking</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(11);
                    }}
                    aria-expanded={openSubmenu === 11 ? "true" : "false"}
                  >
                    <i className="ri-focus-3-line"></i>
                    <div className="dropcontant">
                      <span>Localization</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 11 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 11 && (
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="translation.html">Translation</a>
                      </li>
                      <li>
                        <a href="currency-rates.html">Currency Rates</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(12);
                    }}
                    aria-expanded={openSubmenu === 12 ? "true" : "false"}
                  >
                    <i className="ri-price-tag-3-line"></i>
                    <div className="dropcontant">
                      <span>Coupons</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 12 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 12 && (
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="coupon-list.html">Coupon List</a>
                      </li>
                      <li>
                        <a href="create-coupon.html">Create Coupon</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-list">
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="taxes.html"
                  >
                    <i className="ri-price-tag-3-line"></i>
                    <span>Tax</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="product-review.html"
                  >
                    <i className="ri-star-line"></i>
                    <span>Product Review</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="support-ticket.html"
                  >
                    <i className="ri-phone-line"></i>
                    <span>Support Ticket</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <a
                    className="linear-icon-link sidebar-link sidebar-title"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuToggle(13);
                    }}
                    aria-expanded={openSubmenu === 13 ? "true" : "false"}
                  >
                    <i className="ri-settings-line"></i>
                    <div className="dropcontant">
                      <span>Settings</span>
                      <i
                        className={`ri-arrow-right-s-line submenu-arrow ${
                          openSubmenu === 13 ? "rotate" : ""
                        }`}
                      ></i>
                    </div>
                  </a>
                  {openSubmenu === 13 && (
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="profile-setting.html">Profile Setting</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-list">
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="reports.html"
                  >
                    <i className="ri-file-chart-line"></i>
                    <span>Reports</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="list-page.html"
                  >
                    <i className="ri-list-check"></i>
                    <span>List Page</span>
                  </a>
                </li>
              </ul>
            </SimpleBar>
                <div className="left-arrow" id="left-arrow">
                  <i data-feather="arrow-left"></i>
                </div>
                <div id="sidebar-menu">
                  {/* Add your sidebar menu items here */}
                </div>
                <div className="right-arrow" id="right-arrow">
                  <i data-feather="arrow-right"></i>
                </div>
              </nav>

              {/* Mobile Back Button */}
              {isMobile && (
                <div className="mobile-back" onClick={toggleSidebar}>
                  <i className="ri-arrow-left-s-line"></i>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Page Body End */}
      </div>
      {/* page-wrapper End */}

      {/* Modal Start */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="modal-title" id="staticBackdropLabel">Logging Out</h5>
              <p>Are you sure you want to log out?</p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="button-box">
                <button type="button" className="btn btn--no" data-bs-dismiss="modal">
                  No
                </button>
                <button type="button" className="btn btn--yes btn-primary" onClick={() => (window.location.href = '/')}>
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal End */}
    </div>
  );
};

export default Sidebar;
