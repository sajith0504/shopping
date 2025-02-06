import React, { useState, useEffect } from 'react';
import Sidebar from '../Admin/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Prodectdisplay = () => {
    const [products, setProducts] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState); // Toggle the state to open/close the sidebar
    };

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products/getproducts'); 
                console.log("Fetched Products:", response.data.products); // ✅ Debugging
                setProducts(response.data.products); 
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    console.log("Products state:", products); 
  return (
    <div>
       <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
       <div className="page-body" style={{paddingTop:'100px',paddingLeft:isSidebarOpen ? '74px':'280px'}}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card card-table">
                                        <div className="card-body">
                                            <div className="title-header option-title d-sm-flex d-block">
                                                <h5>Products List</h5>
                                                <div className="right-options">
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0)">Import</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">Export</a>
                                                        </li>
                                                        <li>
                                                            <Link to="/addproduct">Add Products</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="table-responsive">
                                                    <table
                                                        className="table all-package theme-table table-product"
                                                        id="table_id"
                                                    >
                                                        <thead>
                                                            <tr>
                                                                <th>Product Image</th>
                                                                <th>Product Name</th>
                                                                <th>Category</th>
                                                                <th>Current Qty</th>
                                                                <th>Price</th>
                                                                <th>Status</th>
                                                                <th>Options</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
    {products.map((product) => (
        <tr key={product.id}>
            <td>
    <img
        src={`http://localhost:3000${product.images}`}  // Ensure correct path
        alt={product.productName}
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        onError={(e) => { e.target.src = "/placeholder-image.png"; }} // Fallback for broken images
    />
</td>
            <td>{product.productName}</td>
            <td>{product.category}</td>
            <td>
                {/* Ensure inventory is an array before calling reduce() */}
                {Array.isArray(product.inventory)
                    ? product.inventory.reduce((total, item) => total + Number(item.quantity || 0), 0)
                    : 'N/A'}
            </td>
            <td>${product.price}</td>
            <td>{product.stockStatus}</td>
            <td>
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    ))}
</tbody>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
               </div>
                            </div>
                        </div>                 
                    
                {/* Container-fluid Ends */}

                <div class="container-fluid">
                    {/* footer start */}
                    <footer class="footer">
                        <div class="row">
                            <div class="col-md-12 footer-copyright text-center">
                                <p class="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
    </div>
  )
}

export default Prodectdisplay
