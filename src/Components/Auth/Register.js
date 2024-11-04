import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app, db } from "../../Firebase";
import { ClipLoader } from "react-spinners";

export default function Register(){
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [contact,setContact]=useState("")
  const [firstname,setFirstName]=useState("")
  const [qualification,setqualification]=useState("")
  const [lastname,setLastName]=useState("")
  const [college,setCollege]=useState("")
  const [load,setLoad]=useState(false)
  const nav=useNavigate()
  const saveData= async (userId)=>{
    setLoad(true)
    try{
    let data={
      firstname:firstname,
      lastname:lastname,
      email:email,
      contact:contact,
      qualification:qualification,
      college:college,
      userType:2,
      userId:userId,
      status:true,
      createdAt:Timestamp.now()
    }
    // to set the autoId of the document as per our need we will use setDoc
    await setDoc(doc(db,"user", userId),data)
    toast.success("User register successfully")
      sessionStorage.setItem("userId", userId)
      sessionStorage.setItem("email",data.email)
      sessionStorage.setItem("userType",data.userType)
      sessionStorage.setItem("firstName", data.firstname)
      sessionStorage.setItem("lastName", data.lastname)
      setTimeout(()=>{nav("/")},500)
  }catch(err){
    toast.error(err.message);
  }
    setTimeout(()=>{setLoad(false)},500)
  }
  const handleForm=(e)=>{
    e.preventDefault();
    const auth=getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentails)=>{
      let userId=userCredentails.user.uid
      saveData(userId)
    })
    .catch((err)=>{
      toast.error(err.message)
    })
  }
  const signUpgoogle=()=>{
    const provider=new GoogleAuthProvider()
    const auth=getAuth(app)
    signInWithPopup(auth,provider)
    .then((userCredentails)=>{
      console.log(userCredentails);
    }).catch((err)=>{
      toast.error(err.message)
    })

  }
    return(
        <>
        <div className="container-fluid bg-light py-5 hack">
          <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
          <div className={load==true?"d-none":"container  text-capitalize"}>
            <div className="row justify-content-center">
              <div className="col-xl-8">
              <div className="form p-5">
                <h1 className='text-center text-danger pb-3'>Registration</h1>
                <form onSubmit={handleForm} method="post">
                    <div className="row gx-4 gy-3">
                  
                      <div className="col-xl-6 col-md-6">
                      <label>First Name</label>
                        <input
                          type="text"
                          className="form-control bg-white border-0 py-3 px-4"
                          placeholder="First Name" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}}
                        />
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control bg-white border-0 py-3 px-4"
                          placeholder="Last Name" value={lastname} onChange={(e)=>{setLastName(e.target.value)}}
                        />
                      </div>
                      </div>

                      <div className="row gx-4 gy-3 pt-3">
                      
                      <div className="col-xl-6">
                      <label>Email</label>
                        <input
                          type="email"
                          className="form-control bg-white border-0 py-3 px-4"
                          placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}
                        />
                      </div>
                    
                      <div className="col-xl-6">
                      <label>Password</label>
                        <input
                          type="password"
                          className="form-control bg-white border-0 py-3 px-4"
                          placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}
                        />
                      </div>
                  
                      <div className="col-xl-6">
                      <label>Contact Number</label>
                        <input
                          type="text"
                          className="form-control bg-white border-0 py-3 px-4"
                          placeholder="Contact" value={contact} onChange={(e)=>{setContact(e.target.value)}} title="Enter valid Contact" pattern="[0-9]{10}"
                        />
                      </div>
                      
                      <div className="col-xl-6">
                      <label>Qualification</label>
                        <input
                          className="form-control bg-white border-0 py-3 px-4"
                          placeholder="Qualification" value={qualification} onChange={(e)=>{setqualification(e.target.value)}}
                          defaultValue={""}
                        />
                      </div>
                      <label>College/Univerisity</label>
                      <div className="col-12">
                        <input
                          className="form-control bg-white border-0 py-3 px-4"
                          placeholder="Enter College/University name" value={college} onChange={(e)=>{setCollege(e.target.value)}}
                          defaultValue={""}
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
                  <p className='pt-3'>Already have an account?<span className='text-primary'><Link to="/login" className="text-primary">Login</Link></span></p>
            </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}