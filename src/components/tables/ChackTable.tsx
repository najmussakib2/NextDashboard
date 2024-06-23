import React from 'react';
import { Checkbox } from '@/components/ui/ChackBox';
const ChackTable = () => {
  return (
    <div>
      <table className='mx-10 flex flex-col gap-10 text-base text-[#2B3674] mt-6 font-bold mb-5'>
        <thead>
          <tr className='flex justify-center'>
          <th className=' text-gray-400 w-[25%]'>NAME</th>
          <th className='font-semibold text-gray-400 w-[25%]'>PROGRESS</th>
          <th className='font-semibold text-gray-400 w-[25%]'>QUANTITY</th>
          <th className='font-semibold text-gray-400 w-[25%]'>DATE</th>
          </tr>
        </thead>
        <tbody>
        <tr className='flex justify-center text-center hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
          <td className='flex items-center gap-2 w-[25%]'><Checkbox /> Horizon UI PRO</td>
          <td className=' w-[25%]'>17.5%</td>
          <td className=' w-[25%]'>2.458</td>
          <td className=' w-[25%]'>24.Jan.2021</td>
        </tr>
        <tr className='flex justify-center text-center hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
          <td className='flex items-center gap-2 w-[25%]'><Checkbox /> Horizon UI Free</td>
          <td className='w-[25%]'>10.8%</td>
          <td className='w-[25%]'>1.485</td>
          <td className='w-[25%]'>12.Jun.2021</td>
        </tr>
        <tr className='flex justify-center text-center hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
          <td className='flex items-center gap-2 w-[25%]'><Checkbox /> Weekly Update</td>
          <td className=' w-[25%]'>21.3%</td>
          <td className=' w-[25%]'>1.024</td>
          <td className=' w-[25%]'>5.Jan.2021</td>
        </tr>
        <tr className='flex justify-center text-center hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
          <td className='flex items-center gap-2 w-[25%]'><Checkbox /> Venus 3D Asset</td>
          <td className=' w-[25%]'>31.5%</td>
          <td className=' w-[25%]'>858</td>
          <td className=' w-[25%]'>7.Mar.2021</td>
        </tr>
        <tr className='flex justify-center text-center hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
          <td className='flex items-center gap-2 w-[25%]'><Checkbox />Marketplace</td>
          <td className=' w-[25%]'>12.2%</td>
          <td className=' w-[25%]'>258</td>
          <td className=' w-[25%]'>17.Dec.2021</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChackTable;