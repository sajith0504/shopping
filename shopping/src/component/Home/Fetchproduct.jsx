import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Scrool from "../Admin/Scrool";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye, faHeart, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Fetchproduct = () => {
  const [productlist, setProductlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products/getproducts");
        setProductlist(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };


  const handleClose =()=>{
  setSelectedProduct(null)
  document.body.style.overflow = "auto";
  }

  return (
    <div className="theme-color-1">
      {/* <Header /> */}

    

      {/* Product Section Start */}
      <section>
      <div className="product-box-slider-2 no-arrow  row"> 
                        {productlist.map((product, index) => {
   if (index < 8) {
return(
  <>
  <div className='col-lg-3 mt-3' >
                          <div className="product-box product-box-bg wow fadeInUp">
                              <div className="product-image">
                                  <a href="product-left-thumbnail.html">
                                      <img src= {`http://localhost:3000${product.images}`}
                                          className="img-fluid blur-up lazyload" alt=""/>
                                         
                                  </a>
                                  <ul className="product-option">
                                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                          <div style={{ cursor: "pointer" }} onClick={() => openModal(product)}>
                                             <FontAwesomeIcon icon={faEye}  />
                                          </div>
                                      </li>
  
                                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                          <a href="compare.html">
                                          <FontAwesomeIcon icon={faRefresh} />
                                          </a>
                                      </li>
  
                                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                          <a href="wishlist.html" className="notifi-wishlist">
                                          <FontAwesomeIcon icon={faHeart} />
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div className="product-detail">
                                  <a href="product-left-thumbnail.html">
                                      <h6 className="name">
                                          {product.productName}
                                      </h6>
                                  </a>
  
                                  <h5 className="sold text-content">
                                      <span className="theme-color price">₹ {product.price }</span>
                                      <del>{product.comparePrice }</del>
                                  </h5>
  
                                  <div className="product-rating mt-2">
                                      <ul className="rating">
                                          <li>
                                              <i data-feather="star" className="fill"></i>
                                          </li>
                                          <li>
                                              <i data-feather="star" className="fill"></i>
                                          </li>
                                          <li>
                                              <i data-feather="star" className="fill"></i>
                                          </li>
                                          <li>
                                              <i data-feather="star" className="fill"></i>
                                          </li>
                                          <li>
                                              <i data-feather="star"></i>
                                          </li>
                                      </ul>
  
                                      <h6 className="theme-color">In Stock</h6>
                                  </div>
  
                                  <div className="add-to-cart-box bg-white">
                                      <button className="btn btn-add-cart addcart-button">Add
                                          <span className="add-icon bg-light-orange">
                                              <i className="fa-solid fa-plus"></i>
                                          </span>
                                      </button>
                                      <div className="cart_qty qty-box">
                                          <div className="input-group">
                                              <button type="button" className="qty-left-minus" data-type="minus"
                                                  data-field="">
                                                  <i className="fa fa-minus"></i>
                                              </button>
                                              <input className="form-control input-number qty-input" type="text"
                                                  name="quantity" value="0"/>
                                              <button type="button" className="qty-right-plus" data-type="plus"
                                                  data-field="">
                                                 <FontAwesomeIcon icon={faCartShopping} />
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          
                      </div>
                      
   </>
)
   }
   return null;
   
                        })}
      </div>
      </section>
      {/* Product Section End */}

      {/* Quick View Modal */}
      {selectedProduct && (
  <div className="modal  fade theme-modal view-modal show d-block" tabIndex="-1" style={{backgroundColor:'#000000ad'}} >
    <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
      <div className="modal-content">
        <div className="modal-header p-0">
          <button  type="button" className="btn-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modal-body">
          <div className="row g-sm-4 g-2">
            {/* Product Image */}
            <div className="col-lg-6">
              <div className="slider-image">
                <img
                  src={`http://localhost:3000${selectedProduct.images}`}
                  className="img-fluid blur-up lazyload"
                  alt={selectedProduct.productName}
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="col-lg-6">
              <div className="right-sidebar-modal">
                <h4 className="title-name">{selectedProduct.productName}</h4>
                <h4 className="price">₹ {selectedProduct.price}</h4>

                <div className="product-rating">
                  <ul className="rating">
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                  </ul>
                  <span className="ms-2">8 Reviews</span>
                  <span className="ms-2 text-danger">6 sold in last 16 hours</span>
                </div>

                <div className="product-detail">
                  <h4>Product Details :</h4>
                  <p>{selectedProduct.description || "No description available."}</p>
                </div>

                <ul className="brand-list">
                  <li>
                    <div className="brand-box">
                      <h5>Brand Name:</h5>
                      <h6>{selectedProduct.brand || "N/A"}</h6>
                    </div>
                  </li>
                  <li>
                    <div className="brand-box">
                      <h5>Product Code:</h5>
                      <h6>{selectedProduct.code || "N/A"}</h6>
                    </div>
                  </li>
                  <li>
                    <div className="brand-box">
                      <h5>Product Type:</h5>
                      <h6>{selectedProduct.type || "N/A"}</h6>
                    </div>
                  </li>
                </ul>

                {/* Select Size */}
                <div className="select-size">
                  <h4>Size :</h4>
                  <select className="form-select select-form-size">
                    <option value="">Select Size</option>
                    <option value="1.2">1/2 KG</option>
                    <option value="1">1 KG</option>
                    <option value="1.5">1.5 KG</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="modal-button">
                  <button
                    className="btn btn-md add-cart-button"
                    onClick={() => alert("Added to Cart!")}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="btn theme-bg-color view-button text-white fw-bold btn-md"
                    onClick={() => window.location.href = "/product-left-thumbnail"}
                  >
                    View More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    
  </div>
)}

      {/* Quick View Modal End */}
    </div>
  );
};

export default Fetchproduct;
