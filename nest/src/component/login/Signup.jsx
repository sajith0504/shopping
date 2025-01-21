import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    district: '',
    taluka: '',
  });

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
                          onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                        />
                        <button style={{ width: '30%' }}>Send OTP</button>
                        <label htmlFor="aadhaar">Aadhaar Number</label>
                      </div>
                    </div>

                    {/* Full Name Input */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control" id="fullname" placeholder="Full Name" />
                        <label htmlFor="fullname">Full Name</label>
                      </div>
                    </div>

                    {/* Pincode Input */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control" id="pincode" placeholder="Pincode" />
                        <label htmlFor="pincode">Pincode</label>
                      </div>
                    </div>

                    {/* Date of Birth Input */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input type="date" className="form-control" id="dob" placeholder="Date of Birth" />
                        <label htmlFor="dob">Date of Birth</label>
                      </div>
                    </div>

                    {/* Address Input */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control" id="address" placeholder="Address" />
                        <label htmlFor="address">Address</label>
                      </div>
                    </div>

                    {/* District Select */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <select
                          id="district"
                          className="form-control"
                          value={formData.district}
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
                          onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                        />
                        <label htmlFor="phonenumber">Phone Number</label>
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
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
                      <button className="btn btn-animation w-100" type="submit">
                        Sign Up
                      </button>
                    </div>
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
                  <a href="login.html">Log In</a>
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
