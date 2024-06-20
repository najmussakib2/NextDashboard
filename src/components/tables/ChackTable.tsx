import React from 'react';
import { Checkbox } from '@/components/ui/ChackBox';
const ChackTable = () => {
  return (
    <div>
      <div className='mx-10 flex flex-col gap-10 text-base text-[#2B3674] mt-6 font-bold mb-5'>
        <div className='flex gap-48'>
          <p className=' text-gray-400'>NAME</p>
          <p className='font-semibold text-gray-400'>PROGRESS</p>
          <p className='font-semibold text-gray-400'>QUANTITY</p>
          <p className='font-semibold text-gray-400'>DATE</p>
        </div>
        <div className='flex gap-6 hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
          <div className='flex items-center gap-2'><Checkbox /> Horizon UI PRO</div>
          <p className='mx-20'>17.5%</p>
          <p className='mx-32'>2.458</p>
          <p className='ml-10'>24.Jan.2021</p>
        </div>
        <div className='flex gap-6 hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
          <div className='flex items-center gap-2'><Checkbox /> Horizon UI Free</div>
          <p className='mx-20'>10.8%</p>
          <p className='mx-32'>1.485</p>
          <p className='ml-10'>12.Jun.2021</p>
        </div>
        <div className='flex gap-6 hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
          <div className='flex items-center gap-2'><Checkbox /> Weekly Update</div>
          <p className='mx-20'>21.3%</p>
          <p className='mx-32'>1.024</p>
          <p className='ml-12'>5.Jan.2021</p>
        </div>
        <div className='flex gap-6 hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
          <div className='flex items-center gap-2'><Checkbox /> Venus 3D Asset</div>
          <p className='mx-20'>31.5%</p>
          <p className='mx-32 pl-2'>858</p>
          <p className='ml-14'>7.Mar.2021</p>
        </div>
        <div className='flex gap-6 hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
          <div className='flex items-center gap-2'><Checkbox /> Marketplace</div>
          <p className='mx-24'>12.2%</p>
          <p className='mx-32'>258</p>
          <p className='ml-12'>17.Dec.2021</p>
        </div>
      </div>
    </div>
  );
};

export default ChackTable;