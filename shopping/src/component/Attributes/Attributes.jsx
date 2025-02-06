import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Admin/Sidebar";


const Attributes = () => {
  const [attributes, setAttributes] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Toggle the state to open/close the sidebar
};

  // Fetch attributes from the backend
  useEffect(() => {
    const fetchAttributes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/get-attributes");
        setAttributes(response.data.attributes); // Assuming the response has the attributes
      } catch (error) {
        console.error("Error fetching attributes:", error);
      }
    };

    fetchAttributes();
  }, []);

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="page-body" style={{paddingTop:'100px',paddingLeft:isSidebarOpen ? '74px':'280px'}}>
        {/*  All User Table Start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="title-header option-title">
                    <h5>All Attributes</h5>
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
                          <th>Value</th>
                          <th>Option</th>
                        </tr>
                      </thead>

                      <tbody>
  {attributes.length > 0 ? (
    attributes.map((attribute) => (
      <tr key={attribute.id}>
        <td>{attribute.name}</td>
        <td>
          {/* Display values (join array into a comma-separated string) */}
          {Array.isArray(attribute.attribute_values) && attribute.attribute_values.length > 0
            ? attribute.attribute_values.join(", ")
            : "No values"}
        </td>
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
      <td colSpan="3">No attributes found</td>
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
        {/*  All User Table Ends */}
      </div>
    </div>
  );
};

export default Attributes;
