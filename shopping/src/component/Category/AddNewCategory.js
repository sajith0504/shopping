import React, { useEffect, useRef,useState } from 'react';
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css'; // Import Dropzone CSS styles
import Sidebar from '../Admin/Sidebar';

const AddNewCategory = () => {
  const dropzoneRef = useRef(null);  // Use useRef to reference the dropzone element
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Toggle the state to open/close the sidebar
};

  useEffect(() => {
    // Initialize Dropzone once the component is mounted
    if (dropzoneRef.current) {
      const dropzone = new Dropzone(dropzoneRef.current, {
        url: "/upload.php", // Server-side endpoint to handle uploads
        paramName: "file",  // The name of the parameter to send with the file
        maxFilesize: 2,     // Max file size in MB
        acceptedFiles: "image/*", // Only accept images
        dictDefaultMessage: "Drop files here or click to upload.", // Default message
        init: function () {
          // You can add event listeners if needed
          this.on("addedfile", (file) => {
            console.log("File added:", file);
          });

          this.on("success", (file, response) => {
            console.log("Upload successful:", response);
          });

          this.on("error", (file, errorMessage) => {
            console.log("Error during upload:", errorMessage);
          });
        }
      });

      // Clean up Dropzone on component unmount
      return () => {
        dropzone.destroy();
      };
    }
  }, []);  // Empty dependency array ensures this only runs once on mount
  return (
    <div>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="page-body" style={{paddingTop:'100px',paddingLeft:isSidebarOpen ? '74px':'280px'}}>

{/* New Product Add Start */}
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-sm-8 m-auto">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-header-2">
                                <h5>Category Information</h5>
                            </div>

                            <div class="theme-form theme-form-2 mega-form">
                                <div class="mb-4 row align-items-center">
                                    <label class="form-label-title col-sm-3 mb-0">Category Name</label>
                                    <div class="col-sm-9">
                                        <input class="form-control" type="text"
                                            placeholder="Category Name"/>
                                    </div>
                                </div>
                                {/* Subcategory Name */}
                        <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">Subcategory Name</label>
                            <div className="col-sm-9">
                                <input
                                    className="form-control"
                                    type="text"
                                    // value={subcategoryName}
                                    // onChange={handleSubcategoryNameChange}
                                    placeholder="Subcategory Name"
                                />
                            </div>
                        </div>

                        {/* Parent Category Dropdown */}
                        <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">Parent Category</label>
                            <div className="col-sm-9">
                                <select
                                    className="form-control"
                                    // value={parentCategory}
                                    // onChange={handleParentCategoryChange}
                                >
                                    <option value="">Select Parent Category</option>
                                    <option value="1">Fruits</option>
                                    <option value="2">Vegetables</option>
                                    <option value="3">Dairy</option>
                                    {/* Add other categories dynamically */}
                                </select>
                            </div>
                        </div>

                                <div className="mb-4 row align-items-center">
<label className="col-sm-3 col-form-label form-label-title">Category Image</label>
<div className="form-group col-sm-9">
<form ref={dropzoneRef} className="dropzone custom-dropzone" method="post" encType="multipart/form-data">
<div className="dz-message needsclick">
<div>
<i className="icon-cloud-up"></i>
<h6>Drop files here or click to upload.</h6>
</div>
</div>
</form>
</div>
</div>


                                <div class="row align-items-center">
                                    <div class="col-sm-3 form-label-title">Select Category Icon</div>
                                    <div class="col-sm-9">
                                        <div class="dropdown icon-dropdown">
                                            <button class="btn dropdown-toggle" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                                Select Icon
                                            </button>
                                            <ul class="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <img src='/assets/svg/vegetable.svg'
                                                            class="img-fluid" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <img src="/assets/svg/cup.svg"
                                                            class="blur-up lazyload" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <img src="/assets/svg/meats.svg"
                                                            class="img-fluid" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <img src="assets/svg/breakfast.svg"
                                                            class="img-fluid" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <img src="assets/svg/frozen.svg"
                                                            class="img-fluid" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <img src="assets/svg/biscuit.svg"
                                                            class="img-fluid" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <img src="assets/svg/grocery.svg"
                                                            class="img-fluid" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <img src="assets/svg/drink.svg"
                                                            class="img-fluid" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <img src="assets/svg/milk.svg"
                                                            class="img-fluid" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <img src="assets/svg/pet.svg"
                                                        
                                                            class="img-fluid" alt=""/>
                                                        
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-submit-button">
                            <button class="btn btn-animation ms-auto" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* New Product Add End */}

{/* footer Start */}
<div class="container-fluid">
    <footer class="footer">
        <div class="row">
            <div class="col-md-12 footer-copyright text-center">
                <p class="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
            </div>
        </div>
    </footer>
</div>
{/* footer En */}
</div>
   
    </div>
  )
}

export default AddNewCategory
