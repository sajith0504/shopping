import React, { useState, useEffect } from 'react';
import Sidebar from '../Admin/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Toggle the sidebar
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getcategory');
        // console.log('Fetched categories:', response.data.categories);
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories(); // Invoke the function
  }, []);

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="page-body" style={{ paddingTop: '100px', paddingLeft: isSidebarOpen ? '74px' : '280px' }}>
        {/* All User Table Start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="title-header option-title">
                    <h5>All Categories</h5>
                    <form className="d-inline-flex">
                      <Link to="/adc" className="align-items-center btn btn-theme d-flex">
                        Add New
                      </Link>
                    </form>
                  </div>

                  <div className="table-responsive category-table">
                    <table className="table all-package theme-table">
                      <thead>
                        <tr>
                          <th>Category Name</th>
                          <th>Date</th>
                          <th>Category Image</th>
                          <th>Icon</th>
                          <th>Slug</th>
                          <th>Options</th>
                        </tr>
                      </thead>

                      <tbody>
                        {categories.length > 0 ? (
                          categories.map((category, index) => (
                            <tr key={index}>
                              <td>{category.category_name}</td>
                              <td>{new Date(category.created_at).toLocaleDateString()}</td>
                              <td>
  {category.image ? (
    <img src={category.image} alt="Category" width="50" />
  ) : (
    'No Image'
  )}
</td>
<td>
  {category.icon ? (
   <img src={category.icon} alt="Category Icon" style={{ width: '30px', height: '30px' }} />

  ) : (
    'No Icon'
  )}
</td>

                              <td>{category.slug || 'N/A'}</td>
                              <td>
                                <ul>
                                  <li>
                                    <Link to={`/category/${category.id}`}>
                                      <i className="ri-eye-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={`/edit-category/${category.id}`}>
                                      <i className="ri-pencil-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <button
                                      onClick={() => console.log('Delete', category.id)}
                                      className="btn btn-danger"
                                    >
                                      <i className="ri-delete-bin-line"></i>
                                    </button>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6">No categories found</td>
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

export default Category;

