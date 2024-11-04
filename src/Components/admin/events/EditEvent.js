import {doc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams} from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { toast } from "react-toastify";
import { db, storage} from "../../../Firebase";
import { ClipLoader } from "react-spinners";
export default function EditEvent(){
  const [eventtitle,seteventtitle]=useState("")
  const [eventdate,seteventdate]=useState("")
  const [details,setdetails]=useState("")
  const [venue,setvenue]=useState("")
  const [time,settime]=useState("")
  const [noofslots,setnoofslots]=useState("")
  const [sponsors,setsponsors]=useState("")
  const [regDate, setRegDate]=useState("")
  const [file,setFile]=useState({})
   const [fileName,setFileName]=useState("")
   const [url,setUrl]=useState("")
  const [load,setLoad]=useState(false)
  const [previousImage,setPreviousImage]=useState("")
    const {id}=useParams()
    useEffect(()=>{
        getData()
    },[])
    const getData=async ()=>{
        let docRef=doc(db,"event",id)
        let data=await getDoc(docRef)
        if(data.exists()){
            let finalData=data.data() 
            setdetails(finalData.details)
            seteventdate(finalData.eventdate)
            seteventtitle(finalData.eventtitle)
            setnoofslots(finalData.noofslots)
            setRegDate(finalData.regDate)
            setsponsors(finalData.sponsors)
            settime(finalData.time)
            setvenue(finalData.venue)
            setPreviousImage(finalData.image)
            setTimeout(()=>{
                setLoad(false)
            },500)
        }else{
            toast.error("No data found")
            setTimeout(()=>{
                setLoad(false)
              },500)
        }
       }
       const nav=useNavigate()
  const saveData= async ()=>{
    
    setLoad(true)
    try{
    let data={
      eventtitle:eventtitle,
      eventdate:eventdate,
      details:details,
      venue:venue,
      regDate:regDate,
      time:time,
      noofslots:noofslots,
      sponsors:sponsors,
    }
    if(!!url){
        data.image=url
    }
    // to set the autoId of the document as per our need we will use setDoc
    await updateDoc(doc(db,"event",id),data)
    toast.success("Event Added Successfully")
    setTimeout(()=>{nav("/admin/manageEvent")},500)
  }catch(err){
    toast.error(err.message);
  }
  }
  const handleForm=(e)=>{
    e.preventDefault()
    setLoad(true)
    let currentDate=new Date()
    let selectedDate=new Date(eventdate)
    let lastDate=new Date(regDate)
    if(selectedDate<=currentDate){
      toast.error("Kindly choose upcoming date!")
      return;
    }
     if(lastDate>=selectedDate || lastDate<=currentDate){
      toast.error("Please enter valid last date for registration")
      return;
    }
     if(!fileName){
        saveData()
    }else{

    const storageRef = ref(storage, 'theme_images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
    (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case 'paused':
            console.log('Upload is paused');
            break;
        case 'running':
            console.log('Upload is running');
            break;
        }
    }, 
    (error) => {
        toast.error("something went wrong", error.code)
        
    }, 
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        setUrl(downloadURL)
        });
    }
  
);
    }
    
   }
   useEffect(()=>{
    if(!!url){
        saveData()
    }
   },[url])
  return (
    <>
        {/* Header Start */}
        <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Events</h2>
            <p>
            </p>
          </div>
          
            <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
          
            <div className={load==true?"d-none":"container bg-light text-capitalize"}>
              <div className="container bg-light py-5">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                  <div className="form p-5">
                    <h1 className='text-center text-danger pb-3'>Add Event</h1>
                    <form onSubmit={handleForm}>
                        <div className="row gx-4 gy-3">
                          <div className=" col-md-6">
                            <label>Event Title</label>
                            <input
                              type="text"
                              className="form-control bg-white border-0 py-3 px-4"
                              placeholder="Event Title" value={eventtitle} onChange={(e)=>{seteventtitle(e.target.value)}}
                            />
                          </div>
                          <div className="col-md-6">
                              <label>Banner Image</label>
                              <input
                                type="file"
                                className="form-control bg-white border-0 py-3 px-4"
                                placeholder="Banner Image" value={fileName} onChange={(e)=>{setFileName(e.target.value); setFile(e.target.files[0])}}
                              />
                            </div>
                        
                          </div>
                          <div className="row gx-4 gy-3 pt-3">
                    
                            <div className="col-md-6">
                              <label>Venue</label>
                              <input
                                type="text"
                                className="form-control bg-white border-0 py-3 px-4"
                                placeholder="Venue" value={venue} onChange={(e)=>{setvenue(e.target.value)}}
                              />
                            </div>
                            <div className="col-md-6">
                            <label>Sponsors</label>
                            <input
                              type="text"
                              className="form-control bg-white border-0 py-3 px-4"
                              placeholder="Sponsors" value={sponsors} onChange={(e)=>{setsponsors(e.target.value)}}
                            />
                          </div>
                            <div className="col-md-6">
                            <label>Event Date</label>
                            <input
                              type="date"
                              className="form-control bg-white border-0 py-3 px-4"
                              placeholder="Event Date" value={eventdate} onChange={(e)=>{seteventdate(e.target.value)}}
                            />
                          </div>
                            <div className="col-md-6">
                              <label>Time</label>
                              <input
                                type="time"
                                className="form-control bg-white border-0 py-3 px-4"
                                placeholder="Time" value={time} onChange={(e)=>{settime(e.target.value)}}
                              />
                            </div>
                         
                          <div className="col-md-6">
                            <label>Last Date of Registration</label>
                            <input
                              type="date"
                              className="form-control bg-white border-0 py-3 px-4"
                              placeholder="Enter last date of Registration" value={regDate} onChange={(e)=>{setRegDate(e.target.value)}}
                            />
                          </div>
                          <div className="col-md-6">
                            <label>No of Slots</label>
                            <input
                              type="Number" min={0}
                              className="form-control bg-white border-0 py-3 px-4"
                              placeholder="No of Slots" value={noofslots} onChange={(e)=>{setnoofslots(e.target.value)}}
                            />
                          </div>
                          <div className="col-md-12">
                              <label>Details</label>
                              <textarea
                                type="Details about Event"
                                className="form-control bg-white border-0 py-3 px-4"
                                placeholder="Details" value={details} onChange={(e)=>{setdetails(e.target.value)}}
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
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )

}