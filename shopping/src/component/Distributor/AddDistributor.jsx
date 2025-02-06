import React, { useState, useEffect } from "react";
import Sidebar from "../Admin/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddDistributor = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState({ id: null, role: "" });
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    district: "",
    taluka: "",
    pincode: "",
    password: "",
    role: "distributor",
    referralId: "",
  });
  const navigate = useNavigate();  // Initialize useNavigate for redirecting

  // Fetch Logged-in User ID & Role from localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("id");
    const userRole = localStorage.getItem("role");

    // If token, role, and id exist in localStorage
    if (token && userId && userRole) {
      setLoggedInUser({ id: userId, role: userRole });
    } else {
      navigate("/");  // Redirect to login page if no token or user data
    }
  }, [navigate]);

  // Set referralId if the logged-in user is a distributor
  useEffect(() => {
    if (loggedInUser.role === "Superadmin" || loggedInUser.role === "admin" )
        {
      setFormData((prevFormData) => ({
        ...prevFormData,
        referralId: loggedInUser.id,
      }));
    }
  }, [loggedInUser]);
  

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Admin Data:", formData);
  
    // Check if the logged-in user is a Superadmin (allow only Superadmin to add Admins)
    if (loggedInUser.role === "Superadmin" || loggedInUser.role === "admin" ) {
      try {
        // Send the form data to the backend
        const response = await axios.post('http://localhost:3000/retailers/submit-retailer', formData);
             
        // Check if the response status is 201 (Created)
        if (response.status === 201) {
          alert(response.data.message); // Show success message from the response
  
          // Optionally, navigate to another page after the form submission
          navigate("/adddistributor"); // Update with the desired path
        } else {
          alert("Error: Failed to add distributor.");
        }
      } catch (error) {
        if (error.response) {
          // Server responded with an error (status code outside 2xx range)
          console.error("Error response:", error.response.data);
          alert(`Error: ${error.response.data.message}`);
        } else if (error.request) {
          // Request was made, but no response received
          console.error("Error request:", error.request);
          alert("No response received from server.");
        } else {
          // Something happened in setting up the request
          console.error("Error message:", error.message);
          alert(`Error: ${error.message}`);
        }
      }
    } else {
      alert("You do not have permission to add a Retailer.");
    }
  
    // Reset form after submission
    setFormData({
      name: "",
      number: "",
      address: "",
      district: "",
      taluka: "",
      pincode: "",
      password: "",
      role: "distributor",
      referralId: loggedInUser.id,
    });
  };
  // Talukas for each district
  const districtToTalukas = {
    chennai: ["Alandur", "Ambattur", "Aminjikarai", "Ayanavaram", "Egmore", "Guindy", "Madhavaram", "Madhuravoyal", "Mambalam", "Mylapore", "Perambur", "Purasavakkam", "Sholinganallur", "Thiruvottriyur", "Tondiarpet", "Velacherry"],
    Coimbatore: ["Aanaimalai", "Annur", "Coimbatore(North)", "Coimbatore(South)", "Kinathukadavu", "Madukarai", "Mettupalayam", "Perur", "Pollachi", "Sulur", "Valparai"],
    Cuddalore: ["Cuddalore", "Bhuvanagiri", "Chidambaram", "Kattumannarkoil", "Kurinjipadi", "Panruti", "Srimushnam", "Thittakudi", "Veppur", "Virudhachalam"],
    Dharmapuri:['Dharmapuri'  ,'Harur'  , 'Karimangalam' ,    'Nallampalli' , 'Palacode'  ,'Pappireddipatti'  , 'Pennagaram'],
    Dindigul:['Atthur','Dindigul(East)','Dindigul (West)','Guziliyamparai', 'Kodaikanal', 'Natham', 'Nilakottai','Oddanchatram','Palani','Vedasandur'],
    Erode:['Erode','Anthiyur','Bhavani','Gobichettipalayam','Kodumudi', 'Modakurichi','Nambiyur','Perundurai','Sathiyamangalam','Thalavadi'],
    Kancheepuram:['Kancheepuram', 'Kundrathur',  'Sriperumbudur', 'Uthiramerur' ,'Walajabad'],
    Kanniyakumari:['Agasteeswaram',' Kalkulam','Killiyur','Thiruvatar','Thovalai','Vilavankodu'],
    Karur:['Karur','Aravakurichi',' Kadavur',' Krishnarayapuram','Kulithalai','Manmangalam','Pugalur'],
    Madurai:['Kallikudi',' Madurai (East)', 'Madurai (North)','Madurai (South)', 'Madurai (West)','  Melur', 'Peraiyur', 'Thirumangalam','Thiruparankundram','Usilampatti','Vadipatti'],
    Nagapattinam:['Nagapattinam','Kilvelur','Thirukkuvalai','Vedaranyam'],
    Namakkal:['Namakkal','Kholli Hills','Kumarapalayam','Mohanoor','Paramathi Velur',' Rasipuram','Senthamangalam','Tiruchengode'],
     Nilgiris:['Udagamandalam','Coonoor','Gudalur','Kothagiri','Kundah','Pandalur'],
     Perambalur:['Perambalur', 'Alathur','Kunnam','Veppanthattai'],
     Pudukottai:['Pudukottai', 'Alangudi', 'Aranthangi', 'Avudiyarkoil','Gandarvakottai','Iluppur','Karambakudi',  'Kulathur', 'Manamelkudi','Ponnamaravathi','Thirumayam','Viralimalai'],
     Ramanathapuram:['Ramanathapuram', 'Kadaladi', 'Kamuthi','Kezhakarai','Mudukulathur','Paramakudi','Rajasingamangalam', ' Rameswaram','Tiruvadanai'],
     Salem:['Salem','Attur','Edapadi','Gangavalli','Kadaiyampatti','Mettur','Omalur','Pethanayakanpalayam', 'Salem South', ' Salem West', 'Sankari',' Vazhapadi', 'Yercaud'],
     Sivagangai:['Sivagangai','Devakottai','Ilayankudi','Kalaiyarkovil','Karaikudi',' Manamadurai', 'Singampunari','Thirupuvanam','Tirupathur'],
     Thanjavur:[ 'Thanjavur','Boothalur','Kumbakonam','Orathanadu','Papanasam','Pattukottai','Peravurani','Thiruvaiyaru','Thiruvidaimaruthur', ],
     Theni:['Theni','Aandipatti','Bodinayakanur','Periyakulam','Uthamapalayam'],
     Thiruvallur:['Thiruvallur','Avadi','Gummidipoondi','Pallipattu','Ponneri', 'Poonamallee', 'R.K. Pet','Tiruthani','Uthukottai'],
     Thiruvannamalai:['Thiruvannamalai',' Arni','Chengam','Chetpet','Cheyyar','Jamunamarathur','Kalasapakkam','Kilpennathur','Polur',' Thandramet','Vandavasi','Vembakkam'],
     Thiruvarur:['Thiruvarur','Kodavasal','Koothanallur','Mannargudi','Nannilam','Needamangalam','Thiruthuraipoondi','Valangaiman'],
     Thoothukudi:['Thoothukudi','Eral','Ettayapuram','Kayathar','Kovilpatti','Ottapidaram','Sattankulam','Srivaikundam','Tiruchendur','Vilathikulam',],
     Tiruchirappalli:['Lalgudi','Manachanallur', ' Manapparai',' Marungapuri','  Musiri',' Srirangam','  Thottiam', 'Thuraiyur',' Tiruchirapalli (West)','Tiruchirappalli (East)','Tiruverumbur'],
     Tirunelveli:['Tirunelveli','Ambasamudram','Cheranmahadevi','Manur','Nanguneri','Palayamkottai','Radhapuram','Thisayanvilai'],
     Vellore:['Vellore','Aanikattu','Gudiyatham','K V Kuppam','Katpadi','Pernambut', ],
     Villupuram:['Villupuram','Gingee','Kandachipuram','Marakanam','Melmalaiyanur','Thiruvennainallur','Tindivanam','Vanur','Vikravandi'],
     Virudhunagar:['Virudhunagar','Aruppukottai','Kariyapatti','Rajapalayam','Sathur','Sivakasi','Srivilliputhur','Tiruchuli','Vembakottai','Watrap' ],
     Ariyalur:[' Ariyalur','Andimadam','Sendurai','Udaiyarpalayam' ],
     Krishnagiri:['Krishnagiri','Anjetty','Bargur','Hosur','Pochampalli','Sulagiri','Thenkanikottai','Uthangarai',],
     Tiruppur:['Avinashi','Dharapuram','Kangeyam','Madathukkulam','Oothukuli','Palladam','Tiruppur (North)','Tiruppur (South)','Udumalaipettai' ],
     Chengalpattu:['Chengalpattu','Cheyyur','Maduranthakam','Pallavaram','Tambaram','Thirukalukundram','Tiruporur','Vandalur',],
     Kallakurichi:['Kallakurichi','Chinnaselam','Kalvarayan Hills','Sankarapuram','Tirukoilur','Ulundurpet',],
     Ranipet:['Arakkonam','Arcot','Kalavai','Nemili','Sholingur','Walajah',],
     Tenkasi:[ 'Tenkasi','Alangulam','Kadayanallur','Sankarankovil','Shenkottai','Sivagiri','Thiruvengadam','Veerakeralampudur', ],
     Tirupathur:['Tirupathur','Ambur','Natrampalli','Vaniyambadi',],
     Mayiladuthurai:['Mayiladuthurai',' Kuthalam','Sirkali','Tharangambadi',],
  };

  const talukas = districtToTalukas[formData.district] || [];

// Check if the user has the right role to access this page
if (loggedInUser.role !== "Superadmin" && loggedInUser.role !== "admin" )
    {
    return <div>You do not have permission to access this page.</div>;  // Display permission error
}

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className="page-body"
        style={{
          paddingTop: "100px",
          paddingLeft: isSidebarOpen ? "74px" : "280px",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-8 m-auto">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-header-2">
                        <h5>Add Distributor</h5>
                      </div>
                      {/* Only show form for Superadmin */}
                      {loggedInUser.role === "Superadmin" || loggedInUser.role ==="admin"  ? (
                        <form
                        className="theme-form theme-form-2 mega-form"
                        onSubmit={handleSubmit}
                      >
                        <div className="mb-3 row align-items-center">
                          <label className="form-label-title col-sm-3 mb-0">
                            Name
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              placeholder="User Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        {/* Phone Number */}
                        <div className="mb-3 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Phone Number
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Address */}
                      <div className="mb-3 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Address
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="text"
                            name="address"
                            placeholder="Street Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* District */}
                      <div className="mb-3 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          District
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="form-control"
                            type="text"
                            name="district"
                            placeholder="District"
                            value={formData.district}
                            onChange={handleChange}
                          >
                            <option value="">Select a district</option>
                            {Object.keys(districtToTalukas).map(
                              (districtIndex) => (
                                <option
                                  key={districtIndex}
                                  value={districtIndex}
                                >
                                  {districtIndex}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>

                      {/* Taluk */}
                      <div className="mb-3 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Taluka
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="form-control"
                            type="text"
                            name="taluka"
                            placeholder="Taluka"
                            value={formData.taluka}
                            onChange={handleChange}
                          >
                            <option value="">Select Taluka</option>
                            {talukas.map((taluka, index) => (
                              <option key={index} value={taluka}>
                                {taluka}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Pin Code */}
                      <div className="mb-3 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Pin Code
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="text"
                            name="pincode"
                            placeholder="Pin Code"
                            value={formData.pincode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div className="mb-3 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          password
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="text"
                            name="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                        {/* Referral ID (Auto-filled) */}
                        <div className="mb-3 row align-items-center">
                          <label className="form-label-title col-sm-3 mb-0">Referral ID</label>
                          <div className="col-sm-9">
                            <input className="form-control" type="text" name="referralId" value={formData.referralId} readOnly />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Add Distributor
                          </button>
                        </div>
                      </form>
                      ) : (
                        <p className="text-danger text-center">
                          Only Superadmin can add Admins.
                        </p>
                      )}
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

export default AddDistributor;
