import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
export default function ViewEventDetails(){
    const [data,setData]=useState({})
    const [load,setLoad]=useState(true)
    const nav=useNavigate()
    const userId=sessionStorage.getItem("userId")
    const {id}=useParams()
    useEffect(()=>{
      getData()
    },[id])
    const getData=async ()=>{
      if(!!id){
        const docRef=doc(db,"event",id)
        const docData=await getDoc(docRef)
        if(docData.exists()){
         setData(docData.data())
  
        }else{
          toast.error("No Data found!!")
        }
        setTimeout(()=>{setLoad(false)},500)
      }
      else{
        toast.error("Please choose an event")
        nav("/event")
      }
    }

    const applyEvent=async ()=>{
        setLoad(true)
        
        if(!userId)
        {
            toast.error("Please Login")
            nav("/login")
        }else{
            try{
                let applyData={
                    userId:userId,
                    eventId:id,
                    eventTitle:data.eventtitle,
                    userFirstName:sessionStorage.getItem("firstName"),
                    userlastName:sessionStorage.getItem("lastName"),
                    userEmail:sessionStorage.getItem("email"),
                    status:1,
                    //1->pending, 2->approve, 3->decline
                    createdAt:Timestamp.now()
                }
                await addDoc(collection(db,"registration"),applyData)
                toast.success("Register Successfully")
                let updateData={
                    availableSlots:parseInt(data.availableSlots)-1
                }
                await updateDoc(doc(db,"event",id),updateData)
                nav("/myRegistration")
            }
            catch(err){
                console.log(err);
                
                toast.error("Something went wrong")
            }
            setTimeout(()=>{setLoad(false)},1500)
        }
    }
    return(
        <>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Events</h2>
                    <p>
                    </p>
                </div>
                
                    <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
                
                    <div className={load==true?"d-none":"container bg-light text-capitalize"}>
                        <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {/* Blog Details Section */}
                            <section id="blog-details" className="blog-details section">
                            <div className="container">
                                <article className="article">
                                <div className="post-img">
                                    <img
                                    src={data.image}
                                    alt=""
                                    className="img-fluid w-100"
                                    style={{height:"400px"}}
                                    />
                                </div>
                                <h2 className="title">
                                    {data.eventtitle}
                                </h2>
                                <div className="d-flex my-2 justify-content-between">
                                    <div>Total Slots: {data.noofslots}</div>
                                    <div className="text-danger">Available Slots: {data.availableSlots}</div>
                                </div>
                                <div className="d-flex my-2 justify-content-between">
                                    <div className="text-dark">Happening On : {data?.eventdate} 
                                        <i className="mx-1 bi bi-clock"></i>{data?.time}
                                    </div>
                                    <div className="text-danger">Last Date to Apply: {data?.regDate}</div>
                                </div>
                                <div>Venue : {data?.venue}</div>
                                {/* End meta top */}
                                <div className="content">
                                    <p className="my-4">
                                    {data.details}
                                    </p>
                                </div>
                                </article>
                            </div>
                       
                            <div className="container">
                                <div className="d-flex justify-content-between">
                                    <h4>Sponsored BY - {data.sponsors}</h4>
                                    {
                                         data.availableSlots>0 
                                        &&
                                        <button onClick={applyEvent} className="btn btn-outline-primary">Apply</button>
                                    }
                                </div>
                            </div>
                            </section>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}