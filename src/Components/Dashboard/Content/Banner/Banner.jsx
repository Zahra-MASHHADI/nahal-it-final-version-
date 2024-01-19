import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BannerPagination from './AllBannerPagination/AllBannerPagination';
import NewBanner from './NewBaner/NewBanner';


function Banner() {
    const [innerComponent,setInnerComponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.bannerSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerComponent(<BannerPagination/>);
            break;
            case 'new' : setInnerComponent(<NewBanner/>)
            break;
            default : setInnerComponent(<></>)
        }
    },[Criterion])

  return (
    <div className='container mx-auto h-full p-3 md:p-10 flex flex-col justify-between items-center'>
        {
            innerComponent
        }
    </div>
  )
}

export default Banner;