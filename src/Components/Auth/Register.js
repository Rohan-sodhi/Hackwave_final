import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app, db } from "../../Firebase";
import { ClipLoader } from "react-spinners";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [firstname, setFirstName] = useState("");
  const [qualification, setqualification] = useState("");
  const [lastname, setLastName] = useState("");
  const [college, setCollege] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  const [filteredStates, setFilteredStates] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const nav = useNavigate();

  const stateCityMap = {
    "Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Delhi": ["New Delhi", "Dwarka", "Rohini"],
    "Karnataka": ["Bangalore", "Mysore", "Mangalore"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur"],
    "Kerala": ["Kochi", "Trivandrum", "Kozhikode"],
    "Haryana": ["Gurgaon", "Faridabad", "Panipat"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
    "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"]
  };

  const saveData = async (userId) => {
    setLoad(true);
    try {
      let data = {
        firstname,
        lastname,
        email,
        contact,
        qualification,
        college,
        state,
        city,
        userType: 2,
        userId,
        status: true,
        createdAt: Timestamp.now()
      };
      await setDoc(doc(db, "user", userId), data);
      toast.success("User registered successfully");
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("email", data.email);
      sessionStorage.setItem("userType", data.userType);
      sessionStorage.setItem("firstName", data.firstname);
      sessionStorage.setItem("lastName", data.lastname);
      setTimeout(() => { nav("/") }, 500);
    } catch (err) {
      toast.error(err.message);
    }
    setTimeout(() => { setLoad(false) }, 500);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentails) => {
        let userId = userCredentails.user.uid;
        saveData(userId);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const signUpgoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((userCredentails) => {
        console.log(userCredentails);
      }).catch((err) => {
        toast.error(err.message);
      });
  };

  const handleStateInput = (e) => {
    const value = e.target.value;
    setState(value);
    setShowStateDropdown(true);
    // Filter the states based on user input
    const matches = Object.keys(stateCityMap).filter(s =>
      s.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredStates(matches);
    // Reset city dropdown when state is changed
    setCity("");
    setFilteredCities([]); // Clear city options when state changes
  };

  const handleCityInput = (e) => {
    const value = e.target.value;
    setCity(value);
    setShowCityDropdown(true);
    // Get the cities of the selected state
    const cities = stateCityMap[state] || [];
    // Filter the cities based on user input
    const matches = cities.filter(c =>
      c.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCities(matches);
  };

  const handleStateSelection = (selectedState) => {
    setState(selectedState);
    setShowStateDropdown(false);
    setCity("");  // Reset city when state is selected
    setFilteredCities([]); // Reset city options when state is selected
  };

  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity);
    setShowCityDropdown(false);
  };

  return (
    <>
      <style>{`
        .dropdown-box {
          border: 1px solid #ccc;
          background: white;
          max-height: 150px;
          overflow-y: auto;
          position: absolute;
          width: 100%;
          z-index: 10;
          border-radius: 4px;
        }
        .dropdown-box div {
          padding: 8px 12px;
          cursor: pointer;
        }
        .dropdown-box div:hover {
          background-color: #007bff;
          color: white;
        }
        .position-relative { position: relative; }
      `}</style>

      <div className="container-fluid bg-light py-5 hack">
        <ClipLoader cssOverride={{ display: "block", margin: "10vh auto" }} loading={load} />
        <div className={load === true ? "d-none" : "container text-capitalize"}>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="form p-5">
                <h1 className='text-center text-danger pb-3'>Registration</h1>
                <form onSubmit={handleForm} method="post">
                  <div className="row gx-4 gy-3">
                    <div className="col-xl-6 col-md-6">
                      <label>First Name</label>
                      <input type="text" className="form-control bg-white border-0 py-3 px-4" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <label>Last Name</label>
                      <input type="text" className="form-control bg-white border-0 py-3 px-4" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                  </div>

                  <div className="row gx-4 gy-3 pt-3">
                    <div className="col-xl-6">
                      <label>Email</label>
                      <input type="email" className="form-control bg-white border-0 py-3 px-4" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-xl-6">
                      <label>Password</label>
                      <input type="password" className="form-control bg-white border-0 py-3 px-4" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-xl-6">
                      <label>Contact Number</label>
                      <input type="text" className="form-control bg-white border-0 py-3 px-4" value={contact} onChange={(e) => setContact(e.target.value)} title="Enter valid Contact" pattern="[0-9]{10}" />
                    </div>
                    <div className="col-xl-6">
                      <label>Qualification</label>
                      <input className="form-control bg-white border-0 py-3 px-4" value={qualification} onChange={(e) => setqualification(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <label>College/University</label>
                      <input className="form-control bg-white border-0 py-3 px-4" value={college} onChange={(e) => setCollege(e.target.value)} />
                    </div>

                    {/* Custom State Input */}
                    <div className="col-xl-6 pt-3 position-relative">
                      <label>State</label>
                      <input
                        className="form-control bg-white border-0 py-3 px-4"
                        placeholder="Enter State"
                        value={state}
                        onChange={handleStateInput}
                        onBlur={() => setTimeout(() => setShowStateDropdown(false), 200)}
                        onFocus={() => {
                          setShowStateDropdown(true);
                          handleStateInput({ target: { value: state } });
                        }}
                      />
                      {showStateDropdown && (
                        <div className="dropdown-box">
                          {filteredStates.map((s, index) => (
                            <div 
                              key={index} 
                              onMouseDown={(e) => {
                                e.preventDefault();
                                handleStateSelection(s);
                              }}
                              style={{ 
                                padding: '8px 12px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #eee'
                              }}
                            >
                              {s}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Custom City Input */}
                    <div className="col-xl-6 pt-3 position-relative">
                      <label>City</label>
                      <input
                        className="form-control bg-white border-0 py-3 px-4"
                        placeholder="Enter City"
                        value={city}
                        onChange={handleCityInput}
                        onBlur={() => setTimeout(() => setShowCityDropdown(false), 200)}
                        onFocus={() => {
                          setShowCityDropdown(true);
                          handleCityInput({ target: { value: city } });
                        }}
                        disabled={!state}
                      />
                      {showCityDropdown && (
                        <div className="dropdown-box">
                          {filteredCities.map((c, index) => (
                            <div 
                              key={index} 
                              onMouseDown={(e) => {
                                e.preventDefault();
                                handleCitySelection(c);
                              }}
                              style={{ 
                                padding: '8px 12px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #eee'
                              }}
                            >
                              {c}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="col-12 pt-4">
                      <button className="btn-hover-bg btn btn-danger text-light w-100 py-3 px-5" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <p className='pt-3'>Already have an account? <span className='text-primary'><Link to="/login" className="text-primary">Login</Link></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
