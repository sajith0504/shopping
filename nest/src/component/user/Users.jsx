import React, { useState } from 'react';
import '../user/user.css';

const Users = () => {
  // State to manage the sidebar width
  const [sidebarWidth, setSidebarWidth] = useState('var(--width)'); // Initial width is set to the CSS variable

  // Function to toggle sidebar width
  const toggleSidebar = () => {
    // Toggle between the values of the CSS variables
    setSidebarWidth(sidebarWidth === 'var(--width)' ? 'var(--slidewidth)' : 'var(--width)');
  };

  return (
    <div className='main_body'>
      <div className='main_user'>

        <div className='main_user_sidebar' style={{ width: sidebarWidth }}>
          {/* Button to toggle sidebar width */}
          <div
            style={{
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'end',
              color: 'red',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            <h2 onClick={toggleSidebar} style={{ paddingLeft: '10%' }}>x</h2>
           
          </div>
          <ul style={{listStyle:'none',display:'flex',flexDirection:'column', gap:'10px'}} >
              <li><h6>Super Admin</h6></li>
              <li><h6>Admin</h6></li>
              <li><h6>Distributor</h6></li>
              <li><h6>Retailer</h6></li>
              <li><h6>Customer</h6></li>

            </ul>
        </div>
        <div className='main_user_sidebar_dummy'></div>

        <div
          className='main_user_content row'
          style={{
            width: sidebarWidth === 'var(--width)' ? 'var(--contant_org)' : 'var(--contant_slide)',
          }}
        >
          <div className='superadmin_div col-lg-3 col-md-4 col-sm-6'>
            <h3>Super Admin</h3>
          </div>
          <div className='admin_div col-lg-3 col-md-4 col-sm-6'>
            <h3>Admin</h3>
          </div>
          <div className='distributer_div col-lg-3 col-md-4 col-sm-6'>
            <h3>Distributor</h3>
          </div>
          <div className='retailer_div col-lg-3 col-md-4 col-sm-6'>
            <h3>Retailer</h3>
          </div>
          <div className='custemer_div col-lg-3 col-md-4 col-sm-6'>
            <h3>Customer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
