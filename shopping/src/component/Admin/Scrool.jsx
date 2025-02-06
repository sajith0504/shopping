import React, { useEffect, useRef, useState } from 'react';
import './Scrool.css'; // Import the CSS file

const Scrool = () => {
  const sliderRef = useRef(null); // Reference to the slider container
  const [isScrolling, setIsScrolling] = useState(false); // To manage scrolling state

  // Function to scroll the slider left
  const scrollLeft = () => {
    if (isScrolling) return; // Prevent multiple scrolls in quick succession
    setIsScrolling(true);
    const slider = sliderRef.current;
    slider.scrollBy({ left: -200, behavior: 'smooth' });

    // Wait for scroll to finish and reset state
    setTimeout(() => {
      setIsScrolling(false);
    }, 300);
  };

  // Function to scroll the slider right
  const scrollRight = () => {
    if (isScrolling) return; // Prevent multiple scrolls in quick succession
    setIsScrolling(true);
    const slider = sliderRef.current;
    slider.scrollBy({ left: 200, behavior: 'smooth' });

    // Wait for scroll to finish and reset state
    setTimeout(() => {
      setIsScrolling(false);
    }, 300);
  };

  // Looping logic (detect when the user scrolls to the end or start)
  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      // If we scroll to the start, don't do anything, stay at the start
      if (slider.scrollLeft === 0) {
        // Optionally, you can disable the left button when at the start
      }
      // If we scroll to the end, don't allow further scroll on the right side
      else if (slider.scrollLeft + slider.clientWidth === slider.scrollWidth) {
        // Optionally, you can disable the right button when at the end
      }
    };

    slider.addEventListener('scroll', handleScroll);

    return () => {
      slider.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="col-12">
      <div className="card o-hidden card-hover">
        <div className="card-header border-0 pb-1">
          <div className="card-header-title p-0">
            <h4>Category</h4>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="category-slider-wrapper">
            {/* Left Arrow Button */}
            <button className="scroll-button left" onClick={scrollLeft}>
              <span>&#10094;</span> {/* Left Arrow Icon */}
            </button>

            <div className="category-slider" ref={sliderRef}>
              <div className="category-slider-content">
                {/* Category Items (Directly listed) */}
                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/vegetable.svg" className="img-fluid" alt="Vegetables & Fruit" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Vegetables & Fruit</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/cup.svg" className="img-fluid" alt="Beverages" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Beverages</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/meats.svg" className="img-fluid" alt="Meats & Seafood" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Meats & Seafood</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/breakfast.svg" className="img-fluid" alt="Breakfast" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Breakfast</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/frozen.svg" className="img-fluid" alt="Frozen Foods" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Frozen Foods</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/milk.svg" className="img-fluid" alt="Milk & Dairies" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Milk & Dairies</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/pet.svg" className="img-fluid" alt="Pet Food" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Pet Food</h6>
                  </a>
                </div>

                {/* Repeat the same items to ensure a smooth loop */}
                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/vegetable.svg" className="img-fluid" alt="Vegetables & Fruit" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Vegetables & Fruit</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/cup.svg" className="img-fluid" alt="Beverages" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Beverages</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/meats.svg" className="img-fluid" alt="Meats & Seafood" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Meats & Seafood</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/breakfast.svg" className="img-fluid" alt="Breakfast" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Breakfast</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/frozen.svg" className="img-fluid" alt="Frozen Foods" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Frozen Foods</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/milk.svg" className="img-fluid" alt="Milk & Dairies" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Milk & Dairies</h6>
                  </a>
                </div>

                <div className="dashboard-category">
                  <a href="" className="category-image">
                    <img src="assets/svg/pet.svg" className="img-fluid" alt="Pet Food" />
                  </a>
                  <a href="" className="category-name">
                    <h6>Pet Food</h6>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Arrow Button */}
            <button className="scroll-button right" onClick={scrollRight}>
              <span>&#10095;</span> {/* Right Arrow Icon */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrool;
