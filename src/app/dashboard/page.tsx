import ChartCompo from '@/components/Chart';
import ToggleButton from '@/components/ToggleButton';
import { BellOutlined, CalendarOutlined, CheckCircleFilled, InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { BarChart2, CircleCheckBig, Files } from 'lucide-react';
import Image from 'next/image';


const DashboardPage = () => {

    return (
        <div className=''>
            <Breadcrumb items={[{ title: 'pages' }, { title: <a href="/dashboard">Dashboard</a> }]} />
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-[#2B3674]'>Main Dashboard</h1>
                <div className='p-2  bg-white flex gap-3 items-center rounded-full'>
                    <div className='bg-[#F4F7FE] rounded-full w-44 flex justify-center items-center'>
                        <SearchOutlined className='w-14 pl-3' />
                        <input type="text" className='bg-[#F4F7FE] py-1 overflow-hidden rounded-e-full' name="" id="" />
                    </div>

                    <BellOutlined className='text-lg' style={{ color: "#b4bad4" }} />
                    <ToggleButton />
                    <InfoCircleOutlined className='text-lg' style={{ color: "#b4bad4" }} />
                    <Image alt='avatar' className='rounded-full' width={30} height={30} src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}></Image>
                </div>
            </div>
            <section className='grid grid-cols-6 gap-5 my-5 justify-center'>
                <div className='bg-white shadow p-4 flex gap-2 rounded-3xl  items-center'>
                    <div className='font-bold text-[#4318FF] p-5 text-2xl rounded-full bg-[#F4F7FE]'>
                        <BarChart2 />
                    </div>
                    <div className='flex flex-col gap-2'><p className='text-xs text-gray-400'>Earnings</p><h1 className='font-bold text-xl'>$350.4</h1></div>
                </div>
                <div className='bg-white shadow p-4 flex gap-2 items-center rounded-3xl'><p className=' text-[#4318FF] px-6 py-4 text-2xl rounded-full bg-[#F4F7FE]'>$</p>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xs text-gray-400'>Spend this month</p>
                        <h1 className='font-bold text-xl'>$642.39</h1>
                    </div>
                </div>
                <div className='bg-white shadow p-4 flex flex-col gap-2 rounded-3xl'>
                    <p className='text-xs text-gray-400'>Sales</p><h1 className='font-bold text-xl'>$574.34</h1><p className='text-xs text-gray-400'><span className='text-sm font-bold text-green-600'>+23%</span> since last month
                    </p>
                </div>
                <div className='bg-white shadow p-4 flex gap-2 rounded-3xl items-center justify-between'>
                    <div><p className='text-xs text-gray-400'>Your balance</p><h1 className='font-bold text-xl'>$1,000</h1></div>
                    <Image src='/america.jpeg' alt='avatar' className='h-[60px] rounded-full mr-5' width={60} height={80}></Image>
                </div>
                <div className='bg-white shadow p-4 flex gap-4 items-center rounded-3xl'><div className='p-5 rounded-full bg-gradient-to-r from-[#4481EB] to-[#04BEFE]'><CircleCheckBig className='text-white' /></div><div><p className='font-semibold text-xl text-gray-400'>New Tasks</p><h1 className='font-bold text-xl '>154</h1></div></div>
                <div className='bg-white shadow p-4 flex gap-2 rounded-3xl items-center'><div className='font-bold text-[#4318FF] p-5 text-2xl rounded-full bg-[#F4F7FE]'><Files color="#4318FF" /></div><div><p className='text-gray-400 font-semibold'>Total Projects</p><h1 className='font-bold text-xl'>2935</h1></div></div>

            </section>
            <section className='grid grid-cols-2 gap-5 '>
                <div className='bg-white rounded-3xl  p-3'>
                    <div className='rounded-3xl flex justify-between'>
                        <h1 className='bg-gray-200 p-2 rounded-md'><CalendarOutlined /> This Mounth</h1>
                        <div className='font-bold text-[#4318FF] p-2 text-2xl rounded-2xl bg-[#F4F7FE]'>
                            <BarChart2 />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='mt-8'>
                            <h1 className='text-3xl font-bold'>$37.5K</h1>
                            <p className='text-gray-400 font-semibold mb-5'>Total Spent <span className='text-green-400'>+2.45%</span></p>
                            <p className='text-[16px] font-semibold text-[#05CD99]'><CheckCircleFilled /> On track</p>
                        </div>
                        <div>
                            <ChartCompo />
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-3xl'>hekko</div>
            </section>
        </div>
    );
};

export default DashboardPage;


