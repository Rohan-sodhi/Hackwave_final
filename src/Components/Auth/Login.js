import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, db } from '../../Firebase'; // Adjust the path to where your firebase configuration is located
import { ClipLoader } from 'react-spinners';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load,setLoad]=useState(false)
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoad(true)
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredentials.user.uid;
      const docRef = doc(db, "user", userId);
      const docData = await getDoc(docRef);

      if (docData.exists()) {
        const userData = docData.data();
        if(userData.status==true){
        sessionStorage.setItem("userId", userId)
        sessionStorage.setItem("email",userData.email)
        sessionStorage.setItem("userType",userData.userType)
        sessionStorage.setItem("firstName", userData.firstname)
        sessionStorage.setItem("lastName", userData.lastname)
        if (userData.userType === 1) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }else{
        toast.error("Account Blocked. Contact admin!!")
      }
      } else {
        toast.error("No data found");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
    setTimeout(()=>{setLoad(false)},500)
  };

  return (
    <>
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Login</h2>
        <p>
          
        </p>
      </div>
    </div>
      <div className="container-fluid bg-light py-5 ">
        <div className="container-fluid bg-light py-5 hack">
          <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
          <div className={load==true?"d-none":"container  text-capitalize"}>
            <div className="row justify-content-center">
              <div className="col-xl-5">
                <div className="form p-5">
                  {/* <h1 className='text-center text-danger'>Login</h1> */}
                  <form onSubmit={handleLogin}>
                    <div className="row gx-4 gy-3">
                      <div className="col-xl-12">
                        <input
                          type="email"
                          className="form-control bg-white border-0 py-3 px-4"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-xl-12">
                        <input
                          type="password"
                          className="form-control bg-white border-0 py-3 px-4"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn-hover-bg btn btn-danger text-light w-100 py-3 px-5"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className='pt-3'>
                    Don't have an account?
                    <span className='text-danger'>
                      <Link to="/Register" className='text-primary'>Register</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Login End */}
      </div>
      </section>
    </>
  );
}
