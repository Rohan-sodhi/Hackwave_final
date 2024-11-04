import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../../../Firebase"
import { ClipLoader } from "react-spinners"
import { useParams } from "react-router-dom"
export default function ViewProblemStatement() {
    const [data,setData]=useState([])
    const [load,setLoad]=useState(true)
    const [allTheme,setAllTheme]=useState([])
    const [selectedTheme,setSelectedTheme]=useState("all")
    const [orderByDate,setOrderBy]=useState("desc")
    const param=useParams()
    const theme=param.theme
    useEffect(()=>{
      if(!!theme){
        setSelectedTheme(theme)
      }
    },[theme])
    useEffect(()=>{
      const que=query(collection(db,"theme")
      , where("status","==",true)
      ,orderBy("themeTitle","asc")
      )
      onSnapshot(que, doc=>{
          setAllTheme(
              doc.docs.map((el,index)=>{
                  return {id:el.id, data:el.data()} 
              })
          )
      })
      setTimeout(()=>{setLoad(false)},2500)
  },[])
    useEffect(()=>{
      if(selectedTheme=="all"){
        var que=query(collection(db,"problem")
        , where("status","==",true)
        ,orderBy("createdAt",orderByDate)
        )
        }else{
          var que=query(collection(db,"problem")
          , where("status","==",true),
            where("themeTitle","==",selectedTheme)
            ,orderBy("createdAt",orderByDate)
          )
        }
        onSnapshot(que, doc=>{
            setData(
                doc.docs.map((el,index)=>{
                    return {id:el.id, data:el.data()} 
                })
            )
        })
        setTimeout(()=>{setLoad(false)},500)
    },[selectedTheme, orderByDate])
    return(
        <>
  {/* ======= Our Services Section ======= */}
  <section id="services" className="services sections-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Problem Statements</h2>
        <p>
          Here are the problem statements given by various organisations.
        </p>
      </div>
      <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
      <div className={load==true?"d-none":"container bg-light  text-capitalize"}>
        <div className="row py-3 justify-content-between gy-4" data-aos="fade-up" data-aos-delay={100} >
          <div className="col-md-3">
            <label>Change Theme</label>
            <select value={selectedTheme} onChange={(e)=>{setSelectedTheme(e.target.value)}} className="form-control">
              <option value={"all"} selected>All</option>
              {allTheme?.map((el,index)=>(
                <option key={index}>{el?.data?.themeTitle}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <label>Order By</label>
            <select value={orderByDate} onChange={(e)=>{setOrderBy(e.target.value)}} className="form-control">
              <option value={"desc"} selected>Newest First</option>
              <option value={"asc"} selected>Oldest First</option>
              
            </select>
          </div>
        </div>
        <div className="row gy-4 " data-aos="fade-up" data-aos-delay={100}>
          {data?.length>0 ?
          data?.map((el,index)=>(
          <div className="col-lg-12 text-capitalize col-md-12" key={index}>
            <div className="service-item  position-relative">
              <h4>{el?.data?.title}</h4>
              <p>
              {el?.data?.description}
              </p>
              <div className="d-flex justify-content-between ">
                <div className="text-danger">Theme: {el?.data?.themeTitle}</div>
                <div className="text-danger">Technology: {el?.data?.technology}</div>
              </div>
              <hr/>
              <h5>Expert: Ms/Mr. {el?.data?.experts}, {el?.data?.designation}, {el?.data?.departmentName}</h5>
            </div>
          </div>
          )) :
          <h1>No Data Found!!</h1>  
          }
        </div>
      </div>
    </div>
  </section>
  {/* End Our Services Section */}


        </>
    )
}