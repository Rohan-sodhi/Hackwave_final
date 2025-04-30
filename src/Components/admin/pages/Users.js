import { collection, onSnapshot, query, doc,updateDoc, orderBy, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import moment from "moment"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
export default function Users(){
    const [data,setData]=useState([])
    const [load,setLoad]=useState(true)
    useEffect(()=>{
        const que=query(collection(db,"user")
        , where("userType","!=",1)
        ,orderBy("createdAt","desc")
    )
        onSnapshot(que, doc=>{
            setData(
                doc.docs.map((el,index)=>{
                    return {id:el.id, data:el.data()} 
                })
            )
        })
        setTimeout(()=>{setLoad(false)},500)
    },[])
   
    const getDate=(date)=>{
        let date1=date?.toDate()?.toString()
        let newDate=moment(date1)?.format("Do MMM, YYYY")
        return newDate
      }
      const blockUser=async (id, status)=>{
        if(window.confirm(`You are about to ${status==true?"Unblock":"Block"} User?`)){
          setLoad(true)
          try{
            await updateDoc(doc(db,"user",id),{status:status})
            toast.success(`User ${status==true?"Unblocked":"Blocked"}  successfully`)
            setTimeout(()=>{
              setLoad(false)
            },1000)
          }
          catch(err){
            toast.error("Something went wrong")
            setTimeout(()=>{
              setLoad(false)
            },1000)
          }
        }
      }
    return(
        <>
          {/* Header Start */}
     <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      </div>
    </div>
    {/* Header End */}
    <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
       
       <div className={load==true?"d-none":"container my-5 table-responsive text-capitalize"}>
       <h1 className='text-center text-danger pb-3'>Manage Users</h1>
       <table className="table table-bordered table-hover table-striped">
                <thead className="table-dark">
                    <tr>
                        <td>Sno</td>
                        <td>Full Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                        <td>Qualification <br/> College/University</td>
                        <td>State</td>
                        <td>City</td>
                        <td>Status</td>
                        <td>Joined At</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    data?.length>0 ?
                    data?.map(
                        (el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.data?.firstname} {el?.data?.lastname}</td>
                                <td>{el?.data?.email}</td>
                                <td>{el?.data?.contact}</td>
                                <td>{el?.data?.qualification}- <br/>{el?.data?.college}</td>
                                <td>{el?.data?.State} <br/>{el?.data?.state}</td>
                                <td>{el?.data?.City} <br/>{el?.data?.city}</td>
                                <td>{el?.data?.status?"Active":"In-Active"}</td>
                                <td>{getDate(el?.data?.createdAt)}</td>
                                <td>
                                {el?.data?.status?
                                <button className="btn btn-outline-danger" onClick={
                                  ()=>{
                                    blockUser(el.id, false)
                                  }
                                }>
                                  Block
                                </button>
                                :
                                <button className="btn btn-outline-success" onClick={
                                    ()=>{
                                      blockUser(el.id, true)
                                    }
                                  }>
                                    Unblock
                                  </button>
                                }
                                </td> 
                            </tr>
                        )
                    )
                    :
                    <tr>
                        <td colSpan={9}>No Data found!!</td>
                    </tr>
                
                }
                </tbody>
            </table>
        </div>
        </>
    )
}