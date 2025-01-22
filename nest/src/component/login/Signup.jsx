import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios'

const Signup = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [requestId, setRequestId] = useState('');
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      pincode: '',
      phone: '',
      address: '',
      district: '',
      taluka: ''
      
  });
  

  const generateOrderId = () => `ORDER_${new Date().getTime()}`;

  const validateAadhaar = (number) => /^\d{12}$/.test(number);

  const sendOtp = async (e) => {
    e.preventDefault()
      if (!validateAadhaar(aadhaarNumber)) {
          setMessage('Invalid Aadhaar number. Please enter a 12-digit number.');
          return;
      }

      const generatedOrderId = generateOrderId();
      setOrderId(generatedOrderId);

      try {
          const response = await axios.post('http://localhost:3000/send-otp', {
              aadhaarNumber,
              orderid: generatedOrderId,
          });
          setRequestId(response.data.ref_id);
          setMessage('OTP sent to your registered mobile number.');
      } catch (error) {
          setMessage(error.response?.data?.message || 'Failed to send OTP. Please try again.');
      }
  };

  const verifyOtp = async (e) => {
    e.preventDefault()
      try {
          const response = await axios.post('http://localhost:3000/verify-otp', {
              otp,
              ref_id: requestId,
              orderid: orderId,
              aadhaar_number: aadhaarNumber,
          });

          const userDetails = response.data.data || {};
          setFormData({
              name: userDetails.name || '',
              pincode: userDetails.pincode || '',
              phone: userDetails.phone || '',
              address: userDetails.address || '',
              dist: userDetails.district || '',
             
              
          });

          setMessage('Aadhaar verification successful!');
          setIsOtpVerified(true); // OTP successfully verified

      } catch (error) {
          setMessage(error.response?.data?.message || 'Failed to verify OTP. Please try again.');
      }
  };

  const handleChange = (e) => {
    e.preventDefault()
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, pincode, phone, address, dob, district, taluka, password } = formData;

    if (!name || !pincode || !phone || !address ||  !district || !taluka || !password) {
        setMessage('Please fill all the fields.');
        return;
    }

    try {
        const response = await axios.post('http://localhost:3000/register', formData);
        if (response.status === 200) {
            setMessage('User registered successfully.');
            setFormData({
                name: '',
                pincode: '',
                phone: '',
                address: '',
                
                district: '',
                taluka: '',
                password: '',
            });
         
        }
    } catch (error) {
        setMessage(error.response?.data?.message || 'Error while registering user.');
    }
};


  const districtToTalukas = {
     chennai: ["Alandur", "Ambattur", "Aminjikarai", "Ayanavaram", "Egmore", "Guindy", "Madhavaram", "Madhuravoyal", "Mambalam", "Mylapore", "Perambur", "Purasavakkam", "Sholinganallur", "Thiruvottriyur", "Tondiarpet", "Velacherry"],
    Coimbatore: ["Aanaimalai", "Annur", "Coimbatore(North)", "Coimbatore(South)", "Kinathukadavu", "Madukarai", "Mettupalayam", "Perur", "Pollachi", "Sulur", "Valparai"],
    Cuddalore: ["Cuddalore", "Bhuvanagiri", "Chidambaram", "Kattumannarkoil", "Kurinjipadi", "Panruti", "Srimushnam", "Thittakudi", "Veppur", "Virudhachalam"],
    Dharmapuri:['Dharmapuri'	,'Harur'	,	'Karimangalam' ,		'Nallampalli'	,	'Palacode'	,'Pappireddipatti'	,	'Pennagaram'],
    Dindigul:['Atthur','Dindigul(East)','Dindigul (West)','Guziliyamparai',	'Kodaikanal',	'Natham',	'Nilakottai','Oddanchatram','Palani','Vedasandur'],
    Erodei:['Erode','Anthiyur','Bhavani','Gobichettipalayam','Kodumudi', 'Modakurichi','Nambiyur','Perundurai','Sathiyamangalam','Thalavadi'],
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

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      district: selectedDistrict,
      taluka: '', // Reset taluka when district changes
    }));
  };

  const handleTalukaChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      taluka: event.target.value,
    }));
  };

  const talukas = districtToTalukas[formData.district] || [];

  return (
    <div>
      <Header />

      {/* Breadcrumb Section Start */}
      <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain">
                <h2>Sign In</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="fa-solid fa-house"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Sign In</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Log in section start */}
      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img src="../assets/images/inner-page/sign-up.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To Fastkart</h3>
                  <h4>Create New Account</h4>
                </div>

                <div className="input-box">
                  <form className="row g-4">
                    {/* Aadhaar Number Input */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating" style={{ display: 'flex' }}>
                        <input
                          type="text"
                          className="form-control"
                          id="aadhaar"
                          placeholder="Aadhaar Number"
                          style={{ width: '70%' }}
                          inputMode="numeric"
                          pattern="\d*"
                          value={aadhaarNumber}
                          onChange={(e) => setAadhaarNumber(e.target.value)}
                        />
                        <button style={{ width: '30%',height:'50px',marginLeft:'5px' }} onClick={sendOtp}>Send OTP</button>
                        <label htmlFor="aadhaar">Aadhaar Number</label>
                      </div>
                    </div>
                    {requestId && !isOtpVerified && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button style={{marginTop:'7px'}} onClick={verifyOtp}>Verify OTP</button>
                </div>
            )}
            {message && <p>{message}</p>}

                    {/* Full Name Input */}
                    {isOtpVerified && (      <div>       <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input type="text" 
                        className="form-control" 
                        id="fullname" 
                        placeholder="Full Name"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                         />
                        <label htmlFor="fullname">Full Name</label>
                      </div>
                    </div>

                    {/* Pincode Input */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input type="text" 
                        className="form-control" 
                        id="pincode" 
                        placeholder="Pincode"
                        value={formData.pincode}
                        name="pincode"
                        onChange={handleChange} 
                        />
                        <label htmlFor="pincode">Pincode</label>
                      </div>
                    </div>

                    

                    {/* Address Input */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input type="text" 
                        className="form-control"
                         id="address" 
                         placeholder="Address"
                         value={formData.address}
                         name="address"
                         onChange={handleChange} />
                        <label htmlFor="address">Address</label>
                      </div>
                    </div>

                    {/* District Select */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <select
                        value={formData.district}
                        name="district"
                        
                          id="district"
                          className="form-control"
                          
                          onChange={handleDistrictChange}
                        //   style={{ padding: '8px', marginBottom: '10px', width: '50%' }}
                        >
                          <option value="">Select a District</option>
                          {Object.keys(districtToTalukas).map((district) => (
                            <option key={district} value={district}>
                              {district}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="district">District</label>
                      </div>
                    </div>

                    {/* Taluka Select */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <select
                          id="taluka"
                          className="form-control"
                          value={formData.taluka}
                          onChange={handleTalukaChange}
                        //   style={{ padding: '8px', marginBottom: '10px', width: '50%' }}
                        >
                          <option value="">Select Taluka</option>
                          {talukas.map((taluka, index) => (
                            <option key={index} value={taluka}>
                              {taluka}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="taluka">Taluka</label>
                      </div>
                    </div>

                    {/* Phone Number Input */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="phonenumber"
                          placeholder="Phone Number"
                          inputMode="numeric"
                          pattern="\d*"
                          value={formData.phone}
                          name="phone"
                          onChange={handleChange}
                          onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                        />
                        <label htmlFor="phonenumber">Phone Number</label>
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input type="password"
                         className="form-control"
                          id="password"
                           placeholder="Password"
                           value={formData.password}
                        name="password"
                        onChange={handleChange} />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="col-12">
                      <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input className="checkbox_animated check-box" type="checkbox" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            I agree with <span>Terms</span> and <span>Privacy</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Sign Up Button */}
                    <div className="col-12">
                      <button className="btn btn-animation w-100" type="submit"  onClick={handleSubmit}>
                        Sign Up
                      </button>
                      </div>  
                    
                    </div>
                    )}
                  </form>
                   
                        
                </div>
                        
                <div className="other-log-in">
                  <h6>or</h6>
                </div>

                <div className="log-in-button">
                  <ul>
                    <li>
                      <a href="https://accounts.google.com/signin" className="btn google-button w-100">
                        <img src="../assets/images/inner-page/google.png" alt="" /> Sign up with Google
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" className="btn google-button w-100">
                        <img src="../assets/images/inner-page/facebook.png" alt="" /> Sign up with Facebook
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sign-up-box">
                  <h4>Already have an account?</h4>
                  <Link to='/'>login</Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Log in section end */}

      <Footer />
    </div>
  );
};

export default Signup;
