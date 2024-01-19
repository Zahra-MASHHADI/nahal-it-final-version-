import React, { useEffect, useState } from 'react';
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment-jalaali';
import { updateUserInfo } from '../../../../features/userPanel/action';
import { choiceRecruitment } from '../../../../features/dashboard/action';

function EmployeeDetails({ setShowDetails , showDetails }) {
    const loading = useSelector(state => state.userPanel.isLoading);
    let loginDate = showDetails.created_at;
    let updateDate = showDetails.updated_at;
    const dispatch = useDispatch();
 
    loginDate = moment(loginDate, 'YYYY/MM/DD HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss');
    updateDate = moment(updateDate, 'YYYY/MM/DD HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss');

    function acceptRecruitment(item){
        dispatch(choiceRecruitment({ user:showDetails.user_id ,status:item }))
    }
  return (
    <div className='p-3 sm:p-10 w-full flex justify-center'>
    <div className='w-full 2xl:w-[70%] rounded-md bg-[#ffffffc9] flex flex-col gap-8 py-5 px-3'>
        <div className='pb-3 flex items-center justify-between' style={{borderBottom:'solid 1px black'}}>
            <h1 className='font-semibold text-xl text-stone-800'>جزئیات</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>setShowDetails("")}/>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>نام:</span>
            <span className='pr-5'>{ showDetails.first_name }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>نام خانوادگی:</span>
            <span className='pr-5'>{ showDetails.last_name }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>تاریخ تولد:</span>
            <span className='pr-5'>{ showDetails.birthday }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>نام کاربری:</span>
            <span className='pr-5'>{ showDetails.username }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>شماره موبایل:</span>
            <span className='pr-5'>{ showDetails.mobile }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>ایمیل:</span>
            <span className='pr-5'>{ showDetails.email }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>تحصیلات:</span>
            <span className='pr-5'>{ showDetails.eduction_status }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>فعالیتها:</span>
            <span className='pr-5'>{ showDetails.activity }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>شماره کارت:</span>
            <span className='pr-5'>{ showDetails.card_number }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>کد ملی:</span>
            <span className='pr-5'>{ showDetails.code_meli }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]' > آدرس :  </span>
            <span className='pr-5'>{ showDetails.address }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>تاریخ ورود:</span>
            <span className='pr-5 font-[shabnamBold]'>{loginDate}</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>تاریخ ویرایش:</span>
            <span className='pr-5 font-[shabnamBold]'>{updateDate}</span>
        </div>
        <div className='flex gap-2'>
        <span className='font-semibold text-[#2e424a]'>فعالیتها</span>
            <span className='pr-5'>{ showDetails.activity }</span>
        </div>
        <div className='flex gap-2'>
        <span className='font-semibold text-[#2e424a]'>تحصیلات</span>
            <span className='pr-5'>{ showDetails.eduction_status }</span>
        </div>
        <div className='flex gap-2'>
        <span className='font-semibold text-[#2e424a]'>آدرس</span>
            <span className='pr-5'>{ showDetails.address }</span>
        </div>
        <div>
        <div onClick={() => acceptRecruitment('accepted')} className="button text-[#fff] bg-[#57C053] 2xl:w-[20%] text-center p-2 rounded-md cursor-pointer"> تایید برای استخدام </div>
        </div>
        <div>
        <div onClick={() => acceptRecruitment('rejected')} className="button text-[#fff] bg-rose-700 2xl:w-[20%] text-center p-2 rounded-md cursor-pointer"> عدم تایید برای استخدام </div>
        </div>
    </div>
   
</div>
  )
}

export default EmployeeDetails;