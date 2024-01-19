import React, { useEffect } from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getWorkSample, getWorkSampleDetail, getworkSampleGalleries, getworkSampleGalleriesDetail } from "../../features/dashboard/action";
import { Link, useParams } from "react-router-dom";

const MotionGraphics = () => {
  const workSampleGalleries = useSelector(state=> state.dashboard.workSampleGalleriesDetail);
  const workSamples = useSelector(state=> state.dashboard.workSample);
  const dispatch = useDispatch();
  const workSample =useParams();
  useEffect(()=>{
    dispatch(getworkSampleGalleriesDetail(workSample.id));
    dispatch(getWorkSample());
    
    console.log(test)
    console.log(workSamples)
    console.log(workSample)
  
  },[])
  const test = workSamples.filter(item=>{return item.work_sample_category_id == workSample.id})
  return (
    <main>
      <Helmet>
        <title>
          {`نهال آی تی | ${workSample.name}`}
        </title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
          <Header />''
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className="bg-[#f5f5f9] w-full">
      <div className="z-0 container mx-auto">
        <div className="max-lg:px-20 w-full max-md:px-16 max-sm:px-0 mx-auto pt-14 mt-1 pb-24">
          <h2 className="font-[shabnamBold] text-2xl sm:text-4xl text-center text-green-137 px-0 pb-10 sm:px-12">   {workSample.name}</h2>
          <div className="flex flex-wrap gap-x-5 gap-y-12 max-sm:gap-y-4">
          <div className="pt-9 mb-12">
        <div className="container mx-auto flex flex-wrap">
            {test.map(item =>
              ( <div className=" gap-4 bg-[#cbf58d] rounded p-3 m-5 shadow-lg hover:shadow-2xl">
                <Link  to={`/${item.id}/${item.title}`} className="flex justify-center items-center flex-col gap-12" >
                  <div  className="bg-white rounded p-4 flex justify-center items-center flex-col gap-5">
                  <p className="text-xl">{item.title}</p>
                  <p>توضیحات : {item.description}</p>
                  </div>
                <button className="bg-green-137 cursor text-white rounded p-1 px-5 my-3 hover:bg-white hover:text-green-137 hover:border-1 hover:border-green-137 duration-75"> جزئیات  </button>
                </Link>
                </div>
           )
            )}
          
        </div>
      </div>
        </div>
        </div>
      </div>
      </div>
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default MotionGraphics;
