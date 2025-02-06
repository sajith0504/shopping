import React, { useState, useRef } from 'react';
import axios from 'axios'
import Sidebar from '../Admin/Sidebar';

const AddNewProduct = () => {
    const [formData, setFormData] = useState({
        productName: '',
        productType: '',
        category: '',
        subcategory: '',
        brand: '',
        unit: '',
        tags: [],
        exchangeable: false,
        refundable: false,
        description:'',
        images: [],
        thumbnail: null,
        videoProvider: 'Vimeo', // default value
        videoLink: '',
        optionName: "",
        optionValue: "",
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: "",
        },
        price: "",
        comparePrice: "",
        costPerItem: "",
        sku: '',
        stockStatus: '',
        inventory: [
          { variant: '', price: '', sku: '', quantity: '' },

        ],
        upsells: '',
    crossSells: '',
    pageTitle: '',
    metaDescription: '',
    urlHandle: '',
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState); // Toggle the state to open/close the sidebar
    };
    // Define category, subcategory, and brand options
    const categories = [
        "Electronics", "TV & Appliances", "Home & Furniture", "Baby & Kids", 
        "Health, Beauty & Perfumes", "Uncategorized", "Fashion", "Sports", 
        "Automotive", "Books & Stationery", "Toys & Games", "Groceries"
    ];

    const subcategories = {
        "Electronics": ["Mobile Phones", "Laptops", "Tablets", "Headphones", "Cameras"],
        "TV & Appliances": ["Televisions", "Refrigerators", "Washing Machines", "Air Conditioners"],
        "Home & Furniture": ["Sofas", "Beds", "Dining Tables", "Wardrobes"],
        "Baby & Kids": ["Toys", "Clothing", "Furniture", "Bedding"],
        "Health, Beauty & Perfumes": ["Skincare", "Haircare", "Makeup", "Fragrances"],
        "Fashion": ["Men's Clothing", "Women's Clothing", "Footwear", "Accessories"],
        "Sports": ["Fitness Equipment", "Sportswear", "Outdoor Gear"],
        "Automotive": ["Car Accessories", "Motorcycle Gear", "Tools & Equipment"],
        "Books & Stationery": ["Books", "Notebooks", "Stationery", "School Supplies"],
        "Toys & Games": ["Educational Toys", "Puzzles", "Board Games"],
        "Groceries": ["Fruits & Vegetables", "Beverages", "Snacks", "Dairy Products","Grains, Rice & Pulses"]
    };

    const brands = [
        "Puma", "Nike", "HRX", "Roadster", "Zara", "Adidas", "Reebok", "Apple", 
        "Samsung", "Sony", "LG", "Dell", "HP", "Bose", "Coca-Cola", "Pepsi", "Nestle"
    ];

    // Handle form input changes
   // Optimized handleChange for nested and dynamic inputs
const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  
  // Optimized handleInventoryChange for dynamic inventory update
  const handleInventoryChange = (index, e) => {
    const { name, value } = e.target;
    const updatedInventory = formData.inventory.map((item, idx) =>
      idx === index ? { ...item, [name]: value } : item
    );
    setFormData({
      ...formData,
      inventory: updatedInventory,
    });
  };
  

    // Handle checkbox toggle
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    // Handle tag addition (simplified for now)
    const handleTagChange = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            setFormData((prevState) => ({
                ...prevState,
                tags: [...prevState.tags, e.target.value],
            }));
            e.target.value = '';
        }
    };


    // Submit form data (for demonstration purposes)
    const handleSubmit = async (e) => {
  e.preventDefault();

  // Required fields validation
  const { productName, category, brand, price, sku, inventory } = formData;
  if (!productName || !category || !brand || !price || !sku || inventory.some((item) => !item.quantity)) {
    alert('Please fill all required fields including inventory quantities.');
    return;
  }

  // Prepare FormData for files and data
  const data = new FormData();
  Object.keys(formData).forEach((key) => {
    if (key === 'images' && formData[key].length > 0) {
      formData[key].forEach((file) => data.append('images', file));
    } else if (key === 'thumbnail' && formData[key]) {
      data.append('thumbnail', formData[key]);
    } else if (key === 'dimensions') {
      Object.entries(formData.dimensions).forEach(([dimKey, dimValue]) => {
        data.append(`dimensions[${dimKey}]`, dimValue);
      });
    } else if (key === 'inventory') {
      data.append(key, JSON.stringify(formData[key]));
    } else {
      data.append(key, formData[key]);
    }
  });

  try {
    const response = await axios.post('http://localhost:3000/products/submit-product', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data.success) {
      alert('Product added successfully!');
    } else {
      alert(`Failed to add product: ${response.data.message}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to add product.');
  }
};

    
    const editorRef = useRef();

    const handledesChange = (e) => {
      
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      
      
    };
    

    // Handle file selection
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'images') {
      setFormData((prevState) => ({
        ...prevState,
        images: Array.from(files),
      }));
    } else if (name === 'thumbnail') {
      setFormData((prevState) => ({
        ...prevState,
        thumbnail: files[0],
      }));
    }
  };
  const handleDimensionsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      dimensions: {
        ...prevData.dimensions,
        [name]: value,
      },
    }));
  };

 

  // Add new variant
  const handleAddVariant = () => {
    setFormData({
      ...formData,
      inventory: [
        ...formData.inventory,
        { variant: '', price: '', sku: '', quantity: '' }
      ]
    });
  };

  // Delete variant
  const handleDeleteVariant = (index) => {
    const updatedInventory = formData.inventory.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      inventory: updatedInventory
    });
  };

  return (
    <div>
               <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
               <div className="page-body" style={{paddingTop:'100px',paddingLeft:isSidebarOpen ? '74px':'280px'}}>

<div className="container-fluid">
<div className="row">
    <div className="col-12">
        <div className="row">
            <div className="col-sm-8 m-auto">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header-2">
                            <h5>Product Information</h5>
                        </div>

                        <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
                            {/* Product Name */}
                            <div className="mb-4 row align-items-center">
                                <label className="form-label-title col-sm-3 mb-0">Product Name</label>
                                <div className="col-sm-9">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="productName"
                                        placeholder="Product Name"
                                        value={formData.productName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Product Type */}
                            <div className="mb-4 row align-items-center">
                                <label className="col-sm-3 col-form-label form-label-title">Product Type</label>
                                <div className="col-sm-9">
                                    <select
                                        className="js-example-basic-single w-100"
                                        name="productType"
                                        value={formData.productType}
                                        onChange={handleChange}
                                    >
                                        <option disabled>Select Product Type</option>
                                        <option value="Simple">Simple</option>
                                        <option value="Classified">Classified</option>
                                    </select>
                                </div>
                            </div>

                            {/* Category */}
                            {/* Category */}
                            <div className="mb-4 row align-items-center">
                                <label className="col-sm-3 col-form-label form-label-title">Category</label>
                                <div className="col-sm-9">
                                    <select
                                        className="js-example-basic-single w-100"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                    >
                                        <option disabled>Select Category</option>
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Subcategory */}
                            <div className="mb-4 row align-items-center">
                                <label className="col-sm-3 col-form-label form-label-title">Subcategory</label>
                                <div className="col-sm-9">
                                    <select
                                        className="js-example-basic-single w-100"
                                        name="subcategory"
                                        value={formData.subcategory}
                                        onChange={handleChange}
                                        disabled={!formData.category}
                                    >
                                        <option disabled>Select Subcategory</option>
                                        {formData.category && subcategories[formData.category]?.map((subcategory) => (
                                            <option key={subcategory} value={subcategory}>
                                                {subcategory}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Brand */}
                            <div className="mb-4 row align-items-center">
                                <label className="col-sm-3 col-form-label form-label-title">Brand</label>
                                <div className="col-sm-9">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="brand"
                                        placeholder="Type brand"
                                        value={formData.brand}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>


                            {/* Unit */}
                            <div className="mb-4 row align-items-center">
                                <label className="col-sm-3 col-form-label form-label-title">Unit</label>
                                <div className="col-sm-9">
                                    <select
                                        className="js-example-basic-single w-100"
                                        name="unit"
                                        value={formData.unit}
                                        onChange={handleChange}
                                    >
                                        <option disabled>Select Unit</option>
                                        <option value="Kilogram">Kilogram</option>
                                        <option value="Pieces">Pieces</option>
                                    </select>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="mb-4 row align-items-center">
                                <label className="col-sm-3 col-form-label form-label-title">Tags</label>
                                <div className="col-sm-9">
                                    <div className="bs-example">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Type tag & hit enter"
                                            id="inputTag"
                                            onKeyUp={handleTagChange}
                                        />
                                    </div>
                                    <div>
                                        {formData.tags.map((tag, index) => (
                                            <span key={index} className="badge badge-primary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>


                           {/* GST */}
<div className="mb-4 row align-items-center">
    <label className="col-sm-3 col-form-label form-label-title">GST</label>
    <div className="col-sm-9">
        {/* Yes/No Radio Buttons */}
        <div className="mb-3">
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="gstOption"
                    id="gstYes"
                    value="yes"
                    checked={formData.gstOption === "yes"}
                    onChange={(e) => setFormData({ ...formData, gstOption: e.target.value })}
                />
                <label className="form-check-label" htmlFor="gstYes">
                    Yes
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="gstOption"
                    id="gstNo"
                    value="no"
                    checked={formData.gstOption === "no"}
                    onChange={(e) => setFormData({ ...formData, gstOption: e.target.value })}
                />
                <label className="form-check-label" htmlFor="gstNo">
                    No
                </label>
            </div>
        </div>

        {/* Conditional Input for GST Rate */}
        {formData.gstOption === "yes" && (
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter GST Rate"
                    value={formData.gstRate || ""}
                    onChange={(e) => setFormData({ ...formData, gstRate: e.target.value })}
                />
            </div>
        )}
    </div>
</div>

                            {/* Exchangeable */}
                            <div className="mb-4 row align-items-center">
                                <label className="col-sm-3 col-form-label form-label-title">Exchangeable</label>
                                <div className="col-sm-9">
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            name="exchangeable"
                                            checked={formData.exchangeable}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="switch-state"></span>
                                    </label>
                                </div>
                            </div>

                            {/* Refundable */}
                            <div className="row align-items-center">
                                <label className="col-sm-3 col-form-label form-label-title">Refundable</label>
                                <div className="col-sm-9">
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            name="refundable"
                                            checked={formData.refundable}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="switch-state"></span>
                                    </label>
                                </div>
                            </div>

                           
                        </form>
                    </div>
                </div>
           

                        <div className="card">
<div className="card-body">
    <div className="card-header-2">
        <h5>Description</h5>
    </div>

    
    <label htmlFor="productDescription">Product Description</label>
<textarea
id="productDescription"
name="description"
value={formData.description}
onChange={handledesChange}
maxLength="500" // Example: limit to 500 characters
rows="5"
className="form-control"
placeholder="Enter the product description here..."
></textarea>
<p>{formData.description.length} / 500</p>


    
</div>
</div>
<div className="card">
<div className="card-body">
<div className="card-header-2">
<h5>Product Images</h5>
</div>

<form onSubmit={handleSubmit} className="theme-form theme-form-2 mega-form">
{/* Images */}
<div className="mb-4 row align-items-center">
<label className="col-sm-3 col-form-label form-label-title">Images</label>
<div className="col-sm-9">
  <input
    className="form-control form-choose"
    type="file"
    id="formFile"
    name="images"
    multiple
    onChange={handleFileChange}
  />
</div>
</div>

{/* Thumbnail Image */}
<div className="row align-items-center">
<label className="col-sm-3 col-form-label form-label-title">Thumbnail Image</label>
<div className="col-sm-9">
  <input
    className="form-control form-choose"
    type="file"
    id="formFileMultiple1"
    name="thumbnail"
    onChange={handleFileChange}
  />
</div>
</div>


</form>
</div>
</div>

<div className="card">
<div className="card-body">
<div className="card-header-2">
<h5>Product Videos</h5>
</div>

<form onSubmit={handleSubmit} className="theme-form theme-form-2 mega-form">
{/* Video Provider */}
<div className="mb-4 row align-items-center">
<label className="col-sm-3 col-form-label form-label-title">Video Provider</label>
<div className="col-sm-9">
  <select
    className="js-example-basic-single w-100"
    name="videoProvider"
    value={formData.videoProvider}
    onChange={handleChange}
  >
    <option value="Vimeo">Vimeo</option>
    <option value="YouTube">YouTube</option>
    <option value="Dailymotion">Dailymotion</option>
    <option value="Other">Other</option>
  </select>
</div>
</div>

{/* Video Link */}
<div className="row align-items-center">
<label className="form-label-title col-sm-3 mb-0">Video Link</label>
<div className="col-sm-9">
  <input
    className="form-control"
    type="text"
    placeholder="Video Link"
    name="videoLink"
    value={formData.videoLink}
    onChange={handleChange}
  />
</div>
</div>

{/* Submit Button */}

</form>
</div>
</div>
                        {/* Product Variations */}
<div className="card">
<div className="card-body">
<div className="card-header-2">
  <h5>Product variations</h5>
</div>

<div className="mb-4 row align-items-center">
  <label className="form-label-title col-sm-3 mb-0">Option Name</label>
  <div className="col-sm-9">
    <select
      className="form-control js-example-basic-single w-100"
      name="optionName"
      value={formData.optionName}
      onChange={handleChange}
    >
      <option value="">Select Option</option>
      <option value="Color">Color</option>
      <option value="Size">Size</option>
      <option value="Material">Material</option>
      <option value="Style">Style</option>
    </select>
  </div>
</div>

<div className="row align-items-center">
  <label className="col-sm-3 col-form-label form-label-title">Option Value</label>
  <div className="col-sm-9">
    <input
      type="text"
      className="form-control"
      name="optionValue"
      placeholder="Type tag & hit enter"
      value={formData.optionValue}
      onChange={handleChange}
    />
  </div>
</div>
</div>
</div>

{/* Shipping */}
<div className="card">
<div className="card-body">
<div className="card-header-2">
  <h5>Shipping</h5>
</div>

<div className="mb-4 row align-items-center">
  <label className="form-label-title col-sm-3 mb-0">Weight (kg)</label>
  <div className="col-sm-9">
    <input
      className="form-control"
      type="number"
      name="weight"
      value={formData.weight}
      onChange={handleChange}
      placeholder="Weight"
    />
  </div>
</div>

<div className="row align-items-center">
  <label className="col-sm-3 col-form-label form-label-title">Dimensions (cm)</label>
  <div className="col-sm-3">
    <input
      className="form-control"
      type="number"
      name="length"
      value={formData.dimensions.length}
      onChange={handleDimensionsChange}
      placeholder="Length"
    />
  </div>
  <div className="col-sm-3">
    <input
      className="form-control"
      type="number"
      name="width"
      value={formData.dimensions.width}
      onChange={handleDimensionsChange}
      placeholder="Width"
    />
  </div>
  <div className="col-sm-3">
    <input
      className="form-control"
      type="number"
      name="height"
      value={formData.dimensions.height}
      onChange={handleDimensionsChange}
      placeholder="Height"
    />
  </div>
</div>
</div>
</div>

{/* Product Price */}
<div className="card">
<div className="card-body">
<div className="card-header-2">
  <h5>Product Price</h5>
</div>

<div className="mb-4 row align-items-center">
  <label className="col-sm-3 form-label-title">Price</label>
  <div className="col-sm-9">
    <input
      className="form-control"
      type="number"
      name="price"
      value={formData.price}
      onChange={handleChange}
      placeholder="0"
    />
  </div>
</div>

<div className="mb-4 row align-items-center">
  <label className="col-sm-3 form-label-title">Compare at price</label>
  <div className="col-sm-9">
    <input
      className="form-control"
      type="number"
      name="comparePrice"
      value={formData.comparePrice}
      onChange={handleChange}
      placeholder="0"
    />
  </div>
</div>

<div className="mb-4 row align-items-center">
  <label className="col-sm-3 form-label-title">Cost per item</label>
  <div className="col-sm-5">
    <input
      className="form-control"
      type="number"
      name="costPerItem"
      value={formData.costPerItem}
      onChange={handleChange}
      placeholder="0"
    />
  </div>
  <div className="col-sm-2">
<label>Margin:</label>
<span>{formData.price && formData.costPerItem ? `${((formData.price - formData.costPerItem) / formData.price * 100).toFixed(2)}%` : "0%"}</span>
</div>
<div className="col-sm-2">
<label>Profit:</label>
<span>{formData.price && formData.costPerItem ? `$${(formData.price - formData.costPerItem).toFixed(2)}` : "$0"}</span>
</div>

</div>
</div>
</div>

<div className="card">
<div className="card-body">
<div className="card-header-2">
<h5>Product Inventory</h5>
</div>

<form className="theme-form theme-form-2 mega-form">
<div className="mb-4 row align-items-center">
<label className="form-label-title col-sm-3 mb-0">SKU</label>
<div className="col-sm-9">
  <input
    className="form-control"
    type="text"
    name="sku"
    value={formData.sku}
    onChange={handleChange}
  />
</div>
</div>
<div className="mb-4 row align-items-center">
<label className="col-sm-3 col-form-label form-label-title">Stock Status</label>
<div className="col-sm-9">
  <select
    className="js-example-basic-single w-100"
    name="stockStatus"
    value={formData.stockStatus}
    onChange={handleChange}
  >
    <option>In Stock</option>
    <option>Out Of Stock</option>
    <option>On Backorder</option>
  </select>
</div>
</div>
</form>

<table className="table variation-table table-responsive-sm">
<thead>
<tr>
  <th scope="col">Variant</th>
  <th scope="col">Price</th>
  <th scope="col">SKU</th>
  <th scope="col">Quantity</th>
  <th scope="col"></th>
</tr>
</thead>
<tbody>
{formData.inventory.map((variant, index) => (
  <tr key={index}>
    <td>
      <input
        className="form-control"
        type="text"
        name="variant"
        value={variant.variant}
        onChange={(e) => handleInventoryChange(index, e)}
        placeholder="Variant"
      />
    </td>
    <td>
      <input
        className="form-control"
        type="number"
        name="price"
        value={variant.price}
        onChange={(e) => handleInventoryChange(index, e)}
        placeholder="Price"
      />
    </td>
    <td>
      <input
        className="form-control"
        type="text"
        name="sku"
        value={variant.sku}
        onChange={(e) => handleInventoryChange(index, e)}
        placeholder="SKU"
      />
    </td>
    <td>
      <input
        className="form-control"
        type="number"
        name="quantity"
        value={variant.quantity}
        onChange={(e) => handleInventoryChange(index, e)}
        placeholder="Quantity"
      />
    </td>
    <td>
      <ul className="order-option">
        <li>
          <a
            href="javascript:void(0)"
            onClick={() => handleDeleteVariant(index)}
          >
            <i className="ri-delete-bin-line"></i>
          </a>
        </li>
      </ul>
    </td>
  </tr>
))}
</tbody>
</table>

<button
type="button"
onClick={handleAddVariant}
className="btn btn-primary"
>
Add Another Variant
</button>
</div>
</div>

<div className="card">
<div className="card-body">
<div className="card-header-2">
<h5>Link Products</h5>
</div>

<form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
<div className="mb-4 row align-items-center">
<label className="form-label-title col-sm-3 mb-0">Upsells</label>
<div className="col-sm-9">
  <input
    className="form-control"
    type="search"
    name="upsells"
    value={formData.upsells}
    onChange={handleChange}
    placeholder="Search for upsell products"
  />
</div>
</div>

<div className="row align-items-center">
<label className="form-label-title col-sm-3 mb-0">Cross-Sells</label>
<div className="col-sm-9">
  <input
    className="form-control"
    type="search"
    name="crossSells"
    value={formData.crossSells}
    onChange={handleChange}
    placeholder="Search for cross-sell products"
  />
</div>
</div>


</form>
</div>
</div>

<div className="card">
<div className="card-body">
<div className="card-header-2">
<h5>Search engine listing</h5>
</div>

<div className="seo-view">
<span className="link">https://fastkart.com</span>
<h5>Buy fresh vegetables & Fruits online at best price</h5>
<p>Online Vegetable Store - Buy fresh vegetables & Fruits online at best prices. Order online and get free delivery.</p>
</div>

<form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
<div className="mb-4 row align-items-center">
<label className="form-label-title col-sm-3 mb-0">Page title</label>
<div className="col-sm-9">
  <input
    className="form-control"
    type="text"
    name="pageTitle"
    value={formData.pageTitle}
    onChange={handleChange}
    placeholder="Fresh Fruits"
  />
</div>
</div>

<div className="mb-4 row">
<label className="form-label-title col-sm-3 mb-0">Meta description</label>
<div className="col-sm-9">
  <textarea
    className="form-control"
    rows="3"
    name="metaDescription"
    value={formData.metaDescription}
    onChange={handleChange}
    placeholder="Write a brief description of the page"
  ></textarea>
</div>
</div>

<div className="row">
<label className="form-label-title col-sm-3 mb-0">URL handle</label>
<div className="col-sm-9">
  <input
    className="form-control"
    type="text"
    name="urlHandle"
    value={formData.urlHandle}
    onChange={handleChange}
    placeholder="https://fastkart.com/fresh-veggies"
  />
</div>
</div>
</form>
</div>

<div className="card-submit-button">
<button className="btn btn-animation ms-auto" type="submit" >Submit</button>
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

export default AddNewProduct
