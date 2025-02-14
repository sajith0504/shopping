import React, { useEffect, useRef, useState } from 'react';
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css'; // Import Dropzone CSS styles
import Sidebar from '../Admin/Sidebar';
import axios from 'axios'; // Import Axios for making HTTP requests

const AddNewCategory = () => {
  const dropzoneRef = useRef(null); // Use useRef to reference the dropzone element
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [categoryName, setCategoryName] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  const [parentCategory, setParentCategory] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState); // Toggle the state to open/close the sidebar
  };

  useEffect(() => {
    // Initialize Dropzone once the component is mounted
    if (dropzoneRef.current) {
      const dropzone = new Dropzone(dropzoneRef.current, {
        url: '/upload.php', // Server-side endpoint to handle uploads
        paramName: 'file', // The name of the parameter to send with the file
        maxFilesize: 2, // Max file size in MB
        acceptedFiles: 'image/*', // Only accept images
        dictDefaultMessage: 'Drop files here or click to upload.', // Default message
        init: function () {
          // You can add event listeners if needed
          this.on('addedfile', (file) => {
            console.log('File added:', file);
            setUploadedFile(file); // Store the uploaded file in state
          });

          this.on('success', (file, response) => {
            console.log('Upload successful:', response);
          });

          this.on('error', (file, errorMessage) => {
            console.log('Error during upload:', errorMessage);
          });
        },
      });

      // Clean up Dropzone on component unmount
      return () => {
        dropzone.destroy();
      };
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!categoryName || !parentCategory) {
      setErrorMessage('Category name and parent category are required.');
      return;
    }
  
    const formData = new FormData();
    formData.append('categoryName', categoryName);
    formData.append('subcategoryName', subcategoryName || '');
    formData.append('parentCategory', parentCategory);
    formData.append('selectedIcon', selectedIcon || '');
    if (uploadedFile) {
      formData.append('file', uploadedFile);
    }
  
    console.log('Form Data Sent:', Object.fromEntries(formData.entries()));
  
    try {
      const response = await axios.post('http://localhost:3000/api/categories', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      console.log('Backend Response:', response.data);
  
      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        setCategoryName('');
        setSubcategoryName('');
        setParentCategory('');
        setSelectedIcon('');
        setUploadedFile(null);
      } else {
        setErrorMessage(response.data.error || 'Failed to add category.');
      }
    } catch (error) {
      console.error('Axios Error:', error);
      if (error.response) {
        console.log('Error Response Data:', error.response.data);
        setErrorMessage(error.response.data.error || 'Something went wrong.');
      } else {
        setErrorMessage('Failed to connect to the server.');
      }
    }
  };
  
  

  const categoryOptions = {
    "Vegetables & Fruit": ["Fruits", "Vegetables"],
    "Beverages": ["Soft Drinks", "Juices", "Tea & Coffee"],
    "Meats & Seafood": ["Chicken", "Fish", "Beef", "Shrimp"],
    "Breakfast & Dairy": ["Milk", "Eggs", "Cheese", "Butter"],
    "Frozen Foods": ["Frozen Meals", "Ice Cream"],
    "Biscuits & Snacks": ["Chips", "Cookies", "Nuts"],
    "Grocery & Staples": ["Rice", "Pulses", "Flour", "Oils"],
    "Crafts": ["Handmade Art", "Woodwork"],
    "Jewellery": ["Necklaces", "Bracelets", "Rings"],
    "Furniture": ["Tables", "Chairs", "Sofas"],
    "Beauty & Personal Care": ["Makeup", "Skincare", "Hair Care"],
    "Health & Wellness": ["Supplements", "Medical Supplies"],
    "Automotive Accessories": ["Car Covers", "Seat Covers"],
    "Pet Supplies": ["Dog Food", "Cat Toys"],
  };


   // Mapping of category icons
   const categoryIcons = {
    "Vegetables & Fruit": "vegetable.svg",
    Beverages: "cup.svg",
    "Meats & Seafood": "meats.svg",
    "Breakfast & Dairy": "breakfast.svg",
    "Frozen Foods": "frozen.svg",
    "Biscuits & Snacks": "biscuit.svg",
    "Grocery & Staples": "grocery.svg",
    "Pet Supplies": "pet.svg",
    "Jewellery":"jewelry.svg",
    "Furniture":"furniture.svg",
    "Health & Wellness":"dumbbell.svg",
    "Automotive Accessories":"automative.svg",
    "Beauty & Personal Care":"lotion.svg",
  };

  // When parent category changes, update icon automatically
  const handleParentChange = (e) => {
    const selectedCategory = e.target.value;
    setParentCategory(selectedCategory);
    setCategoryName(""); // Reset category
    setSelectedIcon(categoryIcons[selectedCategory] || ""); // Auto-set icon if available
  };
  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className="page-body"
        style={{ paddingTop: '100px', paddingLeft: isSidebarOpen ? '74px' : '280px' }}
      >
        {/* New Product Add Start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-8 m-auto">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-header-2">
                        <h5>Category Information</h5>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="theme-form theme-form-2 mega-form">

                         {/* Parent Category Dropdown */}
      <div className="mb-4 row align-items-center">
        <label className="form-label-title col-sm-3 mb-0">Parent Category</label>
        <div className="col-sm-9">
          <select className="form-control" value={parentCategory} onChange={handleParentChange}>
            <option value="">Select Parent Category</option>
            {Object.keys(categoryOptions).map((parent) => (
              <option key={parent} value={parent}>
                {parent}
              </option>
            ))}
          </select>
        </div>
      </div>

    {/* Category Name (Dropdown + Input) */}
    <div className="mb-4 row align-items-center">
        <label className="form-label-title col-sm-3 mb-0">Category</label>
        <div className="col-sm-9">
          {parentCategory && categoryOptions[parentCategory] ? (
            <select
              className="form-control mb-2"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            >
              <option value="">Select Category</option>
              {categoryOptions[parentCategory]?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          ) : null}

          {/* Allow typing custom category */}
          <input
            className="form-control"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Or type a custom category"
          />
        </div>
      </div>
                          {/* Subcategory Name */}
                          <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">Subcategory Name</label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                type="text"
                                value={subcategoryName}
                                onChange={(e) => setSubcategoryName(e.target.value)}
                                placeholder="Subcategory Name"
                              />
                            </div>
                          </div>




                          {/* Category Image Upload */}
                          <div className="mb-4 row align-items-center">
                            <label className="col-sm-3 col-form-label form-label-title">
                              Category Image
                            </label>
                            <div className="form-group col-sm-9">
                              <form
                                ref={dropzoneRef}
                                className="dropzone custom-dropzone"
                                method="post"
                                encType="multipart/form-data"
                              >
                                <div className="dz-message needsclick">
                                  <div>
                                    <i className="icon-cloud-up"></i>
                                    <h6>Drop files here or click to upload.</h6>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>

                            {/* Select Category Icon */}
      <div className="row align-items-center">
        <div className="col-sm-3 form-label-title">Select Category Icon</div>
        <div className="col-sm-9">
          <div className="dropdown icon-dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
              {selectedIcon ? (
                <img src={`/assets/frontend/svg/1/${selectedIcon}`} alt="Selected Icon" style={{ width: "30px", height: "30px" }} />
              ) : (
                "Select Icon"
              )}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {["vegetable.svg", "cup.svg", "meats.svg", "breakfast.svg", "frozen.svg", "biscuit.svg", "grocery.svg", "drink.svg", "milk.svg", "pet.svg","lotion.svg","automative.svg","dumbbell.svg","furniture.svg","jewelry.svg","automative.svg"].map(
                (icon) => (
                  <li key={icon}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedIcon(icon); // Allow manual selection
                      }}
                    >
                      <img src={`/assets/frontend/svg/1/${icon}`} className="img-fluid" alt="" style={{ width: "30px", height: "30px" }} />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      </div>

                        {/* Submit Button */}
                        <div className="card-submit-button">
          <button
            className="btn btn-animation ms-auto"
            type="submit"
            disabled={loading} // Disable the button while loading
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      {/* Show loading spinner */}
      {loading && <div className="loading-spinner">Loading...</div>}

      {successMessage && (
  <div className="alert alert-success">
    {successMessage}
  </div>
)}

{/* Error Message */}
{errorMessage && (
  <div className="alert alert-danger">
    {errorMessage}
  </div>
)}
    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New Product Add End */}
      </div>
    </div>
  );
};

export default AddNewCategory;