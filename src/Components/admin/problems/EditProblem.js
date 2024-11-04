import { useEffect, useState } from "react"
import { Link,useParams, useNavigate} from "react-router-dom"

import { db } from "../../../Firebase";
import { toast } from "react-toastify";
import { doc, collection, getDoc, onSnapshot, orderBy, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { ClipLoader } from "react-spinners";
export default function EditProblem(){
    const [technology,settechnology]=useState("")
  const [title,settitle]=useState("")
  const [description,setdescription]=useState("")
  const [themeTitle,setThemeTitle]=useState("")
  const [departmentName,setDepartmentName]=useState("")
  const [designation,setdesignation]=useState("")
  const [experts,setexperts]=useState("")
  const [allTheme,setAllTheme]=useState([])
  const [load,setLoad]=useState(true)
   const [previousImage,setPreviousImage]=useState("")
   const {id}=useParams()
   useEffect(()=>{
    const que=query(collection(db,"theme"), where("status","==",true),orderBy("themeTitle","asc"))
    onSnapshot(que, doc=>{
        setAllTheme(doc.docs.map((el,index)=>{
            return {id:el.id, data:el.data()}
        }))
        setTimeout(()=>{
            setLoad(false)
        },500)
    })
   },[])
   let technologies=["Web","AI/ML/DS", "App","IOT","ML","Data Science","Hardware"]
   useEffect(()=>{
       getData()
   },[])
   const getData=async ()=>{
       let docRef=doc(db,"problem",id)
       let data=await getDoc(docRef)
       if(data.exists()){
           let finalData=data.data() 
           setThemeTitle(finalData.themeTitle)
           setdescription(finalData.description)
           settitle(finalData.title)
           setexperts(finalData.experts)
           setDepartmentName(finalData.departmentName)
           setdesignation(finalData.designation)
           settechnology(finalData.technology)
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
//    useEffect(()=>{
//     const que=query(collection(db,"theme"),orderBy("themeTitle","asc"))
//     onSnapshot(que, doc=>{
//         setAllTheme(doc.docs.map((el,index)=>{
//             return {id:el.id, data:el.data()}
//         }))
//         setTimeout(()=>{
//             setLoad(false)
//         },500)
//     })
//    },[])
  
   const handleForm=async (e)=>{
    e.preventDefault()
    try{
        let data={
            title:title,
            description:description,
            designation:designation,
            departmentName:departmentName,
            technology:technology,
            description:description,
            themeTitle:themeTitle,
            experts:experts,
        }
       
        await updateDoc(doc(db,"problem",id),data)
        toast.success("Data Updated")
        setTimeout(()=>{nav("/admin/manageproblem")},500)
    }
    catch(err){
        toast.error("Something went wrong")
        setTimeout(()=>{setLoad(false)},500)
    }
   }
  
    return(
        <>
             {/* Header Start */}
        <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Problem Statement</h2>
            <p>
              
            </p>
          </div>
          <div className="container-fluid  ">
            <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
            <div className={load==true?"d-none":"container bg-light  text-capitalize"}>
              <div className="row justify-content-center">
                <div className="col-xl-10">
                <div className="form p-5">
                  <h1 className='text-center text-danger pb-3'>Add Problem Statement</h1>
                  <form onSubmit={handleForm}>
                      <div className="row gx-4 gy-3">
                        <div className="col-md-6 ">
                          <label>Problem Statement</label>
                          <input required
                            type="text"
                            className="form-control bg-white border-0 py-3 px-4"
                            placeholder="Title" value={title} onChange={(e)=>{settitle(e.target.value)}}
                          />
                        </div>
                        <div className="col-md-6">
                        <label>Theme </label>
                        <select required className="form-control bg-white border-0 py-3 px-4" value={themeTitle} onChange={(e)=>{setThemeTitle(e.target.value)}}>
                          <option value={""} selected disabled>Choose Theme</option>
                          {allTheme?.map((el,index)=>(
                              <option key={index}>{el?.data?.themeTitle}</option>
                          ))}
                        </select>
                        </div>
                        </div>
                        <div className="row gx-4 gy-3 pt-3">
                        <div className="col-md-6">
                        <label>Department</label>
                          <input required
                            type="Company Name"
                            className="form-control bg-white border-0 py-3 px-4"
                            placeholder="Department Name" value={departmentName} onChange={(e)=>{setDepartmentName(e.target.value)}}
                          />
                        </div>
                      
                        <div className="col-md-6">
                        <label>Technology</label>
                          <select required className="form-control bg-white border-0 py-3 px-4" value={technology} onChange={(e)=>{settechnology(e.target.value)}}>
                            <option value={""} selected disabled>Choose Technology</option>
                            {technologies?.map((el,index)=>(
                                <option key={index}>{el}</option>
                            ))}
                          </select>
                        </div>
                       
                        <div className="col-md-6">
                        <label>Experts</label>
                          <input required
                            type="experts"
                            className="form-control bg-white border-0 py-3 px-4"
                            placeholder="Expert Name" value={experts} onChange={(e)=>{setexperts(e.target.value)}}
                          />
                        </div>
                        <div className="col-md-6">
                        <label>Expert's Designation</label>
                          <input required
                            type="designation"
                            className="form-control bg-white border-0 py-3 px-4"
                            placeholder="Expert Designation" value={designation} onChange={(e)=>{setdesignation(e.target.value)}}
                          />
                        </div>
                        
                        <div className="col-12">
                        <label>Description</label>
                          <textarea required
                            className="form-control bg-white border-0 py-3 px-4"
                            rows={7}
                            cols={10}
                            placeholder="Description" value={description} onChange={(e)=>{setdescription(e.target.value)}}
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <button
                            className="btn-hover-bg btn btn-danger text-light w-100 py-3 px-5"
                            type="submit"
                          >
                            Save
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