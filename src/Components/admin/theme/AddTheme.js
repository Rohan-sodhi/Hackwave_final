import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { db, storage } from "../../../Firebase"
import { ClipLoader } from "react-spinners";
export default function AddTheme(){
    const [themeTitle,setThemeTitle]=useState("")
    const [file,setFile]=useState({})
    const [fileName,setFileName]=useState("")
    const [url,setUrl]=useState("")
    const [load,setLoad]=useState(false)
    const saveData=async ()=>{
        try{
            let data={
              themeTitle:themeTitle,
              image:url,
              status:true,
              createdAt:Timestamp.now()
            }
            await addDoc(collection(db,"theme"),data)
            toast.success("Theme added successfully")
            setThemeTitle("")
            setFileName("")
            setFile({})
            setUrl("")
            setTimeout(()=>{
                setLoad(false)
            },500)
        }
        catch(err){
            toast.error("something went wrong!!")
            setTimeout(()=>{
                setLoad(false)
            },500)
        }
    }
    const handleForm=(e)=>{
        e.preventDefault()
        setLoad(true)
        if(!fileName){
            toast.error("Please upload image")
            return ;
        }
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
       useEffect(()=>{
        if(!!url){
            saveData()
        }
       },[url])
  
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Theme</h2>
            <p>
            </p>
          </div>
          <div className="container-fluid  ">
            <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
          
            <div className={load==true?"d-none":"container  text-capitalize"}>
              <div className="row justify-content-center">
                <div className="col-xl-6 bg-light">
                <div className="form p-5">
                  <h1 className='text-center text-danger pb-3'>Add Theme</h1>
                    <form onSubmit={handleForm}>
                        <div className="row gx-4 gy-3">
                            <label>Theme Title</label>
                            <div className="col-xl col-md">
                            <input
                                type="text"
                                className="form-control bg-white border-0 py-3 px-4"
                                placeholder="Title" value={themeTitle} onChange={(e)=>{setThemeTitle(e.target.value)}}
                                required
                            />
                            </div>
                        </div>
                        <div className="row gx-4 gy-3 pt-3">
                          <label>Logo</label>
                          <div className="col-xl-12">
                          <input
                              type="file"
                              className="form-control bg-white border-0 py-3 px-4"
                              placeholder="Category name" value={fileName} onChange={(e)=>{setFileName(e.target.value); setFile(e.target.files[0])}}
                              required
                          />
                          </div>
                        </div>
                        <div className="col-12 my-3">
                          <button
                            className="btn-hover-bg btn btn-danger text-light w-100 py-3 px-5"
                            type="submit"
                          >
                            Submit
                          </button>
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