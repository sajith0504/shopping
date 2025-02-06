import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Admin/Sidebar";

const Distributor = () => {
  const [distributors, setDistributor] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState); // Toggle the state to open/close the sidebar
  };

  // Fetch distributors from the backend
  useEffect(() => {
    const fetchDistributors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/retailers/view-distributors");
        console.log("Distributors fetched:", response.data);
        setDistributor(response.data.distributors); // Assuming 'distributors' is the correct field name
      } catch (error) {
        console.error("Error fetching distributors:", error.response ? error.response.data : error.message);
        alert("Error fetching distributors: " + (error.response ? error.response.data.message : error.message));
      }
    };
    
    
    
    fetchDistributors();
  }, []);

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="page-body" style={{ paddingTop: "100px", paddingLeft: isSidebarOpen ? "74px" : "280px" }}>
        {/* All User Table Start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="title-header option-title">
                    <h5>All Distributors</h5>
                    <form className="d-inline-flex">
                      <a href="add-new-category.html" className="align-items-center btn btn-theme d-flex">
                        <i data-feather="plus-square"></i>Add New
                      </a>
                    </form>
                  </div>

                  <div className="table-responsive category-table">
                    <table className="table all-package theme-table" id="table_id">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Address</th>
                          <th>District</th>
                          <th>Taluka</th>
                          <th>Pincode</th>
                          <th>Role</th>
                          <th>Referral ID</th>
                          <th>Option</th>
                        </tr>
                      </thead>
                      <tbody>
                        {distributors.length > 0 ? (
                          distributors.map((distributor) => (
                            <tr key={distributor.id}>
                              <td>{distributor.name}</td>
                              <td>{distributor.phone}</td>
                              <td>{distributor.address}</td>
                              <td>{distributor.district}</td>
                              <td>{distributor.taluka}</td>
                              <td>{distributor.pincode}</td>
                              <td>{distributor.role}</td>
                              <td>{distributor.referralId}</td>
                              <td>
                                <ul>
                                  <li>
                                    <a href="javascript:void(0)">
                                      <i className="ri-pencil-line"></i>
                                    </a>
                                  </li>

                                  <li>
                                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                                      <i className="ri-delete-bin-line"></i>
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="9">No distributors found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* All User Table Ends */}
      </div>
    </div>
  );
};

export default Distributor;
