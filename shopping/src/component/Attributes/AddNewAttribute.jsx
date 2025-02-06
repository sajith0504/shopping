import axios from "axios";
import React,{useState} from 'react'
import Sidebar from '../Admin/Sidebar'

const AddNewAttribute = () => {
  const [attributeName, setAttributeName] = useState("");
  const [values, setValues] = useState([""]); // Initial value
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // Add new attribute value field
  const addValue = () => setValues([...values, ""]);


  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Toggle the state to open/close the sidebar
};
  // Remove an attribute value field
  const removeValue = (index) => {
    setValues(values.filter((_, i) => i !== index));
  };

  // Handle attribute value change
  const handleValueChange = (index, newValue) => {
    const updatedValues = [...values];
    updatedValues[index] = newValue;
    setValues(updatedValues);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const attributeData = {
      name: attributeName,
      values: values.filter((v) => v.trim() !== ""), // Exclude empty values
    };

    try {
      const response = await axios.post("http://localhost:3000/api/add-attribute", attributeData, {
        headers: {
          "Content-Type": "application/json", // Correct content type
        },
      });

      if (response.data.success) {
        alert("Attribute added successfully!");
        setAttributeName("");
        setValues([""]);
      } else {
        alert(`Failed to add attribute: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add Attribute.");
    }
    console.log("Attribute Submitted:", attributeData);
  };

  return (
<div>
<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
         <div className="page-body" style={{paddingTop:'100px',paddingLeft:isSidebarOpen ? '74px':'280px'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-xxl-8 col-lg-10 m-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Add Attribute</h5>
                    </div>

                    <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
                      {/* Attribute Name */}
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">Attribute Name</label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter attribute name (e.g., Size, Color)"
                            value={attributeName} // Bind to attributeName state
                            onChange={(e) => setAttributeName(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      {/* Attribute Values */}
                      <div className="mb-4 row align-items-start">
                        <label className="col-sm-3 col-form-label form-label-title">Attribute Values</label>
                        <div className="col-sm-9">
                          <div className="row g-sm-4 g-3">
                            {values.map((value, index) => (
                              <div key={index} className="d-flex align-items-center mb-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Enter value"
                                  value={value} // Bind to individual value in values array
                                  onChange={(e) => handleValueChange(index, e.target.value)}
                                  required
                                />
                                {values.length > 1 && (
                                  <button
                                    type="button"
                                    className="btn text-danger ms-2"
                                    onClick={() => removeValue(index)}
                                  >
                                    ✕
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                          <button type="button" className="btn btn-secondary mt-2" onClick={addValue}>
                            + Add Value
                          </button>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button type="submit" className="btn ms-auto theme-bg-color text-white">
                        Add Attribute
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default AddNewAttribute;
