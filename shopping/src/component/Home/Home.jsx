import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Scrool from "../Admin/Scrool";

import Fetchproduct from "./Fetchproduct";

const Home = () => {

  return (
    <div className="theme-color-1">
      <Header />

      {/* Home Section Start */}
      <section className="home-section home-section-ratio pt-2">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xxl-3 col-lg-4 col-sm-6 ratio_180 d-sm-block d-none">
              <div className="home-contain rounded">
                <div className="h-100">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/1.jpg`}
                    className="bg-img blur-up lazyload"
                    alt=""
                  />
                </div>
                <div className="home-detail p-top-left home-p-medium">
                  <div>
                    <h6 className="text-danger mb-2 fw-bold">
                      Fresh & Delicious
                    </h6>
                    <h2 className="theme-color fw-bold">Fresh Bread</h2>
                    <p className="text-content d-md-block d-none">
                      Bento box burritos cherry bomb pepper dark and stormy with
                      ginger..
                    </p>
                    <a href="shop-left-sidebar.html" className="shop-button">
                      Shop Now <i className="fa-solid fa-right-long ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-lg-8 order-xxl-0 ratio_87">
              <div className="home-contain rounded">
                <div className="h-100">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/2.jpg`}
                    className="bg-img blur-up lazyload"
                    alt=""
                  />
                </div>
                <div className="home-detail p-center-left home-p-sm">
                  <div>
                    <h6>
                      Exclusive offer <span>30% Off</span>
                    </h6>
                    <h1 className="w-75 text-uppercase name-title poster-2 my-2">
                      we'll make <span className="name">handmade</span> your
                      <span className="name-2">sweet</span>
                    </h1>
                    <p className="w-50">
                      Earl grey latte Thai basil curry grains alfalfa sprouts
                      banana bread ginger carrot...
                    </p>
                    <button
                      onclick="location.href = 'shop-left-sidebar.html';"
                      className="btn text-white mt-xxl-4 mt-2 home-button mend-auto theme-bg-color"
                    >
                      Shop Now{" "}
                      <i className="fa-solid fa-right-long icon ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-4 col-sm-6 ratio_180 custom-ratio d-xxl-block d-lg-none d-sm-block d-none">
              <div className="home-contain rounded">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/3.jpg`}
                  className="bg-img blur-up lazyload"
                  alt=""
                />
                <div className="home-detail p-top-left home-p-medium">
                  <div>
                    <h6 className="text-danger mb-2 fw-bold">
                      Fresh & Delicious
                    </h6>
                    <h2 className="theme-color fw-bold">Bakery Sweet</h2>
                    <p className="text-content d-md-block d-none">
                      Peanut butter crunch chia seeds red parsley basil
                      overflowing..
                    </p>
                    <a href="shop-left-sidebar.html" className="shop-button">
                      Shop Now <i className="fa-solid fa-right-long ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Section End */}

      {/* Category Section Start */}
      <section>
        <div className="container-fluid-lg">
          <Scrool />
        </div>
      </section>
      {/* Category Section End */}

      {/* Discount Section Start */}
      <section>
        {/* <div className="container-fluid-lg">
        <div className="row">
            <div className="col-12">
                <div className="banner-contain hover-effect">
                    <img src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/4.jpg`} className="bg-img blur-up lazyload" alt=""/>
                    <div className="banner-details p-center p-sm-4 p-3 text-white text-center">
                        <div>
                            <h3 className="lh-base fw-bold text-white">
                                Get $3 Cashback! Min Order of $30
                            </h3>
                            <h6 className="coupon-code code-2">Use Code : GROCERY1920</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
      </section>
      {/* Discount Section End */}

      {/* Banner Section Start */}
      <section className="ratio_60">
        <div className="container-fluid-lg">
          <div className="row g-3">
            <div className="col-xxl-3 col-sm-6">
              <a
                href="shop-left-sidebar.html"
                className="banner-contain-2 hover-effect"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/5.jpg`}
                  className="bg-img blur-up lazyload"
                  alt=""
                />
                <div className="banner-detail p-top-left">
                  <div>
                    <div className="banner-detail-box mb-md-3 mb-1">
                      <h6 className="text-danger">5% OFF</h6>
                      <h4 className="mt-2">New Items</h4>
                      <h6 className="mt-2 text-content">Daily Essentials</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xxl-3 col-sm-6">
              <a
                href="shop-left-sidebar.html"
                className="banner-contain-2 hover-effect"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/6.jpg`}
                  className="bg-img blur-up lazyload"
                  alt=""
                />
                <div className="banner-detail p-top-left">
                  <div>
                    <div className="banner-detail-box mb-md-3 mb-1">
                      <h6 className="text-danger">5% OFF</h6>
                      <h4 className="mt-2">Save More</h4>
                      <h6 className="mt-2 text-content">Fresh Toast Rusk</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xxl-3 col-sm-6">
              <a
                href="shop-left-sidebar.html"
                className="banner-contain-2 hover-effect"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/7.jpg`}
                  className="bg-img blur-up lazyload"
                  alt=""
                />
                <div className="banner-detail p-top-left">
                  <div>
                    <div className="banner-detail-box mb-md-3 mb-1">
                      <h6 className="text-danger">5% OFF</h6>
                      <h4 className="mt-2">Fresh Every Day!</h4>
                      <h6 className="mt-2 text-content">Delivered @ Home</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xxl-3 col-sm-6">
              <a
                href="shop-left-sidebar.html"
                className="banner-contain-2 hover-effect"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/8.jpg`}
                  className="bg-img blur-up lazyload"
                  alt=""
                />
                <div className="banner-detail p-top-left">
                  <div>
                    <div className="banner-detail-box mb-md-3 mb-1">
                      <h6 className="text-danger">5% OFF</h6>
                      <h4 className="mt-2">Hot Deals</h4>
                      <h6 className="mt-2 text-content">Fresh Cake</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Product Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="row g-3">
            <div className="col-xxl-9 col-xl-8">
              <div className="title title-flex">
                <div>
                  <h2>Top Save Today</h2>
                  <span className="title-leaf">
                    <svg className="icon-width">
                      {/* <use xlink:href="${process.env.PUBLIC_URL}/assets/frontend/svg/leaf.svg#cake"></use> */}
                    </svg>
                  </span>
                </div>
                <div className="timing-box">
                  <div className="timing theme-bg-color">
                    <i data-feather="clock"></i>
                    <h6 className="name">Expires in :</h6>
                    <div
                      className="time"
                      id="clockdiv-1"
                      data-hours="1"
                      data-minutes="2"
                      data-seconds="3"
                    >
                      <ul>
                        <li>
                          <div className="counter">
                            <div className="days">
                              <h6></h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="hours">
                              <h6></h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="minutes">
                              <h6></h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="seconds">
                              <h6></h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Fetchproduct />

              <div className="title section-t-space">
                <h2>ALL KINDS OF CAKES</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    {/* <use xlink:href="${process.env.PUBLIC_URL}/assets/frontend/svg/leaf.svg#cake"></use> */}
                  </svg>
                </span>
              </div>

              <div className="slider-3_2 product-wrapper">
                <div>
                  <div className="product-box-2 wow fadeIn">
                    <a
                      href="product-left-thumbnail.html"
                      className="product-image"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/1.jpg`}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>

                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6>Creamy Chocolate Cake</h6>
                      </a>
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
                      <h5>
                        $140 <del>$180</del>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="product-box-2 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <a
                      href="product-left-thumbnail.html"
                      className="product-image"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/2.jpg`}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>

                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6>Creamy White Forest</h6>
                      </a>
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
                      <h5>
                        $140 <del>$180</del>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="product-box-2 wow fadeIn"
                    data-wow-delay="0.2s"
                  >
                    <a
                      href="product-left-thumbnail.html"
                      className="product-image"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/3.jpg`}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>

                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6>Fruit Cherry Cake</h6>
                      </a>
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
                      <h5>
                        $140 <del>$180</del>
                      </h5>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box-2 wow fadeIn">
                    <a
                      href="product-left-thumbnail.html"
                      className="product-image"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/4.jpg`}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>

                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6>Muffets Burger Bun</h6>
                      </a>
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
                      <h5>
                        $140 <del>$180</del>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="product-box-2 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <a
                      href="product-left-thumbnail.html"
                      className="product-image"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/5.jpg`}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>

                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6>Grand Celebration Cake</h6>
                      </a>
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
                      <h5>
                        $140 <del>$180</del>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="product-box-2 wow fadeIn"
                    data-wow-delay="0.2s"
                  >
                    <a
                      href="product-left-thumbnail.html"
                      className="product-image"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/6.jpg`}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>

                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6>Sweet Cake</h6>
                      </a>
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
                      <h5>
                        $140 <del>$180</del>
                      </h5>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box-2 wow fadeIn">
                    <a
                      href="product-left-thumbnail.html"
                      className="product-image"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/1.jpg`}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>

                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6>Creamy Chocolate Cake</h6>
                      </a>
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
                      <h5>
                        $140 <del>$180</del>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="product-box-2 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <a
                      href="product-left-thumbnail.html"
                      className="product-image"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/2.jpg`}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>

                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6>Creamy White Forest</h6>
                      </a>
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
                      <h5>
                        $140 <del>$180</del>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="product-box-2 wow fadeIn"
                    data-wow-delay="0.2s"
                  >
                    <a
                      href="product-left-thumbnail.html"
                      className="product-image"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/3.jpg`}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>

                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6>Fruit Cherry Cake</h6>
                      </a>
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
                      <h5>
                        $140 <del>$180</del>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="title section-t-space">
                <h2>Your Daily Staples</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    {/* <use xlink:href="${process.env.PUBLIC_URL}/assets/frontend/svg/leaf.svg#cake"></use> */}
                  </svg>
                </span>
              </div>

              <div className="product-box-slider-2 no-arrow">
                <div>
                  <div className="product-box product-box-bg wow fadeIn">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/1.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          Muffets & Tuffets Whole Wheat Bread 400 g
                        </h6>
                      </a>

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
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="product-box product-box-bg wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/2.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          Fresh Bread and Pastry Flour 200 g
                        </h6>
                      </a>

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
                            <i data-feather="star"></i>
                          </li>
                          <li>
                            <i data-feather="star"></i>
                          </li>
                        </ul>
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box product-box-bg wow fadeIn">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/3.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          Peanut Butter Bite Premium Butter Cookies 600 g
                        </h6>
                      </a>

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
                            <i data-feather="star" className="fill"></i>
                          </li>
                        </ul>
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="product-box product-box-bg wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/4.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          SnackAmor Combo Pack of Jowar Stick and Jowar Chips
                        </h6>
                      </a>

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
                            <i data-feather="star" className="fill"></i>
                          </li>
                        </ul>
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box product-box-bg wow fadeIn">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/5.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          Yumitos Chilli Sprinkled Potato Chips 100 g
                        </h6>
                      </a>

                      <div className="product-rating mt-2">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill"></i>
                          </li>
                          <li>
                            <i data-feather="star" className="fill"></i>
                          </li>
                          <li>
                            <i data-feather="star"></i>
                          </li>
                          <li>
                            <i data-feather="star"></i>
                          </li>
                          <li>
                            <i data-feather="star"></i>
                          </li>
                        </ul>
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="product-box product-box-bg wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/6.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          Fantasy Crunchy Choco Chip Cookies
                        </h6>
                      </a>

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
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box product-box-bg wow fadeIn">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/7.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          Fresh Bread and Pastry Flour 200 g
                        </h6>
                      </a>

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
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="product-box product-box-bg wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/8.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          Milky Silicone Heart Chocolate Mould ( Pack of 1 )
                        </h6>
                      </a>

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
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box product-box-bg wow fadeIn">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/9.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">chocolate-chip-cookies 250 g</h6>
                      </a>

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
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="product-box product-box-bg wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/10.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          Cupcake Holder for Birthday and Wedding Party 100 g
                        </h6>
                      </a>

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
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box product-box-bg wow fadeIn">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/5.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          Yumitos Chilli Sprinkled Potato Chips 100 g
                        </h6>
                      </a>

                      <div className="product-rating mt-2">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill"></i>
                          </li>
                          <li>
                            <i data-feather="star" className="fill"></i>
                          </li>
                          <li>
                            <i data-feather="star"></i>
                          </li>
                          <li>
                            <i data-feather="star"></i>
                          </li>
                          <li>
                            <i data-feather="star"></i>
                          </li>
                        </ul>
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="product-box product-box-bg wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/product/6.png`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            <i data-feather="eye"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <a href="compare.html">
                            <i data-feather="refresh-cw"></i>
                          </a>
                        </li>

                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h6 className="name">
                          Fantasy Crunchy Choco Chip Cookies
                        </h6>
                      </a>

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
                      </div>

                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>

                      <h6 className="price theme-color">$ 80.00</h6>

                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon bg-light-orange">
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value="0"
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
              <div className="position-sticky top-0">
                <div className="ratio_209 rounded wow fadeIn">
                  <div className="banner-contain-2 rounded hover-effect">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/10.jpg`}
                      className="bg-img blur-up lazyload"
                      alt=""
                    />
                    <div className="banner-detail p-top-left">
                      <div>
                        <h6 className="text-uppercase theme-color fw-500">
                          seafood
                        </h6>
                        <h3 className="text-uppercase">
                          special <span className="brand-name">brand</span>
                        </h3>
                        <p className="text-content fw-500 mt-3 lh-lg">
                          Special offer on the discount very hungry cake and
                          sweets
                        </p>

                        <div className="banner-detail-box banner-detail-box-2 mb-md-3 mb-1">
                          <h4 className="text-uppercase">up to</h4>
                          <h2 className="mt-2">50%</h2>
                          <h3 className="text-uppercase">off</h3>
                        </div>

                        <div>
                          <button
                            onclick="location.href = 'shop-left-sidebar.html';"
                            className="btn text-white btn-md mt-xxl-4 mt-2 home-button mend-auto theme-bg-color"
                          >
                            Shop Now
                            <i className="fa-solid fa-right-long icon ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ratio_125 section-t-space wow fadeIn">
                  <div className="banner-contain-2 rounded hover-effect">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/9.jpg`}
                      className="bg-img blur-up lazyload"
                      alt=""
                    />
                    <div className="banner-detail p-top-left">
                      <div>
                        <h6 className="text-uppercase theme-color fw-500">
                          Freash Every Day!
                        </h6>
                        <h3 className="text-pacifico mt-2">
                          Delicioud <span className="theme-color">Bread</span>
                        </h3>
                        <p className="text-content fw-500 mt-3 w-75 mend-auto">
                          Delicioud Bread and Brend new fresh bread.
                        </p>
                        <button
                          onclick="location.href = 'shop-left-sidebar.html';"
                          className="btn text-white btn-md mt-2 home-button mend-auto theme-bg-color"
                        >
                          Shop Now{" "}
                          <i className="fa-solid fa-right-long icon ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-t-space wow fadeIn">
                  <div className="category-menu category-menu-2">
                    <h3>Customer Comment</h3>

                    <div className="review-box">
                      <div className="review-contain">
                        <h5 className="w-75">
                          We Care About Our Customer Experience
                        </h5>
                        <p>
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate the
                          visual form of a document or a typeface without
                          relying on meaningful content.
                        </p>
                      </div>

                      <div className="review-profile">
                        <div className="review-image">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/frontend/images/vegetable/review/1.jpg`}
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </div>
                        <div className="review-detail">
                          <h5>Tina Mcdonnale</h5>
                          <h6>Sale Manager</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}

      {/* Banner Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="home-contain hover-effect">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/banner/11.jpg`}
                  className="bg-img blur-up lazyload"
                  alt=""
                />
                <div className="home-detail p-center position-relative text-center">
                  <div>
                    <h3 className="text-danger text-uppercase fw-bold mb-0">
                      limited Time Offer
                    </h3>
                    <h2 className="theme-color text-pacifico fw-normal mb-0 super-sale text-center">
                      Super
                    </h2>
                    <h2 className="home-name text-uppercase">sale</h2>
                    <h3 className="text-pacifico fw-normal text-content text-center">
                      www.fastkart.com
                    </h3>
                    <ul className="social-icon">
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>

                      <li>
                        <a href="https://twitter.com/">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.whatsapp.com/">
                          <i className="fa-brands fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Top Selling Section Start */}
      <section className="top-selling-section">
        <div className="container-fluid-lg">
          <div className="slider-4-1">
            <div>
              <div className="row">
                <div className="col-12">
                  <div className="top-selling-box">
                    <div className="top-selling-title">
                      <h3>Top Selling</h3>
                    </div>

                    <div className="top-selling-contain wow fadeInUp">
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/1.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Creamy Chocolate Cake</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 10.00</h6>
                      </div>
                    </div>

                    <div
                      className="top-selling-contain wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/2.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Creamy White Forest</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 40.00</h6>
                      </div>
                    </div>

                    <div
                      className="top-selling-contain wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/3.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Fruit Cherry Cake</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 45.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-12">
                  <div className="top-selling-box">
                    <div className="top-selling-title">
                      <h3>Trending Products</h3>
                    </div>

                    <div className="top-selling-contain wow fadeInUp">
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/5.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Grand Celebration Cake</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 10.00</h6>
                      </div>
                    </div>

                    <div
                      className="top-selling-contain wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/6.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Sweet Cake</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 40.00</h6>
                      </div>
                    </div>

                    <div
                      className="top-selling-contain wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/1.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Creamy Chocolate Cake</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 85.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-12">
                  <div className="top-selling-box">
                    <div className="top-selling-title">
                      <h3>Recently added</h3>
                    </div>

                    <div className="top-selling-contain wow fadeInUp">
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/4.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Fruit Cherry Cake</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 10.00</h6>
                      </div>
                    </div>

                    <div
                      className="top-selling-contain wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/5.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Creamy Chocolate Cake</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 40.00</h6>
                      </div>
                    </div>

                    <div
                      className="top-selling-contain wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/6.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Creamy White Forest</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 45.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-12">
                  <div className="top-selling-box">
                    <div className="top-selling-title">
                      <h3>Top Rated</h3>
                    </div>

                    <div className="top-selling-contain wow fadeInUp">
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/3.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Muffets Burger Bun</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 10.00</h6>
                      </div>
                    </div>

                    <div
                      className="top-selling-contain wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/4.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Grand Celebration Cake</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 40.00</h6>
                      </div>
                    </div>

                    <div
                      className="top-selling-contain wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <a
                        href="product-left-thumbnail.html"
                        className="top-selling-image"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/5.jpg`}
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <div className="top-selling-detail">
                        <a href="product-left-thumbnail.html">
                          <h5>Sweet Cake</h5>
                        </a>
                        <div className="product-rating">
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
                          <span>(34)</span>
                        </div>
                        <h6>$ 45.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Selling Section End */}

      {/* Newsletter Section Start */}
      <section className="newsletter-section section-b-space">
        <div className="container-fluid-lg">
          <div className="newsletter-box newsletter-box-2 newsletter-box-3">
            <div className="newsletter-contain py-5">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                    <div className="newsletter-detail">
                      <h2>Join our newsletter and get...</h2>
                      <h5>$20 discount for your first order</h5>
                      <div className="input-box">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter Your Email"
                        />
                        <i className="fa-solid fa-envelope arrow"></i>
                        <button className="sub-btn btn text-white theme-bg-color">
                          <span className="d-sm-block d-none">Subscribe</span>
                          <i className="fa-solid fa-arrow-right icon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section End */}

      {/* Footer Section Start */}
      <footer className="section-t-space">
        <div className="container-fluid-lg">
          <div className="service-section">
            <div className="row g-3">
              <div className="col-12">
                <div className="service-contain">
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/svg/product.svg`}
                        className="blur-up lazyload"
                        alt=""
                      />
                    </div>

                    <div className="service-detail">
                      <h5>Every Fresh Products</h5>
                    </div>
                  </div>

                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/svg/delivery.svg`}
                        className="blur-up lazyload"
                        alt=""
                      />
                    </div>

                    <div className="service-detail">
                      <h5>Free Delivery For Order Over $50</h5>
                    </div>
                  </div>

                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/svg/discount.svg`}
                        className="blur-up lazyload"
                        alt=""
                      />
                    </div>

                    <div className="service-detail">
                      <h5>Daily Mega Discounts</h5>
                    </div>
                  </div>

                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/svg/market.svg`}
                        className="blur-up lazyload"
                        alt=""
                      />
                    </div>

                    <div className="service-detail">
                      <h5>Best Price On The Market</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-footer section-b-space section-t-space">
            <div className="row g-md-4 g-3">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-logo">
                  <div className="theme-logo">
                    <a href="index.html">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/frontend/images/logo/2.png`}
                        className="blur-up lazyload"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="footer-logo-contain">
                    <p>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form.
                    </p>

                    <ul className="address">
                      <li>
                        <i data-feather="home"></i>
                        <a href="javascript:void(0)">
                          1418 Riverwood Drive, CA 96052, US
                        </a>
                      </li>
                      <li>
                        <i data-feather="mail"></i>
                        <a href="javascript:void(0)">support@fastkart.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-title">
                  <h4>Categories</h4>
                </div>

                <div className="footer-contain">
                  <ul>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Vegetables & Fruit
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Beverages
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Meats & Seafood
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Frozen Foods
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Biscuits & Snacks
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Grocery & Staples
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl col-lg-2 col-sm-3">
                <div className="footer-title">
                  <h4>Useful Links</h4>
                </div>

                <div className="footer-contain">
                  <ul>
                    <li>
                      <a href="index.html" className="text-content">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="about-us.html" className="text-content">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="blog-list.html" className="text-content">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="contact-us.html" className="text-content">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-sm-3">
                <div className="footer-title">
                  <h4>Help Center</h4>
                </div>

                <div className="footer-contain">
                  <ul>
                    <li>
                      <a href="order-success.html" className="text-content">
                        Your Order
                      </a>
                    </li>
                    <li>
                      <a href="user-dashboard.html" className="text-content">
                        Your Account
                      </a>
                    </li>
                    <li>
                      <a href="order-tracking.html" className="text-content">
                        Track Order
                      </a>
                    </li>
                    <li>
                      <a href="wishlist.html" className="text-content">
                        Your Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="search.html" className="text-content">
                        Search
                      </a>
                    </li>
                    <li>
                      <a href="faq.html" className="text-content">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-title">
                  <h4>Contact Us</h4>
                </div>

                <div className="footer-contact">
                  <ul>
                    <li>
                      <div className="footer-number">
                        <i data-feather="phone"></i>
                        <div className="contact-number">
                          <h6 className="text-content">Hotline 24/7 :</h6>
                          <h5>+91 888 104 2340</h5>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="footer-number">
                        <i data-feather="mail"></i>
                        <div className="contact-number">
                          <h6 className="text-content">Email Address :</h6>
                          <h5>fastkart@hotmail.com</h5>
                        </div>
                      </div>
                    </li>

                    <li className="social-app mb-0">
                      <h5 className="mb-2 text-content">Download App :</h5>
                      <ul>
                        <li className="mb-0">
                          <a
                            href="https://play.google.com/store/apps"
                            target="_blank"
                          >
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/frontend/images/playstore.svg`}
                              className="blur-up lazyload"
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="mb-0">
                          <a
                            href="https://www.apple.com/in/app-store/"
                            target="_blank"
                          >
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/frontend/images/appstore.svg`}
                              className="blur-up lazyload"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="sub-footer section-small-space">
            <div className="reserve">
              <h6 className="text-content">
                ©2022 Fastkart All rights reserved
              </h6>
            </div>

            <div className="payment">
              <img
                src={`${process.env.PUBLIC_URL}/assets/frontend/images/payment/1.png`}
                className="blur-up lazyload"
                alt=""
              />
            </div>

            <div className="social-link">
              <h6 className="text-content">Stay connected :</h6>
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://in.pinterest.com/" target="_blank">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}

      {/* Location Modal Start */}
      <div
        className="modal location-modal fade theme-modal"
        id="locationModal"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Choose your Delivery Location
              </h5>
              <p className="mt-1 text-content">
                Enter your address and we will specify the offer for your area.
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="location-list">
                <div className="search-input">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Your Area"
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="disabled-box">
                  <h6>Select a Location</h6>
                </div>

                <ul className="location-select custom-height">
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Alabama</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Arizona</h6>
                      <span>Min: $150</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>California</h6>
                      <span>Min: $110</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Colorado</h6>
                      <span>Min: $140</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Florida</h6>
                      <span>Min: $160</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Georgia</h6>
                      <span>Min: $120</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Kansas</h6>
                      <span>Min: $170</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Minnesota</h6>
                      <span>Min: $120</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>New York</h6>
                      <span>Min: $110</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Washington</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location Modal End */}

      {/* Deal Box Modal Start */}
      <div
        className="modal fade theme-modal deal-modal"
        id="deal-box"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title w-100" id="deal_today">
                  Deal Today
                </h5>
                <p className="mt-1 text-content">Recommended deals for you.</p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="deal-offer-box">
                <ul className="deal-offer-list">
                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/vegetable/product/10.png`}
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li className="list-2">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/vegetable/product/11.png`}
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li className="list-3">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/vegetable/product/12.png`}
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/frontend/images/vegetable/product/13.png`}
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deal Box Modal End */}

      {/* Add to cart Modal Start */}
      <div className="add-cart-box">
        <div className="add-image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/frontend/images/cake/pro/1.jpg`}
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </div>

        <div className="add-contain">
          <h6>Added to Cart</h6>
        </div>
      </div>
      {/* Add to cart Modal End */}

      {/* Tap to top and theme setting button start */}
      <div className="theme-option">
        <div className="setting-box">
          <button className="btn setting-button">
            <i className="fa-solid fa-gear"></i>
          </button>

          <div className="theme-setting-2">
            <div className="theme-box">
              <ul>
                <li>
                  <div className="setting-name">
                    <h4>Color</h4>
                  </div>
                  <div className="theme-setting-button color-picker">
                    <form className="form-control">
                      <label for="colorPick" className="form-label mb-0">
                        Theme Color
                      </label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        id="colorPick"
                        value="#d99f46"
                        title="Choose your color"
                      />
                    </form>
                  </div>
                </li>

                <li>
                  <div className="setting-name">
                    <h4>Dark</h4>
                  </div>
                  <div className="theme-setting-button">
                    <button className="btn btn-2 outline" id="darkButton">
                      Dark
                    </button>
                    <button className="btn btn-2 unline" id="lightButton">
                      Light
                    </button>
                  </div>
                </li>

                <li>
                  <div className="setting-name">
                    <h4>RTL</h4>
                  </div>
                  <div className="theme-setting-button rtl">
                    <button className="btn btn-2 rtl-unline">LTR</button>
                    <button className="btn btn-2 rtl-outline">RTL</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="back-to-top">
          <a id="back-to-top" href="#">
            <i className="fas fa-chevron-up"></i>
          </a>
        </div>
      </div>
      {/* Tap to top and theme setting button end */}

      {/* Bg overlay Start */}
      <div className="bg-overlay"></div>
      {/* Bg overlay End */}

      {/* latest jquery*/}
    </div>
  );
};

export default Home;
